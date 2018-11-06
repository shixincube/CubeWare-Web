<template>
	<div class="cp-message-bottom-fixed">
		<div class="cp-mbf-header">
			<img :src="dataCenter.getAvatarByCube(conferenceNotify.name)"/>
			<div class="cp-mbf-header-right">
				<p>{{ dataCenter.getNameByCube(conferenceNotify.name) }}</p>
				<p>邀请您参加 {{ getTypeName(conferenceNotify.inviteType) }}</p>
			</div>
		</div>
		<!--<div class="cp-mbf-body">-->
			<!--<p>参与人员</p>-->
			<!--<div class="cp-mbf-body-img">-->
				<!--<img :src="dataCenter.getAvatarByCube(i)" v-for="i in conferenceNotify.inviteList"/>-->
			<!--</div>-->
		<!--</div>-->
		<div class="cp-mbf-footer">
			<el-button
				type="danger"
				class="call-action-btn"
				@click="rejectInvite">拒绝</el-button>
			<el-button
				type="success"
				class="call-action-btn"
				@click="acceptInvite">接受</el-button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "MessageBottomFixed",
        data() {
            return {}
        },
        props: {
			conferenceNotify: {
				type: Object,
				default: {
					name: '',
					inviteType: '',
					inviteList: []
				}
			}
		},
        computed: {},
        watch: {},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			acceptInvite() {
				this.$emit('acceptInvite', this.conferenceNotify);
			},
			rejectInvite() {
				this.$emit('rejectInvite', this.conferenceNotify);
			},
			getTypeName(type){
				let nameMap = {};
				nameMap[CubeGroupType.VOICE_CALL] = '多人语音';
				nameMap[CubeGroupType.VIDEO_CALL] = '群视频';
				nameMap[CubeGroupType.VIDEO_CONFERENCE] = '视频会议';
				nameMap['share-screen'] = '远程桌面';
				nameMap['share-wb'] = '白板';
				nameMap['user-video-call'] = '一对一视频';
				nameMap['user-voice-call'] = '一对一语音';
				this.dataCenter.getInfoByCube(this.conferenceNotify.name, (info)=>{
					console.log('获得的用户信息', info);
				});
				return nameMap[type];
			}
		},
        components: {}
    }
</script>

<style lang='scss' type="text/scss">
	@import "./../assets/css/color-library";
	.cp-message-bottom-fixed {
		position: fixed;
		top: 25px;
		right: 20px;
		box-sizing: border-box;
		width: 300px;
		box-shadow: 0 4px 13px 1px rgba(208,208,208,0.50);
		z-index: 99999;
		background-color: $BG5;
		border-radius: 4px;
		text-align: left;
		.cp-mbf-header {
			> img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				vertical-align: middle;
				margin-top: 20px;
				margin-left: 20px;
				margin-bottom: 15px;
			}
			> .cp-mbf-header-right {
				text-align: left;
				display: inline-block;
				vertical-align: middle;
				margin-left: 10px;
				p {
					&:last-child {
						color: $T5;
						font-size: 14px;
					}
				}
			}
		}
		.cp-mbf-body {
			text-align: left;
			margin-top: 5px;
			> .cp-mbf-body-img {
				> img {
					margin-top: 5px;
					width: 25px;
					height: 25px;
					margin-left: 8px;
					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
		.cp-mbf-footer {
			height: 50px;
			line-height: 50px;
			border-top: 1px solid $BD1;
			margin-top: 5px;
			text-align: right;
			.el-button {
				height: 30px;
				padding: 0 20px;
				&:last-child {
					margin-right: 15px;
				}
			}
		}
	}
</style>
