/**
 *  由于Vuex中无法获取Vue实例，如果需要通过Vue进行操作请传入Vue对象
 *  如 getUserInfo (action, _this)
 * */

import state from './state';

export default {
	makeCall(action, config) {
		window.cube.getCallService().makeCall(config.name, config.video);
	},

	acceptCallInvite(action, config) {
		window.cube.getCallService().answerCall(config.video);
	},

	rejectCallInvite(action, config) {
		window.cube.getCallService().terminateCall();
	}
}
