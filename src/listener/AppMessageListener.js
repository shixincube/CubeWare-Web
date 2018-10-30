/**
 * Created by GuanYong on 2015/9/7.
 */

/*
 * 实现消息监听器。
 */
export class AppMessageListener {
    constructor(vue) {
        this.lastDataMap = new Map();
        this.firstSync = true;
        this.loadMessage = false;
        this.loadTop = false;
        this.loadCustom = false;
        this.msgSyncIng = true;

		this.vue = vue;
    }

	onMessageSent(message) {
        //通知事件中心发送消息
		this.vue.$bus.emit('onMessageSent',message);

        console.log('发消息>>>>', Date.now(), message);
    }

	onMessageRecalled(message) {
		console.log('消息撤回回调', message)
	}
	onMessageCanceled(message) {
		console.log('当消息被取消时回调', message)
		this.vue.$bus.emit('onMessageCanceled',message);
	}

	onMessageReceived(message) {
		//通知事件中心发送消息
		this.vue.$bus.emit('onMessageReceived',message);
	}
	/**
	 * 当文件消息上传进度变更时触发
	 *
	 * @param {FileMessage} message - 进度变更的消息对象
	 * @param {Number} processed - 已经上传的字节数
	 * @param {Number} total - 文件总大小
	 */
	onMessageUploading(message, processed, total) {
		console.log('文件消息上传进度', message, processed, total);
		//通知事件中心发送消息
		this.vue.$bus.emit('onMessageUploading', message, processed, total);
	}

	/**
	 * 消息暂停
	 *
	 * @param {FileMessage} message - 消息对象
	 */
	onMessagePaused(message) {
		console.log('消息暂停');
	}

	/**
	 * 消息恢复
	 *
	 * @param {FileMessage} message - 消息对象
	 */
	onMessageResumed(message) {
		console.log('消息恢复监听')
	}

	/**
	 * 当文件消息上传完成时触发
	 *
	 * @param {FileMessage} message - 上传完成的消息对象
	 */
	onMessageUploadCompleted(message) {
		console.log('上传完成', message);
		//通知事件中心发送消息
		this.vue.$bus.emit('onMessageUploadCompleted', message);
	}

	onMessageFailed(errorCode, message) {
		console.log('发生错误', errorCode, message);
	}
	onReceipted(message) {
	}

	onMessageSyncBegin() {
		console.log('开始同步');
		this.vue.$bus.emit('onMessageSyncBegin');
	}

	onMessagesSyncing(messageMap) {
		console.log('同步中', messageMap);
	}

	onMessageSyncEnd() {
		console.log('结束同步');
		this.vue.$bus.emit('onMessageSyncEnd');
	}
}
