<template>
	<div class="cp-groupVideo-container">
		<common-title
			:title="'群视频'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false"
			v-if="hasGroupVideo">
		</common-title>
		<div class="sc-container"
			 v-if="hasGroupVideo">
			<whiteboard-members
				class="cb-wb-members"
				:joined-list="joinedList"
				:waiting-list="waitingList">
			</whiteboard-members>
		</div>
		<div class="sc-footer"
			 v-if="hasGroupVideo">
			<conference-control @inviteList="invite"
								:checkMembers="joinedList.concat(waitingList)"></conference-control>
			<el-button
				class="sc-cancel-btn"
				type="danger"
				@click="quitGroupVideo">挂断</el-button>
		</div>
		<select-member
			v-if="!hasGroupVideo"
			@inviteList="createGroupVideo"
			@closeDialog="closeDialog"
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
		name: "groupVideoService",
		data() {
			return {
				conferenceService: window.cube.getConferenceService(),
				conference: {},
				inviteList: [],
				joinedList: [],
				waitingList: []
			}
		},
		props: {},
		computed: {
			hasGroupVideo: function () {
				return !!this.$store.state.groupVideo
			}
		},
		watch: {},
		beforeMount() {
		},
		mounted() {
			this.addAppListener();
		},
		methods: {
			createGroupVideo(inviteMembers){
				console.log('创建群视频');
				let coferenceConfig = new CubeConferenceConfig();
				let invites = [];
				for(let invite of inviteMembers){
					invites.push(invite.cubeId);
				}
				coferenceConfig.invites = invites;
				coferenceConfig.type = CubeGroupType.VIDEO_CALL;
				coferenceConfig.autoNotify = false;
				this.conferenceService.create(coferenceConfig);
				this.inviteList= [];
			},
			quitGroupVideo(){
				this.conferenceService.quit(this.conference.conferenceId);
				this.$emit('conferenceDestroyed');
				this.closeElement();
				this.$store.commit('updateGroupVideo', '');
			},
			onGroupVideoCreated(conference, from){
				if(from.cubeId == cube.accName){
					this.conferenceService.join(conference.conferenceId);
				}
			},
			onGroupVideoJoined(res){
				this.$store.commit('updateGroupVideo', res.conference)
				this.conference = res.conference;
				this.changeJoined(res.conference);
				if(res.from.cubeId == cube.accName){
					this.openElement();
					this.conferenceService.setVideoEnabled(res.conference.conferenceId);
				}
			},
			onGroupVideoQuited(res){
				this.changeJoined(res.conference);
				if(res.quitMember.cubeId == cube.accName){
				}
			},
			onGroupVideoInvited(res){
				this.changeJoined(res.conference);
				//this.conferenceService.join(res.conference.conferenceId);
			},
			invite(invites){
				let cubeIds = [];
				for(let invite of invites){
					cubeIds.push(invite.cubeId);
				}
				this.conferenceService.inviteMembers(this.conference.conferenceId, cubeIds);
			},
			addAppListener(){
				this.$bus.on('onGroupVideoCreated', this.onGroupVideoCreated);
				this.$bus.on('onGroupVideoJoined', this.onGroupVideoJoined);
				this.$bus.on('onGroupVideoQuited', this.onGroupVideoQuited);
				this.$bus.on('onGroupVideoInvited', this.onGroupVideoInvited);
			},
			changeJoined(conference){
				this.joinedList = [];
				this.waitingList = [];
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
						this.waitingList.push({
							cubeId:waiting.cubeId,
							displayName:displayName
						});
					}
				}
			},
			closeElement() {
				this.$store.commit('closeEngineElement', 'showCRemoteVideo');
			},
			openElement() {
				this.$store.commit('openEngineElement', 'showCRemoteVideo');
			},
			destroyAppListener(){
				this.$bus.off('onGroupVideoCreated', this.onGroupVideoCreated);
				this.$bus.off('onGroupVideoJoined', this.onGroupVideoJoined);
				this.$bus.off('onGroupVideoQuited', this.onGroupVideoQuited);
				this.$bus.off('onGroupVideoInvited', this.onGroupVideoInvited);
			},
			closeDialog(){
				this.$store.commit('updateInviteType', '');
			}
		},
		beforeDestroy(){
			this.destroyAppListener();
		},
		components: {
			CommonTitle,
			WhiteboardMembers,
			ConferenceControl,
			SelectMember
		}
	}
</script>

<style lang='scss' type="text/scss">
	@import "./../assets/css/color-library";
	.cp-groupVideo-container {
		box-sizing: border-box;
		height: 600px;
		width: 860px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 29;
		.sc-container {
			height: 510px;
			background-color: $BG3;
			.audio-main{
				width: calc(100% - 200px);
				float: left;
				background-color: rgba(255,255,255,.2);
				line-height: 510px;
				color: $T3;
			}
			.cb-wb-members {
				width: 200px;
				float: right;
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
		.cp-select-member {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
	.conference-video {
		position: absolute;
		width: 640px;
		height: 488px;
		top: calc(50% - 249px);;
		z-index: 99998;
		left: calc(50% - 100px);
		transform: translateX(-50%);
	}
</style>
