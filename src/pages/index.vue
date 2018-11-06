<template>
	<div class="cb-scroll">
		<el-container class="el-container">
			<el-aside width="70px">
				<left-nav></left-nav>
			</el-aside>
			<el-main style="padding: 0;" class="cb-container">
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import LeftNav from './../components/LeftNav';
	import {validate, find, login} from './../ajax/api';

	export default {
		name: "index",
		data() {
			return {
				groupList: []
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeRouteEnter(to, from, next) {
			if(from.name != "login"){
				let getCookie = (name) => {
					var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
					if (arr = document.cookie.match(reg))
						return decodeURI(arr[2]);
					else
						return null
				}
				let curUser = to.query.curUser,
					appId = getCookie('appId'),
					appKey = getCookie('appKey');
				window.cube.setCubeConfig({
					"appid": appId,
					"licenseServer": 'https://dev.license.shixincube.cn/auth/license/get'
				});

				login({
					appId: appId,
					appKey: appKey,
					cube: curUser
				}).then((res) => {
					let ret = window.cube.getUserService().login(curUser, res.data.cubeToken, curUser);
					if (!ret) {
						vm.$message({
							message: "注册操作出错，请检查用户名是否在证书的有效号段内。",
							type: 'error',
							duration: 1500
						});
					}
					window.CubeLogin = () => {
						window.cube.getGroupService().queryGroups(0, 1000, groups => {
							let groupList = [];
							// 去重
							groups.map((group) => {
								let same = false;
								groupList.map((item) => {
									if (group.groupId == item.groupId) {
										same = true;
									}
								})
								if (!same) {
									groupList.push(group);
								}
							});
							find({
								appId: appId,
								appKey: appKey,
							}).then((res) => {
								next(vm => {
									vm.$store.commit('createGroupList', groupList);
									vm.$store.commit('updateCurGroupInfo', groupList[0]);
									let list = [];
									for (let i = 0; i < 12; i++) {
										res.data.list[i] && list.push(res.data.list[i]);
									}
									for (let item of list) {
										item.cubeId = item.cubeId.toString();
									}

									vm.$store.commit('updateUserList', list);
									vm.$store.commit('updateAllUserList', res.data.list);


									vm.$bus.off('onLogined');
									vm.$store.commit('updateCurUser', vm.$route.query.curUser);
									vm.$store.commit('updateToken', res.data.cubeToken);
									vm.utils.setCookie('appId', appId);
									vm.utils.setCookie('appKey', appKey);
									vm.$store.commit('updateAppId', appId);
									vm.$store.commit('updateAppKey', appKey);
								})
							});
						}, function (code, desc) {

						});

					}

				}).catch({
					
				});
			}else {
				next();
			}

		},
		beforeMount() {
			this.checkLogin();
			this.addAppListener();
		},
		mounted() {

		},
		methods: {
			checkLogin() {
//				if (!this.$store.state.curUser) {
//					this.$store.dispatch('onLogined', this);
//				}
			},
			closeLoading() {
				if (this.$store.state.loadingMsg) this.$store.state.loadingMsg.close();
			},

			addAppListener() {
				this.$bus.on('onMessageSyncEnd', () => {
					console.log('消息同步结束');
					setTimeout(() => {
						this.closeLoading();
					}, 1000);
				});
			}
		},
		components: {
			LeftNav
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cb-container {
		height: 100%;
		box-sizing: border-box;
		.cb-message-list-container {
			display: inline-block;
			width: 250px;
			height: 99%;
			overflow: hidden;
			border-right: 1px solid $BD1;
			.cp-scroll {
				height: 100%;
			}
		}
		.cb-message-content {
			display: inline-block;
			vertical-align: top;
		}
	}
</style>
