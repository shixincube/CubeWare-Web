<template>
	<div class="cp-conference-container">
		<div class="cp-conference-detail">
			<h2>会议详情</h2>
			<inline-list
				left-info="会议主题"
				:right-info="conference.displayName"
				left-padding="0"
				right-padding="0"
				left-width="100px"
				class="mt20">
			</inline-list>
			<inline-list
				left-info="开始时间"
				:right-info="utils.formatTime(conference.startTime, 'YY-MM-DD HH-MM-SS')"
				left-padding="0"
				right-padding="0"
				left-width="100px"
				class="mt20">
			</inline-list>
			<inline-list
				left-info="会议时间"
				:right-info="conference.duration/60 + '分钟'"
				left-padding="0"
				right-padding="0"
				left-width="100px"
				class="mt20">
			</inline-list>
			<group-join-member :memberList="conference.invites"
							   :isCreate="true"
							   @joinConference="join"
							   @inviteList="invite"></group-join-member>
		</div>
	</div>
</template>

<script>
	import CommonTitle from './../components/CommonTitle';
	import WhiteboardMembers from './../components/WhiteboardMembers';
	import ConferenceControl from './../components/ConferenceControl';
	import InlineList from './../components/InlineList';
	import GroupJoinMember from './../components/GroupJoinMember';
	export default {
		name: "ConferenceList",
		data() {
			return {
				conferenceService: window.cube.getConferenceService(),
				inviteList: [],
				addVisible: false,
				joinedList: [],
				waitingList: [],
				hasConference: false
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
		computed: {},
		watch: {},
		beforeMount() {
			this.addAppListener();
			this.closeElement();
			//this.openElement();
		},
		mounted() {

		},
		methods: {
			onVideoCreated(conference, from){
				console.log("会议创建在会议详情====>onConferenceCreated", conference, from);
				if(from.cubeId == cube.accName){
					//this.conferenceService.join(conference.conferenceId);
				}
			},
			onViedoJoined(res){
				console.log("会议加入====>onConferenceJoined", res);
				//this.changeJoined(res.conference);
//					if(res.from.cubeId == cube.accName){
//						this.conferenceService.setVideoEnabled(res.conference.conferenceId);
//					}
			},
			onVideoInvited(res){
				console.log('收到了邀请', res);
				this.conference.invites = res.conference.invites;
			},
			addAppListener(){
				this.$bus.on('onVideoCreated', this.onVideoCreated);
				this.$bus.on('onViedoJoined', this.onViedoJoined);
				this.$bus.on('onVideoInvited', this.onVideoInvited);
			},
			destroyAppListener(){
				this.$bus.off('onVideoCreated', this.onVideoCreated);
				this.$bus.off('onViedoJoined', this.onViedoJoined);
				this.$bus.off('onVideoInvited', this.onVideoInvited);
			},
//			changeJoined(conference){
//				this.joinedList = [];
//				this.waitingList = [];
//				let hasJoin = {};
//				for(let join of conference.members){
//					let joinCubeId = join.cubeId;
//					this.joinedList.push({
//						cubeId:joinCubeId,
//						displayName:joinCubeId
//					});
//					hasJoin[join.cubeId] = true;
//				}
//				for(let waiting of conference.invites){
//					if(!hasJoin[waiting.cubeId]){
//						this.waitingList.push({
//							cubeId:waiting.cubeId,
//							displayName:waiting.cubeId
//						});
//					}
//				}
//			},
			invite(invites){
				console.log('邀请会议成员参加', invites);
				let cubeIds = [];
				for(let invite of invites){
					cubeIds.push(invite.cubeId);
				}
				this.conferenceService.inviteMembers(this.conference.conferenceId, cubeIds);
			},
			join(){
				this.conferenceService.join(this.conference.conferenceId);
				this.$store.commit('updateInviteType', 'conference');
			},
			quitConference(){
				this.conferenceService.quit(this.conference.conferenceId);
				this.closeElement();
			},
			closeElement() {
				this.hasConference = false;
				this.$store.commit('closeEngineElement', 'showCRemoteVideo');
			},
			openElement() {
				this.hasConference = true;
				this.$store.commit('openEngineElement', 'showCRemoteVideo');
			}
		},
		components: {
			CommonTitle,
			WhiteboardMembers,
			ConferenceControl,
			InlineList,
			GroupJoinMember
		},
		beforeDestroy(){
			this.destroyAppListener();
		}
	}
</script>

<style lang='scss' type="text/scss">
	@import "./../assets/css/color-library";
	.cp-conference-container{
		display: inline-block;
		position: absolute;
		width: calc(100% - 300px);
		height: 100%;
		vertical-align: top;
		overflow-x: hidden;
		.cp-conference-detail {
			padding: 60px;
			box-sizing: border-box;
		}
	}
</style>

