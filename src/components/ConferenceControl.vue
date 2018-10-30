<template>
    <div class="cp-conference-control">
		<div class="cp-conference-control-container">
			<div class="cp-cc-btn-container" v-if="!isWhiteboard">
				<img src="./../assets/img/msg_vice1_n.png"
					 class="pointer cp-cc-btn"
					 @click="toggleVoice"
					 v-show="!banVoice">
				<img src="./../assets/img/msg_vice1_s.png"
					 class="pointer cp-cc-btn"
					 @click="toggleVoice"
					 v-show="banVoice">
				<el-slider
					v-model="volume"
					vertical
					height="200px"
					@change="changeVolume"
					class="cp-volume-control"
					v-show="showSlider">
				</el-slider>
				<img src="./../assets/img/msg_popvoice_n.png"
					 class="pointer cp-cc-btn"
					 @click="beforeChangeVolume"
					 v-show="!showSlider">
				<img src="./../assets/img/msg_popvoice_s.png"
					 class="pointer cp-cc-btn"
					 v-show="showSlider"
					 @click="beforeChangeVolume">
			</div>
			<img src="./../assets/img/msg_popadd_n.png"
				 class="pointer cp-cc-btn"
				 v-show="!showAddMember"
				 v-if="btnStatus"
				 @click="addMembers">
			<img src="./../assets/img/msg_popadd_s.png"
				 class="pointer cp-cc-btn"
				 v-show="showAddMember">
			<select-member
				v-show="showAddMember"
				class="cp-cc-select-member"
				:checkMembers="checkMembers"
				@closeDialog="closeDialog"
				@inviteList="emitInviteList">
			</select-member>
		</div>
	</div>
</template>

<script>
	import SelectMember from './../components/SelectMember';
    export default {
        name: "ConferenceControl",
        data() {
            return {
            	sipService: window.cube.sipService,
				volume: 100,
				showSlider: false,
				banVoice: false,
				showAddMember: false
			}
        },
        props: {
        	isWhiteboard: {
        		type: Boolean,
				default: false
			},
			checkMembers: {
				type: Array,
				default: function () {
					return []
				}
			},
			showAddMemberBtn: {
        		type: Boolean,
				default: true
			}
		},
        computed: {
        	btnStatus: function () {
				return this.showAddMemberBtn;
			}
		},
        watch: {

		},
        beforeMount() {

        },
        mounted() {
			this.onBlur();
        },
        methods: {
			onBlur(){
                 // 点击其他不在的区域触发事件
                var element = document.getElementsByClassName('changeVolumeBtn')[0];
                document.addEventListener('click', (e) => {
                    if (!this.$el.contains(e.target)){
                        this.showSlider = false;
                    }
                })
            },
			toggleVoice() {
				this.showSlider = false;
				this.banVoice = !this.banVoice;
				if(this.banVoice) {
					window.cube.getMediaService().closeVoice();
				} else {
					window.cube.getMediaService().openVoice();
				}
			},
			changeVolume() {
				this.beforeChangeVolume();
				this.sipService.remoteVideo.volume = this.volume / 100;
			},
			addMembers() {
				this.showSlider = false;
				this.showAddMember = true;
				const element = {
					'conference': 'showCRemoteVideo',
					'groupVideo': 'showCRemoteVideo',
					'whiteboard': 'showWBCanvas',
					'shareScreen': this.$store.state.shareScreen && this.$store.state.shareScreen.masters[0].cubeId == this.$store.state.curUser ? 'showCLocalVideo' : 'showCRemoteVideo'
				};
				this.$store.commit('closeEngineElement', element[this.$store.state.inviteType]);
			},
			emitInviteList(list) {
				this.showAddMember = false;
				const element = {
					'conference': 'showCRemoteVideo',
					'groupVideo': 'showCRemoteVideo',
					'whiteboard': 'showWBCanvas',
					'shareScreen': this.$store.state.shareScreen && this.$store.state.shareScreen.masters[0].cubeId == this.$store.state.curUser ? 'showCLocalVideo' : 'showCRemoteVideo'
				};
				this.$store.commit('openEngineElement', element[this.$store.state.inviteType]);
				this.$emit('inviteList', list);
			},
			beforeChangeVolume() {
				this.showSlider = !this.showSlider;
			},
			closeDialog(){
				this.showAddMember = false;
			}
		},
        components: {
			SelectMember
		}
    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-conference-control {
		position: absolute;
		display: inline-block;
		box-sizing: border-box;
		.cp-conference-control-container {
			position: absolute;
			top: 0;
			left: 0;
			width: 300px;
			.cp-cc-btn-container {
				display: inline-block;
			}
			.cp-cc-btn {
				width: 20px;
				height: 20px;
				vertical-align: middle;
				margin-right: 20px;
			}
			.cp-volume-control {
				position: absolute;
				top: -50px;
				left: 35px;
				z-index: 1000;
				.el-slider__runway {
					height: 60px !important;
				}
			}
			.cp-cc-select-member {
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				z-index: 99999999;
			}
		}
	}

</style>
