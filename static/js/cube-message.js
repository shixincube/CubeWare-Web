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
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CubeEngine 通用错误对象
 *
 * @class CubeError
 * @author Guan Yong
 */
var CubeError =
/**
 * @constructs
 * @param code {StateCode} 状态码
 * @param message {String} 描述信息
 */
exports.CubeError = function CubeError(code, message) {
  _classCallCheck(this, CubeError);

  this.code = code;
  this.message = message;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * MessageType.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 消息类型枚举。
 *
 * @readonly
 * @enum {String}
 * @author Xu Jiangwei, Guan Yong
 */
var MessageType = exports.MessageType = {
    /** 文本消息。 */
    Text: "text",

    /** 自定义消息。 */
    Custom: "custom",

    /** 文件消息。 */
    File: "file",

    /** 图片消息。 */
    Image: "image",

    /** 语音消息。 */
    Voice: "voice",

    /** 短视频消息。 */
    Video: "video",

    /** 白板消息。 */
    Whiteboard: "whiteboard",

    /** 白板剪辑消息。 */
    WhiteboardClip: "whiteboardclip",

    /*卡片消息*/
    Card: "card",

    /*历史消息*/
    History: "history",

    /*位置消息*/
    Location: "location",

    /*富文本消息*/
    RichContent: "richcontent",

    /** 回复消息 */
    Reply: "reply",

    /** 回执消息 */
    Receipt: "receipt",

    /* 未知类型的消息*/
    UnKnown: "unKnown"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageEntity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MessageEntity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _MessageStatus = __webpack_require__(71);

var _MessageType = __webpack_require__(1);

var _MessageDirection = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 消息实体。
 *
 * @class MessageEntity
 * @author Xu Jiangwei, Guan Yong
 */
var MessageEntity = exports.MessageEntity = function () {
    function MessageEntity(type) {
        _classCallCheck(this, MessageEntity);

        this.sn = MessageEntity.generateSerialNumber();
        this.type = type;
        // 消息的自定义数据。注：此属性不会作为消息内容进行传输。
        this.customData = _cube_timestamp++;
        this.status = _MessageStatus.MessageStatus.CREATE;
        this.direction = _MessageDirection.MessageDirection.None;
        this.receipted = false;
        this.receiver = null;
        this.sender = null;
        this.group = null;
        this.sendTime = 0;
        this.receiveTime = 0;
        this.timestamp = 0;
        this.pulled = false;
        this.traceless = false;
        this.fromDevice = null;
        this.receivedDevices = null;
        this.receiptedDevices = null;
        this.anonymous = false;
        this.sync = 0;
        this.tos = null;
        this.header = new HashMap();
        this.device = cube.getDeviceInfo();
    }

    /**
     * 设置消息的头域数据。
     *
     * @param {String} name - 头域数据名。
     * @param {Object} value - 头域数据值。
     */


    _createClass(MessageEntity, [{
        key: 'setHeader',
        value: function setHeader(name, value) {
            this.header.put(name, value);
        }

        /**
         * 根据头域数据返回对应的数据值。
         *
         * @param {String} name - 指定头域数据名。
         * @returns {Object} 返回对应的值。
         */

    }, {
        key: 'getHeader',
        value: function getHeader(name) {
            return this.header.get(name);
        }

        /**
         * 返回消息的 SN （唯一序列号）。
         *
         * @returns {Number} 长整型形式的消息唯一序列号。
         */

    }, {
        key: 'getSN',
        value: function getSN() {
            return this.sn;
        }

        /**
         * 返回消息类型。
         *
         * @returns {MessageType} 消息类型。
         */

    }, {
        key: 'getType',
        value: function getType() {
            return this.type;
        }

        /**
         * 返回消息接收人。
         *
         * @returns {Receiver} 此消息的接收人。
         */

    }, {
        key: 'getReceiver',
        value: function getReceiver() {
            return this.receiver;
        }

        /**
         * @typedef {Object|null} Receiver
         * @property {String} name - 接收人的 Cube 号。
         * @property {String} [displayName] - 接收人的显示名。
         */

        /**
         * 返回消息发送人。
         *
         * @returns {Sender} 此消息的发送人。
         */

    }, {
        key: 'getSender',
        value: function getSender() {
            return this.sender;
        }

        /**
         * @typedef {Object|null} Sender
         * @type {Object}
         * @property {String} name - 发送人的 Cube 号。
         * @property {String} [displayName] - 发送人的显示名。
         */

        /**
         * 返回绝对时间形式的消息发送时间。对于同一终端，发送时间是唯一的。
         *
         * @returns {Number} 绝对时间形式的发送时间。
         */

    }, {
        key: 'getSendTime',
        value: function getSendTime() {
            return this.sendTime;
        }

        /**
         * 返回绝对时间形式的消息接收时间。
         *
         * @returns {Number} 绝对时间形式的接收时间。
         */

    }, {
        key: 'getReceiveTime',
        value: function getReceiveTime() {
            return this.receiveTime;
        }

        /**
         * 返回绝对时间形式的消息的时间戳。
         *
         * @returns {Number} 绝对时间形式的时间戳。
         */

    }, {
        key: 'getTimestamp',
        value: function getTimestamp() {
            return this.timestamp;
        }

        /**
         * 返回消息是否已被其他终端接收。
         *
         * @returns {boolean} 如果已被其他终端接收过返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: 'hasPulled',
        value: function hasPulled() {
            return this.pulled;
        }

        /**
         * 返回是否是群组内消息。
         *
         * @returns {boolean} 如果是群组内消息返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: 'isGroupMessage',
        value: function isGroupMessage() {
            return null != this.group;
        }

        /**
         * 设置为无痕消息
         *
         * @param {boolean} traceless
         */

    }, {
        key: 'setTraceless',
        value: function setTraceless(traceless) {
            this.traceless = traceless;
        }

        /**
         * 返回当前消息是否为无痕消息
         *
         * @returns {boolean}
         */

    }, {
        key: 'getTraceless',
        value: function getTraceless() {
            return this.traceless;
        }

        /**
         * 返回当前消息状态
         * @returns {MessageStatus}
         */

    }, {
        key: 'getStatus',
        value: function getStatus() {
            return this.status;
        }

        /**
         * 获取消息发送终端的信息
         * @returns {{name: string, platform: string, version: string}|null}
         */

    }, {
        key: 'getFromDevice',
        value: function getFromDevice() {
            return this.fromDevice;
        }

        /**
         * 获取收取了当前消息所有终端设备信息
         * @returns {Array<{name: string, platform: string, version: string}>}
         */

    }, {
        key: 'getReceivedDevices',
        value: function getReceivedDevices() {
            return this.receivedDevices;
        }

        /**
         * 获取消息方向
         * @returns {MessageDirection|String}
         */

    }, {
        key: 'getDirection',
        value: function getDirection() {
            return this.direction;
        }

        /**
         * 获取当前消息是否已经回执
         * @returns {boolean}
         */

    }, {
        key: 'isReceipted',
        value: function isReceipted() {
            return this.receipted;
        }

        /**
         * 设置为匿名消息
         *
         * @param {boolean} anonymous
         */

    }, {
        key: 'setAnonymous',
        value: function setAnonymous(anonymous) {
            this.anonymous = anonymous;
        }

        /**
         * 设置为匿名昵称
         *
         * @param {string} displayName
         */

    }, {
        key: 'setDisplayName',
        value: function setDisplayName(displayName) {
            this.sender.displayName = displayName;
        }

        /**
         * 设置消息同步类型
         *
         *   @param {string} type -- 0(都同步) -- 1(仅发送者) --  2(仅接受者),
         */

    }, {
        key: 'setSyncType',
        value: function setSyncType(type) {
            this.sync = type;
        }

        /**
         * 发送群消息时设置可以收到消息的人，默认不设置就是所有人
         * @param {Array} receivers -- 群消息可以设置此属性，表示只有此列表的人才能收到，不设置没有此属性
         */

    }, {
        key: 'setOnlyReceivers',
        value: function setOnlyReceivers(receivers) {
            this.tos = receivers;
        }

        // 消息转为 JSON 格式

    }, {
        key: 'toJSON',
        value: function toJSON() {
            // 消息头
            var header = {};
            var keys = this.header.keySet();
            for (var i = 0; i < keys.length; ++i) {
                var name = keys[i];
                var value = this.header.get(name);
                if (null != value) {
                    header[name] = value;
                }
            }

            var json = {
                "sn": this.sn,
                "type": this.type,
                "from": this.sender,
                "to": this.receiver,
                "header": header,
                "sync": this.sync,
                "traceless": this.traceless,
                "time": {
                    "send": this.sendTime,
                    "receive": this.receiveTime,
                    "timestamp": this.timestamp
                },
                "anonymous": this.anonymous
            };

            if (this.tos) {
                json.tos = this.tos;
            }

            return json;
        }

        // 消息 SN 生成函数

    }], [{
        key: 'generateSerialNumber',
        value: function generateSerialNumber() {
            if (null == this.gCounts || this.gCounts >= 99) {
                this.gCounts = 0;
            }
            ++this.gCounts;

            var buf = [];
            var date = new Date();
            var dd = date.getDate();
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            buf.push(window.cube._cube_token);
            buf.push(dd > 9 ? dd : "0" + dd);
            buf.push(hh > 9 ? hh : "0" + hh);
            buf.push(mm > 9 ? mm : "0" + mm);
            buf.push(ss > 9 ? ss : "0" + ss);
            buf.push(this.gCounts > 9 ? this.gCounts : "0" + this.gCounts);
            var ret = buf.join('');
            buf.splice(0, buf.length);
            buf = null;

            ret = Number(ret);
            return ret;
        }
    }]);

    return MessageEntity;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * StateCode.js
 * Cube Engine
 *
 * Created by Ambrose Xu on 15/4/5.
 * Copyright (c) 2015 Cube Team. All rights reserved.
 */
/**
 * 引擎状态代码枚举。
 *
 * @readonly
 * @enum {Number}
 * @author Xu Jiangwei, Guan Yong
 */
var StateCode = exports.StateCode = {
    /** 成功 */
    Ok: 200,

    /**请求被处理, 请等待 **/
    Accepted: 202,
    /**已接收到请求，不需要返回数据**/
    NoContent: 204,

    /** 请求无效。 */
    BadRequest: 400,
    /** 未授权请求。 */
    Unauthorized: 401,
    /** 被保留的错误码。 */
    PaymentRequired: 402,
    /** 服务器无法识别请求。 */
    Forbidden: 403,
    /** 服务器没有找到对应的请求 URI 。 */
    NotFound: 404,
    /** 请求指定的方法服务器不允许执行。 */
    MethodNotAllowed: 405,
    /** 访问内容不被授权。 */
    NotAcceptable: 406,
    /** 代理需要授权。 */
    ProxyAuthenticationRequired: 407,
    /** 对端离线，请求超时。 */
    RequestTimeout: 408,
    /** 有冲突的请求。 */
    Gone: 410,
    /** 长度必须满足。 */
    LengthRequired: 411,
    /** 前提条件失败。 */
    PreconditionFailed: 412,
    /** 负载数据过长。 */
    PayloadTooLarge: 413,
    /** 不支持的媒体类型。 */
    UnsupportedMediaType: 415,
    /* */
    ExpectationFailed: 417,
    /*访问频率超过限制*/
    TooManyRequests: 429,
    /** 请求数据发送失败。 */
    RequestSendFailed: 477,
    /** 暂时失效的访问。 */
    TemporarilyUnavailable: 480,
    /** 对方正忙 */
    BusyHere: 486,
    /** 对方未接听。 */
    RequestTerminated: 487,

    /** 服务器内部错误。 */
    ServerInternalError: 500,
    /** 网关超时。 */
    GatewayTimeout: 504,

    /** 获取License失败 */
    GetLicenseFail: 500,

    /** 对方忙, 免打扰 */
    BusyEverywhere: 600,
    /** 不正确的重复登录。 */
    Declined: 603,
    /** 不存在的呼叫。 */
    DoesNotExistAnywhere: 604,
    /** 连接失败。 */
    ConnectionFailed: 700,
    /** 信令启动错误。 */
    SignalingStartError: 701,
    /** 信令链路传输数据错误。 */
    TransportError: 702,
    /** ICE 连接失败。 */
    ICEConnectionFailed: 703,
    /** 参数错误 */
    ParamError: 704,
    /** 创建 SDP 失败。 */
    CreateSessionDescriptionFailed: 705,
    /** 设置 SDP 失败。 */
    SetSessionDescriptionFailed: 706,
    /** RTC 初始化失败。 */
    RTCInitializeFailed: 707,
    /** 正在呼叫时，新呼叫进入。 */
    DuplicationException: 710,
    /** 工作机状态异常。 */
    WorkerStateException: 711,
    /** 呼叫超时。 */
    CallTimeout: 712,
    /** 未查询到会议信息 **/
    NotFoundConference: 713,
    /** 意外取消 **/
    UnexpectedCanceled: 714,

    /** 不正确的状态。 */
    IncorrectState: 801,
    /** 网络不可达。 */
    NetworkNotReachable: 809,

    /** 内容长度越界。 */
    ContentTooLong: 810,
    /** 消息缓存块大小超限。 */
    BlockOversize: 811,
    /** 消息格式错误。 */
    FormatError: 812,
    /** 消息内容错误。 */
    ContentError: 813,
    /** 消息内容参数越限，比如文件大小越限。 */
    OutOfLimit: 814,
    /** 消息没有接收人。 */
    NoReceiver: 815,
    /**同一消息重复发送*/
    RecallTimeout: 816,
    /** 空消息 */
    NullMessage: 817,
    /** 过期的消息 */
    MessageExpire: 818,
    /** 丢失资源文件。 */
    LostAssets: 820,
    /** 上传文件失败。 */
    UploadFailed: 823,
    /** 处理文件失败。 */
    ProcessFailed: 825,
    /** 文件加载失败。 */
    LoadFileFailed: 828,

    /*其他终端接听*/

    AnswerByOther: 900,
    /*其他终端取消*/
    CancelByOther: 901,
    /** 未知错误。 */
    Unknown: 0,
    //////////////////////////////////////////////////////// Account  1000~1100 ////////////////////////////////////////////////////////
    /** 引擎初始化失败 */
    InitFailed: 1001,
    /** 加载授权信息失败 */
    LoadLicenseFailed: 1002,
    /** 授权过期 */
    LicenseOutDate: 1003,
    /** 未注册 */
    UnRegister: 1004,
    /** 授权服务器错误 */
    LicenseServerError: 1005,
    /** 授权信息更新错误 */
    LicenseUpdateError: 1006,
    /** 账号重新登录超时 */
    ReLoginTimeout: 1007,

    //////////////////////////////////////////////////////// Message  1100~1200 ////////////////////////////////////////////////////////
    /** 撤回错误 */
    RecallError: 1100,
    /** 转发错误 */
    ForwardError: 1101,
    /** 语音录制太短 */
    VoiceClipTooShort: 1102,
    /** 视频录制太短 */
    VideoClipTooShort: 1103,
    /** 消息不存在 */
    MessageNotExist: 1104,
    /** 语音录制太短 */
    MessageTimeout: 1105,
    /**  消息回执错误 */
    ReceiptError: 1106,
    /**  消息不存在 */
    QueryNOData: 1107,
    /**  消息分发失败 */
    DispatchFailed: 1108,
    /**  过期的消息，消息超过5分钟不能撤回 */
    OutDateMessage: 1109,
    /**  文件下载失败 */
    FileMessageDownloadFailed: 1110,
    /**  文件消息下载超时失败 */
    FileMessageDownloadTimeout: 1111,
    /**  没有发现离线绘制消息 */
    NotFoundReceiptMessage: 1114,
    /**  消息置顶错误 */
    SetTopError: 1117,
    /**  同步离线消息超时 */
    SyncMessageTimeout: 1118,
    /**  进度查询错误 */
    FileProgressFailed: 1119,

    //////////////////////////////////////////////////////// FileManager  1200~1300 ////////////////////////////////////////////////////////
    /** 服务器不存在此文件 */
    FileNotExistOnServer: 1200,
    /** 云盘文件上传错误 */
    FileUploadError: 1201,
    /** 云盘文件数据格式错误 */
    FileDataFormatError: 1202,
    /**  文件重命名失败失败 */
    RenamedFailed: 1203,
    /**   文件加载失败 */
    CubeStateLoadFileFailed: 1204,
    /**  文件删除失败 */
    DeleteFailed: 1205,
    /**  创建文件夹失败 */
    MkdirFailed: 1206,
    /**  文件被占用 */
    FileUsedByOther: 1207,

    //////////////////////////////////////////////////////// Group  1300~1400 ////////////////////////////////////////////////////////
    /**  添加管理员失败 */
    GroupAddMasterFailed: 1300,
    /**  删除管理员失败 */
    GroupRemoveMasterFailed: 1301,
    /**  群组已销毁 */
    GroupDestory: 1302,
    /**  群组不存在 */
    GroupNotExist: 1303,

    //////////////////////////////////////////////////////// Call  1400~1500 ////////////////////////////////////////////////////////
    /**当前正在呼叫*/
    AlreadyInCalling: 1400,

    /** 呼叫方不存在*/
    CallerDoesNotExist: 1401,

    //////////////////////////////////////////////////////// Conference  1500~1600 ////////////////////////////////////////////////////////
    /**会议已经存在*/
    ConferenceExist: 1500,
    /**会议人数已达上限*/
    OverMaxNumber: 1501,
    /**会议被其他终端拒绝*/
    ConferenceRejectByOther: 1502,
    /**您已在其他终端参会*/
    ConferenceJoinFromOther: 1503,
    /**您已在其他终端参会*/
    ConferenceJoinFailed: 1506,
    /**拒绝失败*/
    ConferenceRejectFailed: 1507,
    /**会议已经结束*/
    ConferenceClosed: 1508,
    /**会议sip邀请失败*/
    ConferenceSipInviteFailed: 1551,
    /*连接会议超时*/
    ConferenceTimeout: 1552,
    //////////////////////////////////////////////////////// Whiteboard  1600~1700 ////////////////////////////////////////////////////////
    /**  导出白板错误 */
    ExportWhiteboardFailed: 1600,
    /**  导入白板错误 */
    ImportWhiteboardFailed: 1601,
    /** 白板不存在 */
    WhiteboardNotExist: 1602,
    /** 白板上传失败 */
    WhiteboardUploadFailed: 1603,
    /** 白板转换失败 */
    WhiteboardConvertFailed: 1604,

    //////////////////////////////////////////////////////// Media  1700~1800 ////////////////////////////////////////////////////////
    /**  摄像头开启失败 */
    CameraOpenFailed: 1700,
    /**  激活音频失败 */
    ActiveAudioSessionFailed: 1701,
    /**  麦克风开启失败 */
    MicphoneOpenFailed: 1702,
    /**  录制视频转换失败 */
    VideoConvertFailed: 1703,
    /**  音频录制初始化失败 */
    AudioRecorderInitialFailed: 1704,
    /**  音频准备录制失败 */
    AudioRecorderPrepareFailed: 1705,
    /**  解码出错 */
    AudioPlayDecodeFailed: 1706,
    /**  不支持操作用户媒体设备 */
    NotSupportUserMedia: 1707,

    //////////////////////////////////////////////////////// Live  1800~1900 ////////////////////////////////////////////////////////
    /** 直播启动失败 */
    LiveStartFailed: 1800,
    /** 直播不存在 */
    LiveNotExist: 1801,
    //////////////////////////////////////////////////////// Instruction  1900~2000 ////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////// RemoteDesktop  2000~2100 ////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////// Other  10000~Max ////////////////////////////////////////////////////////
    NotHavePermission: 10000 };

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

var _FileMessageStatus = __webpack_require__(70);

var _CubeError = __webpack_require__(0);

var _FileAction = __webpack_require__(72);

var _sparkMd = __webpack_require__(140);

var md5 = _interopRequireWildcard(_sparkMd);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FileMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 文件消息。
 *
 * @class FileMessage
 * @extends MessageEntity
 * @author Xu Jiangwei, Guan Yong
 */
var FileMessage = exports.FileMessage = function (_MessageEntity) {
    _inherits(FileMessage, _MessageEntity);

    /**
     * @constructs FileMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function FileMessage(receiver) {
        _classCallCheck(this, FileMessage);

        var _this = _possibleConstructorReturn(this, (FileMessage.__proto__ || Object.getPrototypeOf(FileMessage)).call(this, _MessageType.MessageType.File));

        _this.file = null;
        /* 存放form表单的元素ID */
        _this.domId = null;
        /**
         * 用于以FormData方式发送表单的File对象
         * 用于以FormData方式发送表单的File对象
         * @type File
         */
        _this.formFile = null;
        _this.accept = '';
        /**
         * 自定义发送方法。
         * 如果该方法被重写, 在发送此消息时该方法被调用, 且引擎不会 POST 数据到引擎服务器。
         *
         * @type {CubeCustomPostMethod}
         */
        _this.customPostMethod = null;

        _this.customPostParam = {};

        _this.pause = false;

        _this.receiver = { "name": receiver };
        _this.fileStatus = _FileMessageStatus.FileMessageStatus.None;

        _this.key = null;
        _this.server = new CubeRequest(cube.utils.isSecure ? "https" : "http" + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT);
        return _this;
    }

    /**
     * @typedef {Function} CubeCustomPostMethod
     * @param {{tracker: string, type: *, name: *, file: null}} data
     * @param {String} action
     */

    /**
     * 返回当前文件消息状态
     * @returns {FileMessageStatus}
     */


    _createClass(FileMessage, [{
        key: "getFileStatus",
        value: function getFileStatus() {
            return this.fileStatus;
        }

        /**
         * 文件基本信息。
         *
         * @returns {FileInfo} 文件信息对象。
         */

    }, {
        key: "getFile",
        value: function getFile() {
            return this.file;
        }

        /**
         * @typedef FileInfo
         * @type {Object}
         * @property {String} name - 文件名。
         * @property {Number} size - 文件的大小，单位：字节。
         * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
         * @property {String} url - 文件的访问 URL 。
         */

        /**
         * 打开一个文件对话框选择需要发送的文件。
         *
         * @param {(Function | null)} fn - 选择成功后回调函数。
         */

    }, {
        key: "chooseFile",
        value: function chooseFile(fn) {
            var self = this;
            var el = this._buildForm();
            el.onchange = function () {
                if (el.files != null && el.files.length > 0) {
                    var file = el.files[0];
                    self.formFile = file;
                    self.calculate(file, function (md5) {
                        self.file = {
                            modified: 0,
                            name: file.name,
                            size: file.size,
                            md5: md5
                        };
                        if (null != fn) {
                            fn(file, md5);
                        }
                    });
                }
            };
            el.click();
        }

        /**
         * 根据已有的 FileList 设置需要发送的文件。
         *
         * @param files {FileList} - 需要发送的 FileList
         * @returns {boolean} 返回是否设置成功。
         */

    }, {
        key: "setFileByFileList",
        value: function setFileByFileList(files) {
            var self = this;
            if (files != null && files.length > 0) {
                var el = this._buildForm();
                el.files = files;

                var file = files[0];
                self.calculate(file, function (md5) {
                    self.file = {
                        modified: 0,
                        name: file.name,
                        size: file.size,
                        md5: md5
                    };
                });
                return true;
            }

            return false;
        }

        /**
         * 设置表单文件
         * @param file {File} - 需要发送的文件
         * @returns {boolean} 返回设置是否成功
         */

    }, {
        key: "setFormFile",
        value: function setFormFile(file, fn) {
            var self = this;
            if (window.FormData) {
                this.formFile = file;
                self.calculate(file, function (md5) {
                    self.file = {
                        modified: 0,
                        name: file.name,
                        size: file.size,
                        md5: md5
                    };
                    self.formFile.md5 = md5;
                    if (null != fn) {
                        fn(file);
                    }
                    return true;
                });
            }
            return false;
        }

        /**
         * 设置文件Md5
         * @param Md5 {Md5} - 需要发送的文件的md5
         * @returns {boolean} 返回设置是否成功
         */

    }, {
        key: "setMd5",
        value: function setMd5(md5) {
            this.file.md5 = md5;
        }
    }, {
        key: "calculate",
        value: function calculate(file, callback) {
            var fileReader = new FileReader(),
                blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
                chunkSize = 2097152,

            // read in chunks of 2MB
            chunks = Math.ceil(file.size / chunkSize),
                currentChunk = 0,
                spark = new md5.default();

            fileReader.onload = function (e) {
                spark.appendBinary(e.target.result); // append binary string
                currentChunk++;

                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    callback(spark.end());
                }
            };

            function loadNext() {
                var start = currentChunk * chunkSize,
                    end = start + chunkSize >= file.size ? file.size : start + chunkSize;

                fileReader.readAsBinaryString(blobSlice.call(file, start, end));
            };

            loadNext();
        }

        // 创建文件操作的 Form

    }, {
        key: "_buildForm",
        value: function _buildForm() {
            // 生成表单ID
            this.domId = '_cube_file_msg_' + this.customData;
            this.customPostParam = {
                data: {
                    sn: this.sn,
                    cube: this.receiver.name,
                    file: null
                },
                action: this._getServerAction(_FileAction.FileAction.StartUpload)
            };
            var formInfo = this._getFileFormInfo();

            // 生成数据
            var data = formInfo.data;
            var container = document.createElement('div');
            container.id = this.domId;
            container.style.display = 'none';
            container.innerHTML = '<form id="_form' + this.domId + '" method="POST" enctype="multipart/form-data" action="' + formInfo.action + '" target="_frame' + this.domId + '">' + '<input type="hidden" name="size" value=""/>' + '<input type="hidden" name="md5" value=""/>' + '<input type="hidden" name="cube" value="' + data.cube + '"/>' + '<input type="hidden" name="sn" value="' + data.sn + '"/>' + '<input type="file" name="file" accept="' + this.accept + '"/>' + '</form>' + '<iframe name="_frame' + this.domId + '"></iframe>';
            document.body.appendChild(container);
            return container.getElementsByTagName("input")[4];
        }

        // 取消文件发送

    }, {
        key: "_cancel",
        value: function _cancel() {
            this._canceled = true;
            if (null != this.domId) {
                var container = document.getElementById(this.domId);
                if (null != container) {
                    // 删除iFrame元素以终止文件发送
                    document.body.removeChild(container);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "_customPostMethod",
        value: function _customPostMethod() {
            if (null != this.customPostMethod && typeof this.customPostMethod == 'function') {
                this.customPostMethod(this._getFileFormInfo());
            } else if (null != this.formFile) {
                var server = new CubeRequest('');
                var formInfo = this._getFileFormInfo();
                delete formInfo.data.file;
                server.sendFile(formInfo.action, { name: 'file', value: this.formFile }, formInfo.data, function (err) {
                    if (err) throw err;
                });
            } else {
                var data = this._getFileFormInfo().data;
                var form = document.getElementById('_form' + this.domId);
                if (null != form) {
                    form.action = this._getFileFormInfo().action;
                    form.getElementsByTagName("input")[0].value = data.size;
                    form.getElementsByTagName("input")[1].value = data.md5;
                    form.submit();
                } else {
                    nucleus.getLogger().e('FileMessage#_postData', 'Send File Message Error, No files selected');
                }
            }
        }
    }, {
        key: "_getServerAction",
        value: function _getServerAction(url) {
            var protocol = window.location.protocol;
            if (protocol.indexOf("http") != 0) {
                protocol = "http:";
            }
            return protocol + '//' + _CUBE_DOMAIN + ':' + _CUBE_PORT + url;
        }

        /*
         * 获取文件表单信息（用于发送给服务器的表单数据）
         * @private
         * @returns {{data: {tracker: string, type: *, name: *, file: null}, action: *}}
         */

    }, {
        key: "_getFileFormInfo",
        value: function _getFileFormInfo() {
            return this.customPostParam;
        }
    }, {
        key: "_getFileRichFormInfo",
        value: function _getFileRichFormInfo(msg) {
            return {
                data: {
                    receiver: window.cube.accName + ',' + msg.file.md5,
                    file: null
                },
                action: this._getServerAction(_FileAction.FileAction.RichMessageUpload)
            };
        }
    }, {
        key: "_notifyAck",
        value: function _notifyAck(callback) {
            // 查询进度
            var completed = false;
            var httpError = -1;
            var start = Date.now();
            var processed = 0;
            var total = 0;
            var processedRepeatNum = 0; // 进度连续相同次数

            var self = this;

            var tick = function tick() {
                // 执行了取消或暂停操作
                if (self._canceled || self.pause) {
                    return;
                }
                var dt = Date.now() - start;
                if (!completed && dt < 60000) {
                    setTimeout(function () {
                        tick();
                    }, 5000);
                }

                if (completed) {
                    if (null != self.domId) {
                        // 删除 DOM 节点
                        var container = document.getElementById(self.domId);
                        if (null != container) {
                            document.body.removeChild(container);
                        }
                    } else if (null != self.formFile) {
                        self.formFile = null;
                    }
                    // 结束
                    return;
                } else if (dt >= 60000) {
                    // 没有完成，并且超时
                    if (httpError > 0) {
                        callback(new _CubeError.CubeError(httpError, 'Upload file timeout'));

                        if (null != self.domId) {
                            // 删除 DOM 节点
                            var _container = document.getElementById(self.domId);
                            if (null != _container) {
                                document.body.removeChild(_container);
                            }
                        } else if (null != self.formFile) {
                            self.formFile = null;
                        }
                        // 结束
                        return;
                    } else {
                        // 没有错误发生
                        start = Date.now();
                        // 继续进行进度查询
                        setTimeout(function () {
                            tick();
                        }, 5000);
                    }
                }

                var param = {
                    sn: self.sn,
                    cube: self.receiver.name,
                    fileName: self.file.name
                };
                self.file.key ? param.key = self.file.key : "";

                self.server.sendFile(_FileAction.FileAction.GetProgress, {}, param, function (nErr, nData) {
                    if (nErr) {}
                    if (nData.state.code == 200) {
                        var sdata = nData.data;
                        if (processed !== parseInt(sdata.current)) {
                            processedRepeatNum = 0;
                            processed = parseInt(sdata.current);
                        } else {
                            processedRepeatNum++;
                        }
                        total = parseInt(sdata.total);

                        if (processed === total) {
                            callback(false, processed, total);

                            completed = true;
                        } else {
                            // 如果进度连续相同次数超过10次，就认为上传失败
                            if (processedRepeatNum > 10) {
                                callback(new _CubeError.CubeError(CubeStateCode.RequestTimeout, 'Upload file timeout'));
                                httpError = CubeStateCode.RequestTimeout;
                                self._cancel();
                            } else {
                                callback(false, processed, total);
                            }
                        }
                    } else {
                        callback(new _CubeError.CubeError(nData.state.code, nData.state.dec));
                        httpError = nData.state.code;
                        self._cancel();
                    }
                });
            };

            setTimeout(function () {
                tick();
            }, 2000);
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.file = this.file;
            return json;
        }
    }], [{
        key: "parse",
        value: function parse(json) {
            var msg = new FileMessage(json.to.name);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.file = json.file;

            msg.sn = json.sn;

            msg.pulled = json.pulled;

            msg.fromDevice = json.device;
            msg.receivedDevices = json.pulledDevices;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return FileMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 文件数据动作枚举。
 *
 * @readonly
 * @enum {String}
 * @author Xu Jiangwei, Guan Yong
 */
var FileAction = exports.FileAction = {
  Uploader: '/v3/file/upload',
  FileList: '/v3/file/list',
  Mkdir: '/v3/file/mkdir',
  DeleteFiles: '/v3/file/delete',
  CopyFile: '/v3/file/copy',
  MoveFile: '/v3/file/move',
  RenameFile: '/v3/file/rename',
  FileInfo: '/v3/file/info',
  searchFile: '/v3/file/search',
  CancelFile: '/v3/file/cancel',
  ResumeFile: '/v3/file/resume',
  PauseFile: '/v3/file/pause',
  CreateUploadFile: '/v3/file/createUpload',
  ProgressFile: '/v3/file/progress'
};

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.TextMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TextMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 文本消息。
 *
 * @class TextMessage
 * @extends MessageEntity
 * @author Xu Jiangwei, Guan Yong
 */
var TextMessage = exports.TextMessage = function (_MessageEntity) {
        _inherits(TextMessage, _MessageEntity);

        /**
         * @constructs TextMessage
         * @param {String} receiver - 指定消息接收人的 Cube 号。
         * @param {String} content - 指定消息的文本内容。
         */
        function TextMessage(receiver, content) {
                _classCallCheck(this, TextMessage);

                var _this = _possibleConstructorReturn(this, (TextMessage.__proto__ || Object.getPrototypeOf(TextMessage)).call(this, _MessageType.MessageType.Text));

                _this.receiver = { "name": receiver };
                _this.content = null;

                if (undefined !== content) {
                        _this.content = content;
                }
                return _this;
        }

        /**
         * 返回文本消息内容。
         *
         * @returns {String} 消息内容。
         */


        _createClass(TextMessage, [{
                key: 'getContent',
                value: function getContent() {
                        return this.content;
                }
        }, {
                key: 'toJSON',
                value: function toJSON() {
                        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
                        json.content = this.content;
                        json.contentKey = this.contentKey;
                        return json;
                }
        }], [{
                key: 'parse',
                value: function parse(json) {
                        // 创建消息实例
                        var msg = new TextMessage(json.to.name, json.content);
                        msg.receiver.displayName = json.to.displayName;

                        msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

                        if (undefined !== json.group) {
                                msg.group = json.group;
                                msg.groupName = json.group.name;
                        }

                        msg.sendTime = json.time.send;
                        msg.receiveTime = json.time.receive;
                        msg.timestamp = json.time.timestamp;

                        msg.sn = json.sn;

                        msg.pulled = json.pulled;

                        msg.fromDevice = json.device ? json.device : "";
                        msg.receivedDevices = json.pulledDevices ? json.pulledDevices : "";
                        // TODO
                        msg.receipted = json.receipted;

                        return msg;
                }
        }]);

        return TextMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileMessage2 = __webpack_require__(6);

var _MessageType = __webpack_require__(1);

var _MessageEntity = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ImageMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 图片消息。
 *
 * @class ImageMessage
 * @extends FileMessage
 * @author Xu Jiangwei, Guan Yong
 */
var ImageMessage = exports.ImageMessage = function (_FileMessage) {
    _inherits(ImageMessage, _FileMessage);

    /**
     * @constructs ImageMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function ImageMessage(receiver) {
        _classCallCheck(this, ImageMessage);

        var _this = _possibleConstructorReturn(this, (ImageMessage.__proto__ || Object.getPrototypeOf(ImageMessage)).call(this, receiver));

        _this.type = _MessageType.MessageType.Image;
        _this.accept = '.jpeg, .jpg, .png, .bmp, .gif';
        return _this;
    }

    /**
     * 根据已有的 FileList 设置需要发送的图片。
     *
     * @param {FileList} files - 指定需要发送的 FileList
     * @returns {boolean} 返回是否设置成功。
     */


    _createClass(ImageMessage, [{
        key: 'setFileByFileList',
        value: function setFileByFileList(files) {
            if (files != null && files.length > 0) {
                var file = files[0];

                var _f = file.name.split(".");
                var _type = _f[_f.length - 1].toLowerCase();
                // 判断后缀是否是图片格式
                if (_type == 'jpeg' || _type == 'jpg' || _type == 'png' || _type == 'bmp' || _type == 'gif') {
                    var el = this._buildForm();
                    el.files = files;
                    this.file = {
                        modified: 0,
                        name: file.name,
                        size: file.size
                    };
                    return true;
                }
            }

            return false;
        }

        /**
         * 返回图片文件基本信息。
        *
        * @returns {ImageFileInfo} 图片文件信息对象。
        * @memberof CubeImageMessage
        * @instance
         */

    }, {
        key: 'getFile',
        value: function getFile() {
            return this.file;
        }
        /**
         * @typedef {Object} ImageFileInfo
         * @property {String} name - 文件名。
         * @property {Number} size - 文件的大小，单位：字节。
         * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
         * @property {String} url - 文件的访问 URL 。
         * @property {Number} width - 图片的宽度。
         * @property {Number} height - 图片的高度。
         * @property {String} thumb - 图片缩略图的 URL 。
         */

    }, {
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);
            json.file = this.file;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            var msg = new ImageMessage(json.to.name);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.file = undefined !== json.file ? json.file : null;

            msg.sn = json.sn;
            msg.pulled = json.pulled;

            msg.fromDevice = json.device;
            msg.receivedDevices = json.pulledDevices;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return ImageMessage;
}(_FileMessage2.FileMessage);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * MessageDirection.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 消息方向枚举。
 *
 * @readonly
 * @enum {String}
 * @author Guan Yong
 */
var MessageDirection = exports.MessageDirection = {
    /** 初始化。 */
    None: "none",

    /** 收取。 */
    Received: "received",

    /** 发出。 */
    Sent: "sent"
};

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileMessage = __webpack_require__(6);

var _MessageType = __webpack_require__(1);

var _MessageEntity2 = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CardMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 卡片消息。
 *
 * @class CardMessage
 * @extends MessageEntity
 * @author Li Wenkai
 */
var CardMessage = exports.CardMessage = function (_MessageEntity) {
    _inherits(CardMessage, _MessageEntity);

    /**
     * @constructs CardMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     * @param {String} title - 卡片消息标题
     * @param {String} icon - 卡片消息链接
     * @param {String} desc - 卡片消息描述
     */
    function CardMessage(receiver, title, icon, content, desc) {
        _classCallCheck(this, CardMessage);

        var _this = _possibleConstructorReturn(this, (CardMessage.__proto__ || Object.getPrototypeOf(CardMessage)).call(this, receiver));

        _this.type = _MessageType.MessageType.Card;
        _this.receiver = { "name": receiver };
        _this.title = title;
        _this.icon = icon;
        _this.content = content;
        _this.cardContents = [];
        _this.traceless = false;
        _this.pulled = false;
        _this.secret = false;
        _this.device = cube.deviceInfo;

        return _this;
    }

    /**
     * 设置卡片消息集合。
     *
     * @param {Array}  cardContents - 卡片消息集合。
     */


    _createClass(CardMessage, [{
        key: 'setCardContents',
        value: function setCardContents(cardContents) {
            this.cardContents = cardContents;
        }

        /**
         * 设置卡片消息内容。
         *
         * @param {String}  name - 卡片消息名字。
         * @param {String} icon - 卡片消息头像。
         * @param {String} url - 卡片消息Url。
         * @param {String} desc - 卡片消息描述desc。
         */

    }, {
        key: 'setCardContent',
        value: function setCardContent(name, icon, url, desc) {
            this.cardContents.push({ "name": name, "icon": icon, "url": url, "desc": desc });
        }

        /**
         * 返回卡片消息内容。
         *
         * @returns {String} 消息内容。
         */

    }, {
        key: 'getCardContent',
        value: function getCardContent() {
            return this.cardContents[0];
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            // 消息头
            json.content = this.content;
            json.cardContents = this.cardContents;
            json.title = this.title;
            json.icon = this.icon;
            json.traceless = this.traceless;
            json.pulled = this.pulled;
            json.secret = this.secret;
            json.group = this.group;
            json.device = this.device;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new CardMessage(json.to.name, json.title, json.icon, json.content, json.desc);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.sn = json.sn;
            msg.pulled = json.pulled;

            msg.device = json.device;

            msg.receipted = json.receipted;

            msg.cardContents = json.cardContent ? [json.cardContent] : json.cardContents;

            return msg;
        }
    }]);

    return CardMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CustomMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 自定义消息。
 *
 * @class CustomMessage
 * @extends MessageEntity
 * @author Xu Jiangwei, Guan Yong
 */
var CustomMessage = exports.CustomMessage = function (_MessageEntity) {
    _inherits(CustomMessage, _MessageEntity);

    /**
     * @constructs CustomMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function CustomMessage(receiver) {
        _classCallCheck(this, CustomMessage);

        var _this = _possibleConstructorReturn(this, (CustomMessage.__proto__ || Object.getPrototypeOf(CustomMessage)).call(this, _MessageType.MessageType.Custom));

        _this.receiver = { "name": receiver };

        _this.body = null;
        _this.expires = 0;
        return _this;
    }

    /**
     * 设置消息体数据。
    *
     * @param {Object} body - 指定需要设置的内容。
     */


    _createClass(CustomMessage, [{
        key: 'setBody',
        value: function setBody(body) {
            this.body = body;
        }

        /**
         * 返回消息体数据。
         *
         * @returns {Object} 返回自定义消息体内容。
         */

    }, {
        key: 'getBody',
        value: function getBody() {
            return this.body;
        }

        /**
         * 设置消息超期时间。
         *
            * @param {Number} expires 指定以秒为单位的消息超期时间。
         */

    }, {
        key: 'setExpires',
        value: function setExpires(expires) {
            this.expires = expires;
        }

        /**
            * 返回消息的超期时间。
         *
            * @returns {Number} 返回消息的超期时间（单位：秒）。
            */

    }, {
        key: 'getExpires',
        value: function getExpires() {
            return this.expires;
        }

        // 消息转 JSON

    }, {
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

            json.expires = this.expires;

            // 消息体
            if (null != this.body) {
                json.body = this.body;
            }

            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new CustomMessage(json.to.name);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.sn = json.sn;
            msg.pulled = json.pulled;

            if (undefined !== json.header) {
                for (var key in json.header) {
                    msg.setHeader(key, json.header[key]);
                }
            }

            if (undefined !== json.body) {
                msg.setBody(json.body);
            }

            msg.fromDevice = json.device;
            msg.receivedDevices = json.pulledDevices;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return CustomMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReceiptMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ReceiptMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 回执消息。
 *
 * @class ReceiptMessage
 * @extends MessageEntity
 * @author Huang yuanliang
 */
var ReceiptMessage = exports.ReceiptMessage = function (_MessageEntity) {
    _inherits(ReceiptMessage, _MessageEntity);

    /**
     * @constructs ReceiptMessage
     * @param {String||Array} sns - 回执的消息sn集合。
     * @param {String} receiver - 接收者信息。
     * @param {object} sender - 发送者信息。
     * @param {String} 回执消息sn
     */
    function ReceiptMessage(receiver, sender, sn) {
        _classCallCheck(this, ReceiptMessage);

        var _this = _possibleConstructorReturn(this, (ReceiptMessage.__proto__ || Object.getPrototypeOf(ReceiptMessage)).call(this, _MessageType.MessageType.Receipt));

        _this.receiver = { "name": receiver };
        _this.sender = sender;
        //回执消息默认不入库
        _this.traceless = true;
        if (null != sn) {
            _this.sn = sn;
        }
        if (null != sender) {
            _this.sender = sender;
        }
        return _this;
    }

    _createClass(ReceiptMessage, [{
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.sns = this.sns;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new ReceiptMessage();
            msg.receiver = { "name": json.to.name, "displayName": json.to.displayName };

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.sn = json.sn;

            msg.pulled = json.pulled;

            msg.fromDevice = json.device ? json.device : "";
            msg.receivedDevices = json.pulledDevices ? json.pulledDevices : "";
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return ReceiptMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplyMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ReplyMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 回复消息
 *
 * @class ReplyMessage
 * @extends MessageEntity
 * @author Huang Yuanliang
 */
var ReplyMessage = exports.ReplyMessage = function (_MessageEntity) {
    _inherits(ReplyMessage, _MessageEntity);

    /**
     * @constructs ReplyMessage
     * @param {String} receiver - 指定对应消息的Cube号
     * @param {MessageEntity} reply - 回复内容
     * @param {MessageEntity} source - 原始内容
     */
    function ReplyMessage(receiver, reply, source) {
        _classCallCheck(this, ReplyMessage);

        var _this = _possibleConstructorReturn(this, (ReplyMessage.__proto__ || Object.getPrototypeOf(ReplyMessage)).call(this, _MessageType.MessageType.Reply));

        _this.receiver = { "name": receiver };
        if (null != reply) {
            reply.sn = _this.sn;
        }
        _this.reply = reply;
        _this.source = source;
        return _this;
    }

    _createClass(ReplyMessage, [{
        key: 'setSource',
        value: function setSource(source) {
            this.source = {
                "type": source.type,
                "content": source.content,
                "from": source.sender,
                "sn": source.sn,
                "to": source.receiver,
                "time": {
                    "receive": source.receiveTime,
                    "send": source.sendTime,
                    "timestamp": source.timestamp
                }
            };
            this.source = Object.assign(this.source, source);
            if (null != source.tos) {
                this.source.tos = source.tos;
            }
            if (null != source.group) {
                this.source.group = source.group.name;
            }
            if (source.type == _MessageType.MessageType.Reply) {
                this.source.content = source.reply.content;
            }
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            if (null != this.reply) {
                this.reply.sender = this.sender;
            }
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.source = this.source instanceof _MessageEntity2.MessageEntity ? this.source.toJSON() : this.source;
            json.reply = this.reply instanceof _MessageEntity2.MessageEntity ? this.reply.toJSON() : this.reply;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new ReplyMessage(json.to.name, json.reply, json.source);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            if (null != msg.reply) {
                msg.reply.sn = json.sn;
                msg.reply.from = json.from;
                msg.reply.time = json.time;
                msg.reply.sendTime = json.time.send;
                msg.reply.receiveTime = json.time.receive;
                msg.reply.timestamp = json.time.timestamp;
            }
            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.sn = json.sn;

            msg.pulled = json.pulled;

            msg.fromDevice = json.device ? json.device : "";
            msg.receivedDevices = json.pulledDevices ? json.pulledDevices : "";
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return ReplyMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WhiteboardMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageEntity2 = __webpack_require__(2);

var _MessageType = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WhiteboardMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 文本消息。
 *
 * @class WhiteboardMessage
 * @extends MessageEntity
 * @author Xu Jiangwei, Guan Yong
 */
var WhiteboardMessage = exports.WhiteboardMessage = function (_MessageEntity) {
	_inherits(WhiteboardMessage, _MessageEntity);

	/**
  * @constructs WhiteboardMessage
  * @param {String} receiver - 指定消息接收人的 Cube 号。
  */
	function WhiteboardMessage(receiver) {
		_classCallCheck(this, WhiteboardMessage);

		var _this = _possibleConstructorReturn(this, (WhiteboardMessage.__proto__ || Object.getPrototypeOf(WhiteboardMessage)).call(this, _MessageType.MessageType.Whiteboard));

		_this.receiver = { "name": receiver };
		_this.content = null;
		_this.domId = null;
		_this.file = null;
		_this.finish = null;
		_this.completeCb = null;
		return _this;
	}

	/**
  * 填充消息内容。
  *
  * @param {Object} content - 白板的内容 JSON 数据。
  */


	_createClass(WhiteboardMessage, [{
		key: 'fillContent',
		value: function fillContent(content) {
			this.content = JSON.stringify(content);
			this.file = {
				modified: 0,
				name: Date.now() + ".cwb",
				size: this.content.length
			};
		}
	}, {
		key: 'getFile',
		value: function getFile() {
			return this.file;
		}

		// 创建操作表单

	}, {
		key: '_buildForm',
		value: function _buildForm() {
			// 生成表单ID
			this.domId = '_cube_wb_msg_' + this.customData;

			var container = document.createElement('div');
			container.id = this.domId;
			container.style.display = 'none';
			container.innerHTML = '<form id="_form' + this.domId + '" method="POST" enctype="multipart/form-data" action="' + this._getServerAction() + '" target="_frame' + this.domId + '">' + '<input type="hidden" name="filename" value="' + this.file.name + '"/>' + '<input type="hidden" name="receiver" value="' + this.receiver.name + '"/>' + '<input type="hidden" name="sender" value="' + this.sender.name + '"/>' + '<input type="hidden" name="sendTime" value="' + this.sendTime + '"/>' + '<input type="hidden" name="content" value=\'' + this.content + '\'/>' + '</form>' + '<iframe name="_frame' + this.domId + '"></iframe>';
			document.body.appendChild(container);
			return container;
		}
	}, {
		key: '_postData',
		value: function _postData() {
			// 构建表单
			var el = this._buildForm();

			// 建立监听
			var iframe = el.getElementsByTagName("iframe")[0];
			var self = this;
			iframe.onload = function () {
				setTimeout(function () {
					self.finish = true;
					if (null != self.completeCb) {
						self.completeCb(false, self.content.length, self.content.length);
					}

					self._clear();
				}, 1000);
			};

			var form = document.getElementById('_form' + this.domId);
			if (null != form) {
				form.submit();
			} else {
				nucleus.getLogger().e('CubeWhiteboardMessage#_postData', 'Send content error');
			}
		}
	}, {
		key: '_notifyAck',
		value: function _notifyAck(callback) {
			if (this.finish) {
				callback(false, this.content.length, this.content.length);
			} else {
				this.completeCb = complete;
			}
		}

		// 从服务器请求白板数据内容。

	}, {
		key: '_fetchData',
		value: function _fetchData(success, error) {
			var p = cube.utils.isSecure ? "https" : "http";
			// 查询进度
			var url = p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/message/read/cwb/?receiver=' + this.receiver.name + '&sn=' + this.sn;

			var self = this;
			// 发送请求
			Ajax.newRequest(url).method("GET").send(function (reponse) {
				if (reponse.getStatus() == 200) {
					self.content = reponse.getData().toString();
					success.call(null, self);
				} else {
					error.call(null, self, reponse.getStatus());
				}
			});
		}
	}, {
		key: '_getServerAction',
		value: function _getServerAction() {
			var protocol = window.location.protocol;
			if (protocol.indexOf("http") != 0) {
				protocol = "http:";
			}
			return protocol + '//' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/message/submit/';
			//return "http://localhost:8080/live/submit/";
		}
	}, {
		key: '_clear',
		value: function _clear() {
			this.completeCb = null;

			if (null != this.domId) {
				var container = document.getElementById(this.domId);
				if (null != container) {
					// 删除 iframe 元素以终止 Post 发送
					document.body.removeChild(container);
					return true;
				}
			}

			return false;
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
			json.file = this.file;
			return json;
		}
	}], [{
		key: 'parse',
		value: function parse(json) {
			var msg = new WhiteboardMessage(json.to.name);
			msg.receiver.displayName = json.to.displayName;

			msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

			if (undefined !== json.group) {
				msg.group = json.group;
				msg.groupName = json.group.name;
			}

			msg.sendTime = json.time.send;
			msg.receiveTime = json.time.receive;
			msg.timestamp = json.time.timestamp;

			msg.file = undefined !== json.file ? json.file : null;

			msg.sn = json.sn;

			msg.pulled = json.pulled;

			msg.fromDevice = json.device;
			msg.receivedDevices = json.pulledDevices;
			// TODO
			msg.receipted = json.receipted;

			return msg;
		}
	}]);

	return WhiteboardMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.VideoMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileMessage2 = __webpack_require__(6);

var _MessageType = __webpack_require__(1);

var _MessageEntity = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * VideoMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 短视频消息。
 *
 * @class VideoMessage
 * @extends FileMessage
 * @author Xu Jiangwei, Guan Yong
 */
var VideoMessage = exports.VideoMessage = function (_FileMessage) {
        _inherits(VideoMessage, _FileMessage);

        /**
         * @constructs VideoMessage
         * @param {String} receiver - 指定消息接收人的 Cube 号。
         */
        function VideoMessage(receiver) {
                _classCallCheck(this, VideoMessage);

                var _this = _possibleConstructorReturn(this, (VideoMessage.__proto__ || Object.getPrototypeOf(VideoMessage)).call(this, receiver));

                _this.type = _MessageType.MessageType.Video;
                return _this;
        }

        /**
         * 返回视频文件基本信息。
        *
        * @returns {VideoFileInfo} 视频文件信息对象。
         */


        _createClass(VideoMessage, [{
                key: 'getFile',
                value: function getFile() {
                        return this.file;
                }
                /**
                 * @typedef {Object} VideoFileInfo
                 * @property {String} name - 文件名。
                 * @property {Number} size - 文件的大小，单位：字节。
                 * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
                 * @property {String} url - 文件的访问 URL 。
                 * @property {Number} duration - 视频时长，单位：秒。
                 * @property {Number} width - 视频的宽度。
                 * @property {Number} height - 视频的高度。
                 * @property {String} thumb - 视频静态缩略图 URL 。
                 * @property {String} webm - 视频 WebM 格式文件的 URL 。
                 */

        }, {
                key: 'toJSON',
                value: function toJSON() {
                        var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);
                        json.file = this.file;
                        return json;
                }
        }], [{
                key: 'parse',
                value: function parse(json) {
                        var msg = new VideoMessage(json.to.name);
                        msg.receiver.displayName = json.to.displayName;

                        msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

                        if (undefined !== json.group) {
                                msg.group = json.group;
                                msg.groupName = json.group.name;
                        }

                        msg.sendTime = json.time.send;
                        msg.receiveTime = json.time.receive;
                        msg.timestamp = json.time.timestamp;

                        msg.file = undefined !== json.file ? json.file : null;

                        msg.sn = json.sn;
                        msg.pulled = json.pulled;

                        msg.fromDevice = json.device;
                        msg.receivedDevices = json.pulledDevices;
                        // TODO
                        msg.receipted = json.receipted;

                        return msg;
                }
        }]);

        return VideoMessage;
}(_FileMessage2.FileMessage);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VoiceMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileMessage2 = __webpack_require__(6);

var _MessageType = __webpack_require__(1);

var _MessageEntity = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * VoiceMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 短语音消息。
 *
 * @class VoiceMessage
 * @extends FileMessage
 * @author Xu Jiangwei, Guan Yong
 */
var VoiceMessage = exports.VoiceMessage = function (_FileMessage) {
    _inherits(VoiceMessage, _FileMessage);

    /**
     * @constructs VoiceMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function VoiceMessage(receiver) {
        _classCallCheck(this, VoiceMessage);

        var _this = _possibleConstructorReturn(this, (VoiceMessage.__proto__ || Object.getPrototypeOf(VoiceMessage)).call(this, receiver));

        _this.type = _MessageType.MessageType.Voice;

        _this.stopCallback = null;
        return _this;
    }

    /**
     * 返回语音文件基本信息。
    *
    * @returns {VoiceFileInfo} 语音文件信息对象。
     */


    _createClass(VoiceMessage, [{
        key: 'getFile',
        value: function getFile() {
            return this.file;
        }
        /**
         * @typedef {Object} VoiceFileInfo
         * @property {String} name - 文件名。
         * @property {Number} size - 文件的大小，单位：字节。
         * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
         * @property {String} url - 文件的访问 URL 。
         * @property {Number} duration - 语音时长，单位：秒。
         * @property {String} mp3 - 语音 MP3 格式文件的 URL 。
         * @property {String} ogg - 语音 OGG 格式文件的 URL 。
         */

        /**
         * 开始录制
         *
         * @param callback {CubeBaseCallback} - 开始录制的回调
         */

    }, {
        key: 'startRecord',
        value: function startRecord(callback) {
            var self = this;

            cube.utils.getUserMedia(false, true, function (err, stream) {
                if (err) {
                    callback(err);
                } else {
                    self.recorder = new MediaRecorder(stream);
                    self.audioTrack = stream.getAudioTracks()[0];
                    var chunks = [],
                        startTime = 0;
                    self.recorder.ondataavailable = function (e) {
                        chunks.push(e.data);
                    };
                    self.recorder.onstop = function (e) {
                        var duration = (Date.now() - startTime) / 1000;
                        if (!self.canceledRecord) {
                            var file = new File(chunks, 'cube_clip_voice' + Date.now() + '.ogg', { 'type': 'audio/ogg; codecs=opus' });
                            self.setFormFile(file, function () {
                                self.file.duration = Math.round(duration);
                                if (typeof self.stopCallback == 'function') {
                                    self.stopCallback(file);
                                }
                            });
                        }
                        chunks = [];
                        self.canceledRecord = false;
                    };
                    self.recorder.start();
                    startTime = Date.now();

                    callback();
                }
            });
        }
        /**
         * This is a description of the callback function
         * @callback CubeBaseCallback
         * @param error {{Code: {Number}} | null} - 是否发生错误
         */

        /**
         * 停止录制
         */

    }, {
        key: 'stopRecord',
        value: function stopRecord(callback) {
            if (null != this.recorder && null != this.audioTrack) {
                this.stopCallback = callback;
                this.recorder.stop();
                this.audioTrack.stop();
                this.recorder = null;
                this.audioTrack = null;
            }
        }

        /**
         * 取消录制
         */

    }, {
        key: 'cancelRecord',
        value: function cancelRecord() {
            this.canceledRecord = true;
            this.stopRecord();
        }

        /**
         * 返回已经录制的语音文件对象
         * @returns {File} - 文件对象
         */

    }, {
        key: 'getVoiceFile',
        value: function getVoiceFile() {
            return this.formFile;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);
            json.file = this.file;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            var msg = new VoiceMessage(json.to.name);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.file = undefined !== json.file ? json.file : null;

            msg.sn = json.sn;
            msg.pulled = json.pulled;

            msg.fromDevice = json.device;
            msg.receivedDevices = json.pulledDevices;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return VoiceMessage;
}(_FileMessage2.FileMessage);

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (factory) {
  if (( false ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var glob;try {
      glob = window;
    } catch (e) {
      glob = self;
    }glob.SparkMD5 = factory();
  }
})(function (undefined) {
  "use strict";
  var add32 = function add32(a, b) {
    return a + b & 4294967295;
  },
      hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));return add32(a << s | a >>> 32 - s, b);
  }function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];a += (b & c | ~b & d) + k[0] - 680876936 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[1] - 389564586 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[2] + 606105819 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[3] - 1044525330 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[4] - 176418897 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[5] + 1200080426 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[6] - 1473231341 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[7] - 45705983 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[8] + 1770035416 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[9] - 1958414417 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[10] - 42063 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[11] - 1990404162 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[12] + 1804603682 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[13] - 40341101 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[14] - 1502002290 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[15] + 1236535329 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & d | c & ~d) + k[1] - 165796510 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[6] - 1069501632 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[11] + 643717713 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[0] - 373897302 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[5] - 701558691 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[10] + 38016083 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[15] - 660478335 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[4] - 405537848 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[9] + 568446438 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[14] - 1019803690 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[3] - 187363961 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[8] + 1163531501 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[13] - 1444681467 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[2] - 51403784 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[7] + 1735328473 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[12] - 1926607734 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b ^ c ^ d) + k[5] - 378558 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[8] - 2022574463 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[11] + 1839030562 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[14] - 35309556 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[1] - 1530992060 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[4] + 1272893353 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[7] - 155497632 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[10] - 1094730640 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[13] + 681279174 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[0] - 358537222 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[3] - 722521979 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[6] + 76029189 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[9] - 640364487 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[12] - 421815835 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[15] + 530742520 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[2] - 995338651 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;b = (b << 21 | b >>> 11) + c | 0;x[0] = a + x[0] | 0;x[1] = b + x[1] | 0;x[2] = c + x[2] | 0;x[3] = d + x[3] | 0;
  }function md5blk(s) {
    var md5blks = [],
        i;for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }return md5blks;
  }function md5blk_array(a) {
    var md5blks = [],
        i;for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }return md5blks;
  }function md51(s) {
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }s = s.substring(i - 64);length = s.length;tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(state, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = n * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(state, tail);return state;
  }function md51_array(a) {
    var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);length = a.length;tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(state, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = n * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(state, tail);return state;
  }function rhex(n) {
    var s = "",
        j;for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
    }return s;
  }function hex(x) {
    var i;for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }return x.join("");
  }if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
    add32 = function add32(x, y) {
      var lsw = (x & 65535) + (y & 65535),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);return msw << 16 | lsw & 65535;
    };
  }if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;if (val < 0) {
          return Math.max(val + length, 0);
        }return Math.min(val, length);
      }ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;if (to !== undefined) {
          end = clamp(to, length);
        }if (begin > end) {
          return new ArrayBuffer(0);
        }num = end - begin;target = new ArrayBuffer(num);targetArray = new Uint8Array(target);sourceArray = new Uint8Array(this, begin, num);targetArray.set(sourceArray);return target;
      };
    })();
  }function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }return str;
  }function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }return returnUInt8Array ? arr : buff;
  }function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);result.set(new Uint8Array(first));result.set(new Uint8Array(second), first.byteLength);return returnUInt8Array ? result : result.buffer;
  }function hexToBinaryString(hex) {
    var bytes = [],
        length = hex.length,
        x;for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }return String.fromCharCode.apply(String, bytes);
  }function SparkMD5() {
    this.reset();
  }SparkMD5.prototype.append = function (str) {
    this.appendBinary(toUtf8(str));return this;
  };SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;this._length += contents.length;var length = this._buff.length,
        i;for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }this._buff = this._buff.substring(i - 64);return this;
  };SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }this._finish(tail, length);ret = hex(this._hash);if (raw) {
      ret = hexToBinaryString(ret);
    }this.reset();return ret;
  };SparkMD5.prototype.reset = function () {
    this._buff = "";this._length = 0;this._hash = [1732584193, -271733879, -1732584194, 271733878];return this;
  };SparkMD5.prototype.getState = function () {
    return { buff: this._buff, length: this._length, hash: this._hash };
  };SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;this._length = state.length;this._hash = state.hash;return this;
  };SparkMD5.prototype.destroy = function () {
    delete this._hash;delete this._buff;delete this._length;
  };SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
        tmp,
        lo,
        hi;tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(this._hash, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = this._length * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(this._hash, tail);
  };SparkMD5.hash = function (str, raw) {
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
        ret = hex(hash);return raw ? hexToBinaryString(ret) : ret;
  };SparkMD5.ArrayBuffer = function () {
    this.reset();
  };SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;this._length += arr.byteLength;for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);return this;
  };SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }this._finish(tail, length);ret = hex(this._hash);if (raw) {
      ret = hexToBinaryString(ret);
    }this.reset();return ret;
  };SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);this._length = 0;this._hash = [1732584193, -271733879, -1732584194, 271733878];return this;
  };SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this);state.buff = arrayBuffer2Utf8Str(state.buff);return state;
  };SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    state.buff = utf8Str2ArrayBuffer(state.buff, true);return SparkMD5.prototype.setState.call(this, state);
  };SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);return raw ? hexToBinaryString(ret) : ret;
  };return SparkMD5;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileHttp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileAction = __webpack_require__(12);

var _CubeError = __webpack_require__(0);

var _sparkMd = __webpack_require__(32);

var md5 = _interopRequireWildcard(_sparkMd);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 文件http发送
 *
 * @author Huang Yuanliang
 */
var FileHttp = exports.FileHttp = function () {
    function FileHttp(engine) {
        _classCallCheck(this, FileHttp);

        this.engine = engine;
        this.queryHttp = engine.utils.isSecure ? _CUBE_HTTPS_FILE_SERVICE : _CUBE_HTTP_FILE_SERVICE;
        this.createHttp = engine.utils.isSecure ? _CUBE_HTTPS_STORAGE_SERVICE : _CUBE_HTTP_STORAGE_SERVICE;
        this.uploadProcessFiles = new HashMap();
        this.pendingFiles = [];
    }

    /**
     * 创建文件上传内容
     * */


    _createClass(FileHttp, [{
        key: "createUpload",
        value: function createUpload(file) {
            var _this = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (null == file.md5) {
                this.calculate(file, function (md5) {
                    file.md5 = md5;
                    _this.createUpload(file, callback);
                });
                return;
            }
            var isOverride = file.isOverride || true;
            var postData = {
                token: this.engine.accToken,
                name: file.name,
                parentId: file.parentId,
                permission: file.permission,
                md5: file.md5,
                isOverride: isOverride,
                size: file.size
            };
            this._sendPostHttp(_FileAction.FileAction.CreateUploadFile, postData, function (err, data) {
                if (_this.uploadProcessFiles.size() >= 4) {
                    _this.pendingFiles.push({ file: file, callback: callback });
                    return false;
                }
                if (!err && data.state.code == 200) {
                    var fileInfo = data.data.fileInfo;
                    fileInfo.paused = false;
                    fileInfo.lastProgress = 0;
                    fileInfo.progressCounts = 0;
                    // 正在上传中的文件
                    _this.uploadProcessFiles.put(fileInfo.fileId, fileInfo);
                }
                callback(err, data);
            }, this.createHttp);
        }

        //文件生成md5

    }, {
        key: "calculate",
        value: function calculate(file, callback) {
            var fileReader = new FileReader(),
                blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
                chunkSize = 2097152,

            // read in chunks of 2MB
            chunks = Math.ceil(file.size / chunkSize),
                currentChunk = 0,
                spark = new md5.default();

            fileReader.onload = function (e) {
                spark.appendBinary(e.target.result); // append binary string
                currentChunk++;

                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    callback(spark.end());
                }
            };

            function loadNext() {
                var start = currentChunk * chunkSize,
                    end = start + chunkSize >= file.size ? file.size : start + chunkSize;

                fileReader.readAsBinaryString(blobSlice.call(file, start, end));
            };

            loadNext();
        }

        /**
         * 文件上传或恢复上传
         * */

    }, {
        key: "upload",
        value: function upload(fileInfo, callback) {
            var _this2 = this;

            var processFile = this.uploadProcessFiles.get(fileInfo.fileId);
            if (null == processFile) {
                return false;
            }
            if (null == processFile.file && null != fileInfo.file) {
                processFile.file = fileInfo.file;
            }

            processFile.paused = false;
            var fileData = {
                token: this.engine.accToken,
                fileId: processFile.fileId
            };

            var success = function success(data) {
                if (data.state.code != 200) {
                    _this2.uploadProcessFiles.remove(processFile.fileId);
                } else {
                    var uploadFile = data.data.fileInfo;
                    if (uploadFile.size == uploadFile.progress) {
                        _this2.uploadProcessFiles.remove(processFile.fileId);
                        if (_this2.pendingFiles.length > 0) {
                            _this2.createUpload(_this2.pendingFiles[0].file, _this2.pendingFiles[0].callback);
                            _this2.pendingFiles = _this2.pendingFiles.slice(1);
                        }
                    } else {
                        processFile.progress = uploadFile.progress;
                    }
                }
                callback(false, data);
            };
            var errCallback = function errCallback(err) {
                _this2.uploadProcessFiles.remove(processFile.fileId);
                callback(err);
            };
            if (typeof fileInfo.customPostMethod == 'function') {
                fileData.file = null;
                fileInfo.customPostMethod({
                    data: fileData,
                    action: this.createHttp + _FileAction.FileAction.Uploader
                }, success, errCallback);
            } else {
                //如果是秒传文件，则将上传文件置为空，否则大文件服务器关闭流会花和上传时间一样的时间
                var fileBlob = processFile.secondUpload ? new Blob() : processFile.file.slice(processFile.progress, processFile.file.size);
                fileBlob.name = processFile.name;
                var xhr = this._sendFile(_FileAction.FileAction.Uploader, {
                    name: 'file',
                    value: fileBlob
                }, fileData, function (err, data) {
                    if (err) {
                        errCallback(err);
                    } else {
                        success(data);
                    }
                }, this.createHttp);
                if (null != xhr) {
                    processFile.xhr = xhr;
                }
            }
        }

        /**
         * 暂停
         * */

    }, {
        key: "pause",
        value: function pause(fileId) {
            var _this3 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (null == this.uploadProcessFiles.get(fileId) || this.uploadProcessFiles.get(fileId).paused) {
                return false;
            }
            var postData = {
                fileId: fileId,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.PauseFile, postData, function (err, data) {
                if (!err && data.state.code == 200) {
                    _this3.uploadProcessFiles.get(fileId).paused = true;
                }
                callback(err, data);
            }, this.createHttp);
        }

        /**
         * 进度查询task
         * */

    }, {
        key: "_progressTask",
        value: function _progressTask(fileId, callback) {
            var _this4 = this;

            var self = this;
            var progressTask = function progressTask() {
                var file = _this4.uploadProcessFiles.get(fileId);
                if (null != file && !file.paused) {
                    setTimeout(function () {
                        progressTask(fileId);
                    }, 2000);
                    self.progress(fileId, callback);
                }
            };
            // 两秒后开始查询进度
            setTimeout(function () {
                progressTask(fileId);
            }, 1000);
        }
    }, {
        key: "progress",


        /**
         * 进度查询
         * */
        value: function progress(fileId, callback) {
            var _this5 = this;

            var uploadFile = this.uploadProcessFiles.get(fileId);
            if (null == uploadFile) {
                return false;
            }
            if (uploadFile.progressCounts > 200) {
                callback(true, new _CubeError.CubeError(CubeStateCode.RequestTimeout, 'Upload file timeout'));
                this.cancelUpload(fileId);
                return false;
            }

            var postData = {
                token: this.engine.accToken,
                fileId: fileId
            };
            this._sendPostHttp(_FileAction.FileAction.ProgressFile, postData, function (err, data) {
                if (err || data.state.code != 200) {
                    _this5.uploadProcessFiles.remove(fileId);
                } else {
                    if (uploadFile.lastProgress == data.data.fileInfo.progress) {
                        uploadFile.progressCounts++;
                    };
                    uploadFile.lastProgress = data.data.fileInfo.progress;
                }
                callback(err, data);
            }, this.createHttp);
        }

        /**
         * 取消
         * */

    }, {
        key: "cancelUpload",
        value: function cancelUpload(fileId) {
            var _this6 = this;

            var fileData = this.uploadProcessFiles.get(fileId);
            //取消上传
            if (null != fileData && null != fileData.xhr) {
                fileData.xhr.abort();
            }

            var postData = {
                fileId: fileId,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.CancelFile, postData, function (err, data) {
                if (err || data.state.code != 200) {
                    fileData.paused = false;
                } else {
                    var progressInfo = data.data.fileInfo;
                    _this6.uploadProcessFiles.remove(progressInfo.fileId);
                    if (_this6.pendingFiles.length > 0) {
                        _this6.createUpload(_this6.pendingFiles[0].file, _this6.pendingFiles[0].callback);
                        _this6.pendingFiles = _this6.pendingFiles.slice(1);
                    }
                }
            }, this.createHttp);
        }
    }, {
        key: "_sendPostHttp",
        value: function _sendPostHttp(action, postData, callback) {
            var httpAddr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.queryHttp;

            var actionData = {};
            for (var key in postData) {
                if (null != postData[key]) {
                    actionData[key] = postData[key];
                }
            }

            NucleusAjax.newRequest(httpAddr + action).method("POST").content(actionData).send(function (response) {
                var status = response.getStatus();
                if (status === 200) {
                    var rd = void 0;
                    try {
                        rd = JSON.parse(response.getData());
                    } catch (e) {
                        rd = response.getData();
                    }
                    callback(false, rd);
                } else {
                    callback({
                        status: status
                    });
                }
            });
        }

        /**
         * 发送文件
         * @param action {String} - 接口地址
         * @param file {{name: {String}, value: {HTMLElement|Blob}} 需要发送的文件
         * @param data {Object} 需要发送的其它数据
         * @param callback {Function} 数据回调
         */

    }, {
        key: "_sendFile",
        value: function _sendFile(action, file, data, callback) {
            var httpAddr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.queryHttp;

            if (window.FormData) {
                var formData = new FormData();

                for (var item in data) {
                    formData.append(item, data[item]);
                }

                if (file.value instanceof HTMLElement) {
                    var f = file.value.files[0];
                    formData.append(file.name, f, f.name);
                } else if (file.value instanceof Blob) {
                    formData.append(file.name, file.value, file.value.name);
                }

                var xhr = new XMLHttpRequest();
                xhr.open("post", httpAddr + action, true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var rd = void 0;
                        try {
                            rd = JSON.parse(xhr.responseText);
                        } catch (e) {
                            rd = xhr.responseText;
                        }
                        callback(false, rd);
                    } else {
                        callback({
                            status: xhr.status
                        });
                    }
                };
                xhr.send(formData);
                return xhr;
            }
        }
    }]);

    return FileHttp;
}();

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
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
 * MessageListener.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 消息监听器。
 *
 * @interface MessageListener
 * @author Xu Jiangwei, Guan Yong
 */
var MessageListener = exports.MessageListener = function (_CubeListener) {
  _inherits(MessageListener, _CubeListener);

  function MessageListener() {
    _classCallCheck(this, MessageListener);

    return _possibleConstructorReturn(this, (MessageListener.__proto__ || Object.getPrototypeOf(MessageListener)).apply(this, arguments));
  }

  _createClass(MessageListener, [{
    key: "onMessageSent",


    /**
     * 消息发送成功时回调。
     *
     * @param {MessageEntity} message
     */
    value: function onMessageSent(messgae) {}

    /**
     * 上传进度
     *
     * @param {MessageEntity} message
     * @param {Number} processed
     * @param {Number} total
     */

  }, {
    key: "onMessageUploading",
    value: function onMessageUploading(message, progress, total) {}
  }, {
    key: "onMessageUploadCompleted",


    /**
     * 上传完成
     * */
    value: function onMessageUploadCompleted(message) {}
    /**
     * 下载进度
     *
     * @param {MessageEntity} message
     * @param {Number} processed
     * @param {Number} total
     */

  }, {
    key: "onMessageDownloading",
    value: function onMessageDownloading(message, progress, total) {}
  }, {
    key: "onMessageDownloadCompleted",


    /**
     * 消息数据下载完成
     *
     * @param {MessageEntity} message
     * */
    value: function onMessageDownloadCompleted(message) {}

    /**
     * 消息撤回成功时回调
     *
     * @param {MessageEntity} message
     * */

  }, {
    key: "onMessageRecalled",
    value: function onMessageRecalled(message) {}

    /**
     * 收到消息时的回调
     *
     * @param {MessageEntity} message
     * */

  }, {
    key: "onMessageReceived",
    value: function onMessageReceived(message) {}

    /**
     * 当消息被取消时回调
     *
     * @param {MessageEntity} message
     * */

  }, {
    key: "onMessageCanceled",
    value: function onMessageCanceled(message) {}

    /**
     * 消息暂停
     *
     * @param {MessageEntity} message
     * */

  }, {
    key: "onMessagePaused",
    value: function onMessagePaused(message) {}

    /**
     * 消息恢复
     *
     * @param {MessageEntity} message
     * */

  }, {
    key: "onMessageResumed",
    value: function onMessageResumed(message) {}

    /**
     * 开始同步消息
     */

  }, {
    key: "onMessageSyncBegin",
    value: function onMessageSyncBegin() {}

    /**
     * 同步未拉取消息
     *
     * @param {Array} messageMap cube对应消息实体数组
     */

  }, {
    key: "onMessagesSyncing",
    value: function onMessagesSyncing(messageMap) {}

    /**
     * 结束同步消息
     *
     */

  }, {
    key: "onMessageSyncEnd",
    value: function onMessageSyncEnd() {}

    /**
     * 当消息发生错误时被回调。
     *
     * @param {StateCode} errorCode - 错误码。
     * @param {MessageEntity} [message] - 发生错误时的消息对象。
     */

  }, {
    key: "onMessageFailed",
    value: function onMessageFailed(errorCode, message) {}
  }]);

  return MessageListener;
}(CubeListener);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HistoryMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageType = __webpack_require__(1);

var _MessageEntity2 = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HistoryMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 历史消息。
 *
 * @class HistoryMessage
 * @extends MessageEntity
 * @author Li Wenkai
 */
var HistoryMessage = exports.HistoryMessage = function (_MessageEntity) {
    _inherits(HistoryMessage, _MessageEntity);

    /**
     * @constructs HistoryMessage
     * @param {String} receiver - 指定消息对应的 Cube 号。z
     * @param {Array<String>} sns - 消息sn数组
     */
    function HistoryMessage(receiver, histories) {
        _classCallCheck(this, HistoryMessage);

        var _this = _possibleConstructorReturn(this, (HistoryMessage.__proto__ || Object.getPrototypeOf(HistoryMessage)).call(this, _MessageType.MessageType.History));

        _this.receiver = { "name": receiver };
        //this.sns = sns;
        _this.histories = histories;
        return _this;
    }

    /**
     * 返回历史消息内容。
     *
     * @returns {Array<String>} 历史消息内容。
     */


    _createClass(HistoryMessage, [{
        key: 'getMessages',
        value: function getMessages() {
            return this.sns;
        }
        /**
         * 设置历史消息内容。
         *
         * @messages {{Array<String>} 历史消息内容。
         */

    }, {
        key: 'setMessages',
        value: function setMessages(sns) {
            this.sns = sns;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.histories = this.histories;
            return json;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new HistoryMessage(json.receiver, json.sns);
            msg.receiver = json.to;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sn = json.sn;
            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.histories = json.histories;

            msg.pulled = json.pulled;

            msg.device = json.device;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return HistoryMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocationMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageType = __webpack_require__(1);

var _MessageEntity2 = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LocationMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 位置消息。
 *
 * @class LocationMessage
 * @extends MessageEntity
 * @author Li Wenkai
 */
var LocationMessage = exports.LocationMessage = function (_MessageEntity) {
    _inherits(LocationMessage, _MessageEntity);

    /**
     * @constructs HistoryMessage
     * @param {String} receiver - 指定消息对应的 Cube 号。z
     * @param {Number} lat - 纬度
     * @param {Number} lng - 经度
     * @param {String} address - 地理名字
     */
    function LocationMessage(receiver, lat, lng, address) {
        _classCallCheck(this, LocationMessage);

        var _this = _possibleConstructorReturn(this, (LocationMessage.__proto__ || Object.getPrototypeOf(LocationMessage)).call(this, _MessageType.MessageType.Location));

        _this.receiver = { "name": receiver };
        _this.lat = lat;
        _this.lng = lng;
        _this.address = address;
        return _this;
    }

    _createClass(LocationMessage, [{
        key: 'toJSON',
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.lat = this.lat;
            json.lng = this.lng;
            json.address = this.address;
            return json;
        }
    }, {
        key: 'setLat',
        value: function setLat(lat) {
            this.lat = lat;
        }
    }, {
        key: 'setLng',
        value: function setLng(lng) {
            this.lng = lng;
        }
    }, {
        key: 'setAddress',
        value: function setAddress(address) {
            this.address = address;
        }
    }, {
        key: 'getLat',
        value: function getLat() {
            return this.lat;
        }
    }, {
        key: 'getLng',
        value: function getLng() {
            return this.lng;
        }
    }, {
        key: 'getAddress',
        value: function getAddress() {
            return this.address;
        }
    }], [{
        key: 'parse',
        value: function parse(json) {
            // 创建消息实例
            var msg = new LocationMessage(json.receiver, json.lat, json.lng, json.address);
            msg.receiver.displayName = json.to.displayName;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sn = json.sn;
            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.histories = json.histories;

            msg.pulled = json.pulled;

            msg.device = json.device;
            // TODO
            msg.receipted = json.receipted;

            return msg;
        }
    }]);

    return LocationMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RichContentMessage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageType = __webpack_require__(1);

var _MessageEntity2 = __webpack_require__(2);

var _TextMessage = __webpack_require__(19);

var _ImageMessage = __webpack_require__(20);

var _MessageDirection = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * RichContentMessage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 富文本消息。
 *
 * @class RichContent
 * @extends MessageEntity
 * @author Li Wenkai
 */
var RichContentMessage = exports.RichContentMessage = function (_MessageEntity) {
    _inherits(RichContentMessage, _MessageEntity);

    /**
     * @constructs RichContent
     * @param {String} receiver - 指定消息对应的 Cube 号。
     */
    function RichContentMessage(receiver) {
        _classCallCheck(this, RichContentMessage);

        var _this = _possibleConstructorReturn(this, (RichContentMessage.__proto__ || Object.getPrototypeOf(RichContentMessage)).call(this, _MessageType.MessageType.RichContent));

        _this.receiver = { "name": receiver };
        _this.messages = new Array();
        _this.md5 = 0;
        return _this;
    }

    _createClass(RichContentMessage, [{
        key: "addMessage",
        value: function addMessage(message) {
            this.messages.push(message);
        }
    }, {
        key: "removeMessage",
        value: function removeMessage(message) {
            for (var i = 0; i < this.messages.length; i++) {
                if (this.messages[i] == message) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
    }, {
        key: "addText",
        value: function addText(text) {
            var msg = { type: 'text', content: text };
            this.messages.push(msg);
        }
    }, {
        key: "addImage",
        value: function addImage(image) {
            var self = this;
            this.md5++;

            var i = new _ImageMessage.ImageMessage(this.receiver.name);
            i.setFormFile(image, function () {
                self.md5--;
            });

            this.messages.push(i);
        }

        /**
         * 返回历史消息内容。
         *
         * @returns {Array<String>} 历史消息内容。
         */

    }, {
        key: "getMessages",
        value: function getMessages() {
            return this.sns;
        }

        /**
         * 设置历史消息内容。
         *
         * @messages {{Array<String>} 历史消息内容。
         */

    }, {
        key: "setMessages",
        value: function setMessages(sns) {
            this.sns = sns;
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);
            json.contents = this.messages;
            return json;
        }
        // 上传文件

    }], [{
        key: "upload",
        value: function upload(mix, content) {
            var self = this;
            var post = 0;

            var _loop = function _loop(i) {
                if (content.messages[i].type == 'image') {
                    post++;
                    if (content.md5 > 0) {
                        self.md5Time = setInterval(function () {
                            RichContentMessage.upload(mix, content);
                        }, 500);
                        return {
                            v: void 0
                        };
                    } else {
                        clearInterval(self.md5Time);
                        content.messages[i]._postData(content.messages[i], function (err, data) {
                            var image = data.data.file;

                            var param = {
                                type: 'image',
                                file: {
                                    url: image.url,
                                    width: image.width,
                                    height: image.height
                                }
                            };

                            post--;
                            content.messages.splice(i, 1, param);
                            if (post == 0) {
                                cube.getMessageService().sendMessage(mix, content);
                            }
                        });
                    }
                }
            };

            for (var i = 0; i < content.messages.length; i++) {
                var _ret = _loop(i);

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            }
        }
    }, {
        key: "parse",
        value: function parse(json) {
            // 创建消息实例
            var msg = new RichContentMessage(json.to.name);
            msg.receiver.displayName = json.to.displayName;

            msg.anonymous = json.anonymous;

            msg.sender = { "name": json.from.name, "displayName": json.from.displayName };

            if (undefined !== json.group) {
                msg.group = json.group;
                msg.groupName = json.group.name;
            }

            msg.sendTime = json.time.send;
            msg.receiveTime = json.time.receive;
            msg.timestamp = json.time.timestamp;

            msg.sn = json.sn;
            msg.pulled = json.pulled;

            msg.device = json.device;
            // TODO
            msg.receipted = json.receipted;

            msg.messages = json.contents;

            delete msg.md5;

            return msg;
        }
    }]);

    return RichContentMessage;
}(_MessageEntity2.MessageEntity);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * FileMessageStatus.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 文件消息状态枚举。
 *
 * @readonly
 * @enum {String}
 * @author Guan Yong
 */
var FileMessageStatus = exports.FileMessageStatus = {
    /** 初始化。 */
    None: "none",

    /** 下载中。 */
    Downloading: "downloading",

    /** 上传中。 */
    Uploading: "uploading",

    /** 成功。 */
    Succeed: "succeed",

    /** 失败。 */
    Failed: "failed"
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * MessageStatus.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 消息状态枚举。
 *
 * @readonly
 * @enum {String}
 * @author Guan Yong
 */
var MessageStatus = exports.MessageStatus = {
    /** 创建。 */
    CREATE: "create",

    /** 失败。 */
    FAIL: "fail",

    /** 处理中。 */
    INPROGRESS: "inprogress",

    /** 撤回。 */
    RECALL: "recall",

    /** 成功。 */
    SUCCESS: "success"
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 文件消息数据动作枚举。
 *
 * @readonly
 * @enum {String}
 * @author Xu Jiangwei, Guan Yong
 */
var FileAction = exports.FileAction = {
  PrepareUpload: '/message/file/broken/prepare/',
  StartUpload: '/message/file/broken/upload/',
  PauseUpload: '/message/file/broken/pause/',
  ResumeUpload: '/message/file/broken/resume/',
  GetProgress: '/message/file/broken/progress/',
  RichMessageUpload: '/richmessage/file/upload/'
};

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageServiceWorker = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MessageService2 = __webpack_require__(134);

var _MessageListener = __webpack_require__(50);

var _DBMessageService = __webpack_require__(135);

var _MessageStatus = __webpack_require__(71);

var _FileMessageStatus = __webpack_require__(70);

var _MessageType = __webpack_require__(1);

var _MessageEntity = __webpack_require__(2);

var _TextMessage = __webpack_require__(19);

var _FileMessage = __webpack_require__(6);

var _WhiteboardMessage = __webpack_require__(27);

var _CustomMessage = __webpack_require__(24);

var _CardMessage = __webpack_require__(23);

var _HistoryMessage = __webpack_require__(51);

var _LocationMessage = __webpack_require__(52);

var _RichContentMessage = __webpack_require__(53);

var _MessageDirection = __webpack_require__(21);

var _ImageMessage = __webpack_require__(20);

var _VoiceMessage = __webpack_require__(29);

var _VideoMessage = __webpack_require__(28);

var _FileAction = __webpack_require__(72);

var _MessageAction = __webpack_require__(141);

var _MessageQueue = __webpack_require__(139);

var _StateCode = __webpack_require__(3);

var _ReplyMessage = __webpack_require__(26);

var _ReceiptMessage = __webpack_require__(25);

var _FileHttp = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MessageServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 消息服务实现。
 */
var MessageServiceWorker = exports.MessageServiceWorker = function (_MessageService) {
    _inherits(MessageServiceWorker, _MessageService);

    function MessageServiceWorker(engine) {
        _classCallCheck(this, MessageServiceWorker);

        var _this = _possibleConstructorReturn(this, (MessageServiceWorker.__proto__ || Object.getPrototypeOf(MessageServiceWorker)).call(this, engine, _MessageListener.MessageListener, CELLET.Messaging));

        _this.msgQueue = new _MessageQueue.MessageQueue(_this, _this.delegate);
        _this.queryHistoryCallback = {};
        _this.meassgeCallback = [];
        _this.dbService = new _DBMessageService.DBMessageService(engine);
        _this.pendingMessageList = [];
        _this.recentService = {};

        _this.callback = new Map();

        // 消息内容大小限制
        _this._msgSizeThreshold = 2048;
        _this.lastTimestamp = 0;
        _this.session = null;
        _this.notifyTimer = 0;
        // 如果还有消息，则启动定时器进行请求
        _this.remainingTimer = 0;
        _this.lastSessionName = null;
        //拉取到的离线消息
        _this.syncMessageList = [];
        //标识是否真正拉取离线的数量
        _this.syncMessageNumber = 0;
        //当前获取到的消息sn
        _this.syncMessageSns = [];
        //同步拉取时的本地数据
        _this.syncLocalData = [];
        //查询历史消息的本地数据
        _this.historyLocalData = {};
        return _this;
    }

    /**
     * 文件上传执行方法
     * */


    _createClass(MessageServiceWorker, [{
        key: "_fileUpload",
        value: function _fileUpload(msg, callback) {
            var _this2 = this;

            this.fileHttp.upload(msg.file, function (err, data) {
                if (!err && data.state.code == 200) {
                    var uploadFile = data.data.fileInfo;
                    if (uploadFile.size == uploadFile.progress) {
                        msg.status = _MessageStatus.MessageStatus.SUCCESS;
                        msg.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed;
                        var sendFile = {
                            md5: msg.file.md5,
                            size: msg.file.size,
                            modified: Date.now(),
                            name: msg.file.name,
                            url: uploadFile.url,
                            duration: msg.file.duration,
                            key: uploadFile.fileId,
                            width: msg.file.width,
                            height: msg.file.height,
                            path: msg.file.path
                        };
                        msg.file = sendFile;
                        _this2.delegate.onMessageUploadCompleted(msg);
                        callback(msg);
                    } else {
                        var fileData = _this2.fileHttp.uploadProcessFiles.get(uploadFile.fileId);
                        fileData.file.progress = uploadFile.progress;
                        _this2.delegate.onMessagePaused(msg, uploadFile.progress, uploadFile.size);
                    }
                } else {
                    nucleus.getLogger().e('CubeConference#_fileUpload', 'Error of ' + data.state.code + ' ' + data.state.desc);
                    //this.delegate.onMessageFailed(CubeStateCode.UploadFailed, msg);
                }
            });
        }

        /**
         * 查询本地数据
         *
         * @param {Array} sns
         * @param {function} callback
         * */

    }, {
        key: "querMessagesBySns",
        value: function querMessagesBySns(sns, callback) {
            this.dbService.queryMessageBySns(sns, callback);
        }

        /**
         * 暂停
         * */

    }, {
        key: "pauseMessage",
        value: function pauseMessage(sn) {
            if (null == sn) {
                nucleus.getLogger().e('CubeMessage#pauseMessage', 'sn is null');
                return false;
            }
            var msg = this.msgQueue.read(sn);
            if (null != msg.file) {
                this.fileHttp.pause(msg.file.fileId);
            }
        }

        /**
         * 恢复
         * */

    }, {
        key: "resumeMessage",
        value: function resumeMessage(sn) {
            var _this3 = this;

            if (null == sn) {
                nucleus.getLogger().e('CubeMessage#resumeMessage', 'sn is null');
                return false;
            }
            var msg = this.msgQueue.read(sn);
            if (null != msg.file) {
                this.delegate.onMessageResumed(msg);
                this._fileUpload(msg);
                //开启进度查询
                setTimeout(function () {
                    _this3.fileHttp._progressTask(msg.file.fileId, function (err, data) {
                        if (!err && data.state.code == 200) {
                            var f = data.data.fileInfo;
                            f.progress = f.progress == f.size ? f.progress - 1 : f.progress;
                            _this3.delegate.onMessageUploading(msg, f.progress, f.size);
                        } else {
                            _this3.delegate.onMessageFailed(CubeStateCode.UploadFailed, msg);
                        }
                    });
                }, 200);
            }
        }

        /**
         * 获取图片的宽高
         * */

    }, {
        key: "_getWidthAndHeight",
        value: function _getWidthAndHeight(file, callback) {
            var reader = new FileReader();
            var obj = {};
            reader.onload = function (e) {
                var data = e.target.result;
                //加载图片获取图片真实宽度和高度
                var image = new Image();
                image.onload = function () {
                    obj.width = image.width;
                    obj.height = image.height;
                    callback(obj);
                };
                image.src = data;
            };
            reader.readAsDataURL(file);
        }

        /**
         * 消息文件上传文件
         * 默认文件上传成功后调用消息发送的方法
         * */

    }, {
        key: "_upload",
        value: function _upload(msg) {
            var _this4 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (msg) {
                _this4._handleSendMessage(msg);
            };

            var file = msg.file;
            var formFile = msg.formFile;
            msg.fileOldName = file.name;
            file.name = Date.now() + file.name;

            //文件上传信息创建完成后回调，上传文件以及开启进度查询
            var createCallback = function createCallback(err, data) {
                if (err) {
                    _this4.delegate.onMessageFailed(CubeStateCode.UploadFailed, msg);
                    return;
                }
                if (data.state.code == 200) {
                    var fileInfo = data.data.fileInfo;
                    fileInfo.file = formFile;
                    fileInfo.customPostMethod = msg.customPostMethod;
                    fileInfo.name = msg.fileOldName;
                    //获得原本的文件属性
                    for (var item in file) {
                        if (null == fileInfo[item]) {
                            fileInfo[item] = file[item];
                        }
                    }

                    msg.file = fileInfo;
                    _this4._fileUpload(msg, callback);
                    msg.status = _MessageStatus.MessageStatus.INPROGRESS;
                    msg.fileStatus = _FileMessageStatus.FileMessageStatus.Uploading;
                    //开启进度查询
                    setTimeout(function () {
                        _this4.fileHttp._progressTask(fileInfo.fileId, function (err, data) {
                            if (!err && data.state.code == 200) {
                                var f = data.data.fileInfo;
                                f.progress = f.progress == f.size ? f.progress - 1 : f.progress;
                                _this4.delegate.onMessageUploading(msg, f.progress, f.size);
                            } else {
                                _this4.delegate.onMessageFailed(CubeStateCode.UploadFailed, msg);
                            }
                        });
                    }, 200);
                } else {
                    _this4.delegate.onMessageFailed(CubeStateCode.UploadFailed, msg);
                }
            };

            //图片消息图片计算宽高
            if (msg.type == _MessageType.MessageType.Image && null != msg.formFile) {
                this._getWidthAndHeight(msg.formFile, function (obj) {
                    file.width = obj.width;
                    file.height = obj.height;
                    _this4.fileHttp.createUpload(file, createCallback);
                });
                return;
            }
            //创建文件上传信息
            this.fileHttp.createUpload(file, createCallback);
        }

        /**
         * 发送消息。
         */

    }, {
        key: "sendMessage",
        value: function sendMessage(mix, content) {
            if (null == mix && null == content) {
                nucleus.getLogger().e('CubeMessage#sendMessage', 'parameter is null');
                return false;
            }
            if (typeof this.session.name !== 'string') {
                if (typeof content !== 'string') {
                    content.status = _MessageStatus.MessageStatus.FAIL;
                    if (content.fileStatus) {
                        content.fileStatus = _FileMessageStatus.FileMessageStatus.Failed;
                    }
                }
                return false;
            }

            // 直接消息
            var msg = mix;
            var time = Date.now();
            while (time <= this.lastTimestamp) {
                time += 1;
            }
            this.lastTimestamp = time;

            if (typeof mix === 'string') {
                msg = this._toTextMessage(mix, content);
                if (!msg) {
                    return false;
                }
            }
            // 设置发件人
            msg.sender = {
                "name": this.session.name,
                "displayName": this.session.displayName
            };

            msg.sendTime = this.lastTimestamp;
            msg.timestamp = this.lastTimestamp;
            msg.fromDevice = this.engine.getDeviceInfo();
            msg.direction = _MessageDirection.MessageDirection.Sent;

            this.msgQueue.enqueue(msg);

            if (!this.engine.registered) {
                this.dbService.storageMessage(msg);
                //this.pendingMessageList.push(msg);
                return true;
            }

            // 富文本消息,先上传文件
            if (msg != null && msg.type === _MessageType.MessageType.RichContent) {
                var self = this;
                var md5Task = function md5Task(msg) {
                    if (msg.md5 > 0) {
                        setTimeout(function () {
                            md5Task(msg);
                        }, 500);
                    }
                    var fileNumber = 0;
                    for (var message in msg.messages) {
                        if (message.type != _MessageType.MessageType.Text) {
                            fileNumber++;
                            self._upload(msg, function (msg) {
                                fileNumber--;
                                if (fileNumber == 0) {
                                    self._handleSendMessage(msg);
                                }
                            });
                        }
                    }
                };
                return true;
            }

            //文件消息先发送文件
            if (msg instanceof _FileMessage.FileMessage && null == msg.file.url) {
                msg.fileStatus = _FileMessageStatus.FileMessageStatus.Uploading;
                msg.status = _MessageStatus.MessageStatus.INPROGRESS;
                this._upload(msg);
            } else {
                return this._handleSendMessage(msg);
            }
        }
    }, {
        key: "_handleSendMessage",
        value: function _handleSendMessage(msg) {
            if (!nucleus.talkService.isCalled(CELLET.Messaging)) {
                return false;
            }
            var param = {
                message: msg.toJSON(),
                token: this.engine.accToken
            };

            var isSend = this.engine.connect.send(CELLET.Messaging, CubeConst.ActionPush, param);
            this.dbService.storageMessage(msg);
            if (isSend) {
                msg.status = _MessageStatus.MessageStatus.INPROGRESS;
                if (msg.fileStatus) {
                    msg.fileStatus = _MessageStatus.MessageStatus.Uploading;
                }

                return true;
            } else {
                msg.status = _MessageStatus.MessageStatus.FAIL;
                if (msg.fileStatus) {
                    msg.fileStatus = _MessageStatus.MessageStatus.Failed;
                }
                this.msgQueue.dequeue(msg.sn);
                return false;
            }
        }

        /**
         * 重发消息
         * */

    }, {
        key: "reSendMessage",
        value: function reSendMessage(sn) {
            var _this5 = this;

            if (null == sn) {
                nucleus.getLogger().e('CubeMessage#reSendMessage', 'sn is null');
                return false;
            }
            var msg = this.msgQueue.read(sn);
            if (null != msg) {
                this.sendMessage(msg);
            } else {
                this.dbService.queryMessageBySns([sn], function (err, messageList) {
                    if (null != messageList) {
                        _this5.sendMessage(messageList[0]);
                    }
                });
            }
        }

        /**
         * 删除消息
         * */

    }, {
        key: "deleteMessage",
        value: function deleteMessage(sn) {
            if (null == sn) {
                nucleus.getLogger().e('CubeMessage#deleteMessage', 'sn is null');
                return false;
            }
            this.dbService.delMessageBySn(sn, function (err) {});
        }

        /**
         * 撤回消息。
         */

    }, {
        key: "recallMessage",
        value: function recallMessage(sn) {
            if (null == sn) {
                nucleus.getLogger().e('CubeMessage#recallMessage', 'sn is null');
                return false;
            }
            if (null == this.session || null == this.session.name) {
                return false;
            }

            return this.engine.connect.send(CELLET.Messaging, CubeConst.ActionRecall, { "sn": sn, "token": this.engine.accToken });
        }

        /**
         * 发送历史消息。
         */

    }, {
        key: "sendHistoryMessage",
        value: function sendHistoryMessage(destinations, sns) {
            var _this6 = this;

            if (null == sns || null == destinations) {
                nucleus.getLogger().e('CubeMessage#sendHistoryMessage', 'destinations or sns is null');
                return false;
            }
            var forwardSns = sns instanceof Array ? sns : [sns];
            var forwardCube = destinations instanceof Array ? destinations : [destinations.toString()];
            this.dbService.queryMessageBySns(forwardSns, function (err, messages) {
                if (!err) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = forwardCube[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _cube = _step.value;

                            var historyMessage = new _HistoryMessage.HistoryMessage(_cube, messages);
                            _this6.sendMessage(historyMessage);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            });
        }

        /**
         * 取消发送消息。
         */

    }, {
        key: "cancelMessage",
        value: function cancelMessage(message) {
            var _this7 = this;

            if (null == message) {
                nucleus.getLogger().e('CubeMessage#cancelMessage', 'message is null');
                return false;
            }
            var messageSn = (typeof message === "undefined" ? "undefined" : _typeof(message)) == 'object' ? message.sn : message;
            var msg = this.msgQueue.read(messageSn);
            if (msg) {
                if (null != msg.file && null != msg.file.fileId) {
                    this.fileHttp.cancelUpload(msg.file.fileId);
                }
                this.dbService.queryMessageBySns([messageSn], function (err, messages, dbMessages) {
                    if (!err && null != messages && messages.length > 0 && dbMessages[0].status == _MessageStatus.MessageStatus.CREATE) {
                        messages[0].status = _MessageStatus.MessageStatus.FAIL;
                        _this7.dbService.storageMessage(messages[0]);
                    }
                });
                this.msgQueue.dequeue(messageSn);
                this.delegate.onMessageCanceled(msg);
                return true;
            }

            return false;
        }

        /**
         * 查询历史消息tcp方式
         * */

    }, {
        key: "queryHistoryMessage",
        value: function queryHistoryMessage(queryPage) {
            if (null == queryPage || (typeof queryPage === "undefined" ? "undefined" : _typeof(queryPage)) == 'object' && null == queryPage.cubeId) {
                nucleus.getLogger().e('CubeMessage#queryHistoryMessage', 'cubeId is null');
                return false;
            }
            var queryTime = new Date().getTime();
            //queryPage.cubeCallback = null == queryPage.cubeCallback ? ()=>{} : queryPage.cubeCallback;
            if ((typeof queryPage === "undefined" ? "undefined" : _typeof(queryPage)) == 'object' && typeof queryPage.cubeCallback == 'function') {
                this.queryHistoryCallback[queryTime] = queryPage.cubeCallback;
            }
            var sinceTimestamp = queryPage.sinceTimestamp || 0;
            this.historyLocalData[queryTime] = [];
            var param = {
                chatId: queryPage.cubeId || queryPage,
                since: sinceTimestamp,
                until: queryPage.untilTimestamp || queryTime,
                offset: queryPage.offset || 1,
                count: queryPage.conut || 10,
                timestamp: queryTime
            };
            this.engine.connect.send(CELLET.Messaging, CubeConst.ActionMessageHistorySns, param);
        }

        /**
         * 查询历史消息http方式
         * */

    }, {
        key: "queryHistoryMessageHttp",
        value: function queryHistoryMessageHttp(queryPage) {
            var _this8 = this;

            if (null == queryPage || (typeof queryPage === "undefined" ? "undefined" : _typeof(queryPage)) == 'object' && null == queryPage.cubeId) {
                nucleus.getLogger().e('CubeMessage#queryHistoryMessage', 'cubeId is null');
                return false;
            }
            queryPage.cubeCallback = null == queryPage.cubeCallback ? function () {} : queryPage.cubeCallback;
            var sinceTimestamp = queryPage.sinceTimestamp || 0;
            var self = this;

            this.dbService.getMessageByColumGT('sendTimestamp', sinceTimestamp, true, function (err, localData) {
                if (!err) {
                    var url = self._getHttpUrl(_MessageAction.MessageAction.MessageSync);
                    var param = {
                        chatId: queryPage.cubeId || queryPage,
                        since: sinceTimestamp,
                        until: queryPage.untilTimestamp || new Date().getTime(),
                        offset: queryPage.offset || 1,
                        count: queryPage.conut || 20,
                        token: _this8.engine.accToken,
                        syncType: "simple"
                    };
                    NucleusAjax.newRequest(url).method("POST").content(param).send(function (response) {
                        if (200 != response.status) {
                            queryPage.cubeCallback([]);
                            return;
                        }
                        var data = JSON.parse(response.data);
                        if (data.state.code == 200) {
                            var messages = data.data.messages;
                            var sns = self._getPullSn(localData, messages, false);
                            var hasSn = {};
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var m = _step2.value;

                                    hasSn[m.sn] = true;
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }

                            var callback = function callback(data) {
                                var messages = data ? data[cubeId] : [];
                                var localMessages = localData.filter(function (message) {
                                    return hasSn[message.sn];
                                });
                                queryPage.cubeCallback(localMessages.concat(messages));
                            };

                            self.syncMessageBySns(sns, callback);
                        } else {
                            queryPage.cubeCallback([]);
                        }
                    });
                }
            });
        }

        /**
         * 反序列化消息数据
         * */

    }, {
        key: "parseMessage",
        value: function parseMessage(json) {
            if (null == json || (typeof json === "undefined" ? "undefined" : _typeof(json)) != 'object') {
                nucleus.getLogger().e('CubeConference#parseMessage', 'Error of parameters');
            }
            var messageTypes = [_MessageType.MessageType.Text, _MessageType.MessageType.Custom, _MessageType.MessageType.File, _MessageType.MessageType.Image, _MessageType.MessageType.Voice, _MessageType.MessageType.Video, _MessageType.MessageType.Whiteboard, _MessageType.MessageType.Card, _MessageType.MessageType.History, _MessageType.MessageType.Location, _MessageType.MessageType.RichContent, _MessageType.MessageType.Reply, _MessageType.MessageType.Receipt];
            var messageObjs = [new _TextMessage.TextMessage(), new _CustomMessage.CustomMessage(), new _FileMessage.FileMessage(), new _ImageMessage.ImageMessage(), new _VoiceMessage.VoiceMessage(), new _VideoMessage.VideoMessage(), new _WhiteboardMessage.WhiteboardMessage(), new _CardMessage.CardMessage(), new _HistoryMessage.HistoryMessage(), new _LocationMessage.LocationMessage(), new _RichContentMessage.RichContentMessage(), new _ReplyMessage.ReplyMessage(), new _ReceiptMessage.ReceiptMessage()];
            var allMessage = this._createObj(messageTypes, messageObjs);
            if (null != allMessage[json.type]) {
                var messgaeEntity = allMessage[json.type];
                for (var item in json) {
                    if (messgaeEntity.hasOwnProperty(item)) {
                        messgaeEntity[item] = json[item];
                    }
                }
                return messgaeEntity;
            }
            return null;
        }

        /**
         * 根据键值数组创建对象
         * */

    }, {
        key: "_createObj",
        value: function _createObj(keyArr, valArr) {
            var data = {};
            for (var i = 0; i < keyArr.length; i++) {
                var key = keyArr[i];
                var val = valArr[i];
                data[key] = val;
            }
            return data;
        }

        /**
         * 同步消息结束后的处理，更新引擎状态，初始化同步的数组
         * */

    }, {
        key: "_endMessageSync",
        value: function _endMessageSync() {
            var _this9 = this;

            var task = function task() {
                setTimeout(function () {
                    if (_this9.syncMessageNumber > 0) {
                        task();
                    } else {
                        //记录同步时间
                        // if(null != this.session && null != this.session.name){
                        //     localStorage.setItem('CubeMessageSyncTime_' + this.session.name,Date.now());
                        // }
                        //更改引擎状态
                        _this9.engine.triggerCubeEngineState(CubeState.Ready);
                        nucleus.getLogger().d('CubeMessageService', 'end Message Sync');
                        _this9.syncLocalData = [];
                        _this9.delegate.onMessageSyncEnd();
                    }
                }, 300);
            };
            task();
        }

        /**
         * tcp请求同步数据
         * */

    }, {
        key: "_sendSyncTcp",
        value: function _sendSyncTcp(offset, satrDate, endDate) {
            var count = 200;
            //satrDate = 0;
            var param = {
                since: satrDate,
                offset: offset,
                count: count,
                until: endDate
            };
            this.engine.connect.send(CELLET.Messaging, CubeConst.ActionMsgSync, param);
        }

        /**
         * 同步指令ACK收到后，剔除本地已有的消息，获取消息详情数据
         * */

    }, {
        key: "_processMsgSyncAck",
        value: function _processMsgSyncAck(dialect) {
            var _this10 = this;

            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            var messagePull = function messagePull() {
                _this10.syncMessageNumber++;
                _this10.engine.connect.send(CELLET.Messaging, CubeConst.ActionMsgPull, { sns: _this10.syncMessageSns });
                _this10.syncMessageSns = [];
            };
            if (state.code == 200) {
                if (data.pageCurrent == data.pageTotal) {
                    this._sendSyncTcp(data.page.offset + 1, data.page.since, data.page.until);
                }
                var pullSns = this._getPullSn(this.syncLocalData, data.sns);
                this.syncMessageSns = this.syncMessageSns.concat(pullSns);
                if (data.pageCurrent == 1 && data.page.offset == 1) {
                    messagePull();
                }
            } else {
                messagePull();
                this._endMessageSync();
            }
        }

        /**
         * 消息pullAck处理，查询历史消息和拉取离线消息均会调用pull指令，ack里做了区分
         * */

    }, {
        key: "_processMsgPullAck",
        value: function _processMsgPullAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");

            var queryTime = data && data.timestamp;
            if (state.code == 200) {
                //查询历史消息的回调处理，查询历史消息会带上本地时间戳来做回调，因此根据pullack是否有时间戳来区分
                if (null != queryTime) {
                    var messages = [];
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = data.messages[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var message = _step3.value;

                            messages.push(this._parseMessageJson(message));
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    var hasSn = {};
                    //可能会有多次pull,因此将数据缓存起来，等数据完全拉完再做回调
                    this.historyLocalData[queryTime] = this.historyLocalData[queryTime].concat(messages);
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = this.historyLocalData[queryTime][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _data = _step4.value;

                            hasSn[_data.sn] = true;
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    if (data.pageCurrent == data.pageTotal) {
                        this._historyCallback(queryTime);
                    }
                    return;
                }
                //离线消息拉取的回调处理
                this.syncMessageList = this.syncMessageList.concat(data.messages);
                if (data.pageCurrent == data.pageTotal) {
                    var messagesMap = this._toMessagesMap(this.syncMessageList);
                    this.delegate.onMessagesSyncing(messagesMap);
                    if (null != this.recentService) {
                        var messageList = [];
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = this.syncMessageList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var _message = _step5.value;

                                messageList.push(this._parseMessageJson(_message));
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }

                        this.recentService._saveRecents(messageList);
                    }
                    this.syncMessageList = [];
                    this.syncMessageNumber--;
                }
            } else {
                if (null != queryTime) {
                    this._historyCallback(queryTime);
                }
                if (this.syncMessageNumber > 0) {
                    this.syncMessageNumber--;
                }
            }
        }

        /**
         * 历史消息查询指令ACK, 主要是剔除本地已有数据，然后拉取消息详细数据
         * */

    }, {
        key: "_processMessageHistorySnsAck",
        value: function _processMessageHistorySnsAck(dialect) {
            var _this11 = this;

            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code != 200) {
                //queryPage.cubeCallback([]);
                this._historyCallback(data.timestamp);
                return;
            }
            var querySns = data.sns.map(function (message) {
                return message.sn;
            });
            this.dbService.queryMessageBySns(querySns, function (err, localData) {
                if (err) {
                    _this11._historyCallback(data.timestamp);
                    return;
                }
                localData = localData == null ? [] : localData;
                var messages = data.sns;
                var sns = _this11._getPullSn(localData, messages, false, false);
                var hasSn = {};
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = messages[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var m = _step6.value;

                        hasSn[m.sn] = true;
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                var localMessages = localData.filter(function (message) {
                    return hasSn[message.sn];
                });
                _this11.historyLocalData[data.timestamp] = localMessages;
                if (sns.length > 0) {
                    _this11.engine.connect.send(CELLET.Messaging, CubeConst.ActionMsgPull, { timestamp: data.timestamp, sns: sns });
                    return;
                }
                _this11._historyCallback(data.timestamp);
            });
        }

        /**
         * 历史消息拉取完成后消息排序后回调上层传入的回调函数
         * */

    }, {
        key: "_historyCallback",
        value: function _historyCallback(time) {
            if (null != this.queryHistoryCallback[time]) {
                var sortData = this.historyLocalData[time].sort(function (a, b) {
                    return a.sendTime - b.sendTime;
                });
                this.queryHistoryCallback[time](sortData);
                delete this.queryHistoryCallback[time];
            }
            delete this.historyLocalData[time];
        }

        /**
         * 消息组装成按会话分组的形式,去重，存库
         * */

    }, {
        key: "_toMessagesMap",
        value: function _toMessagesMap(messages) {
            var key = void 0;
            var synsMessages = void 0;
            var messagesObj = {};
            //存储已有sn，用于去重
            var checkSns = [];
            for (var i = 0; i < messages.length; i++) {
                var msg = this._parseMessageJson(messages[i]);
                if (null != msg && !checkSns.includes(msg.sn)) {
                    // 未回ack, 移除队列
                    this.msgQueue.dequeue(messages[i].sn);
                    msg.status = messages[i].recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.SUCCESS;
                    this.dbService.storageMessage(msg);
                    key = this.engine.accName == msg.sender.name ? msg.receiver.name : msg.sender.name;
                    synsMessages = null == messagesObj[key] ? new Array() : messagesObj[key];
                    synsMessages.push(msg);
                    messagesObj[key] = synsMessages;
                    checkSns.push(msg.sn);
                }
            }
            return messagesObj;
        }

        /**
         * http请求同步数据
         * @param localData 本地发送时间大于offset的数据
         * @param offset 页面
         * @param satrDate 开始时间
         * @param endDate 结束时间
         * */

    }, {
        key: "_sendSyncHttp",
        value: function _sendSyncHttp(localData, offset, satrDate, endDate) {
            var _this12 = this;

            var self = this;
            var count = 200;
            var param = {
                since: satrDate,
                offset: offset,
                count: count,
                token: this.engine.accToken,
                syncType: "simple"
            };
            var url = this._getHttpUrl(_MessageAction.MessageAction.MessageSync);
            nucleus.getLogger().i('CubeMessageService', 'syncMessage Request begin ');
            var syncTask = function syncTask(count) {
                if (count >= 3) {
                    nucleus.getLogger().i('CubeMessageService', 'syncMessage Request TimeOut');
                    _this12.delegate.onMessageFailed(_StateCode.StateCode.SyncMessageTimeout);
                    return;
                }
                var success = false;
                var xhr = NucleusAjax.newRequest(url);
                xhr.method("POST").content(param).send(function (response) {
                    if (200 != response.status) {
                        return;
                    }
                    nucleus.getLogger().i('CubeMessageService', 'syncMessage Request end');
                    success = true;
                    var data = JSON.parse(response.data);
                    if (data.state.code == 200) {
                        var messages = data.data.messages;
                        var sns = self._getPullSn(localData, messages);
                        var callback = function callback(messagesObj) {
                            if (messagesObj) {
                                self.delegate.onMessagesSyncing(messagesObj);
                            }
                        };
                        if (messages.length < count) {
                            callback = function callback(messagesObj) {
                                if (messagesObj) {
                                    self.delegate.onMessagesSyncing(messagesObj);
                                }
                                self._endMessageSync();
                            };
                        } else {
                            self._sendSyncHttp(localData, offset + 1, satrDate, endDate);
                        }
                        self.syncMessageBySns(sns, callback);
                    } else if (data.state.code == 1113) {
                        self._endMessageSync();
                    }
                });
                setTimeout(function () {
                    if (!success) {
                        xhr._xmlhttp.abort();
                        syncTask(count + 1);
                    }
                }, 30000);
            };
            syncTask(0);
        }

        /**
         * 获得本地没有的消息sn,储存最大发送时间
         * @param isMarkTime 是否需要记录同步时间
         * @param isUpdatMessage 是否需要拉取有变化的消息
         * */

    }, {
        key: "_getPullSn",
        value: function _getPullSn(localData, serverData) {
            var isMarkTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var isUpdatMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            localData = localData == null ? [] : localData;
            var sns = this._getDifSn(localData, serverData);
            var times = [];
            if (isUpdatMessage) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = serverData[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var data = _step7.value;

                        times.push(data.timestamp);
                        if (data.updateTime > data.timestamp && !sns.includes(data.sn)) {
                            sns.push(data.sn);
                        }
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
            if (isMarkTime) {
                //记录同步时间
                if (null != this.session && null != this.session.name) {
                    var localTime = Number.parseInt(localStorage.getItem('CubeMessageSyncTime_' + this.session.name));
                    if (!Number.isNaN(localTime)) {
                        times.push(localTime);
                    }
                    var maxTime = Math.max.apply(null, times);
                    localStorage.setItem('CubeMessageSyncTime_' + this.session.name, maxTime);
                }
            }
            return sns;
        }

        /**
         *  获得本地没有的服务器数据sn集合
         *
         *  return {Array} sns
         * */

    }, {
        key: "_getDifSn",
        value: function _getDifSn(localData, serverData) {
            var serverSns = [];
            var localSns = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = serverData[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var serverSn = _step8.value;

                    serverSns.push(serverSn.sn);
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = localData[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var localSn = _step9.value;

                    localSns.push(localSn.sn);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            var sns = serverSns.filter(function (serverSn) {
                return !localSns.includes(serverSn);
            });
            return sns;
        }

        /**
         * 同步未拉取消息sns
         */

    }, {
        key: "syncMessage",
        value: function syncMessage(beginTimestamp) {
            var _this13 = this;

            if (null == beginTimestamp) {
                return false;
            }
            var self = this;

            this.delegate.onMessageSyncBegin();
            this.engine.triggerCubeEngineState(CubeState.Busy);
            beginTimestamp = Number.parseInt(beginTimestamp);
            this.dbService.getMessageByColumGT('sendTimestamp', beginTimestamp, true, function (err, data) {
                if (!err) {
                    _this13.syncLocalData = data;
                    self._sendSyncTcp(1, beginTimestamp);
                }
            });
        }

        /**
         * 存储消息
         * */

    }, {
        key: "saveMessage",
        value: function saveMessage(message) {
            if (null == message) {
                nucleus.getLogger().e('CubeConference#saveMessage', 'message is null');
                return false;
            }
            if (!message instanceof _MessageEntity.MessageEntity) {
                nucleus.getLogger().e('CubeConference#saveMessage', 'message is not CubeMessagEntity');
                return false;
            }
            this.dbService.storageMessage(message);
        }

        /**
         * 消息记录同步
         */

    }, {
        key: "syncMessages",
        value: function syncMessages() {
            if (null == this.session || null == this.session.name) {
                return false;
            }
            var nowTime = Date.now();
            //最远日期
            var maxInterval = 30 * 24 * 60 * 60 * 1000;
            var messageSyncTime = localStorage.getItem('CubeMessageSyncTime_' + this.session.name);
            console.log('这是从本地缓存拿到的时间', messageSyncTime);
            messageSyncTime = messageSyncTime == null ? 0 : messageSyncTime;
            messageSyncTime = Number.parseInt(messageSyncTime);
            if (nowTime - messageSyncTime > maxInterval) {
                messageSyncTime = nowTime - maxInterval;
            }
            this.syncMessage(messageSyncTime);
        }

        /**
         * 获得http接口
         * */

    }, {
        key: "_getHttpUrl",
        value: function _getHttpUrl(url) {
            // let p = this.utils.isSecure ? _CUBE_HTTPs_PORT : _CUBE_HTTP_PORT;
            //return p + '://' + '125.208.1.67' + ':' + '6060' + url;
            //return p + '://' + '192.168.1.31' + ':' + '7070' + url;
            //return p + '://' + '192.168.1.6' + ':' + '7070' + url;
            return _CUBE_HTTP_SERVICES + url;
        }
        /**
         *通过Http根据sns查询消息
         */

    }, {
        key: "syncMessageBySns",
        value: function syncMessageBySns(sns, callback) {
            var self = this;
            var url = this._getHttpUrl('/v3/message/pull');
            var param = {
                sns: JSON.stringify(sns),
                token: this.engine.accToken
            };
            nucleus.getLogger().i('CubeMessageService', 'syncMessageBySns Request begin ');
            NucleusAjax.newRequest(url).method("POST").content(param).send(function (response) {
                nucleus.getLogger().i('CubeMessageService', 'syncMessageBySns Request end');
                var data = JSON.parse(response.data);
                var messagesObj = {};
                if (data.state.code == 200) {
                    var messages = data.data;
                    var key = void 0;
                    var synsMessages = void 0;
                    //存储已有sn，用于去重
                    var checkSns = [];
                    for (var i = 0; i < messages.length; i++) {
                        var msg = self._parseMessageJson(messages[i]);
                        if (null != msg && !checkSns.includes(msg.sn)) {
                            // 未回ack, 移除队列
                            self.msgQueue.dequeue(messages[i].sn);
                            msg.status = messages[i].recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.SUCCESS;
                            self.dbService.storageMessage(msg);
                            key = self.engine.accName == msg.sender.name ? msg.receiver.name : msg.sender.name;
                            synsMessages = null == messagesObj[key] ? new Array() : messagesObj[key];
                            synsMessages.push(msg);
                            messagesObj[key] = synsMessages;
                            checkSns.push(msg.sn);
                        }
                    }
                } else {
                    messagesObj = false;
                }
                typeof callback == "function" ? callback(messagesObj) : '';
            });
        }

        /**
         * 查询置顶列表
         */

    }, {
        key: "queryTopConcats",
        value: function queryTopConcats() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

            var url = this._getHttpUrl('/recent/message/top/list/');
            var param = {
                tag: window.nucleus.tag,
                master: this.engine.accName,
                token: this.engine.accToken
            };
            NucleusAjax.newRequest(url).method("POST").content(param).send(function (response) {
                var data = JSON.parse(response.data);
                var concats = data.data.recents;
                if (data.state.code == 200) {
                    callback(concats);
                } else {
                    // callback(CubeStateCode.SetTopError)
                }
            });
        }

        /**
         * 消息置顶
         */

    }, {
        key: "setTop",
        value: function setTop(cube) {
            var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

            this.callback.set('setTopCallback', callback);
            var param = {
                "name": cube + '',
                "top": isTop ? 1 : 0
            };
            return this.engine.connect.send(CELLET.Messaging, CubeConst.ActionUpdateTop, param);
        }

        // /**
        //  * 回复消息
        //  * */
        // replyMessage(sn, reply){
        //     if (null == this.session || null == this.session.name || null == sn) {
        //         return false;
        //     }
        //     let self = this;
        //     //手动生成sn以返回给应用层
        //     let replySn = MessageEntity.generateSerialNumber();
        //     this.dbService.queryMessageBySns([sn], function (err, msgs) {
        //         if(err){
        //             nucleus.getLogger().e('SearchMessageBySns', 'ReplyMessage Search Message Error');
        //             return false;
        //         }
        //         let source = msgs[0];
        //         if(null == source){
        //             nucleus.getLogger().e('SearchMessageBySns', 'ReplyMessage Search Message Is Null');
        //             return false;
        //         }
        //         let receiver = null == source.group ? source.sender.name : source.group.name;
        //         reply = self._toTextMessage(receiver, reply);
        //         if(!reply){
        //             return false;
        //         }
        //         let msg = new ReplyMessage(receiver, reply, source);
        //         msg.group = null == reply.group ? source.group : reply.group;
        //         msg.sn = replySn;
        //         if(self.sendMessage(receiver, msg)){
        //             return msg;
        //         };
        //     })
        //     return replySn;
        // }

        /**
         * 通过sn查询数据
         * */

    }, {
        key: "queryMessageBySns",
        value: function queryMessageBySns(sns) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            var isArray = sns instanceof Array;
            var querySns = isArray ? sns : [sns];
            this.dbService.queryMessageBySns(querySns, function (err, data) {
                if (null == data) {
                    callback(data);
                    return;
                }
                var message = isArray ? data : data[0];
                callback(message);
            });
        }

        /**
         * 通过tcp方式拉取离线消息
         * */

    }, {
        key: "syncMessageTcp",
        value: function syncMessageTcp() {
            var param = {
                "chartId": this.engine.session.name,
                "since": 0,
                "count": 300
            };
            return this.engine.connect.send(CELLET.Messaging, CubeConst.ActionMsgSync, param);
        }
    }, {
        key: "onRegisterStateChanged",
        value: function onRegisterStateChanged(session) {
            var _this14 = this;

            var self = this;
            this.session = session;

            // 发送消息队列中的消息
            if (this.engine.registered) {
                this.dbService.startup();
                //文件上传接口
                this.fileHttp = new _FileHttp.FileHttp(this.engine);
                //最近会话
                this.recentService = cube.getRecentSessionService();
                if (null == this.lastSessionName || this.lastSessionName == this.session.name) {

                    // for (let i = 0; i < this.pendingMessageList.length; i++) {
                    //     let data = this.pendingMessageList[i];
                    //     this._handleSendMessage(data);
                    // }
                    var date = Date.now() - 3 * 60 * 1000;
                    this.dbService.getMessageByColumGT('sendTimestamp', date, true, function (err, messages, cubeDbMessages) {
                        if (!err) {
                            var _iteratorNormalCompletion10 = true;
                            var _didIteratorError10 = false;
                            var _iteratorError10 = undefined;

                            try {
                                for (var _iterator10 = cubeDbMessages[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                    var message = _step10.value;

                                    if (message.status == _MessageStatus.MessageStatus.CREATE) {
                                        var obj = JSON.parse(message.json);
                                        var messageObj = self._parseMessageJson(obj);
                                        _this14._handleSendMessage(messageObj);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError10 = true;
                                _iteratorError10 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                        _iterator10.return();
                                    }
                                } finally {
                                    if (_didIteratorError10) {
                                        throw _iteratorError10;
                                    }
                                }
                            }
                        }
                    });
                    //this.pendingMessageList = [];
                }
                this.lastSessionName = this.session.name;
                // 离线同步消息
                if (window.cube.config.autoSyncMsg) {
                    this.syncMessages();
                }
                this.dbService.queryMessageByColumn('status', _MessageStatus.MessageStatus.CREATE, function (err, data) {
                    if (err) {
                        return;
                    }
                    var _iteratorNormalCompletion11 = true;
                    var _didIteratorError11 = false;
                    var _iteratorError11 = undefined;

                    try {
                        for (var _iterator11 = data[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                            var message = _step11.value;

                            if (message.type == _MessageType.MessageType.Receipt) {
                                _this14._handleSendMessage(self.parseMessage(message));
                            }
                        }
                    } catch (err) {
                        _didIteratorError11 = true;
                        _iteratorError11 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                _iterator11.return();
                            }
                        } finally {
                            if (_didIteratorError11) {
                                throw _iteratorError11;
                            }
                        }
                    }
                });
            } else {
                //this.dbService.shutdown();
            }
        }
    }, {
        key: "onDialogue",
        value: function onDialogue(action, dialect) {
            switch (action) {
                case CubeConst.ActionPushAck:
                    {
                        this._processPushAck(dialect);
                        break;
                    }
                case CubeConst.ActionPushNotify:
                    {
                        this._processPushNotify(dialect);
                        break;
                    }
                case CubeConst.ActionPushSync:
                    {
                        this._processPushSync(dialect);
                        break;
                    }
                case CubeConst.ActionRecallAck:
                    {
                        this._processRecallAck(dialect);
                        break;
                    }
                case CubeConst.ActionRecallSync:
                    {
                        this._processRecallSync(dialect);
                        break;
                    }
                case CubeConst.ActionRecallNotify:
                    {
                        this._processRecallNotify(dialect);
                        break;
                    }
                case CubeConst.ActionUpdateTop:
                    {
                        this._processUpdateTop(dialect);
                        break;
                    }
                case CubeConst.ActionUpdateTopAck:
                    {
                        this._processUpdateTopAck(dialect);
                        break;
                    }
                case CubeConst.ActionMsgSyncAck:
                    {
                        this._processMsgSyncAck(dialect);
                        break;
                    }
                case CubeConst.ActionMsgPullAck:
                    {
                        this._processMsgPullAck(dialect);
                        break;
                    }
                case CubeConst.ActionMessageHistorySnsAck:
                    {
                        this._processMessageHistorySnsAck(dialect);
                        break;
                    }
                default:
                    break;
            }
        }

        //当发送回执消息时处理本地数据库

    }, {
        key: "_handleSendReceipt",
        value: function _handleSendReceipt(m) {
            var _this15 = this;

            if (null == m) {
                return false;
            }
            if (m.type == _MessageType.MessageType.Receipt) {
                this.dbService.queryMessageByColumn('receipted', false, function (err, data) {
                    var _iteratorNormalCompletion12 = true;
                    var _didIteratorError12 = false;
                    var _iteratorError12 = undefined;

                    try {
                        for (var _iterator12 = data[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                            var message = _step12.value;

                            var isGroup = null != m.group && message.sender.name != _this15.session.name && message.receiver.name == m.group.name;
                            var isFriend = message.sender.name == m.receiver.name && message.receiver.name == _this15.session.name;
                            if (isGroup || isFriend) {
                                message.receipted = true;
                                _this15.dbService.storageMessage(message);
                            }
                        }
                    } catch (err) {
                        _didIteratorError12 = true;
                        _iteratorError12 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                _iterator12.return();
                            }
                        } finally {
                            if (_didIteratorError12) {
                                throw _iteratorError12;
                            }
                        }
                    }
                });
            }
        }
    }, {
        key: "_processPushSync",
        value: function _processPushSync(dialect) {
            var data = dialect.getParamAsString("data");
            var m = this._parseMessageJson(data.message);
            //发送回执消息时更新之前的消息
            this._handleSendReceipt(m);
            this._updateRecent(m);
            this.delegate.onMessageSent(m);
        }
    }, {
        key: "_processPushAck",
        value: function _processPushAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (!data) {
                nucleus.getLogger().i('CubeMessageService nucleus dialect error', JSON.stringify(data));
            }
            if (state.code != 200 && state.code != 1112) {
                this.delegate.onMessageFailed(state.code);
                return;
            }

            var m = this._parseMessageJson(data.message);
            var msg = this.msgQueue.read(data.message.sn);

            if (state.code === 200) {
                if (msg) {
                    this.msgQueue.dequeue(msg.sn);
                    if (m.type == _MessageType.MessageType.File) {
                        m.file = msg.file = Object.assign(m.file, msg.file);
                    }
                    m.status = _MessageStatus.MessageStatus.SUCCESS;
                    // 回调消息已发送
                    this._updateRecent(m);
                    this.delegate.onMessageSent(m);
                    // 更新库消息
                    this.dbService.storageMessage(m);
                    //发送回执消息时更新之前的消息
                    this._handleSendReceipt(m);
                } else {
                    this.delegate.onMessageFailed(CubeStateCode.Declined, m);
                }
            } else if (state.code === 1112) {
                m.file.path = msg.file.path;
                m.status = _MessageStatus.MessageStatus.SUCCESS;
                m.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed;
                this._updateRecent(m);
                this.delegate.onMessageSent(m);
                this.msgQueue.dequeue(msg.sn);
                this.delegate.onMessageUploadCompleted(m);
                this.dbService.storageMessage(m);
            } else {
                if (msg) {
                    this.msgQueue.dequeue(msg.sn);
                }

                this.delegate.onMessageFailed(state.code, m);
            }
        }
    }, {
        key: "_processPushNotify",
        value: function _processPushNotify(dialect) {
            var _this16 = this;

            var data = dialect.getParamAsString("data");
            if (!data) {
                nucleus.getLogger().i('CubeMessageService nucleus dialect error', JSON.stringify(data));
            }
            var msg = this._parseMessageJson(data.message);
            if (null != msg) {
                msg.status = _MessageStatus.MessageStatus.SUCCESS;
                //收到回执消息时更新之前的消息
                if (msg.type == _MessageType.MessageType.Receipt) {
                    this.dbService.queryMessageByColumn('receipted', false, function (err, data) {
                        var genre = 'receiver';
                        if (null != msg.group) {
                            genre = 'group';
                        }
                        var _iteratorNormalCompletion13 = true;
                        var _didIteratorError13 = false;
                        var _iteratorError13 = undefined;

                        try {
                            for (var _iterator13 = data[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                var message = _step13.value;

                                if (message.sender.name == _this16.session.name && null != message[genre] && message[genre].name == msg[genre].name) {
                                    message.receipted = true;
                                    _this16.dbService.storageMessage(message);
                                }
                            }
                        } catch (err) {
                            _didIteratorError13 = true;
                            _iteratorError13 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                    _iterator13.return();
                                }
                            } finally {
                                if (_didIteratorError13) {
                                    throw _iteratorError13;
                                }
                            }
                        }
                    });
                }
                if (msg.type == _MessageType.MessageType.Text || msg.type == _MessageType.MessageType.Custom || msg.type == _MessageType.MessageType.Card) {
                    this._updateRecent(msg);
                    this.delegate.onMessageReceived(msg);
                    this.dbService.storageMessage(msg);
                } else {
                    msg.status = _MessageStatus.MessageStatus.INPROGRESS;
                    if (msg.type === _MessageType.MessageType.Whiteboard) {
                        if (undefined !== msg._fetchData) {
                            var self = this;
                            msg._fetchData(function (wm) {
                                wm.status = _MessageStatus.MessageStatus.SUCCESS;
                                self._updateRecent(wm);
                                self.delegate.onMessageReceived(wm);
                                self.dbService.storageMessage(wm);
                            }, function (wm, error) {
                                wm.status = _MessageStatus.MessageStatus.FAIL;
                                self.delegate.onMessageFailed(error, wm);
                            });
                        }
                    } else {
                        if (msg.fileStatus) {
                            if (msg.sender.name != this.session.name) {
                                msg.fileStatus = _FileMessageStatus.FileMessageStatus.None;
                            } else {
                                msg.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed;
                            }
                        }
                        this._updateRecent(msg);
                        this.delegate.onMessageReceived(msg);
                        this.dbService.storageMessage(msg);
                    }
                }
            }
        }
    }, {
        key: "_processRecallAck",
        value: function _processRecallAck(dialect) {
            var state = dialect.getParamAsString("state");
            if (state.code == 200) {
                var data = dialect.getParamAsString("data");
                // 将 JSON 转为实体对象
                var msg = this._parseMessageJson(data.message);
                if (null != msg) {
                    msg.status = _MessageStatus.MessageStatus.RECALL;
                    if (msg.fileStatus) {
                        msg.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed;
                    }
                    this.delegate.onMessageRecalled(msg);
                } else {
                    this.delegate.onMessageFailed(CubeStateCode.RecallError, msg);
                }
            } else {
                this.delegate.onMessageFailed(CubeStateCode.RecallError);
            }
        }
    }, {
        key: "_processRecallSync",
        value: function _processRecallSync(dialect) {
            var data = dialect.getParamAsString("data");
            var msg = this._parseMessageJson(data.message);
            this.delegate.onMessageRecalled(msg);
        }
    }, {
        key: "_processRecallNotify",
        value: function _processRecallNotify(dialect) {
            var data = dialect.getParamAsString("data");
            var msg = this._parseMessageJson(data.message);
            this.delegate.onMessageRecalled(msg);
        }
    }, {
        key: "_processUpdateTop",
        value: function _processUpdateTop(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (null != data) {
                this.delegate.onConcatTop(data);
            }
        }
    }, {
        key: "_processUpdateTopAck",
        value: function _processUpdateTopAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code == 200) {
                if (null != data) {
                    this.callback.get('setTopCallback')(data);
                }
            }
        }
    }, {
        key: "_parseMessageJson",
        value: function _parseMessageJson(json) {
            var msg = null;
            if (!json) {
                nucleus.getLogger().i('CubeMessageService _parseMessageJson json error', JSON.stringify(json));
            }
            if (json.type == _MessageType.MessageType.Text) {
                msg = _TextMessage.TextMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Image) {
                msg = _ImageMessage.ImageMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Voice) {
                msg = _VoiceMessage.VoiceMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Video) {
                msg = _VideoMessage.VideoMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Whiteboard) {
                msg = _WhiteboardMessage.WhiteboardMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.File) {
                msg = _FileMessage.FileMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Custom) {
                msg = _CustomMessage.CustomMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Card) {
                msg = _CardMessage.CardMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.History) {
                msg = _HistoryMessage.HistoryMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Location) {
                msg = _LocationMessage.LocationMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.RichContent) {
                msg = _RichContentMessage.RichContentMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Reply) {
                msg = _ReplyMessage.ReplyMessage.parse(json);
            } else if (json.type == _MessageType.MessageType.Receipt) {
                msg = _ReceiptMessage.ReceiptMessage.parse(json);
            } else {
                nucleus.getLogger().w("CubeMessageService", "Error message json format: " + JSON.stringify(json));
            }

            if (null != msg) {
                if (json.header) {
                    for (var key in json.header) {
                        msg.setHeader(key, json.header[key]);
                    }
                }
                msg.anonymous = json.anonymous;
                msg.direction = this.engine.accName == msg.sender.name ? _MessageDirection.MessageDirection.Sent : _MessageDirection.MessageDirection.Received;
            }
            return msg;
        }
    }, {
        key: "_toTextMessage",
        value: function _toTextMessage(mix, content) {
            if (typeof content === "string") {
                var msg = new _TextMessage.TextMessage(mix, content);

                if (msg.content.length > this._msgSizeThreshold) {
                    // 回调错误发生
                    this.delegate.onMessageFailed(CubeStateCode.ContentTooLong, msg);
                    return false;
                } else {
                    return msg;
                }
            } else if (content instanceof _MessageEntity.MessageEntity) {
                if (null != mix) {
                    content.receiver = { 'name': mix };
                }
                //如果直接传对象的话对对象进行深拷贝
                return this.parseMessage(content);
            } else {
                // 输入参数错误
                return false;
            }
        }

        /**
         * 更新最近会话列表
         * */

    }, {
        key: "_updateRecent",
        value: function _updateRecent(message) {
            if (null != this.recentService) {
                this.recentService._updateRecent(message);
            }
        }
    }]);

    return MessageServiceWorker;
}(_MessageService2.MessageService);

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MessageServiceWorker = __webpack_require__(88);

var _MessageListener = __webpack_require__(50);

var _ImageMessage = __webpack_require__(20);

var _VideoMessage = __webpack_require__(28);

var _VoiceMessage = __webpack_require__(29);

var _CardMessage = __webpack_require__(23);

var _CustomMessage = __webpack_require__(24);

var _FileMessage = __webpack_require__(6);

var _TextMessage = __webpack_require__(19);

var _ReplyMessage = __webpack_require__(26);

var _WhiteboardMessage = __webpack_require__(27);

var _HistoryMessage = __webpack_require__(51);

var _RichContentMessage = __webpack_require__(53);

var _LocationMessage = __webpack_require__(52);

var _MessageType = __webpack_require__(1);

var _ReceiptMessage = __webpack_require__(25);

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
  // 提供全局的接口类
  global.CubeMessageServiceWorker = _MessageServiceWorker.MessageServiceWorker;
  global.CubeMessageListener = _MessageListener.MessageListener;

  global.CubeImageMessage = _ImageMessage.ImageMessage;
  global.CubeVideoMessage = _VideoMessage.VideoMessage;
  global.CubeVoiceMessage = _VoiceMessage.VoiceMessage;
  global.CubeCardMessage = _CardMessage.CardMessage;
  global.CubeCustomMessage = _CustomMessage.CustomMessage;
  global.CubeFileMessage = _FileMessage.FileMessage;
  global.CubeTextMessage = _TextMessage.TextMessage;
  global.CubeReplyMessage = _ReplyMessage.ReplyMessage;
  global.CubeHistoryMessage = _HistoryMessage.HistoryMessage;
  global.CubeWhiteboardMessage = _WhiteboardMessage.WhiteboardMessage;
  global.CubeRichContentMessage = _RichContentMessage.RichContentMessage;
  global.CubeLocationMessage = _LocationMessage.LocationMessage;
  global.CubeReceiptMessage = _ReceiptMessage.ReceiptMessage;
  global.CubeMessageType = _MessageType.MessageType;
})(window);

/***/ }),
/* 134 */
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
 * MessageService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 消息服务接口。
 *
 * @interface MessageService
 * @author Xu Jiangwei, Guan Yong
 */
var MessageService = exports.MessageService = function (_CubeService) {
  _inherits(MessageService, _CubeService);

  function MessageService() {
    _classCallCheck(this, MessageService);

    return _possibleConstructorReturn(this, (MessageService.__proto__ || Object.getPrototypeOf(MessageService)).apply(this, arguments));
  }

  _createClass(MessageService, [{
    key: "sendMessage",

    /**
     * 发送消息。
     *
     * @param {String, MessageEntity, FileMessage} mix - 指定需要接收消息的 Cube 号，或者待发送的消息对象。
     * @param {String, MessageEntity, FileMessage} [content] - 指定消息内容。
     * @returns {boolean} 如果发送请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    value: function sendMessage(mix, content) {}

    /**
     * @param {Number} sn - 指定需要重发消息的SN, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * */

  }, {
    key: "reSendMessage",
    value: function reSendMessage(sn) {}

    /**
     * 转发消息。
     *
     * @param {Array.<String>} sns - 指定需要转发消息的SN数组, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * @param {Array.<String>} cubeIds - 指定消息转发目标数组。
     * @returns {boolean} 如果转发请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */

  }, {
    key: "sendHistoryMessage",
    value: function sendHistoryMessage(cubeIds, sns) {}

    /**
     * 撤回消息。
     *
     * @param {Number} sn - 指定需要撤回消息的SN, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * @returns {boolean} 如果撤回请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */

  }, {
    key: "recallMessage",
    value: function recallMessage(sn) {}

    /**
     * 取消发送消息。
     *
     * @param {MessageEntity} message - 指定需要取消发送的消息对象。
     * @returns {boolean} 如果取消请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */

  }, {
    key: "cancelMessage",
    value: function cancelMessage(message) {}

    /**
     * 暂停上传
     *
     * @param sn 暂停sn
     */

  }, {
    key: "pauseMessage",
    value: function pauseMessage(sn, callback) {}

    /**
     * 恢复
     *
     * @param sn
     * @TODO 验证中
     */

  }, {
    key: "resumeMessage",
    value: function resumeMessage(sn) {}

    /**
     * 回复消息
     *
     * @param {Number} sn 原始消息sn
     * @param {MessageEntity} 回复消息内容
     */

  }, {
    key: "replyMessage",
    value: function replyMessage(sn, reply) {}

    /**
     * 删除消息
     *
     * @param sn
     */

  }, {
    key: "deleteMessage",
    value: function deleteMessage(sn) {}

    /**
     * 查询历史消息
     *
     * @param {String} cubeId - 查询的cubeId
     * @param {Number} sinceTimestamp - 开始时间
     * @param {Number} untilTimestamp - 结束时间
     * @param {Number} offset - 开始页码
     * @param {Number} count - 每页条数
     * @param {function} cubeCallback
     * */

  }, {
    key: "queryHistoryMessage",
    value: function queryHistoryMessage(cubeId, sinceTimestamp, untilTimestamp, offset, conut, cubeCallback) {}

    /**
     * 反序列化消息数据
     *
     * @param {object} json
     * @return {MessageEntity}
     * */

  }, {
    key: "parseMessage",
    value: function parseMessage(json) {}

    /**
     *  存储消息
     *
     *  @param {MessageEntity} message
     * */

  }, {
    key: "saveMessage",
    value: function saveMessage(message) {}

    /**
     * 同步未拉取消息
     *
     * @TODO 验证中
     */

  }, {
    key: "syncMessages",
    value: function syncMessages() {}

    /************ 以下是2.X版本的方法 **********/
    /**
     * 消息置顶。
     *
     * @param {String} cube - 操作是否置顶cube号。
     * @param {Boolean} isTop - 是否置顶。
     * @returns {Function} 置顶操作成功函数。
     */

  }, {
    key: "setTop",
    value: function setTop(cube, isTop, callback) {}
  }]);

  return MessageService;
}(CubeService);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBMessageService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DBMessage = __webpack_require__(136);

var _DBSyncMessage = __webpack_require__(138);

var _DBReceiptMessage = __webpack_require__(137);

var _MessageType = __webpack_require__(1);

var _MessageDirection = __webpack_require__(21);

var _TextMessage = __webpack_require__(19);

var _FileMessage = __webpack_require__(6);

var _WhiteboardMessage = __webpack_require__(27);

var _ImageMessage = __webpack_require__(20);

var _VoiceMessage = __webpack_require__(29);

var _VideoMessage = __webpack_require__(28);

var _CardMessage = __webpack_require__(23);

var _CustomMessage = __webpack_require__(24);

var _ReplyMessage = __webpack_require__(26);

var _ReceiptMessage = __webpack_require__(25);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DBMessageService = exports.DBMessageService = function () {
    function DBMessageService(engine) {
        _classCallCheck(this, DBMessageService);

        this.engine = engine;
        this.dbm = null;
    }

    _createClass(DBMessageService, [{
        key: 'startup',
        value: function startup() {
            this.dbm = new CubeDBManager('CubeMessageDataBase_' + this.engine.accName);
            console.log('链接数据库');
            this.dbm.loadEntity(_DBMessage.CubeDBMessage);
            this.dbm.loadEntity(_DBSyncMessage.CubeDBSyncMessage);
            this.dbm.loadEntity(_DBReceiptMessage.CubeDBReceiptMessage);
            this.dbm.connect(function () {});
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            if (this.dbm) {
                this.dbm.disconnect(function () {});
            }
            this.dbm = null;
        }
    }, {
        key: 'storageMessage',
        value: function storageMessage(message) {
            var _this = this;

            if (!this.dbm) {
                setTimeout(function () {
                    _this.storageMessage(message);
                }, 500);
                return;
            }

            if (message.type == _MessageType.MessageType.Receipt) {
                // 排除回执消息
                return;
            }

            var json = message.toJSON();
            if (message.fileStatus) {
                json.fileStatus = message.fileStatus;
            }
            var entity = new _DBMessage.CubeDBMessage(message.sn, message.sn, JSON.stringify(message.getSender()), JSON.stringify(message.getReceiver()), message.group ? JSON.stringify(message.group) : null, message.type, message.timestamp, message.getStatus(), JSON.stringify(message.getFromDevice()), JSON.stringify(message.getReceivedDevices()), message.isReceipted() ? 1 : 0, message.anonymous ? 1 : 0, JSON.stringify(json));

            this.dbm.setEntity(entity, function (err) {});
        }
    }, {
        key: 'storageSyncMessage',
        value: function storageSyncMessage(msg, callback) {
            var _this2 = this;

            var self = this;
            if (!this.dbm) {
                setTimeout(function () {
                    _this2.storageSyncMessage(msg);
                }, 500);
                return;
            }
            this.querySyncMessage(function (err, ret) {
                var val = ret[0];
                if (val && val.offline) {
                    msg.offline = val.offline;
                }
                if (val && val.offlineAll) {
                    msg.offlineAll = val.offlineAll;
                }
                var entity = new _DBSyncMessage.CubeDBSyncMessage(msg.name, msg.name, null, null, msg.offline, msg.offlineAll);
                self.dbm.setEntity(entity, function (err) {
                    callback();
                });
            });
        }
    }, {
        key: 'storageReceiptMessage',
        value: function storageReceiptMessage(message) {
            var _this3 = this;

            if (!this.dbm) {
                setTimeout(function () {
                    _this3.storageReceiptMessage(message);
                }, 500);
                return;
            }
            this.queryReceiptMessageBySn(message.sn, function (message) {
                if (null == message) {
                    var json = message.toJSON();

                    var entity = new _DBReceiptMessage.CubeDBReceiptMessage(message.sn, json);
                    _this3.dbm.setEntity(entity, function (err) {});
                }
            });
        }
    }, {
        key: 'queryReceiptMessageBySn',
        value: function queryReceiptMessageBySn(sn, callback) {
            var sns = [sn];
            var entity = new _DBReceiptMessage.CubeDBReceiptMessage(sns);
            this.dbm.getEntitysByColumns(entity, "id", sns, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret && ret.length > 0) {
                        callback(false, ret[0]);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'storageOffline',
        value: function storageOffline(keyName, keyValue, callback) {
            var _this4 = this;

            var self = this;
            if (!this.dbm) {
                this.startup();
                this.storageOffline(keyName, keyValue);
                setTimeout(function () {
                    _this4.shutdown();
                }, 500);
                return;
            }
            this.querySyncMessage(function (err, ret) {
                var msg = ret[0];
                for (var name in msg) {
                    if (name == keyName) {
                        msg[keyName] = keyValue;
                    }
                }
                var entity = new _DBSyncMessage.CubeDBSyncMessage(msg.name, msg.name, msg.Messages, msg.syncTimestamp, msg.offline, msg.offlineAll);
                self.dbm.setEntity(entity, function (err) {
                    if (typeof callback == 'function') {
                        callback(err);
                    }
                });
            });
        }
    }, {
        key: 'querySyncMessage',
        value: function querySyncMessage(callback) {
            var _this5 = this;

            if (!this.dbm) {
                this.startup();
                this.querySyncMessage(callback);
                setTimeout(function () {
                    _this5.shutdown();
                }, 500);
                return;
            }
            var entity = new _DBSyncMessage.CubeDBSyncMessage();
            this.dbm.getEntitysByColumn(entity, 'name', this.engine.accName, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        callback(false, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryReceiptMessage',
        value: function queryReceiptMessage(callback) {
            var _this6 = this;

            if (!this.dbm) {
                this.startup();
                this.queryReceiptMessage(callback);
                setTimeout(function () {
                    _this6.shutdown();
                }, 500);
                return;
            }
            var entity = new _DBReceiptMessage.CubeDBReceiptMessage();
            this.dbm.getAllEntity(entity, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        callback(false, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryMessageBySns',
        value: function queryMessageBySns(sns, callback) {
            var _this7 = this;

            var entity = new _DBMessage.CubeDBMessage(sns);
            this.dbm.getEntitysByColumns(entity, "id", sns, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret && ret.length > 0) {
                        var messages = [];
                        for (var i = 0; i < ret.length; ++i) {
                            if (_this7._parseMessage(ret[i])) {
                                messages.push(_this7._parseMessage(ret[i]));
                            }
                        }
                        callback(false, messages, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryAllMessage',
        value: function queryAllMessage(callback) {
            var _this8 = this;

            var entity = new _DBMessage.CubeDBMessage();
            this.dbm.getAllEntity(entity, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        var messages = [];
                        for (var i = 0; i < ret.length; ++i) {
                            if (_this8._parseMessage(ret[i])) {
                                messages.push(_this8._parseMessage(ret[i]));
                            }
                        }

                        callback(false, messages);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryMessageByColumn',
        value: function queryMessageByColumn(columnName, columnValue, callback) {
            var _this9 = this;

            var entity = new _DBMessage.CubeDBMessage();
            this.dbm.getEntitysByColumn(entity, columnName, columnValue, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        var messages = [];
                        for (var i = 0; i < ret.length; ++i) {
                            if (_this9._parseMessage(ret[i])) {
                                messages.push(_this9._parseMessage(ret[i]));
                            }
                        }
                        callback(false, messages);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryMessageByManyColumn',
        value: function queryMessageByManyColumn(columnNames, columnValues, callback) {
            var _this10 = this;

            var entity = new _DBMessage.CubeDBMessage();
            this.dbm.getEntitysByManyColumn(entity, columnNames, columnValues, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        var messages = [];
                        for (var i = 0; i < ret.length; ++i) {
                            if (_this10._parseMessage(ret[i])) {
                                messages.push(_this10._parseMessage(ret[i]));
                            }
                        }
                        callback(false, messages);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'delMessageBySn',
        value: function delMessageBySn(sn, callback) {
            var sns = [sn];
            var entity = new _DBMessage.CubeDBMessage(sns);
            this.dbm.delEntitysByColumn(entity, "id", sns, function (err) {
                callback(err);
            });
        }
    }, {
        key: 'delReceiptMessageBySn',
        value: function delReceiptMessageBySn(sn, callback) {
            var sns = [sn];
            var entity = new _DBReceiptMessage.CubeDBReceiptMessage(sns);
            this.dbm.delEntitysByColumn(entity, "id", sns, function (err) {
                callback(err);
            });
        }
    }, {
        key: 'getMessageByColumGT',
        value: function getMessageByColumGT(columnName, columnValue, isSelf, callback) {
            var _this11 = this;

            var entity = new _DBMessage.CubeDBMessage();
            this.dbm.getEntityByColumnGT(entity, columnName, columnValue, isSelf, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret) {
                        var messages = [];
                        for (var i = 0; i < ret.length; ++i) {
                            if (_this11._parseMessage(ret[i])) {
                                messages.push(_this11._parseMessage(ret[i]));
                            }
                        }
                        callback(false, messages, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: '_parseMessage',
        value: function _parseMessage(ret) {
            var message = void 0;
            if (ret == undefined) {
                return false;
            }
            var receiver = ret.receiver ? JSON.parse(ret.receiver) : null;
            var sender = JSON.parse(ret.sender);
            var group = ret.groupInfo ? JSON.parse(ret.groupInfo) : null;
            var json = JSON.parse(ret.json);

            if (ret.type === _MessageType.MessageType.Text) {
                message = new _TextMessage.TextMessage(receiver.name, json.content);
            } else if (ret.type === _MessageType.MessageType.File) {
                message = new _FileMessage.FileMessage(receiver.name);
                message.file = json.file;
            } else if (ret.type === _MessageType.MessageType.Image) {
                message = new _ImageMessage.ImageMessage(receiver.name);
                message.file = json.file;
            } else if (ret.type === _MessageType.MessageType.Voice) {
                message = new _VoiceMessage.VoiceMessage(receiver.name);
                message.file = json.file;
            } else if (ret.type === _MessageType.MessageType.Video) {
                message = new _VideoMessage.VideoMessage(receiver.name);
                message.file = json.file;
            } else if (ret.type === _MessageType.MessageType.Whiteboard) {
                message = new _WhiteboardMessage.WhiteboardMessage(receiver.name);
                message.file = json.file;
            } else if (ret.type === _MessageType.MessageType.Card) {
                message = new _CardMessage.CardMessage(receiver.name, json.title, json.icon, json.content);
                message.file = json.file;
                message.cardContents = json.cardContents;
                message.url = json.url;
            } else if (ret.type === _MessageType.MessageType.Custom) {
                message = new _CustomMessage.CustomMessage(receiver.name);
                if (undefined !== json.header) {
                    for (var key in json.header) {
                        message.setHeader(key, json.header[key]);
                    }
                }
                if (undefined !== json.body) {
                    message.setBody(json.body);
                }
            } else if (ret.type === _MessageType.MessageType.Reply) {
                message = new _ReplyMessage.ReplyMessage(receiver.name, json.reply, json.source);
            } else if (ret.type === _MessageType.MessageType.Receipt) {
                message = new _ReceiptMessage.ReceiptMessage();
            }

            if (message) {
                message.sn = ret.sn;
                message.sender = sender;
                message.receiver = receiver;
                if (null !== group) {
                    message.group = group;
                    message.groupName = group.name;
                }

                message.sendTime = json.time.send;
                message.receiveTime = json.time.receive;
                message.timestamp = json.time.timestamp;
                message.traceless = json.traceless;
                message.status = ret.status;
                message.fromDevice = ret.fromDevice ? JSON.parse(ret.fromDevice) : "";
                message.receivedDevices = ret.receivedDevices ? JSON.parse(ret.receivedDevices) : "";
                message.direction = this.engine.accName === message.sender ? _MessageDirection.MessageDirection.Sent : _MessageDirection.MessageDirection.Received;
                message.receipted = ret.receipted === 1;
                message.anonymous = json.anonymous ? true : false;

                if (message.fileStatus) {
                    message.fileStatus = json.fileStatus;
                }
                return message;
            }
        }
    }]);

    return DBMessageService;
}();

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 消息持久化表。
 *
 * @class CubeDBEMessage
 * @author Guan Yong
 */
var CubeDBMessage = exports.CubeDBMessage = function (_CubeDBEntity) {
    _inherits(CubeDBMessage, _CubeDBEntity);

    function CubeDBMessage(id, sn, sender, receiver, groupInfo, type, sendTimestamp, status, fromDevice, receivedDevices, receipted, anonymous, json) {
        _classCallCheck(this, CubeDBMessage);

        var _this = _possibleConstructorReturn(this, (CubeDBMessage.__proto__ || Object.getPrototypeOf(CubeDBMessage)).call(this, id, 'CubeDBMessage'));

        _this.sn = sn;
        _this.sender = sender;
        _this.receiver = receiver;
        _this.groupInfo = groupInfo;
        _this.type = type;
        _this.sendTimestamp = sendTimestamp;
        _this.status = status;
        _this.fromDevice = fromDevice;
        _this.receivedDevices = receivedDevices;
        _this.json = json;
        _this.receipted = receipted;
        _this.anonymous = anonymous;
        return _this;
    }

    return CubeDBMessage;
}(CubeDBEntity);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 回执消息表。
 *
 * @class CubeDBEMessage
 * @author Guan Yong
 */
var CubeDBReceiptMessage = exports.CubeDBReceiptMessage = function (_CubeDBEntity) {
    _inherits(CubeDBReceiptMessage, _CubeDBEntity);

    function CubeDBReceiptMessage(id, message, name) {
        _classCallCheck(this, CubeDBReceiptMessage);

        var _this = _possibleConstructorReturn(this, (CubeDBReceiptMessage.__proto__ || Object.getPrototypeOf(CubeDBReceiptMessage)).call(this, id, 'CubeDBReceiptMessage'));

        _this.message = message;
        _this.name = name;
        return _this;
    }

    return CubeDBReceiptMessage;
}(CubeDBEntity);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 同步消息表。
 *
 * @class CubeDBEMessage
 * @author Guan Yong
 */
var CubeDBSyncMessage = exports.CubeDBSyncMessage = function (_CubeDBEntity) {
    _inherits(CubeDBSyncMessage, _CubeDBEntity);

    function CubeDBSyncMessage(id, name, Messages, syncTimestamp) {
        var offline = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var offlineAll = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

        _classCallCheck(this, CubeDBSyncMessage);

        var _this = _possibleConstructorReturn(this, (CubeDBSyncMessage.__proto__ || Object.getPrototypeOf(CubeDBSyncMessage)).call(this, id, 'CubeDBSyncMessage'));

        _this.Messages = Messages;
        _this.name = name;
        _this.syncTimestamp = syncTimestamp;
        _this.offline = offline;
        _this.offlineAll = offlineAll;
        return _this;
    }

    return CubeDBSyncMessage;
}(CubeDBEntity);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * MessageQueue.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

var MessageQueue = exports.MessageQueue = function () {
    function MessageQueue(worker, delegate) {
        _classCallCheck(this, MessageQueue);

        // 队列数据
        this.list = [];
        this.fileList = [];
        // 超时时间
        this.timeout = 180000;
        // 定时器
        this.tick = null;
        this.delegate = delegate;
        this.worker = worker;
    }

    _createClass(MessageQueue, [{
        key: "read",
        value: function read(sn) {
            var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // if (remove) {
            //     for (let i = 0; i < this.worker.pendingMessageList.length; i++) {
            //         let entity = this.worker.pendingMessageList[i];
            //         if (entity.sn === sn) {
            //             this.worker.pendingMessageList.splice(i, 1);
            //         }
            //     }
            // }

            for (var i = 0; i < this.list.length; i++) {
                var entity = this.list[i];
                if (entity.sn === sn) {
                    if (remove) {
                        this.list.splice(i, 1);
                    }
                    return entity;
                }
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.fileList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _entity = _step.value;

                    if (_entity.sn === sn) {
                        return _entity;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
    }, {
        key: "enqueue",
        value: function enqueue(entity) {
            var _this = this;

            if (entity._notifyAck) {
                // 如果是文件或图片消息, 则不验证
                this.fileList.push(entity);
            } else {
                var sn = entity.sn;
                this.list.push(entity);
                if (this.list.length <= 1) {
                    this.tick = setTimeout(function () {
                        _this.check(sn);
                    }, this.timeout);
                }
            }
        }
    }, {
        key: "dequeue",
        value: function dequeue(sn) {
            this.read(sn, true);

            if (this.list.length === 0) {
                clearTimeout(this.tick);
            }
        }
    }, {
        key: "check",
        value: function check(sn) {
            var _this2 = this;

            var msg = this.read(sn, true);
            if (msg) {
                this.delegate.onMessageFailed(CubeStateCode.RequestTimeout, msg);
            }

            if (this.list.length > 0) {
                var entity = this.list[0];
                var delay = this.timeout - (Date.now() - entity.sendTime);

                this.tick = setTimeout(function () {
                    _this2.check(entity.sn);
                }, delay > 0 ? delay : 0);
            }
        }
    }]);

    return MessageQueue;
}();

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (factory) {
  if (( false ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var glob;try {
      glob = window;
    } catch (e) {
      glob = self;
    }glob.SparkMD5 = factory();
  }
})(function (undefined) {
  "use strict";
  var add32 = function add32(a, b) {
    return a + b & 4294967295;
  },
      hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));return add32(a << s | a >>> 32 - s, b);
  }function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];a += (b & c | ~b & d) + k[0] - 680876936 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[1] - 389564586 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[2] + 606105819 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[3] - 1044525330 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[4] - 176418897 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[5] + 1200080426 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[6] - 1473231341 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[7] - 45705983 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[8] + 1770035416 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[9] - 1958414417 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[10] - 42063 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[11] - 1990404162 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & c | ~b & d) + k[12] + 1804603682 | 0;a = (a << 7 | a >>> 25) + b | 0;d += (a & b | ~a & c) + k[13] - 40341101 | 0;d = (d << 12 | d >>> 20) + a | 0;c += (d & a | ~d & b) + k[14] - 1502002290 | 0;c = (c << 17 | c >>> 15) + d | 0;b += (c & d | ~c & a) + k[15] + 1236535329 | 0;b = (b << 22 | b >>> 10) + c | 0;a += (b & d | c & ~d) + k[1] - 165796510 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[6] - 1069501632 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[11] + 643717713 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[0] - 373897302 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[5] - 701558691 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[10] + 38016083 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[15] - 660478335 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[4] - 405537848 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[9] + 568446438 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[14] - 1019803690 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[3] - 187363961 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[8] + 1163531501 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b & d | c & ~d) + k[13] - 1444681467 | 0;a = (a << 5 | a >>> 27) + b | 0;d += (a & c | b & ~c) + k[2] - 51403784 | 0;d = (d << 9 | d >>> 23) + a | 0;c += (d & b | a & ~b) + k[7] + 1735328473 | 0;c = (c << 14 | c >>> 18) + d | 0;b += (c & a | d & ~a) + k[12] - 1926607734 | 0;b = (b << 20 | b >>> 12) + c | 0;a += (b ^ c ^ d) + k[5] - 378558 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[8] - 2022574463 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[11] + 1839030562 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[14] - 35309556 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[1] - 1530992060 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[4] + 1272893353 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[7] - 155497632 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[10] - 1094730640 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[13] + 681279174 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[0] - 358537222 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[3] - 722521979 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[6] + 76029189 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (b ^ c ^ d) + k[9] - 640364487 | 0;a = (a << 4 | a >>> 28) + b | 0;d += (a ^ b ^ c) + k[12] - 421815835 | 0;d = (d << 11 | d >>> 21) + a | 0;c += (d ^ a ^ b) + k[15] + 530742520 | 0;c = (c << 16 | c >>> 16) + d | 0;b += (c ^ d ^ a) + k[2] - 995338651 | 0;b = (b << 23 | b >>> 9) + c | 0;a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;b = (b << 21 | b >>> 11) + c | 0;a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;a = (a << 6 | a >>> 26) + b | 0;d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;d = (d << 10 | d >>> 22) + a | 0;c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;c = (c << 15 | c >>> 17) + d | 0;b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;b = (b << 21 | b >>> 11) + c | 0;x[0] = a + x[0] | 0;x[1] = b + x[1] | 0;x[2] = c + x[2] | 0;x[3] = d + x[3] | 0;
  }function md5blk(s) {
    var md5blks = [],
        i;for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }return md5blks;
  }function md5blk_array(a) {
    var md5blks = [],
        i;for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }return md5blks;
  }function md51(s) {
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }s = s.substring(i - 64);length = s.length;tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(state, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = n * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(state, tail);return state;
  }function md51_array(a) {
    var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);length = a.length;tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(state, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = n * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(state, tail);return state;
  }function rhex(n) {
    var s = "",
        j;for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
    }return s;
  }function hex(x) {
    var i;for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }return x.join("");
  }if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
    add32 = function add32(x, y) {
      var lsw = (x & 65535) + (y & 65535),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);return msw << 16 | lsw & 65535;
    };
  }if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;if (val < 0) {
          return Math.max(val + length, 0);
        }return Math.min(val, length);
      }ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;if (to !== undefined) {
          end = clamp(to, length);
        }if (begin > end) {
          return new ArrayBuffer(0);
        }num = end - begin;target = new ArrayBuffer(num);targetArray = new Uint8Array(target);sourceArray = new Uint8Array(this, begin, num);targetArray.set(sourceArray);return target;
      };
    })();
  }function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }return str;
  }function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }return returnUInt8Array ? arr : buff;
  }function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);result.set(new Uint8Array(first));result.set(new Uint8Array(second), first.byteLength);return returnUInt8Array ? result : result.buffer;
  }function hexToBinaryString(hex) {
    var bytes = [],
        length = hex.length,
        x;for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }return String.fromCharCode.apply(String, bytes);
  }function SparkMD5() {
    this.reset();
  }SparkMD5.prototype.append = function (str) {
    this.appendBinary(toUtf8(str));return this;
  };SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;this._length += contents.length;var length = this._buff.length,
        i;for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }this._buff = this._buff.substring(i - 64);return this;
  };SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }this._finish(tail, length);ret = hex(this._hash);if (raw) {
      ret = hexToBinaryString(ret);
    }this.reset();return ret;
  };SparkMD5.prototype.reset = function () {
    this._buff = "";this._length = 0;this._hash = [1732584193, -271733879, -1732584194, 271733878];return this;
  };SparkMD5.prototype.getState = function () {
    return { buff: this._buff, length: this._length, hash: this._hash };
  };SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;this._length = state.length;this._hash = state.hash;return this;
  };SparkMD5.prototype.destroy = function () {
    delete this._hash;delete this._buff;delete this._length;
  };SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
        tmp,
        lo,
        hi;tail[i >> 2] |= 128 << (i % 4 << 3);if (i > 55) {
      md5cycle(this._hash, tail);for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }tmp = this._length * 8;tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);lo = parseInt(tmp[2], 16);hi = parseInt(tmp[1], 16) || 0;tail[14] = lo;tail[15] = hi;md5cycle(this._hash, tail);
  };SparkMD5.hash = function (str, raw) {
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
        ret = hex(hash);return raw ? hexToBinaryString(ret) : ret;
  };SparkMD5.ArrayBuffer = function () {
    this.reset();
  };SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;this._length += arr.byteLength;for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);return this;
  };SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }this._finish(tail, length);ret = hex(this._hash);if (raw) {
      ret = hexToBinaryString(ret);
    }this.reset();return ret;
  };SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);this._length = 0;this._hash = [1732584193, -271733879, -1732584194, 271733878];return this;
  };SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this);state.buff = arrayBuffer2Utf8Str(state.buff);return state;
  };SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    state.buff = utf8Str2ArrayBuffer(state.buff, true);return SparkMD5.prototype.setState.call(this, state);
  };SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);return raw ? hexToBinaryString(ret) : ret;
  };return SparkMD5;
});

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 消息数据动作
 *
 * @readonly
 * @enum {String}
 * @author Huang Yuanliang
 */
var MessageAction = exports.MessageAction = {
  MessageSync: '/v3/message/sync'
};

/***/ })
/******/ ]);
//# sourceMappingURL=cube-message.js.map