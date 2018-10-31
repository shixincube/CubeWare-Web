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
/******/ 	return __webpack_require__(__webpack_require__.s = 147);
/******/ })
/************************************************************************/
/******/ ({

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RecentSessionServiceWorker = __webpack_require__(90);

var _RecentSession = __webpack_require__(57);

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
  // 提供全局的接口类
  global.CubeRecentSessionServiceWorker = _RecentSessionServiceWorker.RecentSessionServiceWorker;
  global.CubeRecentSession = _RecentSession.RecentSession;
})(window);

/***/ }),

/***/ 148:
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
 * 会话监听器。
 *
 * @interface MessageListener
 */
var RecentSessionListener = exports.RecentSessionListener = function (_CubeListener) {
  _inherits(RecentSessionListener, _CubeListener);

  function RecentSessionListener() {
    _classCallCheck(this, RecentSessionListener);

    return _possibleConstructorReturn(this, (RecentSessionListener.__proto__ || Object.getPrototypeOf(RecentSessionListener)).apply(this, arguments));
  }

  _createClass(RecentSessionListener, [{
    key: "onRecentSessionAdded",

    /**
     * 最近会话增加
     *
     * @param recentSession
     */
    value: function onRecentSessionAdded(recentSession) {}
  }, {
    key: "onRecentSessionDeleted",


    /**
     * 最近会话删除
     *
     * @param recentSession
     */
    value: function onRecentSessionDeleted(recentSession) {}
  }, {
    key: "onRecentSessionChanged",


    /**
     * 会话置顶状态变化（置顶，未读数，内容）
     *
     * @param recentSession
     */
    value: function onRecentSessionChanged(recentSession) {}
  }]);

  return RecentSessionListener;
}(CubeListener);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentSessionService = exports.RecentSessionService = function (_CubeService) {
  _inherits(RecentSessionService, _CubeService);

  function RecentSessionService() {
    _classCallCheck(this, RecentSessionService);

    return _possibleConstructorReturn(this, (RecentSessionService.__proto__ || Object.getPrototypeOf(RecentSessionService)).apply(this, arguments));
  }

  _createClass(RecentSessionService, [{
    key: "queryRecentSessions",

    /**
     * 异步查询最近会话列表
     *
     * @param callback
     */
    value: function queryRecentSessions(callback) {}
  }, {
    key: "addRecentSession",


    /**
     * 添加最近会话
     *
     * @param recentSession
     */
    value: function addRecentSession(recentSession) {}
  }, {
    key: "deleteRecentSession",


    /**
     * 删除最近会话
     *
     * @param recentSession
     */
    value: function deleteRecentSession(recentSession) {}
  }, {
    key: "setRecentSessionTop",


    /**
     * 会话置顶设置
     *
     * @param recentSession
     * @param topTime
     */
    value: function setRecentSessionTop(recentSession, topTime) {}
  }, {
    key: "getAllUnreadCount",


    /**
     * 获取所有未读数
     *
     * @return
     */
    value: function getAllUnreadCount() {}
  }, {
    key: "clearUnreadCount",


    /**
     * 清空未读
     *
     * @param sessionId
     * @param sessionType
     */
    value: function clearUnreadCount(sessionId, sessionType) {}
  }]);

  return RecentSessionService;
}(CubeService);

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBRecentSessionService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DBRecentSession = __webpack_require__(151);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DBRecentSessionService = exports.DBRecentSessionService = function () {
    function DBRecentSessionService(engine) {
        _classCallCheck(this, DBRecentSessionService);

        this.engine = engine;
        this.dbm = null;
    }

    _createClass(DBRecentSessionService, [{
        key: 'startup',
        value: function startup() {
            this.dbm = new CubeDBManager('CubeRecentDataBase_' + this.engine.accName);
            console.log('链接最近会话数据库');
            this.dbm.loadEntity(_DBRecentSession.CubeDBRecentSession);
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
        key: 'storageRecent',
        value: function storageRecent(recentSession) {
            var _this = this;

            if (!this.dbm) {
                setTimeout(function () {
                    _this.storageRecent(recentSession);
                }, 500);
                return;
            }
            var entity = new _DBRecentSession.CubeDBRecentSession(recentSession);
            this.dbm.setEntity(entity, function (err) {});
        }
    }, {
        key: 'queryRecentById',
        value: function queryRecentById(recentId, callback) {
            var entity = new _DBRecentSession.CubeDBRecentSession({ sessionId: recentId });
            var isArray = recentId instanceof Array;
            recentId = isArray ? recentId : [recentId];
            this.dbm.getEntitysByColumns(entity, "id", recentId, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    ret = ret.filter(function (recent) {
                        return recent != null;
                    });
                    if (ret && ret.length > 0) {
                        callback(false, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }, {
        key: 'queryAllRecent',
        value: function queryAllRecent(callback) {
            var entity = new _DBRecentSession.CubeDBRecentSession();
            this.dbm.getAllEntity(entity, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (ret && ret.length > 0) {
                        callback(false, ret);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }]);

    return DBRecentSessionService;
}();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 最近会话列表持久化
 * */
var CubeDBRecentSession = exports.CubeDBRecentSession = function (_CubeDBEntity) {
    _inherits(CubeDBRecentSession, _CubeDBEntity);

    function CubeDBRecentSession() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CubeDBRecentSession);

        var _this = _possibleConstructorReturn(this, (CubeDBRecentSession.__proto__ || Object.getPrototypeOf(CubeDBRecentSession)).call(this, json.sessionId, 'CubeDBRecentSession'));

        _this.sessionId = json.sessionId; // 对话者ID，用户/或群组
        _this.sessionType = json.sessionType; // 会话类型 C2C,GROUP,SYSTEM,OTHER
        _this.displayName = json.displayName; // 对话者昵称
        _this.content = json.content; // 会话缩略类容
        _this.messageType = json.messageType; // 消息类型
        _this.messageSN = json.messageSN; // 消息SN
        _this.messageJson = json.messageJson; // 消息Json数据
        _this.messageStatus = json.messageStatus; // 消息状态
        _this.unreadCount = json.unreadCount; // 未读消息数量
        _this.time = json.time; // 时间，未发送成功则为发送时间，发送成功则为服务器时间
        _this.topTime = json.topTime; // 置顶时间，取消则为0
        _this.extension = json.extension; // 扩展字段
        return _this;
    }

    return CubeDBRecentSession;
}(CubeDBEntity);

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 最近会话实体。
 *
 * @class RecentSession
 */
var RecentSession = exports.RecentSession = function RecentSession() {
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RecentSession);

    this.sessionId = json.sessionId; // 对话者ID，用户/或群组
    this.sessionType = json.sessionType; // 会话类型 C2C,GROUP,SYSTEM,OTHER
    this.displayName = json.displayName; // 对话者昵称
    this.content = json.content; // 会话缩略类容
    this.messageType = json.messageType; // 消息类型
    this.messageSN = json.messageSN; // 消息SN
    this.messageJson = json.messageJson; // 消息Json数据
    this.messageStatus = json.messageStatus; // 消息状态
    this.unreadCount = json.unreadCount; // 未读消息数量
    this.time = json.time; // 时间，未发送成功则为发送时间，发送成功则为服务器时间
    this.topTime = json.topTime; // 置顶时间，取消则为0
    this.extension = json.extension; // 扩展字段
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecentSessionServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RecentSessionService2 = __webpack_require__(149);

var _RecentSessionListener = __webpack_require__(148);

var _DBRecentSessionService = __webpack_require__(150);

var _RecentSession = __webpack_require__(57);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentSessionServiceWorker = exports.RecentSessionServiceWorker = function (_RecentSessionService) {
    _inherits(RecentSessionServiceWorker, _RecentSessionService);

    function RecentSessionServiceWorker(engine) {
        var skipMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, RecentSessionServiceWorker);

        var _this = _possibleConstructorReturn(this, (RecentSessionServiceWorker.__proto__ || Object.getPrototypeOf(RecentSessionServiceWorker)).call(this, engine, _RecentSessionListener.RecentSessionListener, CELLET.RecentSession));

        _this.dbService = new _DBRecentSessionService.DBRecentSessionService(engine);
        _this.skipMessages = skipMessages;
        return _this;
    }

    /**
     * 设置跳过消息类型
     * */


    _createClass(RecentSessionServiceWorker, [{
        key: "setSkipMessages",
        value: function setSkipMessages(messageTypes) {
            if (messageTypes instanceof Array) {
                this.skipMessages = messageTypes;
                return true;
            }
            return false;
        }

        /**
         * 异步查询最近会话列表
         *
         * @param callback
         */

    }, {
        key: "queryRecentSessions",
        value: function queryRecentSessions() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

            this.dbService.queryAllRecent(function (err, data) {
                callback(err, data);
            });
        }
    }, {
        key: "addRecentSession",


        /**
         * 添加最近会话
         *
         * @param recentSession
         */
        value: function addRecentSession(recentSession) {
            this.dbService.storageRecent(recentSession);
            this.delegate.onRecentSessionAdded(recentSession);
        }
    }, {
        key: "updateRecentSession",


        /**
         * 更新最近会话
         *
         * @param recentSession
         */
        value: function updateRecentSession(recentSession) {
            this.dbService.storageRecent(recentSession);
            this.delegate.onRecentSessionChanged(recentSession);
        }
    }, {
        key: "_saveRecents",
        value: function _saveRecents(messages) {
            var _this2 = this;

            var recents = this._messagesToRecentSession(messages);
            var unread = void 0;

            var _loop = function _loop(recentId) {
                unread = 0;
                var saveRecent = recents[recentId];
                _this2.dbService.queryRecentById(recentId, function (err, recent) {
                    if (null != recent) {
                        recent = recent[0];
                        saveRecent = recent.time > recents[recentId].time ? recent : recents[recentId];
                        saveRecent.unreadCount = recent.unreadCount + recents[recentId].unreadCount;
                    }
                    _this2.dbService.storageRecent(saveRecent);
                });
            };

            for (var recentId in recents) {
                _loop(recentId);
            }
        }
    }, {
        key: "_messagesToRecentSession",
        value: function _messagesToRecentSession(messages) {
            var recents = {},
                recent = void 0,
                unread = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var message = _step.value;

                    recent = this._getMessageRecent(message);
                    unread = recents[recent.name] ? recents[recent.name].unreadCount : 0;
                    this._messageIsRead(message) ? '' : unread++;
                    if (!recents[recent.name]) {
                        recents[recent.name] = new _RecentSession.RecentSession({
                            sessionId: recent.name,
                            sessionType: recent.sessionType,
                            displayName: recent.displayName,
                            content: this._getMessageContent(message),
                            messageType: message.type,
                            messageSN: message.sn,
                            messageJson: message.toJSON(),
                            messageStatus: null,
                            unreadCount: 0,
                            time: message.sendTime,
                            topTime: 0
                        });
                        if (this._isSkip(message)) {
                            recents[recent.name].content = '';
                            recents[recent.name].unreadCount = 0;
                        }
                    } else {
                        if (this._isSkip(message)) {
                            continue;
                        }
                        recents[recent.name].unreadCount = unread;
                        recents[recent.name] = this._updateRecentByMessage(message, recents[recent.name]);
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

            console.log(recents);
            return recents;
        }

        /**
         * 根据消息存储最近会话
         * */

    }, {
        key: "_updateRecent",
        value: function _updateRecent(message) {
            var _this3 = this;

            var recent = this._getMessageRecent(message);
            this.dbService.queryRecentById(recent.name, function (err, dbrecent) {
                if (null != dbrecent) {
                    dbrecent = dbrecent[0];
                    if (message.type == CubeMessageType.Receipt) {
                        dbrecent.unreadCount = 0;
                    } else {
                        if (_this3._isSkip(message)) {
                            return;
                        }
                        dbrecent = _this3._updateRecentByMessage(message, dbrecent);
                        _this3._messageIsRead(message) ? '' : dbrecent.unreadCount ? dbrecent.unreadCount++ : dbrecent.unreadCount = 1;
                    }
                    _this3.delegate.onRecentSessionChanged(dbrecent);
                } else {
                    var unread = _this3._messageIsRead(message) ? 0 : 1;
                    dbrecent = new _RecentSession.RecentSession({
                        sessionId: recent.name,
                        sessionType: recent.sessionType,
                        displayName: recent.displayName || recent.name,
                        content: _this3._getMessageContent(message),
                        messageType: message.type,
                        messageSN: message.sn,
                        messageJson: message.toJSON(),
                        messageStatus: null,
                        unreadCount: unread,
                        time: message.sendTime,
                        topTime: 0
                    });
                    if (_this3._isSkip(message)) {
                        dbrecent.content = '';
                        dbrecent.unreadCount = 0;
                    }
                    _this3.delegate.onRecentSessionAdded(dbrecent);
                }
                _this3.dbService.storageRecent(dbrecent);
            });
        }

        /**
         * 判断消息是否跳过不处理
         * */

    }, {
        key: "_isSkip",
        value: function _isSkip(message) {
            return this.skipMessages.includes(message.type);
        }

        /**
         * 根据消息更新最近会话对象
         * */

    }, {
        key: "_updateRecentByMessage",
        value: function _updateRecentByMessage(message, recent) {
            var r = new _RecentSession.RecentSession(recent);
            if (message.sendTime > r.time) {
                r.content = this._getMessageContent(message);
                r.messageType = message.type;
                r.messageSN = message.sn;
                r.messageJson = message.toJSON();
                r.time = message.sendTime;
            }
            return r;
        }

        /**
         * 获得消息的会话ID
         * */

    }, {
        key: "_getMessageRecent",
        value: function _getMessageRecent(message) {
            var receiver = message.group || message.receiver;
            receiver = receiver.name == this.engine.session.name ? message.sender : receiver;
            receiver.sessionType = 'C2C';
            if (receiver.name != null && receiver.name.includes('g')) {
                receiver.sessionType = 'GROUP';
            }
            return receiver;
        }

        /**
         * 获得消息简略内容
         * */

    }, {
        key: "_getMessageContent",
        value: function _getMessageContent(message) {
            var content = {};
            content[CubeMessageType.Text] = message.content;
            content[CubeMessageType.Custom] = '[自定义消息]';
            content[CubeMessageType.File] = '[文件]';
            content[CubeMessageType.Image] = '[图片]';
            content[CubeMessageType.Voice] = '[短语音]';
            content[CubeMessageType.Video] = '[短视频]';
            content[CubeMessageType.Whiteboard] = '[白板]';
            content[CubeMessageType.WhiteboardClip] = '[白板剪辑]';
            content[CubeMessageType.Card] = '[卡片]';
            content[CubeMessageType.History] = '[历史]';
            content[CubeMessageType.Location] = '[位置]';
            content[CubeMessageType.RichContent] = '[富文本]';
            content[CubeMessageType.Reply] = '[消息回复]';
            content[CubeMessageType.Receipt] = '[消息回执]';
            content[CubeMessageType.UnKnown] = '[未知]';

            return content[message.type];
        }

        /**
         * 获得消息是否对于当前用户已读
         * */

    }, {
        key: "_messageIsRead",
        value: function _messageIsRead(message) {
            return message.sender.name == this.engine.session.name ? true : message.receipted;
        }

        /**
         * 删除最近会话
         *
         * @param recentSession
         */

    }, {
        key: "deleteRecentSession",
        value: function deleteRecentSession(recentSession) {}
    }, {
        key: "setRecentSessionTop",


        /**
         * 会话置顶设置
         *
         * @param recentSession
         * @param topTime
         */
        value: function setRecentSessionTop(recentSession, topTime) {}
    }, {
        key: "getAllUnreadCount",


        /**
         * 获取所有未读数
         *
         * @return
         */
        value: function getAllUnreadCount() {}
    }, {
        key: "clearUnreadCount",


        /**
         * 清空未读
         *
         * @param sessionId
         * @param sessionType
         */
        value: function clearUnreadCount(sessionId, sessionType) {}
    }, {
        key: "onRegisterStateChanged",
        value: function onRegisterStateChanged(session) {
            if (this.engine.registered) {
                this.dbService.startup();
            }
        }
    }]);

    return RecentSessionServiceWorker;
}(_RecentSessionService2.RecentSessionService);

/***/ })

/******/ });
//# sourceMappingURL=cube-recentSession.js.map