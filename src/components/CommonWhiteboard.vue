<template>
	<div class="cp-whiteboard-container">
		<common-title
			:title="'白板演示'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false"
			v-if="!showDialog">
		</common-title>
		<div class="wb-container" v-if="!showDialog">
			<div class="cb-wb-action" v-show="$store.state.showWBCanvas">
				<img src="./../assets/img/msg_boardhand_n.png"
					 class="pointer"
					 @click="dragWhiteboard"
					 v-show="action != 1">
				<img src="./../assets/img/msg_boardhand_s.png"
					 class="pointer"
					 v-show="action == 1">
				<img src="./../assets/img/msg_boardcircular_n.png"
					 class="pointer"
					 @click="selectEllipse"
					 v-show="action != 2">
				<img src="./../assets/img/msg_boardcircular_s.png"
					 class="pointer"
					 v-show="action == 2">
				<img src="./../assets/img/msg_boardedit_n.png"
					 class="pointer"
					 @click="selectPencil"
					 v-show="action != 3">
				<img src="./../assets/img/msg_boardedit_s.png"
					 class="pointer"
					 v-show="action == 3">
				<img src="./../assets/img/msg_boardarrow_n.png"
					 class="pointer"
					 @click="selectArrow"
					 v-show="action != 4">
				<img src="./../assets/img/msg_boardarrow_s.png"
					 class="pointer"
					 v-show="action == 4">
				<!--<div class="cp-wb-upload cp-wb-upload-file">-->
					<!--<input-->
						<!--type="file"-->
						<!--class="upload-ipt"-->
						<!--@change="submitFile"-->
						<!--id="uploadIpt">-->
				<!--</div>-->
				<div class="cp-wb-upload cp-wb-upload-clear"
					 @click="erase">
				</div>
			</div>
			<div class="cp-wc-container">

			</div>
			<whiteboard-members
				class="cb-wb-members"
				:joined-list="joinedList"
				:waiting-list="inviteList">
			</whiteboard-members>
		</div>
		<div class="whiteboard-footer"
			 v-show="!showDialog">
			<conference-control
				:is-whiteboard="true"
				v-if="maxNumber != 2"
				@inviteList="emitInviteWhiteboard"
				:checkMembers="joinedList.concat(inviteList)"></conference-control>
			<el-button
				class="wb-cancel-btn"
				type="danger"
				@click="destroyWhiteboard">挂断</el-button>
		</div>

		<select-member
			v-if="showDialog"
			@inviteList="createWhiteboard"
			@closeDialog="closeMember"
			class="cp-select-member">
		</select-member>
	</div>
</template>

<script>
	import CommonTitle from './../components/CommonTitle';
	import WhiteboardMembers from './../components/WhiteboardMembers';
	import SelectMember from './../components/SelectMember';
	import ConferenceControl from './../components/ConferenceControl';
	export default {
		name: "WhiteboardService",
		data() {
			return {
				whiteboardService: window.cube.getWhiteboardService(),
				displayName: '',
				whiteboard: this.$store.state.whiteboard || '',
				inviteList: [],
				joinedList: [],
				receiveInvite: false,
				action: '',
				maxNumber: ''
			}
		},
		props: {},
		computed: {
			showDialog() {
				return !!!this.$store.state.whiteboard
			}
		},
		watch: {},
		beforeMount() {

		},
		mounted() {
			this.$store.commit('closeEngineElement', 'showWBCanvas');
			this.whiteboardListener();
		},
		methods: {
			createWhiteboard(e) {
				this.inviteList = e;
				if(this.inviteList.length < 1) {
					this.$message.error('请选择邀请的用户');
					return false;
				}
				let inviteIds = [];
				for(let i = 0 ; i < e.length; i++) {
					inviteIds.push(i.cubeId);
				}
				this.$store.commit('updateJoinedList', inviteIds);
				new Promise((resolve, reject) => {
					this.maxNumber = this.$store.state.messagePeer.includes('g') ? 99 : 2;
					this.$bus.on('onWhiteboardCreated', (result) => {
						this.$store.commit('openEngineElement', 'showWBCanvas');
						this.whiteboard = result.whiteboard;
						resolve();
					});
					this.whiteboardService.create({
						displayName: this.displayName,
						maxNumber: this.maxNumber
					})
				}).then(() => {
					this.$store.commit('updateWhiteboard', this.whiteboard);
					this.displayName = '';
					this.joinWhiteboard();
				})
			},
			inviteWhiteboard(list) {
				let inviteIds = [];
				for(let invite of this.inviteList){
					inviteIds.push(invite.cubeId);
				}
				this.$store.commit('updateJoinedList', inviteIds);
				this.whiteboardService.invite(this.whiteboard.whiteboardId, inviteIds || list);
			},
			emitInviteWhiteboard(list) {
				let inviteIds = [];
				for(let invite of list){
					debugger;
					inviteIds.push(invite.cubeId);
					this.inviteList.push({
						cubeId: invite.cubeId,
						displayName: invite.displayName
					})
				}
				this.whiteboardService.invite(this.whiteboard.whiteboardId, inviteIds);
			},
			rejectWhiteboard() {
				this.whiteboardService.rejectInvite(this.whiteboard.whiteboardId, this.$store.state.curUser);
			},
			joinWhiteboard() {
				this.whiteboardService.join(this.whiteboard.whiteboardId);
			},
			dragWhiteboard() {
				this.action = 1;
				this.whiteboardService.zoom(1.2);
				this.whiteboardService.zoom(1.0);
				this.whiteboardService.unSelect();
			},
			selectPencil() {
				this.action = 3;
				this.whiteboardService.selectPencil();
				this.$message({
					message: '画笔已切换为铅笔',
					type: 'info',
					duration: 1000
				})
			},
			selectRect() {
				this.whiteboardService.selectRect();
				this.$message({
					message: '画笔已切换为矩形',
					type: 'info',
					duration: 1000
				})
			},
			selectArrow() {
				this.action = 4;
				this.whiteboardService.selectArrow();
				this.$message({
					message: '画笔已切换为箭头',
					type: 'info',
					duration: 1000
				})
			},
			selectEllipse() {
				this.action = 2;
				this.whiteboardService.selectEllipse();
				this.$message({
					message: '画笔已切换为圆',
					type: 'info',
					duration: 1000
				})
			},
			undo() {
				this.whiteboardService.undo();
				this.$message({
					message: '已为您撤销上次操作',
					type: 'info',
					duration: 1000
				})
			},
			erase() {
				this.action = 6;
				this.whiteboardService.cleanup();
				this.$message({
					message: '已为您清空白板',
					type: 'info',
					duration: 1000
				})
			},
			submitFile() {
				let file = document.getElementById('uploadIpt').files[0];
				new Promise((resolve, reject) => {
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = function () {
						resolve();
					}
				}).then(() => {
					this.workAsSlide(file);
				})
			},
			workAsSlide(file) {
				let slide;
				new Promise((resolve, reject) => {
					this.$bus.on('onSlideUploadCompleted', (res) => {
						slide = res.slide;
						resolve();
					})
					this.whiteboardService.shareFile(file);
				}).then(() => {
					this.whiteboardService.workAsSlide(slide);
				})
			},
			destroyWhiteboard() {
				if(this.$store.state.whiteboard) {
					this.$store.commit('changeLeftHoverNav','')
					this.$store.commit('updateInviteType', '');
					new Promise((resolve, reject) => {
						this.$bus.on('onWhiteboardQuited', () => {
							resolve();
						});
						this.whiteboardService.quit(this.$store.state.whiteboard.whiteboardId);
					}).then(() => {
						this.whiteboard = '';
						this.inviteList = [];
						// this.cleanWhiteboard();
						// this.$emit('conferenceDestroyed');
						this.$store.commit('closeEngineElement', 'showWBCanvas');
						this.$store.commit('updateWhiteboard', '');
						this.$bus.off('onWhiteboardJoined');
						this.$bus.off('onWhiteboardInvited');
						this.$bus.off('onWhiteboardRejectInvited');
						this.$bus.off('onSlideUploadCompleted');
						this.$bus.off('onWhiteboardDestroyed');
						this.$bus.off('onWhiteboardFailed');
						this.$bus.off('onWhiteboardCreated');
					})
				}
			},
			cleanWhiteboard() {
				new Promise((resolve, reject) => {
					this.$bus.on('onCleanup', () => {
						resolve();
					})
					this.whiteboardService.cleanup();
				}).then(() => {
				})
			},
			closeDialog(){
				this.$router.push({name: 'message'});
			},
			whiteboardListener() {
				this.$bus.on('onWhiteboardInvited' , (res) => {
					if(res.from.cubeId != this.$store.state.curUser) {
						this.whiteboard = res.whiteboard;
						this.$message.info('收到白板邀请');
						this.receiveInvite = true;
					}
				});
				this.$bus.on('onWhiteboardJoined', (res) => {
					this.$store.commit('updateWhiteboard', res.whiteboard);
					this.$store.commit('openEngineElement', 'showWBCanvas');
					if(res.whiteboard.masters[0].cubeId == this.$store.state.curUser) {
						this.whiteboardService.zoom(1.2);
						this.whiteboardService.zoom(1.0);
						this.inviteWhiteboard();
						let iList = this.inviteList;
						this.inviteList = [];
						for(let i = 0 ; i < iList.length ; i++) {
							this.inviteList.push({
								cubeId: iList[i].cubeId,
								displayName: iList[i].displayName
							})
						}
					} else {
						this.inviteList = [];
						this.joinedList = [];
					}
					for(let i = 0; i < res.whiteboard.invites.length; i++) {
						this.inviteList.push({
							cubeId: res.whiteboard.invites[i].cubeId,
							displayName: res.whiteboard.invites[i].displayName
						});
					};
					for(let i = 0; i < res.whiteboard.members.length; i++) {
						this.joinedList.push({
							cubeId: res.whiteboard.members[i].cubeId,
							displayName: res.whiteboard.members[i].displayName
						});
					};
					this.receiveInvite = false;
					this.$store.commit('updateWhiteboard', res.whiteboard);
				});
				this.$bus.on('onWhiteboardFailed', (res) => {
					this.$message.error(res.error);
				});
				this.$bus.on('onWhiteboardRejectInvited', (res) => {
					this.receiveInvite = false;
				})
			},
			removeWhiteboardListener() {
				this.cleanWhiteboard();
				this.$store.commit('closeEngineElement', 'showWBCanvas');
				this.$store.commit('updateWhiteboard', '');
				this.$bus.off('onWhiteboardJoined');
				this.$bus.off('onWhiteboardInvited');
				this.$bus.off('onSlideUploadCompleted');
				this.$bus.off('onWhiteboardDestroyed');
				this.$bus.off('onWhiteboardFailed');
				this.$bus.off('onWhiteboardCreated');
				// this.$emit('conferenceDestroyed');
			},
			closeMember(){
				this.$store.commit('changeLeftHoverNav', '');
				this.$store.commit('updateInviteType', '');
			}
		},
		beforeDestroy() {
			if(this.$store.state.whiteboard) {
				this.removeWhiteboardListener();
				this.destroyWhiteboard();
			}
		},
		components: {
			CommonTitle,
			WhiteboardMembers,
			SelectMember,
			ConferenceControl
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	#wb_canvas {
		position: absolute;
		top: 230px;
		left: 340px;
		width: 630px;
		height: 510px;
		z-index: 1000;
		cursor: pointer;
		background-color: $BG5;
	}
	.cp-whiteboard-container {
		box-sizing: border-box;
		height: 600px;
		width: 860px;
		position: absolute;
		top: 190px;
		left: 300px;
		z-index: 29;
		.wb-container {
			height: 510px;
			background-color: $BG3;
			.cb-wb-members {
				width: 200px;
				float: right;
				padding: 10px 20px;
				height: 100%;
				box-sizing: border-box;
				background-color: $BG3;
			}
		}
		.cp-wc-container {
			background-color: rgba(255,255,255,.2);
			height: 510px;
			width: 660px;
			display: inline-block;
		}
		.cb-wb-action {
			position: absolute;
			z-index: 1001;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 510px;
			background-color: $BG5;
			> img {
				display: block;
				width: 20px;
				height: 20px;
				margin: 10px auto;
			}
			.cp-wb-upload {
				width: 20px;
				height: 20px;
				margin: 15px auto;
				cursor: pointer;
				&.cp-wb-upload-file {
					background: url("./../assets/img/msg_boardfolder_n.png") no-repeat;
					background-size: 100% 100%;
					&:hover {
						background: url("./../assets/img/msg_boardfolder_s.png") no-repeat;
						background-size: 100% 100%;
					}
				}
				&.cp-wb-upload-clear {
					background: url("./../assets/img/msg_boarddelete_n.png") no-repeat;
					background-size: 100% 100%;
					&:hover {
						background: url("./../assets/img/msg_boarddelete_s.png") no-repeat;
						background-size: 100% 100%;
					}
				}
				.upload-ipt {
					height: 30px;
					overflow: hidden;
					position: absolute;
					opacity: 0;
					filter:alpha(opacity=0);
					cursor: pointer;
				}
			}
		}
		.whiteboard-footer {
			position: absolute;
			width: 100%;
			bottom: 0;
			height: 50px;
			line-height: 49px;
			text-align: left;
			padding: 0 20px;
			background-color: $BG3;
			box-sizing: border-box;
			.wb-cancel-btn {
				position: absolute;
				right: 20px;
				border-radius: 2px;
				top: 10px;
				background-color: $BG11;
				height: 30px;
				width: 70px;
				padding: 0;
			}
		}
		.cb-wb-dialog-input, .cb-wb-dialog-select{
			display: block;
			width: 50%;
			max-width: 500px;
			margin: 0 auto;
		}
		.cb-wb-dialog-select {
			margin-top: 20px;
		}
		.cp-select-member {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
</style>


