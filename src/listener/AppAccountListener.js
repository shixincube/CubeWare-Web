
import vue from 'vue'
/*
 * 实现注册监听器。
 */
export class AppAccountListener{
	constructor (vue) {
		this.vue = vue;
    }

    /**
     * 账号登录成功回调
     * @param session {Session}
     */
    onLogined (session) {
    	this.vue.$bus.emit('onLogined',session);
    }

    /**
     * 账号注销成功回调
     * @param session {Session}
     */
    onLogouted (session) {
    	console.log(session)
		// this.vue.$bus.emit('onLogouted',session);
    }

    onFailed (error) {

    }
};
