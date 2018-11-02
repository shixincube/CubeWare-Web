export default {
	updateAppId(state, appId) {
		state.appId = appId;
	},

	updateAppKey(state, appKey) {
		state.appKey = appKey;
	},

	updateToken(state, token) {
		state.cubeToken = token;
	},

	updateUserList(state, list) {
		state.userList = list;
	},

	updateAllUserList(state, list) {
		state.allUserList = list;
	},

	createGroupList(state, list) {
		state.groupList = list;
	},

	addGroupList(state, list) {
		state.groupList.push(list);
	},

	updateGroupList(state, list) {
		state.groupList.map((group, index) => {
			if (group.groupId == list.groupId) {
				state.groupList.splice(index, 1, list);
			}
		});
	},

	removeGroupList(state, list) {
		state.groupList.map((group, index) => {
			if (group.groupId == list.groupId) {
				state.groupList.splice(index, 1);
			}
		});
	},

	updateMessagePeer(state, peer) {
		state.messagePeer = peer;
	},

	updateCurGroup(state, groupId) {
		state.curGroup = groupId;
	},

	updateAudioCall(state, audioCall) {
		state.audioCall = audioCall;
	},

	updateGroupVideo(state, groupVideo) {
		state.groupVideo = groupVideo;
	},

	updateWhiteboard(state, whiteboard) {
		state.whiteboard = whiteboard;
	},

	updateShareScreen(state, screen) {
		state.shareScreen = screen;
	},

	updateCurUser(state, cubeId) {
		state.curUser = cubeId;
	},

	updateJoinedList(state, list) {
		state.joinedList = list
	},

	updateInviteList(state, list) {
		state.inviteList = list;
	},

	updateInviteType(state, type) {
		state.inviteType = type;
	},

	updateInviteTypeInComing(state, type) {
		state.inviteTypeInComing = type;
	},

	resetState(state) {
		state.appId = '';
		state.appKey = '';
		state.token = '';
	},

	openEngineElement(state, element) {
		state[element] = true;
	},

	closeEngineElement(state, element) {
		state[element] = false;
	},
	changeLeftHoverNav(state, index) {
		state.leftHoverNav = index;
	},
	getAllUnread(state, num){
		state.allUnread = num;
	},
	updateLoadingMsg(state, data) {
		state.loadingMsg = data;
	},
	messageBottomFixed(state, type){
		state.messageBottomFixed = type;
	},
}
