<template>
    <div class="cp-join-conference">
		<div class="cp-jc-header"
			 v-if="conferenceInfo.type == 'whiteboard'">
			<img src="./../assets/img/msg_chatwhiteboard_s.png">
			<span>白板演示正在进行</span>
			<span>人数 {{ conferenceInfo.members.length }} / {{conferenceInfo.invites.length + 1}}</span>
		</div>
		<div class="cp-jc-header"
			 v-if="conferenceInfo.type == 'conference'">
			<img src="./../assets/img/msg_chatphone_s.png">
			<span>会议正在进行</span>
			<span>人数 {{ conferenceInfo.members.length }} / {{conferenceInfo.invites.length + 1}}</span>
		</div>
		<div class="cp-jc-header"
			 v-if="conferenceInfo.type == 'share-screen'">
			<img src="./../assets/img/msg_chatshare_s.png">
			<span>共享桌面正在进行</span>
			<span>人数 {{ conferenceInfo.members.length }} / {{conferenceInfo.invites.length + 1}}</span>
		</div>
		<p>参与人员</p>
		<div class="cp-jc-members">
			<div class="cp-jc-member-list"
				 v-for="item in conferenceInfo.members">
				<img src="./../assets/img/user-face.jpg">
				<p>{{ item.cubeId }}</p>
			</div>
		</div>
		<div class="cp-jc-join-btn">
			<el-button @click="joinConference">加入</el-button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "JoinConference",
        data() {
            return {}
        },
        props: {
        	conferenceInfo: {
        		type: Object,
				default: function () {
					return {}
				}
			}
		},
        computed: {},
        watch: {},
        beforeMount() {

        },
        mounted() {

        },
		beforeDestroy() {
        	this.$bus.off('onShareJoined', this.setEnable);
		},
        methods: {
			joinConference() {
				this.$emit('conferenceJoined');
				switch (this.conferenceInfo.type) {
					case 'share-screen': {
						this.$bus.on('onShareJoined', this.setEnable);
						window.cube.getConferenceService().join(this.conferenceInfo.conferenceId);
						this.$store.commit('updateShareScreen', this.conferenceInfo);
						this.$store.commit('openEngineElement', 'showCRemoteVideo');
						this.$store.commit('updateInviteType', 'shareScreen');
						break;
					}
				}
			},
			setEnable(conferenceInfo) {
				window.cube.getConferenceService().setVideoEnabled(this.conferenceInfo.conferenceId, true);
			}
		},
        components: {}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-join-conference {
		position: absolute;
		left: 321px;
		top: 49px;
		width: calc(100% - 521px);
		box-sizing: border-box;
		height: 170px;
		z-index: 10;
		padding: 20px;
		background-color: $BG20;
		.cp-jc-header {
			font-size: 14px;
			overflow: hidden;
			> img {
				margin-right: 10px;
				width: 15px;
				height: 15px;
				vertical-align: middle;
			}
			> span {
				vertical-align: middle;
				&:last-child {
					color: $T2;
					float: right;
				}
			}
		}
		> p {
			font-size: 12px;
			color: $T4;
			margin-top: 15px;
		}
		.cp-jc-members {
			.cp-jc-member-list {
				display: inline-block;
				width: 50px;
				text-align: center;
				overflow: hidden;
				> img {
					margin-top: 13px;
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				> p {
					font-size: 12px;
					color: $T8;
					margin-top: 11px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
		.cp-jc-join-btn {
			position: relative;
			.el-button {
				position: absolute;
				right: 0;
				top: -30px;
				background-color: $BG22;
				width: 70px;
				height: 30px;
				padding: 0;
				color: $T3;
				border: none;
			}
		}
	}
</style>
