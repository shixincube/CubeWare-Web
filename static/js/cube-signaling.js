/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CallServiceWorker = __webpack_require__(98);

var _CallListener = __webpack_require__(60);

var _CallDirection = __webpack_require__(32);

var _SignalingState = __webpack_require__(33);

var _VideoSize = __webpack_require__(94);

var _MediaProbe = __webpack_require__(93);

var _MediaServiceWorker = __webpack_require__(95);

var _adapter = __webpack_require__(92);

var adapter = _interopRequireWildcard(_adapter);

var _Call = __webpack_require__(96);

var _CallSession = __webpack_require__(97);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

(function (global) {
    //var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    //global.RTCPeerConnection = RTCPeerConnection;

    //var RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;
    //global.RTCIceCandidate = RTCIceCandidate;

    //var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    //global.RTCSessionDescription = RTCSessionDescription;

    // Look after different browser vendors' ways of calling the getUserMedia()
    // API method:
    // Opera --> getUserMedia
    // Chrome --> webkitGetUserMedia
    // Firefox --> mozGetUserMedia
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    /*if (window.utils.isChrome && parseInt(webrtcDetectedVersion) >= 47) {
     window.getUserMedia = function(constraints, onSuccess, onError) {
     var p = navigator.mediaDevices.getUserMedia(constraints)
     .then(function(stream) {
     onSuccess(stream);
     });
     var ef = function(error) {
     onError(error);
     };
     p["catch"].call(p, ef);
     };
     }
     else {
     navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
     }*/

    if ((cube.utils.isIE || cube.utils.isSafari) && cube.utils.isDesktop) {
        var s = document.createElement("script");
        s.setAttribute("src", "http://" + _CUBE_DOMAIN + "/libs/adapter-min.js");
        s.onload = function (e) {
            AdapterJS.webRTCReady(function (isUsingPlugin) {
                nucleus.getLogger().d("CubeEngine", "WebRTC Plugin Ready!");
            });
        };
        document.body.appendChild(s);
    }

    window.getScreenId = function (callback, custom_parameter) {
        if (navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)) {
            // microsoft edge => navigator.getDisplayMedia(screen_constraints).then(onSuccess, onFailure);
            callback({
                video: true
            });
            return;
        }

        // for Firefox:
        // sourceId == 'firefox'
        // screen_constraints = {...}
        if (!!navigator.mozGetUserMedia) {
            callback(null, 'firefox', {
                video: {
                    mozMediaSource: 'window',
                    mediaSource: 'window'
                }
            });
            return;
        }

        window.addEventListener('message', onIFrameCallback);

        function onIFrameCallback(event) {
            if (!event.data) return;

            if (event.data.chromeMediaSourceId) {
                if (event.data.chromeMediaSourceId === 'PermissionDeniedError') {
                    callback('permission-denied');
                } else {
                    callback(null, event.data.chromeMediaSourceId, getScreenConstraints(null, event.data.chromeMediaSourceId, event.data.canRequestAudioTrack));
                }

                // this event listener is no more needed
                window.removeEventListener('message', onIFrameCallback);
            }

            if (event.data.chromeExtensionStatus) {
                callback(event.data.chromeExtensionStatus, null, getScreenConstraints(event.data.chromeExtensionStatus));

                // this event listener is no more needed
                window.removeEventListener('message', onIFrameCallback);
            }
        }

        if (!custom_parameter) {
            setTimeout(postGetSourceIdMessage, 100);
        } else {
            setTimeout(function () {
                postGetSourceIdMessage(custom_parameter);
            }, 100);
        }
    };

    function getScreenConstraints(error, sourceId, canRequestAudioTrack) {
        var screen_constraints = {
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: error ? 'screen' : 'desktop',
                    maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
                    maxHeight: window.screen.height > 1080 ? window.screen.height : 1080
                },
                optional: []
            }
        };

        if (!!canRequestAudioTrack) {
            screen_constraints.audio = {
                mandatory: {
                    chromeMediaSource: error ? 'screen' : 'desktop'
                },
                optional: []
            };
        }

        if (sourceId) {
            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;

            if (screen_constraints.audio && screen_constraints.audio.mandatory) {
                screen_constraints.audio.mandatory.chromeMediaSourceId = sourceId;
            }
        }

        return screen_constraints;
    }

    function postGetSourceIdMessage(custom_parameter) {
        if (!iframe) {
            loadIFrame(function () {
                postGetSourceIdMessage(custom_parameter);
            });
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(function () {
                postGetSourceIdMessage(custom_parameter);
            }, 100);
            return;
        }

        if (!custom_parameter) {
            iframe.contentWindow.postMessage({
                captureSourceId: true
            }, '*');
        } else if (!!custom_parameter.forEach) {
            iframe.contentWindow.postMessage({
                captureCustomSourceId: custom_parameter
            }, '*');
        } else {
            iframe.contentWindow.postMessage({
                captureSourceIdWithAudio: true
            }, '*');
        }
    }

    var iframe;

    // this function is used in RTCMultiConnection v3
    window.getScreenConstraints = function (callback) {
        loadIFrame(function () {
            getScreenId(function (error, sourceId, screen_constraints) {
                if (!screen_constraints) {
                    screen_constraints = {
                        video: true
                    };
                }

                callback(error, screen_constraints.video);
            });
        });
    };

    function loadIFrame(loadCallback) {
        if (iframe) {
            loadCallback();
            return;
        }

        iframe = document.createElement('iframe');
        iframe.onload = function () {
            iframe.isLoaded = true;

            loadCallback();
        };
        iframe.src = 'https://www.webrtc-experiment.com/getSourceId/'; // https://wwww.yourdomain.com/getScreenId.html
        iframe.style.display = 'none';
        (document.body || document.documentElement).appendChild(iframe);
    }

    window.getChromeExtensionStatus = function (callback) {
        // for Firefox:
        if (!!navigator.mozGetUserMedia) {
            callback('installed-enabled');
            return;
        }

        window.addEventListener('message', onIFrameCallback);

        function onIFrameCallback(event) {
            if (!event.data) return;

            if (event.data.chromeExtensionStatus) {
                callback(event.data.chromeExtensionStatus);

                // this event listener is no more needed
                window.removeEventListener('message', onIFrameCallback);
            }
        }

        setTimeout(postGetChromeExtensionStatusMessage, 100);
    };

    function postGetChromeExtensionStatusMessage() {
        if (!iframe) {
            loadIFrame(postGetChromeExtensionStatusMessage);
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(postGetChromeExtensionStatusMessage, 100);
            return;
        }

        iframe.contentWindow.postMessage({
            getChromeExtensionStatus: true
        }, '*');
    }

    // 提供全局的接口类
    global.CubeCallServiceWorker = _CallServiceWorker.CallServiceWorker;
    global.CubeCallListener = _CallListener.CallListener;
    global.CubeCallDirection = _CallDirection.CallDirection;
    global.CubeSignalingState = _SignalingState.SignalingState;
    global.CubeVideoSize = _VideoSize.VideoSize;
    global.CubeMediaProbe = _MediaProbe.MediaProbe;
    global.CubeMediaServiceWorker = _MediaServiceWorker.MediaServiceWorker;
    global.webrtcAdapter = adapter;
    global.CubeCall = _Call.Call;
    global.CubeCallSession = _CallSession.CallSession;
})(window);

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * MediaService.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 媒体服务
 * @interface MediaService
 * @author Xu Jiangwei, Guan Yong
 */
var MediaService = exports.MediaService = function () {
    function MediaService() {
        _classCallCheck(this, MediaService);
    }

    _createClass(MediaService, [{
        key: "addMediaProbe",

        /**
         * 添加媒体探针。
         *
         * @param {CubeMediaProbe} probe - 指定待添加的媒体探针实例。
        * @returns {boolean} 添加成功返回<code>true</code>，否则返回 <code>false</code> 。
         */
        value: function addMediaProbe(probe) {}

        /**
         * 移除媒体探针。
        *
         * @param {CubeMediaProbe} probe - 指定删除的媒体探针实例。
         * @returns {boolean} 删除成功返回<code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "removeMediaProbe",
        value: function removeMediaProbe(probe) {}

        /**
         * 获取当前RTC视频编解码格式
         *
         * @return
         */

    }, {
        key: "getVideoCodec",
        value: function getVideoCodec() {}

        /**
         * 获取当前RTC音频编解码格式
         *
         * @return
         */

    }, {
        key: "getAudioCodec",
        value: function getAudioCodec() {}

        /**
         * 改变分辨率
         *
         * @param width
         * @param height
         * @param fps
         */

    }, {
        key: "changeCaptureFormat",
        value: function changeCaptureFormat(width, height, fps) {}

        /**
         * 关闭本地语音流。关闭语音流后对方将无法听到本地麦克风采集的音频数据。
         *
         * @returns {boolean} 如果关闭成功返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "closeVoice",
        value: function closeVoice() {}

        /**
         * 关闭本地视频流。关闭视频后对方将无法看到本地摄像头采集到的视频影像。
         *
         * @returns {boolean} 如果关闭成功返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "closeVideo",
        value: function closeVideo() {}

        /**
         * 开启本地语音流。开启语音流后对方将能听到本地麦克风采集的音频数据。
        *
         * @returns {boolean} 如果开启成功返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "openVoice",
        value: function openVoice() {}

        /**
         * 开启本地视频流。开启视频后对方将能看到本地摄像头采集到的视频影像。
         *
         * @returns {boolean} 如果开启成功返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "openVideo",
        value: function openVideo() {}

        /**
         * 当前通话的语音通道是否启用。
         *
         * @returns {boolean} 返回<code>true</code>表示启用，<code>false</code>表示禁用。
         */

    }, {
        key: "isAudioEnabled",
        value: function isAudioEnabled() {}

        /**
         * 音频开启与关闭（音频通话时可用）
         */

    }, {
        key: "setAudioEnabled",
        value: function setAudioEnabled(enable) {}

        /**
         * 当前通话的视频通道是否启用。
        *
         * @returns {boolean} 返回<code>true</code>表示启用，<code>false</code>表示禁用。
         */

    }, {
        key: "isVideoEnabled",
        value: function isVideoEnabled() {}

        /**
         * 视频开启与关闭（视频通话时可用）
         */

    }, {
        key: "setVideoEnabled",
        value: function setVideoEnabled(enable) {}

        /**
         * 设置扬声器音量。
        *
         * @param {Number} value - 指定正整数类型的音量值，取值范围：0 到 100，表示音量由低到高。
         */

    }, {
        key: "setVolume",
        value: function setVolume(value) {}

        /**
         * 获取当前扬声器音量。
        *
         * @returns {Number} 正整数类型的音量值，数值范围：0 到 100，表示音量由低到高。
         */

    }, {
        key: "getVolume",
        value: function getVolume() {}

        /**
         * 静音。
         */

    }, {
        key: "mute",
        value: function mute() {}

        /**
         * 获取本地视频分辨率大小。
        *
         * @returns {CubeSize} 视频画面宽高，单位：像素。
         */

    }, {
        key: "getLocalVideoSize",
        value: function getLocalVideoSize() {}

        /**
         * 获取对方视频分辨率大小。
         *
         * @returns {CubeSize} 视频画面宽高，单位：像素。
         */

    }, {
        key: "getRemoteVideoSize",
        value: function getRemoteVideoSize() {}

        /**
         * 获取用户视频画面地址。
         *
         * @param {String} peerName - 指定需要获取的用户 Cube 号。
         */

    }, {
        key: "getCapturedCameraImage",
        value: function getCapturedCameraImage(peerName) {}

        /**
         * 截取当前视频的画面。
         *
         * @param {String} name - 指定需要截取的一方的 Cube 号。
         * @param {Function} callback - 回调函数。
         */

    }, {
        key: "capture",
        value: function capture(name, callback) {}

        /**
         * 查询归档记录。
        *
         * @param {String} name - 指定待查询的 Cube 号。
         * @param {Function} success - 指定查询数据后的回调函数。
         * @param {Function} error - 指定查询失败时的回调函数。
         */

    }, {
        key: "queryRecordArchives",
        value: function queryRecordArchives(name, success, error, cors) {}

        /**
         * 加载存档。
        *
         * @param {String} name - 指定待加载存档的 Cube 号。
         * @param {String} file - 需要加载的存档文件。
         * @param {String} videoEl - 显示存档的元素节点ID。
         */

    }, {
        key: "loadArchive",
        value: function loadArchive(name, file, videoEl, cors) {}

        /**
         * 是否存在本地存档记录。
        *
         * @returns {boolean} 返回<code>true</code>表示有本地存档记录, <code>false</code>表示没有。
         */

    }, {
        key: "hasLocalRecorded",
        value: function hasLocalRecorded() {}

        /**
         * 是否正在录制本地视频。
         *
         * @returns {boolean} 返回<code>true</code>表示正在录制, <code>false</code>表示没有录制。
         */

    }, {
        key: "isLocalRecording",
        value: function isLocalRecording() {}

        /**
         * 启动本地音视频录制。
         *
         * @param {Object} config - 指定录像参数。参数包括：interval (录制切片间隔)
         * @returns {boolean} 返回启动录制是否成功。
         */

    }, {
        key: "startLocalRecording",
        value: function startLocalRecording(config) {}

        /**
         * 停止本地音视频录制。
         *
         * @param {Function} callback - 指定录像结束时的回调函数。
         * @returns {boolean} 返回是否正确处理停止。
         */

    }, {
        key: "stopLocalRecording",
        value: function stopLocalRecording(callback) {}

        /**
         * 丢弃录制
         */

    }, {
        key: "discardLocalRecording",
        value: function discardLocalRecording() {}

        /**
         * 回放录制。
         *
         * @param {String} videoEl - 需要播放的视频元素ID 。
         * @param {String} audioEl - 需要播放的音频元素ID 。
         * @returns {boolean} 返回回放是否成功。
         */

    }, {
        key: "replayLocalRecording",
        value: function replayLocalRecording(videoEl, audioEl) {}

        /**
         * 获取本地归档记录。
         *
         * @returns {(CubeAdvancedRecorder | CubeRecorder)} - 归档存储实例
         */

    }, {
        key: "getLocalRecorder",
        value: function getLocalRecorder() {}

        /**
         * 对方的视频是否存在归档记录。
         *
         * @returns {boolean} 返回是否存在归档记录。
         */

    }, {
        key: "hasRemoteRecorded",
        value: function hasRemoteRecorded() {}

        /**
         * 是否正在录制对方视频。
         *
         * @returns {boolean} 返回<code>true</code>表示正在录制, <code>false</code>表示没有录制。
         */

    }, {
        key: "isRemoteRecording",
        value: function isRemoteRecording() {}

        /**
         * 启动对方音视频录制。
        *
         * @param {Object} config - 指定录像参数。参数包括：interval (录制切片间隔)。
         * @returns {boolean} 返回是否录制成功。
         */

    }, {
        key: "startRemoteRecording",
        value: function startRemoteRecording(config) {}

        /**
         * 停止对方音视频录制。
         *
         * @param {Function} callback - 指定录像结束时的回调函数。
         * @returns {boolean} 返回录制是否启动停止。
         */

    }, {
        key: "stopRemoteRecording",
        value: function stopRemoteRecording(callback) {}

        /**
         * 获取对方归档记录。
         *
         * @returns {(CubeAdvancedRecorder | CubeRecorder)} - 归档存储实例。
         */

    }, {
        key: "getRemoteRecorder",
        value: function getRemoteRecorder() {}

        /**
         * 修改播放视频元素。
         *
         * @param {Document} localVideo 本地视频元素。
         * @param {Document} remoteVideo 对方视频元素。
         */

    }, {
        key: "changeVideoElement",
        value: function changeVideoElement(localVideo, remoteVideo) {}

        /**
         * 切换摄像头
         */

    }, {
        key: "switchCamera",
        value: function switchCamera() {}

        /**
         * 切换视频录制摄像头
         *
         * @param cameraId
         */

    }, {
        key: "switchRecordingCamera",
        value: function switchRecordingCamera(cameraId) {}

        /**
         * 获取视频录制预览画面（先获取预览画面才可以开始录制本地视频）
         *
         * @param cameraId 使用摄像头，默认后置
         *
         * @return
         */

    }, {
        key: "getVideoRecordingView",
        value: function getVideoRecordingView(cameraId) {}

        /**
         * 抓拍
         * @param type
         * @return
         */

    }, {
        key: "takeCapturePicture",
        value: function takeCapturePicture(type) {}
    }]);

    return MediaService;
}();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * CallService.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 音视频通话管理服务。
 *
 * @interface CallService
 * @author Guan Yong, Xu Jiangwei
 */
var CallService = exports.CallService = function (_CubeService) {
    _inherits(CallService, _CubeService);

    function CallService() {
        _classCallCheck(this, CallService);

        return _possibleConstructorReturn(this, (CallService.__proto__ || Object.getPrototypeOf(CallService)).apply(this, arguments));
    }

    _createClass(CallService, [{
        key: "setAutoAnswer",

        /**
         * 设置是否自动应答。
        * <p>
         * 当使用自动应答时，用户同意浏览器调用设备摄像头和麦克风之后，引擎会自动调用 <code>answerCall()</code> 进行应答。
         * 也就是说当自动应答被激活后，引擎始终同意任何端的通话邀请。
        * </p>
         *
         * @param {boolean} autoAnswer - 指定是否启用自动应答。
         */
        value: function setAutoAnswer(autoAnswer) {}

        /**
         * 应当并接听通话邀请。
        *
        * @returns {boolean} 如果应答请求发送成功则返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "answerCall",
        value: function answerCall() {}

        /**
         * 发起通话邀请。
        *
         * @param {String} callee - 被叫方 Cube 号。
         * @param {Boolean|String} video - 是否启用视频或指定一个视频设备ID。
        * @param {Function} [callback] - 呼叫回调
         * @returns {Boolean} 如果通话请求发送成功则返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: "makeCall",
        value: function makeCall(callee, video, callback) {}

        /**
         * 挂断通话。
        *
         */

    }, {
        key: "terminateCall",
        value: function terminateCall() {}

        /**
         *
         */

    }, {
        key: "reply",
        value: function reply(target, timeout, callback) {}

        /**
        * 切换媒体设备
         * @param deviceId {String}
         */

    }, {
        key: "changeMediaDevice",
        value: function changeMediaDevice(deviceId) {}
    }]);

    return CallService;
}(CubeService);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallServiceDelegate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SignalingState = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CallServiceDelegate.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 通话服务委托类。
 *
 * @class CallServiceDelegate
 * @author Guan Yong, Xu Jiangwei
 */
var CallServiceDelegate = exports.CallServiceDelegate = function (_CubeDelegate) {
    _inherits(CallServiceDelegate, _CubeDelegate);

    /**
     * @constructs CallServiceDelegate
     * @param {CallListener} listenerInterface 用于父类实现通用Delegate功能
     * @param {CubeEngine} engine 引擎引用
     */
    function CallServiceDelegate(listenerInterface, engine) {
        _classCallCheck(this, CallServiceDelegate);

        var _this = _possibleConstructorReturn(this, (CallServiceDelegate.__proto__ || Object.getPrototypeOf(CallServiceDelegate)).call(this, listenerInterface));

        _this.engine = engine;
        _this.startTime = 0;
        return _this;
    }

    _createClass(CallServiceDelegate, [{
        key: 'didReInvite',
        value: function didReInvite(worker, direction, callee, video) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onNewCall');
            this.onNewCall(direction, this.engine.session, video);
        }
    }, {
        key: 'didInvite',
        value: function didInvite(worker, direction, callee, video) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onCall');

            // 更新呼叫方向
            this.engine.session.callDirection = direction;
            this.engine.session.callState = _SignalingState.SignalingState.Invite;
            this.engine.session.callTime = 0;

            // 更新 CallPeer
            if (null == this.engine.session.callPeer || this.engine.session.callPeer.name != callee) {
                this.engine.session.setCallPeer(new CubePeer(callee));

                if (null != worker.targetData) {
                    this.engine.session.callPeer.displayName = worker.targetData.displayName;
                }
            }

            this.onCall(direction, this.engine.session, video);

            // 启动应答机
            if (this.engine.session.isConferenceCall()) {
                var conf = this.engine.getConferenceService().getConference();
                if (null != conf) {
                    this.engine.responder.start(conf.host, false);
                }
            } else {
                this.engine.responder.start(_CUBE_DOMAIN, true);
            }

            worker.localVideo.style.visibility = 'visible';
        }
    }, {
        key: 'didRinging',
        value: function didRinging(worker) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onCallRinging');

            // 更新显示名
            this.engine.session.callPeer.displayName = worker.targetData.displayName;
            // 更新状态
            this.engine.session.callState = _SignalingState.SignalingState.Ringing;

            this.onCallRinging(this.engine.session);
        }
    }, {
        key: 'didIncall',
        value: function didIncall(worker) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onCallConnected');

            // 更新状态
            this.startTime = Date.now();
            this.engine.session.callState = _SignalingState.SignalingState.Incall;

            this.onCallConnected(this.engine.session);

            worker.remoteVideo.style.visibility = 'visible';
        }
    }, {
        key: 'didEnd',
        value: function didEnd(worker, callee, action) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onCallEnded', callee);

            // 关闭应答机
            this.engine.responder.stop();

            // 更新状态
            if (this.engine.session.callState == _SignalingState.SignalingState.End) {
                return;
            }

            this.engine.session.callState = _SignalingState.SignalingState.End;
            this.engine.session.callTime = this.startTime == 0 ? 0 : Date.now() - this.startTime;
            this.engine.session.callPeer = null;

            if (null != worker.videoCloseHandler) {
                worker.videoCloseHandler.call(null, worker);
            }

            this.onCallEnded(this.engine.session, action);

            worker.localVideo ? worker.localVideo.style.visibility = 'hidden' : '';
            worker.localVideo ? worker.remoteVideo.style.visibility = 'hidden' : '';
        }
    }, {
        key: 'didProgress',
        value: function didProgress() {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onInProgress');

            // 更新状态
            this.engine.session.callState = _SignalingState.SignalingState.Progress;

            this.onInProgress(this.engine.session);
        }
    }, {
        key: 'didFailed',
        value: function didFailed(worker, callee, errorCode) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onCallFailed');

            // 更新状态
            this.engine.session.callState = _SignalingState.SignalingState.None;
            this.engine.session.callPeer = null;

            this.onCallFailed(this.engine.session, errorCode);

            worker.localVideo.style.visibility = 'hidden';
            worker.remoteVideo.style.visibility = 'hidden';

            // 关闭应答机
            this.engine.responder.stop();
        }
    }, {
        key: 'didReverseCall',
        value: function didReverseCall(worker, callee) {
            nucleus.getLogger().d('CubeCallServiceDelegate', 'onReverseCall');
            this.onReverseCall(this.engine.session);
        }
    }]);

    return CallServiceDelegate;
}(CubeDelegate);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * CallDirection.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 音视频通话的呼叫方向定义。
 *
 * @readonly
 * @enum {String} CallDirection
 * @author Xu Jiangwei, Guan Yong
 */
var CallDirection = exports.CallDirection = {
    /** 通话呼出。 */
    Outgoing: "outgoing",

    /** 通话呼入。 */
    Incoming: "incoming",

    /** 呼叫方向未定义 */
    None: 'none'
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * SignalingState.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 信令状态。
 *
 * @readonly
 * @enum {Number} SignalingState
 * @author Xu Jiangwei
 */
var SignalingState = exports.SignalingState = {

  /** 空状态。信令停止工作状态。 */
  None: 0,

  /** 正在处理状态。 */
  Progress: 1,

  /** 发起呼叫邀请状态。 */
  Invite: 2,

  /** 对方振铃状态。 */
  Ringing: 3,

  /** 呼叫进行中状态。 */
  Incall: 4,

  /** 呼叫结束状态。 */
  End: 5
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * CallListener.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 音视频通话监听器。
 * <p>
 * 通过实现监听器的回调接口可以监听到呼叫状态，从而发起对应的操作。
 * 此监听器可以收到的监听事件涵盖了呼叫会话的所有环节。
 * </p>
 *
 * @interface CallListener
 * @author Xu Jiangwei, Guan Yong
 */
var CallListener = exports.CallListener = function (_CubeListener) {
  _inherits(CallListener, _CubeListener);

  function CallListener() {
    _classCallCheck(this, CallListener);

    return _possibleConstructorReturn(this, (CallListener.__proto__ || Object.getPrototypeOf(CallListener)).apply(this, arguments));
  }

  _createClass(CallListener, [{
    key: "onCall",

    /**
     * 当发起新呼叫或者收到呼叫时被回调。
     *
     * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
     * @param {Session} session - 当前引擎的会话。
     * @param {boolean} video - 是否启用了视频呼叫。
     * */
    value: function onCall(direction, session, video) {}

    /**
     * 当正在发起呼叫或收到呼叫时被呼叫的回调。
     *
     * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
     * @param {Session} session - 当前引擎的会话。
     * @param {boolean} video - 是否启用了视频呼叫。
     */

  }, {
    key: "onNewCall",
    value: function onNewCall(direction, session, video) {}

    /**
     * 当呼叫正在处理时被回调。
    *
     * @param {Session} session 呼叫会话
     */

  }, {
    key: "onInProgress",
    value: function onInProgress(session) {}

    /**
     * 当对方振铃时被回调。
    *
     * @param {Session} session - 当前引擎的会话。
     */

  }, {
    key: "onCallRinging",
    value: function onCallRinging(session) {}

    /**
     * 当呼叫已经接通时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     */

  }, {
    key: "onCallConnected",
    value: function onCallConnected(session) {}
  }, {
    key: "onCallHold",
    value: function onCallHold(session) {}

    /**
     * 当呼叫结束时被回调。
    *
     * @param {Session} session - 当前引擎的会话。
     * @param {String} action - 结束方式。
     */

  }, {
    key: "onCallEnded",
    value: function onCallEnded(session, action) {}

    /**
     * 当呼叫发生错误时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     * @param {StateCode} errorCode - 错误码。
     */

  }, {
    key: "onCallFailed",
    value: function onCallFailed(session, errorCode) {}

    /**
     * 呼叫反转
     * @param session
     */

  }, {
    key: "onReverseCall",
    value: function onReverseCall(session) {}
  }]);

  return CallListener;
}(CubeListener);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 音视频通话的挂断状态定义。
 *
 * @readonly
 * @enum {String} CallAction
 * @author Zhou Chaofan
 */

var callAction = exports.callAction = {

    /** 被挂断 */
    BYE: 'bye',

    /** 主动挂断 */
    BYE_ACK: 'bye-ack',

    /** 被取消 */
    CANCEL: 'cancel',

    /** 主动取消 */
    CANCEL_ACK: 'cancel-ack',

    /** 被其他终端接听 */
    ANSWER_BY_OTHER: 'answer-by-other',

    /** 被其他终端取消 */
    CANCEL_BY_OTHER: 'cancel-by-other',

    /** 未知挂断 */
    UNKNOWN: 'unknown',

    setCallAction: function setCallAction(action) {
        this.action = action;
    },
    getCallAction: function getCallAction(action) {
        return this.action;
    }
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 音视频通话的呼叫状态定义。
 *
 * @readonly
 * @enum {String} CallState
 * @author Zhou Chaofan
 */

var callState = exports.callState = {

    /** 空闲 */
    None: 'none',

    /** 邀请 */
    Invited: 'invited',

    /** 通话中 */
    InCall: 'incall',

    /** 响铃 */
    Ringing: 'ringing',

    /** 挂断 */
    End: 'end'

};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.adapter = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return require(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      /*
       *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var SDPUtils = require('sdp');

      function fixStatsType(stat) {
        return {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        }[stat.type] || stat.type;
      }

      function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
        var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

        // Map ICE parameters (ufrag, pwd) to SDP.
        sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

        // Map DTLS parameters to SDP.
        sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');

        sdp += 'a=mid:' + transceiver.mid + '\r\n';

        if (transceiver.rtpSender && transceiver.rtpReceiver) {
          sdp += 'a=sendrecv\r\n';
        } else if (transceiver.rtpSender) {
          sdp += 'a=sendonly\r\n';
        } else if (transceiver.rtpReceiver) {
          sdp += 'a=recvonly\r\n';
        } else {
          sdp += 'a=inactive\r\n';
        }

        if (transceiver.rtpSender) {
          var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
          transceiver.rtpSender._initialTrackId = trackId;
          // spec.
          var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
          sdp += 'a=' + msid;
          // for Chrome. Legacy should no longer be required.
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

          // RTX
          if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
            sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
          }
        }
        // FIXME: this should be written by writeRtpDescription.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        }
        return sdp;
      }

      // Edge does not like
      // 1) stun: filtered after 14393 unless ?transport=udp is present
      // 2) turn: that does not have all of turn:host:port?transport=udp
      // 3) turn: with ipv6 addresses
      // 4) turn: occurring muliple times
      function filterIceServers(iceServers, edgeVersion) {
        var hasTurn = false;
        iceServers = JSON.parse(JSON.stringify(iceServers));
        return iceServers.filter(function (server) {
          if (server && (server.urls || server.url)) {
            var urls = server.urls || server.url;
            if (server.url && !server.urls) {
              console.warn('RTCIceServer.url is deprecated! Use urls instead.');
            }
            var isString = typeof urls === 'string';
            if (isString) {
              urls = [urls];
            }
            urls = urls.filter(function (url) {
              var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

              if (validTurn) {
                hasTurn = true;
                return true;
              }
              return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
            });

            delete server.url;
            server.urls = isString ? urls[0] : urls;
            return !!urls.length;
          }
        });
      }

      // Determines the intersection of local and remote capabilities.
      function getCommonCapabilities(localCapabilities, remoteCapabilities) {
        var commonCapabilities = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: []
        };

        var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
          pt = parseInt(pt, 10);
          for (var i = 0; i < codecs.length; i++) {
            if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
              return codecs[i];
            }
          }
        };

        var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
          var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
          var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
          return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
        };

        localCapabilities.codecs.forEach(function (lCodec) {
          for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
            var rCodec = remoteCapabilities.codecs[i];
            if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
              if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
                // for RTX we need to find the local rtx that has a apt
                // which points to the same local codec as the remote one.
                if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
                  continue;
                }
              }
              rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
              // number of channels is the highest common number of channels
              rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
              // push rCodec so we reply with offerer payload type
              commonCapabilities.codecs.push(rCodec);

              // determine common feedback mechanisms
              rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
                for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                  if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                    return true;
                  }
                }
                return false;
              });
              // FIXME: also need to determine .parameters
              //  see https://github.com/openpeer/ortc/issues/569
              break;
            }
          }
        });

        localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
          for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
            var rHeaderExtension = remoteCapabilities.headerExtensions[i];
            if (lHeaderExtension.uri === rHeaderExtension.uri) {
              commonCapabilities.headerExtensions.push(rHeaderExtension);
              break;
            }
          }
        });

        // FIXME: fecMechanisms
        return commonCapabilities;
      }

      // is action=setLocalDescription with type allowed in signalingState
      function isActionAllowedInSignalingState(action, type, signalingState) {
        return {
          offer: {
            setLocalDescription: ['stable', 'have-local-offer'],
            setRemoteDescription: ['stable', 'have-remote-offer']
          },
          answer: {
            setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
            setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
          }
        }[type][action].indexOf(signalingState) !== -1;
      }

      function maybeAddCandidate(iceTransport, candidate) {
        // Edge's internal representation adds some fields therefore
        // not all fieldѕ are taken into account.
        var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
          return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
        });
        if (!alreadyAdded) {
          iceTransport.addRemoteCandidate(candidate);
        }
        return !alreadyAdded;
      }

      function makeError(name, description) {
        var e = new Error(description);
        e.name = name;
        // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
        e.code = {
          NotSupportedError: 9,
          InvalidStateError: 11,
          InvalidAccessError: 15,
          TypeError: undefined,
          OperationError: undefined
        }[name];
        return e;
      }

      module.exports = function (window, edgeVersion) {
        // https://w3c.github.io/mediacapture-main/#mediastream
        // Helper function to add the track to the stream and
        // dispatch the event ourselves.
        function addTrackToStreamAndFireEvent(track, stream) {
          stream.addTrack(track);
          stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', { track: track }));
        }

        function removeTrackFromStreamAndFireEvent(track, stream) {
          stream.removeTrack(track);
          stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', { track: track }));
        }

        function fireAddTrack(pc, track, receiver, streams) {
          var trackEvent = new Event('track');
          trackEvent.track = track;
          trackEvent.receiver = receiver;
          trackEvent.transceiver = { receiver: receiver };
          trackEvent.streams = streams;
          window.setTimeout(function () {
            pc._dispatchEvent('track', trackEvent);
          });
        }

        var RTCPeerConnection = function RTCPeerConnection(config) {
          var pc = this;

          var _eventTarget = document.createDocumentFragment();
          ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
            pc[method] = _eventTarget[method].bind(_eventTarget);
          });

          this.canTrickleIceCandidates = null;

          this.needNegotiation = false;

          this.localStreams = [];
          this.remoteStreams = [];

          this.localDescription = null;
          this.remoteDescription = null;

          this.signalingState = 'stable';
          this.iceConnectionState = 'new';
          this.connectionState = 'new';
          this.iceGatheringState = 'new';

          config = JSON.parse(JSON.stringify(config || {}));

          this.usingBundle = config.bundlePolicy === 'max-bundle';
          if (config.rtcpMuxPolicy === 'negotiate') {
            throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
          } else if (!config.rtcpMuxPolicy) {
            config.rtcpMuxPolicy = 'require';
          }

          switch (config.iceTransportPolicy) {
            case 'all':
            case 'relay':
              break;
            default:
              config.iceTransportPolicy = 'all';
              break;
          }

          switch (config.bundlePolicy) {
            case 'balanced':
            case 'max-compat':
            case 'max-bundle':
              break;
            default:
              config.bundlePolicy = 'balanced';
              break;
          }

          config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

          this._iceGatherers = [];
          if (config.iceCandidatePoolSize) {
            for (var i = config.iceCandidatePoolSize; i > 0; i--) {
              this._iceGatherers.push(new window.RTCIceGatherer({
                iceServers: config.iceServers,
                gatherPolicy: config.iceTransportPolicy
              }));
            }
          } else {
            config.iceCandidatePoolSize = 0;
          }

          this._config = config;

          // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
          // everything that is needed to describe a SDP m-line.
          this.transceivers = [];

          this._sdpSessionId = SDPUtils.generateSessionId();
          this._sdpSessionVersion = 0;

          this._dtlsRole = undefined; // role for a=setup to use in answers.

          this._isClosed = false;
        };

        // set up event handlers on prototype
        RTCPeerConnection.prototype.onicecandidate = null;
        RTCPeerConnection.prototype.onaddstream = null;
        RTCPeerConnection.prototype.ontrack = null;
        RTCPeerConnection.prototype.onremovestream = null;
        RTCPeerConnection.prototype.onsignalingstatechange = null;
        RTCPeerConnection.prototype.oniceconnectionstatechange = null;
        RTCPeerConnection.prototype.onconnectionstatechange = null;
        RTCPeerConnection.prototype.onicegatheringstatechange = null;
        RTCPeerConnection.prototype.onnegotiationneeded = null;
        RTCPeerConnection.prototype.ondatachannel = null;

        RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
          if (this._isClosed) {
            return;
          }
          this.dispatchEvent(event);
          if (typeof this['on' + name] === 'function') {
            this['on' + name](event);
          }
        };

        RTCPeerConnection.prototype._emitGatheringStateChange = function () {
          var event = new Event('icegatheringstatechange');
          this._dispatchEvent('icegatheringstatechange', event);
        };

        RTCPeerConnection.prototype.getConfiguration = function () {
          return this._config;
        };

        RTCPeerConnection.prototype.getLocalStreams = function () {
          return this.localStreams;
        };

        RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this.remoteStreams;
        };

        // internal helper to create a transceiver object.
        // (which is not yet the same as the WebRTC 1.0 transceiver)
        RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
          var hasBundleTransport = this.transceivers.length > 0;
          var transceiver = {
            track: null,
            iceGatherer: null,
            iceTransport: null,
            dtlsTransport: null,
            localCapabilities: null,
            remoteCapabilities: null,
            rtpSender: null,
            rtpReceiver: null,
            kind: kind,
            mid: null,
            sendEncodingParameters: null,
            recvEncodingParameters: null,
            stream: null,
            associatedRemoteMediaStreams: [],
            wantReceive: true
          };
          if (this.usingBundle && hasBundleTransport) {
            transceiver.iceTransport = this.transceivers[0].iceTransport;
            transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
          } else {
            var transports = this._createIceAndDtlsTransports();
            transceiver.iceTransport = transports.iceTransport;
            transceiver.dtlsTransport = transports.dtlsTransport;
          }
          if (!doNotAdd) {
            this.transceivers.push(transceiver);
          }
          return transceiver;
        };

        RTCPeerConnection.prototype.addTrack = function (track, stream) {
          if (this._isClosed) {
            throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
          }

          var alreadyExists = this.transceivers.find(function (s) {
            return s.track === track;
          });

          if (alreadyExists) {
            throw makeError('InvalidAccessError', 'Track already exists.');
          }

          var transceiver;
          for (var i = 0; i < this.transceivers.length; i++) {
            if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
              transceiver = this.transceivers[i];
            }
          }
          if (!transceiver) {
            transceiver = this._createTransceiver(track.kind);
          }

          this._maybeFireNegotiationNeeded();

          if (this.localStreams.indexOf(stream) === -1) {
            this.localStreams.push(stream);
          }

          transceiver.track = track;
          transceiver.stream = stream;
          transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
          return transceiver.rtpSender;
        };

        RTCPeerConnection.prototype.addStream = function (stream) {
          var pc = this;
          if (edgeVersion >= 15025) {
            stream.getTracks().forEach(function (track) {
              pc.addTrack(track, stream);
            });
          } else {
            // Clone is necessary for local demos mostly, attaching directly
            // to two different senders does not work (build 10547).
            // Fixed in 15025 (or earlier)
            var clonedStream = stream.clone();
            stream.getTracks().forEach(function (track, idx) {
              var clonedTrack = clonedStream.getTracks()[idx];
              track.addEventListener('enabled', function (event) {
                clonedTrack.enabled = event.enabled;
              });
            });
            clonedStream.getTracks().forEach(function (track) {
              pc.addTrack(track, clonedStream);
            });
          }
        };

        RTCPeerConnection.prototype.removeTrack = function (sender) {
          if (this._isClosed) {
            throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
          }

          if (!(sender instanceof window.RTCRtpSender)) {
            throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
          }

          var transceiver = this.transceivers.find(function (t) {
            return t.rtpSender === sender;
          });

          if (!transceiver) {
            throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
          }
          var stream = transceiver.stream;

          transceiver.rtpSender.stop();
          transceiver.rtpSender = null;
          transceiver.track = null;
          transceiver.stream = null;

          // remove the stream from the set of local streams
          var localStreams = this.transceivers.map(function (t) {
            return t.stream;
          });
          if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
            this.localStreams.splice(this.localStreams.indexOf(stream), 1);
          }

          this._maybeFireNegotiationNeeded();
        };

        RTCPeerConnection.prototype.removeStream = function (stream) {
          var pc = this;
          stream.getTracks().forEach(function (track) {
            var sender = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (sender) {
              pc.removeTrack(sender);
            }
          });
        };

        RTCPeerConnection.prototype.getSenders = function () {
          return this.transceivers.filter(function (transceiver) {
            return !!transceiver.rtpSender;
          }).map(function (transceiver) {
            return transceiver.rtpSender;
          });
        };

        RTCPeerConnection.prototype.getReceivers = function () {
          return this.transceivers.filter(function (transceiver) {
            return !!transceiver.rtpReceiver;
          }).map(function (transceiver) {
            return transceiver.rtpReceiver;
          });
        };

        RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
          var pc = this;
          if (usingBundle && sdpMLineIndex > 0) {
            return this.transceivers[0].iceGatherer;
          } else if (this._iceGatherers.length) {
            return this._iceGatherers.shift();
          }
          var iceGatherer = new window.RTCIceGatherer({
            iceServers: this._config.iceServers,
            gatherPolicy: this._config.iceTransportPolicy
          });
          Object.defineProperty(iceGatherer, 'state', { value: 'new', writable: true });

          this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
          this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
            var end = !event.candidate || Object.keys(event.candidate).length === 0;
            // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            iceGatherer.state = end ? 'completed' : 'gathering';
            if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
              pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
            }
          };
          iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
          return iceGatherer;
        };

        // start gathering from an RTCIceGatherer.
        RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
          var pc = this;
          var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
          if (iceGatherer.onlocalcandidate) {
            return;
          }
          var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
          this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
          iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
          iceGatherer.onlocalcandidate = function (evt) {
            if (pc.usingBundle && sdpMLineIndex > 0) {
              // if we know that we use bundle we can drop candidates with
              // ѕdpMLineIndex > 0. If we don't do this then our state gets
              // confused since we dispose the extra ice gatherer.
              return;
            }
            var event = new Event('icecandidate');
            event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };

            var cand = evt.candidate;
            // Edge emits an empty object for RTCIceCandidateComplete‥
            var end = !cand || Object.keys(cand).length === 0;
            if (end) {
              // polyfill since RTCIceGatherer.state is not implemented in
              // Edge 10547 yet.
              if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
                iceGatherer.state = 'completed';
              }
            } else {
              if (iceGatherer.state === 'new') {
                iceGatherer.state = 'gathering';
              }
              // RTCIceCandidate doesn't have a component, needs to be added
              cand.component = 1;
              // also the usernameFragment. TODO: update SDP to take both variants.
              cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

              var serializedCandidate = SDPUtils.writeCandidate(cand);
              event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));

              event.candidate.candidate = serializedCandidate;
              event.candidate.toJSON = function () {
                return {
                  candidate: event.candidate.candidate,
                  sdpMid: event.candidate.sdpMid,
                  sdpMLineIndex: event.candidate.sdpMLineIndex,
                  usernameFragment: event.candidate.usernameFragment
                };
              };
            }

            // update local description.
            var sections = SDPUtils.getMediaSections(pc.localDescription.sdp);
            if (!end) {
              sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
            } else {
              sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
            }
            pc.localDescription.sdp = SDPUtils.getDescription(pc.localDescription.sdp) + sections.join('');
            var complete = pc.transceivers.every(function (transceiver) {
              return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
            });

            if (pc.iceGatheringState !== 'gathering') {
              pc.iceGatheringState = 'gathering';
              pc._emitGatheringStateChange();
            }

            // Emit candidate. Also emit null candidate when all gatherers are
            // complete.
            if (!end) {
              pc._dispatchEvent('icecandidate', event);
            }
            if (complete) {
              pc._dispatchEvent('icecandidate', new Event('icecandidate'));
              pc.iceGatheringState = 'complete';
              pc._emitGatheringStateChange();
            }
          };

          // emit already gathered candidates.
          window.setTimeout(function () {
            bufferedCandidateEvents.forEach(function (e) {
              iceGatherer.onlocalcandidate(e);
            });
          }, 0);
        };

        // Create ICE transport and DTLS transport.
        RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
          var pc = this;
          var iceTransport = new window.RTCIceTransport(null);
          iceTransport.onicestatechange = function () {
            pc._updateIceConnectionState();
            pc._updateConnectionState();
          };

          var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
          dtlsTransport.ondtlsstatechange = function () {
            pc._updateConnectionState();
          };
          dtlsTransport.onerror = function () {
            // onerror does not set state to failed by itself.
            Object.defineProperty(dtlsTransport, 'state', { value: 'failed', writable: true });
            pc._updateConnectionState();
          };

          return {
            iceTransport: iceTransport,
            dtlsTransport: dtlsTransport
          };
        };

        // Destroy ICE gatherer, ICE transport and DTLS transport.
        // Without triggering the callbacks.
        RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
          var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
          if (iceGatherer) {
            delete iceGatherer.onlocalcandidate;
            delete this.transceivers[sdpMLineIndex].iceGatherer;
          }
          var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
          if (iceTransport) {
            delete iceTransport.onicestatechange;
            delete this.transceivers[sdpMLineIndex].iceTransport;
          }
          var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
          if (dtlsTransport) {
            delete dtlsTransport.ondtlsstatechange;
            delete dtlsTransport.onerror;
            delete this.transceivers[sdpMLineIndex].dtlsTransport;
          }
        };

        // Start the RTP Sender and Receiver for a transceiver.
        RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
          var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
          if (send && transceiver.rtpSender) {
            params.encodings = transceiver.sendEncodingParameters;
            params.rtcp = {
              cname: SDPUtils.localCName,
              compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.recvEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
            }
            transceiver.rtpSender.send(params);
          }
          if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
            // remove RTX field in Edge 14942
            if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
              transceiver.recvEncodingParameters.forEach(function (p) {
                delete p.rtx;
              });
            }
            if (transceiver.recvEncodingParameters.length) {
              params.encodings = transceiver.recvEncodingParameters;
            } else {
              params.encodings = [{}];
            }
            params.rtcp = {
              compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.rtcpParameters.cname) {
              params.rtcp.cname = transceiver.rtcpParameters.cname;
            }
            if (transceiver.sendEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
            }
            transceiver.rtpReceiver.receive(params);
          }
        };

        RTCPeerConnection.prototype.setLocalDescription = function (description) {
          var pc = this;

          // Note: pranswer is not supported.
          if (['offer', 'answer'].indexOf(description.type) === -1) {
            return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
          }

          if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
          }

          var sections;
          var sessionpart;
          if (description.type === 'offer') {
            // VERY limited support for SDP munging. Limited to:
            // * changing the order of codecs
            sections = SDPUtils.splitSections(description.sdp);
            sessionpart = sections.shift();
            sections.forEach(function (mediaSection, sdpMLineIndex) {
              var caps = SDPUtils.parseRtpParameters(mediaSection);
              pc.transceivers[sdpMLineIndex].localCapabilities = caps;
            });

            pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
              pc._gather(transceiver.mid, sdpMLineIndex);
            });
          } else if (description.type === 'answer') {
            sections = SDPUtils.splitSections(pc.remoteDescription.sdp);
            sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
            sections.forEach(function (mediaSection, sdpMLineIndex) {
              var transceiver = pc.transceivers[sdpMLineIndex];
              var iceGatherer = transceiver.iceGatherer;
              var iceTransport = transceiver.iceTransport;
              var dtlsTransport = transceiver.dtlsTransport;
              var localCapabilities = transceiver.localCapabilities;
              var remoteCapabilities = transceiver.remoteCapabilities;

              // treat bundle-only as not-rejected.
              var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

              if (!rejected && !transceiver.rejected) {
                var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
                var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
                if (isIceLite) {
                  remoteDtlsParameters.role = 'server';
                }

                if (!pc.usingBundle || sdpMLineIndex === 0) {
                  pc._gather(transceiver.mid, sdpMLineIndex);
                  if (iceTransport.state === 'new') {
                    iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
                  }
                  if (dtlsTransport.state === 'new') {
                    dtlsTransport.start(remoteDtlsParameters);
                  }
                }

                // Calculate intersection of capabilities.
                var params = getCommonCapabilities(localCapabilities, remoteCapabilities);

                // Start the RTCRtpSender. The RTCRtpReceiver for this
                // transceiver has already been started in setRemoteDescription.
                pc._transceive(transceiver, params.codecs.length > 0, false);
              }
            });
          }

          pc.localDescription = {
            type: description.type,
            sdp: description.sdp
          };
          if (description.type === 'offer') {
            pc._updateSignalingState('have-local-offer');
          } else {
            pc._updateSignalingState('stable');
          }

          return Promise.resolve();
        };

        RTCPeerConnection.prototype.setRemoteDescription = function (description) {
          var pc = this;

          // Note: pranswer is not supported.
          if (['offer', 'answer'].indexOf(description.type) === -1) {
            return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
          }

          if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
          }

          var streams = {};
          pc.remoteStreams.forEach(function (stream) {
            streams[stream.id] = stream;
          });
          var receiverList = [];
          var sections = SDPUtils.splitSections(description.sdp);
          var sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
          var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
          pc.usingBundle = usingBundle;
          var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];
          if (iceOptions) {
            pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
          } else {
            pc.canTrickleIceCandidates = false;
          }

          sections.forEach(function (mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var kind = SDPUtils.getKind(mediaSection);
            // treat bundle-only as not-rejected.
            var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
            var protocol = lines[0].substr(2).split(' ')[2];

            var direction = SDPUtils.getDirection(mediaSection, sessionpart);
            var remoteMsid = SDPUtils.parseMsid(mediaSection);

            var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

            // Reject datachannels which are not implemented yet.
            if (kind === 'application' && protocol === 'DTLS/SCTP' || rejected) {
              // TODO: this is dangerous in the case where a non-rejected m-line
              //     becomes rejected.
              pc.transceivers[sdpMLineIndex] = {
                mid: mid,
                kind: kind,
                rejected: true
              };
              return;
            }

            if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
              // recycle a rejected transceiver.
              pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
            }

            var transceiver;
            var iceGatherer;
            var iceTransport;
            var dtlsTransport;
            var rtpReceiver;
            var sendEncodingParameters;
            var recvEncodingParameters;
            var localCapabilities;

            var track;
            // FIXME: ensure the mediaSection has rtcp-mux set.
            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
            var remoteIceParameters;
            var remoteDtlsParameters;
            if (!rejected) {
              remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
              remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
              remoteDtlsParameters.role = 'client';
            }
            recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);

            var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

            var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
              return SDPUtils.parseCandidate(cand);
            }).filter(function (cand) {
              return cand.component === 1;
            });

            // Check if we can use BUNDLE and dispose transports.
            if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
              pc._disposeIceAndDtlsTransports(sdpMLineIndex);
              pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
              pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
              pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
              if (pc.transceivers[sdpMLineIndex].rtpSender) {
                pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
              }
              if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
                pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
              }
            }
            if (description.type === 'offer' && !rejected) {
              transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
              transceiver.mid = mid;

              if (!transceiver.iceGatherer) {
                transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
              }

              if (cands.length && transceiver.iceTransport.state === 'new') {
                if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                  transceiver.iceTransport.setRemoteCandidates(cands);
                } else {
                  cands.forEach(function (candidate) {
                    maybeAddCandidate(transceiver.iceTransport, candidate);
                  });
                }
              }

              localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

              // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js
              if (edgeVersion < 15019) {
                localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
                  return codec.name !== 'rtx';
                });
              }

              sendEncodingParameters = transceiver.sendEncodingParameters || [{
                ssrc: (2 * sdpMLineIndex + 2) * 1001
              }];

              // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
              var isNewTrack = false;
              if (direction === 'sendrecv' || direction === 'sendonly') {
                isNewTrack = !transceiver.rtpReceiver;
                rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

                if (isNewTrack) {
                  var stream;
                  track = rtpReceiver.track;
                  // FIXME: does not work with Plan B.
                  if (remoteMsid && remoteMsid.stream === '-') {
                    // no-op. a stream id of '-' means: no associated stream.
                  } else if (remoteMsid) {
                    if (!streams[remoteMsid.stream]) {
                      streams[remoteMsid.stream] = new window.MediaStream();
                      Object.defineProperty(streams[remoteMsid.stream], 'id', {
                        get: function get() {
                          return remoteMsid.stream;
                        }
                      });
                    }
                    Object.defineProperty(track, 'id', {
                      get: function get() {
                        return remoteMsid.track;
                      }
                    });
                    stream = streams[remoteMsid.stream];
                  } else {
                    if (!streams.default) {
                      streams.default = new window.MediaStream();
                    }
                    stream = streams.default;
                  }
                  if (stream) {
                    addTrackToStreamAndFireEvent(track, stream);
                    transceiver.associatedRemoteMediaStreams.push(stream);
                  }
                  receiverList.push([track, rtpReceiver, stream]);
                }
              } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
                transceiver.associatedRemoteMediaStreams.forEach(function (s) {
                  var nativeTrack = s.getTracks().find(function (t) {
                    return t.id === transceiver.rtpReceiver.track.id;
                  });
                  if (nativeTrack) {
                    removeTrackFromStreamAndFireEvent(nativeTrack, s);
                  }
                });
                transceiver.associatedRemoteMediaStreams = [];
              }

              transceiver.localCapabilities = localCapabilities;
              transceiver.remoteCapabilities = remoteCapabilities;
              transceiver.rtpReceiver = rtpReceiver;
              transceiver.rtcpParameters = rtcpParameters;
              transceiver.sendEncodingParameters = sendEncodingParameters;
              transceiver.recvEncodingParameters = recvEncodingParameters;

              // Start the RTCRtpReceiver now. The RTPSender is started in
              // setLocalDescription.
              pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
            } else if (description.type === 'answer' && !rejected) {
              transceiver = pc.transceivers[sdpMLineIndex];
              iceGatherer = transceiver.iceGatherer;
              iceTransport = transceiver.iceTransport;
              dtlsTransport = transceiver.dtlsTransport;
              rtpReceiver = transceiver.rtpReceiver;
              sendEncodingParameters = transceiver.sendEncodingParameters;
              localCapabilities = transceiver.localCapabilities;

              pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
              pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
              pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

              if (cands.length && iceTransport.state === 'new') {
                if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
                  iceTransport.setRemoteCandidates(cands);
                } else {
                  cands.forEach(function (candidate) {
                    maybeAddCandidate(transceiver.iceTransport, candidate);
                  });
                }
              }

              if (!usingBundle || sdpMLineIndex === 0) {
                if (iceTransport.state === 'new') {
                  iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
                }
                if (dtlsTransport.state === 'new') {
                  dtlsTransport.start(remoteDtlsParameters);
                }
              }

              pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly');

              // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
              if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
                track = rtpReceiver.track;
                if (remoteMsid) {
                  if (!streams[remoteMsid.stream]) {
                    streams[remoteMsid.stream] = new window.MediaStream();
                  }
                  addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                  receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
                } else {
                  if (!streams.default) {
                    streams.default = new window.MediaStream();
                  }
                  addTrackToStreamAndFireEvent(track, streams.default);
                  receiverList.push([track, rtpReceiver, streams.default]);
                }
              } else {
                // FIXME: actually the receiver should be created later.
                delete transceiver.rtpReceiver;
              }
            }
          });

          if (pc._dtlsRole === undefined) {
            pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
          }

          pc.remoteDescription = {
            type: description.type,
            sdp: description.sdp
          };
          if (description.type === 'offer') {
            pc._updateSignalingState('have-remote-offer');
          } else {
            pc._updateSignalingState('stable');
          }
          Object.keys(streams).forEach(function (sid) {
            var stream = streams[sid];
            if (stream.getTracks().length) {
              if (pc.remoteStreams.indexOf(stream) === -1) {
                pc.remoteStreams.push(stream);
                var event = new Event('addstream');
                event.stream = stream;
                window.setTimeout(function () {
                  pc._dispatchEvent('addstream', event);
                });
              }

              receiverList.forEach(function (item) {
                var track = item[0];
                var receiver = item[1];
                if (stream.id !== item[2].id) {
                  return;
                }
                fireAddTrack(pc, track, receiver, [stream]);
              });
            }
          });
          receiverList.forEach(function (item) {
            if (item[2]) {
              return;
            }
            fireAddTrack(pc, item[0], item[1], []);
          });

          // check whether addIceCandidate({}) was called within four seconds after
          // setRemoteDescription.
          window.setTimeout(function () {
            if (!(pc && pc.transceivers)) {
              return;
            }
            pc.transceivers.forEach(function (transceiver) {
              if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
                console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
                transceiver.iceTransport.addRemoteCandidate({});
              }
            });
          }, 4000);

          return Promise.resolve();
        };

        RTCPeerConnection.prototype.close = function () {
          this.transceivers.forEach(function (transceiver) {
            /* not yet
            if (transceiver.iceGatherer) {
              transceiver.iceGatherer.close();
            }
            */
            if (transceiver.iceTransport) {
              transceiver.iceTransport.stop();
            }
            if (transceiver.dtlsTransport) {
              transceiver.dtlsTransport.stop();
            }
            if (transceiver.rtpSender) {
              transceiver.rtpSender.stop();
            }
            if (transceiver.rtpReceiver) {
              transceiver.rtpReceiver.stop();
            }
          });
          // FIXME: clean up tracks, local streams, remote streams, etc
          this._isClosed = true;
          this._updateSignalingState('closed');
        };

        // Update the signaling state.
        RTCPeerConnection.prototype._updateSignalingState = function (newState) {
          this.signalingState = newState;
          var event = new Event('signalingstatechange');
          this._dispatchEvent('signalingstatechange', event);
        };

        // Determine whether to fire the negotiationneeded event.
        RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
          var pc = this;
          if (this.signalingState !== 'stable' || this.needNegotiation === true) {
            return;
          }
          this.needNegotiation = true;
          window.setTimeout(function () {
            if (pc.needNegotiation) {
              pc.needNegotiation = false;
              var event = new Event('negotiationneeded');
              pc._dispatchEvent('negotiationneeded', event);
            }
          }, 0);
        };

        // Update the ice connection state.
        RTCPeerConnection.prototype._updateIceConnectionState = function () {
          var newState;
          var states = {
            'new': 0,
            closed: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          };
          this.transceivers.forEach(function (transceiver) {
            states[transceiver.iceTransport.state]++;
          });

          newState = 'new';
          if (states.failed > 0) {
            newState = 'failed';
          } else if (states.checking > 0) {
            newState = 'checking';
          } else if (states.disconnected > 0) {
            newState = 'disconnected';
          } else if (states.new > 0) {
            newState = 'new';
          } else if (states.connected > 0) {
            newState = 'connected';
          } else if (states.completed > 0) {
            newState = 'completed';
          }

          if (newState !== this.iceConnectionState) {
            this.iceConnectionState = newState;
            var event = new Event('iceconnectionstatechange');
            this._dispatchEvent('iceconnectionstatechange', event);
          }
        };

        // Update the connection state.
        RTCPeerConnection.prototype._updateConnectionState = function () {
          var newState;
          var states = {
            'new': 0,
            closed: 0,
            connecting: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          };
          this.transceivers.forEach(function (transceiver) {
            states[transceiver.iceTransport.state]++;
            states[transceiver.dtlsTransport.state]++;
          });
          // ICETransport.completed and connected are the same for this purpose.
          states.connected += states.completed;

          newState = 'new';
          if (states.failed > 0) {
            newState = 'failed';
          } else if (states.connecting > 0) {
            newState = 'connecting';
          } else if (states.disconnected > 0) {
            newState = 'disconnected';
          } else if (states.new > 0) {
            newState = 'new';
          } else if (states.connected > 0) {
            newState = 'connected';
          }

          if (newState !== this.connectionState) {
            this.connectionState = newState;
            var event = new Event('connectionstatechange');
            this._dispatchEvent('connectionstatechange', event);
          }
        };

        RTCPeerConnection.prototype.createOffer = function () {
          var pc = this;

          if (pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
          }

          var numAudioTracks = pc.transceivers.filter(function (t) {
            return t.kind === 'audio';
          }).length;
          var numVideoTracks = pc.transceivers.filter(function (t) {
            return t.kind === 'video';
          }).length;

          // Determine number of audio and video tracks we need to send/recv.
          var offerOptions = arguments[0];
          if (offerOptions) {
            // Reject Chrome legacy constraints.
            if (offerOptions.mandatory || offerOptions.optional) {
              throw new TypeError('Legacy mandatory/optional constraints not supported.');
            }
            if (offerOptions.offerToReceiveAudio !== undefined) {
              if (offerOptions.offerToReceiveAudio === true) {
                numAudioTracks = 1;
              } else if (offerOptions.offerToReceiveAudio === false) {
                numAudioTracks = 0;
              } else {
                numAudioTracks = offerOptions.offerToReceiveAudio;
              }
            }
            if (offerOptions.offerToReceiveVideo !== undefined) {
              if (offerOptions.offerToReceiveVideo === true) {
                numVideoTracks = 1;
              } else if (offerOptions.offerToReceiveVideo === false) {
                numVideoTracks = 0;
              } else {
                numVideoTracks = offerOptions.offerToReceiveVideo;
              }
            }
          }

          pc.transceivers.forEach(function (transceiver) {
            if (transceiver.kind === 'audio') {
              numAudioTracks--;
              if (numAudioTracks < 0) {
                transceiver.wantReceive = false;
              }
            } else if (transceiver.kind === 'video') {
              numVideoTracks--;
              if (numVideoTracks < 0) {
                transceiver.wantReceive = false;
              }
            }
          });

          // Create M-lines for recvonly streams.
          while (numAudioTracks > 0 || numVideoTracks > 0) {
            if (numAudioTracks > 0) {
              pc._createTransceiver('audio');
              numAudioTracks--;
            }
            if (numVideoTracks > 0) {
              pc._createTransceiver('video');
              numVideoTracks--;
            }
          }

          var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            // For each track, create an ice gatherer, ice transport,
            // dtls transport, potentially rtpsender and rtpreceiver.
            var track = transceiver.track;
            var kind = transceiver.kind;
            var mid = transceiver.mid || SDPUtils.generateIdentifier();
            transceiver.mid = mid;

            if (!transceiver.iceGatherer) {
              transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
            }

            var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            if (edgeVersion < 15019) {
              localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
                return codec.name !== 'rtx';
              });
            }
            localCapabilities.codecs.forEach(function (codec) {
              // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
              // by adding level-asymmetry-allowed=1
              if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
                codec.parameters['level-asymmetry-allowed'] = '1';
              }

              // for subsequent offers, we might have to re-use the payload
              // type of the last offer.
              if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
                transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
                  if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
                    codec.preferredPayloadType = remoteCodec.payloadType;
                  }
                });
              }
            });
            localCapabilities.headerExtensions.forEach(function (hdrExt) {
              var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
              remoteExtensions.forEach(function (rHdrExt) {
                if (hdrExt.uri === rHdrExt.uri) {
                  hdrExt.id = rHdrExt.id;
                }
              });
            });

            // generate an ssrc now, to be used later in rtpSender.send
            var sendEncodingParameters = transceiver.sendEncodingParameters || [{
              ssrc: (2 * sdpMLineIndex + 1) * 1001
            }];
            if (track) {
              // add RTX
              if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
                sendEncodingParameters[0].rtx = {
                  ssrc: sendEncodingParameters[0].ssrc + 1
                };
              }
            }

            if (transceiver.wantReceive) {
              transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
            }

            transceiver.localCapabilities = localCapabilities;
            transceiver.sendEncodingParameters = sendEncodingParameters;
          });

          // always offer BUNDLE and dispose on return if not supported.
          if (pc._config.bundlePolicy !== 'max-compat') {
            sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          sdp += 'a=ice-options:trickle\r\n';

          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
            sdp += 'a=rtcp-rsize\r\n';

            if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
              transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
                cand.component = 1;
                sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
              });

              if (transceiver.iceGatherer.state === 'completed') {
                sdp += 'a=end-of-candidates\r\n';
              }
            }
          });

          var desc = new window.RTCSessionDescription({
            type: 'offer',
            sdp: sdp
          });
          return Promise.resolve(desc);
        };

        RTCPeerConnection.prototype.createAnswer = function () {
          var pc = this;

          if (pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
          }

          if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
            return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
          }

          var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
          if (pc.usingBundle) {
            sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          var mediaSectionsInOffer = SDPUtils.getMediaSections(pc.remoteDescription.sdp).length;
          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
              return;
            }
            if (transceiver.rejected) {
              if (transceiver.kind === 'application') {
                sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
              } else if (transceiver.kind === 'audio') {
                sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
              } else if (transceiver.kind === 'video') {
                sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
              }
              sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
              return;
            }

            // FIXME: look at direction.
            if (transceiver.stream) {
              var localTrack;
              if (transceiver.kind === 'audio') {
                localTrack = transceiver.stream.getAudioTracks()[0];
              } else if (transceiver.kind === 'video') {
                localTrack = transceiver.stream.getVideoTracks()[0];
              }
              if (localTrack) {
                // add RTX
                if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
                  transceiver.sendEncodingParameters[0].rtx = {
                    ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                  };
                }
              }
            }

            // Calculate intersection of capabilities.
            var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

            var hasRtx = commonCapabilities.codecs.filter(function (c) {
              return c.name.toLowerCase() === 'rtx';
            }).length;
            if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
              delete transceiver.sendEncodingParameters[0].rtx;
            }

            sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);
            if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
              sdp += 'a=rtcp-rsize\r\n';
            }
          });

          var desc = new window.RTCSessionDescription({
            type: 'answer',
            sdp: sdp
          });
          return Promise.resolve(desc);
        };

        RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
          var pc = this;
          var sections;
          if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
            return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
          }

          // TODO: needs to go into ops queue.
          return new Promise(function (resolve, reject) {
            if (!pc.remoteDescription) {
              return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
            } else if (!candidate || candidate.candidate === '') {
              for (var j = 0; j < pc.transceivers.length; j++) {
                if (pc.transceivers[j].rejected) {
                  continue;
                }
                pc.transceivers[j].iceTransport.addRemoteCandidate({});
                sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                sections[j] += 'a=end-of-candidates\r\n';
                pc.remoteDescription.sdp = SDPUtils.getDescription(pc.remoteDescription.sdp) + sections.join('');
                if (pc.usingBundle) {
                  break;
                }
              }
            } else {
              var sdpMLineIndex = candidate.sdpMLineIndex;
              if (candidate.sdpMid) {
                for (var i = 0; i < pc.transceivers.length; i++) {
                  if (pc.transceivers[i].mid === candidate.sdpMid) {
                    sdpMLineIndex = i;
                    break;
                  }
                }
              }
              var transceiver = pc.transceivers[sdpMLineIndex];
              if (transceiver) {
                if (transceiver.rejected) {
                  return resolve();
                }
                var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {};
                // Ignore Chrome's invalid candidates since Edge does not like them.
                if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                  return resolve();
                }
                // Ignore RTCP candidates, we assume RTCP-MUX.
                if (cand.component && cand.component !== 1) {
                  return resolve();
                }
                // when using bundle, avoid adding candidates to the wrong
                // ice transport. And avoid adding candidates added in the SDP.
                if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
                  if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                    return reject(makeError('OperationError', 'Can not add ICE candidate'));
                  }
                }

                // update the remoteDescription.
                var candidateString = candidate.candidate.trim();
                if (candidateString.indexOf('a=') === 0) {
                  candidateString = candidateString.substr(2);
                }
                sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
                pc.remoteDescription.sdp = SDPUtils.getDescription(pc.remoteDescription.sdp) + sections.join('');
              } else {
                return reject(makeError('OperationError', 'Can not add ICE candidate'));
              }
            }
            resolve();
          });
        };

        RTCPeerConnection.prototype.getStats = function (selector) {
          if (selector && selector instanceof window.MediaStreamTrack) {
            var senderOrReceiver = null;
            this.transceivers.forEach(function (transceiver) {
              if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
                senderOrReceiver = transceiver.rtpSender;
              } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
                senderOrReceiver = transceiver.rtpReceiver;
              }
            });
            if (!senderOrReceiver) {
              throw makeError('InvalidAccessError', 'Invalid selector.');
            }
            return senderOrReceiver.getStats();
          }

          var promises = [];
          this.transceivers.forEach(function (transceiver) {
            ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
              if (transceiver[method]) {
                promises.push(transceiver[method].getStats());
              }
            });
          });
          return Promise.all(promises).then(function (allStats) {
            var results = new Map();
            allStats.forEach(function (stats) {
              stats.forEach(function (stat) {
                results.set(stat.id, stat);
              });
            });
            return results;
          });
        };

        // fix low-level stat names and return Map instead of object.
        var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
        ortcObjects.forEach(function (ortcObjectName) {
          var obj = window[ortcObjectName];
          if (obj && obj.prototype && obj.prototype.getStats) {
            var nativeGetstats = obj.prototype.getStats;
            obj.prototype.getStats = function () {
              return nativeGetstats.apply(this).then(function (nativeStats) {
                var mapStats = new Map();
                Object.keys(nativeStats).forEach(function (id) {
                  nativeStats[id].type = fixStatsType(nativeStats[id]);
                  mapStats.set(id, nativeStats[id]);
                });
                return mapStats;
              });
            };
          }
        });

        // legacy callback shims. Should be moved to adapter.js some days.
        var methods = ['createOffer', 'createAnswer'];
        methods.forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[0] === 'function' || typeof args[1] === 'function') {
              // legacy
              return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
                if (typeof args[0] === 'function') {
                  args[0].apply(null, [description]);
                }
              }, function (error) {
                if (typeof args[1] === 'function') {
                  args[1].apply(null, [error]);
                }
              });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
        methods.forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[1] === 'function' || typeof args[2] === 'function') {
              // legacy
              return nativeMethod.apply(this, arguments).then(function () {
                if (typeof args[1] === 'function') {
                  args[1].apply(null);
                }
              }, function (error) {
                if (typeof args[2] === 'function') {
                  args[2].apply(null, [error]);
                }
              });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        // getStats is special. It doesn't have a spec legacy method yet we support
        // getStats(something, cb) without error callbacks.
        ['getStats'].forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[1] === 'function') {
              return nativeMethod.apply(this, arguments).then(function () {
                if (typeof args[1] === 'function') {
                  args[1].apply(null);
                }
              });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        return RTCPeerConnection;
      };
    }, { "sdp": 2 }], 2: [function (require, module, exports) {
      /* eslint-env node */
      'use strict';

      // SDP helpers.

      var SDPUtils = {};

      // Generate an alphanumeric identifier for cname or mids.
      // TODO: use UUIDs instead? https://gist.github.com/jed/982883
      SDPUtils.generateIdentifier = function () {
        return Math.random().toString(36).substr(2, 10);
      };

      // The RTCP CNAME used by all peerconnections from the same JS.
      SDPUtils.localCName = SDPUtils.generateIdentifier();

      // Splits SDP into lines, dealing with both CRLF and LF.
      SDPUtils.splitLines = function (blob) {
        return blob.trim().split('\n').map(function (line) {
          return line.trim();
        });
      };
      // Splits SDP into sessionpart and mediasections. Ensures CRLF.
      SDPUtils.splitSections = function (blob) {
        var parts = blob.split('\nm=');
        return parts.map(function (part, index) {
          return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
        });
      };

      // returns the session description.
      SDPUtils.getDescription = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        return sections && sections[0];
      };

      // returns the individual media sections.
      SDPUtils.getMediaSections = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        sections.shift();
        return sections;
      };

      // Returns lines that start with a certain prefix.
      SDPUtils.matchPrefix = function (blob, prefix) {
        return SDPUtils.splitLines(blob).filter(function (line) {
          return line.indexOf(prefix) === 0;
        });
      };

      // Parses an ICE candidate line. Sample input:
      // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
      // rport 55996"
      SDPUtils.parseCandidate = function (line) {
        var parts;
        // Parse both variants.
        if (line.indexOf('a=candidate:') === 0) {
          parts = line.substring(12).split(' ');
        } else {
          parts = line.substring(10).split(' ');
        }

        var candidate = {
          foundation: parts[0],
          component: parseInt(parts[1], 10),
          protocol: parts[2].toLowerCase(),
          priority: parseInt(parts[3], 10),
          ip: parts[4],
          port: parseInt(parts[5], 10),
          // skip parts[6] == 'typ'
          type: parts[7]
        };

        for (var i = 8; i < parts.length; i += 2) {
          switch (parts[i]) {
            case 'raddr':
              candidate.relatedAddress = parts[i + 1];
              break;
            case 'rport':
              candidate.relatedPort = parseInt(parts[i + 1], 10);
              break;
            case 'tcptype':
              candidate.tcpType = parts[i + 1];
              break;
            case 'ufrag':
              candidate.ufrag = parts[i + 1]; // for backward compability.
              candidate.usernameFragment = parts[i + 1];
              break;
            default:
              // extension handling, in particular ufrag
              candidate[parts[i]] = parts[i + 1];
              break;
          }
        }
        return candidate;
      };

      // Translates a candidate object into SDP candidate attribute.
      SDPUtils.writeCandidate = function (candidate) {
        var sdp = [];
        sdp.push(candidate.foundation);
        sdp.push(candidate.component);
        sdp.push(candidate.protocol.toUpperCase());
        sdp.push(candidate.priority);
        sdp.push(candidate.ip);
        sdp.push(candidate.port);

        var type = candidate.type;
        sdp.push('typ');
        sdp.push(type);
        if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
          sdp.push('raddr');
          sdp.push(candidate.relatedAddress); // was: relAddr
          sdp.push('rport');
          sdp.push(candidate.relatedPort); // was: relPort
        }
        if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
          sdp.push('tcptype');
          sdp.push(candidate.tcpType);
        }
        if (candidate.usernameFragment || candidate.ufrag) {
          sdp.push('ufrag');
          sdp.push(candidate.usernameFragment || candidate.ufrag);
        }
        return 'candidate:' + sdp.join(' ');
      };

      // Parses an ice-options line, returns an array of option tags.
      // a=ice-options:foo bar
      SDPUtils.parseIceOptions = function (line) {
        return line.substr(14).split(' ');
      };

      // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
      // a=rtpmap:111 opus/48000/2
      SDPUtils.parseRtpMap = function (line) {
        var parts = line.substr(9).split(' ');
        var parsed = {
          payloadType: parseInt(parts.shift(), 10) // was: id
        };

        parts = parts[0].split('/');

        parsed.name = parts[0];
        parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
        // was: channels
        parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
        return parsed;
      };

      // Generate an a=rtpmap line from RTCRtpCodecCapability or
      // RTCRtpCodecParameters.
      SDPUtils.writeRtpMap = function (codec) {
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
      };

      // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
      SDPUtils.parseExtmap = function (line) {
        var parts = line.substr(9).split(' ');
        return {
          id: parseInt(parts[0], 10),
          direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
          uri: parts[1]
        };
      };

      // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
      // RTCRtpHeaderExtension.
      SDPUtils.writeExtmap = function (headerExtension) {
        return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
      };

      // Parses an ftmp line, returns dictionary. Sample input:
      // a=fmtp:96 vbr=on;cng=on
      // Also deals with vbr=on; cng=on
      SDPUtils.parseFmtp = function (line) {
        var parsed = {};
        var kv;
        var parts = line.substr(line.indexOf(' ') + 1).split(';');
        for (var j = 0; j < parts.length; j++) {
          kv = parts[j].trim().split('=');
          parsed[kv[0].trim()] = kv[1];
        }
        return parsed;
      };

      // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeFmtp = function (codec) {
        var line = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.parameters && Object.keys(codec.parameters).length) {
          var params = [];
          Object.keys(codec.parameters).forEach(function (param) {
            params.push(param + '=' + codec.parameters[param]);
          });
          line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
        }
        return line;
      };

      // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
      // a=rtcp-fb:98 nack rpsi
      SDPUtils.parseRtcpFb = function (line) {
        var parts = line.substr(line.indexOf(' ') + 1).split(' ');
        return {
          type: parts.shift(),
          parameter: parts.join(' ')
        };
      };
      // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeRtcpFb = function (codec) {
        var lines = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
          // FIXME: special handling for trr-int?
          codec.rtcpFeedback.forEach(function (fb) {
            lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
          });
        }
        return lines;
      };

      // Parses an RFC 5576 ssrc media attribute. Sample input:
      // a=ssrc:3735928559 cname:something
      SDPUtils.parseSsrcMedia = function (line) {
        var sp = line.indexOf(' ');
        var parts = {
          ssrc: parseInt(line.substr(7, sp - 7), 10)
        };
        var colon = line.indexOf(':', sp);
        if (colon > -1) {
          parts.attribute = line.substr(sp + 1, colon - sp - 1);
          parts.value = line.substr(colon + 1);
        } else {
          parts.attribute = line.substr(sp + 1);
        }
        return parts;
      };

      // Extracts the MID (RFC 5888) from a media section.
      // returns the MID or undefined if no mid line was found.
      SDPUtils.getMid = function (mediaSection) {
        var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
        if (mid) {
          return mid.substr(6);
        }
      };

      SDPUtils.parseFingerprint = function (line) {
        var parts = line.substr(14).split(' ');
        return {
          algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
          value: parts[1]
        };
      };

      // Extracts DTLS parameters from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the fingerprint line as input. See also getIceParameters.
      SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
        // Note: a=setup line is ignored since we use the 'auto' role.
        // Note2: 'algorithm' is not case sensitive except in Edge.
        return {
          role: 'auto',
          fingerprints: lines.map(SDPUtils.parseFingerprint)
        };
      };

      // Serializes DTLS parameters to SDP.
      SDPUtils.writeDtlsParameters = function (params, setupType) {
        var sdp = 'a=setup:' + setupType + '\r\n';
        params.fingerprints.forEach(function (fp) {
          sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
        });
        return sdp;
      };
      // Parses ICE information from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the ice-ufrag and ice-pwd lines as input.
      SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.splitLines(mediaSection);
        // Search in session part, too.
        lines = lines.concat(SDPUtils.splitLines(sessionpart));
        var iceParameters = {
          usernameFragment: lines.filter(function (line) {
            return line.indexOf('a=ice-ufrag:') === 0;
          })[0].substr(12),
          password: lines.filter(function (line) {
            return line.indexOf('a=ice-pwd:') === 0;
          })[0].substr(10)
        };
        return iceParameters;
      };

      // Serializes ICE parameters to SDP.
      SDPUtils.writeIceParameters = function (params) {
        return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
      };

      // Parses the SDP media section and returns RTCRtpParameters.
      SDPUtils.parseRtpParameters = function (mediaSection) {
        var description = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        };
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        for (var i = 3; i < mline.length; i++) {
          // find all codecs from mline[3..]
          var pt = mline[i];
          var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
          if (rtpmapline) {
            var codec = SDPUtils.parseRtpMap(rtpmapline);
            var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch (codec.name.toUpperCase()) {
              case 'RED':
              case 'ULPFEC':
                description.fecMechanisms.push(codec.name.toUpperCase());
                break;
              default:
                // only RED and ULPFEC are recognized as FEC mechanisms.
                break;
            }
          }
        }
        SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
          description.headerExtensions.push(SDPUtils.parseExtmap(line));
        });
        // FIXME: parse rtcp.
        return description;
      };

      // Generates parts of the SDP media section describing the capabilities /
      // parameters.
      SDPUtils.writeRtpDescription = function (kind, caps) {
        var sdp = '';

        // Build the mline.
        sdp += 'm=' + kind + ' ';
        sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
        sdp += ' UDP/TLS/RTP/SAVPF ';
        sdp += caps.codecs.map(function (codec) {
          if (codec.preferredPayloadType !== undefined) {
            return codec.preferredPayloadType;
          }
          return codec.payloadType;
        }).join(' ') + '\r\n';

        sdp += 'c=IN IP4 0.0.0.0\r\n';
        sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

        // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
        caps.codecs.forEach(function (codec) {
          sdp += SDPUtils.writeRtpMap(codec);
          sdp += SDPUtils.writeFmtp(codec);
          sdp += SDPUtils.writeRtcpFb(codec);
        });
        var maxptime = 0;
        caps.codecs.forEach(function (codec) {
          if (codec.maxptime > maxptime) {
            maxptime = codec.maxptime;
          }
        });
        if (maxptime > 0) {
          sdp += 'a=maxptime:' + maxptime + '\r\n';
        }
        sdp += 'a=rtcp-mux\r\n';

        caps.headerExtensions.forEach(function (extension) {
          sdp += SDPUtils.writeExtmap(extension);
        });
        // FIXME: write fecMechanisms.
        return sdp;
      };

      // Parses the SDP media section and returns an array of
      // RTCRtpEncodingParameters.
      SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
        var encodingParameters = [];
        var description = SDPUtils.parseRtpParameters(mediaSection);
        var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
        var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

        // filter a=ssrc:... cname:, ignore PlanB-msid
        var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (parts) {
          return parts.attribute === 'cname';
        });
        var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
        var secondarySsrc;

        var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
          var parts = line.split(' ');
          parts.shift();
          return parts.map(function (part) {
            return parseInt(part, 10);
          });
        });
        if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
          secondarySsrc = flows[0][1];
        }

        description.codecs.forEach(function (codec) {
          if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            var encParam = {
              ssrc: primarySsrc,
              codecPayloadType: parseInt(codec.parameters.apt, 10),
              rtx: {
                ssrc: secondarySsrc
              }
            };
            encodingParameters.push(encParam);
            if (hasRed) {
              encParam = JSON.parse(JSON.stringify(encParam));
              encParam.fec = {
                ssrc: secondarySsrc,
                mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
              };
              encodingParameters.push(encParam);
            }
          }
        });
        if (encodingParameters.length === 0 && primarySsrc) {
          encodingParameters.push({
            ssrc: primarySsrc
          });
        }

        // we support both b=AS and b=TIAS but interpret AS as TIAS.
        var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
        if (bandwidth.length) {
          if (bandwidth[0].indexOf('b=TIAS:') === 0) {
            bandwidth = parseInt(bandwidth[0].substr(7), 10);
          } else if (bandwidth[0].indexOf('b=AS:') === 0) {
            // use formula from JSEP to convert b=AS to TIAS value.
            bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
          } else {
            bandwidth = undefined;
          }
          encodingParameters.forEach(function (params) {
            params.maxBitrate = bandwidth;
          });
        }
        return encodingParameters;
      };

      // parses http://draft.ortc.org/#rtcrtcpparameters*
      SDPUtils.parseRtcpParameters = function (mediaSection) {
        var rtcpParameters = {};

        var cname;
        // Gets the first SSRC. Note that with RTX there might be multiple
        // SSRCs.
        var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (obj) {
          return obj.attribute === 'cname';
        })[0];
        if (remoteSsrc) {
          rtcpParameters.cname = remoteSsrc.value;
          rtcpParameters.ssrc = remoteSsrc.ssrc;
        }

        // Edge uses the compound attribute instead of reducedSize
        // compound is !reducedSize
        var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
        rtcpParameters.reducedSize = rsize.length > 0;
        rtcpParameters.compound = rsize.length === 0;

        // parses the rtcp-mux attrіbute.
        // Note that Edge does not support unmuxed RTCP.
        var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
        rtcpParameters.mux = mux.length > 0;

        return rtcpParameters;
      };

      // parses either a=msid: or a=ssrc:... msid lines and returns
      // the id of the MediaStream and MediaStreamTrack.
      SDPUtils.parseMsid = function (mediaSection) {
        var parts;
        var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
        if (spec.length === 1) {
          parts = spec[0].substr(7).split(' ');
          return { stream: parts[0], track: parts[1] };
        }
        var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (parts) {
          return parts.attribute === 'msid';
        });
        if (planB.length > 0) {
          parts = planB[0].value.split(' ');
          return { stream: parts[0], track: parts[1] };
        }
      };

      // Generate a session ID for SDP.
      // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
      // recommends using a cryptographically random +ve 64-bit value
      // but right now this should be acceptable and within the right range
      SDPUtils.generateSessionId = function () {
        return Math.random().toString().substr(2, 21);
      };

      // Write boilder plate for start of SDP
      // sessId argument is optional - if not supplied it will
      // be generated randomly
      // sessVersion is optional and defaults to 2
      SDPUtils.writeSessionBoilerplate = function (sessId, sessVer) {
        var sessionId;
        var version = sessVer !== undefined ? sessVer : 2;
        if (sessId) {
          sessionId = sessId;
        } else {
          sessionId = SDPUtils.generateSessionId();
        }
        // FIXME: sess-id should be an NTP timestamp.
        return 'v=0\r\n' + 'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
      };

      SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
        var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

        // Map ICE parameters (ufrag, pwd) to SDP.
        sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

        // Map DTLS parameters to SDP.
        sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');

        sdp += 'a=mid:' + transceiver.mid + '\r\n';

        if (transceiver.direction) {
          sdp += 'a=' + transceiver.direction + '\r\n';
        } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
          sdp += 'a=sendrecv\r\n';
        } else if (transceiver.rtpSender) {
          sdp += 'a=sendonly\r\n';
        } else if (transceiver.rtpReceiver) {
          sdp += 'a=recvonly\r\n';
        } else {
          sdp += 'a=inactive\r\n';
        }

        if (transceiver.rtpSender) {
          // spec.
          var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
          sdp += 'a=' + msid;

          // for Chrome.
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;
          if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
            sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
          }
        }
        // FIXME: this should be written by writeRtpDescription.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        }
        return sdp;
      };

      // Gets the direction from the mediaSection or the sessionpart.
      SDPUtils.getDirection = function (mediaSection, sessionpart) {
        // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
        var lines = SDPUtils.splitLines(mediaSection);
        for (var i = 0; i < lines.length; i++) {
          switch (lines[i]) {
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
              return lines[i].substr(2);
            default:
            // FIXME: What should happen here?
          }
        }
        if (sessionpart) {
          return SDPUtils.getDirection(sessionpart);
        }
        return 'sendrecv';
      };

      SDPUtils.getKind = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        return mline[0].substr(2);
      };

      SDPUtils.isRejected = function (mediaSection) {
        return mediaSection.split(' ', 2)[1] === '0';
      };

      SDPUtils.parseMLine = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var parts = lines[0].substr(2).split(' ');
        return {
          kind: parts[0],
          port: parseInt(parts[1], 10),
          protocol: parts[2],
          fmt: parts.slice(3).join(' ')
        };
      };

      SDPUtils.parseOLine = function (mediaSection) {
        var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
        var parts = line.substr(2).split(' ');
        return {
          username: parts[0],
          sessionId: parts[1],
          sessionVersion: parseInt(parts[2], 10),
          netType: parts[3],
          addressType: parts[4],
          address: parts[5]
        };
      };

      // Expose public methods.
      if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
        module.exports = SDPUtils;
      }
    }, {}], 3: [function (require, module, exports) {
      (function (global) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */
        /* eslint-env node */

        'use strict';

        var adapterFactory = require('./adapter_factory.js');
        module.exports = adapterFactory({ window: global.window });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./adapter_factory.js": 4 }], 4: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */

      'use strict';

      var utils = require('./utils');
      // Shimming starts here.
      module.exports = function (dependencies, opts) {
        var window = dependencies && dependencies.window;

        var options = {
          shimChrome: true,
          shimFirefox: true,
          shimEdge: true,
          shimSafari: true
        };

        for (var key in opts) {
          if (hasOwnProperty.call(opts, key)) {
            options[key] = opts[key];
          }
        }

        // Utils.
        var logging = utils.log;
        var browserDetails = utils.detectBrowser(window);

        // Uncomment the line below if you want logging to occur, including logging
        // for the switch statement below. Can also be turned on in the browser via
        // adapter.disableLog(false), but then logging from the switch statement below
        // will not appear.
        // require('./utils').disableLog(false);

        // Browser shims.
        var chromeShim = require('./chrome/chrome_shim') || null;
        var edgeShim = require('./edge/edge_shim') || null;
        var firefoxShim = require('./firefox/firefox_shim') || null;
        var safariShim = require('./safari/safari_shim') || null;
        var commonShim = require('./common_shim') || null;

        // Export to the adapter global object visible in the browser.
        var adapter = {
          browserDetails: browserDetails,
          commonShim: commonShim,
          extractVersion: utils.extractVersion,
          disableLog: utils.disableLog,
          disableWarnings: utils.disableWarnings
        };

        // Shim browser if found.
        switch (browserDetails.browser) {
          case 'chrome':
            if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
              logging('Chrome shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = chromeShim;
            commonShim.shimCreateObjectURL(window);

            chromeShim.shimGetUserMedia(window);
            chromeShim.shimMediaStream(window);
            chromeShim.shimSourceObject(window);
            chromeShim.shimPeerConnection(window);
            chromeShim.shimOnTrack(window);
            chromeShim.shimAddTrackRemoveTrack(window);
            chromeShim.shimGetSendersWithDtmf(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'firefox':
            if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
              logging('Firefox shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = firefoxShim;
            commonShim.shimCreateObjectURL(window);

            firefoxShim.shimGetUserMedia(window);
            firefoxShim.shimSourceObject(window);
            firefoxShim.shimPeerConnection(window);
            firefoxShim.shimOnTrack(window);
            firefoxShim.shimRemoveStream(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'edge':
            if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
              logging('MS edge shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming edge.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = edgeShim;
            commonShim.shimCreateObjectURL(window);

            edgeShim.shimGetUserMedia(window);
            edgeShim.shimPeerConnection(window);
            edgeShim.shimReplaceTrack(window);

            // the edge shim implements the full RTCIceCandidate object.

            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'safari':
            if (!safariShim || !options.shimSafari) {
              logging('Safari shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = safariShim;
            commonShim.shimCreateObjectURL(window);

            safariShim.shimRTCIceServerUrls(window);
            safariShim.shimCallbacksAPI(window);
            safariShim.shimLocalStreamsAPI(window);
            safariShim.shimRemoteStreamsAPI(window);
            safariShim.shimTrackEventTransceiver(window);
            safariShim.shimGetUserMedia(window);
            safariShim.shimCreateOfferLegacy(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          default:
            logging('Unsupported browser!');
            break;
        }

        return adapter;
      };
    }, { "./chrome/chrome_shim": 5, "./common_shim": 7, "./edge/edge_shim": 8, "./firefox/firefox_shim": 10, "./safari/safari_shim": 12, "./utils": 13 }], 5: [function (require, module, exports) {

      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils.js');
      var logging = utils.log;

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimMediaStream: function shimMediaStream(window) {
          window.MediaStream = window.MediaStream || window.webkitMediaStream;
        },

        shimOnTrack: function shimOnTrack(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function get() {
                return this._ontrack;
              },
              set: function set(f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                }
                this.addEventListener('track', this._ontrack = f);
              }
            });
            var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
            window.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var pc = this;
              if (!pc._ontrackpoly) {
                pc._ontrackpoly = function (e) {
                  // onaddstream does not fire when a track is added to an existing
                  // stream. But stream.onaddtrack is implemented so we use that.
                  e.stream.addEventListener('addtrack', function (te) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === te.track.id;
                      });
                    } else {
                      receiver = { track: te.track };
                    }

                    var event = new Event('track');
                    event.track = te.track;
                    event.receiver = receiver;
                    event.transceiver = { receiver: receiver };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                  e.stream.getTracks().forEach(function (track) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === track.id;
                      });
                    } else {
                      receiver = { track: track };
                    }
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = receiver;
                    event.transceiver = { receiver: receiver };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                };
                pc.addEventListener('addstream', pc._ontrackpoly);
              }
              return origSetRemoteDescription.apply(pc, arguments);
            };
          } else if (!('RTCRtpTransceiver' in window)) {
            utils.wrapPeerConnectionEvent(window, 'track', function (e) {
              if (!e.transceiver) {
                e.transceiver = { receiver: e.receiver };
              }
              return e;
            });
          }
        },

        shimGetSendersWithDtmf: function shimGetSendersWithDtmf(window) {
          // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
            var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
              return {
                track: track,
                get dtmf() {
                  if (this._dtmf === undefined) {
                    if (track.kind === 'audio') {
                      this._dtmf = pc.createDTMFSender(track);
                    } else {
                      this._dtmf = null;
                    }
                  }
                  return this._dtmf;
                },
                _pc: pc
              };
            };

            // augment addTrack when getSenders is not available.
            if (!window.RTCPeerConnection.prototype.getSenders) {
              window.RTCPeerConnection.prototype.getSenders = function () {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
              };
              var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
              window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
                var pc = this;
                var sender = origAddTrack.apply(pc, arguments);
                if (!sender) {
                  sender = shimSenderWithDtmf(pc, track);
                  pc._senders.push(sender);
                }
                return sender;
              };

              var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
              window.RTCPeerConnection.prototype.removeTrack = function (sender) {
                var pc = this;
                origRemoveTrack.apply(pc, arguments);
                var idx = pc._senders.indexOf(sender);
                if (idx !== -1) {
                  pc._senders.splice(idx, 1);
                }
              };
            }
            var origAddStream = window.RTCPeerConnection.prototype.addStream;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origAddStream.apply(pc, [stream]);
              stream.getTracks().forEach(function (track) {
                pc._senders.push(shimSenderWithDtmf(pc, track));
              });
            };

            var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origRemoveStream.apply(pc, [stream]);

              stream.getTracks().forEach(function (track) {
                var sender = pc._senders.find(function (s) {
                  return s.track === track;
                });
                if (sender) {
                  pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
                }
              });
            };
          } else if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
            var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
            window.RTCPeerConnection.prototype.getSenders = function () {
              var pc = this;
              var senders = origGetSenders.apply(pc, []);
              senders.forEach(function (sender) {
                sender._pc = pc;
              });
              return senders;
            };

            Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
              get: function get() {
                if (this._dtmf === undefined) {
                  if (this.track.kind === 'audio') {
                    this._dtmf = this._pc.createDTMFSender(this.track);
                  } else {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              }
            });
          }
        },

        shimSourceObject: function shimSourceObject(window) {
          var URL = window && window.URL;

          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function get() {
                  return this._srcObject;
                },
                set: function set(stream) {
                  var self = this;
                  // Use _srcObject as a private property for this shim
                  this._srcObject = stream;
                  if (this.src) {
                    URL.revokeObjectURL(this.src);
                  }

                  if (!stream) {
                    this.src = '';
                    return undefined;
                  }
                  this.src = URL.createObjectURL(stream);
                  // We need to recreate the blob url when a track is added or
                  // removed. Doing it manually since we want to avoid a recursion.
                  stream.addEventListener('addtrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                  stream.addEventListener('removetrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                }
              });
            }
          }
        },

        shimAddTrackRemoveTrackWithNative: function shimAddTrackRemoveTrackWithNative(window) {
          // shim addTrack/removeTrack with native variants in order to make
          // the interactions with legacy getLocalStreams behave as in other browsers.
          // Keeps a mapping stream.id => [stream, rtpsenders...]
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
              return pc._shimmedLocalStreams[streamId][0];
            });
          };

          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            if (!stream) {
              return origAddTrack.apply(this, arguments);
            }
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            var sender = origAddTrack.apply(this, arguments);
            if (!this._shimmedLocalStreams[stream.id]) {
              this._shimmedLocalStreams[stream.id] = [stream, sender];
            } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
              this._shimmedLocalStreams[stream.id].push(sender);
            }
            return sender;
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
              }
            });
            var existingSenders = pc.getSenders();
            origAddStream.apply(this, arguments);
            var newSenders = pc.getSenders().filter(function (newSender) {
              return existingSenders.indexOf(newSender) === -1;
            });
            this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            delete this._shimmedLocalStreams[stream.id];
            return origRemoveStream.apply(this, arguments);
          };

          var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            if (sender) {
              Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
                var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
                if (idx !== -1) {
                  pc._shimmedLocalStreams[streamId].splice(idx, 1);
                }
                if (pc._shimmedLocalStreams[streamId].length === 1) {
                  delete pc._shimmedLocalStreams[streamId];
                }
              });
            }
            return origRemoveTrack.apply(this, arguments);
          };
        },

        shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack(window) {
          var browserDetails = utils.detectBrowser(window);
          // shim addTrack and removeTrack.
          if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
            return this.shimAddTrackRemoveTrackWithNative(window);
          }

          // also shim pc.getLocalStreams when addTrack is shimmed
          // to return the original streams.
          var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            var nativeStreams = origGetLocalStreams.apply(this);
            pc._reverseStreams = pc._reverseStreams || {};
            return nativeStreams.map(function (stream) {
              return pc._reverseStreams[stream.id];
            });
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
              }
            });
            // Add identity mapping for consistency with addTrack.
            // Unless this is being used with a stream from addTrack.
            if (!pc._reverseStreams[stream.id]) {
              var newStream = new window.MediaStream(stream.getTracks());
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              stream = newStream;
            }
            origAddStream.apply(pc, [stream]);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
            delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
            delete pc._streams[stream.id];
          };

          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            }
            var streams = [].slice.call(arguments, 1);
            if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
              return t === track;
            })) {
              // this is not fully correct but all we can manage without
              // [[associated MediaStreams]] internal slot.
              throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
            }

            var alreadyExists = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.', 'InvalidAccessError');
            }

            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};
            var oldStream = pc._streams[stream.id];
            if (oldStream) {
              // this is using odd Chrome behaviour, use with caution:
              // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
              // Note: we rely on the high-level addTrack/dtmf shim to
              // create the sender with a dtmf sender.
              oldStream.addTrack(track);

              // Trigger ONN async.
              Promise.resolve().then(function () {
                pc.dispatchEvent(new Event('negotiationneeded'));
              });
            } else {
              var newStream = new window.MediaStream([track]);
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              pc.addStream(newStream);
            }
            return pc.getSenders().find(function (s) {
              return s.track === track;
            });
          };

          // replace the internal stream id with the external one and
          // vice versa.
          function replaceInternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }
          function replaceExternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }
          ['createOffer', 'createAnswer'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              var pc = this;
              var args = arguments;
              var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
              if (isLegacyCall) {
                return nativeMethod.apply(pc, [function (description) {
                  var desc = replaceInternalStreamId(pc, description);
                  args[0].apply(null, [desc]);
                }, function (err) {
                  if (args[1]) {
                    args[1].apply(null, err);
                  }
                }, arguments[2]]);
              }
              return nativeMethod.apply(pc, arguments).then(function (description) {
                return replaceInternalStreamId(pc, description);
              });
            };
          });

          var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
          window.RTCPeerConnection.prototype.setLocalDescription = function () {
            var pc = this;
            if (!arguments.length || !arguments[0].type) {
              return origSetLocalDescription.apply(pc, arguments);
            }
            arguments[0] = replaceExternalStreamId(pc, arguments[0]);
            return origSetLocalDescription.apply(pc, arguments);
          };

          // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

          var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
          Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
            get: function get() {
              var pc = this;
              var description = origLocalDescription.get.apply(this);
              if (description.type === '') {
                return description;
              }
              return replaceInternalStreamId(pc, description);
            }
          });

          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            }
            // We can not yet check for sender instanceof RTCRtpSender
            // since we shim RTPSender. So we check if sender._pc is set.
            if (!sender._pc) {
              throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
            }
            var isLocal = sender._pc === pc;
            if (!isLocal) {
              throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            }

            // Search for the native stream the senders track belongs to.
            pc._streams = pc._streams || {};
            var stream;
            Object.keys(pc._streams).forEach(function (streamid) {
              var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
                return sender.track === track;
              });
              if (hasTrack) {
                stream = pc._streams[streamid];
              }
            });

            if (stream) {
              if (stream.getTracks().length === 1) {
                // if this is the last track of the stream, remove the stream. This
                // takes care of any shimmed _senders.
                pc.removeStream(pc._reverseStreams[stream.id]);
              } else {
                // relying on the same odd chrome behaviour as above.
                stream.removeTrack(sender.track);
              }
              pc.dispatchEvent(new Event('negotiationneeded'));
            }
          };
        },

        shimPeerConnection: function shimPeerConnection(window) {
          var browserDetails = utils.detectBrowser(window);

          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              // Translate iceTransportPolicy to iceTransports,
              // see https://code.google.com/p/webrtc/issues/detail?id=4869
              // this was fixed in M56 along with unprefixing RTCPeerConnection.
              logging('PeerConnection');
              if (pcConfig && pcConfig.iceTransportPolicy) {
                pcConfig.iceTransports = pcConfig.iceTransportPolicy;
              }

              return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
            // wrap static methods. Currently just generateCertificate.
            if (window.webkitRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return window.webkitRTCPeerConnection.generateCertificate;
                }
              });
            }
          } else {
            // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
            var OrigPeerConnection = window.RTCPeerConnection;
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];
                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];
                  if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                    utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    newIceServers.push(server);
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }
                pcConfig.iceServers = newIceServers;
              }
              return new OrigPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
            // wrap static methods. Currently just generateCertificate.
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function get() {
                return OrigPeerConnection.generateCertificate;
              }
            });
          }

          var origGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
            var pc = this;
            var args = arguments;

            // If selector is a function then we are in the old style stats so just
            // pass back the original getStats format to avoid breaking old users.
            if (arguments.length > 0 && typeof selector === 'function') {
              return origGetStats.apply(this, arguments);
            }

            // When spec-style getStats is supported, return those when called with
            // either no arguments or the selector argument is null.
            if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
              return origGetStats.apply(this, []);
            }

            var fixChromeStats_ = function fixChromeStats_(response) {
              var standardReport = {};
              var reports = response.result();
              reports.forEach(function (report) {
                var standardStats = {
                  id: report.id,
                  timestamp: report.timestamp,
                  type: {
                    localcandidate: 'local-candidate',
                    remotecandidate: 'remote-candidate'
                  }[report.type] || report.type
                };
                report.names().forEach(function (name) {
                  standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
              });

              return standardReport;
            };

            // shim getStats with maplike support
            var makeMapStats = function makeMapStats(stats) {
              return new Map(Object.keys(stats).map(function (key) {
                return [key, stats[key]];
              }));
            };

            if (arguments.length >= 2) {
              var successCallbackWrapper_ = function successCallbackWrapper_(response) {
                args[1](makeMapStats(fixChromeStats_(response)));
              };

              return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
            }

            // promise-support
            return new Promise(function (resolve, reject) {
              origGetStats.apply(pc, [function (response) {
                resolve(makeMapStats(fixChromeStats_(response)));
              }, reject]);
            }).then(successCallback, errorCallback);
          };

          // add promise support -- natively available in Chrome 51
          if (browserDetails.version < 51) {
            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var args = arguments;
                var pc = this;
                var promise = new Promise(function (resolve, reject) {
                  nativeMethod.apply(pc, [args[0], resolve, reject]);
                });
                if (args.length < 2) {
                  return promise;
                }
                return promise.then(function () {
                  args[1].apply(null, []);
                }, function (err) {
                  if (args.length >= 3) {
                    args[2].apply(null, [err]);
                  }
                });
              };
            });
          }

          // promise support for createOffer and createAnswer. Available (without
          // bugs) since M52: crbug/619289
          if (browserDetails.version < 52) {
            ['createOffer', 'createAnswer'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var pc = this;
                if (arguments.length < 1 || arguments.length === 1 && _typeof(arguments[0]) === 'object') {
                  var opts = arguments.length === 1 ? arguments[0] : undefined;
                  return new Promise(function (resolve, reject) {
                    nativeMethod.apply(pc, [resolve, reject, opts]);
                  });
                }
                return nativeMethod.apply(this, arguments);
              };
            });
          }

          // shim implicit creation of RTCSessionDescription/RTCIceCandidate
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };
        }
      };
    }, { "../utils.js": 13, "./getusermedia": 6 }], 6: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils.js');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;

        var constraintsToChrome_ = function constraintsToChrome_(c) {
          if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
            return c;
          }
          var cc = {};
          Object.keys(c).forEach(function (key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
            if (r.exact !== undefined && typeof r.exact === 'number') {
              r.min = r.max = r.exact;
            }
            var oldname_ = function oldname_(prefix, name) {
              if (prefix) {
                return prefix + name.charAt(0).toUpperCase() + name.slice(1);
              }
              return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
              cc.optional = cc.optional || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[oldname_('min', key)] = r.ideal;
                cc.optional.push(oc);
                oc = {};
                oc[oldname_('max', key)] = r.ideal;
                cc.optional.push(oc);
              } else {
                oc[oldname_('', key)] = r.ideal;
                cc.optional.push(oc);
              }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_('', key)] = r.exact;
            } else {
              ['min', 'max'].forEach(function (mix) {
                if (r[mix] !== undefined) {
                  cc.mandatory = cc.mandatory || {};
                  cc.mandatory[oldname_(mix, key)] = r[mix];
                }
              });
            }
          });
          if (c.advanced) {
            cc.optional = (cc.optional || []).concat(c.advanced);
          }
          return cc;
        };

        var shimConstraints_ = function shimConstraints_(constraints, func) {
          if (browserDetails.version >= 61) {
            return func(constraints);
          }
          constraints = JSON.parse(JSON.stringify(constraints));
          if (constraints && _typeof(constraints.audio) === 'object') {
            var remap = function remap(obj, a, b) {
              if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
              }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
          }
          if (constraints && _typeof(constraints.video) === 'object') {
            // Shim facingMode for mobile & surface pro.
            var face = constraints.video.facingMode;
            face = face && ((typeof face === "undefined" ? "undefined" : _typeof(face)) === 'object' ? face : { ideal: face });
            var getSupportedFacingModeLies = browserDetails.version < 66;

            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
              delete constraints.video.facingMode;
              var matches;
              if (face.exact === 'environment' || face.ideal === 'environment') {
                matches = ['back', 'rear'];
              } else if (face.exact === 'user' || face.ideal === 'user') {
                matches = ['front'];
              }
              if (matches) {
                // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then(function (devices) {
                  devices = devices.filter(function (d) {
                    return d.kind === 'videoinput';
                  });
                  var dev = devices.find(function (d) {
                    return matches.some(function (match) {
                      return d.label.toLowerCase().indexOf(match) !== -1;
                    });
                  });
                  if (!dev && devices.length && matches.indexOf('back') !== -1) {
                    dev = devices[devices.length - 1]; // more likely the back cam
                  }
                  if (dev) {
                    constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
                  }
                  constraints.video = constraintsToChrome_(constraints.video);
                  logging('chrome: ' + JSON.stringify(constraints));
                  return func(constraints);
                });
              }
            }
            constraints.video = constraintsToChrome_(constraints.video);
          }
          logging('chrome: ' + JSON.stringify(constraints));
          return func(constraints);
        };

        var shimError_ = function shimError_(e) {
          return {
            name: {
              PermissionDeniedError: 'NotAllowedError',
              PermissionDismissedError: 'NotAllowedError',
              InvalidStateError: 'NotAllowedError',
              DevicesNotFoundError: 'NotFoundError',
              ConstraintNotSatisfiedError: 'OverconstrainedError',
              TrackStartError: 'NotReadableError',
              MediaDeviceFailedDueToShutdown: 'NotAllowedError',
              MediaDeviceKillSwitchOn: 'NotAllowedError',
              TabCaptureError: 'AbortError',
              ScreenCaptureError: 'AbortError',
              DeviceCaptureError: 'AbortError'
            }[e.name] || e.name,
            message: e.message,
            constraint: e.constraintName,
            toString: function toString() {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
          shimConstraints_(constraints, function (c) {
            navigator.webkitGetUserMedia(c, onSuccess, function (e) {
              if (onError) {
                onError(shimError_(e));
              }
            });
          });
        };

        navigator.getUserMedia = getUserMedia_;

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
          return new Promise(function (resolve, reject) {
            navigator.getUserMedia(constraints, resolve, reject);
          });
        };

        if (!navigator.mediaDevices) {
          navigator.mediaDevices = {
            getUserMedia: getUserMediaPromise_,
            enumerateDevices: function enumerateDevices() {
              return new Promise(function (resolve) {
                var kinds = { audio: 'audioinput', video: 'videoinput' };
                return window.MediaStreamTrack.getSources(function (devices) {
                  resolve(devices.map(function (device) {
                    return { label: device.label,
                      kind: kinds[device.kind],
                      deviceId: device.id,
                      groupId: '' };
                  }));
                });
              });
            },
            getSupportedConstraints: function getSupportedConstraints() {
              return {
                deviceId: true, echoCancellation: true, facingMode: true,
                frameRate: true, height: true, width: true
              };
            }
          };
        }

        // A shim for getUserMedia method on the mediaDevices object.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (!navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            return getUserMediaPromise_(constraints);
          };
        } else {
          // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
          // function which returns a Promise, it does not accept spec-style
          // constraints.
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (cs) {
            return shimConstraints_(cs, function (c) {
              return origGetUserMedia(c).then(function (stream) {
                if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                  stream.getTracks().forEach(function (track) {
                    track.stop();
                  });
                  throw new DOMException('', 'NotFoundError');
                }
                return stream;
              }, function (e) {
                return Promise.reject(shimError_(e));
              });
            });
          };
        }

        // Dummy devicechange event methods.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
          navigator.mediaDevices.addEventListener = function () {
            logging('Dummy mediaDevices.addEventListener called.');
          };
        }
        if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
          navigator.mediaDevices.removeEventListener = function () {
            logging('Dummy mediaDevices.removeEventListener called.');
          };
        }
      };
    }, { "../utils.js": 13 }], 7: [function (require, module, exports) {
      /*
       *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var SDPUtils = require('sdp');
      var utils = require('./utils');

      module.exports = {
        shimRTCIceCandidate: function shimRTCIceCandidate(window) {
          // foundation is arbitrarily chosen as an indicator for full support for
          // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
          if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
            return;
          }

          var NativeRTCIceCandidate = window.RTCIceCandidate;
          window.RTCIceCandidate = function (args) {
            // Remove the a= which shouldn't be part of the candidate string.
            if ((typeof args === "undefined" ? "undefined" : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
              args = JSON.parse(JSON.stringify(args));
              args.candidate = args.candidate.substr(2);
            }

            if (args.candidate && args.candidate.length) {
              // Augment the native candidate with the parsed fields.
              var nativeCandidate = new NativeRTCIceCandidate(args);
              var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
              var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

              // Add a serializer that does not serialize the extra attributes.
              augmentedCandidate.toJSON = function () {
                return {
                  candidate: augmentedCandidate.candidate,
                  sdpMid: augmentedCandidate.sdpMid,
                  sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                  usernameFragment: augmentedCandidate.usernameFragment
                };
              };
              return augmentedCandidate;
            }
            return new NativeRTCIceCandidate(args);
          };
          window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

          // Hook up the augmented candidate in onicecandidate and
          // addEventListener('icecandidate', ...)
          utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
            if (e.candidate) {
              Object.defineProperty(e, 'candidate', {
                value: new window.RTCIceCandidate(e.candidate),
                writable: 'false'
              });
            }
            return e;
          });
        },

        // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

        shimCreateObjectURL: function shimCreateObjectURL(window) {
          var URL = window && window.URL;

          if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.HTMLMediaElement && 'srcObject' in window.HTMLMediaElement.prototype && URL.createObjectURL && URL.revokeObjectURL)) {
            // Only shim CreateObjectURL using srcObject if srcObject exists.
            return undefined;
          }

          var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
          var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
          var streams = new Map(),
              newId = 0;

          URL.createObjectURL = function (stream) {
            if ('getTracks' in stream) {
              var url = 'polyblob:' + ++newId;
              streams.set(url, stream);
              utils.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream');
              return url;
            }
            return nativeCreateObjectURL(stream);
          };
          URL.revokeObjectURL = function (url) {
            nativeRevokeObjectURL(url);
            streams.delete(url);
          };

          var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, 'src');
          Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
            get: function get() {
              return dsc.get.apply(this);
            },
            set: function set(url) {
              this.srcObject = streams.get(url) || null;
              return dsc.set.apply(this, [url]);
            }
          });

          var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
          window.HTMLMediaElement.prototype.setAttribute = function () {
            if (arguments.length === 2 && ('' + arguments[0]).toLowerCase() === 'src') {
              this.srcObject = streams.get(arguments[1]) || null;
            }
            return nativeSetAttribute.apply(this, arguments);
          };
        },

        shimMaxMessageSize: function shimMaxMessageSize(window) {
          if (window.RTCSctpTransport || !window.RTCPeerConnection) {
            return;
          }
          var browserDetails = utils.detectBrowser(window);

          if (!('sctp' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
              get: function get() {
                return typeof this._sctp === 'undefined' ? null : this._sctp;
              }
            });
          }

          var sctpInDescription = function sctpInDescription(description) {
            var sections = SDPUtils.splitSections(description.sdp);
            sections.shift();
            return sections.some(function (mediaSection) {
              var mLine = SDPUtils.parseMLine(mediaSection);
              return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
            });
          };

          var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
            // TODO: Is there a better solution for detecting Firefox?
            var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (match === null || match.length < 2) {
              return -1;
            }
            var version = parseInt(match[1], 10);
            // Test for NaN (yes, this is ugly)
            return version !== version ? -1 : version;
          };

          var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
            // Every implementation we know can send at least 64 KiB.
            // Note: Although Chrome is technically able to send up to 256 KiB, the
            //       data does not reach the other peer reliably.
            //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
            var canSendMaxMessageSize = 65536;
            if (browserDetails.browser === 'firefox') {
              if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) {
                  // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                  // fragmentation.
                  canSendMaxMessageSize = 16384;
                } else {
                  // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                  // messages. Thus, supporting ~2 GiB when sending.
                  canSendMaxMessageSize = 2147483637;
                }
              } else {
                // Currently, all FF >= 57 will reset the remote maximum message size
                // to the default value when a data channel is created at a later
                // stage. :(
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
              }
            }
            return canSendMaxMessageSize;
          };

          var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
            // Note: 65536 bytes is the default value from the SDP spec. Also,
            //       every implementation we know supports receiving 65536 bytes.
            var maxMessageSize = 65536;

            // FF 57 has a slightly incorrect default remote max message size, so
            // we need to adjust it here to avoid a failure when sending.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
            if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
              maxMessageSize = 65535;
            }

            var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
            if (match.length > 0) {
              maxMessageSize = parseInt(match[0].substr(19), 10);
            } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
              // If the maximum message size is not present in the remote SDP and
              // both local and remote are Firefox, the remote peer can receive
              // ~2 GiB.
              maxMessageSize = 2147483637;
            }
            return maxMessageSize;
          };

          var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var pc = this;
            pc._sctp = null;

            if (sctpInDescription(arguments[0])) {
              // Check if the remote is FF.
              var isFirefox = getRemoteFirefoxVersion(arguments[0]);

              // Get the maximum message size the local peer is capable of sending
              var canSendMMS = getCanSendMaxMessageSize(isFirefox);

              // Get the maximum message size of the remote peer.
              var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

              // Determine final maximum message size
              var maxMessageSize;
              if (canSendMMS === 0 && remoteMMS === 0) {
                maxMessageSize = Number.POSITIVE_INFINITY;
              } else if (canSendMMS === 0 || remoteMMS === 0) {
                maxMessageSize = Math.max(canSendMMS, remoteMMS);
              } else {
                maxMessageSize = Math.min(canSendMMS, remoteMMS);
              }

              // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
              // attribute.
              var sctp = {};
              Object.defineProperty(sctp, 'maxMessageSize', {
                get: function get() {
                  return maxMessageSize;
                }
              });
              pc._sctp = sctp;
            }

            return origSetRemoteDescription.apply(pc, arguments);
          };
        },

        shimSendThrowTypeError: function shimSendThrowTypeError(window) {
          if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
            return;
          }

          // Note: Although Firefox >= 57 has a native implementation, the maximum
          //       message size can be reset for all data channels at a later stage.
          //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

          var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
          window.RTCPeerConnection.prototype.createDataChannel = function () {
            var pc = this;
            var dataChannel = origCreateDataChannel.apply(pc, arguments);
            var origDataChannelSend = dataChannel.send;

            // Patch 'send' method
            dataChannel.send = function () {
              var dc = this;
              var data = arguments[0];
              var length = data.length || data.size || data.byteLength;
              if (length > pc.sctp.maxMessageSize) {
                throw new DOMException('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)', 'TypeError');
              }
              return origDataChannelSend.apply(dc, arguments);
            };

            return dataChannel;
          };
        }
      };
    }, { "./utils": 13, "sdp": 2 }], 8: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');
      var shimRTCPeerConnection = require('rtcpeerconnection-shim');

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimPeerConnection: function shimPeerConnection(window) {
          var browserDetails = utils.detectBrowser(window);

          if (window.RTCIceGatherer) {
            if (!window.RTCIceCandidate) {
              window.RTCIceCandidate = function (args) {
                return args;
              };
            }
            if (!window.RTCSessionDescription) {
              window.RTCSessionDescription = function (args) {
                return args;
              };
            }
            // this adds an additional event listener to MediaStrackTrack that signals
            // when a tracks enabled property was changed. Workaround for a bug in
            // addStream, see below. No longer required in 15025+
            if (browserDetails.version < 15025) {
              var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
              Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
                set: function set(value) {
                  origMSTEnabled.set.call(this, value);
                  var ev = new Event('enabled');
                  ev.enabled = value;
                  this.dispatchEvent(ev);
                }
              });
            }
          }

          // ORTC defines the DTMF sender a bit different.
          // https://github.com/w3c/ortc/issues/714
          if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
            Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
              get: function get() {
                if (this._dtmf === undefined) {
                  if (this.track.kind === 'audio') {
                    this._dtmf = new window.RTCDtmfSender(this);
                  } else if (this.track.kind === 'video') {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              }
            });
          }
          // Edge currently only implements the RTCDtmfSender, not the
          // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
          if (window.RTCDtmfSender && !window.RTCDTMFSender) {
            window.RTCDTMFSender = window.RTCDtmfSender;
          }

          window.RTCPeerConnection = shimRTCPeerConnection(window, browserDetails.version);
        },
        shimReplaceTrack: function shimReplaceTrack(window) {
          // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
          if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
            window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
          }
        }
      };
    }, { "../utils": 13, "./getusermedia": 9, "rtcpeerconnection-shim": 1 }], 9: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      // Expose public methods.

      module.exports = function (window) {
        var navigator = window && window.navigator;

        var shimError_ = function shimError_(e) {
          return {
            name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
            message: e.message,
            constraint: e.constraint,
            toString: function toString() {
              return this.name;
            }
          };
        };

        // getUserMedia error shim.
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function (c) {
          return origGetUserMedia(c).catch(function (e) {
            return Promise.reject(shimError_(e));
          });
        };
      };
    }, {}], 10: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimOnTrack: function shimOnTrack(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function get() {
                return this._ontrack;
              },
              set: function set(f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                  this.removeEventListener('addstream', this._ontrackpoly);
                }
                this.addEventListener('track', this._ontrack = f);
                this.addEventListener('addstream', this._ontrackpoly = function (e) {
                  e.stream.getTracks().forEach(function (track) {
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = { track: track };
                    event.transceiver = { receiver: event.receiver };
                    event.streams = [e.stream];
                    this.dispatchEvent(event);
                  }.bind(this));
                }.bind(this));
              }
            });
          }
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function get() {
                return { receiver: this.receiver };
              }
            });
          }
        },

        shimSourceObject: function shimSourceObject(window) {
          // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function get() {
                  return this.mozSrcObject;
                },
                set: function set(stream) {
                  this.mozSrcObject = stream;
                }
              });
            }
          }
        },

        shimPeerConnection: function shimPeerConnection(window) {
          var browserDetails = utils.detectBrowser(window);

          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
            return; // probably media.peerconnection.enabled=false in about:config
          }
          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (browserDetails.version < 38) {
                // .urls is not supported in FF < 38.
                // create RTCIceServers with a single url.
                if (pcConfig && pcConfig.iceServers) {
                  var newIceServers = [];
                  for (var i = 0; i < pcConfig.iceServers.length; i++) {
                    var server = pcConfig.iceServers[i];
                    if (server.hasOwnProperty('urls')) {
                      for (var j = 0; j < server.urls.length; j++) {
                        var newServer = {
                          url: server.urls[j]
                        };
                        if (server.urls[j].indexOf('turn') === 0) {
                          newServer.username = server.username;
                          newServer.credential = server.credential;
                        }
                        newIceServers.push(newServer);
                      }
                    } else {
                      newIceServers.push(pcConfig.iceServers[i]);
                    }
                  }
                  pcConfig.iceServers = newIceServers;
                }
              }
              return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;

            // wrap static methods. Currently just generateCertificate.
            if (window.mozRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return window.mozRTCPeerConnection.generateCertificate;
                }
              });
            }

            window.RTCSessionDescription = window.mozRTCSessionDescription;
            window.RTCIceCandidate = window.mozRTCIceCandidate;
          }

          // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };

          // shim getStats with maplike support
          var makeMapStats = function makeMapStats(stats) {
            var map = new Map();
            Object.keys(stats).forEach(function (key) {
              map.set(key, stats[key]);
              map[key] = stats[key];
            });
            return map;
          };

          var modernStatsTypes = {
            inboundrtp: 'inbound-rtp',
            outboundrtp: 'outbound-rtp',
            candidatepair: 'candidate-pair',
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          };

          var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
            return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
              if (browserDetails.version < 48) {
                stats = makeMapStats(stats);
              }
              if (browserDetails.version < 53 && !onSucc) {
                // Shim only promise getStats with spec-hyphens in type names
                // Leave callback version alone; misc old uses of forEach before Map
                try {
                  stats.forEach(function (stat) {
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                  });
                } catch (e) {
                  if (e.name !== 'TypeError') {
                    throw e;
                  }
                  // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                  stats.forEach(function (stat, i) {
                    stats.set(i, Object.assign({}, stat, {
                      type: modernStatsTypes[stat.type] || stat.type
                    }));
                  });
                }
              }
              return stats;
            }).then(onSucc, onErr);
          };
        },

        shimRemoveStream: function shimRemoveStream(window) {
          if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
            return;
          }
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            utils.deprecated('removeStream', 'removeTrack');
            this.getSenders().forEach(function (sender) {
              if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
                pc.removeTrack(sender);
              }
            });
          };
        }
      };
    }, { "../utils": 13, "./getusermedia": 11 }], 11: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;
        var MediaStreamTrack = window && window.MediaStreamTrack;

        var shimError_ = function shimError_(e) {
          return {
            name: {
              InternalError: 'NotReadableError',
              NotSupportedError: 'TypeError',
              PermissionDeniedError: 'NotAllowedError',
              SecurityError: 'NotAllowedError'
            }[e.name] || e.name,
            message: {
              'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
            }[e.message] || e.message,
            constraint: e.constraint,
            toString: function toString() {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        // getUserMedia constraints shim.
        var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
          var constraintsToFF37_ = function constraintsToFF37_(c) {
            if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.require) {
              return c;
            }
            var require = [];
            Object.keys(c).forEach(function (key) {
              if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
              }
              var r = c[key] = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
              if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
                require.push(key);
              }
              if (r.exact !== undefined) {
                if (typeof r.exact === 'number') {
                  r.min = r.max = r.exact;
                } else {
                  c[key] = r.exact;
                }
                delete r.exact;
              }
              if (r.ideal !== undefined) {
                c.advanced = c.advanced || [];
                var oc = {};
                if (typeof r.ideal === 'number') {
                  oc[key] = { min: r.ideal, max: r.ideal };
                } else {
                  oc[key] = r.ideal;
                }
                c.advanced.push(oc);
                delete r.ideal;
                if (!Object.keys(r).length) {
                  delete c[key];
                }
              }
            });
            if (require.length) {
              c.require = require;
            }
            return c;
          };
          constraints = JSON.parse(JSON.stringify(constraints));
          if (browserDetails.version < 38) {
            logging('spec: ' + JSON.stringify(constraints));
            if (constraints.audio) {
              constraints.audio = constraintsToFF37_(constraints.audio);
            }
            if (constraints.video) {
              constraints.video = constraintsToFF37_(constraints.video);
            }
            logging('ff37: ' + JSON.stringify(constraints));
          }
          return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
            onError(shimError_(e));
          });
        };

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
          return new Promise(function (resolve, reject) {
            getUserMedia_(constraints, resolve, reject);
          });
        };

        // Shim for mediaDevices on older versions.
        if (!navigator.mediaDevices) {
          navigator.mediaDevices = { getUserMedia: getUserMediaPromise_,
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {}
          };
        }
        navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
          return new Promise(function (resolve) {
            var infos = [{ kind: 'audioinput', deviceId: 'default', label: '', groupId: '' }, { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' }];
            resolve(infos);
          });
        };

        if (browserDetails.version < 41) {
          // Work around http://bugzil.la/1169665
          var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
          navigator.mediaDevices.enumerateDevices = function () {
            return orgEnumerateDevices().then(undefined, function (e) {
              if (e.name === 'NotFoundError') {
                return [];
              }
              throw e;
            });
          };
        }
        if (browserDetails.version < 49) {
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            return origGetUserMedia(c).then(function (stream) {
              // Work around https://bugzil.la/802326
              if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function (track) {
                  track.stop();
                });
                throw new DOMException('The object can not be found here.', 'NotFoundError');
              }
              return stream;
            }, function (e) {
              return Promise.reject(shimError_(e));
            });
          };
        }
        if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
          var remap = function remap(obj, a, b) {
            if (a in obj && !(b in obj)) {
              obj[b] = obj[a];
              delete obj[a];
            }
          };

          var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
              c = JSON.parse(JSON.stringify(c));
              remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
              remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
          };

          if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function () {
              var obj = nativeGetSettings.apply(this, arguments);
              remap(obj, 'mozAutoGainControl', 'autoGainControl');
              remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
              return obj;
            };
          }

          if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function (c) {
              if (this.kind === 'audio' && (typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c, 'autoGainControl', 'mozAutoGainControl');
                remap(c, 'noiseSuppression', 'mozNoiseSuppression');
              }
              return nativeApplyConstraints.apply(this, [c]);
            };
          }
        }
        navigator.getUserMedia = function (constraints, onSuccess, onError) {
          if (browserDetails.version < 44) {
            return getUserMedia_(constraints, onSuccess, onError);
          }
          // Replace Firefox 44+'s deprecation warning with unprefixed version.
          utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
          navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
        };
      };
    }, { "../utils": 13 }], 12: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      'use strict';

      var utils = require('../utils');

      module.exports = {
        shimLocalStreamsAPI: function shimLocalStreamsAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getLocalStreams = function () {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              return this._localStreams;
            };
          }
          if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getStreamById = function (id) {
              var result = null;
              if (this._localStreams) {
                this._localStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              if (this._remoteStreams) {
                this._remoteStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              return result;
            };
          }
          if (!('addStream' in window.RTCPeerConnection.prototype)) {
            var _addTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              if (this._localStreams.indexOf(stream) === -1) {
                this._localStreams.push(stream);
              }
              var pc = this;
              stream.getTracks().forEach(function (track) {
                _addTrack.call(pc, track, stream);
              });
            };

            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              if (stream) {
                if (!this._localStreams) {
                  this._localStreams = [stream];
                } else if (this._localStreams.indexOf(stream) === -1) {
                  this._localStreams.push(stream);
                }
              }
              return _addTrack.call(this, track, stream);
            };
          }
          if (!('removeStream' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              var index = this._localStreams.indexOf(stream);
              if (index === -1) {
                return;
              }
              this._localStreams.splice(index, 1);
              var pc = this;
              var tracks = stream.getTracks();
              this.getSenders().forEach(function (sender) {
                if (tracks.indexOf(sender.track) !== -1) {
                  pc.removeTrack(sender);
                }
              });
            };
          }
        },
        shimRemoteStreamsAPI: function shimRemoteStreamsAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getRemoteStreams = function () {
              return this._remoteStreams ? this._remoteStreams : [];
            };
          }
          if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
              get: function get() {
                return this._onaddstream;
              },
              set: function set(f) {
                var pc = this;
                if (this._onaddstream) {
                  this.removeEventListener('addstream', this._onaddstream);
                  this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = function (e) {
                  e.streams.forEach(function (stream) {
                    if (!pc._remoteStreams) {
                      pc._remoteStreams = [];
                    }
                    if (pc._remoteStreams.indexOf(stream) >= 0) {
                      return;
                    }
                    pc._remoteStreams.push(stream);
                    var event = new Event('addstream');
                    event.stream = stream;
                    pc.dispatchEvent(event);
                  });
                });
              }
            });
          }
        },
        shimCallbacksAPI: function shimCallbacksAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          var prototype = window.RTCPeerConnection.prototype;
          var createOffer = prototype.createOffer;
          var createAnswer = prototype.createAnswer;
          var setLocalDescription = prototype.setLocalDescription;
          var setRemoteDescription = prototype.setRemoteDescription;
          var addIceCandidate = prototype.addIceCandidate;

          prototype.createOffer = function (successCallback, failureCallback) {
            var options = arguments.length >= 2 ? arguments[2] : arguments[0];
            var promise = createOffer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          prototype.createAnswer = function (successCallback, failureCallback) {
            var options = arguments.length >= 2 ? arguments[2] : arguments[0];
            var promise = createAnswer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          var withCallback = function withCallback(description, successCallback, failureCallback) {
            var promise = setLocalDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setLocalDescription = withCallback;

          withCallback = function withCallback(description, successCallback, failureCallback) {
            var promise = setRemoteDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setRemoteDescription = withCallback;

          withCallback = function withCallback(candidate, successCallback, failureCallback) {
            var promise = addIceCandidate.apply(this, [candidate]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.addIceCandidate = withCallback;
        },
        shimGetUserMedia: function shimGetUserMedia(window) {
          var navigator = window && window.navigator;

          if (!navigator.getUserMedia) {
            if (navigator.webkitGetUserMedia) {
              navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
            } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              navigator.getUserMedia = function (constraints, cb, errcb) {
                navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
              }.bind(navigator);
            }
          }
        },
        shimRTCIceServerUrls: function shimRTCIceServerUrls(window) {
          // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
          var OrigPeerConnection = window.RTCPeerConnection;
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            if (pcConfig && pcConfig.iceServers) {
              var newIceServers = [];
              for (var i = 0; i < pcConfig.iceServers.length; i++) {
                var server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                  utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                  server = JSON.parse(JSON.stringify(server));
                  server.urls = server.url;
                  delete server.url;
                  newIceServers.push(server);
                } else {
                  newIceServers.push(pcConfig.iceServers[i]);
                }
              }
              pcConfig.iceServers = newIceServers;
            }
            return new OrigPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          if ('generateCertificate' in window.RTCPeerConnection) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function get() {
                return OrigPeerConnection.generateCertificate;
              }
            });
          }
        },
        shimTrackEventTransceiver: function shimTrackEventTransceiver(window) {
          // Add event.transceiver member over deprecated event.receiver
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
          // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
          // defined for some reason even when window.RTCTransceiver is not.
          !window.RTCTransceiver) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function get() {
                return { receiver: this.receiver };
              }
            });
          }
        },

        shimCreateOfferLegacy: function shimCreateOfferLegacy(window) {
          var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
          window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
            var pc = this;
            if (offerOptions) {
              if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
              }
              var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
              });
              if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('sendonly');
                  } else {
                    audioTransceiver.direction = 'sendonly';
                  }
                } else if (audioTransceiver.direction === 'recvonly') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('inactive');
                  } else {
                    audioTransceiver.direction = 'inactive';
                  }
                }
              } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                pc.addTransceiver('audio');
              }

              if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
              }
              var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track && transceiver.sender.track.kind === 'video';
              });
              if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                  videoTransceiver.setDirection('sendonly');
                } else if (videoTransceiver.direction === 'recvonly') {
                  videoTransceiver.setDirection('inactive');
                }
              } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                pc.addTransceiver('video');
              }
            }
            return origCreateOffer.apply(pc, arguments);
          };
        }
      };
    }, { "../utils": 13 }], 13: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var logDisabled_ = true;
      var deprecationWarnings_ = true;

      /**
       * Extract browser version out of the provided user agent string.
       *
       * @param {!string} uastring userAgent string.
       * @param {!string} expr Regular expression used as match criteria.
       * @param {!number} pos position in the version string to be returned.
       * @return {!number} browser version.
       */
      function extractVersion(uastring, expr, pos) {
        var match = uastring.match(expr);
        return match && match.length >= pos && parseInt(match[pos], 10);
      }

      // Wraps the peerconnection event eventNameToWrap in a function
      // which returns the modified event object.
      function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
        if (!window.RTCPeerConnection) {
          return;
        }
        var proto = window.RTCPeerConnection.prototype;
        var nativeAddEventListener = proto.addEventListener;
        proto.addEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap) {
            return nativeAddEventListener.apply(this, arguments);
          }
          var wrappedCallback = function wrappedCallback(e) {
            cb(wrapper(e));
          };
          this._eventMap = this._eventMap || {};
          this._eventMap[cb] = wrappedCallback;
          return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
        };

        var nativeRemoveEventListener = proto.removeEventListener;
        proto.removeEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
            return nativeRemoveEventListener.apply(this, arguments);
          }
          var unwrappedCb = this._eventMap[cb];
          delete this._eventMap[cb];
          return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
        };

        Object.defineProperty(proto, 'on' + eventNameToWrap, {
          get: function get() {
            return this['_on' + eventNameToWrap];
          },
          set: function set(cb) {
            if (this['_on' + eventNameToWrap]) {
              this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
              delete this['_on' + eventNameToWrap];
            }
            if (cb) {
              this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
            }
          }
        });
      }

      // Utility methods.
      module.exports = {
        extractVersion: extractVersion,
        wrapPeerConnectionEvent: wrapPeerConnectionEvent,
        disableLog: function disableLog(bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
          }
          logDisabled_ = bool;
          return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
        },

        /**
         * Disable or enable deprecation warnings
         * @param {!boolean} bool set to true to disable warnings.
         */
        disableWarnings: function disableWarnings(bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
          }
          deprecationWarnings_ = !bool;
          return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
        },

        log: function log() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (logDisabled_) {
              return;
            }
            if (typeof console !== 'undefined' && typeof console.log === 'function') {
              console.log.apply(console, arguments);
            }
          }
        },

        /**
         * Shows a deprecation warning suggesting the modern and spec-compatible API.
         */
        deprecated: function deprecated(oldMethod, newMethod) {
          if (!deprecationWarnings_) {
            return;
          }
          console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
        },

        /**
         * Browser detector.
         *
         * @return {object} result containing browser and version
         *     properties.
         */
        detectBrowser: function detectBrowser(window) {
          var navigator = window && window.navigator;

          // Returned result object.
          var result = {};
          result.browser = null;
          result.version = null;

          // Fail early if it's not a browser
          if (typeof window === 'undefined' || !window.navigator) {
            result.browser = 'Not a browser.';
            return result;
          }

          if (navigator.mozGetUserMedia) {
            // Firefox.
            result.browser = 'firefox';
            result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
          } else if (navigator.webkitGetUserMedia) {
            // Chrome, Chromium, Webview, Opera.
            // Version matches Chrome/WebRTC version.
            result.browser = 'chrome';
            result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
          } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
            // Edge.
            result.browser = 'edge';
            result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
          } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
            // Safari.
            result.browser = 'safari';
            result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
          } else {
            // Default fallthrough: not supported.
            result.browser = 'Not a supported browser.';
            return result;
          }

          return result;
        }
      };
    }, {}] }, {}, [3])(3);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * MediaProbe.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 媒体层探针接口。
 * 媒体层探针用于实时监测媒体设备的工作状态。
 *
 * @interface MediaProbe
 * @see {@link MediaService#addMediaProbe|MediaService}
 * @author Xu Jiangwei, Guan Yong
 */
var MediaProbe = exports.MediaProbe = function () {
    function MediaProbe() {
        _classCallCheck(this, MediaProbe);
    }

    _createClass(MediaProbe, [{
        key: "onLocalStreamReady",

        /**
          * 当本地视频数据就绪时该方法被调用。
          * 
          * @param {MediaService} mediaController - 媒体控制器实例。
          */
        value: function onLocalStreamReady(mediaController) {}

        /**
         * 当远端视频数据就绪时该方法被调用
         * @param mediaController {MediaService} 媒体控制器实例
         */

    }, {
        key: "onRemoteStreamReady",
        value: function onRemoteStreamReady(mediaController) {}

        /**
         * 当本地视频帧率数据刷新时该方法被调用
         * @param mediaController {MediaService} 媒体控制器实例
         * @param videoWidth {Number} 视频画面宽度
         * @param videoHeight {Number} 视频画面高度
         * @param curFPS {Number} 视频当前帧率
         * @param avgFPS {Number} 视频平均帧率
         */

    }, {
        key: "onLocalVideoFPS",
        value: function onLocalVideoFPS(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {}

        /**
         * 当远端视频帧率数据刷新时该方法被调用
         * @param mediaController {MediaService} 媒体控制器实例
         * @param videoWidth {Number} 视频画面宽度
         * @param videoHeight {Number} 视频画面高度
         * @param curFPS {Number} 视频当前帧率
         * @param avgFPS {Number} 视频平均帧率
         */

    }, {
        key: "onRemoteVideoFPS",
        value: function onRemoteVideoFPS(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {}

        /**
         * 当探针检测到帧率明显降低时该方法被调用
         * @param mediaController {MediaService} 媒体控制器实例
         * @param curFps {Number} 当前实时帧率
         * @param avgFps {Number} 视频平均帧率
         * @param maxFps {Number} 监测周期内的最大帧率
         */

    }, {
        key: "onFrameRateWarning",
        value: function onFrameRateWarning(mediaController, curFps, avgFps, maxFps) {}

        /**
         * 当探针检测到帧率恢复时该方法被调用
         * @param mediaController {MediaService} 媒体控制器实例
         * @param curFps {Number} 当前实时帧率
         * @param avgFps {Number} 平均帧率
         * @param maxFps {Number} 监测周期内的最大帧率
         */

    }, {
        key: "onFrameRateRecovering",
        value: function onFrameRateRecovering(mediaController, curFps, avgFps, maxFps) {}

        /**
         * 当对方关闭视频时该方法被调用
         */

    }, {
        key: "onVideoClose",
        value: function onVideoClose() {}

        /**
         * 当对方开启视频时该方法被调用
         */

    }, {
        key: "onVideoOpen",
        value: function onVideoOpen() {}

        /**
         * 扬声器状态改变
         * @param isSpeakerEnabled 是否开启扬声器
         * @param isWiredHeadsetOn 是否连接外设
         */

    }, {
        key: "onSpeakerChange",
        value: function onSpeakerChange(isSpeakerEnabled, isWiredHeadsetOn) {}

        /**
         * 视频录制摄像头切换
         * @param cameraId
         */

    }, {
        key: "onCameraSwitched",
        value: function onCameraSwitched(type, cameraId) {}

        /**
         * 开始录制
         */

    }, {
        key: "onRecordStarted",
        value: function onRecordStarted(type, timestamp) {}

        /**
         * 停止录制
         *
         * @param type
         * @param record
         * @param duration
         */

    }, {
        key: "onRecordStopped",
        value: function onRecordStopped(type, record, duration, timestamp) {}

        /**
         * 丢弃录制
         */

    }, {
        key: "onRecordDiscarded",
        value: function onRecordDiscarded(type) {}

        /**
         * 录制声音变化
         * @param type
         * @param volume
         */

    }, {
        key: "onRecordVolumeChange",
        value: function onRecordVolumeChange(type, volume) {}

        /**
         * 拍照回调
         */

    }, {
        key: "onTakeCapturePicture",
        value: function onTakeCapturePicture(type, picture) {}

        /**
         * 媒体错误
         */

    }, {
        key: "onMediaFailed",
        value: function onMediaFailed(error) {}
    }]);

    return MediaProbe;
}();

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * VideoSize.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * @typedef {Object} CubeSize
 * @property {Number} width - 宽度，单位：像素。
 * @property {Number} height - 高度，单位：像素。
 */

/**
 * 视频大小枚举。
 *
 * @readonly
 * @enum {CubeSize} VideoSize
 * @author Xu Jiangwei
 */
var VideoSize = exports.VideoSize = {
    /** 视频分辨率为 128×96 (12,288) 的尺寸设置。*/
    SQCIF: { width: 128, height: 96 },
    /** 视频分辨率为 160×120 (19,200) 的尺寸设置。*/
    QQVGA: { width: 160, height: 120 },
    /** 视频分辨率为 320×240 (76,800) 的尺寸设置。*/
    QVGA: { width: 320, height: 240 },
    /** 视频分辨率为 352×288 (101,376) 的尺寸设置。*/
    CIF: { width: 352, height: 288 },
    /** 视频分辨率为 640×480 (307,200) 的尺寸设置。*/
    VGA: { width: 640, height: 480 },
    /** 视频分辨率为 800×600 (480,000) 的尺寸设置。*/
    SVGA: { width: 800, height: 600 },
    /** 视频分辨率为 960×720 (691,200) 的尺寸设置。*/
    HD: { width: 960, height: 720 },
    /** 视频分辨率为 1024×768 (786,432) 的尺寸设置。*/
    XGA: { width: 1024, height: 768 },
    /** 视频分辨率为 1280×1024 (1,310,720) 的尺寸设置。*/
    SXGA: { width: 1280, height: 1024 },
    /** 视频分辨率为 1600×1200 (1,920,000) 的尺寸设置。*/
    UXGA: { width: 1600, height: 1200 },

    /** 视频分辨率为 400×240 (96,000) 的尺寸设置。*/
    WQVGA: { width: 400, height: 240 },
    /** 视频分辨率为 512×288 (147 456) 的尺寸设置。*/
    WCIF: { width: 512, height: 288 },
    /** 视频分辨率为 800×480 (384,000) 的尺寸设置。*/
    WVGA: { width: 800, height: 480 },
    /** 视频分辨率为 1024×600 (614,400) 的尺寸设置。*/
    WSVGA: { width: 1024, height: 600 },
    /** 视频分辨率为 1280×720 (921,600) 的尺寸设置。*/
    WHD: { width: 1280, height: 720 },
    /** 视频分辨率为 1280×768 (983,040) 的尺寸设置。*/
    WXGA: { width: 1280, height: 768 },
    /** 视频分辨率为 1920×1200 (2,304,000) 的尺寸设置。*/
    WUXGA: { width: 1920, height: 1200 },

    /** 视频分辨率为 768×432 (331,776, a.k.a WVGA 16:9) 的尺寸设置。*/
    W432P: { width: 768, height: 432 },
    /** 视频分辨率为 768×480 (368,640, a.k.a WVGA 16:10) 的尺寸设置。*/
    W480P: { width: 768, height: 480 }
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MediaServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MediaService2 = __webpack_require__(154);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MediaServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 媒体服务实现。用于操作媒体设备。
 *
 * @class MediaServiceWorker
 * @see {@link CubeEngine#getMediaService|CubeEngine}
 * @author Xu Jiangwei, Guan Yong
 */
var MediaServiceWorker = exports.MediaServiceWorker = function (_MediaService) {
    _inherits(MediaServiceWorker, _MediaService);

    function MediaServiceWorker(worker, canvasDomId) {
        _classCallCheck(this, MediaServiceWorker);

        var _this2 = _possibleConstructorReturn(this, (MediaServiceWorker.__proto__ || Object.getPrototypeOf(MediaServiceWorker)).call(this));

        _this2.worker = worker;
        _this2.canvas = null;
        _this2.timerList = [];
        _this2.probes = null;
        _this2.frameWarning = false;
        _this2.remoteMaxFrameRate = -1;
        _this2.remoteMinFrameRate = 120;

        // 离线录制器
        _this2.recorderMap = null;
        _this2.capturedUri = null;

        _this2._autoCaptureTimer = 0;
        _this2._localCalculateStats = null;
        _this2._remoteCalculateStats = null;

        if (undefined !== canvasDomId) {
            _this2.canvas = document.getElementById(canvasDomId);
        }
        var self = _this2;
        worker.videoCloseHandler = function () {
            nucleus.getLogger().d("CubeMediaController", "Video closed");
            for (var i = 0; i < self.timerList.length; ++i) {
                var timer = self.timerList[i];
                clearInterval(timer);
            }

            _this2.timerList.splice(0, self.timerList.length);

            if (null != self.probes && _this2.frameWarning) {
                for (var _i = 0; _i < _this2.probes.length; ++_i) {
                    var p = _this2.probes[_i];
                    p.onFrameRateRecovering(_this2, 0, 0, self.remoteMaxFrameRate);
                }
            }

            _this2.remoteMaxFrameRate = -1;
            _this2.remoteMinFrameRate = 120;
            _this2.frameWarning = false;

            if (_this2.isLocalRecording()) {
                _this2.stopLocalRecording(null);
            }
        };

        worker.localVideoReady = function (video, worker) {
            _this2._localVideoReady(video, worker.videoEnabled);
        };
        worker.remoteVideoReady = function (video, worker) {
            video.volume = 1;
            _this2._remoteVideoReady(video, worker.videoEnabled);
        };
        return _this2;
    }

    /**
     * 添加媒体探针
     */


    _createClass(MediaServiceWorker, [{
        key: "addMediaProbe",
        value: function addMediaProbe(probe) {
            if (null == this.probes) {
                this.probes = [probe];
            } else {
                this.probes.push(probe);
            }
        }

        /**
         * 删除媒体探针
         */

    }, {
        key: "removeMediaProbe",
        value: function removeMediaProbe(probe) {
            if (null == this.probes) {
                return false;
            }

            var index = this.probes.indexOf(probe);
            if (index >= 0) {
                this.probes.splice(index, 1);
                return true;
            }

            return false;
        }

        /**
         * 关闭本地语音流。关闭语音流后对方将无法听到本地麦克风采集的音频效果。
         */

    }, {
        key: "closeVoice",
        value: function closeVoice() {
            if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
                this.worker.localStream.getAudioTracks()[0].enabled = false;
                return true;
            }

            if (null != this.worker.localAudioStream && this.worker.localAudioStream.getAudioTracks().length > 0) {
                this.worker.localAudioStream.getAudioTracks()[0].enabled = false;
                return true;
            }

            return false;
        }

        /**
         * 关闭本地视频流。关闭视频后对方将无法看到本地摄像头采集到的视频影像。
         */

    }, {
        key: "closeVideo",
        value: function closeVideo() {
            if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
                this.worker.localStream.getVideoTracks()[0].enabled = false;

                // 进行媒体操作同步
                this.worker.consult("video", "close");

                return true;
            }

            return false;
        }

        /**
         * 开启本地语音流。开启语音流后对方将能听到本地麦克风采集的音频效果。
         */

    }, {
        key: "openVoice",
        value: function openVoice() {
            if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
                this.worker.localStream.getAudioTracks()[0].enabled = true;
                return true;
            }

            if (null != this.worker.localAudioStream && this.worker.localAudioStream.getAudioTracks().length > 0) {
                this.worker.localAudioStream.getAudioTracks()[0].enabled = true;
                return true;
            }

            return false;
        }

        /**
         * 开启本地视频流。开启视频后对方将能看到本地摄像头采集到的视频影像。
         */

    }, {
        key: "openVideo",
        value: function openVideo() {
            if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
                this.worker.localStream.getVideoTracks()[0].enabled = true;

                // 进行媒体操作同步
                this.worker.consult("video", "open");

                return true;
            }

            return false;
        }

        /**
         * 获取语音通话是否启用。
         */

    }, {
        key: "isAudioEnabled",
        value: function isAudioEnabled() {
            if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
                return this.worker.localStream.getAudioTracks()[0].enabled;
            }

            return true;
        }

        /**
         * 获取视频通话是否启用。
         */

    }, {
        key: "isVideoEnabled",
        value: function isVideoEnabled() {
            if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
                return this.worker.localStream.getVideoTracks()[0].enabled;
            }

            return true;
        }

        /**
         * 设置扬声器音量。
         */

    }, {
        key: "setVolume",
        value: function setVolume(value) {
            if (null != this.worker.remoteVideo) {
                this.worker.remoteVideo.volume = value / 100;
            }
        }

        /**
         * 获取扬声器音量。
         */

    }, {
        key: "getVolume",
        value: function getVolume() {
            return parseInt(Math.round(this.worker.remoteVideo.volume * 100));
        }

        /**
         * 静音。
         */

    }, {
        key: "mute",
        value: function mute() {
            this.closeVoice();
        }

        /**
         * 获取本地视频分辨率大小。
         */

    }, {
        key: "getLocalVideoSize",
        value: function getLocalVideoSize() {
            var v = this.worker.localVideo;
            var w = v.videoWidth;
            var h = v.videoHeight;
            return { width: w, height: h };
        }

        /**
         * 获取对方视频分辨率大小。
         */

    }, {
        key: "getRemoteVideoSize",
        value: function getRemoteVideoSize() {
            var v = this.worker.remoteVideo;
            var w = v.videoWidth;
            var h = v.videoHeight;
            return { width: w, height: h };
        }

        /**
         * 获取用户视频画面地址。
         */

    }, {
        key: "getCapturedCameraImage",
        value: function getCapturedCameraImage(peerName) {
            if (null == this.capturedUri) {
                return null;
            }

            return this.capturedUri + peerName + "/cube_captured_camera.jpg";
        }

        /**
         * 截取当前视频的画面。
         * takeCapturePicture
         */

    }, {
        key: "capture",
        value: function capture(name, callback) {
            var canvas = this.canvas;
            var w = parseInt(this.worker.localVideo.videoWidth);
            var h = parseInt(this.worker.localVideo.videoHeight);
            canvas.setAttribute("width", w);
            canvas.setAttribute("height", h);
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";

            var ctx = canvas.getContext('2d');
            if (this.worker.localStream) {
                ctx.drawImage(this.worker.localVideo, 0, 0);
                var dataURL = canvas.toDataURL('image/png');
                var self = this;
                NucleusAjax.newRequest(_CUBE_SERVICE + "/" + "conference/capture?name=" + name).method("POST").content(dataURL).send(function (reponse) {
                    if (reponse.getStatus() == 200) {
                        var rd = JSON.parse(reponse.getData());
                        self.capturedUri = rd.url;
                        if (undefined !== callback && null != callback) {
                            callback.call(null, rd);
                        }
                    }
                });
            }
        }
    }, {
        key: "_startAutoCapture",
        value: function _startAutoCapture(name, callback) {
            if (null != this.canvas) {
                var self = this;
                if (self._autoCaptureTimer > 0) {
                    return true;
                }

                self.capture(name, callback);

                self._autoCaptureTimer = setInterval(function () {
                    self.capture(name, callback);
                }, 9000);

                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "_stopAutoCapture",
        value: function _stopAutoCapture() {
            if (this._autoCaptureTimer > 0) {
                clearInterval(this._autoCaptureTimer);
                this._autoCaptureTimer = 0;
            }
        }
    }, {
        key: "_localVideoReady",
        value: function _localVideoReady(video, videoEnabled) {
            if (null != this.probes) {
                for (var i = 0; i < this.probes.length; ++i) {
                    var p = this.probes[i];
                    p.onLocalStreamReady(this);
                }

                if (videoEnabled) {
                    var self = this;
                    var counts = 0;
                    this._localCalculateStats = this._calculateStats(video, function (v, fps, avg) {
                        if (!self.worker.videoEnabled) {
                            self._stopCalculate();
                            return;
                        }

                        ++counts;
                        if (counts < 5) {
                            return;
                        }
                        counts = 0;

                        for (var i = 0; i < self.probes.length; ++i) {
                            var p = self.probes[i];
                            p.onLocalVideoFPS(self, v.videoWidth, v.videoHeight, fps, avg);
                        }
                    });
                }
            }
        }
    }, {
        key: "changeVideoElement",
        value: function changeVideoElement(localVideo, remoteVideo) {
            localVideo.volume = 0;
            remoteVideo.volume = this.getVolume() / 100;
            localVideo.src = this.worker.localVideo.src;
            remoteVideo.src = this.worker.remoteVideo.src;

            if (utils.isIE || utils.isSafari) {
                window.attachMediaStream(this.worker.localVideo, null);
                window.attachMediaStream(this.worker.remoteVideo, null);
            } else {
                this.worker.localVideo.src = "";
                this.worker.remoteVideo.src = "";
            }

            this.worker.localVideo = localVideo;
            this.worker.remoteVideo = remoteVideo;

            if (this._localCalculateStats != null) {
                this._localCalculateStats.changeElement(localVideo);
            }
            if (this._remoteCalculateStats != null) {
                this._remoteCalculateStats.changeElement(remoteVideo);
            }
        }
    }, {
        key: "_remoteVideoReady",
        value: function _remoteVideoReady(video, videoEnabled) {
            if (null != this.probes) {
                for (var i = 0; i < this.probes.length; ++i) {
                    var p = this.probes[i];
                    p.onRemoteStreamReady(this);
                }

                if (videoEnabled) {
                    var self = this;
                    var counts = 0;
                    this._remoteCalculateStats = this._calculateStats(video, function (v, fps, avg) {
                        if (!self.worker.videoEnabled) {
                            self._stopCalculate();
                            return;
                        }

                        if (v.videoWidth == 0 || v.videoHeight == 0) {
                            self._stopCalculate();
                            return;
                        }

                        // 计数
                        ++counts;

                        if (counts >= 5) {
                            for (var i = 0; i < self.probes.length; ++i) {
                                var p = self.probes[i];
                                p.onRemoteVideoFPS(self, v.videoWidth, v.videoHeight, fps, avg);
                            }

                            counts = 0;
                        }

                        // 探测远端视频帧率过低
                        if (self.remoteMaxFrameRate < fps) {
                            self.remoteMaxFrameRate = fps;
                        }
                        if (self.remoteMinFrameRate > fps) {
                            self.remoteMinFrameRate = fps;
                        }

                        if (fps <= self.remoteMaxFrameRate * 0.4 && fps <= avg * 0.4) {
                            self.frameWarning = true;

                            for (var i = 0; i < self.probes.length; ++i) {
                                var p = self.probes[i];
                                p.onFrameRateWarning(self, fps, avg, self.remoteMaxFrameRate);
                            }
                        } else {
                            if (self.frameWarning) {
                                for (var i = 0; i < self.probes.length; ++i) {
                                    var p = self.probes[i];
                                    p.onFrameRateRecovering(self, fps, avg, self.remoteMaxFrameRate);
                                }

                                self.frameWarning = false;

                                if (fps >= 6) {
                                    // 复位最大帧率
                                    self.remoteMaxFrameRate = -1;
                                }
                            }
                        }
                    });
                }
            }
        }
    }, {
        key: "_stopCalculate",
        value: function _stopCalculate() {
            if (this.timerList.length == 0) {
                return;
            }

            for (var i = 0; i < this.timerList.length; ++i) {
                var timer = this.timerList[i];
                clearInterval(timer);
            }
            this.timerList.splice(0, this.timerList.length);
        }
    }, {
        key: "_calculateStats",
        value: function _calculateStats(video, callback) {
            var now = new Date().getTime();
            var decodedFrames = 0,
                droppedFrames = 0,
                startTime = now,
                initialTime = now;
            var timer = 0;

            timer = window.setInterval(function () {
                // see if webkit stats are available; exit if they aren't
                if (video.webkitDecodedFrameCount === undefined) {
                    if (video.mozPaintedFrames === undefined) {
                        nucleus.getLogger().d("MediaController", "Video FPS calcs not supported");
                        clearInterval(timer);
                        return;
                    }
                }

                // get the stats
                var currentTime = new Date().getTime();
                var deltaTime = (currentTime - startTime) / 1000;
                var totalTime = (currentTime - initialTime) / 1000;
                startTime = currentTime;

                var currentDecodedFPS = 0;
                var decodedFPSAvg = 0;

                // Calculate decoded frames per sec.
                if (video.mozPaintedFrames !== undefined) {
                    //nucleus.getLogger().d("", video.mozDecodedFrames + ',' + video.mozParsedFrames + ',' + video.mozPresentedFrames + ',' + video.mozPaintedFrames);
                    currentDecodedFPS = (video.mozPaintedFrames - decodedFrames) / deltaTime;
                    decodedFPSAvg = video.mozPaintedFrames / totalTime;
                    decodedFrames = video.mozPaintedFrames;
                } else {
                    currentDecodedFPS = (video.webkitDecodedFrameCount - decodedFrames) / deltaTime;
                    decodedFPSAvg = video.webkitDecodedFrameCount / totalTime;
                    decodedFrames = video.webkitDecodedFrameCount;
                }

                // Calculate dropped frames per sec.
                /*
                 var currentDroppedFPS = (video.webkitDroppedFrameCount - droppedFrames) / deltaTime;
                 var droppedFPSavg = video.webkitDroppedFrameCount / totalTime;
                 droppedFrames = video.webkitDroppedFrameCount;
                 */

                if (currentDecodedFPS < 0 || currentDecodedFPS > 60) {
                    currentDecodedFPS = 0;
                }

                callback.call(null, video, currentDecodedFPS.toFixed(), decodedFPSAvg.toFixed());

                if (parseInt(video.width) == 0 && decodedFPSAvg == 0 || video.src == null) {
                    clearInterval(timer);
                }
            }, 1000);

            this.timerList.push(timer);

            return {
                changeElement: function changeElement(newVideo) {
                    video = newVideo;
                }
            };
        }

        /**
         * 查询归档记录。
         */

    }, {
        key: "queryRecordArchives",
        value: function queryRecordArchives(name, success, error, cors) {
            if ("undefined" !== cors && cors) {
                var sn = "p" + Date.now();
                window._cube_cross.addCallback(sn, success, error);

                var src = window._cube_cross.host + "/archive/list.js?name=" + name + "&m=window._cube_cross.queryRecordArchives&sn=" + sn;
                var dom = document.createElement("script");
                dom.setAttribute("id", sn);
                dom.setAttribute("name", name.toString());
                dom.setAttribute("src", src);
                dom.setAttribute("type", "text/javascript");
                dom.onerror = function () {
                    if (undefined !== error) {
                        error.call(null, name);
                    }
                    document.body.removeChild(dom);
                };
                document.body.appendChild(dom);
                return;
            }

            utils.requestGet("archive/list?name=" + name, function (data) {
                success.call(null, name, data);
            }, function (status) {
                if (undefined !== error) {
                    error.call(null, name);
                }
            });
        }

        /**
         * 加载存档。
         */

    }, {
        key: "loadArchive",
        value: function loadArchive(name, file, videoEl, cors) {
            var video = videoEl;
            if (typeof videoEl === 'string') {
                video = document.getElementById(videoEl);
            }

            if (undefined !== cors && cors) {
                video.src = window._cube_cross.host + "/archive/read?name=" + name + "&file=" + file;
            } else {
                video.src = "archive/read?name=" + name + "&file=" + file;
            }
        }

        /**
         * 是否存在本地存档记录。
         */

    }, {
        key: "hasLocalRecorded",
        value: function hasLocalRecorded() {
            if (null == this.recorderMap) {
                return false;
            }

            return this.recorderMap.containsKey("LocalVideo");
        }

        /**
         * 是否正在录制本地视频。
         */

    }, {
        key: "isLocalRecording",
        value: function isLocalRecording() {
            if (null == this.recorderMap) {
                return false;
            }

            var r = this.recorderMap.get("LocalVideo");
            if (r == null) {
                return false;
            }

            return r.recording;
        }

        /**
         * 启动本地音视频录制。
         */

    }, {
        key: "startLocalRecording",
        value: function startLocalRecording(config) {
            if (null == this.worker.localStream) {
                return false;
            }

            return this.startRecording("LocalVideo", this.worker.localStream, config);
        }

        /**
         * 停止本地音视频录制。
         */

    }, {
        key: "stopLocalRecording",
        value: function stopLocalRecording(callback) {
            return this.stopRecording("LocalVideo", callback);
        }

        /**
         * 回放录制。
         */

    }, {
        key: "replayLocalRecording",
        value: function replayLocalRecording(videoEl, audioEl) {
            return this.replayRecording("LocalVideo", videoEl, audioEl);
        }

        /**
         * 获取本地归档记录。
         */

    }, {
        key: "getLocalRecorder",
        value: function getLocalRecorder() {
            return this.getRecorder("LocalVideo");
        }

        /**
         * 对方是否存在归档记录。
         */

    }, {
        key: "hasRemoteRecorded",
        value: function hasRemoteRecorded() {
            if (null == this.recorderMap) {
                return false;
            }

            return this.recorderMap.containsKey("RemoteVideo");
        }

        /**
         * 是否正在录制对方视频。
         */

    }, {
        key: "isRemoteRecording",
        value: function isRemoteRecording() {
            if (null == this.recorderMap) {
                return false;
            }

            var r = this.recorderMap.get("RemoteVideo");
            if (r == null) {
                return false;
            }

            return r.recording;
        }

        /**
         * 启动对方音视频录制。
         */

    }, {
        key: "startRemoteRecording",
        value: function startRemoteRecording(config) {
            if (null == this.worker.remoteStream) {
                return false;
            }

            return this.startRecording("RemoteVideo", this.worker.remoteStream, config);
        }

        /**
         * 停止对方音视频录制。
         */

    }, {
        key: "stopRemoteRecording",
        value: function stopRemoteRecording(callback) {
            return this.stopRecording("RemoteVideo", callback);
        }

        /**
         * 获取对方归档记录。
         */

    }, {
        key: "getRemoteRecorder",
        value: function getRemoteRecorder() {
            return this.getRecorder("RemoteVideo");
        }
    }, {
        key: "startRecording",
        value: function startRecording(task, mix, config) {
            var preview = null;
            var stream = null;
            if (typeof mix === 'string') {
                preview = document.getElementById(mix);
            } else if (mix.tagName !== undefined) {
                preview = mix;
            } else {
                stream = mix;
            }

            if (null == this.recorderMap) {
                this.recorderMap = new HashMap();
            }

            var recorder = null;
            // 创建记录器
            if (config !== undefined && null != config) {
                recorder = new CubeAdvancedRecorder(preview, config);
            } else {
                recorder = new CubeRecorder(preview);
            }

            // 记录
            this.recorderMap.put(task, recorder);

            // 启动记录器
            return recorder.startRecording(stream);
        }
    }, {
        key: "stopRecording",
        value: function stopRecording(task, callback) {
            if (null == this.recorderMap) {
                return false;
            }

            var recorder = this.recorderMap.get(task);
            if (null == recorder) {
                return false;
            }

            var callTimer = 0;
            var ret = recorder.stopRecording(function (r) {
                if (null == callback) {
                    return;
                }

                if (callTimer > 0) {
                    clearTimeout(callTimer);
                }

                callTimer = setTimeout(function () {
                    clearTimeout(callTimer);
                    callback.call(null, recorder);
                }, 1000);
            });

            return ret;
        }
    }, {
        key: "replayRecording",
        value: function replayRecording(task, videoEl, audioEl) {
            if (null == this.recorderMap) {
                return false;
            }

            var recorder = this.recorderMap.get(task);
            if (null == recorder) {
                return false;
            }

            var video = null;
            if (typeof videoEl === 'string') {
                video = document.getElementById(videoEl);
            } else {
                video = videoEl;
            }

            var audio = null;
            if (typeof audioEl === 'string') {
                audio = document.getElementById(audioEl);
            } else {
                audio = audioEl;
            }

            return recorder.replay(video, audio);
        }
    }, {
        key: "getRecorder",
        value: function getRecorder(task) {
            if (null == this.recorderMap) {
                return null;
            }

            return this.recorderMap.get(task);
        }

        /**
         * 视频流处理
         *
         * @param {String} type 视频流操作类型, "open" - 开启视频流; "close" - 关闭视频流。
         * @memberof CubeMediaServiceWorker
         * @instance
         */

    }, {
        key: "_videoProcess",
        value: function _videoProcess(type) {
            for (var i = 0; i < this.probes.length; ++i) {
                var p = this.probes[i];
                if (type == "open") {
                    p.onVideoOpen();
                } else if (type == "close") {
                    p.onVideoClose();
                }
            }
        }

        /**
         * 获取当前RTC视频编解码格式
         */

    }, {
        key: "getVideoCodec",
        value: function getVideoCodec() {
            if (this.worker.sdpCache) {
                return this.worker.engine.config.videoCodec;
            } else {
                var sdp = this.worker.sdpCache;
                if (sdp.match('SAVPF 96 97 98 99 100') || sdp.match('SAVPF 96 97 98/g')) {
                    return 'VP8';
                } else if (sdp.match('SAVPF 100 96 97 98 99')) {
                    return 'H264';
                } else if (sdp.match('SAVPF 98 96 97')) {
                    return 'VP9';
                }
            }
        }

        /**
         * 获取当前RTC音频编解码格式
         */

    }, {
        key: "getAudioCodec",
        value: function getAudioCodec() {
            if (this.worker.sdpCache) {
                return this.worker.engine.config.audioCodec;
            } else {
                var sdp = this.worker.sdpCache;
                // if(sdp.match('SAVPF 96 97 98 99 100') || sdp.match('SAVPF 96 97 98/g')) {
                //     return 'VP8'
                // } else if(sdp.match('SAVPF 100 96 97 98 99')) {
                //     return 'H264'
                // } else if(sdp.match('SAVPF 98 96 97')) {
                //     return 'VP9'
                // }
            }
        }

        /**
         * 改变分辨率
         * @param videoId 需要更改分辨率的本地videoId
         * @param param [obj]
         *        maxWidth: 最大宽度
         *        minWidth: 最小宽度
         *        maxHeight: 最大高度
         *        minHeight: 最小高度
         *        maxFrameRate: 最大FPS
         *        minFrameRate: 最小FPS
         */

    }, {
        key: "changeCaptureFormat",
        value: function changeCaptureFormat(videoId, param) {
            if (param.minWidth && param.minWidth < 160) {
                param.minWidth = 160;
                console.log('最小宽度不能低于160');
            }
            if (param.minHeight && param.minHeight < 120) {
                param.minHeight = 120;
                console.log('最小高度不能低于120');
            }
            var config = {
                maxWidth: param.maxWidth,
                minWidth: param.minWidth,
                maxHeight: param.maxHeight,
                minHeight: param.minHeight,
                maxFrameRate: param.maxFrameRate,
                minFrameRate: param.minFrameRate
            };
            return this.startRecording("LocalVideo", document.getElementById(videoId), config);
        }

        /**
         * 音频开启与关闭（音频通话时可用）
         */

    }, {
        key: "setAudioEnabled",
        value: function setAudioEnabled(enable) {
            if (enable) {
                this.openVoice();
            } else {
                this.closeVoice();
            }
        }

        /**
         * 视频开启与关闭（视频通话时可用）
         */

    }, {
        key: "setVideoEnabled",
        value: function setVideoEnabled(enable) {
            if (enable) {
                this.closeVideo();
            } else {
                this.openVideo();
            }
        }

        /**
         * 丢弃录制
         */

    }, {
        key: "discardLocalRecording",
        value: function discardLocalRecording() {
            this.recorderMap = null;
        }

        /**
         * 切换摄像头
         * @param cameraId [0 --- N-1],
         * @param containerId [String] 需要显示的Video标签节点ID
         */

    }, {
        key: "switchCamera",
        value: function switchCamera(cameraId, containerId) {
            var _this3 = this;

            var _this = this;
            var video = document.getElementById(containerId);
            navigator.mediaDevices.enumerateDevices().then(_this.getVideoDevices).then(function (res) {
                var constraints = {
                    video: res[cameraId] || res[0],
                    audio: true
                };
                if (typeof _this3.worker.localStream !== 'undefined') {
                    _this3.stopMediaTracks(_this3.worker.localStream);
                }
                navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                    _this3.worker.localStream = stream;
                    video ? video.srcObject = stream : document.getElementById('local_video').srcObject = stream;
                    // this.worker.videoUrl = stream;
                    return navigator.mediaDevices.enumerateDevices();
                }).then(_this3.getVideoDevices).catch(function (error) {
                    console.error(error);
                });
            });
        }

        /**
         * 切换视频录制摄像头
         * same as switchCamera
         */

    }, {
        key: "switchRecordingCamera",
        value: function switchRecordingCamera(cameraId) {}

        /**
         * 获取视频录制预览画面（先获取预览画面才可以开始录制本地视频）
         */

    }, {
        key: "getVideoRecordingView",
        value: function getVideoRecordingView(cameraId) {
            if (null == this.worker.localStream) {
                return false;
            } else {
                this.openVideo();
                return true;
            }
        }

        /**
         * 获取摄像头
         * */

    }, {
        key: "getVideoDevices",
        value: function getVideoDevices(mediaDevices) {
            var count = 1,
                devicesList = [];
            mediaDevices.forEach(function (mediaDevices) {
                if (mediaDevices.kind == 'videoinput') {
                    var label = "Camera " + count++;
                    devicesList.push({
                        lable: label,
                        deviceId: mediaDevices.deviceId
                    });
                }
            });
            return devicesList;
        }

        /**
         * 停止播放
         * */

    }, {
        key: "stopMediaTracks",
        value: function stopMediaTracks(stream) {
            if (this.worker.localStream == null) {
                return;
            }
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }

        /**
         *  返回摄像头列表
         *  return Promise
         * */

    }, {
        key: "returnVideoDeviceList",
        value: function returnVideoDeviceList() {
            var _this = this;
            return navigator.mediaDevices.enumerateDevices().then(_this.getVideoDevices);
        }
    }]);

    return MediaServiceWorker;
}(_MediaService2.MediaService);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ShiXin on 2017/7/7.
 */

/**
 * 呼叫信息
 */
var Call = exports.Call = function () {
    function Call() {
        _classCallCheck(this, Call);

        this.cubeId = null;
        this.displayName = null;
        this.isVideo = true;
        this.sdp = null;
        this.ices = [];
        this.candidates = [];
    }

    /**
     * 设置呼叫人信息
     * @param cubeId {String}
     */


    _createClass(Call, [{
        key: "setCubeId",
        value: function setCubeId(cubeId) {
            this.cubeId = cubeId;
        }
    }, {
        key: "getCubeId",
        value: function getCubeId() {
            return this.cubeId;
        }

        /**
         * 呼叫人昵称
         * @param displayName {String}
         */

    }, {
        key: "setDisplayName",
        value: function setDisplayName(displayName) {
            this.displayName = displayName;
        }
    }, {
        key: "getDisplayName",
        value: function getDisplayName() {
            return this.displayName;
        }

        /**
         * sdp信息
         * @param sdp
         */

    }, {
        key: "setSdp",
        value: function setSdp(sdp) {
            this.sdp = sdp;
        }
    }, {
        key: "getSdp",
        value: function getSdp() {
            return this.sdp;
        }

        /**
         *获取ICE信息
         * @return {Array}
         */

    }, {
        key: "setIces",
        value: function setIces(ices) {
            this.ices = ices;
        }
    }, {
        key: "getIces",
        value: function getIces() {
            return this.ices;
        }
    }, {
        key: "setCandidates",
        value: function setCandidates(candidates) {
            this.candidates = candidates;
        }
    }, {
        key: "getCandidates",
        value: function getCandidates() {
            return this.candidates;
        }
    }]);

    return Call;
}();

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallSession = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by ShiXin on 2017/7/7.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CallDirection = __webpack_require__(32);

var _CallState = __webpack_require__(74);

var _CallAction = __webpack_require__(73);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 多人会话信息
 */
var CallSession = exports.CallSession = function () {
    function CallSession() {
        _classCallCheck(this, CallSession);

        this.caller = null;
        this.callee = null;
        //是否为主叫
        this.initiated = false;
        //是否开启视频
        this.videoEnabled = false;
        this.inviteTimes = 0;
        //接通时间
        this.inCallTime = 0;
        //挂断时间
        this.endCallTime = 0;
        //被叫是否繁忙
        this.isBusy = false;
        this.callerLatency = -1;
        this.calleeLatency = -1;
        this.direction = _CallDirection.CallDirection.Outgoing;
        this.callState = _CallState.CallState.None;
        this.callAction = _CallAction.CallAction.UNKNOWN;
    }

    /**
     * 主叫人信息
     * @param caller {Call}
     */


    _createClass(CallSession, [{
        key: 'setCaller',
        value: function setCaller(caller) {
            this.caller = caller;
        }
    }, {
        key: 'getCaller',
        value: function getCaller() {
            return this.caller;
        }

        /**
         * 被叫人信息
         * @param callee {Call}
         */

    }, {
        key: 'setCallee',
        value: function setCallee(callee) {
            this.callee = callee;
        }
    }, {
        key: 'getCallee',
        value: function getCallee() {
            return this.callee;
        }

        /**
         * 呼叫方向
         * */

    }, {
        key: 'callDirection',
        value: function callDirection() {}

        /**
         * 呼叫状态
         * */

    }, {
        key: 'CallState',
        value: function CallState() {}

        /**
         * 获取设置主叫行程、被叫行程
         * 判断网络状态
         * */

    }, {
        key: 'getCallerLatency',
        value: function getCallerLatency() {
            return this.callerLatency;
        }
    }, {
        key: 'getCalleeLatency',
        value: function getCalleeLatency() {
            return this.calleeLatency;
        }
    }, {
        key: 'setCallerLatency',
        value: function setCallerLatency(lantency) {
            this.callerLatency = lantency;
        }
    }, {
        key: 'setCalleeLatency',
        value: function setCalleeLatency(lantency) {
            this.calleeLatency = lantency;
        }

        /**
         * 挂掉动作
         * */

    }, {
        key: 'CallAction',
        value: function CallAction() {}
    }, {
        key: 'setInviteTimes',
        value: function setInviteTimes(inviteTimes) {
            this.inviteTimes = inviteTimes;
        }
    }, {
        key: 'getInviteTimes',
        value: function getInviteTimes() {
            return this.inviteTimes;
        }
    }, {
        key: 'setInCallTime',
        value: function setInCallTime(inCallTime) {
            this.inCallTime = inCallTime;
        }
    }, {
        key: 'getInCallTime',
        value: function getInCallTime() {
            return this.inCallTime;
        }
    }, {
        key: 'setEndCallTime',
        value: function setEndCallTime(endCallTime) {
            this.endCallTime = endCallTime;
        }
    }, {
        key: 'getEndCallTime',
        value: function getEndCallTime() {
            return this.endCallTime;
        }
    }]);

    return CallSession;
}();

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CallListener = __webpack_require__(60);

var _CallService2 = __webpack_require__(155);

var _CallDirection = __webpack_require__(32);

var _SignalingState = __webpack_require__(33);

var _CallServiceDelegate = __webpack_require__(156);

var _CallAction = __webpack_require__(73);

var _CallState = __webpack_require__(74);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CallServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 音/视频通话模块服务实现。
 */
var CallServiceWorker = exports.CallServiceWorker = function (_CallService) {
    _inherits(CallServiceWorker, _CallService);

    function CallServiceWorker(engine, localVideo, remoteVideo, bellAudio) {
        _classCallCheck(this, CallServiceWorker);

        // 初始化委派
        var _this = _possibleConstructorReturn(this, (CallServiceWorker.__proto__ || Object.getPrototypeOf(CallServiceWorker)).call(this, engine, null, CELLET.Signaling));

        _this.delegate = new _CallServiceDelegate.CallServiceDelegate(_CallListener.CallListener, engine);
        _this.localVideo = localVideo;
        _this.localVideo.muted = true;
        _this.remoteVideo = remoteVideo;
        _this.bellAudio = bellAudio;

        _this.autoAnswer = false;
        _this.isSendCandiate = false;

        // 呼叫状态
        _this.callState = _CallState.callState.None;

        // 挂断标签
        _this.flagTerminated = false;

        // 挂断状态
        _this.callAction = null;

        _this.target = null;
        _this.targetData = null;

        _this.direction = null;
        _this.videoEnabled = true;
        _this.state = _SignalingState.SignalingState.None;

        _this.sdpCache = null;

        // 带宽
        _this.audioBandwidth = 70;
        _this.videoBandwidth = 512;

        _this.bellAudioPaused = false;

        // 是否主叫
        _this.isInitiator = false;
        // 是否已经启动 WebRTC 流程
        _this.isStarted = false;
        // 用户是否被正确注册
        _this.isChannelReady = false;
        // 是否已向服务器发出邀请或者回应邀请
        _this.hasResponded = false;

        // WebRTC data structures
        // Streams
        _this.localStream = null;
        _this.remoteStream = null;
        // PeerConnection
        _this.pc = null;

        // local video ready callback
        _this.localVideoReady = null;
        // remote video ready callback
        _this.remoteVideoReady = null;
        // close callback
        _this.videoCloseHandler = null;

        _this.pcConstraints = { "optional": [{ "DtlsSrtpKeyAgreement": true }] };

        _this.sdpConstraints = {};
        _this.candidateQueue = [];

        _this.maxVideoSize = null;
        _this.maxFrameRate = 15;
        _this.minFrameRate = 8;

        _this.iceTimer = 0;
        _this.iceTimeout = 15000;

        _this.hangupTimer = 0;
        _this.hangupTimeout = 5000;

        // 应答回调
        _this.replyCallback = null;
        _this.replyTimer = 0;
        //保存多人会话信息 key:cubeId value:callSession
        _this.saveCallSession = new HashMap();

        _this.canAddIceCandidate = false;
        _this.lastIceServers = null;

        _this._bodyOverflow = null;
        _this._maskDom = null;
        _this._maskHeight = 1080;

        // 设备占用计数
        _this.promiseCount = 0;

        _this.localVideo.addEventListener('loadeddata', function (e) {
            if (typeof _this.localVideoReady === 'function') {
                _this.localVideoReady(_this.localVideo, _this);
            }
        }, false);

        _this.remoteVideo.addEventListener('loadeddata', function (e) {
            if (typeof _this.remoteVideoReady === 'function') {
                _this.remoteVideoReady(_this.remoteVideo, _this);
            }
        }, false);

        if (_this.bellAudio) {
            _this.bellAudio.addEventListener('loadeddata', function (e) {
                if (_this.bellAudioPaused) {
                    return;
                }

                _this.bellAudio.play();
            }, false);
        }
        return _this;
    }

    _createClass(CallServiceWorker, [{
        key: 'onStartup',
        value: function onStartup() {
            // 创建媒体控制器
            this.engine.sspMediaService = new CubeMediaServiceWorker(this);
        }

        /**
         * 设置是否自动应答。
         */

    }, {
        key: 'setAutoAnswer',
        value: function setAutoAnswer(autoAnswer) {
            this.autoAnswer = autoAnswer;
        }

        /**
         * 接听。
         */

    }, {
        key: 'answerCall',
        value: function answerCall(video) {
            var _this2 = this;

            if (this.engine.session.callPeer.name.length <= 4 && null != this.engine.sipService) {
                // 设置接听状态
                this.callState = _CallState.callState.InCall;
                // 会议直接接听
                return this.engine.sipService.answer();
            }
            if (!this.isChannelReady) {
                return false;
            }
            if (this.isInitiator || null == this.sdpCache) {
                return false;
            }
            this.flagTerminated = false;

            var constraints = this._generateMediaConstraints();
            if (typeof video === 'string') {
                constraints.mandatory.chromeMediaSourceId = video;
            }
            if (this.checkAndStart()) {
                // 回调正在处理
                this.delegate.didProgress(this, this.target);
                this.pc.setRemoteDescription(new RTCSessionDescription({ type: "offer", sdp: this.sdpCache }), function () {
                    _this2.canAddIceCandidate = true;
                    _this2.drainCandidateQueue();
                    _this2.utils.getUserMedia(_this2.videoEnabled ? constraints : false, true, function (err, stream) {
                        if (err) {
                            _this2.isStarted = false;
                            _this2.handleUserMediaError(err);
                        } else {
                            _this2.handleUserMedia(stream);

                            _this2.pc.addStream(_this2.localStream);
                            _this2.doAnswer();
                        }
                    });
                }, function () {
                    _this2.onSignalingError(e);
                });
            }

            // 显示遮罩
            this._showMask();

            return true;
        }

        /**
         * 发起呼叫。
         */

    }, {
        key: 'makeCall',
        value: function makeCall(callee, video, callback) {
            //当前没有网络或者没有正确注册时回调
            if (!this.engine.networkConnected) {
                this.delegate.didFailed(this, this.target, CubeStateCode.NetworkNotReachable);
                return false;
            } else if (!this.isChannelReady) {
                this.delegate.didFailed(this, this.target, CubeStateCode.NetworkNotReachable);
                return false;
            }

            if (this.hangupTimer > 0) {
                // 挂断定时器还在工作，不能启动新呼叫
                return false;
            }

            // 正在呼叫则返回
            if (this.engine.session.isCalling()) {
                return false;
            }

            this.flagTerminated = false;

            // 被叫号码
            callee = callee.toString();

            // 设置呼叫状态
            // this.callState = callState.InCall;
            this.engine.session.callState = _SignalingState.SignalingState.Progress;

            this.engine.session.setCallPeer(new CubePeer(callee));
            return this.invite(callee, video);
        }

        /**
         * 挂断通话。
         */

    }, {
        key: 'terminateCall',
        value: function terminateCall() {
            // 呼叫状态重置
            // this.callState = callState.None;

            this.flagTerminated = true;

            var sspRet = false;
            var sipRet = false;

            sspRet = this.hangup();

            return sspRet || sipRet;
        }
    }, {
        key: 'tryHold',
        value: function tryHold(hold, tryCounts) {
            // Nothing
        }
    }, {
        key: '_generateMediaConstraints',
        value: function _generateMediaConstraints() {
            var mW = 320;
            var mH = 240;
            if (null != this.maxVideoSize) {
                if (this.maxVideoSize.width !== undefined) mW = this.maxVideoSize.width;
                if (this.maxVideoSize.height !== undefined) mH = this.maxVideoSize.height;
            }
            nucleus.getLogger().d("SignalingWorker", "Camera resolution: " + mW + "x" + mH);
            var constraints = {
                "mandatory": {
                    "maxWidth": mW,
                    "maxHeight": mH,
                    "minWidth": 160,
                    "minHeight": 120,
                    "maxFrameRate": this.maxFrameRate,
                    "minFrameRate": this.minFrameRate
                }
            };

            if (this.utils.isFirefox) {
                if (parseInt(webrtcAdapter.detectBrowser.result.version) < 43) {
                    constraints = {
                        mediaStreamSource: { exact: ["desktop"] },
                        mediaSource: "screen",
                        width: { min: 160, max: mW },
                        height: { min: 120, max: mH },
                        frameRate: { min: this.minFrameRate, max: this.maxFrameRate },
                        require: ["width", "height", "frameRate"]
                    };
                } else {
                    constraints = {
                        chromeMediaSource: "desktop",
                        mediaSource: "screen",
                        width: mW,
                        height: mH,
                        frameRate: this.minFrameRate
                    };
                }
            }

            return constraints;
        }
    }, {
        key: 'invite',
        value: function invite(callee, video) {
            var _this3 = this;

            if (!this.isChannelReady) {
                return false;
            }

            this.hasResponded = false;
            this.lastIceServers = _CUBE_STUN_SERVERS;
            // 呼叫目标
            this.target = callee.toString();
            // 主叫
            this.isInitiator = true;
            this.direction = _CallDirection.CallDirection.Outgoing;
            this.videoEnabled = video !== false;

            // 更新状态
            this.state = _SignalingState.SignalingState.Invite;
            // 设置呼叫状态
            // this.callState = callState.Invited;

            // 回调正在邀请
            this.delegate.didInvite(this, this.direction, this.target, this.videoEnabled);
            var constraints = this._generateMediaConstraints();

            if (typeof video === 'string') {
                constraints.mandatory.chromeMediaSourceId = video;
            }

            if (this.checkAndStart()) {
                // 回调正在处理
                // 回调正在处理
                this.delegate.didProgress(this, this.target);

                this.utils.getUserMedia(this.videoEnabled ? constraints : false, true, function (err, stream) {
                    if (err) {
                        _this3.isStarted = false;
                        // 没有摄像头， 获取麦克风
                        if (err.name == 'NotFoundError') {
                            _this3.utils.getUserMedia(false, true, function (err, stream) {
                                if (err) {
                                    _this3.handleUserMediaError(err);
                                    return false;
                                } else {
                                    _this3.handleUserMedia(stream);
                                    _this3.pc.addStream(_this3.localStream);
                                    return true;
                                }
                            });
                        } else if (stream == undefined) {
                            // 设备占用
                            if (_this3.promiseCount < 3) {
                                new Promise(function (resovle, reject) {
                                    if (_this3.invite(callee, video)) {
                                        resovle();
                                        return true;
                                    } else {
                                        _this3.handleUserMediaError(err);
                                        reject();
                                    }
                                });
                                _this3.promiseCount++;
                            } else {
                                _this3.promiseCount = 0;
                                _this3.handleUserMediaError(err);
                                return false;
                            }
                        }
                    } else {
                        _this3.handleUserMedia(stream);
                        _this3.pc.addStream(_this3.localStream);
                    }
                });
            } else {
                // 报告状态错误
                this.delegate.didFailed(this, this.target, CubeStateCode.SignalingStartError);
            }

            nucleus.getLogger().d('SignalingWorker', 'Getting user media with constraints');

            // 显示遮罩
            this._showMask();

            return true;
        }
    }, {
        key: 'changeMediaDevice',
        value: function changeMediaDevice(deviceId) {
            if (this.videoEnabled) {
                var constraints = this._generateMediaConstraints();
                if (typeof deviceId === 'string') {
                    constraints.mandatory.chromeMediaSourceId = deviceId;
                }

                // TODO
            }
        }
    }, {
        key: 'hangup',
        value: function hangup() {
            var _this4 = this;

            if (this.state == _SignalingState.SignalingState.None) {
                return false;
            }

            if (this.hangupTimer > 0) {
                clearTimeout(this.hangupTimer);
            }

            var target = this.target.toString();
            this.hangupTimer = setTimeout(function () {
                clearTimeout(_this4.hangupTimer);
                _this4.hangupTimer = 0;

                _this4.delegate.didEnd(_this4, target, "bye-ack");
            }, this.hangupTimeout);

            if (this.state == _SignalingState.SignalingState.Incall) {
                var param = {
                    'cubeId': this.target,
                    'from': this.engine.session.name
                };
                this.engine.connect.send(CELLET.Signaling, CubeConst.ActionBye, param);

                this._cleanCall();
            } else if (this.state == _SignalingState.SignalingState.Invite || this.state == _SignalingState.SignalingState.Ringing) {
                var _param = {
                    'cubeId': this.target,
                    'from': this.engine.session.name
                };
                this.engine.connect.send(CELLET.Signaling, CubeConst.ActionCancel, _param);

                this._cleanCall();
            } else {
                var _param2 = {
                    'cubeId': this.target,
                    'from': this.engine.session.name
                };
                this.engine.connect.send(CELLET.Signaling, CubeConst.ActionBye, _param2);

                this._cleanCall();
            }

            this.hasResponded = false;

            return true;
        }
    }, {
        key: '_cleanCall',
        value: function _cleanCall() {
            this.canAddIceCandidate = false;

            if (this.iceTimer > 0) {
                clearTimeout(this.iceTimer);
                this.iceTimer = 0;
            }

            // 处理铃声
            if (null != this.bellAudio) {
                this.bellAudioPaused = true;
                this.bellAudio.pause();
            }

            try {
                if (this.utils.isIE || this.utils.isSafari) {
                    this.localVideo = document.getElementById(this.localVideo.id);
                    window.attachMediaStream(this.localVideo, null);
                } else {
                    this.localVideo.src = "";
                }
            } catch (e) {
                nucleus.getLogger().w("SignalingWorker#clean", e.message);
            }

            try {
                if (this.utils.isIE || this.utils.isSafari) {
                    this.remoteVideo = document.getElementById(this.remoteVideo.id);
                    window.attachMediaStream(this.remoteVideo, null);
                } else {
                    this.remoteVideo.src = "";
                }
            } catch (e) {
                nucleus.getLogger().w("SignalingWorker#clean", e.message);
            }

            if (null != this.localStream) {
                try {
                    this.localStream.stop();
                } catch (e) {}

                try {
                    this.localStream.getAudioTracks()[0].stop();
                    if (this.localStream.getVideoTracks()[0]) {
                        this.localStream.getVideoTracks()[0].stop();
                    }
                } catch (e) {}

                this.localStream = null;
            }
            if (null != this.remoteStream) {
                try {
                    this.remoteStream.getAudioTracks()[0].stop();

                    if (this.remoteStream.getVideoTracks()[0]) {
                        this.remoteStream.getVideoTracks()[0].stop();
                    }
                } catch (e) {
                    nucleus.getLogger().w("SignalingWorker#clean", e.message);
                }

                this.remoteStream = null;
            }

            if (null != this.pc) {
                try {
                    if (this.pc.signalingState !== 'closed') this.pc.close();
                } catch (e) {
                    nucleus.getLogger().w("SignalingWorker#clean", e.message);
                }

                this.pc = null;
            }

            this.direction = null;
            this.target = null;
            this.targetData = null;
            this.state = _SignalingState.SignalingState.None;
            this.isInitiator = false;
            this.isStarted = false;
            this.sdpCache = null;
            this.callState = _CallState.callState.None;
            this.callAction = null;
        }

        /**
         * 当注册状态变更时触发
         * @param session {CubeSession} 会话对象
         */

    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {
            if (session.regState == CubeRegistrationState.Ok) {
                this.isChannelReady = true;
            } else {
                this.isChannelReady = false;

                this.hangup();
            }
        }
    }, {
        key: 'tryReInvite',
        value: function tryReInvite() {
            if (nucleus.getTalkService().isCalled(CELLET.Signaling)) {
                var param = {};
                this.engine.connect.send(CELLET.Signaling, CubeConst.ActionTryReInvite, param);
            }
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            if (action == CubeConst.ActionInviteAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionInviteAck);
                this._processInviteAck(dialect);
            } else if (action == CubeConst.ActionInvite) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionInvite);
                this._processInvite(dialect);
            } else if (action == CubeConst.ActionInviteSync) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionInviteSync);
                this._processInviteSync(dialect);
            } else if (action == CubeConst.ActionInviteNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionInviteNotify);
                this._processInviteNotify(dialect);
            } else if (action == CubeConst.ActionAnswerAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionAnswerAck);
                this._processAnswerAck(dialect);
            } else if (action == CubeConst.ActionAnswer) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionAnswer);
                this._processAnswer(dialect);
            } else if (action == CubeConst.ActionAnswerSync) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionAnswerSync);
                this._processAnswerSync(dialect);
            } else if (action == CubeConst.ActionAnswerNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionAnswerNotify);
                this._processAnswerNotify(dialect);
            } else if (action == CubeConst.ActionByeAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionByeAck);
                this._processByeAck(dialect);
            } else if (action == CubeConst.ActionBye) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionBye);
                this._processBye(dialect);
            } else if (action == CubeConst.ActionByeSync) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionByeSync);
                this._processByeSync(dialect);
            } else if (action == CubeConst.ActionByeNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionByeNotify);
                this._processByeNotify(dialect);
            } else if (action == CubeConst.ActionCancelAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCancelAck);
                this._processCancelAck(dialect);
            } else if (action == CubeConst.ActionCancel) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCancel);
                this._processCancel(dialect);
            } else if (action == CubeConst.ActionCancelSync) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCancelSync);
                this._processCancelSync(dialect);
            } else if (action == CubeConst.ActionCancelNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCancelNotify);
                this._processCancelNotify(dialect);
            } else if (action == CubeConst.ActionCandidate) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCandidate);
                this._processCandidate(dialect);
            } else if (action == CubeConst.ActionCandidateAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCandidateAck);
                this._processCandidateAck(dialect);
            } else if (action == CubeConst.ActionCandidateNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionCandidateNotify);
                this._processCandidateNotify(dialect);
            } else if (action == CubeConst.ActionConsult) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionConsult);
                this._processConsult(dialect);
            } else if (action == CubeConst.ActionConsultNotify) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionConsultNotify);
                this._processConsult(dialect);
            } else if (action == CubeConst.ActionConsultAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionConsultAck);
                this._processConsultAck(dialect);
            } else if (action == CubeConst.ActionReply) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionReply);
                this._processReply(dialect);
            } else if (action == CubeConst.ActionReplyAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionReplyAck);
                this._processReplyAck(dialect);
            } else if (action == CubeConst.ActionTryReInviteAck) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionTryReInviteAck);
                this._processTryReInviteAck(dialect);
            } else if (action == CubeConst.ActionReverseCall) {
                nucleus.getLogger().d('SignalingWorker#onDialogue', CubeConst.ActionReverseCall);
                this._processReverseCall(dialect);
            }
        }
    }, {
        key: 'setBandwidth',
        value: function setBandwidth(audio, video) {
            this.audioBandwidth = audio;
            this.videoBandwidth = video;
        }
    }, {
        key: 'getLocalVideo',
        value: function getLocalVideo() {
            return this.localVideo;
        }
    }, {
        key: 'getRemoteVideo',
        value: function getRemoteVideo() {
            return this.remoteVideo;
        }

        // 协商

    }, {
        key: 'consult',
        value: function consult(media, operation) {
            if (this.state != _SignalingState.SignalingState.Incall) {
                return false;
            }

            var param = {
                "cubeId": this.engine.session.callPeer.name.toString(),
                "consult": {
                    "ver": 1,
                    "media": media,
                    "operation": operation
                },
                'from': this.engine.session.name
            };

            return this.engine.connect.send(CELLET.Signaling, CubeConst.ActionConsult, param);
        }

        // Channel negotiation trigger function

    }, {
        key: 'checkAndStart',
        value: function checkAndStart() {
            if (!this.isStarted) {
                // 创建 PeerConnection
                if (!this.createPeerConnection()) {
                    // 发生错误
                    return false;
                }

                // 标记为已启动
                this.isStarted = true;

                return true;
            } else {
                return false;
            }
        }

        // PeerConnection management...

    }, {
        key: 'createPeerConnection',
        value: function createPeerConnection() {
            var _this5 = this;

            var i = 0;
            console.log('this', this);
            try {
                var config = { "iceServers": this.lastIceServers };

                this.pc = new RTCPeerConnection(config, this.pcConstraints);
                this.pc.onicecandidate = function (e) {
                    _this5.handleIceCandidate(e);
                };
                this.pc.oniceconnectionstatechange = function (e) {
                    _this5.handleIceConnectionStateChange(e);
                };
                this.pc.onconnectionstatechange = function (e) {
                    _this5.handleConnectionStateChange(e);
                };
                this.pc.onnegotiationneeded = function () {
                    // 主叫发起呼叫
                    if (_this5.isInitiator && i == 0) {
                        _this5.doCall();
                        i++;
                    }
                };
            } catch (e) {
                nucleus.getLogger().d('SignalingWorker', 'Failed to create PeerConnection, exception: ' + e.message);

                this.delegate.didFailed(this, this.target, CubeStateCode.RTCInitializeFailed);

                this._cleanCall();

                return false;
            }

            this.pc.onaddstream = function (e) {
                _this5.handleRemoteStreamAdded(e);
            };
            this.pc.onremovestream = function (e) {
                _this5.handleRemoteStreamRemoved(e);
            };

            return true;
        }
    }, {
        key: 'doCall',
        value: function doCall() {
            var _this6 = this;

            nucleus.getLogger().d('SignalingWorker', 'Creating Offer...');
            // 创建 Offer
            this.pc.createOffer(function (sessionDescription) {
                sessionDescription.sdp = _this6._fixSdp(sessionDescription.sdp);
                _this6.setLocalAndSendInvite(sessionDescription);
            }, function (e) {
                _this6.onSignalingError(e);
            }, this.sdpConstraints);
        }
    }, {
        key: 'doAnswer',
        value: function doAnswer() {
            var _this7 = this;

            nucleus.getLogger().d('SignalingWorker', 'Creating Answer...');
            // 创建 Answer
            this.pc.createAnswer(function (sessionDescription) {
                sessionDescription.sdp = _this7._fixSdp(sessionDescription.sdp);
                _this7.setLocalAndSendAnswer(sessionDescription);
            }, function (e) {
                _this7.onSignalingError(e);
            }, this.sdpConstraints);
        }
    }, {
        key: 'setLocalAndSendInvite',
        value: function setLocalAndSendInvite(sessionDescription) {
            var _this8 = this;

            // set local SDP
            this.pc.setLocalDescription(sessionDescription, function () {
                var param = {
                    'cubeId': _this8.target,
                    'sdp': _this8.pc.localDescription.sdp,
                    'ices': _CUBE_ICE_SERVERS,
                    'from': _this8.engine.session.name
                };
                var ret = _this8.engine.connect.send(CELLET.Signaling, CubeConst.ActionInvite, param);
                if (ret) {
                    _this8.hasResponded = true;
                } else {
                    //若发包失败则挂断,不再等待30s挂断
                    _this8.hasResponded = false;
                    setTimeout(function () {
                        _this8.delegate.didFailed(_this8, _this8.target, CubeStateCode.SignalingStartError);
                        _this8._cleanCall();
                    }, 8000);
                }

                nucleus.getLogger().d("SignalingWorker#setLocalAndSendInvite", "Offer:\n" + _this8.pc.localDescription.sdp);
            }, function (error) {
                nucleus.getLogger().e('SignalingWorker', 'set local description error: ' + error);
                _this8.onSignalingError(e);
            });
        }
    }, {
        key: 'setLocalAndSendAnswer',
        value: function setLocalAndSendAnswer(sessionDescription) {
            var _this9 = this;

            // set local SDP
            this.pc.setLocalDescription(sessionDescription, function () {
                var param = {
                    'cubeId': _this9.target,
                    'sdp': _this9.pc.localDescription.sdp,
                    'from': _this9.engine.session.name
                };

                var ret = _this9.engine.connect.send(CELLET.Signaling, CubeConst.ActionAnswer, param);

                // 处理 ICE Candidate
                _this9.drainCandidateQueue();

                if (ret) {
                    _this9.hasResponded = true;
                } else {
                    _this9.hasResponded = false;
                    _this9.delegate.didFailed(_this9, _this9.target, CubeStateCode.SignalingStartError);
                    _this9.hangup();
                }

                nucleus.getLogger().d("SignalingWorker#setLocalAndSendAnswer", "Answer:\n" + _this9.pc.localDescription.sdp);
            }, function (error) {
                nucleus.getLogger().e('SignalingWorker', 'set local description error: ' + error);
                _this9.onSignalingError(e);
            });
        }
    }, {
        key: 'attachMediaStream',
        value: function attachMediaStream(video, stream) {
            if ((this.utils.isIE || this.utils.isSafari) && window.attachMediaStream) {
                window.attachMediaStream(video, stream);
                return;
            }

            video.onloadedmetadata = function (e) {
                video.play();
            };

            if (window.URL) {
                // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
                video.src = window.URL.createObjectURL(stream);
            } else {
                // Firefox and Opera: the src of the video can be set directly from the stream
                video.src = stream;
            }
        }
    }, {
        key: 'handleUserMedia',
        value: function handleUserMedia(stream) {
            this.localStream = stream;
            this.attachMediaStream(this.localVideo, stream);

            if ((this.utils.isIE || this.utils.isSafari) && this.localVideo.tagName.toLowerCase() == "video") {
                this.localVideo = document.getElementById(this.localVideo.id);
            }

            // 本地视频静音
            this.localVideo.muted = true;
            // 本地视频控制器不可用
            this.localVideo.controls = false;

            nucleus.getLogger().d('SignalingWorker', 'Adding local stream.');

            // 关闭遮罩
            this._closeMask();
        }
    }, {
        key: 'handleUserMediaError',
        value: function handleUserMediaError(error) {
            var _this10 = this;

            // 关闭遮罩
            this._closeMask();

            nucleus.getLogger().e("SignalingWorker", "Navigator.getUserMedia error" /* + JSON.stringify(error)*/);

            this.hangup();

            this.utils.getUserMedia(false, true, function (err, stream) {
                if (err) {
                    _this10.delegate.didFailed(_this10, _this10.target, CubeStateCode.MicphoneOpenFailed);
                } else {
                    _this10.utils.closeMediaStream(stream);
                    _this10.delegate.didFailed(_this10, _this10.target, CubeStateCode.CameraOpenFailed);
                }
            });
        }
    }, {
        key: 'handleIceCandidate',
        value: function handleIceCandidate(event) {
            if (event.candidate) {
                var param = {
                    'cubeId': this.target,
                    'candidate': {
                        sdpMid: event.candidate.sdpMid,
                        sdpMLineIndex: event.candidate.sdpMLineIndex,
                        sdp: event.candidate.candidate
                    },
                    'from': this.engine.session.name
                };
                return this.engine.connect.send(CELLET.Signaling, CubeConst.ActionCandidate, param);
            } else {
                nucleus.getLogger().d('SignalingWorker', 'End of candidates.');
            }
        }
    }, {
        key: 'handleIceConnectionStateChange',
        value: function handleIceConnectionStateChange(event) {
            if (null == this.pc) {
                return;
            }

            var state = this.pc.iceConnectionState;
            if (null == state || undefined === state) {
                return;
            }

            if (state == "failed") {
                nucleus.getLogger().w('CubeCallService#handleIceConnectionStateChange', 'Ice connection state change - state is ' + state + ', hasResponded is ' + this.hasResponded);
                if (this.hasResponded) {
                    this.hangup();
                }
                this.delegate.didFailed(this, this.target, CubeStateCode.ICEConnectionFailed);
            } else if (state == "disconnected" || state == "closed") {
                this.delegate.didEnd(this, this.target, "end");
                this._cleanCall();
            }
        }
    }, {
        key: 'handleConnectionStateChange',
        value: function handleConnectionStateChange(event) {
            switch (this.pc.connectionState) {
                case "connected":
                    nucleus.getLogger().d("CallService", "State: connected");
                    break;
                case "disconnected":
                    nucleus.getLogger().d("CallService", "State: disconnected");
                    break;
                case "failed":
                    nucleus.getLogger().d("CallService", "State: failed");
                    break;
                case "closed":
                    nucleus.getLogger().d("CallService", "State: closed");
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'handleRemoteStreamAdded',
        value: function handleRemoteStreamAdded(event) {
            try {
                if (null != this.bellAudio) {
                    this.bellAudioPaused = true;
                    this.bellAudio.pause();
                }
            } catch (e) {}

            if (this.iceTimer > 0) {
                clearTimeout(this.iceTimer);
                this.iceTimer = 0;
            }

            this.remoteStream = event.stream;
            this.attachMediaStream(this.remoteVideo, event.stream);

            if ((this.utils.isIE || this.utils.isSafari) && this.remoteVideo.tagName.toLowerCase() == "video") {
                this.remoteVideo = document.getElementById(this.remoteVideo.id);
            }
        }
    }, {
        key: 'handleRemoteStreamRemoved',
        value: function handleRemoteStreamRemoved(event) {
            nucleus.getLogger().d('SignalingWorker', 'Remote stream removed. Event: ' + event);

            if (this.iceTimer > 0) {
                clearTimeout(this.iceTimer);
                this.iceTimer = 0;
            }
        }
    }, {
        key: 'drainCandidateQueue',
        value: function drainCandidateQueue() {
            for (var i = 0; i < this.candidateQueue.length; ++i) {
                var candidate = this.candidateQueue[i];
                this.pc.addIceCandidate(candidate);
            }

            this.candidateQueue.splice(0, this.candidateQueue.length);
            this.candidateQueue = [];
        }

        // 由 WebRTC 引发的错误

    }, {
        key: 'onSignalingError',
        value: function onSignalingError(error) {
            nucleus.getLogger().w('SignalingWorker#onSignalingError', 'Failed to create signaling message : ' + error.name);

            // FIXME 发生错误后应当终止呼叫
            if (this.hasResponded) {
                this.delegate.didFailed(this, this.target, CubeStateCode.WorkerStateException);
                this.hangup();
            }
        }
    }, {
        key: '_setBandwidth',
        value: function _setBandwidth(sdp) {
            switch (this.engine.config.videoCodec) {
                case CubeCodecType.H264:
                    sdp = sdp.replace(/SAVPF 96 97 98 99 100/g, 'SAVPF 100 96 97 98 99');
                    break;
                case CubeCodecType.VP9:
                    sdp = sdp.replace(/SAVPF 96 97 98/g, 'SAVPF 98 96 97');
                    break;
                default:
                    break;
            }
            sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + this.audioBandwidth + '\r\n');
            sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + this.videoBandwidth + '\r\n');
            sdp = sdp.replace(/a=mid:sdparta_0\r\n/g, 'a=mid:sdparta_0\r\nb=AS:' + this.audioBandwidth + '\r\n');
            sdp = sdp.replace(/a=mid:sdparta_1\r\n/g, 'a=mid:sdparta_1\r\nb=AS:' + this.videoBandwidth + '\r\n');
            return sdp;
        }
    }, {
        key: '_fixSdp',
        value: function _fixSdp(sdp) {
            var ret = this._setBandwidth(sdp);
            return ret;
        }
    }, {
        key: '_processInviteAck',
        value: function _processInviteAck(dialect) {
            var state = dialect.getParamAsString("state");
            var code = state.code;
            if (code == 1402) {
                this.isInitiator = false;
                this.isStarted = false;
                this.state = _SignalingState.SignalingState.None;
                this.answerCall();
                return;
            }
            if (code < 200 || code > 299) {
                nucleus.getLogger().w('CubeCallService#_processInviteAck', 'In error code is:' + code);
                this.delegate.didFailed(this, this.target, code);
                this._cleanCall();
                return;
            } else if (code != 200) {
                nucleus.getLogger().w('CubeCallService#_processInviteAck', 'A state code that has no effect : ' + code);
            }

            if (this.direction == _CallDirection.CallDirection.Outgoing) {
                var callee = dialect.getParamAsString("callee");

                // 更新状态
                this.callState = _CallState.callState.Ringing;
                this.state = _SignalingState.SignalingState.Ringing;
                // console.log('targetData',dialect.getParamAsString('data'))
                this.targetData = dialect.getParamAsString('data').user;
                this.delegate.didRinging(this, callee);

                // Ringing 响铃
                if (null != this.bellAudio) {
                    this.bellAudioPaused = false;
                    this.bellAudio.loop = true;
                    this.bellAudio.src = cube.resourcePath + "/sounds/ringbacktone.ogg";
                }
            }
        }
    }, {
        key: '_processInviteSync',
        value: function _processInviteSync(dialect) {}
    }, {
        key: '_processInviteNotify',
        value: function _processInviteNotify(dialect) {
            var _this11 = this;

            // 判断是否正在处于会议中
            var data = dialect.getParamAsString('data');
            var state = dialect.getParamAsString('state');
            var sdp = data.sdp;
            // 保存 SDP
            this.sdpCache = sdp;
            if (this.engine.session.isCalling()) {
                var caller = data.user.cubeId;
                if (state == 202) {
                    this.delegate.didReInvite(this, this.direction, this.target, this.videoEnabled);
                }
                nucleus.getLogger().d('CallServiceWorker#_processInvite', caller + '-Peer is calling me');
                return;
            }

            if (this.state == _SignalingState.SignalingState.None) {
                // 被叫
                this.isInitiator = false;
                // 呼入
                this.direction = _CallDirection.CallDirection.Incoming;
                // 更新状态
                this.callState = _CallState.callState.Invited;
                this.state = _SignalingState.SignalingState.Invite;

                // Ringing 响铃
                if (null != this.bellAudio) {
                    this.bellAudioPaused = false;
                    this.bellAudio.loop = true;
                    this.bellAudio.src = cube.resourcePath + "/sounds/ringtone.ogg";
                    this.callState = _CallState.callState.Ringing;
                }
                var caller = data.user.cubeId;
                var iceServers = data.ICEServers;

                if (null != iceServers) {
                    this.lastIceServers = this.engine._parseICEServers(iceServers);
                } else {
                    this.lastIceServers = _CUBE_STUN_SERVERS;
                }

                var videoEnabled = false;
                if (sdp.indexOf('m=video') >= 0) {
                    videoEnabled = true;
                }

                this.videoEnabled = videoEnabled;

                // 目标
                this.target = caller.toString();
                this.targetData = dialect.getParamAsString('callerData');

                if (this.autoAnswer) {
                    setTimeout(function () {
                        _this11.answerCall();
                    }, 60);
                }

                this.delegate.didInvite(this, this.direction, this.target, videoEnabled);
            } else {
                nucleus.getLogger().e('SignalingWorker#_processInvite', 'Signaling state error: ' + this.state);
            }
        }
    }, {
        key: '_processInvite',
        value: function _processInvite(dialect) {
            var _this12 = this;

            // 判断是否正在处于会议中
            if (this.engine.session.isCalling()) {
                nucleus.getLogger().d('CallServiceWorker#_processInvite', dialect.getParamAsString('caller') + '-Peer is calling me');
                return;
            }

            if (this.state == _SignalingState.SignalingState.None) {
                // 被叫
                this.isInitiator = false;
                // 呼入
                this.direction = _CallDirection.CallDirection.Incoming;
                // 更新状态
                this.callState = _CallState.callState.Invited;
                this.state = _SignalingState.SignalingState.Invite;

                // Ringing 响铃
                if (null != this.bellAudio) {
                    this.bellAudioPaused = false;
                    this.bellAudio.loop = true;
                    this.bellAudio.src = cube.resourcePath + "/sounds/ringtone.ogg";
                    this.callState = _CallState.callState.Ringing;
                }
                var data = dialect.getParamAsString('data');
                var caller = data.user.cubeId;
                var sdp = data.sdp;
                var iceServers = data.ices;

                if (null != iceServers) {
                    this.lastIceServers = this.engine._parseICEServers(iceServers);
                } else {
                    this.lastIceServers = _CUBE_STUN_SERVERS;
                }
                // 保存 SDP
                this.sdpCache = sdp;
                console.error('answer,aaaaaa' + this.sdpCache);

                var videoEnabled = false;
                if (sdp.indexOf('m=video') >= 0) {
                    videoEnabled = true;
                }

                this.videoEnabled = videoEnabled;

                // 目标
                this.target = caller.toString();
                this.targetData = dialect.getParamAsString('callerData');

                if (this.autoAnswer) {
                    setTimeout(function () {
                        _this12.answerCall();
                    }, 60);
                }

                this.delegate.didInvite(this, this.direction, this.target, videoEnabled);
            } else {
                nucleus.getLogger().e('SignalingWorker#_processInvite', 'Signaling state error: ' + this.state);
            }
        }
    }, {
        key: '_processAnswerAck',
        value: function _processAnswerAck(dialect) {
            // 处理铃声
            if (null != this.bellAudio) {
                this.bellAudioPaused = true;
                this.bellAudio.pause();
            }

            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code < 200 || state.code > 299) {
                // 错误
                this.delegate.didFailed(this, this.target, state.code);
                this.hangup();
                return;
            } else if (state.code != 200) {
                nucleus.getLogger().w('CubeCallService#_processInviteAck', 'A state code that has no effect : ' + state.code);
            }

            if (this.direction == _CallDirection.CallDirection.Incoming) {
                var caller = data.user.cubeId;

                // 更新状态
                this.state = _SignalingState.SignalingState.Incall;
                this.callState = _CallState.callState.InCall;

                this.delegate.didIncall(this, this.direction, caller, null);
            }
        }
    }, {
        key: '_processAnswerSync',
        value: function _processAnswerSync(dialect) {

            var data = dialect.getParamAsString("data");
            var caller = data.user.cubeId;

            // 更新状态
            this.state = _SignalingState.SignalingState.Incall;
            this.callState = _CallState.callState.InCall;

            this.delegate.didEnd(this, this.target, 'answer-by-other');
            this._cleanCall();
            //this.delegate.didIncall(this, this.direction, caller, null);
        }
    }, {
        key: '_processAnswerNotify',
        value: function _processAnswerNotify(dialect) {
            var _this13 = this;

            if (this.direction == _CallDirection.CallDirection.Outgoing) {
                var data = dialect.getParamAsString("data");
                var callee = data.user.cubeId;
                var sdp = data.sdp;

                // 设置对端 SDP
                this.pc.setRemoteDescription(new RTCSessionDescription({ type: "answer", sdp: sdp }), function () {
                    _this13.canAddIceCandidate = true;
                    // 处理 ICE Candidate
                    _this13.drainCandidateQueue();
                });

                // 更新状态
                this.state = _SignalingState.SignalingState.Incall;
                this.callState = _CallState.callState.InCall;

                // 处理铃声
                if (null != this.bellAudio) {
                    this.bellAudioPaused = true;
                    this.bellAudio.pause();
                }

                this.delegate.didIncall(this, this.direction, callee, sdp);

                if (this.iceTimer > 0) {
                    clearTimeout(this.iceTimer);
                }

                this.iceTimer = setTimeout(function () {
                    clearTimeout(_this13.iceTimer);
                    _this13.iceTimer = 0;
                    console.log('超时断开');
                    // ICE 超时
                    _this13.delegate.didFailed(_this13, _this13.target, CubeStateCode.ICEConnectionFailed);

                    // 挂断本次通话
                    _this13.hangup();
                    _this13.callAction = _CallAction.callAction.UNKNOWN;
                }, this.iceTimeout);
            }
        }
    }, {
        key: '_processAnswer',
        value: function _processAnswer(dialect) {
            var _this14 = this;

            if (this.direction == _CallDirection.CallDirection.Outgoing) {
                var data = dialect.getParamAsString("data");
                var callee = data.callee;
                var sdp = data.sdp;

                // 设置对端 SDP
                this.pc.setRemoteDescription(new RTCSessionDescription({ type: "answer", sdp: sdp }), function () {
                    _this14.canAddIceCandidate = true;
                    // 处理 ICE Candidate
                    _this14.drainCandidateQueue();
                });

                // 更新状态
                this.state = _SignalingState.SignalingState.Incall;
                this.callState = _CallState.callState.InCall;

                // 处理铃声
                if (null != this.bellAudio) {
                    this.bellAudioPaused = true;
                    this.bellAudio.pause();
                }

                this.delegate.didIncall(this, this.direction, callee, sdp);

                if (this.iceTimer > 0) {
                    clearTimeout(this.iceTimer);
                }

                this.iceTimer = setTimeout(function () {
                    clearTimeout(_this14.iceTimer);
                    _this14.iceTimer = 0;
                    console.log('超时断开');
                    // ICE 超时
                    _this14.delegate.didFailed(_this14, _this14.target, CubeStateCode.ICEConnectionFailed);

                    // 挂断本次通话
                    _this14.hangup();
                    _this14.callAction = _CallAction.callAction.UNKNOWN;
                }, this.iceTimeout);
            }
        }
    }, {
        key: '_processBye',
        value: function _processBye(dialect) {
            if (this.state == _SignalingState.SignalingState.None) {
                return;
            }
            this.callAction = _CallAction.callAction.BYE_ACT;
            this.delegate.didEnd(this, this.target, "bye");
            this._cleanCall();
        }
    }, {
        key: '_processByeSync',
        value: function _processByeSync(dialect) {
            if (this.state == _SignalingState.SignalingState.None) {
                return;
            }
            this.callAction = _CallAction.callAction.BYE_ACT;
            this.delegate.didEnd(this, this.target, "bye");
            this._cleanCall();
        }
    }, {
        key: '_processByeNotify',
        value: function _processByeNotify(dialect) {
            if (this.state == _SignalingState.SignalingState.None) {
                return;
            }
            this.callAction = _CallAction.callAction.BYE_ACT;
            this.delegate.didEnd(this, this.target, "bye");
            this._cleanCall();
        }
    }, {
        key: '_processByeAck',
        value: function _processByeAck(dialect) {
            if (this.hangupTimer > 0) {
                clearTimeout(this.hangupTimer);
                this.hangupTimer = 0;
            }
            this.callAction = _CallAction.callAction.BYE_ACK;
            this.delegate.didEnd(this, this.target, "bye-ack");
            this._cleanCall();
        }
    }, {
        key: '_processCancelAck',
        value: function _processCancelAck(dialect) {
            if (this.hangupTimer > 0) {
                clearTimeout(this.hangupTimer);
                this.hangupTimer = 0;
            }
            this.callAction = _CallAction.callAction.CANCEL_ACK;
            this.delegate.didEnd(this, this.target, "cancel-ack");
            this._cleanCall();
        }
    }, {
        key: '_processCancelSync',
        value: function _processCancelSync(dialect) {
            if (this.hangupTimer > 0) {
                clearTimeout(this.hangupTimer);
                this.hangupTimer = 0;
            }
            this.callAction = _CallAction.callAction.CANCEL_ACK;
            this.delegate.didEnd(this, this.target, "cancel-ack");
            this._cleanCall();
        }
    }, {
        key: '_processCancelNotify',
        value: function _processCancelNotify(dialect) {
            if (this.state == _SignalingState.SignalingState.None) {
                return;
            }
            var data = dialect.getParamAsString('data');
            // 判断发 cancel 动作的用户是否是当前通话的对方
            if (null !== this.engine.session.getCallPeer() && data.user.cubeId !== this.engine.session.getCallPeer().name) {

                return;
            }

            var reason = dialect.getParamAsString('reason');
            var action = 'cancel-notify';

            this.callAction = _CallAction.callAction.CANCEL;
            this.delegate.didEnd(this, this.target, action);
            this._cleanCall();
        }
    }, {
        key: '_processCancel',
        value: function _processCancel(dialect) {
            if (this.state == _SignalingState.SignalingState.None) {
                return;
            }
            var data = dialect.getParamAsString('data');
            // 判断发 cancel 动作的用户是否是当前通话的对方
            if (null !== this.engine.session.getCallPeer() && data.call !== this.engine.session.getCallPeer().name) {

                return;
            }

            var reason = dialect.getParamAsString('reason');
            var action = 'cancel';
            if (null !== reason) {
                if (reason.code === CubeStateCode.AnswerByOther) {
                    action = 'answer-by-other';
                    this.callAction = _CallAction.callAction.ANSWER_BY_OTHER;
                } else if (reason.code === CubeStateCode.CancelByOther) {
                    action = 'cancel-by-other';
                    this.callAction = _CallAction.callAction.CANCEL_BY_OTHER;
                }
            }
            this.callAction = _CallAction.callAction.CANCEL;
            this.delegate.didEnd(this, this.target, action);
            this._cleanCall();
        }
    }, {
        key: '_processCandidate',
        value: function _processCandidate(dialect) {
            var jsonCandidate = dialect.getParamAsString("data").candidate;

            var candidate = new RTCIceCandidate({
                sdpMLineIndex: jsonCandidate.sdpMLineIndex,
                sdpMid: jsonCandidate.sdpMid,
                candidate: jsonCandidate.sdp
            });

            if (this.canAddIceCandidate) {
                this.pc.addIceCandidate(candidate);
            } else {
                this.candidateQueue.push(candidate);
            }
        }
    }, {
        key: '_processCandidateNotify',
        value: function _processCandidateNotify(dialect) {
            var data = dialect.getParamAsString("data");
            if (data == null) {
                return;
            }
            var jsonCandidate = dialect.getParamAsString("data").candidate;

            var candidate = new RTCIceCandidate({
                sdpMLineIndex: jsonCandidate.sdpMLineIndex,
                sdpMid: jsonCandidate.sdpMid,
                candidate: jsonCandidate.sdp
            });

            if (this.canAddIceCandidate) {
                this.pc.addIceCandidate(candidate);
            } else {
                this.candidateQueue.push(candidate);
            }
        }
    }, {
        key: '_processCandidateAck',
        value: function _processCandidateAck(dialect) {
            // Nothing
        }
    }, {
        key: '_processTryReInviteAck',
        value: function _processTryReInviteAck(dialect) {
            var state = dialect.getParamAsString('state');
            var data = dialect.getParamAsString('data');
            console.log('state', state);
            console.log('data', data);
            if (state.code == 1400) {
                this.callAction = _CallAction.callAction.ANSWER_BY_OTHER;
                this.state = _CallState.callState.InCall;
                // this.delegate.didIncall(this, this.direction, this.target, this.sdpCache)
            }
            nucleus.getLogger().d('CallServiceWorker#_processTryReInviteAck', dialect.getParamAsString('state').code);
        }
    }, {
        key: '_processReverseCall',
        value: function _processReverseCall(dialect) {
            var _this15 = this;

            //先关闭RTC
            if (null !== this.localStream) {
                this.utils.closeMediaStream(this.localStream);
                this.delegate.didEnd(this, this.target, 'end');
                this._cleanCall();
            }

            var caller = dialect.getParamAsString('caller');
            var sdp = dialect.getParamAsString("sdp");
            this.target = caller.toString();
            this.sdpCache = sdp;

            //在重启RTC，自动发送answer
            setTimeout(function () {
                _this15.answerCall();
            }, 60);
            this.delegate.didReverseCall(this, this.target);
        }
    }, {
        key: '_processConsult',
        value: function _processConsult(dialect) {
            var peer = dialect.getParamAsString("peer");
            var payload = dialect.getParamAsString("payload");

            // 判断当前对端是否是正确的对端
            if (peer === this.engine.session.callPeer.name) {
                if (payload.ver === 1) {
                    if (payload.media === "video") {
                        if (payload.operation === "close") {
                            try {
                                this.localStream.getVideoTracks()[0].enabled = false;
                            } catch (e) {
                                // Nothing
                            }
                        } else if (payload.operation === "open") {
                            try {
                                this.localStream.getVideoTracks()[0].enabled = true;
                            } catch (e) {
                                // Nothing
                            }
                        }
                        window.cube.getMediaService()._videoProcess(payload.operation);
                    }
                }
            } else {
                nucleus.getLogger().w("SignalingWorker#_processConsult", "Session peer error: " + peer);
            }
        }
    }, {
        key: '_processConsultNotify',
        value: function _processConsultNotify(dialect) {}
    }, {
        key: '_processConsultAck',
        value: function _processConsultAck(dialect) {
            // Nothing
        }
    }, {
        key: '_processReply',
        value: function _processReply(dialect) {
            var param = {
                "from": this.engine.session.name.toString(),
                "to": dialect.getParamAsString("from"),
                "time": dialect.getParamAsString("time")
            };
            return this.engine.connect.send(CELLET.Signaling, CubeConst.ActionReplyAck, param);
        }
    }, {
        key: '_processReplyAck',
        value: function _processReplyAck(dialect) {
            var cur = Date.now();

            if (this.replyTimer > 0) {
                clearTimeout(this.replyTimer);
                this.replyTimer = 0;
            }

            var time = dialect.getParamAsString("time");
            time.local = cur;
            // 计算行程
            time.remoteLatency = time.transmit - time.reference;
            time.localLatency = cur - time.originate - (time.transmit - time.receive);
            callSession.setCalleeLatency(time.remoteLatency);
            callSession.setCallerLatency(time.localLatency);
            if (null != this.replyCallback) {
                this.replyCallback.call(null, true, dialect.getParamAsString("from"), time);
            }
        }
    }, {
        key: '_showMask',
        value: function _showMask() {
            var _this16 = this;

            this._closeMask();
            if (this.showCallMask) {
                this._bodyOverflow = document.body.style.overflow;

                var w = window.innerWidth;
                var h = parseInt(window.innerHeight) + 70;
                if (h > this._maskHeight) {
                    this._maskHeight = h;
                }

                document.body.style.overflow = "hidden";

                if (null == this._maskDom) {
                    //var mask = [''];

                    var c = document.createElement("div");
                    c.id = "_cube_mask_";
                    c.style.position = "absolute";
                    c.style.styleFloat = "left";
                    c.style.cssFloat = "left";
                    c.style.left = "0px";
                    c.style.top = "0px";
                    c.style.width = w + "px";
                    c.style.height = this._maskHeight + "px";
                    c.style.zIndex = 9999;
                    c.style.opacity = 0.6;
                    c.style.mozOpacity = 0.6;
                    c.style.webkitOpacity = 0.6;
                    c.style.background = "#000";
                    //c.innerHTML = mask.join('');

                    c.addEventListener('dblclick', function (e) {
                        _this16._closeMask();
                    }, false);

                    this._maskDom = c;
                } else {
                    this._maskDom.style.left = "0px";
                    this._maskDom.style.top = "0px";
                    this._maskDom.style.width = w + "px";
                    this._maskDom.style.height = this._maskHeight + "px";
                }

                document.body.appendChild(this._maskDom);
            }
        }
    }, {
        key: '_closeMask',
        value: function _closeMask() {
            if (null != this._bodyOverflow) {
                document.body.removeChild(this._maskDom);
                document.body.style.overflow = this._bodyOverflow;

                this._bodyOverflow = null;
            }
        }
    }, {
        key: 'onConfigure',
        value: function onConfigure(config) {
            this.maxVideoSize = config.videoSize;
            this.minFrameRate = config.frameRate.min;
            this.maxFrameRate = config.frameRate.max;
            this.setBandwidth(config.bandwidth.audio, config.bandwidth.video);
            this.showCallMask = config.showCallMask;
        }
    }]);

    return CallServiceWorker;
}(_CallService2.CallService);

/***/ })

/******/ });
//# sourceMappingURL=cube-signaling.js.map