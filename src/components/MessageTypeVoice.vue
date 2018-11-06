<template>
	<div class="cp-mt-voice"
		 :class="{ myselfMessage: isMyself } ">
		<img @click="$emit('openDialog',true)"
			 :name="message.sender"
			 :src="dataCenter.getAvatarByCube(message.sender)"
			 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
		<div class="voice-container ml10"
			 :class="{ myselfContainer: isMyself } ">
			<p v-show="isGroup && !isMyself">{{message.name}}</p>
			<p>
				<el-button @click="playAudio" type="text">
					<div class="state" :class="state">
						<div class="duration " >{{message.duration + "″"}} </div>
					</div>
				</el-button>
				<audio :src="message.fileUrl" type="audio/ogg"></audio>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MessageTypeVoice",
		data() {
			return {
				state: "state",
				timer:0
			}
		},
		props: {
			message: {
				type: Object,
				default: function () {
					return {}
				}
			},
			isGroup: false,
			isMyself: false
		},
		computed: {},
		watch: {},
		beforeMount() {
		},
		mounted() {
		},
		methods: {
			playAudio(event) {
				let audio = event.currentTarget.nextElementSibling;
				let i = 1;	clearInterval(this.timer);
				this.timer = setInterval(() => {
					if (i <= 3) {
						this.state = "state" + i;
						i++;
					} else {
						i = 1;
					}
				}, 500)
				setTimeout(() => {
					this.state = "state3";
					clearInterval(this.timer);
				}, this.message.duration * 1000);
				audio.play();
			}
		},
		components: {}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-mt-voice {
		box-sizing: border-box;
		padding: 20px;
		position: relative;
		> img {
			cursor: pointer;
			display: inline-block;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: top;
		}
		.voice-container {
			display: inline-flex;
			flex-direction: column;
			vertical-align: top;

			> p {
				&:first-child {
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #666666;
					text-align: left;
				}
				&:last-child {
					max-width: 100%;
					word-break: break-all;
					border: 1px solid $BD6;
					padding: 0 15px;
					width: 50px;
					height: 43px;
					color: $T1;
					background-color: $BD6;
					border-radius: 0 6px 6px 6px ;
					margin-top: 5px;
					.duration {
						color: #001300;
						padding: 0px 12px;
						line-height: 21px;
					}
					.state {
						background-position: left center;
						width: 45px;
						height: 20px;
						background: url('./../assets/img/voice3.png') no-repeat;
						&.state1 {
							background: url('./../assets/img/voice1.png') no-repeat;
						}
						&.state2 {
							background: url('./../assets/img/voice2.png') no-repeat;
						}
						&.state3 {
							background: url('./../assets/img/voice3.png') no-repeat;
						}
					}

				}
				> img {
					padding: 10px;
				}
			}
		}
		.myselfContainer {
			margin-right: 10px;
			text-align: right;
			> p {
				&:first-child {
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #666666;
					text-align: right;
				}
				&:last-child {
					.duration {
						color: #ffffff;
					}
					border-radius: 10px 0 10px 10px;
					background: #4493FA;
					.state {
						width: 45px;
						height: 20px;
						background: url('./../assets/img/voice-self3.png') no-repeat;
						background-position: right center;
						&.state1 {
							background: url('./../assets/img/voice-self1.png') no-repeat;
							background-position: right center;
						}
						&.state2 {
							background: url('./../assets/img/voice-self2.png') no-repeat;
							background-position: right center;
						}
						&.state3 {
							background: url('./../assets/img/voice-self3.png') no-repeat;
							background-position: right center;
						}

					}
				}

			}
		}
	}
</style>
