<template>
	<div class="cp-audioCall-container">
		<common-title
			:title="'多人语音'"
			font-size="14px"
			height="40px"
			position="relative"
			background-color="#000000"
			color="#ffffff"
			:border="false"
			v-if="hasAudio">
		</common-title>
		<div class="sc-container"
			 v-if="hasAudio">
			<div class="audio-main">
				<span>语音通话中...</span>
			</div>
			<whiteboard-members
				class="cb-wb-members"
				:joined-list="joinedList"
				:waiting-list="waitingList">
			</whiteboard-members>
		</div>
		<div class="sc-footer"
			 v-if="hasAudio">
			<conference-control @inviteList="invite"
								:checkMembers="joinedList.concat(waitingList)"></conference-control>
			<el-button
				class="sc-cancel-btn"
				type="danger"
				@click="quitAudio">挂断</el-button>
		</div>
		<select-member
			v-if="!hasAudio"
			@inviteList="createAudio"
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
		name: "audioCallService",
		data() {
			return {
				conferenceService: window.cube.getConferenceService(),
				conference: {},
				inviteList: [],
				joinedList: [],
				waitingList: [],
				fInviteList: []
			}
		},
		props: {},
		computed: {
			hasAudio: function () {
				return !!this.$store.state.audioCall
			}
		},
		watch: {},
		beforeMount() {
		},
		mounted() {
			this.addAppListener();
		},
		methods: {
			createAudio(inviteMembers){
				if(inviteMembers.length < 1) {
					this.$message.error('请选择邀请人员。');
					return false;
				}
				let coferenceConfig = new CubeConferenceConfig();
				let invites = [];
				for(let invite of inviteMembers){
					invites.push(invite.cubeId);
				}
				coferenceConfig.invites = [];
				coferenceConfig.type = CubeGroupType.VOICE_CALL;
				coferenceConfig.autoNotify = false;
				this.fInviteList = invites;
				this.conferenceService.create(coferenceConfig);
				this.inviteList= [];
			},
			quitAudio(){
				this.conferenceService.quit(this.conference.conferenceId);
				this.$store.commit('changeLeftHoverNav','')
			},
			invite(invites){
				console.log('邀请会议成员参加', invites);
				if(invites == null || invites.length == 0){
					return;
				}
				let cubeIds = [];
				for(let invite of invites){
					cubeIds.push(invite.cubeId);
				}
				this.conferenceService.inviteMembers(this.conference.conferenceId, cubeIds);
			},
			addAppListener(){
				this.$bus.on('onConferenceRejectInvited',(res) =>{
					console.log("拒绝多人语音====>onConferenceRejectInvited", res);
					this.changeJoined(res.conference);

				});
				this.$bus.on('onVoiceCreated',(conference, from) =>{
					if(from.cubeId == cube.accName){
						this.conferenceService.join(conference.conferenceId);
					}
				});
				this.$bus.on('onVoiceCreatedConnected', (conference) => {
					if(conference.founder == this.$store.state.curUser){
						this.conferenceService.inviteMembers(this.conference.conferenceId, this.fInviteList);
					}
				});
				this.$bus.on('onVoiceJoined',(res) =>{
					this.$store.commit('updateAudioCall', res.conference)
					this.conference = res.conference;
					this.changeJoined(res.conference);
					if(res.from.cubeId == cube.accName){
						this.conferenceService.setAudioEnabled(res.conference.conferenceId);
					}
				});
				this.$bus.on('onVoiceQuited',(res) =>{
					console.log("会议退出====>onConferenceQuited", res);
					this.changeJoined(res.conference);
					if(res.quitMember.cubeId == cube.accName){
						this.$emit('conferenceDestroyed');
						this.$store.commit('updateAudioCall', '');
					}
				});
				this.$bus.on('onVoiceInvited',(res) =>{
					console.log('收到了音频邀请', res);
					this.changeJoined(res.conference);
					//this.conferenceService.join(res.conference.conferenceId);
				});
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
			destroyAppListener(){
				this.$bus.off('onVoiceCreated');
				this.$bus.off('onVoiceJoined');
				this.$bus.off('onVoiceQuited');
				this.$bus.off('onConferenceRejectInvited');
				// this.$bus.off('onVoiceInvited');
				this.$bus.off('onVoiceCreatedConnected');
			},
			closeDialog(){
				this.$store.commit('changeLeftHoverNav', '');
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
	.cp-audioCall-container {
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
</style>
