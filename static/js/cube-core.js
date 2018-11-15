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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
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
/* 1 */,
/* 2 */,
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CELLET;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by GuanYong on 2017/4/26.
 */

/**
 * CELLET枚举
 *
 * @enum
 * @author GuanYong
 */
var CELLET = exports.CELLET = (_CELLET = {
    // v2 保留
    Responder: 'CubeResponder',
    Instruction: 'CubeInstruction',
    Whiteboard: 'CubeWhiteboard',
    RemoteDesktop: 'CubeRDServer',
    ShareDesktopService: 'ShareDesktopService',
    Live: 'CubeLive',

    // v3
    User: 'UserService',
    Setting: 'SettingService',
    Group: "GroupService",
    Conference: "ConferenceService",
    License: "LicenseService",
    Messaging: 'MessageService',
    Signaling: 'SignalingService',
    ShareDesktop: "ShareDesktopService"
}, _defineProperty(_CELLET, 'Whiteboard', 'WhiteboardService'), _defineProperty(_CELLET, 'InstructionService', 'InstructionService'), _defineProperty(_CELLET, 'RecentSession', 'RecentSession'), _CELLET);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * CubeConst.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 全局常量定义。
 *
 * @author Xu Jiangwei
 */
var CubeConst = exports.CubeConst = {
    // 授权指令
    ActionLicense: "license",
    ActionLicenseAck: "license-ack",
    ActionLicenseNotify: "license-notify",

    // 账户指令
    ActionLogin: "login",
    ActionLoginAck: "login-ack",
    ActionLoginSync: "login-sync",
    ActionLogout: "logout",
    ActionLogoutAck: "logout-ack",
    ActionQuery: "query",
    ActionQueryAck: "query-ack",
    ActionQueryDevice: "query-device",
    ActionQueryDeviceAck: "query-device-ack",
    ActionQueryByIdDevice: "query-device-by-id",
    ActionQueryByIdDeviceAck: "query-device-by-id-ack",
    ActionUpdate: "update",
    ActionUpdateAck: "update-ack",
    ActionUpdateSync: "update-sync",

    //////////////////////////////////////////////////////// 设置指令 ////////////////////////////////////////////////////////
    //更新通知配置
    ActionUpdateNotifyConfig: "update-notify-config",
    //更新免打扰配置
    ActionUpdateDisturbConfig: "update-disturb-config",
    //添加置顶
    ActionAddTop: "add-top",
    // 移除置顶
    ActionRemoveTop: "remove-top",
    // 添加静音
    ActionAddMute: "add-mute",
    // 移除静音
    ActionRemoveMute: "remove-mute",
    // 查询所有配置
    ActionQuerySetting: "query-setting",
    // 同步所有配置
    ActionSyncSetting: "sync-setting",
    // 更新设备token
    ActionUpdateDeviceToken: "update-device-token",

    //////////////////////////////////////////////////////// 群组指令 ////////////////////////////////////////////////////////
    // 创建群组
    ActionCreateGroup: "create-group",
    ActionCreateGroupAck: "create-group-ack",
    ActionCreateGroupSync: "create-group-sync",
    ActionCreateGroupNotify: "create-group-notify",
    // 销毁群组
    ActionDestroyGroup: "destroy-group",
    ActionDestroyGroupAck: "destroy-group-ack",
    ActionDestroyGroupSync: "destroy-group-sync",
    ActionDestroyGroupNotify: "destroy-group-notify",
    // 添加群成员
    ActionAddMember: "add-group-member",
    ActionAddMemberAck: "add-group-member-ack",
    ActionAddMemberSync: "add-group-member-sync",
    ActionAddMemberNotify: "add-group-member-notify",
    // 移除群成员
    ActionRemoveMember: "remove-group-member",
    ActionRemoveGroupMemberAck: "remove-group-member-ack",
    ActionRemoveGroupMemberSync: "remove-group-member-sync",
    ActionRemoveGroupMemberNotify: "remove-group-member-notify",
    // 退出群组
    ActionQuitGroup: "quit-group",
    ActionQuitGroupAck: "quit-group-ack",
    ActionQuitGroupSync: "quit-group-sync",
    ActionQuitGroupNotify: "quit-group-notify",
    // 查询群组
    ActionQueryGroups: "query-groups",
    ActionQueryGroupsAck: "query-groups-ack",
    ActionQueryGroupsSync: "query-groups-sync",
    ActionQueryGroupsNotify: "query-groups-notify",
    // 添加群组管理员
    ActionAddMaster: "add-group-master",
    ActionAddMasterAck: "add-group-master-ack",
    ActionAddMasterSync: "add-group-master-sync",
    ActionAddMasterNotify: "add-group-master-notify",
    // 移除群组管理员
    ActionRemoveMaster: "remove-group-master",
    ActionRemoveMasterAck: "remove-group-master-ack",
    ActionRemoveMasterSync: "remove-group-master-sync",
    ActionRemoveMasterNotify: "remove-group-master-notify",
    // 更新群组信息
    ActionUpdateGroup: "update-group",
    ActionUpdateGroupAck: "update-group-ack",
    ActionUpdateGroupSync: "update-group-sync",
    ActionUpdateGroupNotify: "update-group-notify",
    // 邀请群成员
    ActionInviteGroupMember: "invite-group-member",
    ActionInviteGroupMemberAck: "invite-group-member-ack",
    ActionInviteGroupMemberSync: "invite-group-member-sync",
    ActionInviteGroupMemberNotify: "invite-group-member-notify",
    // 拒绝群组邀请
    AcitonRejectGroupInvite: "reject-group-invite",
    AcitonRejectGroupInviteAck: "reject-group-invite-ack",
    AcitonRejectGroupInviteSync: "reject-group-invite-sync",
    AcitonRejectGroupInviteNotify: "reject-group-invite-notify",
    // 接受群组邀请
    ActionAcceptGroupInvite: "accept-group-invite",
    ActionAcceptGroupInviteAck: "accept-group-invite-ack",
    ActionAcceptGroupInviteSync: "accept-group-invite-sync",
    ActionAcceptGroupInviteNotify: "accept-group-invite-notify",
    // 申请加入群组申请
    ActionApplyJoinGroup: "apply-join-group",
    ActionApplyJoinGroupAck: "apply-join-group-ack",
    ActionApplyJoinGroupSync: "apply-join-group-sync",
    ActionApplyJoinGroupNotify: "apply-join-group-notify",
    // 接受群组申请
    ActionAcceptApplyGroup: "accept-apply-group",
    ActionAcceptApplyGroupAck: "accept-apply-group-ack",
    ActionAcceptApplyGroupSync: "accept-apply-group-sync",
    ActionAcceptApplyGroupNotify: "accept-apply-group-notify",
    // 拒绝群组申请
    ActionRejectApplyGroup: "reject-apply-group",
    ActionRejectApplyGroupAck: "reject-apply-group-ack",
    ActionRejectApplyGroupSync: "reject-apply-group-sync",
    ActionRejectApplyGroupNotify: "reject-apply-group-notify",

    //消息指令
    ActionPush: "push",
    ActionPushAck: "push-ack",
    ActionPushSync: "push-sync",
    ActionPushNotify: "push-notify",
    ActionPull: "pull",
    ActionPullAck: "pull-ack",
    ActionNotify: "notify",
    ActionRecall: "recall",
    ActionRecallAck: "recall-ack",
    ActionRecallSync: "recall-sync",
    ActionRecallNotify: "recall-notify",
    ActionReceipt: "receipt",
    ActionReceiptAck: "receipt-ack",
    ActionReceiptAll: "receipt-all",
    ActionReceiptAllAck: "receipt-all-ack",
    ActionReceiptOffline: "receipt-offline",
    ActionReceiptOfflineAck: "receipt-offline-ack",
    ActionForward: "forward",
    ActionForwardAck: "forward-ack",
    ActionHistory: "history",
    ActionHistoryAck: "history-ack",
    ActionSearchMsg: "search-msg",
    ActionSearchMsgAck: "search-msg-ack",
    ActionSearchMsgs: "search-msgs",
    ActionSearchMsgsAck: "search-msgs-ack",
    ActionSync: "sync",
    ActionSyncAck: "sync-ack",
    ActionUpdateTop: "update-top",
    ActionUpdateTopAck: "update-top-ack",
    ActionMsgSync: "message-sync",
    ActionMsgSyncAck: "message-sync-ack",
    ActionMsgPull: "message-pull",
    ActionMsgPullAck: "message-pull-ack",
    ActionMessageHistorySns: "message-history-sns",
    ActionMessageHistorySnsAck: "message-history-sns-ack",

    //音视频
    ActionInvite: "invite",
    ActionInviteAck: "invite-ack",
    ActionInviteSync: "invite-sync",
    ActionInviteNotify: "invite-notify",
    ActionAnswer: "answer",
    ActionAnswerAck: "answer-ack",
    ActionAnswerSync: "answer-sync",
    ActionAnswerNotify: "answer-notify",
    ActionCancel: "cancel",
    ActionCancelAck: "cancel-ack",
    ActionCancelSync: "cancel-sync",
    ActionCancelNotify: "cancel-notify",
    ActionBye: "bye",
    ActionByeAck: "bye-ack",
    ActionByeSync: "bye-sync",
    ActionByeNotify: "bye-notify",
    ActionCandidate: "candidate",
    ActionCandidateAck: "candidate-ack",
    ActionCandidateNotify: "candidate-notify",
    ActionConsult: "consult",
    ActionConsultAck: "consult-ack",
    ActionConsultNotify: "consult-notify",
    ActionReply: "reply",
    ActionReplyAck: "reply-ack",
    ActionTryReInvite: "try-reinvite",
    ActionTryReInviteAck: "try-reinvite-ack",
    ActionReverseCall: "reverse-call",

    // 远程指令
    ActionShare: "share",
    ActionShareAck: "share-ack",
    ActionRevoke: "revoke",
    ActionRevokeAck: "revoke-ack",
    ActionVGCmd: "vg-cmd",
    ActionVGCmdAck: "vg-cmd-ack",
    ActionRestrain: "restrain",
    ActionRestrainAck: "restrain-ack",
    ActionQueryWB: "query-wb",
    ActionQueryWBAck: "query-wb-ack",
    ActionQueryShared: "query-shared",
    ActionQuerySharedAck: "query-shared-ack",
    ActionRejectWE: "reject-wb",
    ActionRejectWEAck: "reject-wb-ack",

    //白板指令
    ActionCreateWhiteboard: "create-whiteboard",
    ActionCreateWhiteboardAck: "create-whiteboard-ack",
    ActionCreateWhiteboardSync: "create-whiteboard-sync",
    ActionCreateWhiteboardNotify: "create-whiteboard-notify",
    ActionDestroyWhiteboard: "destroy-whiteboard",
    ActionDestroyWhiteboardAck: "destroy-whiteboard-ack",
    ActionDestroyWhiteboardSync: "destroy-whiteboard-sync",
    ActionDestroyWhiteboardNotify: "destroy-whiteboard-notify",
    ActionApplyjoinWhiteboard: "apply-join-whiteboard",
    ActionApplyjoinWhiteboardAck: "apply-join-whiteboard-ack",
    ActionApplyjoinWhiteboardSync: "apply-join-whiteboard-sync",
    ActionApplyjoinWhiteboardNotify: "apply-join-whiteboard-notify",
    ActionQuitWhiteboard: "quit-whiteboard",
    ActionQuitWhiteboardAck: "quit-whiteboard-ack",
    ActionQuitWhiteboardSync: "quit-whiteboard-sync",
    ActionQuitWhiteboardNotify: "quit-whiteboard-notify",
    ActionInviteWhiteboard: "invite-whiteboard",
    ActionInviteWhiteboardAck: "invite-whiteboard-ack",
    ActionInviteWhiteboardSync: "invite-whiteboard-sync",
    ActionInviteWhiteboardNotify: "invite-whiteboard-notify",
    ActionAcceptApplyWhiteboard: "accept-apply-whiteboard",
    ActionAcceptApplyWhiteboardAck: "accept-apply-whiteboard-ack",
    ActionAcceptApplyWhiteboardSync: "accept-apply-whiteboard-sync",
    ActionAcceptApplyWhiteboardNotify: "accept-apply-whiteboard-notify",
    ActionRejectApplyWhiteboard: "reject-apply-whiteboard",
    ActionRejectApplyWhiteboardAck: "reject-apply-whiteboard-ack",
    ActionRejectApplyWhiteboardSync: "reject-apply-whiteboard-sync",
    ActionRejectApplyWhiteboardNotify: "reject-apply-whiteboard-notify",
    ActionRejectWhiteboardInvite: "reject-whiteboard-invite",
    ActionRejectWhiteboardInviteAck: "reject-whiteboard-invite-ack",
    ActionRejectWhiteboardInviteSync: "reject-whiteboard-invite-sync",
    ActionRejectWhiteboardInviteNotify: "reject-whiteboard-invite-notify",
    ActionAcceptWhiteboardInvite: "accept-whiteboard-invite",
    ActionAcceptWhiteboardInviteAck: "accept-whiteboard-invite-ack",
    ActionAcceptWhiteboardInviteSync: "accept-whiteboard-invite-sync",
    ActionAcceptWhiteboardInviteNotify: "accept-whiteboard-invite-notify",
    ActionRestrainWhiteboard: "restrain-whiteboard",
    ActionRestrainWhiteboardAck: "restrain-whiteboard-ack",
    ActionRestrainWhiteboardSync: "restrain-whiteboard-sync",
    ActionRestrainWhiteboardNotify: "restrain-whiteboard-notify",
    ActionVgCmdWhiteboard: "vg-cmd-whiteboard",
    ActionVgCmdWhiteboardAck: "vg-cmd-whiteboard-ack",
    ActionVgCmdWhiteboardSync: "vg-cmd-whiteboard-sync",
    ActionVgCmdWhiteboardNotify: "vg-cmd-whiteboard-notify",
    ActionJoinWhiteboard: 'join-whiteboard',
    ActionJoinWhiteboardAck: 'join-whiteboard-ack',
    ActionJoinWhiteboardSync: 'join-whiteboard-sync',
    ActionJoinWhiteboardNotify: 'join-whiteboard-notify',

    // 会议指令
    ActionConference: "conference",
    ActionConferenceAck: "conference-ack",
    ActionQueryConference: "query-conference",
    ActionQueryConferenceAck: "query-conference-ack",
    ActionQueryAllConference: "query-all-conference",
    ActionQueryAllConferenceAck: "query-all-conference-ack",
    ActionApplyJoinConference: "apply-join-conference",
    ActionApplyJoinConferenceAck: "apply-join-conference-ack",
    ActionApplyJoinConferenceNotify: "apply-join-conference-notify",
    ActionApplyConference: "apply-conference",
    ActionApplyConferenceAck: "apply-conference-ack",
    ActionCloseConference: "close-conference",
    ActionCloseConferenceAck: "close-conference-ack",
    ActionRejectConference: "reject-conference",
    ActionRejectConferenceAck: "reject-conference-ack",
    ActionInviteConference: "invite-conference",
    ActionInviteConferenceAck: "invite-conference-ack",
    ActionTryReInviteConference: "try-reinvite-conference",
    ActionTryReInviteConferenceAck: "try-reinvite-conference-ack",
    ActionCreateConference: "create-conference",
    ActionCreateConferenceAck: "create-conference-ack",
    ActionCreateConferenceNotify: "create-conference-notify",
    ActionCreateConferenceSync: "create-conference-sync",
    ActionDestroyConference: "destroy-conference",
    ActionDestroyConferenceAck: "destroy-conference-ack",
    ActionDestroyConferenceNotify: "destroy-conference-notify",
    ActionDestroyConferenceSync: "destroy-conference-sync",
    ActionInviteConferenceMember: "invite-conference-member",
    ActionInviteConferenceMemberAck: "invite-conference-member-ack",
    ActionInviteConferenceMemberNotify: "invite-conference-member-notify",
    ActionInviteConferenceMemberSync: "invite-conference-member-sync",
    ActionRejectConferenceInvite: "reject-conference-invite",
    ActionRejectConferenceInviteAck: "reject-conference-invite-ack",
    ActionRejectConferenceInviteNotify: "reject-conference-invite-notify",
    ActionRejectConferenceInviteSync: "reject-conference-invite-sync",
    ActionAcceptConferenceInvite: "accept-conference-invite",
    ActionAcceptConferenceInviteAck: "accept-conference-invite-ack",
    ActionAcceptConferenceInviteNotify: "accept-conference-invite-notify",
    ActionAcceptConferenceInviteSync: "accept-conference-invite-sync",
    ActionConferenceControl: "control-conference",
    ActionConferenceControlAck: "control-conference-ack",
    ActionConferenceControlSync: "control-conference-sync",
    ActionConferenceControlNotify: "control-conference-notify",
    ActionQuitConference: "quit-conference",
    ActionQuitConferenceAck: "quit-conference-ack",
    ActionQuitConferenceNotify: "quit-conference-notify",
    ActionQuitConferenceSync: "quit-conference-sync",
    ActionReinviteConference: "reinvite-conference",
    ActionReinviteConferenceAck: "reinvite-conference-ack",
    ActionCallConference: "call-conference",
    ActionCallConferenceAck: "call-conference-ack",
    ActionRejectApplyConference: "reject-apply-conference",
    ActionRejectApplyConferenceAck: "reject-apply-conference-ack",
    ActionRejectApplyConferenceNotify: "reject-apply-conference-notify",
    ActionAcceptApplyConference: "accept-apply-conference",
    ActionAcceptApplyConferenceAck: "accept-apply-conference-ack",
    ActionAcceptApplyConferenceNotify: "accept-apply-conference-notify",
    ActionAcceptApplyConferenceSync: "accept-apply-conference-sync",
    ActionJoinConference: "join-conference",
    ActionJoinConferenceAck: "join-conference-ack",
    ActionJoinConferenceSync: "join-conference-sync",
    ActionJoinConferenceNotify: "join-conference-notify",

    ActionAccept: "accept",
    ActionAcceptAck: "accept-ack",

    ActionTime: "time",
    ActionTimeAck: "time-ack",
    ActionRespond: "respond",
    ActionRespondAck: "respond-ack",
    ActionQueryRespond: "query-respond",
    ActionQueryRespondAck: "query-respond-ack",

    ActionGo: "go",
    ActionGoAck: "go-ack",
    ActionGoNotify: "go-notify",
    ActionPrepare: "prepare",
    ActionPrepareAck: "prepare-ack",
    ActionFeedback: "feedback",
    ActionFeedbackAck: "feedback-ack",
    ActionFeedbackNotify: "feedback-notify",
    ActionLast: "last",
    ActionLastAck: "last-ack",

    Unknown: "unknown"
};

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by GuanYong on 2017/4/25.
 */

var RegistrationState = exports.RegistrationState = {
    /** 引擎初始化时使用的状态，表示没有执行过注册流程。*/
    None: "None",

    /** 正在处理注册状态。*/
    Progress: "Progress",

    /** 注册成功状态。*/
    Ok: "Ok",

    /** 成功清理注册状态。*/
    Cleared: "Cleared",

    /** 注册失败。*/
    Failed: "Failed"
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by GuanYong on 2017/4/26.
 */

var Listener = exports.Listener = function () {
  function Listener() {
    _classCallCheck(this, Listener);
  }

  _createClass(Listener, [{
    key: "onFailed",
    value: function onFailed(error) {}
  }]);

  return Listener;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Service.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Delegate = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 引擎服务基类。一般的，所有引擎服务对象都从此对象继承
 *
 * @class Service
 * @author Guan Yong
 */
var Service = exports.Service = function () {
    /**
     * @constructs
     * @param {CubeEngine} engine 引擎实例
     * @param {Listener} [listener] 关联监听器静态实例
     * @param {CELLET} [cellet] 关联的引擎层数据通道名
     */
    function Service(engine, listener, cellet) {
        _classCallCheck(this, Service);

        this.engine = engine;
        this._cellet = cellet;
        this.utils = engine.getUtils();
        if (typeof listener === 'function') {
            this.delegate = new _Delegate.Delegate(listener);
        }
    }

    /**
     * 添加监听器
     * @param {Listener} listener 监听器实例
     */


    _createClass(Service, [{
        key: 'addListener',
        value: function addListener(listener) {
            this.delegate.addListener(listener);
        }

        /**
         * 移除监听器
         * @param {Listener} listener 监听器实例
         */

    }, {
        key: 'removeListener',
        value: function removeListener(listener) {
            this.delegate.removeListener(listener);
        }
    }, {
        key: 'startup',
        value: function startup() {
            if (typeof this._cellet === 'string') {
                this.engine.addCelletMember(this._cellet, this);
            }

            this.onStartup();
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            if (typeof this._cellet === 'string') {
                this.engine.removeCelletMember(this._cellet, this);
            }

            this.onShutdown();
        }
    }, {
        key: 'onStartup',
        value: function onStartup() {}
    }, {
        key: 'onShutdown',
        value: function onShutdown() {}
    }, {
        key: 'onConfigure',
        value: function onConfigure(config) {}

        /**
         * 当收到数据时回调
         * @param {String} action - 接口名
         * @param {ActionDialect} dialect - 数据对象
         */

    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {}

        /**
         * 注册状态变更
         * @param session {Session}
         */

    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {}
    }]);

    return Service;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Group.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 用户对象。
 *
 * @class Group
 * @author Li WenKai
 */
var User = exports.User = function () {
    function User(cubeId) {
        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            args[_key - 3] = arguments[_key];
        }

        var displayName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var avatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        _classCallCheck(this, User);

        //用户ID
        this.cubeId = cubeId;
        //用户显示昵称
        this.displayName = displayName;
        //用户头像
        this.avatar = avatar;

        this.name = cubeId;

        if (_typeof(arguments[0]) == 'object') {
            this.set(arguments[0]);
        }
    }

    _createClass(User, [{
        key: 'set',
        value: function set(args) {
            for (var item in this) {
                if (this.hasOwnProperty(item) && args.hasOwnProperty(item)) {
                    this[item] = args[item];
                } else {
                    delete this[item];
                }
            }
        }
    }]);

    return User;
}();

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 通用委派类。一般的，其他委派对象都从此对象进行继承。
 *
 * @class Delegate
 * @author Guan Yong, Xu Jiangwei
 */
var Delegate = exports.Delegate = function () {
    /**
     * @constructs
     * @param {Object} listenerInterface 监听器接口对象引用
     */
    function Delegate(listenerInterface) {
        _classCallCheck(this, Delegate);

        this.listeners = null;
        this.init(listenerInterface);
    }

    /**
     * 初始化委派管理
     * @param {Object} listenerInterface
     */


    _createClass(Delegate, [{
        key: 'init',
        value: function init(listenerInterface) {
            var _this = this;

            this.listeners = [];
            var methodNames = Object.getOwnPropertyNames(listenerInterface.prototype);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                var _loop = function _loop() {
                    var methodName = _step.value;

                    if (methodName === 'constructor') return 'continue';
                    _this[methodName] = function () {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        _this.did(methodName, args);
                    };
                };

                for (var _iterator = methodNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ret = _loop();

                    if (_ret === 'continue') continue;
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

        /**
         * 添加监听器
         * @param {Object} listener 指定待添加的监听器对象
         */

    }, {
        key: 'addListener',
        value: function addListener(listener) {
            this.listeners.push(listener);
        }

        /**
         * 移除监听器
         * @param {Object} listener 指定待移除的监听器对象
         */

    }, {
        key: 'removeListener',
        value: function removeListener(listener) {
            for (var i = 0; i < this.listeners.length; ++i) {
                var l = this.listeners[i];
                if (l === listener) {
                    this.listeners.splice(i, 1);
                    break;
                }
            }
        }

        /**
         * 执行监听器方法
         * @param {String} methodName
         * @param {Object} args
         */

    }, {
        key: 'did',
        value: function did(methodName, args) {
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener && typeof listener[methodName] === 'function') {
                    listener[methodName].apply(listener, args);
                }
            }
        }
    }]);

    return Delegate;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 创建群组配置
 * @class Group
 * @author Li WenKai
 */
var GroupConfig = exports.GroupConfig = function () {
    function GroupConfig(type, displayName) {
        var members = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var masters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        _classCallCheck(this, GroupConfig);

        this.type = type; //群组类型：会议，桌面共享，白板，直播
        this.displayName = displayName; //群组名称
        this.expired = 0; //群组有效期
        this.maxNumber = 0; //群组最大人数
        this.bindGroupId = ''; //群组绑定ID
        this.isOpen = true; //是否开放入群
        this.masters = masters; //群组管理员
        this.members = members; //群组成员
        this.invites = []; //邀请账号
        if (_typeof(arguments.length <= 4 ? undefined : arguments[4]) == 'object') {
            this.set(arguments.length <= 4 ? undefined : arguments[4]);
        }
    }

    _createClass(GroupConfig, [{
        key: 'set',
        value: function set(args) {
            for (var item in this) {
                if (this.hasOwnProperty(item) && args.hasOwnProperty(item)) {
                    this[item] = args[item];
                }
            }
        }
    }]);

    return GroupConfig;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Member = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _User2 = __webpack_require__(10);

var _MemberRole = __webpack_require__(17);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Member .js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 用户对象。
 *
 * @class Group
 * @author Li WenKai
 */
var Member = exports.Member = function (_User) {
    _inherits(Member, _User);

    function Member(cubeId, role) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        _classCallCheck(this, Member);

        //用户ID
        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, cubeId));

        _this.cubeId = cubeId;
        //群备注名称
        _this.remarkName = '';
        //群成员角色
        _this.role = role;
        //加入时间
        _this.joinTime = 0;
        //邀请时间
        _this.inviteTime = 0;

        if (_typeof(arguments[0]) == 'object') {
            _this.set(arguments[0]);
        }
        return _this;
    }

    return Member;
}(_User2.User);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * MemberRole .js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 角色枚举
 *
 * @enum
 * @author Li WenKai
 */
var MemberRole = exports.MemberRole = {
  /**
   * 群主
   */
  OWNER: "owner",
  /**
   * 管理员
   */
  MASTER: "master",
  /**
   * 群成员
   */
  MEMBER: "member",
  /**
   * 来宾
   */
  GUEST: "guest"
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * CubeConfig.js
 * Cube Engine
 *
 * Copyright (c) 2017-2018 Cube Team. All rights reserved.
 */

/**
 * 引擎配置信息对象。
 * <p>
 * 所有模块基础相关配置信息
 * </p>
 *
 * @class CubeConfig
 * @author Xu Jiangwei, Li Wenkai
 */
var CubeConfig = exports.CubeConfig = function () {
    function CubeConfig() {
        var appId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var appKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _classCallCheck(this, CubeConfig);

        //视频分辨率
        this.videoSize = {
            width: 320,
            height: 240
        };
        //启动时是否同步最近历史消息
        this.autoSyncMsg = true;
        //是否为debug
        this.debug = false;
        //应用密钥
        this.appkey = appKey;
        //应用ID
        this.appid = appId;
        //App数据，聊天，拍照等文件数据存放目录
        this.resourceDir = './assets';
        //音频通信格式Opus
        this.audioCodec = 'Opus';
        //视频通信格式VP8/VP9
        this.videoCodec = 'VP8';
        //授权服务器地址
        this.licenseServer = 'http://license.getcube.cn/auth/license/get';
        //是否自动同步离线消息
        this.autoSyncMsg = true;
        /**设备类型*/
        this.deviceName = null;

        this.frameRate = {
            min: 5,
            max: 15
        };
        this.bandwidth = {
            audio: 70,
            video: 512
        };
        this.socketEnabled = true;

        /*是否显示一对一遮罩*/
        this.showCallMask = true;

        if (_typeof(arguments.length <= 2 ? undefined : arguments[2]) == 'object') {
            this.set(arguments.length <= 2 ? undefined : arguments[2]);
        }
    }

    _createClass(CubeConfig, [{
        key: 'set',
        value: function set(args) {
            for (var item in this) {
                if (this.hasOwnProperty(item) && args.hasOwnProperty(item)) {
                    this[item] = args[item];
                }
            }
        }

        /**
         * 设置应用Id。
         *
         * @param {String} appId - appId。
         */

    }, {
        key: 'setAppId',
        value: function setAppId(appId) {
            this.appid = appId;
        }

        /**
         * 设置应用密钥。
         *
         * @param {String} appKey - appKey。
         */

    }, {
        key: 'setAppKey',
        value: function setAppKey(appKey) {
            this.appkey = appKey;
        }

        /**
         * 启动时是否同步最近历史消息。
         *
         * @param {Boolean} isSync - true false。
         */

    }, {
        key: 'setAutoSyncMsg',
        value: function setAutoSyncMsg(isSync) {
            this.autoSyncMsg = isSync;
        }

        /**
         * App数据，聊天，拍照等文件数据存放目录
         *
         * @param {String} dir - dir 。
         */

    }, {
        key: 'setResourceDir',
        value: function setResourceDir(dir) {
            this.resourceDir = dir;
        }

        /**
         * 是否为debug
         *
         * @param {Boolean} isDebug -
         */

    }, {
        key: 'setDebug',
        value: function setDebug(isDebug) {
            this.debug = isDebug;
        }

        /**
         * 视频分辨率
         *
         * @param {number} width  - 宽度。
         * @param {number} height - 高度。
         */

    }, {
        key: 'setVideoSize',
        value: function setVideoSize(width, height) {
            this.videoSize = { width: width, height: height };
        }

        /**
         * 音频通信格式Opus
         *
         * @param {String} audioCodec -  。
         */

    }, {
        key: 'setAudioCodec',
        value: function setAudioCodec(audioCodec) {
            this.audioCodec = audioCodec;
        }

        /**
         * 视频通信格式VP8/VP9
         *
         * @param {String} videoCodec - dir 。
         */

    }, {
        key: 'setVideoCodec',
        value: function setVideoCodec(videoCodec) {
            this.videoCodec = videoCodec;
        }

        /**
         * 授权服务器地址
         *
         * @param {String} licenseServer  。
         */

    }, {
        key: 'setLicenseServer',
        value: function setLicenseServer(licenseServer) {
            this.licenseServer = licenseServer;
        }

        /**
         * App数据，聊天，拍照等文件数据存放目录
         *
         * @param {String} min - dir 。
         * @param {String} max - dir 。
         */

    }, {
        key: 'setFrameRate',
        value: function setFrameRate(min, max) {
            this.frameRate = { min: min, max: max };
        }

        /**
         *App数据，聊天，拍照等文件数据存放目录
         *
         * @param {String} audio - dir 。
         * @param {String} video - dir 。
         */

    }, {
        key: 'setBandwidth',
        value: function setBandwidth(audio, video) {
            this.bandwidth = { audio: audio, video: video };
        }
    }, {
        key: 'getLicenseServer',
        value: function getLicenseServer() {
            return this.licenseServer;
        }
    }]);

    return CubeConfig;
}();

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * CodecType.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 视频通信格式枚举
 *
 * @enum
 * @author Zhou Chong
 */
var CodecType = exports.CodecType = {
  /**
   * VP8格式
   */
  VP8: "VP8",

  /**
   * VP9格式
   */
  VP9: "VP9",

  /**
   * H264格式
   */
  H264: "H264"
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * CubeState.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 引擎状态枚举
 *
 * @enum
 * @author Zhou Chong
 */
var CubeState = exports.CubeState = {
  /**启动引擎
   * 所有模块初始化完成后的状态
   */
  Start: "Start",

  /**
   * 暂停
   * 没有网络时,启动后无法工作
   */
  Pause: "Pause",

  /**
   * 就绪
   * 引擎注册成功，可以收发数据的状态
   * 引擎断网或者引擎无法收发数据时会回到Start状态
   */
  Ready: "Ready",
  /**
   * 工作中
   * 当有超过一条消息需要接受处理时，处理数据过程中处于此状态
   * 数据收发完成时回到Ready状态
   */
  Busy: "Busy",
  /**
   * 停止
   * 默认值或引擎shutdown之后的状态
   */
  Stop: "Stop"
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Session = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Session.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _RegistrationState = __webpack_require__(7);

var _CELLET = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 协作交互时通信会话对象。
 * <p>
 * 每个会话表示一个可被管理的端到端的状态描述。
 * 可以从会话对象中获取关于本次会话相关的信息。
 * </p>
 *
 * @class Session
 * @author Xu Jiangwei, Guan Yong
 */
var Session = exports.Session = function () {
    function Session() {
        _classCallCheck(this, Session);

        this.name = null;
        this.displayName = null;
        this.regState = _RegistrationState.RegistrationState.None;
        this.callPeer = null;
        this.callDirection = null;
        this.callState = null;
        this.latency = -1;
        this.callTime = 0;
    }

    /**
     * 返回己方（本地端）的注册名。
     *
     * @returns {String} 返回字符串形式的己方名称。
     */


    _createClass(Session, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /**
         * 返回己方（本地端）的显示名。
         *
         * @returns {String} 返回字符串形式的己方显示名称。
         */

    }, {
        key: 'getDisplayName',
        value: function getDisplayName() {
            return this.displayName;
        }

        /**
         * 返回会话是否已经注册。
         *
         * @returns {boolean} 如果已经注册则返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: 'hasRegistered',
        value: function hasRegistered() {
            return this.regState == _RegistrationState.RegistrationState.Ok;
        }

        /**
         * 返回己方的注册状态。
         *
         * @returns {RegistrationState} 返回注册状态枚举。
         */

    }, {
        key: 'getRegState',
        value: function getRegState() {
            return this.regState;
        }
    }, {
        key: 'setCallPeer',
        value: function setCallPeer(peer) {
            this.callPeer = peer;
        }

        /**
         * 返回音/视频通话对端对象。
         *
         * @returns {Peer} 返回正在使用的音/视频通话对端对象实例。
         */

    }, {
        key: 'getCallPeer',
        value: function getCallPeer() {
            return this.callPeer;
        }

        /**
         * 返回音/视频通话是呼叫方向。
         *
         * @returns {CallDirection} 返回正在使用的音/视频通话对端对象实例。
         */

    }, {
        key: 'getCallDirection',
        value: function getCallDirection() {
            return this.callDirection;
        }

        /**
         * 返回当前会话是否正在进行音/视频通话。
         *
         * @returns {boolean} 如果正在通话返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: 'isCalling',
        value: function isCalling() {
            //如果音视频模块未加载则直接返回false
            if (null == cube.getCallService()) {
                return false;
            }

            return this.callState == CubeSignalingState.Invite || this.callState == CubeSignalingState.Incall || this.callState == CubeSignalingState.Progress || this.callState == CubeSignalingState.Ringing;
        }

        /**
         * 返回当前呼叫是否是会议呼叫。
         *
         * @returns {boolean} 如果是会议呼叫返回 <code>true</code>，否则返回 <code>false</code> 。
         */

    }, {
        key: 'isConferenceCall',
        value: function isConferenceCall() {
            if (null != this.callPeer && null != this.callPeer.name) {
                if (this.callPeer.name.length <= 4) {
                    return true;
                }
            }

            return false;
        }

        /**
         * 返回当前网络的媒体访问行程指标。
         *
         * @returns {Number} 返回单位为毫秒的，网络数据通信的行程。该值越小表示网络延迟越小。
         */

    }, {
        key: 'getLatency',
        value: function getLatency() {
            if (this.isCalling()) {
                return this.latency;
            }

            return this.getMainLatency();
        }

        /**
         * 返回当前网络的主服务节点访问行程指标。
         *
         * @returns {Number} 返回单位为毫秒的，网络数据通信的行程。该值越小表示网络延迟越小。
         */

    }, {
        key: 'getMainLatency',
        value: function getMainLatency() {
            var sv = -1;
            if (nucleus.talkService.isCalled(_CELLET.CELLET.Signaling)) {
                sv = nucleus.talkService.getPingPongTime(_CELLET.CELLET.Signaling);
            }

            var mv = -1;
            if (nucleus.talkService.isCalled(_CELLET.CELLET.Messaging)) {
                mv = nucleus.talkService.getPingPongTime(_CELLET.CELLET.Messaging);
            }

            var wv = -1;
            if (nucleus.talkService.isCalled(_CELLET.CELLET.Whiteboard)) {
                wv = nucleus.talkService.getPingPongTime(_CELLET.CELLET.Whiteboard);
            }

            //Math.max(Math.max(sv, mv), wv);
            var c = 0;
            var sum = 0;
            if (sv > 0) {
                sum += sv;
                ++c;
            }
            if (mv > 0) {
                sum += mv;
                ++c;
            }
            if (wv > 0) {
                sum += wv;
                ++c;
            }
            return c > 0 ? parseInt(Math.round(sum / c)) : -1;
        }

        /**
         * 返回通话时间
         *
         * @returns {Number} 返回通话时间戳。
         * @memberof CubeSession
         * @instance
         */

    }, {
        key: 'getCallTime',
        value: function getCallTime() {
            return this.callTime;
        }
    }]);

    return Session;
}();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Group = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Group.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _GroupType = __webpack_require__(38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 群组对象。
 *
 * @class Group
 * @author Li WenKai
 */
var Group = exports.Group = function () {
    function Group() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _GroupType.GroupType.normal;
        var displayName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var masters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var members = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        _classCallCheck(this, Group);

        this.displayName = displayName;
        //群组类型：会议，桌面共享，白板，直播
        this.type = type;
        //是否开放入群
        this.isOpen = false;
        //群组管理员
        this.masters = masters;
        //群组成员
        this.members = members;
        //群组头像
        this.avatar = '';
        //绑定群组
        this.bindGroupId = null;
        //群组ID
        this.groupId = null;

        //群主创建者
        this.founder = null;
        //群主拥有者
        this.owner = null;
        //群组创建时间
        this.created = 0;
        //群组有效期
        this.expired = 0;
        //群组最大人数
        this.maxNumber = 1000;
        //邀请账号
        this.invites = [];
        //来宾账号
        this.guests = [];

        this.invitePeopleMap = new HashMap();

        if (_typeof(arguments[0]) == 'object') {
            this.set(arguments[0]);
        } else if (_typeof(arguments[1]) == 'object') {
            this.set(arguments[1]);
        }
    }

    _createClass(Group, [{
        key: 'set',
        value: function set(args) {
            for (var item in this) {
                if (this.hasOwnProperty(item) && args.hasOwnProperty(item)) {
                    this[item] = args[item];
                }
            }
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.groupId;
        }

        /**
         * 返回群组 ID 。群组 ID 唯一表示一个群组。
         *
         * @returns {String} 群组 ID 。
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.groupId;
        }

        /**
         * 返回群组的显示名称。
         *
         * @returns {String} 群组显示名。
         */

    }, {
        key: 'getDisplayName',
        value: function getDisplayName() {
            return this.displayName;
        }

        /**
         * 返回群组创建人。
         *
         * @returns {String} 群组创建人的 Cube 号。
         */

    }, {
        key: 'getFounder',
        value: function getFounder() {
            return this.founder;
        }

        /**
         * 返回群组创建的绝对时间。
         *
         * @returns {Number} 群组创建时的时间戳。
         */

    }, {
        key: 'getCreated',
        value: function getCreated() {
            return this.created;
        }

        /**
         * 返回群组的所有成员。
         *
         * @returns {Array} 群组内的所有成员的 Cube 号数组。
         */

    }, {
        key: 'getMembers',
        value: function getMembers() {
            return this.members;
        }

        /**
         * 返回群组的所有管理员。
         *
         * @returns {Array} 群组内的所有管理员的 Cube 号数组。
         */

    }, {
        key: 'getMasters',
        value: function getMasters() {
            return this.masters;
        }

        /**
         * 返回群组的所有来宾成员。
         *
         * @returns {Array} 群组内的所有来宾的 Cube 号数组。如果没有来宾成员则返回 <code>null</code> 。
         */

    }, {
        key: 'getGuests',
        value: function getGuests() {
            if (undefined === this.data.guests) {
                return null;
            }

            return this.guests;
        }

        /**
         * 返回群组是否是开放式群组。
         *
         * @returns {Boolean} 如果是开放群组返回 <code>true</code> 。
         */

    }, {
        key: 'isOpenGroup',
        value: function isOpenGroup() {
            return this.isOpen;
        }
    }]);

    return Group;
}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * GroupType.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 群组类型
 *
 * @enum
 * @author Li Wenkai
 */
var GroupType = exports.GroupType = {
  /**
   * 普通群组
   */
  normal: "normal",

  /**
   * 多人语音
   */
  VOICE_CALL: "voice-call",

  /**
   * 多人视频
   */
  VIDEO_CALL: "video-call",

  /**
   * 音频会议
   */
  VOICE_CONFERENCE: "voice-conference",

  /**
   * 视频会议
   */
  VIDEO_CONFERENCE: "video-conference",

  /**
   * 融屏会议
   */
  MUX_CONFERENCE: "mux-conference",

  /**
   * 思科语音会议
   */
  VOICE_CISCO_CONFERENCE: "voice-cisco-conference",

  /**
   * 思科视频会议
   */
  VIDEO_CISCO_CONFERENCE: "video-cisco-conference",

  /**
   * 共享桌面
   */
  SHARE_DESKTOP: "share_desktop",

  /**
   * 共享白板
   */
  SHARE_WB: "share_wb",

  /**
   * 直播间
   */
  LIVE: "live"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * NotifyConfig .js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 免打扰配置。
 *
 * @class NotifyConfig
 * @author Li WenKai
 */
var DisturbConfig = exports.DisturbConfig = function DisturbConfig() {
  var isNotDisturb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var endTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  _classCallCheck(this, DisturbConfig);

  //是否提醒
  this.isNotDisturb = isNotDisturb;
  //是否展示详情
  this.startTime = startTime.toString();
  //是否开启声音
  this.endTime = endTime.toString();
  //更新配置时间
  this.updateTime = 0;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * NotifyConfig .js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 通知配置对象。
 *
 * @class NotifyConfig
 * @author Li WenKai
 */
var NotifyConfig = exports.NotifyConfig = function NotifyConfig() {
    var isAlerts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var isDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isSound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isVibrate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, NotifyConfig);

    //是否提醒
    this.isAlerts = isAlerts;
    //是否展示详情
    this.isDetails = isDetails;
    //是否开启声音
    this.isSound = isSound;
    //震动
    this.isVibrate = isVibrate;
    //更新配置时间
    this.updateTime = 0;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 通用会话请求类
 *
 * @class CubeRequest
 * @author Guan Yong, Xu Jiangwei
 *
 */
var CubeRequest = exports.CubeRequest = function () {
    /**
     * @constructs
     * @param domain {String} - 会话地址
     */
    function CubeRequest(domain) {
        _classCallCheck(this, CubeRequest);

        this.domain = domain;
    }

    _createClass(CubeRequest, [{
        key: "send",
        value: function send(action, data, callback) {
            for (var item in data) {
                if (_typeof(data[item]) === 'object') {
                    data[item] = JSON.stringify(data[item]);
                }
            }
            NucleusAjax.newRequest(this.domain + action).method("POST").content(data).send(function (response) {
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
        key: "sendFile",
        value: function sendFile(action, file, data, callback) {
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
                xhr.open("post", this.domain + action, true);
                xhr.send(formData);
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
            }
        }
    }]);

    return CubeRequest;
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listener2 = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DeviceListener.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 设备上下线监听器
 *
 * @interface DeviceListener
 * @author Li Wenkai
 */
var DeviceListener = exports.DeviceListener = function (_Listener) {
  _inherits(DeviceListener, _Listener);

  function DeviceListener() {
    _classCallCheck(this, DeviceListener);

    return _possibleConstructorReturn(this, (DeviceListener.__proto__ || Object.getPrototypeOf(DeviceListener)).apply(this, arguments));
  }

  _createClass(DeviceListener, [{
    key: 'onDeviceOnline',

    /**
     * 设备上线通知
     * @param {loginDevice} 登陆设备信息
     * @param {onlineDevices} 在线设备信息
     */
    value: function onDeviceOnline(loginDevice, onlineDevices) {}

    /**
     * 设备下线通知
     * @param {logoutDevice} 登出设备信息
     * @param {onlineDevices} 在线设备信息
     */

  }, {
    key: 'onDeviceOffline',
    value: function onDeviceOffline(logoutDevice, onlineDevices) {}
  }]);

  return DeviceListener;
}(_Listener2.Listener);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listener2 = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GroupListener.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 群组监听器。
 * <p>
 * 通过群组状态监听器来监听群组的状态变化。
 * </p>
 *
 * @interface GroupListener
 * @author Xu Jiangwei, Guan Yong
 */
var GroupListener = exports.GroupListener = function (_Listener) {
  _inherits(GroupListener, _Listener);

  function GroupListener() {
    _classCallCheck(this, GroupListener);

    return _possibleConstructorReturn(this, (GroupListener.__proto__ || Object.getPrototypeOf(GroupListener)).apply(this, arguments));
  }

  _createClass(GroupListener, [{
    key: 'onGroupCreated',

    /**
     * 当有群组被创建且自己是其中成员时被调用。
     *
     * @param group 群组实体
     * @param from  群组创建者
     */
    value: function onGroupCreated(group, from) {}

    /**
     * 当群组销毁时回调
     *
     * @param group 群组实体
     * @param from  群组销毁者
     */

  }, {
    key: 'onGroupDestroyed',
    value: function onGroupDestroyed(group, from) {}

    /**
     * 群组数据更新回调(修改群昵称，头像，拥有者，开关群组，绑定群组ID信息)
     *
     * @param group 群组实体
     * @param from  群组更新者
     */

  }, {
    key: 'onGroupUpdated',
    value: function onGroupUpdated(group, from) {}
  }, {
    key: 'onMemberAdded',


    /**
     * 当群组添加成员时回调
     *
     * @param group        群组实体
     * @param addedMembers 被添加列表
     * @param from         添加者
     */
    value: function onMemberAdded(group, addedMembers, from) {}

    /**
     * 当自己所在的群组被删除时被调用。
     *
     * @param group          群组实体
     * @param removedMembers 被移除列表
     * @param from           移除者
     */

  }, {
    key: 'onMemberRemoved',
    value: function onMemberRemoved(group, removedMembers, from) {}

    /**
     * 当自己所在的群组有新增管理员时调用。
     *
     * @param group        群组实体
     * @param addedMasters 被添加管理员列表
     * @param from         添加者
     */

  }, {
    key: 'onMasterAdded',
    value: function onMasterAdded(group, addedMaster, from) {}

    /**
     * 当自己所在的群组有管理员被移除时调用。
     *
     * @param group          群组实体
     * @param from           移除者
     * @param removedMasters 被移除管理员列表
     */

  }, {
    key: 'onMasterRemoved',
    value: function onMasterRemoved(group, removedMaster, from) {}

    /* /!**
      * 当自己所在的群组昵称变更时调用。
      *
      * @param {GroupContext} groupContext - 群组上下文对象。
      *!/
     onGroupNameChanged(groupContext) {
     }*/

    /**
     * 有人申请入群时回调，仅群主和管理员（主持人）收到申请回调
     *
     * @param group   群组实体
     * @param applier 申请者
     */

  }, {
    key: 'onGroupApplied',
    value: function onGroupApplied(group, applier) {}
  }, {
    key: 'onGroupApplyJoined',


    /**
     * 同意申请加入时回调
     *
     * @param group   群组实体
     * @param from    同意者
     * @param applier 申请者
     */
    value: function onGroupApplyJoined(group, from, applier) {}
  }, {
    key: 'onGroupQuited',


    /**
     * 退出群组时回调
     *
     * @param group 群组实体
     * @param from  退出者
     */
    value: function onGroupQuited(group, from) {}
  }, {
    key: 'onGroupInvited',


    /**
     * 收到邀请回调(仅邀请者自己和被邀请者回调)
     *
     * @param group   群组实体
     * @param from    邀请者
     * @param invites 被邀请列表
       */
    value: function onGroupInvited(group, inviters, from) {}
  }, {
    key: 'onGroupInviteJoined',


    /**
     * 同意邀请加入时回调
     *
     * @param group
     * @param from 同意者
     * @param joinedMembers 加入者
     */
    value: function onGroupInviteJoined(group, from, joinedMember) {}
  }, {
    key: 'onGroupRejectInvited',


    /**
     * 拒绝要邀请入群回调
     *
     * @param group
     * @param rejectMember
     */
    value: function onGroupRejectInvited(group, from, rejectMember) {}
  }, {
    key: 'onGroupRejectApplyed',


    /**
     * 拒绝申请请入群回调
     *
     * @param group
     * @param rejectMember
     */
    value: function onGroupRejectApplyed(group, rejectMember, from) {}
  }, {
    key: 'onGroupFailed',


    /**
     * 当有错误时被调用。
     *
     * @param {StateCode} errorCode - 错误码。
     */
    value: function onGroupFailed(errorCode) {}
  }]);

  return GroupListener;
}(_Listener2.Listener);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 设置服务监听
 *
 * @interface SettingListener
 * @author Li WenKai
 */
var SettingListener = exports.SettingListener = function () {
  function SettingListener() {
    _classCallCheck(this, SettingListener);
  }

  _createClass(SettingListener, [{
    key: "onNotifyConfigUpdated",

    /**
     * 通知设置更新
     *
     * @param config
     */
    value: function onNotifyConfigUpdated(config) {}
  }, {
    key: "onDisturbConfigUpdated",


    /**
     * 打扰设置更新
     *
     * @param config
     */
    value: function onDisturbConfigUpdated(config) {}
  }, {
    key: "onDeviceTokenUpdated",


    /**
     * 推送设置更新
     *
     * @param deviceToken
     */
    value: function onDeviceTokenUpdated(deviceToken) {}
  }, {
    key: "onTopSessionAdded",


    /**
     * 添加置顶会话
     *
     * @param topList   新置顶列表
     * @param sessionId 新添加会话
     */
    value: function onTopSessionAdded(topList, sessionId) {}
  }, {
    key: "onTopSessionRemoved",


    /**
     * 移除置顶会话
     *
     * @param topList   新置顶列表
     * @param sessionId 新添加会话
     */
    value: function onTopSessionRemoved(topList, sessionId) {}
  }, {
    key: "onMuteSessionAdded",


    /**
     * 添加静音会话
     *
     * @param muteList  新置顶列表
     * @param sessionId 新添加会话
     */
    value: function onMuteSessionAdded(muteList, sessionId) {}
  }, {
    key: "onMuteSessionRemoved",


    /**
     * 移除静音会话
     *
     * @param muteList  新置顶列表
     * @param sessionId 新添加会话
     */
    value: function onMuteSessionRemoved(muteList, sessionId) {}
  }, {
    key: "onSettingSynced",


    /**
     * 同步最新配置
     *
     * @param setting 最新配置数据
     * @param updateTime 上次更新时间（如果与setting时间相同，则setting数据无更新）
     */

    value: function onSettingSynced(setting, updateTime) {}
  }, {
    key: "onsettingFailed",


    /**
     * 设置信息出错
     *
     * @param error
     */
    value: function onsettingFailed(cuberror) {}
  }]);

  return SettingListener;
}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listener2 = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AccountListener.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 账号服务监听器
 *
 * @interface AccountListener
 * @author Guan Yong
 */
var UserListener = exports.UserListener = function (_Listener) {
  _inherits(UserListener, _Listener);

  function UserListener() {
    _classCallCheck(this, UserListener);

    return _possibleConstructorReturn(this, (UserListener.__proto__ || Object.getPrototypeOf(UserListener)).apply(this, arguments));
  }

  _createClass(UserListener, [{
    key: 'onLogined',

    /**
     * 账号登录成功回调
     * @param session {Session}
     */
    value: function onLogined(session) {}

    /**
     * 账号注销成功回调
     * @param session {Session}
     */

  }, {
    key: 'onLogouted',
    value: function onLogouted(session) {}

    /**
     * 设备上线通知
     * @param {loginDevice} 登陆设备信息
     * @param {onlineDevices} 在线设备信息
     */

  }, {
    key: 'onDeviceOnline',
    value: function onDeviceOnline(loginDevice, onlineDevices) {}

    /**
     * 设备下线通知
     * @param {logoutDevice} 登出设备信息
     * @param {onlineDevices} 在线设备信息
     */

  }, {
    key: 'onDeviceOffline',
    value: function onDeviceOffline(logoutDevice, onlineDevices) {}

    /**
     * 用户更新回调
     * @param user
     */

  }, {
    key: 'onUserUpdated',
    value: function onUserUpdated(user) {}
  }, {
    key: 'onFailed',
    value: function onFailed(error) {}
  }]);

  return UserListener;
}(_Listener2.Listener);

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectionServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConnectionService2 = __webpack_require__(108);

var _NetworkDetection = __webpack_require__(67);

var _CELLET = __webpack_require__(4);

var _RegistrationState = __webpack_require__(7);

var _CubeError = __webpack_require__(0);

var _StateCode = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ConnectionService.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 通信连接服务中心实现
 *
 * @class ConnectionService
 * @author Li Wen
 */
var ConnectionServiceWorker = exports.ConnectionServiceWorker = function (_ConnectionService) {
    _inherits(ConnectionServiceWorker, _ConnectionService);

    function ConnectionServiceWorker(engine) {
        _classCallCheck(this, ConnectionServiceWorker);

        var _this = _possibleConstructorReturn(this, (ConnectionServiceWorker.__proto__ || Object.getPrototypeOf(ConnectionServiceWorker)).call(this));

        _this.TAG = "fldyconnection";
        _this.speaks = new HashMap();
        _this.MAX_TIMES = 9;
        _this.TRY_TIMES = 0;
        _this.SPACE_TIME = 2 * 1000;
        _this.connectServerUseTime = 0;
        _this.startTime = 0;
        _this.block = false;
        _this.serverCallTask = null;
        _this.host = null;
        _this.port = null;
        _this.services = [];
        _this.talkService = null;
        _this.nucleus = null;
        _this.license = null;
        _this.engine = engine;
        _this.isQuitted = false;
        _this.maxReconnectTime = 20000;
        _this.reConnectTimer = null;

        _NetworkDetection.NetworkDetection.startup({
            connect: function connect() {
                _this.engine.networkConnected = true;
                if (typeof _this.engine.accName === 'string' && typeof _this.engine.accPassword === 'string') {
                    if (!_this.isQuitted) {
                        _this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Ok);
                    } else if (_this.engine.isReconnecting) {
                        // 加速重连
                        _this.reConnect();
                    }
                }
            },
            disconnect: function disconnect() {
                _this.engine.networkConnected = false;
                _this.engine.triggerCubeEngineState(CubeState.Start);

                if (_this.engine.registered) {
                    _this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
                }
            }
        });
        return _this;
    }

    _createClass(ConnectionServiceWorker, [{
        key: 'updateLicense',
        value: function updateLicense(license) {
            this.license = license;
        }
    }, {
        key: 'isInit',
        value: function isInit() {
            if (nucleus != null && this.talkService != null) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            if (this.talkService == null) {
                this.config = new NucleusConfig();
                this.nucleus = nucleus.createNucleus(this.config);
                this.talkService = nucleus.getTalkService();
                return true;
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.talkService != null) {
                this.talkService.hangup(this.host, this.port, true);
                this.talkService = null;
            }
            if (this.nucleus != null) {
                this.nucleus.destroy();
                this.nucleus = null;
            }
        }
    }, {
        key: 'isConnected',
        value: function isConnected() {
            if (this.talkService != null && !this.speaks.isEmpty()) {
                this.connect = true;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.speaks.keySet()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var service = _step.value;

                        if (!this.talkService.isCalled(service)) {
                            this.connect = false;
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

                return connect;
            }
            return false;
        }
    }, {
        key: 'isConnected',
        value: function isConnected(servers) {
            if (this.talkService != null && !servers.isEmpty()) {
                this.connect = true;

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = servers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var service = _step2.value;

                        if (!this.talkService.isCalled(service)) {
                            this.connect = false;
                        }
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

                return connect;
            }
            return false;
        }
    }, {
        key: 'disConnected',
        value: function disConnected(servers) {
            if (this.talkService != null && !servers.isEmpty()) {
                this.connect = true;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = servers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var service = _step3.value;

                        if (!this.talkService.isCalled(service)) {
                            this.connect = false;
                        }
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
            }
        }
    }, {
        key: 'connect',
        value: function connect(host, port, services, listener, block) {
            if (this.talkService != null && services) {
                this.block = block;
                this.host = host;
                this.port = port;
                if (this.services != null) {
                    this.services.push(services);
                } else {
                    this.services = services;
                }
                // for (let service of services) {
                this.talkService.addListener(this);
                // }

                if (window.wsServer) {
                    var address = new InetAddress(wsServer.host, wsServer.port);
                } else {
                    var address = new InetAddress(_CUBE_DOMAIN, _CUBE_PORT);
                    // var address = new InetAddress( "192.168.1.19", 7000);
                }
                return nucleus.talkService.call(services, address, true);
            }
        }
    }, {
        key: 'getServers',
        value: function getServers() {
            return null;
        }
    }, {
        key: 'send',
        value: function send(service, action, param, data) {
            if (this.talkService != null) {
                // Tcp 发送日志
                nucleus.getLogger().d("Connection", "---- send : " + service + "\n" + "action: " + action + "\n" + JSON.stringify(param, null, '\t') + "\n" + "----------------------------------------------");

                // 组装原语
                var dialect = new ActionDialect();
                dialect.setName(action);
                param ? dialect.addParam("param", param) : '';
                return this.talkService.talk(service, dialect);
            }
        }

        //Genie相关回调
        /**
         * 当收到对端发送过来的原语时该方法被调用。
         *
         * @param speaker 接收到数据的会话者。
         * @param cellet 发送原语的 Cellet 名。
         * @param primitive 接收到的原语。
         */

    }, {
        key: 'onListened',
        value: function onListened(speaker, cellet, primitive) {
            if (primitive.isStuffList()) {
                var dialect = new ActionDialect(cellet, primitive);
                // Tcp 接收日志
                var result = null,
                    code = null;
                if (dialect.getParamAsString('state')) {
                    code = ' code:' + dialect.getParamAsString('state').code;
                    if (dialect.getParamAsString('state').code == 200) {
                        result = "data: " + JSON.stringify(dialect.getParamAsString('data'), null, '\t');
                    } else {
                        result = "desc: " + JSON.stringify(dialect.getParamAsString('state').desc, null, '\t');
                    }
                } else if (dialect.getParamAsString('desc')) {
                    result = ' desc:' + dialect.getParamAsString('state').code;
                } else {
                    result = "data: " + JSON.stringify(dialect.getParamAsString('data'), null, '\t');
                }
                nucleus.getLogger().d("Connection", "---- receive : " + cellet + "\n" + "action: " + dialect.getName() + code + "\n" + result + "\n" + "----------------------------------------------");

                this.engine.onDialogue(cellet, dialect.getName(), dialect);
            }
        }

        /**
         * 当原语发送出去后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: 'onSpoke',
        value: function onSpoke(speaker, cellet, primitive) {
            if (primitive.isStuffList()) {
                var dialect = new ActionDialect(cellet, primitive);
                this.engine.onDialogue(cellet, dialect.getName(), dialect);
                nucleus.getLogger().i("*** onSpoke: " + cellet + "primitive JSON: " + JSON.stringify(dialect.getParamAsString('state')));
                console.log("*** code: " + dialect.getParamAsString('state').code);
                console.log("*** data: " + JSON.stringify(dialect.getParamAsString('param')));
            }
        }

        /**
         * 当原语发送出去后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: 'onSpeakAck',
        value: function onSpeakAck(speaker, cellet, primitive) {
            if (primitive.isStuffList()) {
                var dialect = new ActionDialect(cellet, primitive);
                // this.engine.onDialogue(cellet, dialect.getName(), dialect);
                // console.log("*** onSpeakAck: " + cellet + "primitive JSON: ");
                // console.log(dialect.getParamAsString('param'));
            }
        }

        /**
         * 当发送的原语在指定时间内没有应答时该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: 'onSpeakTimeout',
        value: function onSpeakTimeout(speaker, cellet, primitive) {
            console.log("*** onSpeakTimeout: " + cellet + "primitive JSON: " + JSON.stringify(primitive));
        }

        /**
         * 当会话者连接到服务器完成握手后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 握手的 Cellet 。
         */

    }, {
        key: 'onContacted',
        value: function onContacted(speaker, cellet) {
            nucleus.getLogger().d("CubeEngine", "*** contacted: " + cellet);

            if (speaker.cellets[0] === _CELLET.CELLET.Responder) {
                this.engine.responder.fireContacted();
                return;
            }

            this.isQuitted = false;

            this.engine.isReconnecting = false;

            if (typeof this.engine.accName === 'string' && typeof this.engine.accPassword === 'string' && !this.engine.isBeingRegister) {

                this.reLogin(0);
            }
        }
    }, {
        key: 'quitted',
        value: function quitted(speaker, cellet) {
            nucleus.getLogger().d("CubeEngine", "*** quitted: " + speaker.cellets[0]);
            if (speaker.cellets[0] == _CELLET.CELLET.Responder) {
                this.engine.responder.fireQuitted();
                return;
            }

            this.isQuitted = true;
            this._reConnect();
        }
    }, {
        key: 'failed',
        value: function failed(speaker, failure) {
            nucleus.getLogger().d("CubeEngine", "*** failed: " + speaker.tag + " - " + failure.getDescription());

            var list = speaker.cellets;
            if (null != list && list.length == 1 && list[0] == _CELLET.CELLET.Responder) {
                this.engine.responder.fireFailed(failure);
                return;
            }

            this.isQuitted = true;
            this._reConnect();
        }

        /**
         * 重新连接
         */

    }, {
        key: 'reConnect',
        value: function reConnect() {
            var _this2 = this;

            clearTimeout(this.reConnectTimer);

            var UserService = this.engine.getUserService();
            this.engine.isReconnecting = true;
            var time = 10000;
            var recallTask = function recallTask() {
                if (typeof _this2.engine.accName === 'string') {
                    nucleus.talkService.tryRecall();
                    _this2.reConnectTimer = setTimeout(function () {
                        if (_this2.engine.isReconnecting) {
                            _this2.engine.loadingLicense = true;
                            UserService.loadLicense(_this2.engine.accToken, function (error, license) {
                                if (error) {
                                    // 获取 License 失败 回调应用层 清除本地信息 重新登录；
                                    if (error.code == 500) {
                                        // UserService._handUp();
                                        // UserService._fireRegistrationState(RegistrationState.Failed, new CubeError(StateCode.GetLicenseFail, 'GetLicense Failed'));
                                        // UserService.engine.isLicenseLoaded = false;
                                    }
                                } else {
                                    window.nucleus._resetTag();
                                    _this2.engine.loadingLicense = false;
                                    _this2.engine.isBeingRegister = false;
                                    _this2.engine.server.update(license);
                                    UserService._updateLicense(license, true);
                                }
                                recallTask();
                            });
                            // 超时处理
                            setTimeout(function () {
                                if (_this2.engine.loadingLicense) {
                                    recallTask();
                                }
                            }, 10000);
                        }
                    }, time);
                }

                if (time < _this2.maxReconnectTime) {
                    time += 5000;
                }
            };
            recallTask();
        }

        /**
         * 重新登录
         */

    }, {
        key: 'reLogin',
        value: function reLogin(times) {
            var _this3 = this;

            if (times < 5) {
                this.engine.getUserService().login(this.engine.accName, this.engine.accPassword, this.engine.accToken, this.engine.accDisplayName);

                setTimeout(function () {
                    if (!_this3.engine.registered && _this3.engine.isBeingRegister && typeof _this3.engine.accName === 'string' && typeof _this3.engine.accPassword === 'string') {

                        _this3.reLogin(times++);
                    }
                }, 10000);
            } else {
                this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.ReLoginTimeout, 'auto re login failed'));
            }
        }
    }, {
        key: '_reConnect',
        value: function _reConnect() {
            // 如果不是正常终止, 则尝试重新连接
            if (!this.engine.isShutdown && !this.engine.isReconnecting) {
                this.reConnect();
            }

            if (null != this.engine.getCallService()) {
                if (this.engine.session.isCalling()) {
                    this.engine.getCallService().terminateCall();
                }
            }

            if (this.engine.registered) {
                // 回调注销
                this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
            }

            if (null != this.engine.sipService) {
                this.engine.sipService.unregister();
            }
        }
    }]);

    return ConnectionServiceWorker;
}(_ConnectionService2.ConnectionService);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CubeServer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(69);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CubeServer = exports.CubeServer = function () {
    function CubeServer() {
        _classCallCheck(this, CubeServer);

        this.host = null;
        this.port = null;
        this.httpHost = null;
        this.httpPort = null;
        this.ssl = location.protocol === 'https:';
    }

    _createClass(CubeServer, [{
        key: 'update',


        /**
         *
         * @param license {{
         *      CubeServer: {Host: String, Port: Number},
         *      CubeHttpServer: {Host: String, HTTPPort: Number, SSLPort: Number},
         *      Conference: {HTTPCapture: String, SSLCapture: String}
         *  }}
         */
        value: function update(license) {
            var CubeServer = license.CubeServer,
                CubeHttpServer = license.CubeHttpServer,
                FileServer = license.FileServer,
                StorageServer = license.StorageServer,
                Conference = license.Conference;

            var p = _Utils.Utils.isSecure ? "https://" : "http://";

            this.host = _CUBE_DOMAIN = CubeServer.Host;

            this.httpHost = CubeHttpServer.Host;

            _CUBE_HTTP_SERVICE = "http://" + CubeHttpServer.Host + ":" + CubeHttpServer.HTTPPort;
            _CUBE_HTTPS_SERVICE = "https://" + CubeHttpServer.Host + ":" + CubeHttpServer.SSLPort;

            _CUBE_HTTP_FILE_SERVICE = "http://" + FileServer.Host + ":" + FileServer.HTTPPort;
            _CUBE_HTTPS_FILE_SERVICE = "https://" + FileServer.Host + ":" + FileServer.SSLPort;

            _CUBE_HTTP_STORAGE_SERVICE = "http://" + StorageServer.Host + ":" + StorageServer.HTTPPort;
            _CUBE_HTTPS_STORAGE_SERVICE = "https://" + StorageServer.Host + ":" + StorageServer.SSLPort;

            if (this.ssl) {
                this.port = _CUBE_PORT = CubeServer.TCPPort + 10;
                this.httpPort = CubeHttpServer.SSLPort;
                _CUBE_CONF_CAPTURE_SERVICE = Conference.SSLCapture;
                _CUBE_HTTP_SERVICES = p + CubeServer.Host + ":" + (CubeServer.HTTPPort + 10);
            } else {
                this.port = _CUBE_PORT = CubeServer.TCPPort;
                this.httpPort = CubeHttpServer.HTTPPort;
                _CUBE_CONF_CAPTURE_SERVICE = Conference.HTTPCapture;
                _CUBE_HTTP_SERVICES = p + CubeServer.Host + ":" + CubeServer.HTTPPort;
            }
            // _CUBE_DOMAIN ='192.168.1.6', _CUBE_PORT =7070;
            _CUBE_SERVICE = this.http;
        }
    }, {
        key: 'socket',
        get: function get() {
            return (this.ssl ? 'wss://' : 'ws://') + this.host + ':' + this.port;
        }
    }, {
        key: 'http',
        get: function get() {
            return (this.ssl ? 'https://' : 'http://') + this.httpHost + ':' + this.httpPort;
        }
    }]);

    return CubeServer;
}();

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by GuanYong on 2017/4/26.
 */

/**
 * 网络检测工具。
 *
 * @author Guan Yong
 */
var NetworkDetection = exports.NetworkDetection = function () {
    function NetworkDetection(options) {
        var _this = this;

        _classCallCheck(this, NetworkDetection);

        this.options = options;
        this.online = function () {
            if (null != _this.options) {
                _this.options.connect();
            }
        };
        this.offline = function () {
            if (null != _this.options) {
                _this.options.disconnect();
            }
        };
    }

    _createClass(NetworkDetection, [{
        key: 'startup',
        value: function startup() {
            window.addEventListener('online', this.online, false);
            window.addEventListener('offline', this.offline, false);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            window.removeEventListener('online', this.online, false);
            window.removeEventListener('offline', this.offline, false);
        }
    }], [{
        key: 'startup',
        value: function startup(options) {
            if (this.detection != null) {
                this.detection.shutdown();
            }
            this.detection = new NetworkDetection(options);
            this.detection.startup();
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            if (this.detection != null) {
                this.detection.shutdown();
                this.detection = null;
            }
        }
    }]);

    return NetworkDetection;
}();

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by GuanYong on 2017/4/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CubeConst = __webpack_require__(5);

var _NetworkDetection = __webpack_require__(67);

var _CELLET = __webpack_require__(4);

var _RegistrationState = __webpack_require__(7);

var _CubeError = __webpack_require__(0);

var _StateCode = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 网络状态监听器。
 *
 * @author Xu Jiangwei, Guan Yong
 */
var NetworkListener = exports.NetworkListener = function () {
    function NetworkListener(engine) {
        var _this = this;

        _classCallCheck(this, NetworkListener);

        this.engine = engine;
        this.isQuitted = false;
        this.maxReconnectTime = 20000;
        this.reConnectTimer = null;

        _NetworkDetection.NetworkDetection.startup({
            connect: function connect() {
                _this.engine.networkConnected = true;
                if (typeof _this.engine.accName === 'string' && typeof _this.engine.accPassword === 'string') {
                    if (!_this.isQuitted) {
                        _this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Ok);
                    } else if (_this.engine.isReconnecting) {
                        // 加速重连
                        _this.reConnect();
                    }
                }
            },
            disconnect: function disconnect() {
                _this.engine.networkConnected = false;
                _this.engine.triggerCubeEngineState(CubeState.Start);

                if (_this.engine.registered) {
                    _this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
                }
            }
        });
    }

    _createClass(NetworkListener, [{
        key: 'dialogue',
        value: function dialogue(identifier, primitive) {
            if (primitive.isDialectal()) {
                var dialect = primitive.getDialect();
                if (ActionDialect.DIALECT_NAME === dialect.getName()) {
                    this.engine.onDialogue(identifier, dialect.getAction(), dialect);
                }
            }
        }
    }, {
        key: 'contacted',
        value: function contacted(identifier, tag) {
            nucleus.getLogger().d("CubeEngine", "*** contacted: " + identifier);

            if (identifier === _CELLET.CELLET.Responder) {
                this.engine.responder.fireContacted();
                return;
            }

            this.isQuitted = false;

            this.engine.isReconnecting = false;

            if (typeof this.engine.accName === 'string' && typeof this.engine.accPassword === 'string' && !this.engine.isBeingRegister) {

                this.reLogin(0);
            }
        }
    }, {
        key: 'quitted',
        value: function quitted(identifier, tag) {
            nucleus.getLogger().d("CubeEngine", "*** quitted: " + identifier);

            if (identifier == _CELLET.CELLET.Responder) {
                this.engine.responder.fireQuitted();
                return;
            }

            this.isQuitted = true;
            this._reConnect();
        }
    }, {
        key: 'failed',
        value: function failed(tag, failure) {
            nucleus.getLogger().d("CubeEngine", "*** failed: " + tag + " - " + failure.getDescription());

            var list = failure.getSourceCelletIdentifiers();
            if (null != list && list.length == 1 && list[0] == _CELLET.CELLET.Responder) {
                this.engine.responder.fireFailed(failure);
                return;
            }

            this.isQuitted = true;
            this._reConnect();
        }

        /**
         * 重新连接
         */

    }, {
        key: 'reConnect',
        value: function reConnect() {
            var _this2 = this;

            clearTimeout(this.reConnectTimer);

            var accountService = this.engine.getUserService();
            this.engine.isReconnecting = true;
            var time = 10000;
            var recallTask = function recallTask() {
                if (typeof _this2.engine.accName === 'string' && typeof _this2.engine.accPassword === 'string') {
                    nucleus.talkService.tryRecall();
                    _this2.reConnectTimer = setTimeout(function () {
                        if (_this2.engine.isReconnecting) {
                            _this2.engine.loadingLicense = true;
                            accountService.loadLicense(_this2.engine.accToken, function (error, license) {
                                if (error) {
                                    // 获取 License 失败 回调应用层 清除本地信息 重新登录；
                                    if (error.code == 500) {
                                        accountService._handUp();
                                        accountService._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.GetLicenseFail, 'GetLicense Failed'));
                                        accountService.engine.isLicenseLoaded = false;
                                    }
                                } else {
                                    window.nucleus._resetTag();
                                    _this2.engine.loadingLicense = false;
                                    _this2.engine.isBeingRegister = false;
                                    _this2.engine.server.update(license);
                                    accountService._updateLicense(license, true);
                                }
                                recallTask();
                            });
                            // 超时处理
                            setTimeout(function () {
                                if (_this2.engine.loadingLicense) {
                                    recallTask();
                                }
                            }, 10000);
                        }
                    }, time);
                }

                if (time < _this2.maxReconnectTime) {
                    time += 5000;
                }
            };
            recallTask();
        }

        /**
         * 重新登录
         */

    }, {
        key: 'reLogin',
        value: function reLogin(times) {
            var _this3 = this;

            if (times < 5) {
                this.engine.getUserService().login(this.engine.accName, this.engine.accPassword, this.engine.accToken, this.engine.accDisplayName);

                setTimeout(function () {
                    if (!_this3.engine.registered && _this3.engine.isBeingRegister && typeof _this3.engine.accName === 'string' && typeof _this3.engine.accPassword === 'string') {

                        _this3.reLogin(times++);
                    }
                }, 10000);
            } else {
                this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.ReLoginTimeout, 'auto re login failed'));
            }
        }
    }, {
        key: '_reConnect',
        value: function _reConnect() {
            // 如果不是正常终止, 则尝试重新连接
            if (!this.engine.isShutdown && !this.engine.isReconnecting) {
                this.reConnect();
            }

            if (null != this.engine.getCallService()) {
                if (this.engine.session.isCalling()) {
                    this.engine.getCallService().terminateCall();
                }
            }

            if (this.engine.registered) {
                // 回调注销
                this.engine.getUserService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
            }

            if (null != this.engine.sipService) {
                this.engine.sipService.unregister();
            }
        }
    }]);

    return NetworkListener;
}();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Utils.js
 * Cube Engine
 *
 * Created by Ambrose Xu on 15/4/5.
 * Copyright (c) 2015 Cube Team. All rights reserved.
 */

// 归一 indexedDB
if (!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
}

window.addEventListener("error", function (e) {
    if (nucleus.getLogger().e) {
        nucleus.getLogger().e("Error", e.toString());
    }
}, false);

var ua = navigator.userAgent.toLowerCase();

var isIPad = ua.match(/ipad/i) == "ipad";
var isIPhoneOs = ua.match(/iphone os/i) == "iphone os";
var isMidp = ua.match(/midp/i) == "midp";
//let isUc7 = ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//let isUc = ua.match(/ucweb/i) == "ucweb";
var isAndroid = ua.match(/android/i) == "android";
var isCE = ua.match(/windows ce/i) == "windows ce";
var isWM = ua.match(/windows mobile/i) == "windows mobile";

var isStrict = document.compatMode == "CSS1Compat"; // 是否定义 DOCUMENT 类型
var isOpera = ua.indexOf("opera") > -1; // Opera
var isChrome = ua.indexOf("chrome") > -1; // Chrome
var isFirefox = ua.indexOf("firefox") > -1; // Firefox
var isSafari = !isChrome && !isAndroid && /webkit|khtml/.test(ua); // Safari
//let isSafari3 = isSafari && ua.indexOf("webkit/5") != -1;	// Safari3
var isIE = "ActiveXObject" in window; // IE
var isIE6 = isIE && !window.XMLHttpRequest; // IE6
var isIE7 = isIE && window.XMLHttpRequest && !document.documentMode; // IE7
var isIE8 = isIE && !-[1] && document.documentMode; // IE8
var isIE9 = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9."; // IE9
var isIE10 = isIE && /10\.0/.test(ua); // IE10
var isIE11 = isIE && ua.indexOf("rv:11.0") > -1; // IE11
var isGecko = !isSafari && !isChrome && ua.indexOf("gecko") > -1; // Gecko 内核
var isGecko3 = isGecko && ua.indexOf("rv:1.9") > -1; // Gecko3 内核
//let isBorderBox = isIE && !isStrict; // 使用盒模型
var isWindows = ua.indexOf("windows") != -1 || ua.indexOf("win32") != -1; // 是 Windows 系统
var isMac = ua.indexOf("macintosh") != -1 || ua.indexOf("mac os x") != -1; // 是 MacOS 系统
var isAir = ua.indexOf("adobeair") != -1; // 是用 Adobe Air 浏览
var isLinux = ua.indexOf("linux") != -1; // 是 Linux 系统
var isSecure = window.location.href.toLowerCase().indexOf("https") === 0; // 是SSL浏览

var regularEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

var Utils = exports.Utils = {
    isIPad: isIPad,
    isIPhone: isIPhoneOs,
    isAndroid: isAndroid,
    isPhone: isIPhoneOs || isAndroid,
    isDesktop: !isIPhoneOs && !isAndroid && !isIPad,
    isWindows: isWindows,
    isMac: isMac,
    isLinux: isLinux,

    isChrome: isChrome,
    isFirefox: isFirefox,
    isIE: isIE,
    isIE9: isIE9,
    isIE11: isIE11,
    isSafari: isSafari,

    isSecure: isSecure,

    randomNumber: function randomNumber(begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    }

    // 向上检索 DOM 节点指定的 Class
    , retrievalDomClass: function retrievalDomClass(node, className) {
        var cstring = null;
        try {
            cstring = node.getAttribute('class');
        } catch (e) {
            return null;
        }

        if (cstring != null && cstring.indexOf(className) >= 0) {
            return node;
        }

        var pn = node.parentNode;
        if (pn != null && pn !== undefined) {
            // 递归
            return global.utils.retrievalDomClass(pn, className);
        } else {
            return null;
        }
    },

    formatDuration: function formatDuration(time) {
        var s = time / 1000.0;
        var ns = parseInt(s);
        if (ns < 60) {
            return "00:" + (ns < 10 ? "0" + ns : ns);
        }

        var m = s / 60.0;
        var nm = parseInt(Math.floor(m));
        var ss = parseInt(ns % 60);
        return (nm < 10 ? "0" + nm : nm) + ":" + (ss < 10 ? "0" + ss : ss);
    },

    getUrlParams: function getUrlParams() {
        var vars = [],
            hash = void 0;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },

    getUrlParam: function getUrlParam(name) {
        var ret = this.getUrlParams()[name];
        return undefined === ret ? null : ret;
    },

    getCookieVal: function getCookieVal(offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }

    // get cookie value
    , getCookie: function getCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return this.getCookieVal(j);
            }

            i = document.cookie.indexOf(" ", i) + 1;

            if (i == 0) break;
        }
        return null;
    }

    // store cookie value with optional details as needed
    , setCookie: function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
    }

    // remove the cookie by setting ancient expiration date
    , deleteCookie: function deleteCookie(name, path, domain) {
        if (this.getCookie(name)) {
            document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        }
    }

    // 获取元素子节点
    , getElementChildren: function getElementChildren(el) {
        if (!!el.children) {
            return el.children;
        } else {
            var arr = [];
            var nodeList = el.childNodes;
            for (var i = 0; i < nodeList.length; ++i) {
                if (nodeList[i].nodeType == 1) {
                    arr.push(nodeList[i]);
                }
            }
            return arr;
        }
    },

    getDrawPosition: function getDrawPosition(dom, event) {
        var pos = event.touches === undefined ? this.getMousePos(event) : this.getTouchPos(event);
        var dx = this.getX(dom);
        var dy = this.getY(dom);
        return { x: pos.x - dx, y: pos.y - dy };
    },

    getCursorPosition: function getCursorPosition(event) {
        if (event.touches === undefined) {
            var x = event.clientX || event.pageX;
            var y = event.clientY || event.pageY;
            return { x: x, y: y };
        } else if (event.touches.length > 0) {
            var _x = event.touches[0].pageX || event.touches[0].clientX || event.clientX;
            var _y = event.touches[0].pageY || event.touches[0].clientY || event.clientY;
            return { x: _x, y: _y };
        } else {
            var _x2 = event.changedTouches[0].clientX;
            var _y2 = event.changedTouches[0].clientY;
            return { x: _x2, y: _y2 };
        }
    },

    getMousePos: function getMousePos(event) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        return { x: x, y: y };
    },

    getTouchPos: function getTouchPos(event) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.touches[0].pageX || e.clientX + scrollX;
        var y = e.touches[0].pageY || e.clientY + scrollY;
        return { x: x, y: y };
    },

    getX: function getX(obj) {
        var left = obj.offsetLeft;
        var parObj = obj;
        while ((parObj = parObj.offsetParent) != null) {
            left += parObj.offsetLeft;
        }
        return left;
    },

    getY: function getY(obj) {
        var top = obj.offsetTop;
        var parObj = obj;
        while ((parObj = parObj.offsetParent) != null) {
            top += parObj.offsetTop;
        }
        return top;
    }

    // 对齐数字，修正浮点数精度，返回 Number 型
    , fixNumber: function fixNumber(number) {
        var num = new Number(number);
        return Number(num.toFixed(2));
    }

    // 对齐数字，修正浮点数精度，返回 String 型
    , fixNumberToString: function fixNumberToString(number) {
        var num = new Number(number);
        return num.toFixed(2);
    },

    unselectable: function unselectable(node) {
        node.setAttribute("unselectable", "on");
        node.onmousedown = function () {
            return false;
        };
        var s = node.style;
        s.userSelect = "none";
        s.webkitUserSelect = "none";
        s.MozUserSelect = "-moz-none";
    },

    verifyEmail: function verifyEmail(email) {
        return regularEmail.test(email);
    },

    isSocketSupported: function isSocketSupported() {
        return undefined !== window.WebSocket;
    },
    isSVGSupported: function isSVGSupported() {
        var SVG_NS = "http://www.w3.org/2000/svg";
        return !!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect;
    },
    isDBSupported: function isDBSupported() {
        return undefined !== window.indexedDB;
    },
    isRecorderSupported: function isRecorderSupported() {
        var r = window.StereoRecorder || window.MediaStreamRecorder || window.WhammyRecorder || window.GifRecorder || window.CanvasRecorder;
        return undefined !== r;
    },
    isVideoSupported: function isVideoSupported() {
        return !!document.createElement('video').canPlayType;
    },
    isUserMediaSupported: function isUserMediaSupported() {
        if (isSafari && null == navigator.getUserMedia) {
            return false;
        }

        // 对使用 Chrome 内核，但是版本过低的浏览器不能通过测试
        var index = navigator.userAgent.indexOf("Chrome/");
        if (index > 0) {
            var str = navigator.userAgent.substr(index + 7);
            var ni = str.indexOf(".");
            if (ni > 0) {
                str = str.substring(0, ni);
                var v = parseInt(str);
                if (v < 37) {
                    return false;
                }
            }
        }

        return undefined !== navigator.getUserMedia || undefined !== window.getUserMedia;
    },

    measureBandwidth: function measureBandwidth(fast, result, error, host) {
        var downloadSize = fast ? 1054738 : 10561396;
        var startTime = 0;
        var endTime = 0;
        var bandwidth = 0;

        var timeoutTimer = 0;

        var img = new Image();
        img.onload = function () {
            clearTimeout(timeoutTimer);
            timeoutTimer = 0;

            endTime = Date.now();

            var duration = (endTime - startTime) / 1000;
            var bitsLoaded = downloadSize * 8;
            var bwbps = (bitsLoaded / duration).toFixed(2);
            var bwKbps = (bwbps / 1024).toFixed(2);
            var bwMbps = (bwKbps / 1024).toFixed(2);

            result.call(null, bwbps, bwKbps, bwMbps);
        };

        img.onerror = function (err, msg) {
            error.call(null, err);
        };

        startTime = Date.now();
        var cacheBuster = "?t=" + startTime;

        var src = "assets/bandwidth/" + (fast ? "bandwidth-1m.jpg" : "bandwidth-10m.jpg") + cacheBuster;
        if (host !== undefined) {
            src = "http://" + host + "/" + src;
        }

        img.src = src;

        timeoutTimer = setTimeout(function () {
            clearTimeout(timeoutTimer);
            timeoutTimer = 0;
            error.call(null);
        }, 30000);
    },

    requestGet: function requestGet(url, success, error) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    success.call(null, JSON.parse(request.responseText));
                } else {
                    error.call(null, request.status);
                }
            }
        };
        request.open("GET", url);
        request.send(null);
    },

    parseXml: function parseXml(xmlString) {
        var xmlDoc = null;
        if (!window.DOMParser && window.ActiveXObject) {
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
            for (var i = 0; i < xmlDomVersions.length; i++) {
                try {
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString);
                    break;
                } catch (e) {}
            }
        }
        //支持Mozilla浏览器
        else if (window.DOMParser && document.implementation && document.implementation.createDocument) {
                try {
                    var domParser = new DOMParser();
                    xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
                } catch (e) {}
            } else {
                return null;
            }
        return xmlDoc;
    },

    getUserMedia: function getUserMedia(videoEnable, audioEnable, callback) {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || window.getUserMedia;
        var constraints = { video: videoEnable, audio: audioEnable };
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                callback(false, stream);
            })['catch'](function (err) {
                callback(err);
            });
        } else if (navigator.getUserMedia) {
            navigator.getUserMedia(constraints, function (stream) {
                callback(false, stream);
            }, function (err) {
                callback(err);
            });
        } else {
            callback({ code: CubeStateCode.NotSupportUserMedia });
        }
    },

    getLocalUUID: function getLocalUUID() {
        var localKey = 'CUBE_LOCAL_UUID';
        var uid = localStorage.getItem(localKey + "_" + cube.accName);
        if (null == uid) {
            uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
            localStorage.setItem(localKey + "_" + cube.accName, uid);
        }
        return uid;
    },

    closeMediaStream: function closeMediaStream(stream) {
        if (typeof stream.stop === 'function') {
            stream.stop();
        } else {
            var trackList = [stream.getAudioTracks(), stream.getVideoTracks()];

            for (var i = 0; i < trackList.length; i++) {
                var tracks = trackList[i];
                if (tracks && tracks.length > 0) {
                    for (var j = 0; j < tracks.length; j++) {
                        var track = tracks[j];
                        if (typeof track.stop === 'function') {
                            track.stop();
                        }
                    }
                }
            }
        }
    }
};

// 封装 window.localStorage
;(function (window) {
    // 准备模拟对象、空函数等
    var LS = void 0,
        noop = function noop() {},
        document = window.document,
        notSupport = { set: noop, get: noop, remove: noop, clear: noop, each: noop, obj: noop, length: 0 };

    // 优先探测userData是否支持，如果支持，则直接使用userData，而不使用localStorage
    // 以防止IE浏览器关闭localStorage功能或提高安全级别(*_* 万恶的IE)
    // 万恶的IE9(9.0.11）)，使用userData也会出现类似seesion一样的效果，刷新页面后设置的东西就没有了...
    // 只好优先探测本地存储，不能用再尝试使用userData
    (function () {
        // 先探测本地存储
        // 防止IE10早期版本安全设置有问题导致的脚本访问权限错误
        if ("localStorage" in window) {
            try {
                LS = window.localStorage;
                return;
            } catch (e) {
                //如果报错，说明浏览器已经关闭了本地存储或者提高了安全级别
                //则尝试使用userData
            }
        }

        //继续探测userData
        var o = document.getElementsByTagName("head")[0],
            hostKey = window.location.hostname || "localStorage",
            d = new Date(),
            doc = void 0,
            agent = void 0;

        // typeof o.addBehavior 在IE6下是object，在IE10下是function，因此这里直接用!判断
        // 如果不支持userData则跳出使用原生localStorage，如果原生localStorage报错，则放弃本地存储
        if (!o.addBehavior) {
            try {
                LS = window.localStorage;
            } catch (e) {
                LS = null;
            }
            return;
        }

        try {
            // 尝试创建iframe代理，以解决跨目录存储的问题
            agent = new ActiveXObject('htmlfile');
            agent.open();
            agent.write('<s' + 'cript>document.w=window;</s' + 'cript><iframe src="/favicon.ico"></iframe>');
            agent.close();
            doc = agent.w.frames[0].document;
            // 这里通过代理document创建head，可以使存储数据垮文件夹访问
            o = doc.createElement('head');
            doc.appendChild(o);
        } catch (e) {
            // 不处理跨路径问题，直接使用当前页面元素处理
            // 不能跨路径存储，也能满足多数的本地存储需求
            o = document.getElementsByTagName("head")[0];
        }

        // 初始化userData
        try {
            d.setDate(d.getDate() + 36500);
            o.addBehavior("#default#userData");
            o.expires = d.toUTCString();
            o.load(hostKey);
            o.save(hostKey);
        } catch (e) {
            // 防止部分外壳浏览器的bug出现导致后续js无法运行
            // 如果有错，放弃本地存储
            return;
        }
        // 开始处理userData
        // 以下代码感谢瑞星的刘瑞明友情支持，做了大量的兼容测试和修改
        // 并处理了userData设置的key不能以数字开头的问题
        var root = void 0,
            attrs = void 0;
        try {
            root = o.XMLDocument.documentElement;
            attrs = root.attributes;
        } catch (e) {
            //防止部分外壳浏览器的bug出现导致后续js无法运行
            //如果有错，放弃本地存储
            return;
        }
        var prefix = "p__hack_",
            spfix = "m-_-c",
            reg1 = new RegExp("^" + prefix),
            reg2 = new RegExp(spfix, "g"),
            encode = function encode(key) {
            return encodeURIComponent(prefix + key).replace(/%/g, spfix);
        },
            decode = function decode(key) {
            return decodeURIComponent(key.replace(reg2, "%")).replace(reg1, "");
        };

        // 创建模拟对象
        LS = {
            length: attrs.length,
            isVirtualObject: true,
            getItem: function getItem(key) {
                // IE9中 通过o.getAttribute(name);取不到值，所以才用了下面比较复杂的方法。
                return (attrs.getNamedItem(encode(key)) || { nodeValue: null }).nodeValue || root.getAttribute(encode(key));
            },
            setItem: function setItem(key, value) {
                //IE9中无法通过 o.setAttribute(name, value); 设置#userData值，而用下面的方法却可以。
                try {
                    root.setAttribute(encode(key), value);
                    o.save(hostKey);
                    this.length = attrs.length;
                } catch (e) {
                    // 这里IE9经常报没权限错误,但是不影响数据存储
                }
            },
            removeItem: function removeItem(key) {
                //IE9中无法通过 o.removeAttribute(name); 删除#userData值，而用下面的方法却可以。
                try {
                    root.removeAttribute(encode(key));
                    o.save(hostKey);
                    this.length = attrs.length;
                } catch (e) {
                    // 这里IE9经常报没权限错误,但是不影响数据存储
                }
            },
            clear: function clear() {
                while (attrs.length) {
                    this.removeItem(attrs[0].nodeName);
                }
                this.length = 0;
            },
            key: function key(i) {
                return attrs[i] ? decode(attrs[i].nodeName) : undefined;
            }
        };

        // 提供模拟的"localStorage"接口
        if (!("localStorage" in window)) window['localStorage'] = LS;
    })();

    // 二次包装接口
    window.LS = !LS ? notSupport : {
        set: function set(key, value) {
            // fixed iPhone/iPad 'QUOTA_EXCEEDED_ERR' bug
            if (this.get(key) !== undefined) this.remove(key);
            LS.setItem(key, value);
            this.length = LS.length;
        },
        // 查询不存在的key时，有的浏览器返回null，这里统一返回undefined
        get: function get(key) {
            var v = LS.getItem(key);
            return v === null ? undefined : v;
        },
        remove: function remove(key) {
            LS.removeItem(key);
            this.length = LS.length;
        },
        clear: function clear() {
            LS.clear();
            this.length = 0;
        },
        // 本地存储数据遍历，callback接受两个参数 key 和 value，如果返回false则终止遍历
        each: function each(callback) {
            var list = this.obj(),
                fn = callback || function () {},
                key = void 0;
            for (key in list) {
                if (fn.call(this, key, this.get(key)) === false) break;
            }
        },
        // 返回一个对象描述的localStorage副本
        obj: function obj() {
            var list = {},
                i = 0,
                n = void 0,
                key = void 0;
            if (LS.isVirtualObject) {
                list = LS.key(-1);
            } else {
                n = LS.length;
                for (; i < n; i++) {
                    key = LS.key(i);
                    list[key] = this.get(key);
                }
            }
            return list;
        },
        length: LS.length
    };
    // 如果有jQuery，则同样扩展到jQuery
    if (window.jQuery) window.jQuery.LS = window.LS;
})(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CubeEngine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * CubeEngine.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Session = __webpack_require__(36);

var _CubeConfig = __webpack_require__(22);

var _Utils = __webpack_require__(69);

var _UserServiceWorker = __webpack_require__(120);

var _LicenseServiceWorker = __webpack_require__(118);

var _GroupServiceWorker = __webpack_require__(117);

var _NetworkListener = __webpack_require__(68);

var _CubeError = __webpack_require__(0);

var _StateCode = __webpack_require__(3);

var _CELLET = __webpack_require__(4);

var _Responder = __webpack_require__(107);

var _Delegate = __webpack_require__(14);

var _CubeEngineListener = __webpack_require__(111);

var _CubeState = __webpack_require__(35);

var _CubeServer = __webpack_require__(66);

var _CodecType = __webpack_require__(34);

var _ConnectionServiceWorker = __webpack_require__(65);

var _SettingServiceWorker = __webpack_require__(119);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 魔方引擎类。
 * <p>
 * 魔方引擎类是为应用层提供接口的基础类，包括通话控制、获取白板对象实例、获取媒体控制器实例等。
 * </p>
 *
 * @class CubeEngine
 * @author Xu Jiangwei, Guan Yong
 */
var CubeEngine = exports.CubeEngine = function () {
    function CubeEngine() {
        _classCallCheck(this, CubeEngine);

        // 引擎版本信息
        this.version = '3.0.2';
        // 通用工具
        this.utils = _Utils.Utils;
        // 会话管理器
        this.session = new _Session.Session();
        // 用户账号
        this.accName = null;
        // 用户昵称
        this.accDisplayName = null;
        // 用户密码
        this.accPassword = null;
        // 用户令牌
        this.accToken = null;

        this.hostAddress = null;
        // 配置信息
        this.config = new _CubeConfig.CubeConfig();

        // 所有服务
        this.services = new HashMap();
        // 媒体服务
        this.sspMediaService = null;
        // 会议媒体服务
        this.sipMediaService = null;
        // sip服务
        this.sipService = null;

        // 是否正在重连
        this.isReconnecting = false;
        // 是否正在注册
        this.isBeingRegister = false;
        // 尝试加载授权数据的次数
        this.loadLicenseCounts = 0;
        // 资源路径
        this.resourcePath = './assets';
        // 是否终止
        this.isShutdown = false;

        // 应答机
        this.responder = new _Responder.Responder(this, this.session);
        // 引擎注册状态
        this.registered = false;
        // 应用授权信息
        this.appLicense = null;
        // 设备信息
        this.deviceInfo = null;
        // 授权文件加载完成状态
        this.isLicenseLoaded = false;
        // 初始化全局token信息
        var timestamp = _cube_timestamp + '';
        this._cube_token = timestamp.substr(timestamp.length - 6, 6);
        // 定义引擎当前的状态
        this.cubeState = _CubeState.CubeState.Stop;
        // 定义当前网络是否正常
        this.networkConnected = true;

        //关联状态监听器
        this.delegate = new _Delegate.Delegate(_CubeEngineListener.CubeEngineListener);

        this.celletMembers = new HashMap();

        // 引擎服务器地址配置信息
        this.server = new _CubeServer.CubeServer();
        // Genie连接器
        this.connect = new _ConnectionServiceWorker.ConnectionServiceWorker(this);

        // 是否运行node环境
        this.nodeIntegration = typeof module !== 'undefined' && module.exports;
    }

    // 调试选项


    _createClass(CubeEngine, [{
        key: '_adjust',
        value: function _adjust(param) {
            if (undefined !== param.host) {
                _CUBE_DOMAIN = param.host.toString();
            }
            if (undefined !== param.port) {
                _CUBE_PORT = parseInt(param.port);
            }
        }

        /**
         * This is a description of the device info
         * @class DeviceInfo
         * @property name {String} 名称
         * @property version {String} 版本号
         * @property platform {String} 平台信息
         * @property deviceId {String} 设备ID
         */

        /**
         * @typedef {Object} EngineConfig
         * @property {Object} videoSize - 指定默认视频画面大小。
         * @property {Object} frameRate - 指定帧率范围。
         * @property {Object} bandwidth - 指定默认音/视频数据传输带宽。
         */

        /**
         * 配置引擎工作参数。参数包括视频大小、建议帧率等。
         *
         * @example
         *
         * 1.简化引擎启动配置
         * window.cube.setCubeConfig({
        *     "videoSize": { "width": 640, "height": 480 },
        *     "frameRate": { "min": 5, "max": 18 },
        *     "bandwidth": { "audio": 60, "video": 256 },
        *     "appid": "8d6148f92531438480e684a3203651f5",  必填
        *     "appkey": "6f0ba0b2f904426ba9c4c9f05dc89152", 必填
        * });
         *
         * 2.复杂配置方式
         * var config = new CubeConfig();
         * config.setAppId(appid);
         * .....
         * cube.setCubeConfig(config);
         * @memberof CubeConfig
         *
         * @param {CubeConfig} config - 指定配置数据对象。
         * @see CubeVideoSize
         * @memberof CubeEngine
         * @instance
         */

    }, {
        key: 'setCubeConfig',
        value: function setCubeConfig(config) {
            for (var item in this.config) {
                if (this.config.hasOwnProperty(item) && config.hasOwnProperty(item)) {
                    if (item === 'frameRate') {
                        var min = parseInt(config.frameRate.min);
                        var max = parseInt(config.frameRate.max);
                        this.config.frameRate = {
                            min: min > 10 ? 10 : min < 2 ? 2 : min,
                            max: max > 30 ? 30 : max < 6 ? 6 : max
                        };
                    }

                    this.config[item] = config[item];
                }
            }

            var services = this.services.values();
            for (var i = 0; i < services.length; i++) {
                services[i].onConfigure(this.config);
            }
        }

        /**
         * 初始化并启动引擎。
         *
         * @param {StartupEngineCallback} callback - 指定引擎启动完成的回调方法。
         * @returns {boolean} 如果引擎正确进入启动流程返回 <code>true</code> ，否则返回 <code>false</code> 。<b>注：返回值不表示引擎是否启动成功。</b>
         */

    }, {
        key: 'startup',
        value: function startup(callback) {
            var _this = this;

            nucleus.getLogger().i("CubeEngine", "Cube Engine for HTML5/JavaScript v" + this.version);

            this.isShutdown = false;
            this._cube_token = this.utils.randomNumber(100000, 999999) + '';
            var task = function task() {
                // 启动 nucleus
                if (_this.connect.init()) {
                    // 添加监听器
                    // nucleus.talkService.addListener(new NetworkListener(this));
                    // 加载license模块
                    _this.loadLicense();
                    // 加载账号模块
                    _this.loadUser();
                    // 加载群组模块
                    _this.loadGroup();
                    // 回调启动完成
                    callback(false);
                    _this.delegate.onStarted();

                    _this.triggerCubeEngineState(_CubeState.CubeState.Start);
                    return true;
                } else {
                    // this.delegate.onError();
                    callback(new _CubeError.CubeError(_StateCode.StateCode.InitFailed, 'Cube Engine initialization failed!'));
                    return false;
                }
            };
            if (this.utils.isIE9) {
                window.WEB_SOCKET_FORCE_FLASH = true;

                nucleus.activateWSPlugin(_CUBE_DOMAIN.indexOf("192") >= 0 ? "libs/ws" : "http://" + _CUBE_DOMAIN + "/libs/ws", function () {
                    task();
                });
            } else {
                task();
            }

            return true;
        }

        /**
         * 启动引擎回调函数。
         *
         * @callback StartupEngineCallback
         * @param error {CubeError|boolean} 启动发生错误
         */
        /**
         * 关闭引擎并关闭所有子模块。
         */

    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.isShutdown = true;
            window.nucleus.shutdown();
            // 终止各个模块
            var services = this.services.values();
            for (var i = 0; i < services.length; i++) {
                services[i].shutdown();
            }
            this.services.clear();
            this.server = new _CubeServer.CubeServer();

            this.delegate.onStopped();
            this.triggerCubeEngineState(_CubeState.CubeState.Stop);
        }

        /**
         * 返回引擎状态
         */

    }, {
        key: 'getCubeEngineState',
        value: function getCubeEngineState() {
            return this.cubeState;
        }
    }, {
        key: 'triggerCubeEngineState',
        value: function triggerCubeEngineState(state) {
            this.cubeState = state;
            this.delegate.onStateChange(state);
        }

        /**
         * 添加监听器
         * @param {Listener} listener 监听器实例
         */

    }, {
        key: 'addListener',
        value: function addListener(listener) {
            this.delegate.addListener(listener);
        }

        /**
         * 移除监听器
         * @param {Listener} listener 监听器实例
         */

    }, {
        key: 'removeListener',
        value: function removeListener(listener) {
            this.delegate.addListener(listener);
        }

        /**
         * 返回引擎当前使用的会话实例。
         *
         * @returns {Session} 会话对象的实例。
         */

    }, {
        key: 'getSession',
        value: function getSession() {
            return this.session;
        }
    }, {
        key: 'loadService',
        value: function loadService(name, serviceInstance) {
            if (typeof serviceInstance === 'function') {
                for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = arguments[_key];
                }

                if (name === 'Whiteboard' && args.length > 1 && typeof args[1] === 'string') {
                    name = 'Whiteboard' + args[1];
                }
                if (!this.services.containsKey(name)) {
                    var service = new (Function.prototype.bind.apply(serviceInstance, [null].concat([this], args)))();
                    service.startup();
                    this.services.put(name, service);
                }

                return true;
            }

            return false;
        }
    }, {
        key: 'loadUser',
        value: function loadUser() {
            return this.loadService('User', _UserServiceWorker.UserServiceWorker);
        }
    }, {
        key: 'loadLicense',
        value: function loadLicense() {
            return this.loadService('License', _LicenseServiceWorker.LicenseServiceWorker);
        }
    }, {
        key: 'loadSetting',
        value: function loadSetting() {
            return this.loadService('Setting', _SettingServiceWorker.SettingServiceWorker);
        }

        /**
         * 加载群组模块。
         * 群组模块为基础模块, 引擎启动成功后就会调用。
         *
         * @returns {boolean} 返回是否加载成功。
         */

    }, {
        key: 'loadGroup',
        value: function loadGroup() {
            return this.loadService('Group', _GroupServiceWorker.GroupServiceWorker);
        }

        /**
         * 加载消息服务模块。
         *
         * @returns {boolean} 返回是否加载成功。
         */

    }, {
        key: 'loadMessager',
        value: function loadMessager() {
            return this.loadService('Message', window.CubeMessageServiceWorker);
        }

        /**
         * 加载文件管理模块。
         *
         * @returns {boolean} 返回是否加载成功
         */

    }, {
        key: 'loadFileManager',
        value: function loadFileManager() {
            return this.loadService('Cloud', window.CubeFileManagerServiceWorker);
        }

        /**
         * 加载指令模块。
         *
         * @returns {boolean} 返回是否加载成功
         */

    }, {
        key: 'loadInstruction',
        value: function loadInstruction() {
            return this.loadService('Instruction', window.CubeInstructionServiceWorker);
        }

        /**
         * 加载音视频通话模块。
         *
         * @param {String} localVideo - 指定字符串形式的用于展示本地视频的 DOM 元素 ID 。
         * @param {String} remoteVideo - 指定字符串形式的用于展示对方视频的 DOM 元素 ID 。
         * @param {String} bellAudio - 指定用于播放响铃音频的 DOM 元素 ID 。
         * @returns {boolean} 返回是否加载成功。
         */

    }, {
        key: 'loadSignaling',
        value: function loadSignaling(localVideo, remoteVideo, bellAudio) {
            var ret = this.loadService('Call', window.CubeCallServiceWorker, document.getElementById(localVideo), document.getElementById(remoteVideo), bellAudio !== undefined ? document.getElementById(bellAudio) : null);

            if (ret) {
                // 判断 WebSocket 是否可用
                if (!nucleus.ts.isWebSocketSupported()) {
                    nucleus.getLogger().i("CubeEngine", "Adapter WebSocket");
                    nucleus.ts.resetHeartbeat(_CELLET.CELLET.Signaling, 2000);
                }
            }

            return ret;
        }

        /**
         * 加载远程桌面模块。
         *
         * @returns {boolean} 返回是否加载成功
         */

    }, {
        key: 'loadShareDesktop',
        value: function loadShareDesktop(ShareDesktopLib, viewDom) {
            return this.loadService('ShareDesktop', window.CubeShareDesktopServiceWorker, ShareDesktopLib, viewDom);
        }

        /**
         * 加载会议模块。
         *
         * @param {String} localVideo - 指定字符串形式的用于显示本地视频的 DOM 元素 ID 。
         * @param {String} remoteVideo - 指定字符串形式的用于显示主讲人视频的 DOM 元素 ID 。
         * @param {String} bellAudio - 指定字符串形式的用于播放响铃的音频的 DOM 元素 ID 。
         * @param {String} localCanvas - 本地画布的元素ID 。
         * @returns {boolean} 返回是否加载成功
         */

    }, {
        key: 'loadConference',
        value: function loadConference(localVideo, remoteVideo, bellAudio, localCanvas) {
            var ret = this.loadService('Conference', window.CubeConferenceServiceWorker);
            if (ret) {
                this.sipService = new CubeSIPServiceWorker();

                this.sipService.start(this, document.getElementById(localVideo), document.getElementById(remoteVideo), bellAudio !== undefined ? document.getElementById(bellAudio) : null);

                // 创建媒体控制器
                this.sipMediaService = new CubeMediaServiceWorker(this.sipService, localCanvas);
            }

            return ret;
        }

        /**
         * 加载白板服务模块。
         *
         * @param {String} domId - 指定白板画布容器 DOM 节点的 ID 。
         * @param {String} name - 指定白板名称。
         * @returns {WhiteboardService} 白板服务实例。
         */

    }, {
        key: 'loadWhiteboard',
        value: function loadWhiteboard(domId, name) {
            return this.loadService('Whiteboard', window.CubeWhiteboardServiceWorker, domId, name);
        }

        /**
         * 加载直播模块。
         * @param {Object} liveCore - 直播核心库
         * @param {HTMLElement} viewDom - 需要显示直播画面的视图元素
         * @returns {boolean} 返回是否加载成功
         */

    }, {
        key: 'loadLive',
        value: function loadLive(liveCore, viewDom) {
            return this.loadService('Live', window.CubeLiveServiceWorker, liveCore, viewDom);
        }

        /**
         * 加载最近会话列表模块
         */

    }, {
        key: 'loadRecentSession',
        value: function loadRecentSession() {
            return this.loadService('RecentSession', window.CubeRecentSessionServiceWorker);
        }

        /**
         * 返回账号管理服务对象
         * @returns {null|AccountService}
         */

    }, {
        key: 'getUserService',
        value: function getUserService() {
            return this.services.get('User');
        }

        /**
         * 返回设置服务对象
         * @returns {null|AccountService}
         */

    }, {
        key: 'getSettingService',
        value: function getSettingService() {
            return this.services.get('Setting');
        }

        /**
         * 返回群组服务实例。
         *
         * @returns {null|GroupService} 群组服务对象。
         */

    }, {
        key: 'getGroupService',
        value: function getGroupService() {
            return this.services.get('Group');
        }

        /**
         * 返回消息服务的实例。
         *
         * @returns {null|MessageService} 消息服务实例。
         */

    }, {
        key: 'getMessageService',
        value: function getMessageService() {
            return this.services.get('Message');
        }

        /**
         * 返回音视频通话服务的实例。
         *
         * @returns {null|CallService} 音视频服务实例。
         */

    }, {
        key: 'getCallService',
        value: function getCallService() {
            return this.services.get('Call');
        }

        /**
         * 返回引擎中用户操作媒体设备的媒体控制器对象实例。
         *
         * @returns {null|MediaService} 返回媒体控制器对象实例。
         */

    }, {
        key: 'getMediaService',
        value: function getMediaService() {
            if (null != this.session.callPeer) {
                if (this.session.callPeer.name.length <= 4 && null != this.sipService) {
                    return this.sipMediaService;
                } else {
                    return this.sspMediaService;
                }
            } else {
                return this.sspMediaService;
            }
        }

        /**
         * 返回白板服务对象实例。
         *
         * @param {String} boardName - 指定白板服务的名称，如果不填写该参数，则返回第一个白板服务。
         * @returns {null|WhiteboardService} 白板服务对象实例。
         */

    }, {
        key: 'getWhiteboardService',
        value: function getWhiteboardService(boardName) {
            if (typeof boardName === 'string') {
                return this.services.get('Whiteboard' + boardName);
            }

            return this.services.get('Whiteboard');
        }

        /**
         * 返回会议服务的实例。
         *
         * @returns {null|ConferenceService} 会议服务实例。
         */

    }, {
        key: 'getConferenceService',
        value: function getConferenceService() {
            return this.services.get('Conference');
        }

        /**
         * 返回文件管理服务实例。
         *
         * @returns {null|FileManagerService} 文件管理服务实例。
         */

    }, {
        key: 'getFileManagerService',
        value: function getFileManagerService() {
            return this.services.get('Cloud');
        }

        /**
         * 返回指令服务的实例。
         *
         * @returns {null|InstructionService} 指令服务实例。
         */

    }, {
        key: 'getInstructionService',
        value: function getInstructionService() {
            return this.services.get('Instruction');
        }

        /**
         * 返回远程桌面服务的实例。
         *
         * @returns {null|ShareDesktopService} 指令服务实例。
         */

    }, {
        key: 'getShareDesktopService',
        value: function getShareDesktopService() {
            return this.services.get('ShareDesktop');
        }

        /**
         * 返回直播服务的实例。
         *
         * @returns {null|LiveService} 指令服务实例。
         */

    }, {
        key: 'getLiveService',
        value: function getLiveService() {
            return this.services.get('Live');
        }

        /**
         * 返回最近会话服务的实例。
         *
         * @returns {null|RecentSessionService} 指令服务实例。
         */

    }, {
        key: 'getRecentSessionService',
        value: function getRecentSessionService() {
            return this.services.get('RecentSession');
        }
    }, {
        key: 'getDeviceInfo',
        value: function getDeviceInfo() {
            // if (null == this.deviceInfo) {
            if (null != this.accName) {
                var deviceName = null != this.config && this.config.deviceName ? this.config.deviceName : navigator.appName;
                this.deviceInfo = {
                    name: deviceName,
                    version: navigator.appVersion,
                    platform: navigator.platform,
                    deviceId: this.utils.getLocalUUID()
                };
                return this.deviceInfo;
            }

            return false;
            // }
        }
    }, {
        key: 'getUtils',
        value: function getUtils() {
            return this.utils;
        }
    }, {
        key: '_parseICEServers',
        value: function _parseICEServers(servers) {
            var stunUrls = [],
                ret = [],
                iceServers = servers;
            for (var i = 0; i < iceServers.length; i++) {
                var iceServer = iceServers[i];
                if (null != iceServer.Username && null != iceServer.Password) {
                    ret.push({
                        urls: "turn:" + iceServer.Host + ':' + iceServer.Port,
                        username: iceServer.Username,
                        credential: iceServer.Password
                    });
                }
                stunUrls.push("stun:" + iceServer.Host + ':' + iceServer.Port);
            }
            if (stunUrls.length > 0) {
                ret.push({
                    urls: stunUrls
                });
            }
            return ret;
        }

        /**
         * 设置资源路径, 资源路径包含引擎依赖的声音文件和图片文件, 资源目录应和引擎提供的资源目录结构相同。
         *
         * @default "./assets"
         * @param {String} path - 资源根目录
         */

    }, {
        key: 'setResourcePath',
        value: function setResourcePath(path) {
            this.resourcePath = path;

            if (typeof window.CubeWhiteboardServiceWorker === 'function') {
                var services = this.services.values();
                for (var i = 0; i < services.length; i++) {
                    var service = services[i];
                    if (service instanceof CubeWhiteboardServiceWorker) {
                        service.core.updateResourcePath();
                    }
                }
            }
        }
    }, {
        key: 'addCelletMember',
        value: function addCelletMember(cellet, member) {
            var members = this.celletMembers.get(cellet);
            if (members instanceof Array) {
                members.push(member);
            } else {
                members = [member];

                // 记录被激活的有效数据通道
                _VALID_CELLETS.push(cellet);
            }
            this.celletMembers.put(cellet, members);
        }
    }, {
        key: 'removeCelletMember',
        value: function removeCelletMember(cellet, member) {
            var members = this.celletMembers.get(cellet);
            if (members instanceof Array) {
                for (var i = 0; i < members.length; i++) {
                    if (members[i] === member) {
                        members.splice(i, 1);
                    }
                }
                this.celletMembers.put(cellet, members);
            }
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(cellet, action, dialect) {
            if (cellet === _CELLET.CELLET.Responder) {
                this.responder.fireDialogue(action, dialect);
            } else {
                var members = this.celletMembers.get(cellet);
                if (members instanceof Array) {
                    for (var i = 0; i < members.length; i++) {
                        members[i].onDialogue(action, dialect);
                    }
                }
            }
        }
    }, {
        key: '_setCodec',
        value: function _setCodec(sdp) {
            switch (this.config.videoCodec) {
                case _CodecType.CodecType.H264:
                    sdp = this.utils.isFirefox ? sdp.replace(/SAVPF 96/g, 'SAVPF 126') : sdp.replace(/SAVPF 96 97 98 99 100/g, 'SAVPF 100 96 97 98 99');
                    sdp = this.utils.isFirefox ? sdp.replace(/SAVPF 96/g, 'SAVPF 126') : sdp.replace(/SAVPF  96 98 100 102/g, 'SAVPF 100 96 98 102');
                    break;
                case _CodecType.CodecType.VP9:
                    sdp = sdp.replace(/SAVPF 96 97 98/g, 'SAVPF 98 96 97');
                    sdp = sdp.replace(/SAVPF 96 98/g, 'SAVPF 98 96');
                    break;
                default:
                    break;
            }
            return sdp;
        }

        // 暖车测试

    }, {
        key: 'warmUp',
        value: function warmUp(yesCb, noCb) {
            var _this2 = this;

            if (null == this.getCallService()) {
                if (undefined !== noCb) {
                    noCb();
                }
                return;
            }

            var getUserMedia = navigator.getUserMedia || window.getUserMedia;
            if (undefined === getUserMedia || null == getUserMedia) {
                if (undefined !== noCb) {
                    noCb();
                }
                return;
            }

            var overflow = document.body.style.overflow;
            var w = window.innerWidth;
            var h = window.innerHeight;

            document.body.style.overflow = "hidden";

            var vx = parseInt((w - 480) * 0.5);
            var vy = parseInt((h - 480) * 0.5) - 40;
            var bx = parseInt((w - 200 - 200 - 40) * 0.5);
            var by = parseInt(vy + 480 + 10);

            var mask = ['<div style="position:absolute;float:left;left:0px;top:0px;opacity:0.7;-moz-opacity:0.7;-webkit-opacity:0.7;background:#000;', 'width:', w, 'px;height:', h, 'px"></div>', '<video id="_cube_warmup_video" width="480" height="480" style="position:absolute;float:left;left:', vx, 'px;top:', vy, 'px;background:#101010;" autoplay></video>', '<button id="_cube_warmup_yes" style="width:200px;height:30px;position:absolute;float:left;left:', bx, 'px;top:', by, 'px;">我看到了视频</button>', '<button id="_cube_warmup_no" style="width:200px;height:30px;position:absolute;float:left;left:', bx + 240, 'px;top:', by, 'px;">我没有看到视频</button>'];

            var c = document.createElement("div");
            c.style.position = "absolute";
            c.style.styleFloat = "left";
            c.style.cssFloat = "left";
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.width = w + "px";
            c.style.height = h + "px";
            c.style.zIndex = 9998;
            c.innerHTML = mask.join('');
            document.body.appendChild(c);

            var video = document.getElementById('_cube_warmup_video');
            var localStream = null;

            if (this.utils.isIE || this.utils.isSafari) {
                navigator.getUserMedia = window.getUserMedia;
            }

            navigator.getUserMedia({ "audio": true, "video": true }, function (stream) {
                localStream = stream;

                if (_this2.utils.isIE || _this2.utils.isSafari) {
                    window.attachMediaStream(video, stream);

                    video = document.getElementById('_cube_warmup_video');
                    video.style.position = "absolute";
                    video.style.styleFloat = "left";
                    video.style.cssFloat = "left";
                    video.style.left = vx + "px";
                    video.style.top = vy + "px";
                    video.style.zIndex = 9999;
                    return;
                }

                if (window.URL) {
                    // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
                    video.src = window.URL.createObjectURL(localStream);
                } else {
                    // Firefox and Opera: the src of the video can be set directly from the stream
                    video.src = localStream;
                }
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            }, function (error) {
                //alert('发生错误: ' + JSON.stringify(error));

                document.body.removeChild(c);
                document.body.style.overflow = overflow;

                if (undefined !== noCb) {
                    noCb();
                }
            });

            var closeFun = function closeFun() {
                if (_this2.utils.isIE || _this2.utils.isSafari) {
                    window.attachMediaStream(document.getElementById('_cube_warmup_video'), null);
                } else {
                    video.src = "";
                }

                if (null != localStream) {
                    localStream.stop();
                    localStream = null;
                }
                document.body.removeChild(c);
                document.body.style.overflow = overflow;
            };
            var btn = document.getElementById('_cube_warmup_yes');
            btn.addEventListener('click', function (e) {
                closeFun();

                if (undefined !== yesCb) {
                    yesCb.call(null);
                }
            }, false);
            btn = document.getElementById('_cube_warmup_no');
            btn.addEventListener('click', function (e) {
                closeFun();

                if (undefined !== noCb) {
                    noCb();
                }
            }, false);
        }
    }]);

    return CubeEngine;
}();

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 数据库表映射实体。
 * 该实体中的任意一个属性(除 tableName 和 function 类型的属性)都会被当作数据库表的列名存储到数据库中
 * 注意事项: 属性名不能取值 group, unique, limit, select, from 等关键字段, 会导致数据库表无法创建的问题
 *
 * @class DBEntity
 * @author Guan Yong
 */
var DBEntity = exports.DBEntity = function () {
    function DBEntity(id, tableName) {
        _classCallCheck(this, DBEntity);

        /* 表的ID, 唯一字段 */
        this.id = id;
        /* 表名称 */
        this.tableName = tableName;
    }

    /**
     * 返回所有的属性及其值(不包含 tableName 和 function 类型的属性)
     * @returns {Object}
     */


    _createClass(DBEntity, [{
        key: 'toJSON',
        value: function toJSON() {
            var obj = {};
            for (var item in this) {
                if (typeof this[item] != 'function' && item != 'baseprototype' && item != 'tableName') {
                    obj[item] = this[item];
                }
            }
            return obj;
        }
    }, {
        key: 'onChange',
        value: function onChange(lastVersion) {}
    }]);

    return DBEntity;
}();

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBManager = DBManager;

var _DBCore = __webpack_require__(105);

/**
 * 数据库接口类。
 * 基于CubeDBCore的数据库服务接口对象
 *
 * @class DBManager
 * @author Guan Yong
 */
function DBManager(databaseName) {
    var dbc = new _DBCore.CubeDBCore(),
        tasks = [];
    this.isConnect = false;

    this.loadEntity = function (entityName) {
        var entity = new entityName();
        var columns = [];
        for (var property in entity.toJSON()) {
            if (property != 'id') {
                columns.push(property);
            }
        }
        dbc.loadTable(entity.tableName, columns);
    };

    this.connect = function (callback) {
        var _this = this;

        dbc.open(databaseName, function () {
            _this.isConnect = true;
            if (null != callback) {
                callback();
            }
            if (tasks.length > 0) {
                for (var i = 0; i < tasks.length; i++) {
                    _this[tasks[i].action].apply(_this, tasks[i].args);
                }
            }
            tasks = null;
        });
    };

    this.setEntity = function (entity, fn) {
        if (this.isConnect) {
            dbc.setItem(entity.tableName, entity.toJSON(), fn);
        } else {
            tasks[tasks.length] = { action: 'setEntity', args: arguments };
        }
    };

    this.getEntity = function (entity, fn) {
        if (this.isConnect) {
            dbc.getItem(entity.tableName, entity.id, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntity', args: arguments };
        }
    };

    this.getEntityByColumn = function (entity, columnName, columnValue, fn) {
        if (this.isConnect) {
            dbc.getItemByColumn(entity.tableName, columnName, columnValue, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntityByColumn', args: arguments };
        }
    };

    this.getEntityByColumnGT = function (entity, columnName, columnValue, isSelf, fn) {
        if (this.isConnect) {
            dbc.getItemByColumnGT(entity.tableName, columnName, columnValue, isSelf, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntityByColumnGT', args: arguments };
        }
    };

    this.getEntitysByColumn = function (entity, columnName, columnValue, fn) {
        if (this.isConnect) {
            dbc.getItemsByColumn(entity.tableName, columnName, columnValue, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntitysByColumn', args: arguments };
        }
    };

    this.getEntitysByColumns = function (entity, columnName, columnValues, fn) {
        if (this.isConnect) {
            dbc.getItemsByColumns(entity.tableName, columnName, columnValues, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntitysByColumns', args: arguments };
        }
    };

    this.getEntitysByManyColumn = function (entity, columnNames, columnValues, fn) {
        if (this.isConnect) {
            dbc.getItemsByManyColumn(entity.tableName, columnNames, columnValues, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntitysByManyColumn', args: arguments };
        }
    };

    this.getEntitysByColumnAndPage = function (entity, columnName, columnValue, start, max, isReverse, fn) {
        if (this.isConnect) {
            dbc.getItemsByColumnAndPage(entity.tableName, columnName, columnValue, start, max, isReverse, fn);
        } else {
            tasks[tasks.length] = { action: 'getEntitysByColumnAndPage', args: arguments };
        }
    };

    this.getAllEntity = function (entity, fn) {
        if (this.isConnect) {
            dbc.getAllItem(entity.tableName, fn);
        } else {
            tasks[tasks.length] = { action: 'getAllEntity', args: arguments };
        }
    };

    this.delEntityById = function (entity, value, fn) {
        if (this.isConnect) {
            dbc.delItemById(entity.tableName, value, fn);
        } else {
            tasks[tasks.length] = { action: 'delEntityById', args: arguments };
        }
    };

    this.delEntitysByColumn = function (entity, columnName, columnValue, fn) {
        if (this.isConnect) {
            dbc.delItemsByColumn(entity.tableName, columnName, columnValue, fn);
        } else {
            tasks[tasks.length] = { action: 'delEntitysByColumn', args: arguments };
        }
    };

    this.clearEntity = function (entity, fn) {
        if (this.isConnect) {
            dbc.clearTable(entity.tableName, fn);
        } else {
            tasks[tasks.length] = { action: 'clearEntity', args: arguments };
        }
    };

    this.disconnect = function (fn) {
        dbc.close(fn);
    };
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Peer.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 用于描述视频、语音通话对端的 Peer 类。
 *
 * @class Peer
 * @author Xu Jiangwei, Guan Yong
 */
var Peer = exports.Peer = function () {
    function Peer(name) {
        _classCallCheck(this, Peer);

        this.name = name;
        this.displayName = null;
        this.latency = -1;
    }

    /**
     * 返回 Peer 的注册名。
     *
     * @returns {String} 返回字符串形式的注册 Cube 号。
     */


    _createClass(Peer, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }

        /**
         * 返回 Peer 的显示名。
         *
         * @returns {String} 返回字符串形式的显示名称。
         */

    }, {
        key: "getDisplayName",
        value: function getDisplayName() {
            return this.displayName;
        }

        /**
         * 返回 Peer 的网络行程。
         *
         * @returns {String} 返回数字型的行程数据，单位：毫秒。
         */

    }, {
        key: "getLatency",
        value: function getLatency() {
            return this.latency;
        }
    }]);

    return Peer;
}();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Permission.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 权限枚举。
 *
 * @readonly
 * @enum {String}
 * @author Guan Yong
 */
var Permission = exports.Permission = {
  /**
   * 权限限定为只读。
   */
  READ: "read",

  /**
   * 权限限定为可读写。
   */
  WRITE: "write"
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Setting = undefined;

var _NotifyConfig = __webpack_require__(40);

var _DisturbConfig = __webpack_require__(39);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Setting .js
                                                                                                                                                           * Cube Engine
                                                                                                                                                           *
                                                                                                                                                           * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                           */

/**
 * 设置对象。
 *
 * @class Setting
 * @author Li WenKai
 */


var Setting = exports.Setting = function Setting() {
    _classCallCheck(this, Setting);

    //置顶配置列表key:cubeId或groupId，value:置顶时间
    this.topMap = new HashMap();
    //静音配置列表key:cubeId或groupId，value:静音时间
    this.muteMap = new HashMap();
    //通知配置
    this.notify = new _NotifyConfig.NotifyConfig();
    //打扰配置
    this.disturb = new _DisturbConfig.DisturbConfig();
    //推送token
    this.deviceToken = '';
    //每次更新配置时间
    this.updateTime = 0;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * GroupContext.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 群组对象数据上下文。
 *
 * @class GroupContext
 * @author Xu Jiangwei, Guan Yong
 */
var GroupContext = exports.GroupContext = function () {
    function GroupContext(data) {
        _classCallCheck(this, GroupContext);

        this.data = data;
    }

    _createClass(GroupContext, [{
        key: "getName",
        value: function getName() {
            return this.data.name;
        }

        /**
         * 返回群组 ID 。群组 ID 唯一表示一个群组。
         *
         * @returns {String} 群组 ID 。
         */

    }, {
        key: "getId",
        value: function getId() {
            return this.data.name;
        }

        /**
         * 返回群组的显示名称。
         *
         * @returns {String} 群组显示名。
         */

    }, {
        key: "getDisplayName",
        value: function getDisplayName() {
            return this.data.displayName;
        }

        /**
         * 返回群组创建人。
         *
         * @returns {String} 群组创建人的 Cube 号。
         */

    }, {
        key: "getFounder",
        value: function getFounder() {
            return this.data.founder;
        }

        /**
         * 返回群组创建的绝对时间。
         *
         * @returns {Number} 群组创建时的时间戳。
         */

    }, {
        key: "getCreated",
        value: function getCreated() {
            return this.data.created;
        }

        /**
         * 返回群组的所有成员。
         *
         * @returns {Array} 群组内的所有成员的 Cube 号数组。
         */

    }, {
        key: "getMembers",
        value: function getMembers() {
            return this.data.members;
        }

        /**
         * 返回群组的所有管理员。
         *
         * @returns {Array} 群组内的所有管理员的 Cube 号数组。
         */

    }, {
        key: "getMasters",
        value: function getMasters() {
            return this.data.masters;
        }

        /**
         * 返回群组的所有来宾成员。
         *
         * @returns {Array} 群组内的所有来宾的 Cube 号数组。如果没有来宾成员则返回 <code>null</code> 。
         */

    }, {
        key: "getGuests",
        value: function getGuests() {
            if (undefined === this.data.guests) {
                return null;
            }

            return this.data.guests;
        }

        /**
         * 返回群组是否是开放式群组。
         *
         * @returns {Boolean} 如果是开放群组返回 <code>true</code> 。
         */

    }, {
        key: "isOpen",
        value: function isOpen() {
            return this.data.open;
        }

        /**
         * 返回群组已经申请的会议实例。
         *
         * @returns {CubeConference} 返回会议对象实例。如果群组没有关联的会议则返回 <code>null</code> 。
         */

    }, {
        key: "getConference",
        value: function getConference() {
            if (this.data.attachment) {
                if (undefined !== this.data.attachment.conference) {
                    return this.data.attachment.conference;
                }
            } else if (undefined !== this.data.conference) {
                return this.data.conference;
            }

            return null;
        }
    }]);

    return GroupContext;
}();

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CubeEngine = __webpack_require__(75);

var _Service = __webpack_require__(9);

var _Listener = __webpack_require__(8);

var _DBEntity = __webpack_require__(76);

var _DBManager = __webpack_require__(77);

var _CubeConst = __webpack_require__(5);

var _CubeRequest = __webpack_require__(41);

var _CubeError = __webpack_require__(0);

var _CELLET = __webpack_require__(4);

var _StateCode = __webpack_require__(3);

var _Delegate = __webpack_require__(14);

var _Peer = __webpack_require__(78);

var _Session = __webpack_require__(36);

var _UserListener = __webpack_require__(45);

var _GroupContext = __webpack_require__(81);

var _RegistrationState = __webpack_require__(7);

var _Permission = __webpack_require__(79);

var _GroupListener = __webpack_require__(43);

var _DeviceListener = __webpack_require__(42);

var _CubeState = __webpack_require__(35);

var _CubeConfig = __webpack_require__(22);

var _CodecType = __webpack_require__(34);

var _Group = __webpack_require__(37);

var _GroupType = __webpack_require__(38);

var _Member = __webpack_require__(16);

var _MemberRole = __webpack_require__(17);

var _User = __webpack_require__(10);

var _GroupConfig = __webpack_require__(15);

var _SettingListener = __webpack_require__(44);

var _NotifyConfig = __webpack_require__(40);

var _DisturbConfig = __webpack_require__(39);

var _Setting = __webpack_require__(80);

/**
 * 引导程序, 负责引擎的初始化工作。
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
    global._CUBE_DOMAIN = null;
    global._CUBE_CONF_CAPTURE_SERVICE = null;

    global._CUBE_PORT = null;
    global._CUBE_HTTP_SERVICE = null; // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_SERVICE = null; // 格式： https://ex.shixinyun.com:9543
    global._CUBE_HTTP_SERVICES = null; // 格式： https://ex.shixinyun.com:9543
    global._CUBE_SERVICE = null; // 根据当前协议自动识别的服务器地址
    global._CUBE_HTTP_FILE_SERVICE = null; // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_FILE_SERVICE = null; // 格式： https://ex.shixinyun.com:9543
    global._CUBE_HTTP_STORAGE_SERVICE = null; // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_STORAGE_SERVICE = null; // 格式： https://ex.shixinyun.com:9543


    global._CUBE_STUN_SERVERS = null;
    global._CUBE_ICE_SERVERS = null;
    global._VALID_CELLETS = [];
    global._MSTR_TOKEN = "CubeTeam@2015";
    global._cube_timestamp = Date.now();

    global.cube = new _CubeEngine.CubeEngine();

    // 提供全局的接口类
    global.CubeService = _Service.Service;
    global.CubeListener = _Listener.Listener;
    global.CubeDBEntity = _DBEntity.DBEntity;
    global.CubeDBManager = _DBManager.DBManager;
    global.CubeConst = _CubeConst.CubeConst;
    global.CubeRequest = _CubeRequest.CubeRequest;
    global.CubeError = _CubeError.CubeError;
    global.CELLET = _CELLET.CELLET;
    global.CubeStateCode = _StateCode.StateCode;
    global.CubeDelegate = _Delegate.Delegate;
    global.CubePeer = _Peer.Peer;
    global.CubeSession = _Session.Session;
    global.CubeUserListener = _UserListener.UserListener;
    global.CubeSettingListener = _SettingListener.SettingListener;
    global.CubeGroupContext = _GroupContext.GroupContext;
    global.CubeRegistrationState = _RegistrationState.RegistrationState;
    global.CubePermission = _Permission.Permission;
    global.CubeGroupListener = _GroupListener.GroupListener;
    global.CubeDeviceListener = _DeviceListener.DeviceListener;
    global.CubeState = _CubeState.CubeState;
    global.CubeConfig = _CubeConfig.CubeConfig;
    global.CubeCodecType = _CodecType.CodecType;
    global.CubeGroup = _Group.Group;
    global.CubeGroupType = _GroupType.GroupType;
    global.CubeGroupConfig = _GroupConfig.GroupConfig;
    global.CubeGroupMember = _Member.Member;
    global.CubeMemberRole = _MemberRole.MemberRole;
    global.CubeUser = _User.User;
    global.CubeDisturbConfig = _DisturbConfig.DisturbConfig;
    global.CubeNotifyConfig = _NotifyConfig.NotifyConfig;
    global.CubeSetting = _Setting.Setting;

    if (global._cube_cross === undefined) {
        global._cube_cross = {
            host: "http://" + _CUBE_DOMAIN, //"http://192.168.0.198:8080/cube"

            callbackMap: {},

            addCallback: function addCallback(sn, success, error) {
                this.callbackMap[sn] = success;
            }
        };
    }

    global._cube_cross.queryRecordArchives = function (sn, data) {
        var dom = document.getElementById(sn);
        var name = dom.getAttribute("name");

        var success = global._cube_cross.callbackMap[sn];
        success.call(null, name, data);

        document.body.removeChild(dom);
        dom = null;

        delete global._cube_cross.callbackMap[sn];
    };
})(window);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CubeDBCore = CubeDBCore;
/**
 * 数据库核心类。
 * 基于indexedDB/WebSQL的数据库服务核心组件
 * 兼容 Chrome 10+/Firefox 4.0+/Safari 3.1+/Opera 10.5+/iOS Safari 3.2+/Android Browser 2.1/IE 10+
 *
 * @class CubeDBCore
 * @author Guan Yong
 */
function CubeDBCore() {
    var _this = this;

    var version = '4',
        tables = [],
        db = void 0;
    if (!window.indexedDB) {
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    }
    window.openDatabase = window.openDatabase || window.mozOpenDatabase || window.webkitOpenDatabase || window.msOpenDatabase;
    // Support indexedDB
    if (window.indexedDB) {
        this.open = function (name, callback) {
            var request = window.indexedDB.open(name, version);
            request.onsuccess = function (e) {
                db = request.result;
                callback();
            };
            request.onupgradeneeded = function (e) {
                for (var i = 0; i < tables.length; i++) {
                    var table = tables[i];
                    if (e.currentTarget.result.objectStoreNames.contains(table.name)) {
                        e.currentTarget.result.deleteObjectStore(table.name);
                    }
                    var store = e.currentTarget.result.createObjectStore(table.name, { keyPath: "id" });
                    for (var j = 0; j < table.columns.length; j++) {
                        store.createIndex(table.columns[j], table.columns[j], { unique: false });
                    }
                }
            };
            request.onerror = function (e) {
                throw new Error("Open database error: " + e.target.errorCode);
            };
        };

        this.close = function (callback) {
            if (null != db) {
                db.close();
                if (null != callback) {
                    setTimeout(callback, 500);
                }
            }
        };

        this.deleteDB = function (name, callback) {
            var request = window.indexedDB.deleteDatabase(name);
            request.onerror = function (e) {
                callback(e.target);
            };
            request.success = function (e) {
                callback(false);
            };
        };

        this.setItem = function (tableName, items, callback) {
            var transaction = db.transaction(tableName, "readwrite");
            var store = transaction.objectStore(tableName);
            var request = store.put(items);
            request.onsuccess = function () {
                transaction = null;
                callback(false);
            };
            request.onerror = function (e) {
                transaction = null;
                callback(e);
            };
        };

        this.getItem = function (tableName, id, callback) {
            var store = db.transaction(tableName, "readwrite").objectStore(tableName);
            store.get(id).onsuccess = function (e) {
                callback(false, e.target.result);
            };
        };

        this.getItemByColumn = function (tableName, columnName, columnValue, callback) {
            var store = db.transaction(tableName).objectStore(tableName);
            if (typeof columnValue == 'boolean') {
                columnValue = columnValue ? 1 : 0;
            }
            var range = IDBKeyRange.only(columnValue);
            var index = store.index(columnName);
            index.get(range).onsuccess = function (e) {
                callback(false, e.target.result);
            };
        };

        //大于指定值
        this.getItemByColumnGT = function (tableName, columnName, columnValue, isSelf, callback) {
            var store = db.transaction(tableName).objectStore(tableName);
            if (typeof columnValue == 'boolean') {
                columnValue = columnValue ? 1 : 0;
            }
            var range = IDBKeyRange.lowerBound(columnValue, !isSelf);
            var index = store.index(columnName);
            var messages = [];
            index.openCursor(range).onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    messages.push(cursor.value);
                    cursor.continue();
                } else {
                    callback(false, messages);
                }
            };
        };

        this.getItemsByColumn = function (tableName, columnName, columnValue, callback) {
            var store = db.transaction(tableName).objectStore(tableName);
            if (typeof columnValue == 'boolean') {
                columnValue = columnValue ? 1 : 0;
            }
            var range = IDBKeyRange.only(columnValue);
            var index = store.index(columnName);
            var result = [];
            var request = index.openCursor(range);
            request.onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    result[result.length] = cursor.value;
                    cursor['continue']();
                } else {
                    callback(false, result);
                }
            };
            request.onerror = function (e) {
                callback(e);
            };
        };

        this.getItemsByColumns = function (tableName, columnName, columnValues, callback) {
            if (columnValues.length == 1) {
                if (columnName == 'id') {
                    this.getItem(tableName, columnValues[0], function (err, data) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(false, [data]);
                        }
                    });
                } else {
                    this.getItemsByColumn(tableName, columnName, columnValues[0], callback);
                }
            } else {
                var store = db.transaction(tableName).objectStore(tableName);
                var result = [];
                store.openCursor().onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        for (var i = 0; i < columnValues.length; i++) {
                            if (cursor.value[columnName] == columnValues[i]) {
                                result.push(cursor.value);
                                break;
                            }
                        }
                        cursor['continue']();
                    } else {
                        callback(false, result);
                    }
                };
            }
        };

        this.getItemsByManyColumn = function (tableName, columnNames, columnValues, callback) {
            if (columnNames.length > 0 && columnNames.length == columnValues.length) {
                if (columnNames.length == 1) {
                    this.getItemsByColumn(tableName, columnNames[0], columnValues[0], callback);
                } else {
                    var store = db.transaction(tableName).objectStore(tableName);
                    if (typeof columnValues[0] == 'boolean') {
                        columnValues[0] = columnValues[0] ? 1 : 0;
                    }
                    var range = IDBKeyRange.only(columnValues[0]);
                    var index = store.index(columnNames[0]);
                    var result = [];
                    index.openCursor(range).onsuccess = function (e) {
                        var cursor = e.target.result;
                        if (cursor) {
                            for (var i = 1; i < columnNames.length; i++) {
                                if (cursor.value[columnNames[i]] == columnValues[i]) {
                                    if (i == columnNames.length - 1) {
                                        result.push(cursor.value);
                                    }
                                } else {
                                    break;
                                }
                            }
                            cursor['continue']();
                        } else {
                            callback(false, result);
                        }
                    };
                }
            } else {
                callback(new Error('columnNames and columnValues are inconsistent in length'));
            }
        };

        this.getItemsByColumnAndPage = function (tableName, columnName, columnValue, start, max, isReverse, callback) {
            var store = db.transaction(tableName).objectStore(tableName);
            if (typeof columnValue == 'boolean') {
                columnValue = columnValue ? 1 : 0;
            }
            var range = IDBKeyRange.only(columnValue);
            var index = store.index(columnName);
            var result = [];
            var isFirst = true; //用来指示是否是首个
            var order = "next";
            if (isReverse) {
                order = "prev";
            }
            index.openCursor(range, order).onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    if (isFirst && start > 0) {
                        isFirst = false;
                        cursor.advance(start);
                        return;
                    } else {
                        result[result.length] = cursor.value;
                        if (result.length < max) {
                            cursor['continue']();
                        } else {
                            callback(false, result);
                        }
                    }
                } else {
                    callback(false, result);
                }
            };
        };

        this.getAllItem = function (tableName, callback) {
            var store = db.transaction(tableName).objectStore(tableName);
            var result = [];
            store.openCursor().onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    result[result.length] = cursor.value;
                    cursor['continue']();
                } else {
                    callback(false, result);
                }
            };
        };

        this.delItemById = function (tableName, id, callback) {
            var store = db.transaction(tableName, "readwrite").objectStore(tableName);
            store['delete'](id).onsuccess = function (e) {
                callback(false);
            };
        };

        this.delItemsByColumn = function (tableName, columnName, columnValue, callback) {
            var self = _this;
            if (columnName == "id") {
                _this.delItemById(tableName, columnValue, callback);
            } else {
                //先查询出需要删除的数据再删除
                _this.getItemsByColumn(tableName, columnName, columnValue, function (err, datas) {
                    if (err) {
                        callback(err);
                    } else {
                        if (null != datas && datas.length > 0) {
                            for (var i = 0; i < datas.length; i++) {
                                (function (index) {
                                    self.delItemById(tableName, datas[index].id, function () {
                                        if (index == datas.length - 1) {
                                            callback(false);
                                        }
                                    });
                                })(i);
                            }
                        } else {
                            callback(false);
                        }
                    }
                });
            }
        };

        this.clearTable = function (tableName, callback) {
            var store = db.transaction(tableName, "readwrite").objectStore(tableName);
            store.clear().onsuccess = function () {
                callback(false);
            };
        };
    }
    // Support WebSQL
    else if (window.openDatabase) {
            this.open = function (name, callback) {
                db = window.openDatabase(name, '', '', 100 * 1024 * 1024);
                // 不存在该数据库时, 版本号为空
                if (db.version == '') {
                    // 变更版本号
                    db.changeVersion(db.version, version, function () {
                        // NOTHING
                    }, function (err) {
                        throw err;
                    }, function () {
                        // 版本号变更成功, 初始化数据库
                        db.transaction(function (tx) {
                            for (var i = 0; i < tables.length; i++) {
                                var table = tables[i];
                                tx.executeSql('CREATE TABLE ' + table.name + ' (id unique,' + table.columns.toString() + ')');
                            }
                            callback();
                        });
                    });
                }
                // 存在该数据库, 版本号正确
                else if (db.version == version) {
                        callback();
                    }
                    // 存在该数据库, 但版本号过低
                    else {
                            // 变更版本号
                            db.changeVersion(db.version, version, function () {
                                // NOTHING
                            }, function (err) {
                                throw err;
                            }, function () {
                                // 版本号变更成功, 升级数据库
                                // TODO 数据库升级操作
                            });
                        }
            };

            this.close = function () {
                db = null;
            };

            this.deleteDB = function (name, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT name FROM sqlite_master where type = ?', ['table'], function (tx, results) {
                        for (var i = 0, len = results.rows.length; i < len; i++) {
                            var _name = results.rows.item(i).name;
                            if (_name.indexOf('__') != 0) {
                                tx.executeSql('DROP TABLE ' + _name, null);
                            }
                        }
                        callback(false);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.setItem = function (tableName, items, callback) {
                db.transaction(function (tx) {
                    var columnNames = [],
                        codes = [],
                        columnValues = [];
                    for (var key in items) {
                        columnNames.push(key);
                        codes.push('?');
                        columnValues.push(items[key]);
                    }
                    tx.executeSql('REPLACE INTO ' + tableName + ' (' + columnNames.toString() + ') VALUES (' + codes.toString() + ')', columnValues, function () {
                        callback(false);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getItem = function (tableName, id, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE id = ?', [id], function (tx, results) {
                        callback(false, results.rows.length > 0 ? results.rows.item(0) : null);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getItemByColumn = function (tableName, columnName, columnValue, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnName + ' = ?', [columnValue], function (tx, results) {
                        callback(false, results.rows.length > 0 ? results.rows.item(0) : null);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            //大于指定值
            this.getItemByColumnGT = function (tableName, columnName, columnValue, isSelf, callback) {
                db.transaction(function (tx) {
                    var s = isSelf ? ' >= ' : ' > ';
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnName + s + '?', [columnValue], function (tx, results) {
                        callback(false, results.rows.length > 0 ? results.rows.item(0) : null);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getItemsByColumn = function (tableName, columnName, columnValue, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnName + ' = ?', [columnValue], function (tx, results) {
                        var list = [];
                        for (var i = 0, len = results.rows.length; i < len; i++) {
                            list.push(results.rows.item(i));
                        }
                        callback(false, list);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getItemsByColumns = function (tableName, columnName, columnValues, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnName + ' in (?' + new Array(columnValues.length).join(',?') + ')', columnValues, function (tx, results) {
                        var list = [];
                        for (var i = 0, len = results.rows.length; i < len; i++) {
                            list.push(results.rows.item(i));
                        }
                        callback(false, list);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getItemsByManyColumn = function (tableName, columnNames, columnValues, callback) {
                if (columnNames.length > 0 && columnNames.length == columnValues.length) {
                    db.transaction(function (tx) {
                        tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnNames.join('=? and ') + '=?', columnValues, function (tx, results) {
                            var list = [];
                            for (var i = 0, len = results.rows.length; i < len; i++) {
                                list.push(results.rows.item(i));
                            }
                            callback(false, list);
                        }, function (transaction, error) {
                            callback(error);
                        });
                    });
                } else {
                    callback(new Error('columnNames and columnValues are inconsistent in length'));
                }
            };

            this.getItemsByColumnAndPage = function (tableName, columnName, columnValue, start, max, isReverse, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName + ' WHERE ' + columnName + '=?' + (isReverse ? ' ORDER BY id DESC' : '') + ' LIMIT ?,?', [columnValue, start, max], function (tx, results) {
                        var list = [];
                        for (var i = 0, len = results.rows.length; i < len; i++) {
                            list.push(results.rows.item(i));
                        }
                        callback(false, list);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.getAllItem = function (tableName, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM ' + tableName, null, function (tx, results) {
                        var list = [];
                        for (var i = 0, len = results.rows.length; i < len; i++) {
                            list.push(results.rows.item(i));
                        }
                        callback(false, list);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.delItemById = function (tableName, id, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('DELETE FROM ' + tableName + ' WHERE id=?', [id], function () {
                        callback(false);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.delItemsByColumn = function (tableName, columnName, columnValue, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('DELETE FROM ' + tableName + ' WHERE ' + columnName + '=?', [columnValue], function () {
                        callback(false);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };

            this.clearTable = function (tableName, callback) {
                db.transaction(function (tx) {
                    tx.executeSql('DELETE FROM ' + tableName, null, function () {
                        callback(false);
                    }, function (transaction, error) {
                        callback(error);
                    });
                });
            };
        }

    this.loadTable = function (name, columns) {
        tables.push({ name: name, columns: columns });
    };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * ActionType.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 指令类型枚举
 *
 * @enum
 * @author Li WenKai
 */
var ActionType = exports.ActionType = {
  /**
   *  返回类型
   */
  Ack: "ack",

  /**
   *  同步类型
   */
  Sync: "sync",

  /**
   *  通知类型
   */
  Notify: "notify"
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Responder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Responder.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CubeConst = __webpack_require__(5);

var _StateCode = __webpack_require__(3);

var _CELLET = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Responder = exports.Responder = function () {
    function Responder(engine, session) {
        _classCallCheck(this, Responder);

        this.engine = engine;
        this.session = session;
        this.timer = 0;
        this.lastTimestamp = null;
        this.query = false;
    }

    _createClass(Responder, [{
        key: 'start',
        value: function start(host, query, socketEnabled) {
            if (undefined === query) {
                this.query = false;
            } else {
                this.query = query;
            }

            if (undefined === socketEnabled) {
                socketEnabled = true;
            }

            var address = new InetAddress(host, 4005);

            if (nucleus.talkService.call([_CELLET.CELLET.Responder], address, socketEnabled)) {
                var self = this;
                this.timer = setTimeout(function () {
                    self._timerHandler();
                }, 10000);
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.timer > 0) {
                clearTimeout(this.timer);
                this.timer = 0;
            }

            this.session.latency = -1;
            if (null != this.session.callPeer) {
                this.session.callPeer.latency = -1;
            }

            nucleus.talkService.hangUp(_CELLET.CELLET.Responder);
        }
    }, {
        key: '_timerHandler',
        value: function _timerHandler() {
            clearTimeout(this.timer);
            this.timer = 0;

            if (nucleus.talkService.isCalled(_CELLET.CELLET.Responder)) {
                // 启动对时
                var param = { "timestamp": { "originate": Date.now() } };
                this.engine.connect.send(_CELLET.CELLET.Responder, _CubeConst.CubeConst.ActionTime, param);
            }

            var self = this;
            this.timer = setTimeout(function () {
                self._timerHandler();
            }, 60000);
        }
    }, {
        key: 'fireDialogue',
        value: function fireDialogue(action, dialect) {
            if (action == _CubeConst.CubeConst.ActionTimeAck) {
                // 处理 time-ack
                var state = dialect.getParamAsString("state");
                if (state.code == _StateCode.StateCode.Ok) {
                    // 获取服务器回包
                    this.lastTimestamp = dialect.getParamAsString("timestamp");
                    // 添加 arrive 字段
                    this.lastTimestamp.arrive = Date.now();

                    var param = {
                        "name": this.session.name.toString(),
                        "timestamp": this.lastTimestamp
                    };

                    // 计算行程
                    var latency = this.lastTimestamp.arrive - this.lastTimestamp.originate - (this.lastTimestamp.transmit - this.lastTimestamp.receive);
                    this.session.latency = latency;

                    // 上报
                    this.engine.connect.send(_CELLET.CELLET.Responder, _CubeConst.CubeConst.ActionRespond, param);
                } else {
                    nucleus.getLogger().e("CubeResponder", "Error '" + action + "' : " + state.code + " : " + state.desc);
                }
            } else if (action == _CubeConst.CubeConst.ActionRespondAck) {
                // 处理 respond-ack
                var _state = dialect.getParamAsString("state");
                if (_state.code == _StateCode.StateCode.Ok) {
                    if (this.query) {
                        // 进行查询
                        var peer = this.session.callPeer.name;
                        if (null != peer) {
                            var _param = { "name": peer.toString() };
                            this.engine.connect.send(_CELLET.CELLET.Responder, _CubeConst.CubeConst.ActionQueryRespond, _param);
                        }
                    }
                } else {
                    nucleus.getLogger().e("CubeResponder", "Error '" + action + "' : " + _state.code + " : " + _state.desc);
                }
            } else if (action == _CubeConst.CubeConst.ActionQueryRespondAck) {
                // 处理 query-respond-ack
                var _state2 = dialect.getParamAsString("state");
                if (_state2.code == _StateCode.StateCode.Ok) {
                    var data = dialect.getParamAsString("data");
                    if (data.name == this.session.callPeer.name) {
                        var timestamp = data.timestamp;
                        var _latency = timestamp.arrive - timestamp.originate - (timestamp.transmit - timestamp.receive);
                        this.session.callPeer.latency = _latency;
                    }
                }
            }
        }
    }, {
        key: 'fireContacted',
        value: function fireContacted() {}
    }, {
        key: 'fireQuitted',
        value: function fireQuitted() {}
    }, {
        key: 'fireFailed',
        value: function fireFailed(failure) {
            if (this.timer > 0) {
                clearTimeout(this.timer);
                this.timer = 0;
            }
        }
    }]);

    return Responder;
}();

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectionService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ConnectionService.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ConnectionServiceWorker = __webpack_require__(65);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 通信连接工具类。通信连接服务中心
 *
 * @class ConnectionService
 * @author Li Wen
 */
var ConnectionService = exports.ConnectionService = function () {
    function ConnectionService() {
        _classCallCheck(this, ConnectionService);

        this.TAG = "fldyconnection";
        this.instance = null;
    }

    _createClass(ConnectionService, [{
        key: "updateLicense",


        /**
         * 更新授权信息
         *
         * @param license
         */
        value: function updateLicense(license) {}

        /**
         * 是否初始化
         *
         * @return
         */

    }, {
        key: "isInit",
        value: function isInit() {}

        /**
         * 初始化连接
         */

    }, {
        key: "init",
        value: function init() {}

        /**
         * 销毁
         */

    }, {
        key: "destroy",
        value: function destroy() {}

        /**
         * 是否连接到服务器
         *
         * @return
         */

    }, {
        key: "isConnected",
        value: function isConnected() {}

        /**
         * 是否连接到服务器
         *
         * @param services
         *
         * @return
         */

    }, {
        key: "isConnected",
        value: function isConnected(services) {}

        /**
         * 是否连接到服务器
         *
         * @param service
         *
         * @return
         */

    }, {
        key: "isConnected",
        value: function isConnected(service) {}

        /**
         * 断开连接
         *
         * @param services
         */

    }, {
        key: "disConnected",
        value: function disConnected(services) {}

        /**
         * 断开连接
         */

    }, {
        key: "disConnected",
        value: function disConnected() {}

        /**
         * 连接服务
         *
         * @param host
         * @param port
         * @param service
         */

    }, {
        key: "connect",
        value: function connect(host, port, service) {}

        /**
         * 连接服务
         *
         * @param host
         * @param port
         * @param service
         * @param block
         */

    }, {
        key: "connect",
        value: function connect(host, port, service, block) {}

        /**
         * 获取服务器
         *
         * @return
         */

    }, {
        key: "getServers",
        value: function getServers() {}

        /**
         * 发送数据
         *
         * @param service
         * @param action
         * @param param
         * @param data
         */

    }, {
        key: "send",
        value: function send(service, action, param, data) {}

        /**
         * 进入后台
         */

    }, {
        key: "sleep",
        value: function sleep() {}

        /**
         * 回到前台
         */

    }, {
        key: "wakeup",
        value: function wakeup() {}
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (this.instance == null) {
                nucleus.getLogger().i(TAG, "ConnectionService:new");
                ConnectionService.instance = new _ConnectionServiceWorker.ConnectionServiceWorker();
            }
            return ConnectionService.instance;
        }
    }]);

    return ConnectionService;
}();

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CubeHttpServer = exports.CubeHttpServer = function () {
    function CubeHttpServer() {
        _classCallCheck(this, CubeHttpServer);

        this.host = null;
        this.port = null;
        this.sslPort = null;
        this.httpPort = null;
        this.ssl = location.protocol === 'https:';
    }

    _createClass(CubeHttpServer, [{
        key: 'update',


        /**
         *
         * @param license {{
         *      CubeServer: {Host: String, Port: Number},
         *      CubeHttpServer: {Host: String, HTTPPort: Number, SSLPort: Number},
         *      Conference: {HTTPCapture: String, SSLCapture: String}
         *  }}
         */
        value: function update(license) {
            this.host = _CUBE_DOMAIN = license.CubeServer.Host;

            this.httpHost = license.CubeHttpServer.Host;

            _CUBE_HTTP_SERVICE = "https://" + license.CubeHttpServer.Host + ":" + license.CubeHttpServer.HTTPPort;
            _CUBE_HTTPS_SERVICE = "https://" + license.CubeHttpServer.Host + ":" + license.CubeHttpServer.SSLPort;

            if (this.ssl) {
                this.port = _CUBE_PORT = license.CubeServer.HTTPPort + 10;
                this.httpPort = license.CubeHttpServer.SSLPort;
                _CUBE_CONF_CAPTURE_SERVICE = license.Conference.SSLCapture;
            } else {
                this.port = _CUBE_PORT = license.CubeServer.HTTPPort;
                this.httpPort = license.CubeHttpServer.HTTPPort;
                _CUBE_CONF_CAPTURE_SERVICE = license.Conference.HTTPCapture;
            }
            // _CUBE_DOMAIN ='192.168.1.6', _CUBE_PORT =7070;
            _CUBE_SERVICE = this.http;
        }
    }, {
        key: 'http',
        get: function get() {
            return (this.ssl ? 'https://' : 'http://') + this.httpHost + ':' + this.httpPort;
        }
    }]);

    return CubeHttpServer;
}();

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ICEServer = exports.ICEServer = function () {
    /**
     * ICEServer 构造函数
     *
     * @param ip       IP地址
     * @param host     HOST域名
     * @param port     端口
     * @param username 帐号
     * @param password 密码
     */
    function ICEServer(ip, host, port, username, password) {
        _classCallCheck(this, ICEServer);

        this.ip = ip;
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }

    /**
     *
     * @param license {{
     *      CubeServer: {Host: String, Port: Number},
     *      CubeHttpServer: {Host: String, HTTPPort: Number, SSLPort: Number},
     *      Conference: {HTTPCapture: String, SSLCapture: String}
     *  }}
     */


    _createClass(ICEServer, [{
        key: "update",
        value: function update(license) {
            this.host = _CUBE_DOMAIN = license.CubeServer.Host;

            this.httpHost = license.CubeHttpServer.Host;

            _CUBE_HTTP_SERVICE = "https://" + license.CubeHttpServer.Host + ":" + license.CubeHttpServer.HTTPPort;
            _CUBE_HTTPS_SERVICE = "https://" + license.CubeHttpServer.Host + ":" + license.CubeHttpServer.SSLPort;

            if (this.ssl) {
                this.port = _CUBE_PORT = license.CubeServer.HTTPPort + 10;
                this.httpPort = license.CubeHttpServer.SSLPort;
                _CUBE_CONF_CAPTURE_SERVICE = license.Conference.SSLCapture;
            } else {
                this.port = _CUBE_PORT = license.CubeServer.HTTPPort;
                this.httpPort = license.CubeHttpServer.HTTPPort;
                _CUBE_CONF_CAPTURE_SERVICE = license.Conference.HTTPCapture;
            }
            // _CUBE_DOMAIN ='192.168.1.6', _CUBE_PORT =7070;
            _CUBE_SERVICE = this.http;
        }
    }]);

    return ICEServer;
}();

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CubeEngineListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listener2 = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 引擎状态监听器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @interface CubeEngineListener
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CubeEngineListener = exports.CubeEngineListener = function (_Listener) {
  _inherits(CubeEngineListener, _Listener);

  function CubeEngineListener() {
    _classCallCheck(this, CubeEngineListener);

    return _possibleConstructorReturn(this, (CubeEngineListener.__proto__ || Object.getPrototypeOf(CubeEngineListener)).apply(this, arguments));
  }

  _createClass(CubeEngineListener, [{
    key: "onStarted",

    /**
     * 引擎启动完成时回调
     */
    value: function onStarted() {}

    /**
     * 引擎状态变化时回调
     * @param state
     */

  }, {
    key: "onStateChange",
    value: function onStateChange(state) {}

    /**
     * 引擎停止时回调
     */

  }, {
    key: "onStopped",
    value: function onStopped() {}

    /**
     * 引擎错误时回调
     * @param error {Object} 错误信息
     */

  }, {
    key: "onFailed",
    value: function onFailed(error) {}
  }]);

  return CubeEngineListener;
}(_Listener2.Listener);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Service2 = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GroupService.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 群组服务。
 *
 * @interface GroupService
 * @author Guan Yong, Xu Jiangwei
 */
var GroupService = exports.GroupService = function (_Service) {
    _inherits(GroupService, _Service);

    function GroupService() {
        _classCallCheck(this, GroupService);

        return _possibleConstructorReturn(this, (GroupService.__proto__ || Object.getPrototypeOf(GroupService)).apply(this, arguments));
    }

    _createClass(GroupService, [{
        key: 'create',

        /**
         * 创建新群组。
         *
         * @param {cubeGroupConfig} config 群组配置
         */
        value: function create(config) {}

        /**
         * 删除已存在的群组。
         *
         * @param groupId {String} - 指定需要删除的群组 Cube 号。
         * @returns {boolean} 该操作的指令是否被正确发出。
         */

    }, {
        key: 'destroy',
        value: function destroy(groupId) {}

        /**
         * 添加新的群组成员。
         *
         * @param groupId {String} - 指定需要添加成员的群组 Cube 号。
         * @param members {Array.<String>} - 指定需要添加的成员 Cube 号。
         * @returns {boolean} 该操作的指令是否被正确发出。
         */

    }, {
        key: 'addMembers',
        value: function addMembers(groupId, members) {}

        /**
         * 删除已存在的群组成员。
         *
         * @param groupId {String} - 指定需要删除成员的群组 Cube 号。
         * @param members {Array.<String>} - 指定需要删除的成员 Cube 号。
         * @returns {boolean} 该操作的指令是否被正确发出。
         */

    }, {
        key: 'removeMembers',
        value: function removeMembers(groupId, members) {}

        /**
         * 邀请组成员
         *
         * @param groupId {String} - 指定需要邀请成员的群组 Cube 号。
         * @param members {Array.<String>} - 指定需要邀请的成员 Cube 号。
         * @returns {boolean} 该操作的指令是否被正确发出。
         */

    }, {
        key: 'inviteMembers',
        value: function inviteMembers(groupId, members) {}
    }, {
        key: 'rejectInvite',


        /**
         * 拒绝邀请
         *
         * @param groupId {String} - 指定拒绝邀请成员的群组 Cube 号。
         * @param members {Array.<String>} - 邀请者Cube 号。
         */
        value: function rejectInvite(groupId, cubeId) {}
    }, {
        key: 'acceptInvite',


        /**
         * 接受邀请
         *
         * @param groupId {String} - 指定拒绝邀请成员的群组 Cube 号。
         * @param members {<String>} - 邀请者Cube 号。
         */
        value: function acceptInvite(groupId, cubeId) {}
    }, {
        key: 'applyJoin',


        /**
         * 申请加入群组
         *
         * @param groupId
         * @return
         */
        value: function applyJoin(groupId) {}
    }, {
        key: 'rejectApply',


        /**
         * 拒绝申请
         *
         * @param groupId
         * @param cubeId 申请者ID
         */
        value: function rejectApply(groupId, cubeId) {}
    }, {
        key: 'acceptApply',


        /**
         * 同意申请
         *
         * @param groupId
         * @param cubeId 申请者ID
         */
        value: function acceptApply(groupId, cubeId) {}
    }, {
        key: 'queryGroups',


        /**
         * 查询当前账号所在的所有群组的 Cube 号列表。
         *
         * @param {Function} callback - 指定查询成功回调。
         * @param {Function} errorCallback - 指定错误及异常回调。
         * @returns {boolean} 该操作的指令是否被正确发出。
         */
        value: function queryGroups(callback, errorCallback) {}

        /**
         * 添加管理员
         * @param groupId {String} - 指定需要设置管理员的群组 Cube 号
         * @param master {String} - 需要设置为管理员的群成员 Cube 号
         */

    }, {
        key: 'addMaster',
        value: function addMaster(groupId, master) {}

        /**
         * 删除管理员
         * @param groupId {String} - 指定需要删除管理员的群组 Cube 号
         * @param master {String} - 需要删除的管理员的 Cube 号
         */

    }, {
        key: 'removeMaster',
        value: function removeMaster(groupId, master) {}

        /**
         * 修改群组(仅可以修改群昵称，头像，拥有者，开关群组，绑定群组ID信息)
         *
         * @param group 群组实体
         * @return
         */

    }, {
        key: 'update',
        value: function update(group) {}

        /**
         * 创建来宾账号，来宾账号在服务器不做持久化
         *
         * @param groupId
         * @param number
         * @return
         */

    }, {
        key: 'createGuest',
        value: function createGuest(groupId, number) {}
    }]);

    return GroupService;
}(_Service2.Service);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 授权服务接口
 *
 * @interface LicenseListener
 * @author Li WenKai
 */
var LicenseListener = exports.LicenseListener = function () {
  function LicenseListener() {
    _classCallCheck(this, LicenseListener);
  }

  _createClass(LicenseListener, [{
    key: "onLicenseUpdated",

    /**
     * 授权信息更新
     *
     * @param license
     */
    value: function onLicenseUpdated(license) {}

    /**
     * 授权信息出错
     *
     * @param error
     */

  }, {
    key: "onLicenseFailed",
    value: function onLicenseFailed(error) {}
  }]);

  return LicenseListener;
}();

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LicenseService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Service2 = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 授权服务接口
 *
 * @interface AccountService
 * @author Guan Yong
 */
var LicenseService = exports.LicenseService = function (_Service) {
  _inherits(LicenseService, _Service);

  function LicenseService() {
    _classCallCheck(this, LicenseService);

    return _possibleConstructorReturn(this, (LicenseService.__proto__ || Object.getPrototypeOf(LicenseService)).apply(this, arguments));
  }

  _createClass(LicenseService, [{
    key: 'isInit',

    /**
     * 授权信息是否初始化
     */
    value: function isInit() {}

    /**
     * 更新配置
     */

  }, {
    key: 'updateCubeConfig',
    value: function updateCubeConfig(config) {}

    /**
     * 保存授权信息
     */

  }, {
    key: 'saveLicense',
    value: function saveLicense(accounts, callback) {}

    /**
     * 根据配置初始化授权信息
     */

  }, {
    key: 'init',
    value: function init(context, config) {}

    /**
     * 检查更新授权信息
     */

  }, {
    key: 'checkLicenseUpdate',
    value: function checkLicenseUpdate(cubeToken, callback) {}

    /**
     * 直接更新服务器下发的授权信息
     */

  }, {
    key: 'updateLicense',
    value: function updateLicense(context, config) {}

    /**
     * 检查当前授权是否超期
     */

  }, {
    key: 'isLicenseOutDate',
    value: function isLicenseOutDate(cubeToken, callback) {}

    /**
     * 判断是否需要更新License信息
     *
     * @return
     */

  }, {
    key: 'needUpdateLicense',
    value: function needUpdateLicense(cubeToken, callback) {}
  }]);

  return LicenseService;
}(_Service2.Service);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Service2 = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SettingService.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 设置服务。
 *
 * @interface GroupService
 * @author Guan Yong, Xu Jiangwei
 */
var SettingService = exports.SettingService = function (_Service) {
  _inherits(SettingService, _Service);

  function SettingService() {
    _classCallCheck(this, SettingService);

    return _possibleConstructorReturn(this, (SettingService.__proto__ || Object.getPrototypeOf(SettingService)).apply(this, arguments));
  }

  _createClass(SettingService, [{
    key: 'updateNotifyConfig',

    /**
     * 更新通知设置
     *
     * @param NotifyConfig
     */
    value: function updateNotifyConfig(config) {}
  }, {
    key: 'updateDisturbConfig',


    /**
     * 更新打扰设置
     *
     * @param DisturbConfig
     */
    value: function updateDisturbConfig(config) {}
  }, {
    key: 'updateDeviceToken',


    /**
     * 更新推送设置
     *
     * @param deviceToken
     */
    value: function updateDeviceToken(deviceToken) {}
  }, {
    key: 'addTopSession',


    /**
     * 添加置顶会话
     *
     * @param sessionId cubeId或groupId
     */
    value: function addTopSession(sessionId) {}
  }, {
    key: 'removeTopSession',


    /**
     * 移除置顶会话
     *
     * @param sessionId cubeId或groupId
     */
    value: function removeTopSession(sessionId) {}
  }, {
    key: 'addMuteSession',


    /**
     * 移除静音会话（静音为不推送不通知）
     *
     * @param sessionId cubeId或groupId
     */
    value: function addMuteSession(sessionId) {}
  }, {
    key: 'removeMuteSession',


    /**
     * 移除静音会话（通知）
     *
     * @param sessionId cubeId或groupId
     */
    value: function removeMuteSession(sessionId) {}
  }, {
    key: 'syncSetting',


    /**
     * 同步最新配置
     *
     * @return
     */
    value: function syncSetting() {}
  }, {
    key: 'getSetting',


    /**
     * 获取最新配置
     *
     * @return
     */
    value: function getSetting() {}
  }]);

  return SettingService;
}(_Service2.Service);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Service2 = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AccountService.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 账号服务接口
 *
 * @interface AccountService
 * @author Guan Yong
 */
var UserService = exports.UserService = function (_Service) {
  _inherits(UserService, _Service);

  function UserService() {
    _classCallCheck(this, UserService);

    return _possibleConstructorReturn(this, (UserService.__proto__ || Object.getPrototypeOf(UserService)).apply(this, arguments));
  }

  _createClass(UserService, [{
    key: 'login',

    /**
     * 登录
     * @param {String} cubeId 登录账号
     * @param {String} cubePwd 登录密码
     * @param {String} licenseToken 授权令牌
     * @param {String} nickname 账号昵称
     * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表登录成功
     */
    value: function login(cubeId, cubePwd, licenseToken, nickname) {}

    /**
     * 注销
     * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表注销成功
     */

  }, {
    key: 'logout',
    value: function logout() {}

    /**
     * 查询账号基本信息和实时状态
     * @param {Array<String>} accounts 指定待查询账号列表
     * @param {QueryAccountsCallback} callback 指定查询回调函数
     */

  }, {
    key: 'queryAccounts',
    value: function queryAccounts(accounts, callback) {}

    /**查询在线设备列表*
     *
     * @property cubeId  {String} cube账号
     * @property callback 回调函数
     *  */

  }, {
    key: 'queryOnlineDevice',
    value: function queryOnlineDevice(cubeId, callback) {}

    /**查询在线设备详情*
     *
     * @property deviceId {String} 设备ID
     * @property callback 回调函数
     *  */

  }, {
    key: 'queryOnlineDeviceById',
    value: function queryOnlineDeviceById(deviceId, callback) {}
  }]);

  return UserService;
}(_Service2.Service);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GroupService2 = __webpack_require__(112);

var _GroupListener = __webpack_require__(43);

var _CubeConst = __webpack_require__(5);

var _CELLET = __webpack_require__(4);

var _Group = __webpack_require__(37);

var _Member = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GroupServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 群组服务实现。
 *
 * @class GroupServiceWorker
 * @author Xu Jiangwei, Guan Yong
 */
var GroupServiceWorker = exports.GroupServiceWorker = function (_GroupService) {
    _inherits(GroupServiceWorker, _GroupService);

    function GroupServiceWorker(engine) {
        _classCallCheck(this, GroupServiceWorker);

        return _possibleConstructorReturn(this, (GroupServiceWorker.__proto__ || Object.getPrototypeOf(GroupServiceWorker)).call(this, engine, _GroupListener.GroupListener, _CELLET.CELLET.Group));
    }

    /**
     * 创建群组。
     */


    _createClass(GroupServiceWorker, [{
        key: 'create',
        value: function create(config) {
            if (undefined == config || null == config) {
                return false;
            }

            var param = {
                token: this.engine.accToken,
                group: config
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionCreateGroup, param);
        }

        /**
         * 删除群组。
         */

    }, {
        key: 'destroy',
        value: function destroy(groupId) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId.toString()
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionDestroyGroup, param);
        }

        /**
         * 查询群组。
         */

    }, {
        key: 'queryGroups',
        value: function queryGroups(offset, count, callback, errorCallback) {
            var url = '/v3/users/groups/sync';
            var param = {
                token: this.engine.accToken,
                cubeId: this.engine.accName,
                offset: offset,
                limit: count
            };

            var server = new CubeRequest('');

            server.send(this._getHttpUrl(url), param, function (err, data) {
                if (!err) {
                    if (data.state.code == 200) {
                        if (typeof callback == "function") {
                            var groups = data.data.groups;
                            callback(groups);
                        }
                    } else {
                        if (typeof errorCallback == "function") {
                            errorCallback(data.state.code, data.state.desc);
                        }
                    }
                }
            });
        }

        /**
         * 查询群组详情。
         */

    }, {
        key: 'queryGroupDetails',
        value: function queryGroupDetails(groupIds, callback, errorCallback) {
            var url = this._getHttpUrl('/v3/groups');
            var param = {
                token: this.engine.accToken,
                groupIds: groupIds
            };
            NucleusAjax.newRequest(url).method("POST").content(param).send(function (response) {
                var data = JSON.parse(response.data);
                if (data.state.code == 200) {
                    var groups = data.data.groups;
                    if (typeof callback == "function") {
                        callback(groups);
                    }
                } else {
                    if (typeof errorCallback == "function") {
                        errorCallback(data.state.code, data.state.desc);
                    }
                }
            });
        }

        /**
         * 修改群组(仅可以修改群昵称，头像，拥有者，开关群组，绑定群组ID信息)
         *
         * @param group
         * @return
         */

    }, {
        key: 'update',
        value: function update(group) {
            var param = {
                token: this.engine.accToken,
                group: group
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionUpdateGroup, param);
        }

        /**
         * 添加成员。
         */

    }, {
        key: 'addMembers',
        value: function addMembers(groupId, members) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId,
                members: members
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionAddMember, param);
        }

        /**
         * 删除群组
         *
         * @param groupId 群组ID
         */

    }, {
        key: 'quit',
        value: function quit(groupId) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionQuitGroup, param);
        }

        /**
         * 删除成员。
         */

    }, {
        key: 'removeMembers',
        value: function removeMembers(groupId, members) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId,
                members: members
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionRemoveMember, param);
        }

        /**
         * 邀请组成员
         *
         * @param groupId
         * @param members
         */

    }, {
        key: 'inviteMembers',
        value: function inviteMembers(groupId, members) {
            var param = {
                token: this.engine.accToken,
                members: members,
                groupId: groupId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionInviteGroupMember, param);
        }
    }, {
        key: 'rejectInvite',


        /**
         * 拒绝邀请
         *
         * @param groupId
         * @param cubeId 邀请者ID
         */
        value: function rejectInvite(groupId, cubeId) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId,
                cubeId: cubeId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.AcitonRejectGroupInvite, param);
        }
    }, {
        key: 'acceptInvite',


        /**
         * 接受邀请
         *
         * @param groupId
         * @param cubeId 邀请者ID
         */
        value: function acceptInvite(groupId, cubeId) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId.toString(),
                cubeId: cubeId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionAcceptGroupInvite, param);
        }
    }, {
        key: 'applyJoin',


        /**
         * 申请加入群组
         *
         * @param groupId
         * @return
         */
        value: function applyJoin(groupId) {
            var param = {
                token: this.engine.accToken,
                groupId: groupId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionApplyJoinGroup, param);
        }
    }, {
        key: 'rejectApply',


        /**
         * 拒绝申请
         *
         * @param groupId
         * @param cubeId 申请者ID
         */
        value: function rejectApply(groupId, cubeId) {
            var param = {
                token: this.engine.accToken,
                cubeId: cubeId,
                groupId: groupId

            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionRejectApplyGroup, param);
        }
    }, {
        key: 'acceptApply',


        /**
         * 同意申请
         *
         * @param groupId
         * @param cubeId 申请者ID
         */
        value: function acceptApply(groupId, cubeId) {
            var param = {
                token: this.engine.accToken,
                cubeId: cubeId,
                groupId: groupId

            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionAcceptApplyGroup, param);
        }
    }, {
        key: 'addMaster',


        /**
         * 添加管理员
         */
        value: function addMaster(groupId, masters) {
            var param = {
                token: this.engine.accToken,
                masters: masters,
                groupId: groupId
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionAddMaster, param);
        }

        /**
         * 删除管理员
         */

    }, {
        key: 'removeMaster',
        value: function removeMaster(groupId, master) {
            var param = {
                groupId: groupId,
                masters: master,
                token: this.engine.accToken
            };

            return this.engine.connect.send(_CELLET.CELLET.Group, _CubeConst.CubeConst.ActionRemoveMaster, param);
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString("state");

            if (state.code && state.code != 200) {
                this.delegate.onGroupFailed(state.code);
                return;
            }

            var data = dialect.getParamAsString("data");
            var user = new _Member.Member(this.engine.accName);
            var group = data && data.group ? new _Group.Group(data.group) : '';
            if (null != this.delegate) {
                if (action == _CubeConst.CubeConst.ActionCreateGroupAck) {
                    this.delegate.onGroupCreated(group, user);
                } else if (action == _CubeConst.CubeConst.ActionCreateGroupSync) {
                    this.delegate.onGroupCreated(group, user);
                } else if (action == _CubeConst.CubeConst.ActionCreateGroupNotify) {
                    this.delegate.onGroupCreated(group, data.user);
                } else if (action == _CubeConst.CubeConst.ActionDestroyGroupAck) {
                    this.delegate.onGroupDestroyed(group, user);
                } else if (action == _CubeConst.CubeConst.ActionDestroyGroupSync) {
                    this.delegate.onGroupDestroyed(group, user);
                } else if (action == _CubeConst.CubeConst.ActionDestroyGroupNotify) {
                    this.delegate.onGroupDestroyed(group, data.user);
                } else if (action == _CubeConst.CubeConst.ActionUpdateGroupAck) {
                    this.delegate.onGroupUpdated(group, user);
                } else if (action == _CubeConst.CubeConst.ActionUpdateGroupSync) {
                    this.delegate.onGroupUpdated(group, user);
                } else if (action == _CubeConst.CubeConst.ActionUpdateGroupNotify) {
                    this.delegate.onGroupUpdated(group, data.user);
                } else if (action == _CubeConst.CubeConst.ActionAddMemberAck) {
                    this.delegate.onMemberAdded(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionAddMemberSync) {
                    this.delegate.onMemberAdded(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionAddMemberNotify) {
                    this.delegate.onMemberAdded(group, data.members, data.user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveGroupMemberAck) {
                    this.delegate.onMemberRemoved(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveGroupMemberSync) {
                    this.delegate.onMemberRemoved(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveGroupMemberNotify) {
                    this.delegate.onMemberRemoved(group, group.members, data.user);
                } else if (action == _CubeConst.CubeConst.ActionAddMasterAck) {
                    this.delegate.onMasterAdded(group, data.masters, user);
                } else if (action == _CubeConst.CubeConst.ActionAddMasterSync) {
                    this.delegate.onMasterAdded(group, data.masters, user);
                } else if (action == _CubeConst.CubeConst.ActionAddMasterNotify) {
                    this.delegate.onMasterAdded(group, data.masters, data.user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveMasterAck) {
                    this.delegate.onMasterRemoved(group, data.masters, user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveMasterSync) {
                    this.delegate.onMasterRemoved(group, data.masters, user);
                } else if (action == _CubeConst.CubeConst.ActionRemoveMasterNotify) {
                    this.delegate.onMasterRemoved(group, data.masters, data.user);
                } else if (action == _CubeConst.CubeConst.ActionAcceptGroupInviteAck) {
                    this.delegate.onGroupInviteJoined(group, user);
                } else if (action == _CubeConst.CubeConst.ActionAcceptGroupInviteSync) {
                    this.delegate.onGroupInviteJoined(group, user);
                } else if (action == _CubeConst.CubeConst.ActionAcceptGroupInviteNotify) {
                    this.delegate.onGroupInviteJoined(group, data.user, data.from);
                } else if (action == _CubeConst.CubeConst.ActionInviteGroupMemberAck) {
                    this.delegate.onGroupInvited(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionInviteGroupMemberSync) {
                    this.delegate.onGroupInviteJoined(group, data.members, user);
                } else if (action == _CubeConst.CubeConst.ActionInviteGroupMemberNotify) {
                    this.delegate.onGroupInvited(group, data.members, data.user);
                } else if (action == _CubeConst.CubeConst.AcitonRejectGroupInviteAck) {
                    this.delegate.onGroupRejectInvited(group, user);
                } else if (action == _CubeConst.CubeConst.AcitonRejectGroupInviteSync) {
                    this.delegate.onGroupRejectInvited(group, user);
                } else if (action == _CubeConst.CubeConst.AcitonRejectGroupInviteNotify) {
                    this.delegate.onGroupInviteJoined(group, data.user);
                } else if (action == _CubeConst.CubeConst.ActionRejectApplyGroupAck) {
                    this.delegate.onGroupRejectApplyed(group, data.user, user);
                } else if (action == _CubeConst.CubeConst.ActionRejectApplyGroupSync) {
                    this.delegate.onGroupRejectApplyed(group, data.user, user);
                } else if (action == _CubeConst.CubeConst.ActionRejectApplyGroupNotify) {
                    this.delegate.onGroupRejectApplyed(group, data.from, data.user);
                } else if (action == _CubeConst.CubeConst.ActionApplyJoinGroupAck) {
                    this.delegate.onGroupApplyed(group, user);
                } else if (action == _CubeConst.CubeConst.ActionApplyJoinGroupSync) {
                    this.delegate.onGroupApplyed(group, user);
                } else if (action == _CubeConst.CubeConst.ActionApplyJoinGroupNotify) {
                    this.delegate.onGroupApplyed(group, data.user);
                } else if (action == _CubeConst.CubeConst.ActionAcceptApplyGroupAck) {
                    this.delegate.onGroupApplyJoined(group, data.user, user);
                } else if (action == _CubeConst.CubeConst.ActionAcceptApplyGroupSync) {
                    this.delegate.onGroupApplyJoined(group, data.user, user);
                } else if (action == _CubeConst.CubeConst.ActionQuitGroupAck) {
                    this.delegate.onGroupQuited(group, data.from);
                } else if (action == _CubeConst.CubeConst.ActionQuitGroupSync) {
                    this.delegate.onGroupQuited(group, data.from);
                } else if (action == _CubeConst.CubeConst.ActionQuitGroupNotify) {
                    this.delegate.onGroupQuited(group, data.from);
                }
            }
        }
    }, {
        key: '_getHttpUrl',
        value: function _getHttpUrl(url) {
            return _CUBE_HTTP_SERVICES + url;
        }
    }]);

    return GroupServiceWorker;
}(_GroupService2.GroupService);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LicenseServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CubeConst = __webpack_require__(5);

var _CELLET = __webpack_require__(4);

var _LicenseService2 = __webpack_require__(114);

var _CubeHttpServer = __webpack_require__(109);

var _CubeServer = __webpack_require__(66);

var _ICEServer = __webpack_require__(110);

var _LicenseListener = __webpack_require__(113);

var _CubeConfig = __webpack_require__(22);

var _RegistrationState = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GroupServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 授权服务实现。
 *
 * @class LicenseServiceWorker
 * @author Li WenKai
 */
var LicenseServiceWorker = exports.LicenseServiceWorker = function (_LicenseService) {
    _inherits(LicenseServiceWorker, _LicenseService);

    function LicenseServiceWorker(engine) {
        _classCallCheck(this, LicenseServiceWorker);

        var _this = _possibleConstructorReturn(this, (LicenseServiceWorker.__proto__ || Object.getPrototypeOf(LicenseServiceWorker)).call(this, engine, _LicenseListener.LicenseListener, _CELLET.CELLET.License));

        _this.engine = engine;
        _this.tag = 'fldylicense';
        _this.name = 'cube.license';
        _this.context = null;
        // 配置信息
        _this.cubeCofing = new _CubeConfig.CubeConfig();
        _this.INTERVAL_TIME = 6 * 60 * 1000;

        _this.isInit = false;
        // 结构版本号
        _this.licenseVersion = '3.0.1';

        _this.host = 'http://125.208.1.67:9000/';
        // 授权获取地址
        _this.address = _this.engine.config.getLicenseServer();
        // AppID
        _this.appid = null;
        // AppKey
        _this.appKey = null;
        // 授权token
        _this.token = null;
        // 开始时间
        _this.beginDate = 0;
        // 结束时间
        _this.endDate = 0;
        // 核心服务器地址
        _this.cubeServer = new _CubeServer.CubeServer();
        //  HTTP 服务器地址
        _this.cubeHttpServer = new _CubeHttpServer.CubeHttpServer();
        // 会议信息
        _this.conference = {
            httpCapture: null,
            sslCapture: null
        };
        // 穿透服务器地址
        _this.iceServers = new _ICEServer.ICEServer();
        // 可使用模块
        _this.permissions = new HashMap();
        // 创建时间
        _this.createTime = 0;
        // 更新时间
        _this.updateTime = 0;
        // JSON
        _this.licenseJSON = null;

        _this.storageKey = null;
        // 公司信息
        _this.Company = {
            name: null,
            website: null
        };
        // 创建时间
        _this.createTime = 0;
        // 更新时间
        _this.updateTime = 0;

        _this.nodeId = 0;

        var license = localStorage.getItem(_this.storageKey);
        _this.appLicense = license ? JSON.parse(license) : null;
        return _this;
    }

    _createClass(LicenseServiceWorker, [{
        key: 'isInit',
        value: function isInit() {
            return this.isInit;
        }

        /**
         * 根据配置初始化授权信息
         */

    }, {
        key: 'init',
        value: function init(context, config) {
            this.isInit = false;
            this.context = context;
            this.cubeCofing = config;
        }

        /**
         * 授权信息是否初始化
         */

    }, {
        key: 'isInit',
        value: function isInit() {}

        /**
         * 更新配置
         */

    }, {
        key: 'updateCubeConfig',
        value: function updateCubeConfig(config) {}

        /**
         * 保存授权信息
         */

    }, {
        key: 'saveLicense',
        value: function saveLicense(accounts, callback) {}

        /**
         * 检查更新授权信息
         */

    }, {
        key: 'checkLicenseUpdate',
        value: function checkLicenseUpdate(address, token, appid, callback) {
            var _this2 = this;

            var server = new CubeRequest('');
            this.appid = appid;
            this.storageKey = 'CUBE_LICENSE_KEY_' + appid;
            token ? this.token = token : '';
            var postData = {
                token: this.token,
                appid: this.appid,
                version: this.licenseVersion,
                type: 'json'
            };
            if (this.appLicense) {
                postData.lastUpdateTime = this.appLicense.UpdateTime;
            }
            server.send(address ? address : this.engine.config.getLicenseServer(), postData, function (err, data) {
                if (err) {
                    callback(new CubeError(CubeStateCode.LoadLicenseFailed, 'Network error.'));

                    return;
                }

                if (data.state === 200) {
                    /** @type {object} */
                    var license = data.data.license;
                    /* license.CubeServer.Host = '182.150.24.10';
                     license.CubeServer.HTTPPort = 11070;*/
                    var version = parseFloat(license.Version);

                    if (version < 1.8 || version > 3.0) {
                        callback(new CubeError(StateCode.LoadLicenseFailed, 'License version version is too old!'));

                        return;
                    }

                    if (Date.now() > license.EndDate) {
                        callback(new CubeError(StateCode.LoadLicenseFailed, 'License has expired!'));

                        return;
                    }

                    localStorage.setItem(_this2.storageKey, JSON.stringify(license));
                    _this2.engine.server.update(license);
                    callback(false, true, license);
                } else if (data.state === 201) {
                    callback(false, false, _this2.appLicense);
                } else {
                    callback(new CubeError(data.state, 'Incorrect access.'));
                }
            });
        }

        /**
         * 直接更新服务器下发的授权信息
         */

    }, {
        key: 'updateLicense',
        value: function updateLicense(context, config) {}

        /**
         * 检查当前授权是否超期
         */

    }, {
        key: 'isLicenseOutDate',
        value: function isLicenseOutDate(cubeToken, callback) {}

        /**
         * 判断是否需要更新License信息
         *
         * @return
         */

    }, {
        key: 'needUpdateLicense',
        value: function needUpdateLicense(cubeToken, callback) {}
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString("state");
            if (action == _CubeConst.CubeConst.ActionLicenseNotify) {
                this._processLicenseNotify(dialect);
                var data = dialect.getParamAsString("data");
            }
        }
    }, {
        key: '_processLicenseNotify',
        value: function _processLicenseNotify(dialect) {
            var _this3 = this;

            var data = dialect.getParamAsString("data");
            if (data) {
                if (data.license && data.crypUrl) {
                    var server = new CubeRequest('');
                    var post = {
                        license: encodeURIComponent(data.license),
                        num: data.num
                    };
                    server.send(data.crypUrl, post, function (err, d) {
                        if (err || d.code !== 200) {
                            nucleus.getLogger().w('CubeEngine', ' license Failed! ' + err);
                        }
                        if (d.code === 200) {
                            var license = d.data;
                            _this3.engine.server.update(license);
                            _this3._updateLicense(license, true);
                        }
                    });
                } else {
                    // wait 毫秒后更新授权信息
                    setTimeout(function () {
                        _this3.licenseManager.checkAndUpdate(data.server, function (err, update, license) {
                            if (err) {
                                nucleus.getLogger().w('CubeEngine', 'Update license Failed! ' + err.message);
                                return;
                            }
                            _this3.engine.server.update(license);
                            _this3._updateLicense(license, update);
                        });
                    }, 5000);
                }
            }
        }
    }, {
        key: '_updateLicense',
        value: function _updateLicense(license, update) {
            if (update) {
                this.engine._appLicense = license;
                this.engine.hostAddress = new InetAddress(_CUBE_DOMAIN, _CUBE_PORT);
                // this.engine.hostAddress = new InetAddress('192.168.1.6',7070);
                this.engine.isLicenseLoaded = true;
                // 断开引擎连接
                this.engine.getUserService()._handUp();

                // 重新 call
                nucleus.talkService.call(_VALID_CELLETS, this.engine.hostAddress, this.engine.config.socketEnabled);
                // 重新登录
                if (typeof this.engine.accName === 'string' && !this.engine.isBeingRegister) {
                    this.engine.getUserService().login(this.engine.accName, this.engine.accToken, this.engine.accDisplayName);
                }
            }
        }
    }]);

    return LicenseServiceWorker;
}(_LicenseService2.LicenseService);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SettingServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SettingService2 = __webpack_require__(115);

var _SettingListener = __webpack_require__(44);

var _CubeConst = __webpack_require__(5);

var _CELLET = __webpack_require__(4);

var _ActionType = __webpack_require__(106);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SettingServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 设置服务实现。
 *
 * @class SettingServiceWorker
 * @author Xu Jiangwei, Guan Yong
 */
var SettingServiceWorker = exports.SettingServiceWorker = function (_SettingService) {
    _inherits(SettingServiceWorker, _SettingService);

    function SettingServiceWorker(engine) {
        _classCallCheck(this, SettingServiceWorker);

        var _this = _possibleConstructorReturn(this, (SettingServiceWorker.__proto__ || Object.getPrototypeOf(SettingServiceWorker)).call(this, engine, _SettingListener.SettingListener, _CELLET.CELLET.Setting));

        _this.updateTime = 0;
        _this.settingCallback = new Map();
        return _this;
    }

    /**
     * 更新通知设置
     *
     * @param NotifyConfig
     */


    _createClass(SettingServiceWorker, [{
        key: "updateNotifyConfig",
        value: function updateNotifyConfig(config) {
            if (undefined == config || null == config) {
                return false;
            }

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionUpdateNotifyConfig, config);
        }
    }, {
        key: "updateDisturbConfig",


        /**
         * 更新打扰设置
         *
         * @param DisturbConfig
         */
        value: function updateDisturbConfig(config) {
            if (undefined == config || null == config) {
                return false;
            }

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionUpdateDisturbConfig, config);
        }
    }, {
        key: "updateDeviceToken",


        /**
         * 更新推送设置
         *
         * @param deviceToken
         */
        value: function updateDeviceToken(deviceToken) {
            var param = {
                deviceToken: deviceToken
            };

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionUpdateDeviceToken, param);
        }
    }, {
        key: "addTopSession",


        /**
         * 添加置顶会话
         *
         * @param sessionId cubeId或groupId
         */
        value: function addTopSession(sessionId) {
            var param = {
                top: sessionId
            };

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionAddTop, param);
        }
    }, {
        key: "removeTopSession",


        /**
         * 移除置顶会话
         *
         * @param sessionId cubeId或groupId
         */
        value: function removeTopSession(sessionId) {
            var param = {
                top: sessionId
            };

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionRemoveTop, param);
        }
    }, {
        key: "addMuteSession",


        /**
         * 移除静音会话（静音为不推送不通知）
         *
         * @param sessionId cubeId或groupId
         */
        value: function addMuteSession(sessionId) {
            var param = {
                mute: sessionId
            };

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionAddMute, param);
        }
    }, {
        key: "removeMuteSession",


        /**
         * 移除静音会话（通知）
         *
         * @param sessionId cubeId或groupId
         */
        value: function removeMuteSession(sessionId) {
            var param = {
                mute: sessionId
            };

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionRemoveMute, param);
        }
    }, {
        key: "syncSetting",


        /**
         * 同步最新配置
         *
         * @return
         */
        value: function syncSetting() {
            var param = {
                updateTime: Date.now()
            };
            this.updateTime = param.updateTime;

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionSyncSetting, param);
        }
    }, {
        key: "getSetting",


        /**
         * 获取最新配置
         *
         * @return
         */
        value: function getSetting(callback) {
            var param = {
                updateTime: Date.now()
            };
            this.updateTime = param.updateTime;
            this.settingCallback.set("getSettingCallback", callback);

            return this.engine.connect.send(_CELLET.CELLET.Setting, _CubeConst.CubeConst.ActionQuerySetting, param);
        }
    }, {
        key: "onDialogue",
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString("state");
            // 错误直接回调
            if (state.code && state.code != 200) {
                this.delegate.onsettingFailed(state.code);
                return;
            }

            if (null != this.delegate) {
                for (var item in _CubeConst.CubeConst) {
                    for (var type in _ActionType.ActionType) {
                        // 拼接指令 返回方法_process + action
                        var Action = _CubeConst.CubeConst[item] + "-" + _ActionType.ActionType[type];
                        if (Action == action) {
                            var methods = _CubeConst.CubeConst[item].replace('Action', '_process');
                            this[methods](action, dialect);
                            break;
                        }
                    }
                }
            }
        }
    }, {
        key: "_processUpdateNotifyConfig",
        value: function _processUpdateNotifyConfig(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onNotifyConfigUpdated(data);
            }
        }
    }, {
        key: "_processUpdateDisturbConfig",
        value: function _processUpdateDisturbConfig(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onDisturbConfigUpdated(data);
            }
        }
    }, {
        key: "_processAddTop",
        value: function _processAddTop(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onTopSessionAdded(data.topMap, data.top);
            }
        }
    }, {
        key: "_processRemoveTop",
        value: function _processRemoveTop(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onTopSessionRemoved(data.topMap, data.top);
            }
        }
    }, {
        key: "_processAddMute",
        value: function _processAddMute(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onMuteSessionAdded(data.muteMap, data.mute);
            }
        }
    }, {
        key: "_processRemoveMute",
        value: function _processRemoveMute(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onMuteSessionRemoved(data.muteMap, data.mute);
            }
        }
    }, {
        key: "_processQuerySetting",
        value: function _processQuerySetting(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.settingCallback.get['getSettingCallback'](data);
            }
        }
    }, {
        key: "_processUpdateDeviceToken",
        value: function _processUpdateDeviceToken(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onDeviceTokenUpdated(data);
            }
        }
    }, {
        key: "_processSyncSetting",
        value: function _processSyncSetting(action, dialect) {
            var data = dialect.getParamAsString("data");
            if (data) {
                this.delegate.onSettingSynced(data.setting, data.updateTime);
            }
        }
    }]);

    return SettingServiceWorker;
}(_SettingService2.SettingService);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserService2 = __webpack_require__(116);

var _UserListener = __webpack_require__(45);

var _CELLET = __webpack_require__(4);

var _RegistrationState = __webpack_require__(7);

var _CubeConst = __webpack_require__(5);

var _CubeRequest = __webpack_require__(41);

var _CubeError = __webpack_require__(0);

var _StateCode = __webpack_require__(3);

var _DeviceListener = __webpack_require__(42);

var _Delegate = __webpack_require__(14);

var _NetworkListener = __webpack_require__(68);

var _User = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 账号服务实现
 *
 * @class UserServiceWorker
 * @author Guan Yong
 */
var UserServiceWorker = exports.UserServiceWorker = function (_UserService) {
    _inherits(UserServiceWorker, _UserService);

    /**
     * @constructs
     * @param {CubeEngine} engine 引擎实例
     */
    function UserServiceWorker(engine) {
        _classCallCheck(this, UserServiceWorker);

        // 设备上线监听器
        var _this = _possibleConstructorReturn(this, (UserServiceWorker.__proto__ || Object.getPrototypeOf(UserServiceWorker)).call(this, engine, _UserListener.UserListener, _CELLET.CELLET.User));

        _this.deviceListener = new _Delegate.Delegate(_DeviceListener.DeviceListener);
        // 查询账号信息回调
        _this.queryCallback = null;
        // 查询在线设备回调
        _this.queryDeviceCallback = null;
        // 授权管理服务
        _this.licenseService = engine.services.get('License');
        // 查询在线设备详情回调
        _this.queryDeviceByIdCallback = null;

        return _this;
    }

    /**
     * 登录账号。
     * <p>
     * 在魔方引擎中每个终端通过注册一个唯一账号来进行终端识别。
     * </p>
     *
     * @param {String} cubeId - 指定注册的账号名。。
     * @param {String} licenseToken - 账号令牌
     * @param {String} [nickname] - 指定账号对应的显示名。
     * @returns {boolean} 如果正确启动注册流程返回 <code>true</code>，否则返回 <code>false</code> 。
     */


    _createClass(UserServiceWorker, [{
        key: 'login',
        value: function login(cubeId, licenseToken, nickname) {
            var _this2 = this;

            console.log('[Cube#UserService] login to ' + cubeId + ', ' + licenseToken + ', ' + nickname);

            if (typeof cubeId !== 'string') {
                return false;
            }

            this.engine.accName = cubeId;
            if (typeof nickname !== 'string') {
                this.engine.accDisplayName = cubeId;
            } else {
                this.engine.accDisplayName = nickname;
            }
            this.engine.accToken = licenseToken;

            _MSTR_TOKEN = licenseToken;

            this.engine.session.name = cubeId;
            this.engine.session.displayName = this.engine.accDisplayName;

            if (this.engine.isLicenseLoaded) {
                this._handleRegister(cubeId, nickname, licenseToken, 0);
            } else {
                // 初始化授权信息
                this.loadLicense(licenseToken, function (error, license) {
                    if (error) {
                        // 获取 License 失败 回调应用层 清除本地信息 重新登录；
                        if (error.code == 500) {
                            _this2.engine.isLicenseLoaded = false;
                            _this2._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.GetLicenseFail, 'GetLicense Failed'));
                            _this2._handUp();
                        } else {
                            _this2._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.BadRequest, 'Request Failed'));
                        }
                    } else {
                        _this2._handleRegister(cubeId, _this2.engine.accDisplayName, licenseToken, 0);
                    }
                });
            }

            return true;
        }
    }, {
        key: 'logout',
        value: function logout() {
            console.log('[Cube#UserService] logout current account');

            if (typeof this.engine.accName !== 'string') {
                return false;
            }

            if (this.engine.session.isCalling()) {
                this.engine.getCallService().terminateCall();
            }

            if (null != this.engine.getConferenceService()) {
                this.engine.getConferenceService().terminateCall();
            }

            if (null != this.engine.sipService) {
                this.engine.sipService.unregister();
            }

            if (nucleus.talkService.isCalled(_CELLET.CELLET.User)) {
                var deviceName = null != this.engine.config && undefined !== this.engine.config.deviceName ? this.engine.config.deviceName : navigator.appName;

                var param = {
                    cubeId: this.engine.accName,
                    version: this.engine.version,
                    device: {
                        name: deviceName,
                        version: navigator.appVersion,
                        platform: navigator.platform,
                        userAgent: navigator.userAgent
                    }
                };

                if (null != this.engine.accToken) {
                    param.token = this.engine.accToken;
                }
                this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionLogout, param);
            }

            this.engine.accName = null;
            this.engine.accDisplayName = null;
            this.engine.session.name = null;
            this.engine.session.displayName = null;

            return true;
        }
    }, {
        key: 'queryAccounts',
        value: function queryAccounts(accounts, callback) {
            if (this.engine.registered && typeof callback === 'function') {
                this.queryCallback = callback;
                var param = {
                    "list": accounts
                };

                if (null != this.engine.accToken) {
                    param.token = this.engine.accToken;
                }
                this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionQuery, param);
                return true;
            }

            return false;
        }

        /**
         * 更新用户信息
         *
         * @param {user} user - 用户对象。
         */

    }, {
        key: 'update',
        value: function update(user) {
            if (!user) {
                return false;
            }
            var param = {
                user: new _User.User(user),
                token: this.engine.accToken
            };
            this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionUpdate, param);
        }

        /**
         * 上传用户头像
         *
         * @param {user} user - 用户对象。
         */

    }, {
        key: 'uploadAvatar',
        value: function uploadAvatar() {
            var _this3 = this;

            var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            var update = arguments[1];

            var url = 'https://dev.upload.shixincube.cn/v3/file/uploadAvatar';
            if (CubeFileMessage) {
                var file = new CubeFileMessage();
                file.accept = 'image/*';
                file.chooseFile(function (File, md5) {
                    var param = {
                        token: _this3.engine.accToken,
                        isOverride: true,
                        md5: md5
                    };
                    var server = new _CubeRequest.CubeRequest('');
                    server.sendFile(url, {
                        name: 'file',
                        value: File
                    }, param, function (err, nData) {
                        if (typeof fn == 'function') {
                            if (update) {
                                var user = new _User.User(_this3.engine.accName, _this3.engine.accDisplayName, nData.data.url);
                                _this3.update(user);
                            } else {
                                fn(err, nData);
                            }
                        }
                        if (err) throw err;
                    });
                });
            }
        }

        /**
         * 添加设备上下线监听器。
         *
         * @param {DeviceListener} listener - 指定待添加的注册监听器。
         */

    }, {
        key: 'addDeviceListener',
        value: function addDeviceListener(listener) {
            this.deviceListener.addListener(listener);
        }

        /**
         * 移除设备上下线监听器。
         *
         * @param {DeviceListener} listener - 指定待移除的注册监听器。
         */

    }, {
        key: 'removeDeviceListener',
        value: function removeDeviceListener(listener) {
            this.deviceListener.removeListener(listener);
        }

        /**查询在线设备列表*
         *
         * @property cubeId  {String} cube账号
         * @property callback 回调函数
         *  */

    }, {
        key: 'queryOnlineDevice',
        value: function queryOnlineDevice(cubeId, callback) {
            if (this.engine.registered && typeof callback == 'function') {
                this.queryDeviceCallback = callback;
                var param = {
                    "name": cubeId
                };

                if (null != this.engine.accToken) {
                    param.token = this.engine.accToken;
                }
                this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionQueryDevice, param);
                return true;
            }

            return false;
        }

        /**查询在线设备详情*
         *
         * @property deviceId {String} 设备ID
         * @property callback 回调函数
         *  */

    }, {
        key: 'queryOnlineDeviceById',
        value: function queryOnlineDeviceById(deviceId, callback) {
            if (this.engine.registered && typeof callback == 'function') {
                this.queryDeviceByIdCallback = callback;
                var param = {
                    "deviceId": deviceId
                };

                if (null != this.engine.accToken) {
                    param.token = this.engine.accToken;
                }
                return this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionQueryByIdDevice, param);
            }

            return false;
        }

        /**
         * 处理注册
         * @private
         */

    }, {
        key: '_handleRegister',
        value: function _handleRegister(cubeId, displayName, token, requests) {
            var _this4 = this;

            if (this.engine.isLicenseLoaded) {
                this.engine.isBeingRegister = true;

                if (requests < 20) {
                    if (!nucleus.talkService.isCalled(_CELLET.CELLET.User)) {
                        setTimeout(function () {
                            _this4._handleRegister(cubeId, displayName, token, requests++);
                        }, 500);
                        return true;
                    }
                } else {
                    this._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
                    return false;
                }

                // 回调注册正在处理
                this._fireRegistrationState(_RegistrationState.RegistrationState.Progress);

                var deviceInfo = this.engine.getDeviceInfo();
                deviceInfo.userAgent = navigator.userAgent;
                var param = {
                    cubeId: cubeId,
                    token: 'cubeTeam',
                    displayName: this.engine.accDisplayName,
                    version: this.engine.version,
                    nettype: '',
                    device: deviceInfo
                };
                if (null != this.engine.accToken) {
                    param.token = this.engine.accToken;
                }

                if (!this.engine.isReconnecting) {
                    this.engine.connect.send(_CELLET.CELLET.User, _CubeConst.CubeConst.ActionLogin, param);
                }

                // 如果 5 秒后未登陆成功, 则尝试再次登陆
                setTimeout(function () {
                    if (_this4.engine.isBeingRegister) {
                        _this4._handleRegister(cubeId, displayName, token, requests += 5);
                    }
                }, 5000);
            }
        }

        /**
         * 加载授权数据回调函数。
         *
         * @callback LoadLicenseCallback
         * @param error {Boolean|CubeError} 是否加载失败
         * @param [license] {Object} - 授权信息。
         */

        /**
         * 加载授权文件。
         *
         * @param {String} token - 指定授权密钥。
         * @param {LoadLicenseCallback} callback - 加载授权数据回调函数。
         * @private
         */

    }, {
        key: 'loadLicense',
        value: function loadLicense(token, callback) {
            var _this5 = this;

            this.licenseService.checkLicenseUpdate(null, token, this.engine.config.appid, function (err, update, license) {
                if (err) {
                    callback(err);
                } else {
                    _this5.engine._appLicense = license;
                    _this5.engine.isLicenseLoaded = true;
                    _this5.engine.server.update(license);
                    _this5.engine.connect.connect(_CUBE_DOMAIN, _CUBE_PORT, _VALID_CELLETS, new _NetworkListener.NetworkListener(_this5.engine));
                    // this.engine.hostAddress = new InetAddress(_CUBE_DOMAIN, _CUBE_PORT);
                    // nucleus.talkService.call(_VALID_CELLETS, this.engine.hostAddress, this.engine.config.socketEnabled);
                    callback(false, license);
                }
            });
        }

        // 调用注册状态变化

    }, {
        key: '_fireRegistrationState',
        value: function _fireRegistrationState(state, error) {
            if (state !== this.engine.session.regState) {
                this.engine.session.regState = state;
                var callback = void 0;

                if (state === _RegistrationState.RegistrationState.Progress) {
                    this.engine.registered = false;
                } else {
                    if (state === _RegistrationState.RegistrationState.Ok) {
                        this.engine.registered = true;
                        callback = 'onLogined';
                    } else if (state === _RegistrationState.RegistrationState.Cleared) {
                        this.engine.registered = false;
                        callback = 'onLogouted';

                        // 终止呼叫
                        if (this.engine.session.isCalling()) {
                            this.engine.getCallService().terminateCall();
                        }
                        // 终止sip
                        if (null != this.engine.sipService) {
                            this.engine.sipService.unregister();
                        }
                    } else if (state === _RegistrationState.RegistrationState.Failed) {
                        this.engine.registered = false;
                        callback = 'onFailed';
                    }
                }

                var services = this.engine.services.values();
                for (var i = 0; i < services.length; i++) {
                    var service = services[i];
                    if (typeof service.onRegisterStateChanged === 'function') {
                        try {
                            service.onRegisterStateChanged(this.engine.session);
                        } catch (e) {
                            nucleus.getLogger().w("UserService#RegistrationState", e.message);
                        }
                    }
                }

                if (typeof callback === 'string') {
                    if (callback === 'onFailed') {
                        if (!error) {
                            error = new _CubeError.CubeError(_StateCode.StateCode.BadRequest, 'Handle Failed');
                        }
                        this.delegate[callback](error, this.engine.session);
                    } else {
                        this.delegate[callback](this.engine.session);
                    }
                }
            }
        }
    }, {
        key: '_processLogin',
        value: function _processLogin(dialect) {
            var data = dialect.getParamAsString("device");
            if (null != data) {
                this.deviceListener.onDeviceOnline(data.fromDevice, data.onlineDevices);
            }
        }
    }, {
        key: '_processLogout',
        value: function _processLogout(dialect) {
            var data = dialect.getParamAsString("device");
            if (null != data) {
                this.deviceListener.onDeviceOffline(data.fromDevice, data.onlineDevices);
            }
        }
    }, {
        key: '_processLoginAck',
        value: function _processLoginAck(dialect) {
            this.engine.isBeingRegister = false;
            var data = dialect.getParamAsString("data");
            var state = dialect.getParamAsString("state");
            if (state.code === 200) {
                var token = data.msgToken;
                if (null != token && undefined !== token) {
                    this.engine._cube_token = token.toString();
                }

                var iceServers = dialect.getParamAsString('ICEServers');
                if (null != iceServers) {
                    _CUBE_ICE_SERVERS = iceServers;
                    _CUBE_STUN_SERVERS = this.engine._parseICEServers(iceServers);
                }

                var user = data.user;
                if (null != user) {
                    this.engine.accDisplayName = user.displayName;
                    this.engine.accAvatar = user.avatar;
                }

                this._fireRegistrationState(_RegistrationState.RegistrationState.Ok);
                this.engine.triggerCubeEngineState(CubeState.Ready);
            } else {
                nucleus.getLogger().w("CubeEngine", "login failed");

                this._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
                //登陆失败，引擎回到初始化状态
                this.engine.triggerCubeEngineState(CubeState.Start);
            }
        }
    }, {
        key: '_processLogoutAck',
        value: function _processLogoutAck(dialect) {
            var state = dialect.getParamAsString("state");
            this.engine.triggerCubeEngineState(CubeState.Start);
            if (state.code === 200) {
                this._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
            } else {
                nucleus.getLogger().w("CubeEngine", "logout failed");
                this._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
            }
        }
    }, {
        key: '_processUpdate',
        value: function _processUpdate(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code === 200) {
                this.delegate.onUserUpdated(data);
            } else {
                nucleus.getLogger().w("CubeEngine", "update user failed");
            }
        }
    }, {
        key: '_processQueryAck',
        value: function _processQueryAck(dialect) {
            if (null != this.queryCallback) {
                var data = dialect.getParamAsString("data");
                if (null != data) {
                    this.queryCallback(data.list);
                }
                this.queryCallback = null;
            }
        }
    }, {
        key: '_processQueryDeviceAck',
        value: function _processQueryDeviceAck(dialect) {
            if (null != this.queryDeviceCallback) {
                var data = dialect.getParamAsString("device");
                if (null != data) {
                    this.queryDeviceCallback(data.onlineDevices);
                }
                this.queryDeviceCallback = null;
            }
        }
    }, {
        key: '_processQueryDeviceByIdAck',
        value: function _processQueryDeviceByIdAck(dialect) {
            if (null != this.queryDeviceByIdCallback) {
                var data = dialect.getParamAsString("data");
                if (null != data) {
                    this.queryDeviceByIdCallback(data);
                }
                this.queryDeviceByIdCallback = null;
            }
        }
    }, {
        key: '_processLicense',
        value: function _processLicense(dialect) {
            var _this6 = this;

            var data = dialect.getParamAsString("data");
            if (data) {
                if (data.license && data.crypUrl) {
                    var server = new _CubeRequest.CubeRequest('');
                    var post = {
                        license: data.license,
                        number: data.num
                    };
                    server.send(data.crypUrl, post, function (err, d) {
                        if (err || d.state !== 200) {
                            nucleus.getLogger().w('CubeEngine', ' license Failed! ' + err);
                        }
                        if (d.state === 200) {
                            var license = d.data;
                            _this6.engine.server.update(license);
                            _this6._updateLicense(license, true);
                        }
                    });
                } else {
                    // wait 毫秒后更新授权信息
                    setTimeout(function () {
                        _this6.licenseService.checkAndUpdate(data.server, null, _this6.engine.config.appid, function (err, update, license) {
                            if (err) {
                                nucleus.getLogger().w('CubeEngine', 'Update license Failed! ' + err.message);
                                return;
                            }
                            _this6.engine.server.update(license);
                            _this6._updateLicense(license, update);
                        });
                    }, 5000);
                }
            }
        }
    }, {
        key: '_updateLicense',
        value: function _updateLicense(license, update) {
            if (update) {
                this.engine._appLicense = license;
                this.engine.hostAddress = new InetAddress(_CUBE_DOMAIN, _CUBE_PORT);
                this.engine.hostAddress = new InetAddress("125.208.1.67", 6006);
                this.engine.isLicenseLoaded = true;
                // 断开引擎连接
                this._handUp();

                // 重新 call
                nucleus.talkService.call(_VALID_CELLETS, this.engine.hostAddress, this.engine.config.socketEnabled);
                // 重新登录
                if (typeof this.engine.accName === 'string' && !this.engine.isBeingRegister) {
                    this.login(this.engine.accName, this.engine.accToken, this.engine.accDisplayName);
                }
            }
        }
    }, {
        key: '_handUp',
        value: function _handUp() {
            // 断开引擎连接
            nucleus.talkService.hangUp(_VALID_CELLETS[0], true);
            // 通知 responder 退出
            this.engine.responder.fireQuitted();
            if (this.engine.getCallService()) {
                if (this.engine.session.isCalling()) {
                    this.engine.getCallService().terminateCall();
                }
            }

            if (this.engine.registered) {
                // 回调注销
                this._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
            }

            if (this.engine.sipService) {
                this.engine.sipService.unregister();
            }
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            if (action === _CubeConst.CubeConst.ActionLogin) {
                this._processLogin(dialect);
            } else if (action === _CubeConst.CubeConst.ActionLogout) {
                this._processLogout(dialect);
            } else if (action === _CubeConst.CubeConst.ActionLoginAck) {
                this._processLoginAck(dialect);
            } else if (action === _CubeConst.CubeConst.ActionLoginSync) {
                this._processLogout(dialect);
            } else if (action === _CubeConst.CubeConst.ActionLogoutAck) {
                this._processLogoutAck(dialect);
            } else if (action === _CubeConst.CubeConst.ActionQueryAck) {
                this._processQueryAck(dialect);
            } else if (action === _CubeConst.CubeConst.ActionQueryDeviceAck) {
                this._processQueryDeviceAck(dialect);
            } else if (action === _CubeConst.CubeConst.ActionQueryByIdDeviceAck) {
                this._processQueryDeviceByIdAck(dialect);
            } else if (action === _CubeConst.CubeConst.ActionLicense) {
                this._processLicense(dialect);
            } else if (action === _CubeConst.CubeConst.ActionUpdate) {
                this._processUpdate(dialect);
            } else if (action === _CubeConst.CubeConst.ActionUpdateAck) {
                this._processUpdate(dialect);
            } else if (action === _CubeConst.CubeConst.ActionUpdateSync) {
                this._processUpdate(dialect);
            }
        }
    }]);

    return UserServiceWorker;
}(_UserService2.UserService);

/***/ })
/******/ ]);
//# sourceMappingURL=cube-core.js.map
