/*
 * 实现注册监听器。
 */
import {find} from './../ajax/api';

export class AppAccountListener {
	constructor(vue) {
		this.vue = vue;
	}

	/**
	 * 账号登录成功回调
	 * @param session {Session}
	 */
	onLogined(session) {
		this.vue.$bus.emit('onLogined', session);
		if (window.CubeLogin) {
			CubeLogin();
		}
	}

	/**
	 * 账号注销成功回调
	 * @param session {Session}
	 */
	onLogouted(session) {
		console.log(session)
		// this.vue.$bus.emit('onLogouted',session);
	}

	/**
	 * 用户更新监听
	 * @param session {Session}
	 */
	onUserUpdated(user) {
		for (let i = 0; i < document.getElementsByName(user.cubeId).length; i++) {
			document.getElementsByName(user.cubeId)[i].src = user.avatar + "?update=" + Date.now();
		}
		user.avatar = user.avatar + "?update =" + Date.now();
		this.vue.$store.commit("updateUser", user);

		// find({
		// 	appId: this.vue.utils.getCookie('appId'),
		// 	appKey: this.vue.utils.getCookie('appKey'),
		// }).then((res) => {
		// 	let list = [];
		// 	for (let i = 0; i < 12; i++) {
		// 		res.data.list[i] && list.push(res.data.list[i]);
		// 	}
		// 	for (let item of list) {
		// 		item.cubeId = item.cubeId.toString();
		// 	}
		// 	this.vue.$store.commit('updateUserList', list);
		// 	this.vue.$store.commit('updateAllUserList', res.data.list);
		// });

	}

	onFailed(error) {

	}
};
