/**
 * Created by GuanYong on 2015/9/7.
 */

/*
 * 实现音视频通话监听器。
 */
export class AppCallListener{
	constructor(vue) {
		this.vue = vue;
    }

    onCall (direction, session, video) {
		this.vue.$bus.emit('onCall', direction, session.getName(), video);
    }

	onNewCall (direction, session, video) {
		this.vue.$bus.emit('onNewCall', direction, session.getName(), video);
	}

    onInProgress (session) {
		this.vue.$bus.emit('onInProgress',session.getName());
    }

    onCallRinging (session) {
		this.vue.$bus.emit('onCallRinging',session.getName());
    }

    onCallConnected (session) {
		this.vue.$bus.emit('onCallConnected', session.getName());
    }

    onCallEnded (session, action) {
        let text;
            if (action === 'timeout') {
                if (session.callDirection === "outgoing") {
                    text = '对方未接听';
                }
            } else if (action === 'cancel-ack') {
                text = '已取消';
            } else if (action === 'cancel') {
                text = '通话未接听';
            } else if (action === 'bye-ack') {
                text = '通话已结束 ';
            } else if (action === 'bye' || action === 'end') {
                text = '通话已结束 ';
            } else if (action === 'answer-by-other' || action === 'cancel-by-other') {
                text = '已在其它终端接听';
            }

		this.vue.$bus.emit('onCallEnded', session.getName(), text);
    }

    onCallFailed(session, errorCode) {
        let error = {code: errorCode};
        if (errorCode === CubeStateCode.ICEConnectionFailed) {
            error.text = '通话连接失败，请稍候再试!';
        } else if (errorCode === CubeStateCode.BusyEverywhere) {
            error.text = '对方正在忙，请稍后再试！';
        } else if (errorCode === CubeStateCode.RequestTimeout) {
            error.text = '呼叫超时，请稍候再试!';
        } else if (errorCode === CubeStateCode.MicphoneOpenFailed) {
            error.text = '未检测到你的麦克风';
        } else if (errorCode === CubeStateCode.CameraOpenFailed) {
            error.text = '未检测到你的摄像头';
        } else if (errorCode === CubeStateCode.UnexpectedCanceled) {
            error.text = '通话意外中断，请稍候再试!';
        }
        else {
            error.text = '网络连接错误，请稍后重试';
        }
		this.vue.$bus.emit('onCallFailed', session.getName(), error);
    }
};
