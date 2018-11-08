/**
 * Created by GuanYong on 2015/9/7.
 */

/*
 * 实现会议监听器。
 */
export class AppConferenceListener {
	constructor(vue) {
        this.vue = vue;
    }

	/**
	 * 错误回调
	 *
	 * @param {Conference} conference
	 * @param {CubeError} error
	 */
	onConferenceFailed(conference, error){
		this.vue.$bus.emit('onConferenceFailed', {
			conference: conference,
			error: error
		});
	}

	/**
	 * 当创建会议成功时回调
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 */
	onConferenceCreated(conference, from){
		console.log('当创建会议成功时回调', conference, from);
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoCreated', conference, from);
			return;
		}
		if(conference.type == CubeGroupType.VIDEO_CALL){
			this.vue.$bus.emit('onGroupVideoCreated', conference, from);
			return;
		}
		if(conference.type == CubeGroupType.VOICE_CALL){
			this.vue.$bus.emit('onVoiceCreated', conference, from);
			return;
		}
		if(conference.type == 'share-screen'){
			this.vue.$bus.emit('onShareCreated', conference, from);
			return;
		}
	}

	/**
	 * 同账号在其他设备创建会议成功时回调
	 *
	 * @param conference 会议实体
	 * @param from       会议创建者
	 */
	onConferenceCreatedOther(conference, from){}

	/**
	 * 当会议销毁时回调
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 */
	onConferenceDestroyed(conference, from){
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoDestroyed', {
				conference,
				from
			});
			return;
		}
	}

	/**
	 * 同账号在其他设备销毁会议时回调
	 *
	 * @param conference 会议实体
	 * @param from       会议销毁者（默认为创建者）
	 */
	onConferenceDestroyedOther(conference, from){}

	/**
	 * 会议音频启用禁用回调
	 *
	 * @param {Conference} conference
	 * @param {boolean} enable
	 */
	onAudioEnable(conference, enable){}

	/**
	 * 会议视频启用禁用回调
	 *
	 * @param {Conference} conference
	 * * @param {boolean} enable
	 */
	onVideoEnable(conference, enable){
		this.vue.$bus.emit('onVideoEnable', {
			conference: conference,
			enable: enable
		});
	}

	/**
	 * 收到邀请回调(仅邀请者自己和被邀请者回调)
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 * @param {Array<CuberUser>} inviters
	 */
	onConferenceInvited(conference, from, inviters){
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoInvited', {
				conference,
				from,
				inviters
			});
			return;
		}
		if(conference.type == CubeGroupType.VIDEO_CALL){
			this.vue.$bus.emit('onGroupVideoInvited', {
				conference,
				from,
				inviters
			});
			return;
		}
		if(conference.type == CubeGroupType.VOICE_CALL){
			this.vue.$bus.emit('onVoiceInvited', {
				conference,
				from,
				inviters
			});
			return;
		}
		if(conference.type == 'share-screen'){
			this.vue.$bus.emit('onShareInvited', {
				conference,
				from,
				inviters
			});
			return;
		}
	}

	/**
	 * 同账号在其他设备发起邀请
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 * @param {Array<CuberUser>} inviters
	 */
	onConferenceInvitedOther(conference, from, inviters){}

	/**
	 * 同意邀请加入时回调
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from 同意者
	 * @param {CubeUser} joinedMember 加入者
	 */
	onConferenceAcceptInvited(conference, from, joinedMember){}

	/**
	 * 同账号在其他设备同意邀请
	 *
	 * @param conference   会议实体
	 * @param from         邀请者
	 * @param joinedMember 同意加入者
	 */
	onConferenceAcceptInvitedOther(conference, from, joinedMember){}

	/**
	 * 拒绝邀请入群回调
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 * @param {CubeUser} rejectMember
	 */
	onConferenceRejectInvited(conference, from, rejectMember){
		this.vue.$bus.emit('onConferenceRejectInvited', {
			conference,
			from,
			rejectMember
		});
	}

	/**
	 * 同账号在其他设备拒绝邀请
	 *
	 * @param conference   会议实体
	 * @param from         邀请者
	 * @param rejectMember 拒绝加入者
	 */
	onConferenceRejectInvitedOther(conference, from, rejectMember){}

	/**
	 * 通知账号除加入设备之外的其他设备回调
	 *
	 * @param {Conference} conference 会议实体
	 * @param {CubeUser} from 申请者/邀请者
	 * @param {CubeUser} joinedMember 入会者
	 */
	onConferenceJoinFromOthers(conference, from, joinedMember){}

	/**
	 * 会议成员状态改变
	 *
	 * @param {Conference} conference
	 * @param {Array<ConferenceControl>} list
	 */
	onConferenceUpdated(conference, list){
		let update = list[list.length - 1];
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoUpdated', {
				conference,
				update
			});
			return;
		}
	}

	/**
	 * 退出时回调
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} quitMember 退出者
	 */
	onConferenceQuited(conference, quitMember){
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoQuited', {
				conference,
				quitMember
			});
			return;
		}
		if(conference.type == CubeGroupType.VIDEO_CALL){
			this.vue.$bus.emit('onGroupVideoQuited', {
				conference,
				quitMember
			});
			return;
		}
		if(conference.type == CubeGroupType.VOICE_CALL){
			this.vue.$bus.emit('onVoiceQuited', {
				conference,
				quitMember
			});
			return;
		}
		if(conference.type == 'share-screen'){
			this.vue.$bus.emit('onShareQuited', {
				conference,
				quitMember
			});
			return;
		}
	}

	/**
	 * 同账号在其他设备退出会议
	 *
	 * @param conference 会议实体
	 * @param quitMember 退出者
	 */
	onConferenceQuitedOther(conference, quitMember){}

	/**
	 * 加入会议
	 *
	 * @param {Conference} conference
	 * @param {CubeUser} from
	 * */
	onConferenceJoined(conference, from){
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onViedoJoined', {
				conference: conference,
				from: from
			});
			return;
		}
		if(conference.type == CubeGroupType.VIDEO_CALL){
			this.vue.$bus.emit('onGroupVideoJoined', {
				conference: conference,
				from: from
			});
			return;
		}
		if(conference.type == CubeGroupType.VOICE_CALL){
			this.vue.$bus.emit('onVoiceJoined', {
				conference: conference,
				from: from
			});
			return;
		}
		if(conference.type == 'share-screen'){
			this.vue.$bus.emit('onShareJoined', {
				conference: conference,
				from: from
			});
			return;
		}
	}

	/**
	 * 同账号在其他设备加入会议
	 *
	 * @param conference   会议实体
	 * @param joinedMember 入会者
	 */
	onConferenceJoinedOther(conference, from){}

	/**
	 * 当自己加入会议,会议音视频流连接成功时回调
	 * @param {Conference} conference 会议对象实例
	 */
	onConferenceConnected(conference) {
		if(conference.type == CubeGroupType.VIDEO_CONFERENCE){
			this.vue.$bus.emit('onVideoCreatedConnected', conference);
			return;
		}
		if(conference.type == CubeGroupType.VIDEO_CALL){
			this.vue.$bus.emit('onGroupVideoCreatedConnected', conference);
			return;
		}
		if(conference.type == CubeGroupType.VOICE_CALL){
			this.vue.$bus.emit('onVoiceCreatedConnected', conference);
			return;
		}
		if(conference.type == 'share-screen'){
			this.vue.$bus.emit('onShareScreenConnected', conference);
			return;
		}
	 }

	/**
	 * 当sip监听end时发生。
	 *
	 * @param {Conference} conference - 会控动作
	 */
	onConferenceSipEnd(conference) { }

	/**
	 * 会议音视频流连接失败
	 * @param {Conference} conference 会议对象实例
	 */
	onConferenceCallDisConnected(){}
};
