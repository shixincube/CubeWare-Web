<template>
	<div class="cp-video-container">
		<common-title
			:title="'会议'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false">
		</common-title>
		<div class="sc-container">
			<div class="audio-main">
				<span></span>
			</div>
			<whiteboard-members
				class="cb-wb-members"
				:joinedList="joinedList"
				:waitingList="waitingList">
			</whiteboard-members>
		</div>
		<div class="sc-footer">
			<conference-control @inviteList="invite"
								:checkMembers="joinedList.concat(waitingList)"></conference-control>
			<el-button
				class="sc-cancel-btn"
				type="danger"
				@click="quitConference">挂断</el-button>
		</div>
	</div>
</template>

<script>
	import CommonTitle from './../components/CommonTitle';
	import SelectMember from './../components/SelectMember';
	import WhiteboardMembers from './../components/WhiteboardMembers';
	import ConferenceControl from './../components/ConferenceControl';

	export default {
		name: "CommonConference",
		data() {
			return {
				conferenceService: window.cube.getConferenceService(),
				joinedList: [],
				waitingList: []
			}
		},
		props: {
			conference: {
				type: Object,
				default: function () {
					return {
						invites:[]
					};
				}
			}
		},
		computed: {
		},
		watch: {},
		beforeMount() {
		},
		mounted() {
			this.initData();
		},
		methods: {
			initData(){
				if(null != this.conference && null != this.conference.conferenceId){
					this.conferenceService.setVideoEnabled(this.conference.conferenceId);
					this.changeJoined(this.conference);
				}
				this.addAppListener();
				this.openElement();
			},
			onViedoJoined(res){
				console.log("会议加入====>CommonConference", res);
				if(res.from.cubeId == cube.accName){
					this.conferenceService.setVideoEnabled(res.conference.conferenceId);
				}
				this.changeJoined(res.conference);
			},
			updateMember(res){
				this.changeJoined(res.conference);
			},
			onVideoInvited(res){
				this.changeJoined(res.conference);
			},
			addAppListener(){
				this.$bus.on('onViedoJoined', this.onViedoJoined);
				this.$bus.on('onVideoQuited', this.updateMember);
				this.$bus.on('onVideoInvited', this.onVideoInvited);
			},
			destroyAppListener(){
				this.$bus.off('onViedoJoined', this.onViedoJoined);
				this.$bus.off('onVideoQuited', this.updateMember);
				this.$bus.off('onVideoInvited', this.onVideoInvited);
			},
			quitConference(){
				this.conferenceService.quit(this.conference.conferenceId);
				this.closeElement();
			},
			invite(invites){
				console.log('邀请会议成员参加', invites);
				let cubeIds = [];
				for(let invite of invites){
					cubeIds.push(invite.cubeId);
				}
				this.conferenceService.inviteMembers(this.conference.conferenceId, cubeIds);
			},
			closeElement() {
				this.$emit('conferenceDestroyed');
				this.$store.commit('closeEngineElement', 'showCRemoteVideo');
			},
			openElement() {
				this.$store.commit('openEngineElement', 'showCRemoteVideo');
			},
			changeJoined(conference){
				this.joinedList = [];
				this.waitingList = [];
				let hasJoin = {};
				for(let join of conference.members){
					let joinCubeId = join.cubeId;
					let displayName = this.dataCenter.getNameByCube(join.cubeId)
					this.joinedList.push({
						cubeId:joinCubeId,
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
			destroy(){
				this.destroyAppListener();
				this.$store.commit('closeEngineElement', 'showCRemoteVideo');
			}
		},
		beforeDestroy(){
			this.destroy();
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
	.cp-video-container{
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
			top: -4vh;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.conference-video {
		position: absolute;
		width: 640px;
		height: 400px;
		top: calc(50% - 209px);;
		z-index: 99998;
		left: calc(50% - 100px);
		transform: translateX(-50%);
	}
</style>
