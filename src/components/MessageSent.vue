<template>
	<div class="cp-message-sent">
		<div class="cp-message-action">
			<span class="img-btn pointer message-sent-icon-btn"
				  @click="sendImageMessage">
			</span>
			<span class="file-btn pointer message-sent-icon-btn"
				  @click="sendFileMessage">
			</span>
			<el-popover
				placement="top"
				width="100"
				v-model="voiceVisible">
				<p style="text-align: center;
					      padding: 10px">正在录音...{{voiceTime}}s</p>
				<div style="text-align: center;
				 			margin: 0">
					<el-button
						size="mini"
						type="text"
						@click="stopRecord">取消</el-button>
					<el-button
						type="primary"
						size="mini"
						@click="sendRecord">发送</el-button>
				</div>
				<span class="record-btn pointer message-sent-icon-btn"
				   slot="reference"
				   @click="startRecord">
				</span>
			</el-popover>
			<span class="audio-btn pointer message-sent-icon-btn"
				  @click="makeCallVoice"
				  v-show="!isGroup">
			</span>
			<span class="audio-btn pointer message-sent-icon-btn"
				  @click="makeGroupCallVoice"
				  v-show="isGroup">
			</span>
			<!--<span class="video-btn pointer message-sent-icon-btn"-->
				  <!--@click="makeCallVideo"-->
				  <!--v-show="!isGroup">-->
			<!--</span>-->
			<span class="video-btn pointer message-sent-icon-btn"
				  @click="makeGroupCallVideo"
				  v-show="isGroup">
			</span>

			<span class="whiteboard-btn pointer message-sent-icon-btn"
				  @click="goWhiteboard">
			</span>

			<span class="share-screen-btn pointer message-sent-icon-btn"
				  @click="goShareScreen">
			</span>
		</div>
		<el-input
			type="textarea"
			@keyup.enter.native="sendMessage"
			placeholder="请输入内容"
			v-model="textMessage"
			maxlength="200">
		</el-input>
		<el-button
			@click="sendMessage"
			class="message-sent-btn"
			type="primary"
		>发送
		</el-button>
	</div>
</template>

<script>
	export default {
		name: "MessageSent",
		data() {
			return {
				textMessage: '',
				callService: window.cube.getCallService(),
				messageService: window.cube.getMessageService(),
				voiceTime: 0,
				voiceVisible: false,
				curVoiceMessage: null,
				showSelectMember: false,
			}
		},
		props: {
			messages: {},
			isGroup: false
		},
		computed: {},
		watch: {},
		beforeMount() {

		},
		mounted() {
			this.callServiceListener();
			this.$store.commit('closeEngineElement', 'showLocalVideo');
			this.$store.commit('closeEngineElement', 'showRemoteVideo');
		},
		methods: {
			startCount(){
				let startTime = 0;
				let task = (time) =>{
					if(0 == startTime){
						startTime = time;
					}
					this.voiceTime = parseInt((time - startTime) / 1000);
					if(this.voiceTime >= 60 || !this.voiceVisible){
						this.voiceTime = 0;
						return;
					}
					window.requestAnimationFrame(task);
				}
				window.requestAnimationFrame(task);
			},
			sendMessage() {
				let msg = this.textMessage;
				msg = msg.replace(/[\r\n\\ ]/g, "");

				if(msg != ''){
					this.messageService.sendMessage(this.$store.state.messagePeer + '', this.textMessage);
					this.textMessage = '';
					this.toTop();
				}else{
					this.textMessage = '';
					this.$message('发送内容不能为空，请输入内容')
					return;
				}

			},
			sendImageMessage() {
				let image = new CubeImageMessage(this.$store.state.messagePeer);
				image.chooseFile((file) => {
					this.messageService.sendMessage(this.$store.state.messagePeer + '', image);
				});
			},
			sendFileMessage() {
				let message = new CubeFileMessage(this.$store.state.messagePeer);
				message.chooseFile((file) => {
					let fileName = message.file.name;
					this.messageService.sendMessage(this.$store.state.messagePeer + '', message);
					let sendFile = {
						sn: message.sn,
						type: message.type,
						size: message.file.size,
						fileName: fileName,
						percentage: 0,
						sender: cube.accName
					}
					this.messages.push(sendFile);
					setTimeout(() => {
						let cell = document.getElementsByClassName('el-scrollbar__wrap')[2];
						cell.scrollTop = cell.scrollHeight;
					}, 0)
				});
			},
			startRecord() {
				this.curVoiceMessage = new CubeVoiceMessage(this.$store.state.messagePeer);
				this.voiceVisible = !this.voiceVisible;
				this.curVoiceMessage.startRecord((error) => {
					console.log('录制中');
					this.startCount();
					setTimeout(() => {
						if (this.curVoiceMessage) {
						   this.sendRecord();
						}
					}, 60000 - 500)
				})
			},
			stopRecord() {
				this.curVoiceMessage.stopRecord((error) => {
					this.curVoiceMessage = null;
					this.voiceVisible = !this.voiceVisible;
				})
			},
			sendRecord() {
				this.curVoiceMessage.stopRecord(() => {
					this.voiceVisible = !this.voiceVisible;
					this.messageService.sendMessage(this.$store.state.messagePeer + '', this.curVoiceMessage);
					setTimeout(() => {
						this.curVoiceMessage = null;
					}, 100);
				});
			},
			toTop() {
				let cell = document.getElementsByClassName('el-scrollbar__wrap')[1];
				setTimeout(() => {
					cell.scrollTop = 0;
				})
			},
			makeGroupCallVoice() {
				this.showSelectMember = true;
				this.$store.commit('updateInviteType', 'audioCall');
			},
			goWhiteboard() {
				this.showSelectMember = true;
				this.$store.commit('updateInviteType', 'whiteboard');
			},
			goShareScreen() {
				this.showSelectMember = true;
				this.$store.commit('updateInviteType', 'shareScreen');
			},
			makeGroupCallVideo() {
				this.showSelectMember = true;
				this.$store.commit('updateInviteType', 'groupVideo');
			},
			makeCallVideo() {
				this.$store.commit('updateInviteType', 'videoCallAlone')
				this.$store.commit('openEngineElement', 'showLocalVideo');
				this.$store.commit('openEngineElement', 'showRemoteVideo');
				this.callService.makeCall(this.$store.state.messagePeer, true);
			},
			makeCallVoice() {
				this.$store.commit('updateInviteType', 'audioCallAlone');
				this.callService.makeCall(this.$store.state.messagePeer, false);
			},
			terminateCall() {
				this.callService.terminateCall();
			},
			callServiceListener() {
				this.$bus.on('onCallEnded', (session, text) => {
					this.$store.commit('updateInviteType', '');
					this.$store.commit('closeEngineElement', 'showLocalVideo');
					this.$store.commit('closeEngineElement', 'showRemoteVideo');
					this.$message.info(text);
				});

				this.$bus.on('onCallFailed', (session, error) => {
					this.$store.commit('updateInviteType', '');
					this.$message.error(error.text);
				});
			},
		},
		beforeDestroy() {
			this.$bus.off('onCallEnded');
			this.$bus.off('onCallFailed');
		},
		components: {
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-message-sent {
		position: relative;
		height: 100%;
		.cp-message-action {
			position: absolute;
			width: 99%;
			top: 1px;
			background-color: $BG5;
			left: 1px;
			padding-bottom: 5px;
			z-index: 10;
			//border-bottom: 1px solid $BD1;
			.message-sent-icon-btn {
				margin: 10px 0 0 15px;
				font-size: 25px;
				width: 25px;
				height: 25px;
				display: inline-block;
				&:hover {
					color: $T2;
				}
			}
			.img-btn {
				background: url("./../assets/img/msg_chatimg_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatimg_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}

			.file-btn {
				background: url("./../assets/img/msg_chatfolder_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_boardfolder_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}

			.record-btn {
				background: url("./../assets/img/msg_chatvoice_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatvoice_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}

			.audio-btn {
				background: url("./../assets/img/msg_chatphone_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatphone_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}

			.video-btn {
				background: url("./../assets/img/msg_chatvideo_n.png") no-repeat;
				background-size: 24px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatvideo_s.png") no-repeat;
					background-size: 24px 20px;
				}
			}

			.whiteboard-btn {
				background: url("./../assets/img/msg_chatwhiteboard_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatwhiteboard_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}

			.share-screen-btn {
				background: url("./../assets/img/msg_chatshare_n.png") no-repeat;
				background-size: 20px 20px;
				&:hover {
					background: url("./../assets/img/msg_chatshare_s.png") no-repeat;
					background-size: 20px 20px;
				}
			}
		}
		.el-textarea__inner {
			width: 101%;
			height: 100%;
			box-sizing: border-box;
			padding: 50px 20px;
			overflow: hidden;
			border-left: 0px solid;
			border-bottom: 0px solid;
			border-right: 0px solid;
		}
		.message-sent-btn {
			position: absolute;
			bottom: 10px;
			right: 20px;
			z-index: 10;
		}
		.cp-ms-select-member {
			position: absolute;
			top: -500px;
			left: 10px;
		}
	}
</style>
