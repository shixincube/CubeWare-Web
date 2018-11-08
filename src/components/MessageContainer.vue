<template>
	<div class="cp-message-container">
		<div class="chat-header">
			<div class="chat-title-bar" @click="openDialog()">
				{{curInfo && curInfo.displayName ? curInfo.displayName : $store.state.messagePeer}}
			</div>
		</div>

		<div class="chat-left" :class="isGroup?'group':''" style="height: 94%; overflow: hidden;">
			<el-scrollbar class="message-area">
				<div class="cp-scan-more">
					<el-button class="message-more"
							   v-show="showMore"
							   @click="moreMessage"
							   type="text">查看更多消息
					</el-button>
				</div>
				<message-show
					v-for="item in messages"
					:index="item.sn.toString()"
					:key="item.sn"
					:message="item"
					:isGroup="isGroup"
				></message-show>
			</el-scrollbar>
			<div class="message-sent">
				<message-sent
					:messages=" messages "
					:isGroup="isGroup"></message-sent>
			</div>
		</div>

		<div v-show="isGroup" class="chat-right">
			<group-list  v-if="isGroup" :groupList="curInfo"></group-list>
		</div>

		<person-info-dialog :userInfo="curInfo" :personShow.sync="personShow"></person-info-dialog>
		<group-info-dialog @groupItemInfo='groupItemInfo' :groupInfo="curInfo" :groupShow.sync="groupShow"></group-info-dialog>

	</div>
</template>

<script>
	import MessageShow from './../components/MessageShow';
	import MessageSent from './../components/MessageSent';
	import PersonInfoDialog from './dialog/PersonInfoDialog';
	import GroupInfoDialog from "./dialog/GroupInfoDialog";


	import GroupList from "./GroupList"

	export default {
		name: "MessageContainer",
		data() {
			return {

				personShow: false,
				groupShow: false,
				messages: [],
				nowPage: 1,
				isGroup: false,
				curInfo: {},
				showMore: true
			}
		},
		props: {},
		computed: {},
		watch: {
			'$store.state.messagePeer': function (newVal, oldVal) {
				this.initMessage();
				this.dataCenter.getInfoByCube(newVal, info => {
					this.curInfo = info
				});
			},
			'$store.state.groupList': function (groups) {
				groups.map(group => {
					if (this.curInfo && this.curInfo.groupId == group.groupId) {
						this.curInfo = group;
					}
				});
			}
		},
		beforeMount() {
			this.addAppListener();
			this.dataCenter.getInfoByCube(this.$store.state.messagePeer, info => {
				this.curInfo = info
			});
		},
		mounted() {
			this.initMessage();

		},
		updated() {
			//this.toBottom();
		},
		beforeDestroy() {
			this.destroyAppListener();
		},
		methods: {
			groupItemInfo(item){
				this.groupShow = false;
			},
			openDialog() {
				if (this.isGroup) {
					this.groupShow = true;
				} else {
					this.personShow = true;
				}
			},
			queryHistory(cubeId, toBottom) {
				let t = Date.now();
				window.cube.getMessageService().queryHistoryMessage({
					cubeId: cubeId,
					offset: this.nowPage,
					cubeCallback: (messages) => {
						if (messages.length == 0) {
							this.showMore = false;
							this.$message({
								showClose: true,
								message: '没有更多消息了',
								type: 'info',
								duration: 1000
							});
							return;
						}
						let vueMessages = [];
						let customs = 0;
						let hasSns = {};
						for(let m of this.messages){
							hasSns[m.sn] = true;
						}
						for (let message of messages) {
							if(!hasSns[message.sn]){
								vueMessages.push(this.praeMessage(message));
							}
							if(message.type == "custom"){
								customs ++;
							}
							//vueMessages.push(this.praeMessage(message));
						}
						this.$store.state.messagePeer == cubeId ? this.messages =  vueMessages.concat(this.messages): '';
						if(customs > 7){
							this.queryHistory(cubeId, toBottom);
						}
						this.nowPage++;
						toBottom ? this.toBottom() : "";
					}
				})
			},
			initMessage() {
				if ('' != this.$store.state.messagePeer) {
					this.isGroup = this.$store.state.messagePeer.includes('g');
					this.nowPage = 1;
					this.messages = [];
					this.showMore = true;
					this.queryHistory(this.$store.state.messagePeer, true);

				}
			},
			moreMessage() {
				console.log('查看更多');
				this.queryHistory(this.$store.state.messagePeer);
			},
			toBottom(message = {}) {
				let time;
				time = message.type == CubeMessageType.Image ? 400 : 100;
				setTimeout(() => {
					let cell = document.getElementsByClassName('el-scrollbar__wrap')[2];
					cell.scrollTop = cell.scrollHeight;
				}, time)
			},
			praeMessage(message) {
				let vueMessage = {
					sn: message.sn,
					type: message.type,
					content: message.content,
					src: 'http://download.getcube.cn/file/download/6ac1e304-0cab-41c0-865c-cf5f8e358ff5.png',
					name: message.sender.displayName || message.sender.name,
					sender: message.sender.name
				}
				vueMessage.fileUrl = message.file == null ? message.file : message.file.url;
				if (message.type == 'file') {
					vueMessage.size = message.file.size;
					vueMessage.fileName = message.file.name;
					vueMessage.percentage = 100;
					vueMessage.status = 'success';

				} else if (message.type == 'voice') {
					vueMessage.duration = message.file.duration;
				}
				return vueMessage;
			},
			terminateCall() {
				this.$store.dispatch('rejectCallInvite').then(() => {
					this.$store.commit('closeEngineElement', 'showLocalVideo');
					this.$store.commit('closeEngineElement', 'showRemoteVideo');
				})
			},
			addAppListener() {
				this.$bus.on('onMessageSent', message => {
					console.log("消息发送成功通知在Container", message);
					if (message.type != 'file') {
						let sendMessage = this.praeMessage(message);
						this.messages.push(sendMessage);
					}
					this.toBottom(message);
				});
				this.$bus.on('onMessageReceived', message => {
					console.log("收到消息通知在Container", message);
					// 如果是当前账号聊天页面 才显示
					if (!message.group && (message.sender.name == this.curInfo.cubeId || message.sender.name == this.curInfo.cubeId)
						|| message.group && (message.group.name == this.curInfo.groupId)) {
						let vueMessage = this.praeMessage(message);
						this.messages.push(vueMessage);
						this.toBottom(message);
					}
				});
				this.$bus.on('onMessageUploadCompleted', message => {
					for (let vueMessage of this.messages) {
						if (vueMessage.sn == message.sn) {
							console.log('上传完成====>messageContainer');
							vueMessage.percentage = 100;
							vueMessage.status = 'success';
							break;
						}
					}
				});
				this.$bus.on('onMessageUploading', (message, processed, total) => {
					let percentage = processed * 100 / total + '';
					percentage = Number(percentage.substring(0, 4));
					for (let vueMessage of this.messages) {
						if (vueMessage.sn == message.sn) {
							if (vueMessage.percentage != percentage) {
								vueMessage.percentage = percentage;
							}
							break;
						}
					}
				});
//				this.$bus.on('onCall', (direction, session, video) => {
//					if(video) {
//						this.$store.commit('updateInviteTypeInComing', 'video')
//					} else {
//						this.$store.commit('updateInviteTypeInComing', 'audio')
//					}
//					this.$nextTick(() => {
//						let callMessage = {
//							type: 'call',
//							caller: session,
//							sn: +new Date()
//						};
//						direction == 'outgoing' ? (callMessage.direction = 'outgoing') : (callMessage.direction = 'incoming');
//						this.messages.push(callMessage);
//					})
//				});
				this.$bus.on('onCallConnected', (res) => {
					if (!this.$store.state.showLocalVideo) {
						this.$store.commit('openEngineElement', 'showLocalVideo');
						this.$store.commit('openEngineElement', 'showRemoteVideo');
					}
				});
				this.$bus.on('onCallEnded', () => {
					if (this.$store.state.showLocalVideo) {
						this.$store.commit('closeEngineElement', 'showLocalVideo');
						this.$store.commit('closeEngineElement', 'showRemoteVideo');
					}
				});
			},
			destroyAppListener() {
				this.$bus.off('onMessageSent');
				this.$bus.off('onMessageReceived');
				this.$bus.off('onMessageUploadCompleted');
				this.$bus.off('onMessageUploading');
//				this.$bus.off('onCall');
				this.$bus.off('onCallConnected');
				this.$bus.off('onCallEnded');
			}
		},
		components: {
			GroupList,
			GroupInfoDialog,
			MessageShow,
			MessageSent,
			PersonInfoDialog,
			GroupInfoDialog,
		}
	}
</script>

<style lang='scss' type="text/scss">
	@import "./../assets/css/color-library";

	.cp-message-container {
		width: calc(100% - 257px);
		height: 100%;
		display: inline-block;
		vertical-align: top;
		overflow-x: hidden;
		.cp-scan-more {
			text-align: center;
			.message-more {
				display: inline-block;
			}
		}
		.chat-header {
			position: relative;
			height: 5%;
			border-bottom: 1px solid #F2F2F2;
			.chat-title-bar {
				position: absolute;
				padding-left: 10px;
				font-family: MicrosoftYaHei-Bold;
				font-size: 18px;
				font-weight: 700;
				color: #26252A;
				top: 50%;
				margin-top: -10px;
				height: 100%;
				vertical-align: middle;
				width: auto;
				max-width: 450px;
				padding-left: 20px;
				overflow: hidden;
				float: left;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.chat-left {
			display: inline-block;
			width: 100%;
			border-right: 1px solid #E5E5E5;
			&.group {
				width: calc(100% - 200px);
			}
		}
		.chat-right {
			display: inline-block;
			width: 180px;
			float: right;
			padding: 8px;
		}
		.message-sent {
			width: 100%;
			height: 30%;
			box-sizing: border-box;
		}
		.message-area {
			overflow-x: hidden;
			height: 70%;
		}
		.el-dialog__body {
			/*padding: 250px 0;*/
		}
	}


</style>
