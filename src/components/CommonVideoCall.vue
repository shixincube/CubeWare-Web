<template>
	<div class="cp-video-container">
		<common-title
			:title="'音视频通话'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false">
		</common-title>
		<div class="sc-container">
			<div class="audio-main">
				<span>等待对方接通...</span>
			</div>
		</div>
		<div class="sc-footer">
			<el-button
				class="sc-cancel-btn"
				type="danger"
				@click="quitConference">挂断</el-button>
		</div>
	</div>
</template>

<script>
	import CommonTitle from './../components/CommonTitle';

	export default {
		name: "CommonVideo",
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
				this.conferenceService.setVideoEnabled(this.conference.conferenceId);
				this.addAppListener();
				this.changeJoined(this.conference);
			},
			updateMember(res){
				this.changeJoined(res.conference);
			},
			addAppListener(){
				this.$bus.on('onViedoJoined', this.updateMember);
				this.$bus.on('onVideoQuited', this.updateMember);
			},
			destroyAppListener(){
				this.$bus.off('onViedoJoined', this.updateMember);
				this.$bus.off('onVideoQuited', this.updateMember);
			},
			quitConference(){
				this.$store.dispatch('rejectCallInvite').then(() => {
					this.$emit('conferenceDestroyed');
				});
			},
			invite(invites){
				console.log('邀请会议成员参加', invites);
				let cubeIds = [];
				for(let invite of invites){
					cubeIds.push(invite.cubeId);
				}
				this.conferenceService.inviteMembers(this.conference.conferenceId, cubeIds);
			},
			changeJoined(conference){
				this.joinedList = [];
				this.waitingList = [];
				let hasJoin = {};
				for(let join of conference.members){
					let joinCubeId = join.cubeId;
					this.joinedList.push({
						cubeId:joinCubeId,
						displayName:joinCubeId
					});
					hasJoin[join.cubeId] = true;
				}
				for(let waiting of conference.invites){
					if(!hasJoin[waiting.cubeId]){
						this.waitingList.push({
							cubeId:waiting.cubeId,
							displayName:waiting.cubeId
						});
					}
				}
			},

		},
		beforeDestroy(){
			this.destroyAppListener();
		},
		components: {
			CommonTitle
		}
	}
</script>

<style lang='scss' type="text/scss">
	@import "./../assets/css/color-library";
	.cp-video-container{
		box-sizing: border-box;
		height: 560px;
		width: 750px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 29;
		.sc-container {
			height: 510px;
			background-color: $BG3;
			.audio-main{
				width: 100%;
				float: left;
				background-color: rgba(255,255,255,.2);
				line-height: 510px;
				color: $T3;
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

	#local_video {
		position: absolute;
		width: 150px;
		height: 150px;
		top: 530px;
		left: 62%;
		z-index: 99999;
	}

	#remote_video {
		position: absolute;
		width: 750px;
		height: 470px;
		top: 245px;
		z-index: 99998;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
