<template>
	<section class="cb-login">
		<div class="cb-login-container">
			<div class="cb-login-header">
				<p>登录</p>
			</div>
			<div class="cb-login-step-container">
				<div class="cb-login-step"
					 v-show="loginStep == 1">
					<el-input v-model="appId" placeholder="appId"></el-input>
					<el-input v-model="appKey" placeholder="appKey"></el-input>
					<br/>
					<el-button @click="nextStep">下一步</el-button>
					<br/>
					<span class="no-account">没有APP信息? <a href="https://www.shixincube.com/loginAndRegister/register"> 免费注册</a></span>
				</div>
				<div class="cb-login-step"
					 v-show="loginStep == 2">
					<el-select v-model="selectAcc" placeholder="请选择账号">
						<el-option
							v-for="item in accList"
							:key="item.cubeId"
							:label="item.cubeId"
							:value="item.cubeId">
							<span style="float: left">{{ item.cubeId.toString() }}</span>
							<span style="float: right;
										 color: #8492a6;
										 font-size: 13px;
										 text-overflow:ellipsis;
										 width: 100px">{{ item.displayName.toString() }}</span>
						</el-option>
					</el-select>
					<br/>
					<el-button
						class="cb-login-btn"
						@click="login">
						登录
					</el-button>

				</div>
			</div>
		</div>
		<div class="version">v1.0.7</div>
	</section>
</template>

<script>
	import {validate, find, login} from './../ajax/api';

	export default {
		name: "login",
		data() {
			return {
				appId: this.utils.getCookie('appId') || '',
				appKey: this.utils.getCookie('appKey') || '',
				selectAcc: '',
				accList: '',
				loginStep: 1
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {
		},
		mounted() {
			this.addAppListener();
		},
		methods: {
			nextStep() {
				if (!this.appId || !this.appKey) {
					this.$message.error('请输入AppId与AppKey');
					return false;
				}
				this.utils.clearAllCookie();
				this.$store.commit('resetState');
				validate({
					appId: this.appId,
					appKey: this.appKey
				}).then(() => {
					find({
						appId: this.appId,
						appKey: this.appKey
					}).then((res) => {
						this.utils.setCookie('appId', this.appId);
						this.utils.setCookie('appKey', this.appKey);
						this.$store.commit('updateAppId', this.appId);
						this.$store.commit('updateAppKey', this.appId);
						this.$store.commit('updateUserList', res.data.list);
						this.loginStep = 2;
						let list = [];
						for (let i = 0; i < 12; i++) {
							res.data.list[i] && list.push(res.data.list[i]);
						}
						;
						for (let item of list) {
							item.cubeId = item.cubeId.toString();
						}
						;
						this.$store.commit('updateUserList', list);
						this.$store.commit('updateAllUserList', res.data.list);
						this.accList = list;
					});
				})
			},
			login() {
				if (!this.selectAcc) {
					this.$message.error('请选择登录账号');
					return false;
				}
				window.cube.setCubeConfig({
					"appid": this.appId,
					"licenseServer": cubeLicenseServer
				});
				login({
					appKey: this.appKey,
					appId: this.appId,
					cube: this.selectAcc
				}).then((res) => {
					this.$store.commit('updateCurUser', this.selectAcc);
					this.$store.commit('updateToken', res.data.cubeToken);
					this.utils.setCookie('cubeToken', res.data.cubeToken);
					// this.utils.setCookie('curCube',(this.selectAcc).toString());
					let ret = window.cube.getUserService().login(this.$store.state.curUser, res.data.cubeToken, this.$store.state.curUser);
					if (!ret) {
						this.$message({
							message: "注册操作出错，请检查用户名是否在证书的有效号段内。",
							type: 'error',
							duration: 1500
						});
					}
				})
			},
			addAppListener() {
				this.$bus.on('onLogined', () => {
					//注册成功更新群组
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
						this.$store.commit('createGroupList', groupList);
						this.$store.commit('updateCurGroupInfo', groupList[0]);
						this.$router.push({name: 'message', query: {curUser: this.$store.state.curUser}});
					}, (code, desc) => {
						if (code == 401) {
							this.$router.push({name: 'message', query: {curUser: this.$store.state.curUser}});
						}
					});

				});
			},
			destroyAppListener() {
				this.$bus.off('onLogined');
			}
		},
		components: {},
		beforeDestroy() {
			this.destroyAppListener();
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cb-login {
		.version {
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 10px;
			font-size: 20px;
			color: #606266;
			font-size: 12px
		}
		height: 100%;
		background-color: $BG2;
		.cb-login-container {
			position: absolute;
			width: 400px;
			height: 460px;
			box-sizing: border-box;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -70%);
			box-shadow: 0 2px 4px 1px rgba(218, 218, 218, 0.50);
			.cb-login-header {
				height: 100px;
				padding-top: 40px;
				box-sizing: border-box;
				background-color: $BG1;
				text-align: center;
				font-size: 28px;
				font-weight: 500;
			}
			.cb-login-step-container {
				text-align: center;
				background-color: $BG5;
				padding-bottom: 60px;
				.cb-login-step {
					.no-account {
						font-size: 14px;
						color: #606266;
						margin-top: 20px;
						display: inline-block;
						float: left;
						text-align: center;
						width: 100%;
						a {
							color: #337ab7;
							text-decoration: none;
						}
					}
					.el-input {
						margin-top: 66px;
						&:nth-child(2) {
							margin-top: 30px;
						}
						.el-input__inner {
							width: 275px;
							height: 46px;
							border-radius: 2px;
							background-color: $BG1;
							border: none;
						}
					}
					.el-button {
						width: 275px;
						height: 46px;
						border-radius: 2px;
						border: none;
						background-color: $BG22;
						color: $T3;
						margin-top: 66px;
					}
					.cb-login-btn {
						margin-top: 142px;
					}
				}
			}
		}
	}

	.el-select-dropdown {
		ul {
			height: 127px;
			box-shadow: 0 2px 4px 1px rgba(218, 218, 218, 0.50);
		}
	}
</style>
