<template>
	<div class="cp-mt-call">
		<div class="cp-mt-calling" v-if="!answered">
			<img @click="$emit('openDialog',true)"
				 :name="message.sender"
				 :src="dataCenter.getAvatarByCube(message.sender)"
				 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
			<div class="cp-mt-call-outgoing"
				 v-if="direction == 'outgoing'">
				<p>
					<i class="el-icon-phone"></i>
					<span>发起了音视频通话</span>
				</p>
			</div>
			<div class="cp-mt-call-incoming"
				 v-if="direction == 'incoming'">
				<p>{{ caller }}</p>
				<div class="caller-info">
					<p>邀请您进行音视频通话</p>
					<div class="call-action">
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
			</div>
		</div>
		<div
			class="cp-mt-answered"
			v-else>
			<img src="./../assets/img/user-face.jpg"/>
			<p>{{ actionMessage }}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: "MessageTypeCall",
        data() {
            return {
				answered: false,
				actionMessage: ''
			}
        },
        props: {
        	direction: {
        		type: String,
				default: 'outgoing'
			},
			caller: {
        		type: String,
				default: 'Cube Team'
			}
		},
        computed: {},
        watch: {},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			rejectInvite() {
				this.$store.dispatch('rejectCallInvite').then(() => {
					this.answered = true;
					this.actionMessage = '已拒绝音视频通话';
				});
			},
			acceptInvite() {
				this.$store.dispatch('acceptCallInvite', {
					video: true
				}).then(() => {
					if(this.$store.state.inviteTypeInComing == 'audio') {
						this.$store.commit('updateInviteType', 'audioCallAlone');
					} else {
						this.$store.commit('updateInviteType', 'videoCallAlone');
					}
					this.answered = true;
					this.actionMessage = '已接听音视频通话';
				});
			}
		},
        components: {}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-mt-call {
		.cp-mt-calling {
			box-sizing: border-box;
			margin-top: 10px;
			> img {
				cursor: pointer;
				vertical-align: top;
				width: 40px;
				height: 40px;
				margin-left: 20px;
			}
			.cp-mt-call-outgoing {
				display: inline-block;
				vertical-align: top;
				> p {
					display: inline-block;
					padding: 10px 20px;
					margin-left: 4px;
					background-color: $BD6;
					border-radius: 30px;
				}
			}
			.cp-mt-call-incoming {
				display: inline-block;
				margin-left: 4px;
				.caller-info {
					margin-top: 4px;
					border-radius: 2px 15px 15px 15px;
					background-color: $BD6;
					padding: 10px 20px;
				}
				.call-action {
					margin-top: 5px;
					.el-button {
						padding: 5px 15px;
					}
				}
			}
		}
		.cp-mt-answered {
			> img {
				vertical-align: top;
				width: 40px;
				height: 40px;
				margin-left: 20px;
			}
			> p {
				margin-left: 10px;
				display: inline-block;
				border-radius: 2px 15px 15px 15px;
				padding: 10px 20px;
				background-color: $BD6;
				width: 170px;
				box-sizing: border-box;
			}
		}
	}
</style>
