/**
 * 群组监听器。
 * 通过群组状态监听器来监听群组的状态变化。
 */
export class AppGroupListener {
	constructor(vue) {
		this.vue = vue;
	}

	/**
	 * 当有群组被创建且自己是其中成员时被调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 * @param {String} customId - 自定义字段。
	 */
	onGroupCreated(groupContext, customId) {
		this.vue.$store.commit('addGroupList', groupContext);
		setTimeout(() => {
			window.cube.getRecentSessionService().addRecentSession(new CubeRecentSession({
				sessionId: groupContext.groupId,
				displayName: groupContext.displayName,
				sessionType: 'GROUP',
				time: Date.now()
			}));
		}, 300);
	}

	/**
	 * 当有群组被删除且自己是其中成员时被调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 */
	onGroupDestroyed(groupContext) {
		console.log('onGroupDestoryed');
		this.vue.$store.commit('removeGroupList', groupContext);
		this.vue.$bus.emit('onGroupDestroyed',groupContext);

	}

	/**
	 * 当自己所在的群组有新增成员时被调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 * @param {Array.<String>} members - 新增后群组中所有成员的数组。
	 * @param {Array.<String>} addedMembers - 本次新增的成员数组。
	 */
	onMemberAdded(groupContext, members, addedMembers) {
		console.log('onMemberAdded',groupContext)
		this.vue.$store.commit('updateGroupList', groupContext);
	}

	/**
	 * 当自己所在的群组被删除时被调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 * @param {Array.<String>} members - 删除后群组中所有成员的数组。
	 * @param {Array.<String>} removedMembers - 被删除的成员数组。
	 */
	onMemberRemoved(groupContext, members, removedMembers) {
		console.log('onMemberRemoved',groupContext)
		// if(removedMembers.cubeId == this.vue.utils.getCookie('curCube')){
		// 	this.vue.$store.commit('removeGroupList', groupContext);
		// }else {
			this.vue.$store.commit('updateGroupList', groupContext);
		// }
	}

	/**
	 * 当自己所在的群组有新增管理员时调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 * @param {String} addedMaster - 新增的群组管理员 Cube 号
	 */
	onMasterAdded(groupContext, addedMaster) {
		console.log('onMasterAdded',groupContext)
		this.vue.$store.commit('updateGroupList', groupContext);
	}

	/**
	 * 当自己所在的群组有管理员被移除时调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 * @param {String} removedMaster - 被移除的管理员 Cube 号
	 */
	onMasterRemoved(groupContext, removedMaster) {
		console.log('onMasterRemoved',groupContext)
		this.vue.$store.commit('updateGroupList', groupContext);
	}

	/**
	 * 当自己所在的群组昵称变更时调用。
	 *
	 * @param {GroupContext} groupContext - 群组上下文对象。
	 */
	onGroupUpdated(groupContext) {
		console.log('groupContext=============',groupContext)
		this.vue.dataCenter.getRecentSessionById(groupContext.groupId, recent => {
			console.log('1groupContext=============',groupContext)
			recent.displayName = groupContext.displayName;
			window.cube.getRecentSessionService().updateRecentSession(new CubeRecentSession(recent));
		});
		this.vue.$store.commit('updateGroupList', groupContext);
	}

	/**
	 * 退出群组时回调
	 *
	 * @param group 群组实体
	 * @param from  退出者
	 */
	onGroupQuited(group, from){
		console.log('onGroupQuited')
		this.vue.$store.commit('removeGroupList', group);
	};

	/**
	 * 当有错误时被调用。
	 *
	 * @param {StateCode} errorCode - 错误码。
	 */
	onFailed(errorCode) {

	}
}
