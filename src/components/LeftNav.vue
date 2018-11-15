<template>
	<div class="cp-left-navbar">
		<el-scrollbar class="cp-scroll">
			<div class="user-face-box">
				<img @click="openDialog()"
					 :name="$store.state.curUser"
					 :src="'https://dev.download.shixincube.cn/file/avatar/' + $store.state.curUser"
					 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
			</div>
			<el-menu
				class="el-menu-vertical-demo"
				default-active="0">
				<el-menu-item
					class="ln-container por"
					index="0"
					@click="handleNavClick(0)">
					<router-link :to="{name: 'message', query: { curUser: $store.state.curUser }}">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_chat_n.png"
							 v-show="select != 0">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_chat_s.png"
							 v-show="select == 0">
						<span class="overflow allUnread" v-if='$store.state.allUnread>0'>{{$store.state.allUnread >99 ? 99 : $store.state.allUnread}}</span>
						<p :style="{ color: select == 0 ? '#4493FA' : '#26252A',
									 opacity: select == 0 ? '1' : '0.2'}">消息</p>
					</router-link>
				</el-menu-item>

				<el-menu-item
					class="ln-container"
					index="1"
					@click="handleNavClick(1)">
					<router-link :to="{name: 'friend', query: { curUser: $store.state.curUser }}">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_friends_n.png"
							 v-show="select != 1">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_friends_s.png"
							 v-show="select == 1">
						<p :style="{ color: select == 1 ? '#4493FA' : '#26252A',
						opacity: select == 1 ? '1' : '0.2'}">联系人</p>
					</router-link>
				</el-menu-item>

				<el-menu-item
					class="ln-container"
					index="2"
					@click="handleNavClick(2)">
					<router-link :to="{name: 'conference', query: { curUser: $store.state.curUser }}">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_meet_n.png"
							 v-show="select != 2">
						<img class="cp-ln-img"
							 src="./../assets/img/nav_meet_s.png"
							 v-show="select == 2">
						<p :style="{ color: select == 2 ? '#4493FA' : '#26252A',
									 opacity: select == 2 ? '1' : '0.2'}">会议</p>
					</router-link>
				</el-menu-item>

				<el-menu-item
					class="ln-container"
					:class="{'active':$store.state.leftHoverNav == 3}"
					index="3"
					@click="handleShowSelectDialog('audioCall',3)">
					<i class="cp-ln-img" type="audioCall"></i>
					<p>多人语音</p>
				</el-menu-item>

				<el-menu-item
					class="ln-container"
					index="4"
					:class="{'active':$store.state.leftHoverNav == 4}"
					@click="handleShowSelectDialog('whiteboard',4)">
					<i class="cp-ln-img" type="whiteboard"></i>
					<p>白板演示</p>
				</el-menu-item>

				<el-menu-item
					class="ln-container"
					:class="{'active':$store.state.leftHoverNav == 5}"
					index="5"
					@click="handleShowSelectDialog('shareScreen',5)">
					<i class="cp-ln-img" type="shareScreen"></i>
					<p>屏幕分享</p>
				</el-menu-item>
			</el-menu>
		</el-scrollbar>
		<person-info-dialog
			:isQuit = "true"
			:userInfo ="userInfo"
			:personShow.sync="show">
		</person-info-dialog>

		<common-audio-call v-if="$store.state.inviteType == 'audioCall'"
						   class="show-hidden"
						   @conferenceDestroyed="conferenceDestroyed"></common-audio-call>
		<common-group-video v-if="$store.state.inviteType == 'groupVideo'"
						   class="show-hidden"
						   @conferenceDestroyed="conferenceDestroyed"></common-group-video>
		<common-video-call v-if="$store.state.inviteType == 'videoCallAlone'"
						   class="show-hidden"
						   @conferenceDestroyed="conferenceDestroyed">
		</common-video-call>
		<common-whiteboard v-if="$store.state.inviteType == 'whiteboard'"
						   class="show-hidden"
						   @conferenceDestroyed="conferenceDestroyed"></common-whiteboard>
		<common-share-screen v-if="$store.state.inviteType == 'shareScreen'"
							 class="show-hidden"
							 @conferenceDestroyed="conferenceDestroyed"></common-share-screen>
		<common-conference v-if="$store.state.inviteType == 'conference'"
						   class="show-hidden"
						   :conference="conference"
						   @conferenceDestroyed="conferenceDestroyed"></common-conference>
		<message-bottom-fixed :conferenceNotify="conferenceNotify"
							  class="show-hidden"
							  v-show="hasInvite && $store.state.inviteType == ''"
							  @acceptInvite="acceptInvite"
							  @rejectInvite="rejectInvite"></message-bottom-fixed>
		<during-voice-call v-if="$store.state.inviteType == 'audioCallAlone'"></during-voice-call>

		<div class="hidden-all"
			 v-if="$store.state.inviteType != ''"></div>
	</div>
</template>

<script>
	import PersonInfoDialog from './dialog/PersonInfoDialog'
	import CommonAudioCall from './../components/CommonAudioCall';
	import CommonVideoCall from './../components/CommonVideoCall';
	import CommonWhiteboard from './../components/CommonWhiteboard';
	import CommonShareScreen from './../components/CommonShareScreen';
	import CommonConference from './../components/CommonConference';
	import MessageBottomFixed from './../components/MessageBottomFixed';
	import DuringVoiceCall from './../components/DuringVoiceCall';
	import CommonGroupVideo from  './../components/CommonGroupVideo.vue';
	export default {
		name: "LeftNav",
		data() {
			return {
				select: '0',
				show: false,
				userInfo: this.$store.state.userList[0],
				logoutDialog: false,
				userService: window.cube.getUserService(),
				conferenceService: window.cube.getConferenceService(),
				whiteboardService: window.cube.getWhiteboardService(),
				avatar: 'http://download.getcube.cn/file/download/6ac1e304-0cab-41c0-865c-cf5f8e358ff5.png',
				conference: {},
				hasInvite: false,
				conferenceNotify: {
					id: 'aaa',
					name: '123',
					inviteType: '456',
					inviteList: [1]
				}
			}
		},
		props: {},
		computed: {},
		watch: {
			'$route': function (e) {
				this.watchSelect(e);
			},
			'$store.state.messagePeer': function (newVal, oldVal) {
				this.dataCenter.getInfoByCube(newVal, info => {
					if (info.groupId) {
						// 发起多人语音/群视频/白板/会议/屏幕分享可以选择群主
						let members = info.masters.concat(info.members)
						console.log('// 发起多人语音/群视频/白板/会议/屏幕分享可以选择群主')
						console.log(members)
						this.$store.commit('updateInviteList', members);
					} else {
						this.$store.commit('updateInviteList', [info]);
					}
				});
			}
		},
		beforeMount() {
			this.addAppListener();
		},
		mounted() {
			this.watchSelect(this.$route);
		},
		methods: {
			watchSelect(e) {
				this.inviteType = '';
				const router = {
					'message': 0,
					'friend': 1,
					'conference': 2
				};
				this.select = router[e.name];
			},
			openDialog() {
				this.dataCenter.getInfoByCube(this.$store.state.curUser,(userInfo)=>{
				    this.userInfo = userInfo;
					this.show = true;
				});
			},
			handleNavClick(index) {
				this.select = index;
				this.$store.commit('changeLeftHoverNav',0)
				this.$store.commit('updateInviteType', '');
			},
			handleShowSelectDialog(type,index) {
				if(type == 'shareScreen') {
					this.$store.commit('updateShowInvite', true);
				}
				this.$store.commit('updateInviteType', type );
				this.$store.commit('changeLeftHoverNav',index)
			},
			showConference(res){
				console.log('会议加入=====>leftNav', res)
				if(res.from.cubeId == cube.accName){
					this.handleShowSelectDialog('conference');
					this.conference = res.conference;
				}
			},
			receiveInvite(res){
				if(res.from.cubeId == cube.accName){
					return false;
				}
				let inviteList = [];
				for(let invite of res.conference.invites){
					inviteList.push(invite.cubeId);
				}
				this.conferenceNotify = {
					id: res.conference.conferenceId,
					name: res.from.cubeId,
					inviteType: res.conference.type,
					inviteList: inviteList
				}
				console.log('收到邀请后的邀请列表', inviteList);
				this.showInvite();
			},
			receiveInviteWB(res){
				console.log('res', res);
				if(res.from.cubeId == cube.accName){
					return false;
				}
				let inviteList = [];
				for(let invite of res.whiteboard.invites){
					inviteList.push(invite.cubeId);
				}
				this.conferenceNotify = {
					id: res.whiteboard.whiteboardId,
					name: res.from.cubeId,
					inviteType: res.whiteboard.type,
					inviteList: inviteList
				}
				this.$store.commit('updateWhiteboard', res.whiteboard);
				this.showInvite();
			},
			showInvite(){
				this.hasInvite = true;
				setTimeout(()=>{
					if(this.hasInvite){
						this.hasInvite = false;
					}
				}, 45 * 1000)
			},
			receiveCall(direction, name, video){
				console.log('收到一对一音视频', direction, name, video);
				if(direction == 'outgoing'){
					return false;
				}
				let inviteType = video ?  'user-video-call' : 'user-voice-call';
				this.conferenceNotify = {
					id: name,
					name: name,
					inviteType: inviteType,
					inviteList: []
				}
				this.hasInvite = true;
			},
			onVideoQuited(res){
				if(res.quitMember.cubeId == cube.accName){
					this.conference = null;
				}
				if(res.quitMember.cubeId == res.conference.founder && res.conference.members.length == 0){
					console.log('监听发起者退出会议')
					this.hasInvite = false;
				}
			},
			onCallEnded(){
				this.$store.commit('updateInviteType', '');
			},
			onConferenceFailed(res){
				if(res.error.code == 1514) {
					return false;
				}
				console.log('会议出错', res);
				let nameMap = {};
				nameMap[CubeGroupType.VOICE_CALL] = '多人语音';
				nameMap[CubeGroupType.VIDEO_CALL] = '群视频';
				nameMap[CubeGroupType.VIDEO_CONFERENCE] = '视频会议';
				nameMap['share-screen'] = '远程桌面';
				let typeName = '会议';
				if(null != res.conference && null != nameMap[res.conference.type]){
					typeName = nameMap[res.conference.type];
				}
				let errMsgMap = {
					408: typeName + "连接超时",
					477: "加入" + typeName + "失败",
					603: "您正在通话中, 暂时无法进行此操作",
					700: typeName + "连接失败",
					704:'参数错误',
					711: typeName + "工作机状态异常",
					714: "连接超时, 请稍后重试",
					801: "该通话已结束",
					1400: "您已在其他设备通话中，暂时无法操作",
					1500: typeName + "已存在",
					1501: typeName + "人数超过上限",
					1502: typeName + "被其它终端拒绝",
					1503: "已在其他设备操作",
					1507: "拒绝失败",
					1508: typeName + "已结束",
					1510: typeName + '已结束',
					1520: typeName + '未开始' ,
					1552: "连接超时, 请稍后重试",
					1700: '摄像头开启失败',
					1702: "麦克风开启失败",
				};

				let errMsg = errMsgMap[res.error.code]
				if(null == errMsg){
					errMsg = '未知错误' + res.error.code;
				}
				this.$message({
					showClose: true,
					message: errMsg,
					type: 'error',
					duration: 3000
				});
				this.$store.commit('updateShareScreen', '');
				this.$store.commit('updateAudioCall', '');
				this.$store.commit('updateGroupVideo', '');
				this.$store.commit('updateInviteType', '');
				this.$store.commit('closeEngineElement', 'showCRemoteVideo');
			},
			onWhiteboardDestroyed(res){
				if(res.from.cubeId == res.whiteboard.founder && res.whiteboard.members.length == 0){
					console.log('监听发起者退出白板');
					this.hasInvite = false;
				}
			},
			onVoiceQuited(res){
				if(res.quitMember.cubeId == res.conference.masters[0].cubeId && res.conference.members.length == 0){
					console.log('监听发起者退出多人语音');
					this.hasInvite = false;
				}
			},

			addAppListener() {
				this.$bus.on('onLogouted', () => {
					this.logoutDialog = false;

				});
				this.$bus.on('onVideoQuited', this.onVideoQuited)
				this.$bus.on('onViedoJoined', this.showConference);
				this.$bus.on('onVideoInvited', this.receiveInvite);
				this.$bus.on('onVoiceInvited', this.receiveInvite);
				this.$bus.on('onShareInvited', this.receiveInvite);
				this.$bus.on('onWhiteboardInvited', this.receiveInviteWB);
				this.$bus.on('onCall', this.receiveCall);
				this.$bus.on('onGroupVideoInvited', this.receiveInvite);
				this.$bus.on('onConferenceFailed', this.onConferenceFailed);
				this.$bus.on('onWhiteboardDestroyed',this.onWhiteboardDestroyed);
				this.$bus.on('onVoiceQuited',this.onVoiceQuited);
				this.$bus.on('onShareQuited',this.onVoiceQuited);
				this.$bus.on('onGroupVideoQuited',this.onVoiceQuited);
				this.$bus.on('onCallEnded',this.onCallEnded);
			},
			destroyAppListener() {
				this.$bus.off('onLogout');
				this.$bus.off('onVideoQuited', this.onVideoQuited);
				this.$bus.off('onViedoJoined', this.showConference);
				this.$bus.off('onVideoInvited', this.receiveInvite);
				this.$bus.off('onVoiceInvited', this.receiveInvite);
				this.$bus.off('onShareInvited', this.receiveInvite);
				this.$bus.off('onWhiteboardInvited', this.receiveInviteWB);
				this.$bus.off('onCall', this.receiveCall);
				this.$bus.off('onGroupVideoInvited', this.receiveInvite);
				this.$bus.off('onConferenceFailed', this.onConferenceFailed);
				this.$bus.off('onWhiteboardDestroyed',this.onWhiteboardDestroyed);
				this.$bus.off('onVoiceQuited',this.onVoiceQuited);
				this.$bus.off('onShareQuited',this.onVoiceQuited);
				this.$bus.off('onGroupVideoQuited',this.onVoiceQuited);
				this.$bus.off('onCallEnded',this.onCallEnded);

			},
			conferenceDestroyed() {
				this.$store.commit('updateInviteType', '');
			},
			acceptInvite(obj){
				if(obj.inviteType == CubeGroupType.VIDEO_CONFERENCE){
					this.conferenceService.join(obj.id);
				}
				if(obj.inviteType == CubeGroupType.VOICE_CALL){
					this.$store.commit('updateAudioCall', obj);
					this.handleShowSelectDialog('audioCall');
					this.conferenceService.join(obj.id);
				}
				if(obj.inviteType == 'share-wb'){
					this.$store.commit('updateWhiteboard', obj);
					this.handleShowSelectDialog('whiteboard');
					this.whiteboardService.join(obj.id);
				}
				if(obj.inviteType == 'share-screen'){
					this.$store.commit('updateShareScreen', obj);
					this.$store.commit('openEngineElement', 'showCRemoteVideo');
					this.handleShowSelectDialog('shareScreen');
					this.conferenceService.join(obj.id);
				}
				if(obj.inviteType == 'user-video-call'){
					this.$store.dispatch('acceptCallInvite', {
						video: true
					}).then(() => {
						this.$store.commit('updateInviteType', 'videoCallAlone');
					});
				}
				if(obj.inviteType == 'user-voice-call'){
					this.$store.dispatch('acceptCallInvite', {
						video: true
					}).then(() => {
						this.$store.commit('updateInviteType', 'audioCallAlone');
					});
				}
				if(obj.inviteType == CubeGroupType.VIDEO_CALL){
					this.$store.commit('updateGroupVideo', obj);
					this.handleShowSelectDialog('groupVideo');
					this.conferenceService.join(obj.id);
				}
				this.hasInvite = false;
			},
			rejectInvite(obj){
				if(obj.inviteType != 'share-wb'){
					this.conferenceService.rejectInvite(obj.id,obj.name);
				}else{
					this.whiteboardService.rejectInvite(obj.id,obj.name);
				}

				// if(obj.inviteType == 'user-video-call' || obj.inviteType == 'user-voice-call'){
					this.$store.dispatch('rejectCallInvite').then(() => {});
				// }
				this.hasInvite = false;
			},

		},
		components: {
			PersonInfoDialog,
			CommonVideoCall,
			CommonAudioCall,
			CommonWhiteboard,
			CommonShareScreen,
			CommonConference,
			MessageBottomFixed,
			DuringVoiceCall,
			CommonGroupVideo
		},
		beforeDestroy(){
			this.destroyAppListener();
		}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-left-navbar {
		height: 100%;
		background-color: $BD7;
		box-sizing: border-box;
		text-align: center;
		.user-face-box {
			display: inline-block;
			padding: 70px 0 56px 0;
			width: 50px;
			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				cursor: pointer;
			}
		}
		.cp-scroll {
			height: 100%;
			overflow-x: hidden;
			border-right: 1px solid $BG1;
			background-color: $BG1;
			.el-menu {
				border-right: none;
				background-color: $BG1;
				.el-menu-item {
					padding: 0;
					&:hover {
						background-color: $BG1;
					}
				}
				.is-active {
					background-color: transparent;
				}
				li {
					padding: 0 !important;
				}
			}
			.ln-container {
				position: relative;
				height: 60px;
				text-align: center;
				// overflow: hidden;
				margin-top: 10px;
				&:first-child {
					margin-top: 0;
				}
				&:hover{
						@include hoverLeft
				}
				&.active{
						@include hoverLeft
				}
				> a {
					display: block;
					line-height: 1.5;
					text-decoration: none;
					&:visited {
						color: $T8;
					}
				}
				img {
					display: inline-block;
					width: 22px;
					height: 22px;
				}
				p {
					font-size: 12px;
					opacity: 0.2;
					color: $T8;
					line-height: 1.5;
				}
				.cp-ln-img {
					display: block;
					width: 22px;
					margin: 0 auto;
					height: 22px;
					&[type=whiteboard] {
						background: url("./../assets/img/nav_whiteboard_n.png") no-repeat;
						background-size: 100% 100%;
						&:hover {
							background: url("./../assets/img/nav_whiteboard_s.png") no-repeat;
							background-size: 100% 100%;
						}
					}
					&[type=audioCall] {
						background: url("./../assets/img/nav_sound_n.png") no-repeat;
						background-size: 100% 100%;
						&:hover {
							background: url("./../assets/img/nav_sound_s.png") no-repeat;
							background-size: 100% 100%;
						}
					}
					&[type=shareScreen] {
						background: url("./../assets/img/nav_share_n.png") no-repeat;
						background-size: 100% 100%;
						&:hover {
							background: url("./../assets/img/nav_share_s.png") no-repeat;
							background-size: 100% 100%;
						}
					}
				}
			}
		}
		.hidden-all{
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: $BG3;
			top: 0;
			left: 0;
			z-index: 999;
			opacity: 0.5;
		}
		.show-hidden{
			z-index: 1000;
		}
		.por{
			position: relative;
		}
		.allUnread{
			position: absolute;
			top: -10px;
			right: 10px;
			opacity: 1;
			display: inline-block;
			width: 18px;
			height: 18px;
			line-height: 18px;
			font-size: 10px;
			text-align: center;
			background: #FC605B;
			border-radius: 100%;
			color: #ffffff;
		}
	}
</style>
