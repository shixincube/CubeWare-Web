<template>
	<div class="cp-share-screen-container">
		<common-title
			:title="'共享桌面'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false"
			v-show="showContent">
		</common-title>
		<div class="sc-container"
			 v-show="showContent">
			<div class="sc-container-placeholder"></div>
			<whiteboard-members
				class="cb-wb-members"
				:joined-list="joinedList"
				:waiting-list="inviteList || []">
			</whiteboard-members>
		</div>
		<div class="sc-footer"
			 v-show="showContent">
			<conference-control
				@inviteList="getInviteList"
				:checkMembers="joinedList.concat(inviteList)"
				:show-add-member-btn="maxNumber == 2 ? false : true">
			</conference-control>
			<el-button
				class="sc-cancel-btn"
				type="danger"
				@click="destroyShareScreen">挂断</el-button>
		</div>

		<select-member
			v-if="!showContent"
			@inviteList="beforeShareScreenCreate"
			@closeDialog="closeDialog"
			class="cp-select-member cp-sc-member">
		</select-member>

		<a href="https://dev.cubeware.shixincube.cn/extension_3_7_0_0.crx"
		   style="display: none"
		   id="crxDownload"></a>
	</div>
</template>

<script>
	import CommonTitle from './../components/CommonTitle';
	import WhiteboardMembers from './../components/WhiteboardMembers';
	import ConferenceControl from './../components/ConferenceControl';
	import SelectMember from './../components/SelectMember';
    export default {
        name: "CommonShareScreen",
        data() {
            return {
				shareScreenService: window.cube.getConferenceService(),
				shareScreen: {},
				joinedList: [],
				inviteList: [],
				displayName: '',
				showCreateDialog: true,
				showInviteDialog: false,
				maxNumber: '',
				destroyed: false,
				selectList: []
			}
        },
        props: {},
        computed: {
			showContent: function () {
				return !!this.$store.state.shareScreen
			}
		},
        watch: {
        	inviteList: function (e) {
				console.log('inviteList', e, this.inviteList);
			}
		},
        beforeMount() {
			this.closeElement();
		},
        mounted() {
			this.addAppListener();
        },
        methods: {
        	beforeShareScreenCreate(list) {
        		if(list.length < 1) {
        			this.$message.error('请选择邀请人员。');
        			return false;
				}
				getChromeExtensionStatus((status)=>{
					if(status == 'installed-enabled') {
						 this.createShareScreen(list);
					} else {
						this.$message.info('开启共享桌面需要安装插件，未检测到插件，开始自动下载，下载完成后请手动安装。');
						document.getElementById('crxDownload').click();
					}
				})
			},
			createShareScreen(list) {
				let inviteList = list;
				for(let i = 0 ; i < inviteList.length ; i++) {
					this.selectList.push(inviteList[i].cubeId);
				}
				this.maxNumber = this.$store.state.messagePeer.includes('g') ? 9 : 2;
				let conferenceConfig = new CubeConferenceConfig();
				if(this.$store.state.curGroup) {
					for(let i = 0 ; i < this.$store.state.groupList.length ; i++) {
						if(this.$store.state.curGroup == this.$store.state.groupList[i].groupId) {
							conferenceConfig.displayName = this.$store.state.groupList[i].displayName;
							conferenceConfig.bindGroupId = this.$store.state.curGroup;
						}
					}
				} else {
					conferenceConfig.displayName = '共享桌面';
					conferenceConfig.bindGroupId = '';
				}
				conferenceConfig.type = 'share-screen';
				conferenceConfig.autoNotify = false;
				conferenceConfig.maxNumber = this.maxNumber;
				this.$bus.on('onShareCreated', this.onShareCreated)
				this.shareScreenService.create(conferenceConfig);
			},
			onShareCreated(res){
				this.shareScreen = res;
				// this.inviteConferenceMember(this.selectList);
				this.joinConference();
			},
			destroyShareScreen() {
        		this.destroyed = true;
				new Promise((resolve) => {
					this.$bus.on('onShareQuited', () => {
						resolve();
					})
					this.shareScreenService.quit(this.shareScreen.conferenceId)
					this.$store.commit('changeLeftHoverNav','')
				}).then(() => {
					this.displayName = '';
					this.inviteList = [];
					this.joinedList = [];
					this.showCreateDialog = true;
					this.$store.commit('updateShareScreen', '');
					this.$emit('conferenceDestroyed');
					this.closeElement();
				})
			},
			changeJoined(conference){
				this.joinedList = [];
				this.inviteList = [];
				let hasJoin = {};
				for(let join of conference.members){
					let displayName = this.dataCenter.getNameByCube(join.cubeId)
					this.joinedList.push({
						cubeId:join.cubeId,
						displayName:displayName
					});
					hasJoin[join.cubeId] = true;
				}
				for(let waiting of conference.invites){
					if(!hasJoin[waiting.cubeId]){
						let displayName = this.dataCenter.getNameByCube(waiting.cubeId)
						this.inviteList.push({
							cubeId: waiting.cubeId,
							displayName: displayName
						});
					}
				}
			},
			getInviteList(list) {
        		let iL = [];
        		for(let i = 0 ; i < list.length ; i++) {
        			iL.push(list[i].cubeId.toString());
				}
				this.inviteConferenceMember(iL);
			},
			joinConference() {
				this.shareScreenService.join(this.shareScreen.conferenceId);
			},
			inviteConferenceMember(inviteList) {
				this.shareScreenService.inviteMembers(this.shareScreen.conferenceId, inviteList);
				for(let i = 0 ; i < inviteList.length ; i++) {
					let cubeId = inviteList[i].cubeId ? inviteList[i].cubeId : inviteList[i]
					let displayName = this.dataCenter.getNameByCube(cubeId)

					this.inviteList.push({
						cubeId: inviteList[i].cubeId ? inviteList[i].cubeId : inviteList[i],
						displayName: displayName
					})
				}
				this.openElement();
				this.showInviteDialog = false;
			},
			videoJoinConference() {
				this.shareScreenService.setVideoEnabled(this.shareScreen.conferenceId, true);
				this.$store.commit('updateShareScreen', this.shareScreen);
			},
			closeElement() {
				if(!this.$store.state.shareScreen) {
					this.$store.commit('closeEngineElement', 'showCRemoteVideo');
					this.$store.commit('closeEngineElement', 'showCLocalVideo');
				}
			},
			openElement() {
				if(this.shareScreen.masters[0].cubeId == this.$store.state.curUser) {
					this.$store.commit('openEngineElement', 'showCLocalVideo');
				} else {
					this.$store.commit('openEngineElement', 'showCLocalVideo');
					this.$store.commit('openEngineElement', 'showCRemoteVideo');
				}
			},
			closeDialog(){
				this.$router.push({name: 'message'});
			},
			onShareJoined(res){
				this.shareScreen = res.conference;
				if(res.from.cubeId != res.conference.founder) {
					this.changeJoined(res.conference);
				} else {
					let displayName = this.dataCenter.getNameByCube(res.from.cubeId)
					this.joinedList.push({
						cubeId: res.from.cubeId,
						displayName: displayName
					});
				}
				this.showCreateDialog = false;
				this.showInviteDialog = true;
				this.videoJoinConference();
			},

			onShareScreenConnected(conference){
				this.shareScreen = conference;
				if(this.$store.state.curUser == conference.founder) {
					this.inviteConferenceMember(this.selectList);
				}
			},

			onShareInvited(res){
        		if(this.inviteList.length == 0) {
					for(let i = 0 ; i < res.inviters.length ; i++) {
						let displayName = this.dataCenter.getNameByCube(res.inviters[i])
						this.inviteList.push({
							cubeId: res.inviters[i],
							displayName: displayName
						})
					}
				}
				let invitedList = [];
				for(let item of res.conference.invites) {
					invitedList.push(item.cubeId);
				}
				this.$store.commit('updateJoinedList', invitedList);
			},
			onShareQuited(res){
				if(res.conference.masters[0].cubeId == res.quitMember.cubeId) {
					this.$store.commit('updateInviteType', '');
				}
				this.changeJoined(res.conference);
			},
			onConferenceRejectInvited(res){
				console.log("拒绝屏幕分享====>onShareDesktopRejectInvited", res);
				this.changeJoined(res.conference);

			},
			addAppListener(){
				this.$bus.on('onConferenceRejectInvited',this.onConferenceRejectInvited);
				this.$bus.on('onShareJoined', this.onShareJoined);
				this.$bus.on('onShareScreenConnected', this.onShareScreenConnected);
				this.$bus.on('onShareInvited', this.onShareInvited);
				this.$bus.on('onShareQuited', this.onShareQuited)
			},
			removeAppListener() {
				this.$bus.off('onShareCreated', this.onShareCreated);
				this.$bus.off('onShareJoined', this.onShareJoined);
				this.$bus.off('onShareScreenConnected', this.onShareScreenConnected);
				this.$bus.off('onShareQuited', this.onShareQuited);
				this.$bus.off('onShareInvited', this.onShareInvited);
				this.$bus.off('onConferenceRejectInvited',this.onConferenceRejectInvited);
			},
			closeDialog(){
				this.$store.commit('changeLeftHoverNav', '');
				this.$store.commit('updateInviteType', '');
			}
		},
		beforeDestroy() {
        	this.removeAppListener();
        	if(!this.destroyed && this.$store.state.shareScreen) {
				this.destroyShareScreen();
			}
		},
        components: {
			CommonTitle,
			WhiteboardMembers,
			ConferenceControl,
			SelectMember
		}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-share-screen-container {
		box-sizing: border-box;
		height: 600px;
		width: 860px;
		position: absolute;
		top: 190px;
		left: 300px;
		z-index: 29;
		.sc-container {
			height: 510px;
			background-color: $BG3;
			.sc-container-placeholder {
				background-color: rgba(255,255,255,.2);
				height: 510px;
				width: 660px;
				display: inline-block;
			}
			.cb-wb-members {
				display: inline-block;
				width: 200px;
				float: right;
				padding: 10px 20px;
				height: 100%;
				box-sizing: border-box;
				background-color: $BG3;
			}
		}
		.sc-footer {
			position: absolute;
			width: 100%;
			bottom: 0;
			height: 50px;
			line-height: 49px;
			text-align: left;
			padding: 0 20px;
			background-color: $BG3;
			box-sizing: border-box;
			.sc-cancel-btn {
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
		.cp-sc-member {
			position: fixed;
		top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
	}
	}
	#c_local_video {
		position: absolute;
		width: 300px;
		height: 160px;
		top: 405px;
		left: 480px;
		z-index: 99999;
	}
	.share-screen-video {
		position: absolute;
		width: 660px;
		height: 400px;
		top: 285px;
		left: 300px;
		z-index: 99999;
	}

</style>
