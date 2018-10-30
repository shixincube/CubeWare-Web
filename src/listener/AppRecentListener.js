/**
 * 最近会话列表监听
 * */
export class AppRecentListener {
	constructor(vue) {
		this.vue = vue;
	}
	onRecentSessionAdded(recentSession){
		this.vue.$bus.emit('onRecentSessionAdded', recentSession);
	}
	onRecentSessionChanged(recentSession){
		this.vue.$bus.emit('onRecentSessionChanged', recentSession);
	}
}
