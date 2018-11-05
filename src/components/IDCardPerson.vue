<template>
	<div class="cp-id-card-person">
		<i-d-card-header :id-card-name="userInfo.displayName|| userInfo.cubeId"
						 card-type="person" :id-card-group-id="userInfo.cubeId">
		</i-d-card-header>

		<div class="cp-id-card-body">
			<inline-list
				left-info="ID"
				:right-info="userInfo.cubeId"
				left-width="80px"
				class="mt10"
				right-padding="0"
				left-padding="0 0 0 20px"></inline-list>

			<inline-list
				left-info="昵称"
				:right-info="userInfo.displayName|| userInfo.cubeId"
				left-width="80px"
				class="mt10"
				right-padding="0"
				left-padding="0 0 0 20px"></inline-list>
			<el-button
				v-show="!($store.state.curUser == userInfo.cubeId)"
				@click="sendMessage"
				type="primary"
				:round="true"
				class="cp-id-card-btn">发消息
			</el-button>

			<el-button
				v-show="$store.state.curUser == userInfo.cubeId && isQuit"
				@click="logout"
				type="danger"
				:round="true"
				class="cp-id-card-btn">退出登录
			</el-button>
		</div>
	</div>
</template>

<script>
	import IDCardHeader from './../components/IDCardHeader';
	import InlineList from './../components/InlineList';

	export default {
		name: "IDCardPerson",
		data() {
			return {
				userService: window.cube.getUserService()
			}
		},
		props: {
			userInfo: {
				type: Object,
				default: function () {
//					let index = this.$store.state.userList[0].cubeId == this.$store.state.curUser ? 1 : 0;
					console.log(this.$store.state.userList[0], this.$store.state.curUser,'=============')
					return this.$store.state.userList[1]
				}
			},
			isQuit:{
				type: Boolean,
				default: false
			}
		},
		computed: {},
		watch: {},
		beforeMount() {
			this.addAppListener();
		},
		mounted() {

		},
		methods: {
			sendMessage() {
				this.$store.commit('updateMessagePeer', this.userInfo.cubeId);
//				this.$bus.emit('changeRecentList',this.groupInfo.groupId);
				setTimeout(() => {
					this.dataCenter.getRecentSessionById(this.userInfo.cubeId, recent => {
						if(recent){
							recent.time  = Date.now();
							window.cube.getRecentSessionService().addRecentSession(new CubeRecentSession(recent));
						}else {
							window.cube.getRecentSessionService().addRecentSession(new CubeRecentSession({
								sessionId: this.userInfo.cubeId,
								displayName: this.userInfo.displayName,
								sessionType: 'C2C',
								time: Date.now()
							}));
						}
					});
				}, 300);
				this.$store.commit('updateMessagePeer', this.userInfo.cubeId);
				this.$emit("closeDialog", false);
				this.$router.push({name: 'message'});
			},
			logout() {
				this.userService.logout();
				this.$router.push({name: 'login'});
				window.location.reload();
			},
			addAppListener() {
//				this.$bus.on('checkUserInfo', user => {
//					this.userInfo = user;
//				});
			},

		},
		components: {
			IDCardHeader,
			InlineList
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-id-card-person {
		.cp-id-card-body {
			position: relative;
			height: 300px;
			background-color: $BG5;
			border-radius: 0 0 6px 6px;
			.cp-id-card-btn {
				position: absolute;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
			}
			.group-members-avatar-container {
				max-height: 250px;
				overflow: hidden;
				padding: 15px 5px;
				.member-content {
					position: relative;
					display: inline-block;
					> img {
						width: 50px;
						height: 50px;
						margin-left: 10px;
						border-radius: 50%;
						margin-top: 5px;
					}
					.remove-member-btn {
						position: absolute;
						right: 4px;
						top: -2px;
						color: #e2171c;
						float: right;
						padding-top: 6px;
						cursor: pointer;
					}
				}
				.add-btn {
					padding: 0;
					margin: 0 0 0 10px;
					font-size: 58px;
					color: #c9c8cd;
					cursor: pointer;
					font-weight: 100;
					float: left;
					display: block;
				}

			}
		}
	}
</style>
