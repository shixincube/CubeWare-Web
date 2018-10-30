/**
 * Created by GuanYong on 2015/9/7.
 */

/**
 * 媒体探针。
 */
const AppMediaProbe = Class(CubeMediaProbe, {
    continuityLowFrameTimes: 0,         //连续帧率过低次数
    countReductionTimer: null,          //低帧计数器降低策略time函数
    noFpsTimes: null,                       //连续没有帧率的次数
    isSelfWarning: null,                    //是否是己方网络不稳定
    closeVideoTask: null,                   //关闭视频任务

    ctor: function() {
        // Nothing
    },

    onLocalVideoReady: function(mediaController) {
        //$('#local_video_info').text('(就绪)');
    },

    onRemoteVideoReady: function(mediaController) {
        //$('#remote_video_info').text('(就绪)');
    },

    onLocalVideoFPS: function(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {
        //$('#local_video_info').text('(' + videoWidth + 'x' + videoHeight + ' @ ' + curFPS + '/' + avgFPS + ')');
    },

    onRemoteVideoFPS: function(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {
        //$('#remote_video_info').text('(' + videoWidth + 'x' + videoHeight + ' @ ' + curFPS + '/' + avgFPS + ')');
    },

    onFrameRateWarning: function(mediaController, curFps, avgFps, maxFps) {
        // 引擎发出帧率警告
    },

    onFrameRateRecovering: function(mediaController, curFps, avgFps, maxFps) {
    },

    onVideoClose: function(){
        Root.getEventCenter().localNotice(LocalEventType.CloseVideoChat);
    },

    onVideoOpen: function(){

    }
});