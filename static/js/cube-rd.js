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
/******/ 	return __webpack_require__(__webpack_require__.s = 143);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ShareDesktopServiceWorker = __webpack_require__(89);

var _ShareDesktopListener = __webpack_require__(54);

var _ShareDesktopConfig = __webpack_require__(55);

var _ShareDesktopMember = __webpack_require__(56);

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
  global.CubeShareDesktopMember = _ShareDesktopMember.ShareDesktopMember;
  global.CubeShareDesktopConfig = _ShareDesktopConfig.ShareDesktopConfig;

  global.CubeShareDesktopServiceWorker = _ShareDesktopServiceWorker.ShareDesktopServiceWorker;
  global.CubeShareDesktopListener = _ShareDesktopListener.ShareDesktopListener;
})(window);

/***/ }),

/***/ 144:
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
 * ShareDesktopService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 共享桌面服务接口。
 *
 * @interface ShareDesktopService
 * @author Li wenKai
 */
var ShareDesktopService = exports.ShareDesktopService = function (_CubeService) {
  _inherits(ShareDesktopService, _CubeService);

  function ShareDesktopService() {
    _classCallCheck(this, ShareDesktopService);

    return _possibleConstructorReturn(this, (ShareDesktopService.__proto__ || Object.getPrototypeOf(ShareDesktopService)).apply(this, arguments));
  }

  _createClass(ShareDesktopService, [{
    key: "create",

    /**
     * 创建共享桌面
     *
     * @param {String} config  共享桌面配置对象
     */
    value: function create(config) {}

    /**
     * 加入共享桌面
     *
     * @param {String} desktopId   共享桌面Id
     */

  }, {
    key: "join",
    value: function join(desktopId) {}

    /**
     * 邀请加入共享桌面
     *
     * @param {String} desktopId   共享桌面Id
     * @param {String|Array<String>} cubeIds - 需要邀请的成员的 Cube 号数组
     */

  }, {
    key: "invite",
    value: function invite(desktopId, cubeIds) {}

    /**
     * 接受邀请
     *
     * @param {string} desktopId
     * @param {string} 邀请者ID
     */

  }, {
    key: "acceptInvite",
    value: function acceptInvite(desktopId, cubeId) {}

    /**
     * 拒绝邀请
     *
     * @param {String} desktopId   桌面桌面Id
     * @param {string} 邀请者ID
     */

  }, {
    key: "rejectInvite",
    value: function rejectInvite(desktopId, cubeId) {}

    /**
     * 销毁分享
     *
     * @param {String} desktopId  共享桌面ID
     */

  }, {
    key: "destroy",
    value: function destroy(desktopId) {}

    /**
     * 离开共享桌面
     *
     * @param {String} desktopId 共享桌面ID
     */

  }, {
    key: "quit",
    value: function quit(desktopId) {}

    /**
     * 查询共享桌面
     *
     * @param  {Array} desktopIds 共享桌面bindGroupId
     * @param {function} callback
     */

  }, {
    key: "queryRemoteDesktop",
    value: function queryRemoteDesktop(desktopIds, callback) {}

    /**
     *  分页同步当前账号下所有共享桌面
     *  @param {number} offset
     *  @param {number} limit
     * */

  }, {
    key: "syncShareDesktop",
    value: function syncShareDesktop(offset, limit) {}
  }]);

  return ShareDesktopService;
}(CubeService);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShareDesktop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _GroupConfig = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ShareDesktopConfig.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2018 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 远程桌面配置类
 * @class ShareDesktopConfig
 * @author Li WenKai
 */
var ShareDesktop = exports.ShareDesktop = function (_CubeGroup) {
    _inherits(ShareDesktop, _CubeGroup);

    function ShareDesktop(displayName, bindGroupId) {
        _classCallCheck(this, ShareDesktop);

        var _this = _possibleConstructorReturn(this, (ShareDesktop.__proto__ || Object.getPrototypeOf(ShareDesktop)).call(this, CubeGroupType.SHARE_WB, displayName));

        _this.bindGroupId = bindGroupId;

        _this.host = null; // 共享桌面服务器
        _this.sharePort = null; // 共享享端口
        _this.receivePort = null; // 接收端口
        _this.desktopId = null; // 共享桌面号

        if (_typeof(arguments[0]) == 'object') {
            _this.set(arguments[0]);
        }
        return _this;
    }

    return ShareDesktop;
}(CubeGroup);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Action.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 接口常量定义。
 *
 * @author Guan Yong
 */
var Action = exports.Action = {
    Create: 'create',
    CreateAck: 'create-Ack',
    Invite: 'invite',
    Share: 'share',
    ShareAck: 'share-ack',
    Apply: 'apply',
    ApplyAck: 'apply-ack',
    RevokeShare: 'revoke-share',
    RevokeShareAck: 'revoke-share-ack',
    Leave: 'leave',
    LeaveAck: 'leave-ack',
    Destroy: 'destroy',
    DestroyAck: 'destroy-ack',
    queryDesktop: 'query-desktop',
    queryDesktopAck: 'query-desktop-ack',

    CreateSD: "create-sd",
    CreateSDAck: "create-sd-ack",
    CreateSDSync: "create-sd-sync",
    CreateSDNotify: "create-sd-notify",
    InviteSD: "invite-sd",
    InviteSDAck: "invite-sd-ack",
    InviteSDSync: "invite-sd-sync",
    InviteSDNotify: "invite-sd-notify",
    DestroySD: "destroy-sd",
    DestroySDAck: "destroy-sd-ack",
    DestroySDSync: "destroy-sd-sync",
    DestroySDNotify: "destroy-sd-notify",
    QuitSD: "quit-sd",
    QuitSDAck: "quit-sd-ack",
    QuitSDSync: "quit-sd-sync",
    QuitSDNotify: "quit-sd-notify",
    AcceptInviteSD: 'accept-sd-invite',
    AcceptInviteSDAck: 'accept-sd-invite-ack',
    AcceptInviteSDSync: 'accept-sd-invite-sync',
    AcceptInviteSDNotify: 'accept-sd-invite-notify',
    RejectSDInvite: 'reject-sd-invite',
    RejectSDInviteAck: 'reject-sd-invite-ack',
    RejectSDInviteSync: 'reject-sd-invite-sync',
    RejectSDInviteNotify: 'reject-sd-invite-notify',
    JoinSD: 'join-sd',
    JoinSDAck: 'join-sd-ack',
    JoinSDSync: 'join-sd-sync',
    JoinSDNotify: 'join-sd-notify',
    AcceptJoinSD: 'accept-join-sd',
    AcceptJoinSDAck: 'accept-join-sd-ack',
    AcceptJoinSDSync: 'accept-join-sd-sync',
    AcceptJoinSDNotify: 'accept-join-sd-notify',
    RejectJoinSD: 'reject-join-sd',
    RejectJoinSDAck: 'reject-join-sd-ack',
    RejectJoinSDSync: 'reject-join-sd-sync',
    RejectJoinSDNotify: 'reject-join-sd-notify'
};

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Member = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _User2 = __webpack_require__(17);

var _MemberRole = __webpack_require__(16);

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

/***/ 16:
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

/***/ 17:
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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 分享桌面服务监听器
 *
 * @interface ShareDesktopListener
 * @author Li wenkai
 *
 */
var ShareDesktopListener = exports.ShareDesktopListener = function (_CubeListener) {
  _inherits(ShareDesktopListener, _CubeListener);

  function ShareDesktopListener() {
    _classCallCheck(this, ShareDesktopListener);

    return _possibleConstructorReturn(this, (ShareDesktopListener.__proto__ || Object.getPrototypeOf(ShareDesktopListener)).apply(this, arguments));
  }

  _createClass(ShareDesktopListener, [{
    key: "onShareDesktopCreated",

    /**
     * 当桌面创建时回调
     * @param {sd} 共享消息实体
     * @param {user} fromUser 创建者user实体
     */
    value: function onShareDesktopCreated(sd, fromUser) {}

    /**
     * 当连接上桌面共享时回调
     * @param src {String} 共享者CubeID
     * @param target {String} 成功连接的目标用户CubeID
     */

  }, {
    key: "onShareDesktopConnectShare",
    value: function onShareDesktopConnectShare(src, target) {}

    /**
     * 通账号除加入设备之外的其他设备回调
     *
     * @param sd   远程桌面实体
     * @param joinedMember 加入者
     */

  }, {
    key: "onShareDesktopJoined",
    value: function onShareDesktopJoined(sd, joinedMember) {}

    /**
     * 当桌面共享销毁时回调
     * @param {sd} 共享消息实体
     * @param {user} fromUser 邀请者user实体
     */

  }, {
    key: "onShareDesktopDestroyed",
    value: function onShareDesktopDestroyed(sd, fromUser) {}

    /**
     * 当离开桌面共享时回调
     * @param {sd} 共享桌面消息实体
     * @param {user} fromUser 离开者user实体
     */

  }, {
    key: "onShareDesktopQuitd",
    value: function onShareDesktopQuitd(sd, fromUser) {}

    /**
     * 收到邀请回调(仅邀请者自己和被邀请者回调)
     *
     * @param {shareDesktop} shareDesktop 共享桌面对象实例
     *  @param {user} fromUser 邀请者user实体
     */

  }, {
    key: "onShareDesktopInvited",
    value: function onShareDesktopInvited(shareDesktop, fromUser) {}

    /**
     * 同意邀请加入时回调
     *
     * @param{shareDesktop} ShareDesktop 共享桌面对象实例
     * @param {user} fromUser 同意者user实体
     * @param {user} joinedMembers 加入者user实体
     */

  }, {
    key: "onShareDesktopInviteJoined",
    value: function onShareDesktopInviteJoined(ShareDesktop, fromUser, joinedMember) {}

    /**
     * 当拒绝共享桌面时回调
     * @param {shareDesktop} shareDesktop 共享桌面对象实例
     * @param {user} fromUser 邀请者user实体
     * @param {user} rejectMember 拒绝者user实体
     */

  }, {
    key: "onShareDesktopRejectInvited",
    value: function onShareDesktopRejectInvited(rejectCubeId, fromUser, rejectMember) {}

    /**
     * 共享桌面出错回调
     * @param error {CubeError} 错误信息
     */

  }, {
    key: "onShareDesktopFailed",
    value: function onShareDesktopFailed(error) {}
  }]);

  return ShareDesktopListener;
}(CubeListener);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareDesktopConfig = undefined;

var _GroupConfig2 = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ShareDesktopConfig.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2018 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 远程桌面配置类
 * @class ShareDesktopConfig
 * @author Li WenKai
 */
var ShareDesktopConfig = exports.ShareDesktopConfig = function (_GroupConfig) {
  _inherits(ShareDesktopConfig, _GroupConfig);

  function ShareDesktopConfig(displayName, bindGroupId) {
    _classCallCheck(this, ShareDesktopConfig);

    var _this = _possibleConstructorReturn(this, (ShareDesktopConfig.__proto__ || Object.getPrototypeOf(ShareDesktopConfig)).call(this, CubeGroupType.SHARE_WB, displayName));

    _this.bindGroupId = bindGroupId;
    return _this;
  }

  return ShareDesktopConfig;
}(_GroupConfig2.GroupConfig);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareDesktopMember = undefined;

var _Member2 = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ShareDesktopMember.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 分享桌面成员对象
 * @class ShareDesktopMember
 * @author Li WenKai
 */
var ShareDesktopMember = exports.ShareDesktopMember = function (_Member) {
  _inherits(ShareDesktopMember, _Member);

  function ShareDesktopMember(cubeId) {
    _classCallCheck(this, ShareDesktopMember);

    return _possibleConstructorReturn(this, (ShareDesktopMember.__proto__ || Object.getPrototypeOf(ShareDesktopMember)).call(this, cubeId));
  }

  return ShareDesktopMember;
}(_Member2.Member);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShareDesktopServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareDesktopService2 = __webpack_require__(144);

var _ShareDesktopListener = __webpack_require__(54);

var _Action = __webpack_require__(146);

var _ShareDesktopMember = __webpack_require__(56);

var _ShareDesktopConfig = __webpack_require__(55);

var _ShareDesktop = __webpack_require__(145);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * RemoteDesktopServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 远程桌面管理服务实现
 *
 * @class ShareDesktopServiceWorker
 * @author Guan Yong
 */
var ShareDesktopServiceWorker = exports.ShareDesktopServiceWorker = function (_ShareDesktopService) {
    _inherits(ShareDesktopServiceWorker, _ShareDesktopService);

    function ShareDesktopServiceWorker(engine, rdWorker, viewDom) {
        _classCallCheck(this, ShareDesktopServiceWorker);

        var _this = _possibleConstructorReturn(this, (ShareDesktopServiceWorker.__proto__ || Object.getPrototypeOf(ShareDesktopServiceWorker)).call(this, engine, _ShareDesktopListener.ShareDesktopListener, CELLET.ShareDesktop));

        _this.msgCache = new HashMap();
        _this.rdWorker = rdWorker;
        _this.shareMachine = null;
        _this.clientMachine = null;
        _this.viewDom = viewDom;
        _this.timeout = 10000; // 10秒超时
        _this.lastShareWithTime = 0; // 最近分享时间
        _this.currentRdId = null;
        _this.peers = null;
        _this.sharer = null;
        _this.lastScreenInfo = {};
        _this.sharerViewUpdate = true;
        return _this;
    }

    /**
     * 创建远程桌面
     *
     * @param name        分享桌面名称，可以是群的displayName，也可是自己的
     * @param bindGroupId 绑定群组，可以为空
     */


    _createClass(ShareDesktopServiceWorker, [{
        key: 'create',
        value: function create(config) {
            var param = {
                sd: {
                    name: config.displayName
                },
                token: this.engine.accToken
            };

            config.bindGroupId ? param.sd.bindGroupId = config.bindGroupId : '';
            this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.CreateSD, param);
        }

        /**
         * 加入共享桌面
         *
         * @param {String} desktopId   共享桌面Id
         */

    }, {
        key: 'join',
        value: function join(desktopId) {
            var param = {
                desktopId: desktopId,
                token: this.engine.accToken
            };
            this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.JoinSD, param);
        }

        /**
         * 离开远程桌面
         */

    }, {
        key: 'quit',
        value: function quit(desktopId) {
            if (null != this.clientMachine) {
                var params = {
                    desktopId: desktopId,
                    token: this.engine.accToken
                };
                this.clientMachine.stop();
                this.clientMachine = null;
                this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.QuitSD, params);
            }
        }

        /**
         * 销毁远程桌面
         */

    }, {
        key: 'destroy',
        value: function destroy(desktopId) {
            if (null != this.shareMachine) {
                var params = {
                    desktopId: desktopId,
                    token: this.engine.accToken
                };
                this.shareMachine.stop();
                this.shareMachine = null;

                this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.DestroySD, params);
            }
        }

        /**
         * 邀请加入桌面
         *
         * @param {String} desktopId   共享桌面Id
         * @param {String|Array<String>} cubeIds - 需要邀请的成员的 Cube 号数组
         */

    }, {
        key: 'invite',
        value: function invite(desktopId, cubeIds) {
            var param = {
                desktopId: desktopId,
                members: cubeIds,
                token: this.engine.accToken
            };
            this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.InviteSD, param);
        }

        /**
         * 接受邀请
         *
         * @param {string} desktopId
         * @param {string} 邀请者ID
         */

    }, {
        key: 'acceptInvite',
        value: function acceptInvite(desktopId, cubeId) {
            var params = {
                desktopId: desktopId,
                cubeId: cubeId,
                token: this.engine.accToken
            };
            this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.AcceptInviteSD, params);
        }
    }, {
        key: 'rejectInvite',


        /**
         * 拒绝邀请
         *
         * @param {String} desktopId   共享桌面Id
         * @param {string} 邀请者ID
         */
        value: function rejectInvite(desktopId, cubeId) {
            var params = {
                desktopId: desktopId,
                cubeId: cubeId,
                token: this.engine.accToken
            };
            this.engine.connect.send(CELLET.ShareDesktop, _Action.Action.RejectSDInvite, params);
        }

        /**
         *  查询共享桌面
         *  @param {Array}   查询Id
         **/

    }, {
        key: 'queryShareDesktop',
        value: function queryShareDesktop(desktopIds, callback) {
            var p = this.utils.isSecure ? "https" : "http";
            var url = desktopIds.length > 1 ? p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/sd' : p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/sd';
            var params = {
                desktopIds: desktopIds,
                token: this.engine.accToken
            };
            NucleusAjax.newRequest(url).method("POST").content(params).send(function (res) {
                var data = JSON.parse(res.data);
                if (data.state.code == 200) {
                    callback(data.data.sds);
                }
            });
        }

        /**
         *  syncAllDesktop
         *  @param {number} offset
         *  @param {number} limit
         * */

    }, {
        key: 'syncShareDesktop',
        value: function syncShareDesktop(offset, limit) {
            var p = this.utils.isSecure ? "https" : "http";
            var url = p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/users/100001/sd';
            // let url = p + '://' + '192.168.1.6' + ':' + '/v3/users/shareDesktop/sync';
            var params = {
                cubeId: this.engine.accName,
                offset: offset,
                limit: limit,
                token: this.engine.accToken
            };
            Ajax.newRequest(url).method("POST").content(params).send(function (res) {
                var data = JSON.parse(res.data);
                if (data.state.code == 200) {
                    callback(data.data);
                }
            });
        }
    }, {
        key: '_updateView',
        value: function _updateView(buffer, row, col, maxRow, maxCol) {
            var canvas = document.getElementById('__cube_remote_desktop_canvas');

            var width = 1920 / (maxCol + 1),
                height = 1080 / (maxRow + 1);

            var ctx = null;
            if (null === canvas) {
                canvas = document.createElement('canvas');
                canvas.id = '__cube_remote_desktop_canvas';
                canvas.width = 1920;
                canvas.height = 1080;
                canvas = this.viewDom.appendChild(canvas);
            }

            if (null === ctx) ctx = canvas.getContext('2d');

            var imgData = new ImageData(new Uint8ClampedArray(buffer, 0, buffer.length), width, height);
            ctx.putImageData(imgData, col * width, row * height);
            return;
        }
    }, {
        key: '_processDestroy',
        value: function _processDestroy(data, user) {
            if (this.currentRdId === data.desktopId) {
                if (null != this.shareMachine) {
                    this.shareMachine.stop();
                    this.clientMachine = null;
                }
                if (null != this.clientMachine) {
                    this.clientMachine.stop();
                    this.clientMachine = null;
                }
                this.currentRdId = null;
            }

            this.delegate.onShareDesktopDestroyed(data, user);
        }
    }, {
        key: '_processActionJoinSDAck',
        value: function _processActionJoinSDAck(sd) {
            var _this2 = this;

            if (sd.owner == this.engine.accName) {
                // 创建者加入
                this.currentRdId = sd.desktopId;
                this.lastScreenInfo = {};
                // 创建分享工作器
                this.shareMachine = this.rdWorker.createSharer(sd.host + ':' + sd.sharePort, sd.desktopId + '', this.engine.accName);
                this.shareMachine.on('bitmap', function (buffer, row, col, maxRow, maxCol) {
                    if (_this2.sharerViewUpdate) {
                        _this2._updateView(buffer, row, col, maxRow, maxCol);
                    }
                });
                // 启动工作器
                this.shareMachine.start();
            } else {
                // 邀请者或陌生人加入
                this._processApply(sd);
            }
            this.delegate.onShareDesktopJoined(sd, new CubeGroupMember(this.engine.accName));
        }
    }, {
        key: '_processApply',
        value: function _processApply(sd) {
            var _this3 = this;

            this.lastScreenInfo = {};
            this.clientMachine = this.rdWorker.createClient(sd.host + ':' + sd.receivePort, sd.desktopId + '');

            this.sharer = sd.sharer;
            var self = this;

            // 注册监听
            this.clientMachine.on('connect', function () {
                self.delegate.onShareDesktopConnectShare(sd);
            });
            this.clientMachine.on('bitmap', function (buffer, row, col, maxRow, maxCol) {
                _this3._updateView(buffer, row, col, maxRow, maxCol);
            });
            this.clientMachine.on('cursor', function (x, y) {
                var cursor = document.getElementById('__cube_remote_desktop_cursor');
                if (null === cursor) {
                    cursor = document.createElement('img');
                    cursor.id = '__cube_remote_desktop_cursor';
                    cursor.style.display = "block";
                    cursor.style.position = "absolute";
                    cursor.style.transition = "left .3s, top .3s";
                    cursor.style.width = "15px";
                    cursor.src = self.engine.resourcePath + '/rd/cursor.png';
                    self.viewDom.appendChild(cursor);
                }
                cursor.style.left = x + "px";
                cursor.style.top = y + "px";
            });
            this.clientMachine.on('close', function () {
                // self.delegate.onRemoteDesktopLeave(data.remotedesktop, self.engine.accName);
            });
            this.clientMachine.start();
        }
    }, {
        key: '_processActionQuitSDAck',
        value: function _processActionQuitSDAck(sd, user) {
            this.shareMachine ? this.shareMachine.stop() : '';
            this.delegate.onShareDesktopQuitd(sd, user);
        }
    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {
            if (null != this.shareMachine) {
                this.shareMachine.stop();
                this.clientMachine = null;
            }
            if (null != this.clientMachine) {
                this.clientMachine.stop();
                this.clientMachine = null;
            }
            this.currentRdId = null;
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString('state');
            var data = dialect.getParamAsString("data");
            var sd = new _ShareDesktop.ShareDesktop(data.sd);
            if (data.sd.config) {
                for (var item in data.sd.config) {
                    sd[item] = data.sd.config[item];
                }
            }
            var user = new CubeUser(data.from ? data.from : data.user ? this.engine.accName : "");
            if (state.code && state.code != 200) {
                this.delegate.onShareDesktopFailed(new CubeError(state.code, state.desc), this);
                return;
            }
            if (action.indexOf('ack') > -1) {
                sd.isSelf = true;
            }
            switch (action) {
                case _Action.Action.CreateSDAck:
                    {
                        this.delegate.onShareDesktopCreated(sd, user);
                        break;
                    }
                case _Action.Action.CreateSDSync:
                    {
                        this.delegate.onShareDesktopCreated(sd, user);
                        break;
                    }
                case _Action.Action.CreateSDNotify:
                    {
                        this.delegate.onShareDesktopCreated(sd, user);
                        break;
                    }

                case _Action.Action.InviteSDAck:
                    {
                        this.delegate.onShareDesktopInvited(sd, user, data.members);
                        break;
                    }
                case _Action.Action.InviteSDSync:
                    {
                        this.delegate.onShareDesktopInvited(sd, user, data.members);
                        break;
                    }
                case _Action.Action.InviteSDNotify:
                    {
                        this.delegate.onShareDesktopInvited(sd, user, data.members);
                        break;
                    }

                case _Action.Action.JoinSDAck:
                    {
                        this._processActionJoinSDAck(sd);
                        break;
                    }
                case _Action.Action.JoinSDSync:
                    {
                        this.delegate.onShareDesktopJoined(sd, user);
                        break;
                    }
                case _Action.Action.JoinSDNotify:
                    {
                        this.delegate.onShareDesktopJoined(sd, user);
                        break;
                    }

                case _Action.Action.DestroySDAck:
                    {
                        this._processDestroy(sd, user);
                        break;
                    }
                case _Action.Action.DestroySDSync:
                    {
                        this._processDestroy(sd, user);
                        break;
                    }
                case _Action.Action.DestroySDNotify:
                    {
                        this._processDestroy(sd, user);
                        break;
                    }

                case _Action.Action.QuitSDAck:
                    {
                        this._processActionQuitSDAck(sd, user);
                        break;
                    }
                case _Action.Action.QuitSDSync:
                    {
                        this.delegate.onShareDesktopQuitd(sd, user);
                        break;
                    }
                case _Action.Action.QuitSDNotify:
                    {
                        this.delegate.onShareDesktopQuitd(sd, user);
                        break;
                    }

                case _Action.Action.AcceptInviteSDAck:
                    {
                        this.delegate.onShareDesktopInviteJoined(sd, user);
                        break;
                    }
                case _Action.Action.AcceptInviteSDSync:
                    {
                        this.delegate.onShareDesktopInviteJoined(sd, user);
                        break;
                    }
                case _Action.Action.AcceptInviteSDNotify:
                    {
                        this.delegate.onShareDesktopInviteJoined(sd, user);
                        break;
                    }

                case _Action.Action.RejectSDInviteAck:
                    {
                        this.delegate.onShareDesktopRejectInvited(sd, user);
                        break;
                    }
                case _Action.Action.RejectSDInviteSync:
                    {
                        this.delegate.onShareDesktopRejectInvited(sd, user);
                        break;
                    }
                case _Action.Action.RejectSDInviteNotify:
                    {
                        this.delegate.onShareDesktopRejectInvited(sd, user);
                        break;
                    }
                default:
                    break;
            }
        }
    }]);

    return ShareDesktopServiceWorker;
}(_ShareDesktopService2.ShareDesktopService);

/***/ })

/******/ });
//# sourceMappingURL=cube-rd.js.map