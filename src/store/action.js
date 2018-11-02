/**
 *  由于Vuex中无法获取Vue实例，如果需要通过Vue进行操作请传入Vue对象
 *  如 getUserInfo (action, _this)
 * */

import state from './state';
import { login } from './../ajax/api';

export default {
	makeCall(action, config) {
		window.cube.getCallService().makeCall(config.name, config.video);
	},

	acceptCallInvite(action, config) {
		window.cube.getCallService().answerCall(config.video);
	},

	rejectCallInvite(action, config) {
		window.cube.getCallService().terminateCall();
	},

	onLogined(action, _this) {
		_this.$bus.on('onLogined',() =>{
			//注册成功更新群组
			window.cube.getGroupService().queryGroups(0, 1000, groups => {
				let groupList = [];
				// 去重
				groups.map((group)=>{
					let same = false;
					groupList.map((item)=>{
						if(group.groupId == item.groupId){
							same = true;
						}
					})
					if(!same){
						groupList.push(group);
					}
				});
				console.log('createGroupList',groupList)
				_this.$store.commit('createGroupList', groupList);
				_this.$bus.off('onLogined');
			}, function (code, desc) {
			});
		});
		window.cube.setCubeConfig({
			"appid": _this.utils.getCookie('appId'),
			"licenseServer": 'https://dev.license.shixincube.cn/auth/license/get'
		});
		login({
			appKey: _this.utils.getCookie('appKey'),
			appId: _this.utils.getCookie('appId'),
			cube: _this.$route.query.curUser
		}).then((res) => {
			_this.$store.commit('updateCurUser', _this.$route.query.curUser);
			_this.$store.commit('updateToken', res.data.cubeToken);
			let ret = window.cube.getUserService().login(_this.$store.state.curUser, res.data.cubeToken, _this.$store.state.curUser);
			if (!ret) {
				_this.$message({
					message: "注册操作出错，请检查用户名是否在证书的有效号段内。",
					type: 'error',
					duration: 1500
				});
			}
		})
	}
}
