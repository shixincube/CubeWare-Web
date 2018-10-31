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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LiveServiceWorker = __webpack_require__(87);

var _LiveListener = __webpack_require__(49);

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
  global.CubeLiveServiceWorker = _LiveServiceWorker.LiveServiceWorker;
  global.CubeLiveListener = _LiveListener.LiveListener;
})(window);

/***/ }),

/***/ 130:
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
 * LiveService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 直播服务接口。
 *
 * @interface LiveService
 * @author Guan Yong
 */
var LiveService = exports.LiveService = function (_CubeService) {
  _inherits(LiveService, _CubeService);

  function LiveService() {
    _classCallCheck(this, LiveService);

    return _possibleConstructorReturn(this, (LiveService.__proto__ || Object.getPrototypeOf(LiveService)).apply(this, arguments));
  }

  _createClass(LiveService, [{
    key: "startRecord",

    /**
     * 开启直播
     * @param {String} groupId - 需要直播的群组号码
     * @param {String} liveName - 直播房间名称
     * @param {LiveMediaDevice} [device] - 需要使用的媒体设备
     * @param {Number} [type] - 直播类型 (可能的值: 0 - 默认, 1 - 带远程桌面的, 2 - 带白板的)
     */
    value: function startRecord(groupId, liveName, device, type) {}

    /**
     * 关闭直播
     */

  }, {
    key: "stopRecord",
    value: function stopRecord() {}

    /**
     * 获取直播信息
     * @param {String} groupId - 需要获取所在群组的直播信息
     * @returns {LiveInfo, null} - 直播信息
     */

  }, {
    key: "getLiveInfo",
    value: function getLiveInfo(groupId) {}

    /**
     * 观看直播
     * @param {String} groupId - 需要观看的直播房间号
     * @returns {Boolean} - 返回操作是否正常进行
     */

  }, {
    key: "startWatch",
    value: function startWatch(groupId) {}

    /**
     * 停止观看当前直播
     * @param {String} groupId - 需要观看的直播房间号
     * @returns {Boolean} - 返回操作是否正常进行
     */

  }, {
    key: "stopWatch",
    value: function stopWatch(groupId) {}

    /**
     * 获取媒体设备
     * @returns {{video: Array<String>, audio: Array<String>}}
     */

  }, {
    key: "getMediaDeviceList",
    value: function getMediaDeviceList() {}

    /**
     * @typedef {Object} LiveMediaDevice
     * @property {String} video
     * @property {String} audio
     */

  }]);

  return LiveService;
}(CubeService);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LiveAgent = exports.LiveAgent = function () {
    function LiveAgent(liveCore, liveInfo) {
        _classCallCheck(this, LiveAgent);

        this.liveCore = liveCore;
        this.liveInfo = liveInfo;
        this.live = null;
        this.channel = null;
    }

    _createClass(LiveAgent, [{
        key: 'start',
        value: function start(callback) {
            this.live = new this.liveCore();
            var mediaDevice = this.liveInfo.mediaDevice;
            if (!mediaDevice) {
                var list = this.live.listDevices();
                mediaDevice = {
                    video: list.video[0],
                    audio: list.audio[0]
                };
            } else {
                if (typeof mediaDevice.video !== 'string') {
                    var _list = this.live.listDevices();
                    mediaDevice.video = _list.video[0];
                }

                if (typeof mediaDevice.audio !== 'string') {
                    var _list2 = this.live.listDevices();
                    mediaDevice.audio = _list2.audio[0];
                }
            }
            this.channel = this.live.startLiveChannel(mediaDevice.video, mediaDevice.audio, this.liveInfo.server.host, this.liveInfo.server.port, this.liveInfo.groupId, this.liveInfo.server.streamPort, function (err) {
                callback(err);
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.channel.stop();
            this.live.destroy();
        }
    }]);

    return LiveAgent;
}();

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LiveInfo = exports.LiveInfo = function () {
    /**
     *
     * @param {String} name
     * @param {String} groupId
     * @param {String} master
     * @param {Array<String>} [members]
     * @param {Number} [startTime]
     */
    function LiveInfo(name, groupId, master) {
        var members = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var startTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Date.now();

        _classCallCheck(this, LiveInfo);

        this.name = name;
        this.members = members;
        this.master = master;
        this.startTime = startTime;
        this.groupId = groupId;
        this.server = null;
        this.mediaDevice = null;
        this.type = null;
        this.watchUrl = null;
    }

    _createClass(LiveInfo, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getMembers",
        value: function getMembers() {
            return this.members;
        }
    }, {
        key: "getMaster",
        value: function getMaster() {
            return this.master;
        }
    }, {
        key: "getStartTime",
        value: function getStartTime() {
            return this.startTime;
        }
    }, {
        key: "getGroupId",
        value: function getGroupId() {
            return this.groupId;
        }
    }]);

    return LiveInfo;
}();

/***/ }),

/***/ 133:
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
  Live: 'live',
  LiveAck: 'live-ack',
  StopLive: 'stop-live',
  StopLiveAck: 'stop-live-ack',
  Watch: 'watch',
  WatchAck: 'watch-ack',
  StopWatch: 'stop-watch',
  StopWatchAck: 'stop-watch-ack',
  GetList: '/live/get_list/',
  GetInfoBatch: '/live/get_info_batch/'
};

/***/ }),

/***/ 49:
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
 * 直播服务监听器
 *
 * @interface LiveListener
 * @author Guan Yong
 *
 */
var LiveListener = exports.LiveListener = function (_CubeListener) {
    _inherits(LiveListener, _CubeListener);

    function LiveListener() {
        _classCallCheck(this, LiveListener);

        return _possibleConstructorReturn(this, (LiveListener.__proto__ || Object.getPrototypeOf(LiveListener)).apply(this, arguments));
    }

    _createClass(LiveListener, [{
        key: "onLiveStarted",
        value: function onLiveStarted(groupId, master) {}
    }, {
        key: "onLiveStopped",
        value: function onLiveStopped(groupId, master) {}
    }, {
        key: "onLookerJoined",
        value: function onLookerJoined(groupId, watchers) {}
    }, {
        key: "onLookerQuit",
        value: function onLookerQuit(groupId, watchers) {}
    }, {
        key: "onFailed",
        value: function onFailed(err) {}
    }]);

    return LiveListener;
}(CubeListener);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiveServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LiveService2 = __webpack_require__(130);

var _LiveListener = __webpack_require__(49);

var _Action = __webpack_require__(133);

var _LiveInfo = __webpack_require__(132);

var _LiveAgent = __webpack_require__(131);

var _CubeError = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LiveServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 直播服务实现
 *
 * @class LiveServiceWorker
 * @author Guan Yong
 */
var LiveServiceWorker = exports.LiveServiceWorker = function (_LiveService) {
    _inherits(LiveServiceWorker, _LiveService);

    function LiveServiceWorker(engine, liveCore, viewDom) {
        _classCallCheck(this, LiveServiceWorker);

        var _this = _possibleConstructorReturn(this, (LiveServiceWorker.__proto__ || Object.getPrototypeOf(LiveServiceWorker)).call(this, engine, _LiveListener.LiveListener, window.CELLET.Live));

        _this.liveCore = liveCore;
        _this.liveMap = new HashMap();
        _this.liveAgent = null;
        _this.viewDom = viewDom;
        _this.resourcePath = engine.resourcePath + '/live/';
        return _this;
    }

    _createClass(LiveServiceWorker, [{
        key: 'setResourcePath',
        value: function setResourcePath(path) {
            this.resourcePath = path + '/';
        }

        /**
         * 开启直播
         */

    }, {
        key: 'startRecord',
        value: function startRecord(groupId, liveName, device) {
            var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            if (this.liveMap.containsKey(groupId)) {
                return false;
            }
            type = typeof type === 'number' ? type : 0;

            var param = { groupId: groupId, liveName: liveName, type: type };
            if (this.engine.connect.send(CELLET.Live, _Action.Action.Live, param)) {
                // let liveInfo = new LiveInfo(liveName, groupId, this.engine.accName);
                // liveInfo.type = type;
                // liveInfo.mediaDevice = device;
                // this.liveMap.put(groupId, liveInfo);
                // this.liveAgent = new LiveAgent(this.liveCore, liveInfo);
                return true;
            }
            return false;
        }

        /**
         * 关闭直播
         */

    }, {
        key: 'stopRecord',
        value: function stopRecord() {
            var childList = this.viewDom.childNodes;
            for (var i = 0; i < childList.length; i++) {
                this.viewDom.removeChild(childList[i]);
            }
            if (this.liveAgent instanceof _LiveAgent.LiveAgent) {
                var liveInfo = this.liveAgent.liveInfo;
                this.liveAgent.stop();
                this.liveAgent = null;
                this.liveMap.remove(liveInfo.groupId);

                var _param = { groupId: liveInfo.groupId };
                return this.engine.connect.send(CELLET.Live, _Action.Action.StopLive, _param);
            }
            return false;
        }

        /**
         * 获取直播信息
         *
         */

    }, {
        key: 'getLiveInfo',
        value: function getLiveInfo(groupId) {
            return this.liveMap.get(groupId);
        }

        /**
         * 观看直播
         */

    }, {
        key: 'startWatch',
        value: function startWatch(groupId) {
            var liveInfo = this.liveMap.get(groupId);
            if (liveInfo instanceof _LiveInfo.LiveInfo) {
                if (this.engine.connect.send(CELLET.Live, _Action.Action.Watch, param)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 停止观看当前直播
         */

    }, {
        key: 'stopWatch',
        value: function stopWatch(groupId) {
            var liveInfo = this.liveMap.get(groupId);
            if (liveInfo instanceof _LiveInfo.LiveInfo) {
                var childList = this.viewDom.childNodes;
                for (var i = 0; i < childList.length; i++) {
                    this.viewDom.removeChild(childList[i]);
                }

                var _param2 = { groupId: groupId };
                return this.engine.connect.send(CELLET.Live, _Action.Action.StopWatch, _param2);
            }
            return false;
        }
    }, {
        key: 'getMediaDeviceList',
        value: function getMediaDeviceList() {
            var core = new this.liveCore();
            var ret = core.listDevices();
            core.destroy();
            return ret;
        }
    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {
            var _this2 = this;

            if (this.engine.registered) {
                // 获取所有正在进行的直播
                var domain = (this.utils.isSecure ? "https" : "http") + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT;
                var server = new CubeRequest(domain);
                // 获取直播列表
                server.send(_Action.Action.GetList, { token: this.engine.accToken, tag: window.nucleus.tag }, function (err, data) {
                    if (err) {
                        nucleus.getLogger().w('CubeLiveService#GetList', 'Get live list failed!');
                    } else if (data.state.code === 200) {
                        var list = data.data.list;

                        if (list && list.length > 0) {
                            server.send(_Action.Action.GetInfoBatch, {
                                token: _this2.engine.accToken,
                                tag: window.nucleus.tag,
                                groupIds: list
                            }, function (error, d) {
                                if (error) {
                                    nucleus.getLogger().w('CubeLiveService#GetLiveInfoList', 'Get live info list failed!');
                                } else if (d.state.code === 200) {
                                    var infoList = d.data.list;
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = infoList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var info = _step.value;

                                            var liveInfo = new _LiveInfo.LiveInfo(info.liveName, info.groupId, info.master, info.members, Date.now());
                                            liveInfo.type = info.type;
                                            liveInfo.watchUrl = info.url;
                                            liveInfo.server = info.server;
                                            _this2.liveMap.put(info.groupId, liveInfo);
                                            _this2.delegate.onLiveStarted(info.groupId, info.master);
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
                    }
                });
            }
        }
    }, {
        key: '_processLive',
        value: function _processLive(dialect) {
            var data = dialect.getParamAsString("data");
            var groupId = data.groupId;
            var liveInfo = new _LiveInfo.LiveInfo(data.liveName, groupId, data.master, [], data.startTime);
            liveInfo.server = data.server;
            liveInfo.type = data.type;
            liveInfo.watchUrl = data.url;
            this.liveMap.put(groupId, liveInfo);
            this.delegate.onLiveStarted(groupId, data.master);
        }
    }, {
        key: '_processLiveAck',
        value: function _processLiveAck(dialect) {
            var _this3 = this;

            var state = dialect.getParamAsString("state");
            if (state.code === 200) {
                var data = dialect.getParamAsString("data");

                var groupId = data.groupId;
                if (this.liveAgent instanceof _LiveAgent.LiveAgent && this.liveAgent.liveInfo.groupId === groupId) {
                    var liveInfo = this.liveAgent.liveInfo;
                    liveInfo.server = data.server;
                    liveInfo.watchUrl = data.url;

                    this.liveAgent.start(function (err) {
                        if (err) {
                            _this3.stopRecord();
                            _this3.delegate.onFailed(new _CubeError.CubeError(CubeStateCode.LiveStartFailed, 'Live start failed.'));
                            return;
                        }
                        _this3.delegate.onLiveStarted(groupId, _this3.engine.accName);
                    });
                    // 加载直播界面
                    this._loadView(liveInfo);
                }
            } else {
                var keys = this.liveMap.keySet();
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var key = _step2.value;

                        var info = this.liveMap.get(key);
                        if (info.master === this.engine.accName) {
                            this.liveMap.remove(key);
                            break;
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

                this.delegate.onFailed(new _CubeError.CubeError(state.code, state.desc));
            }
        }
    }, {
        key: '_processStopLive',
        value: function _processStopLive(dialect) {
            var data = dialect.getParamAsString("data");
            var liveInfo = this.liveMap.get(data.groupId);
            if (liveInfo instanceof _LiveInfo.LiveInfo) {
                var childList = this.viewDom.childNodes;
                for (var i = 0; i < childList.length; i++) {
                    this.viewDom.removeChild(childList[i]);
                }
                this.liveMap.remove(data.groupId);
                this.delegate.onLiveStopped(data.groupId, data.master);
            }
        }
    }, {
        key: '_processStopLiveAck',
        value: function _processStopLiveAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code === 200) {
                this.delegate.onLiveStopped(data.groupId, this.engine.accName);
            } else {
                this.delegate.onFailed(new _CubeError.CubeError(state.code, state.desc), data.param.groupId);
            }
        }
    }, {
        key: '_processWatch',
        value: function _processWatch(dialect) {
            var data = dialect.getParamAsString("data");
            var liveInfo = this.liveMap.get(data.groupId);
            if (liveInfo instanceof _LiveInfo.LiveInfo) {
                liveInfo.members.concat(data.watchers);
                this.delegate.onLookerJoined(data.groupId, data.watchers);
            }
        }
    }, {
        key: '_processWatchAck',
        value: function _processWatchAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code === 200) {
                var liveInfo = this.liveMap.get(data.groupId);
                // 打开直播播放器
                this._loadView(liveInfo);
                this.delegate.onLookerJoined(data.groupId, [this.engine.accName]);
            } else if (state.code === window.CubeStateCode.LiveNotExist) {
                // 直播不存在, 删除信息
                this.liveMap.remove(data.groupId);
                this.delegate.onFailed(new _CubeError.CubeError(window.CubeStateCode.LiveNotExist, 'Watch live failed, live channel not exist.'), data.param.groupId);
            } else {
                this.delegate.onFailed(new _CubeError.CubeError(state.code, state.desc), data.param.groupId);
            }
        }
    }, {
        key: '_processStopWatch',
        value: function _processStopWatch(dialect) {
            var data = dialect.getParamAsString("data");
            var liveInfo = this.liveMap.get(data.groupId);
            if (liveInfo instanceof _LiveInfo.LiveInfo) {
                this.delegate.onLookerQuit(data.groupId, data.watchers);
            }
        }
    }, {
        key: '_processStopWatchAck',
        value: function _processStopWatchAck(dialect) {
            var state = dialect.getParamAsString("state");
            var data = dialect.getParamAsString("data");
            if (state.code === 200) {
                this.delegate.onLookerQuit(data.groupId, [this.engine.accName]);
            } else {
                this.delegate.onFailed(new _CubeError.CubeError(state.code, state.desc), data.param.groupId);
            }
        }
    }, {
        key: '_loadView',
        value: function _loadView(liveInfo) {
            var m3u8 = 'http://' + liveInfo.server.host + ':' + liveInfo.server.port + '/live/live.m3u8?n=' + liveInfo.groupId + '&t=' + Date.now();
            var frame = document.createElement('iframe');
            frame.style.width = '100%';
            frame.style.height = '100%';
            frame.style.border = 'none';
            frame.style.padding = '0';
            frame.style.margin = '0';
            frame.src = this.resourcePath + 'player.html?m3u8=' + encodeURIComponent(m3u8);
            this.viewDom.appendChild(frame);
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            switch (action) {
                case _Action.Action.Live:
                    {
                        this._processLive(dialect);
                        break;
                    }
                case _Action.Action.LiveAck:
                    {
                        this._processLiveAck(dialect);
                        break;
                    }
                case _Action.Action.StopLive:
                    {
                        this._processStopLive(dialect);
                        break;
                    }
                case _Action.Action.StopLiveAck:
                    {
                        this._processStopLiveAck(dialect);
                        break;
                    }
                case _Action.Action.Watch:
                    {
                        this._processWatch(dialect);
                        break;
                    }
                case _Action.Action.WatchAck:
                    {
                        this._processWatchAck(dialect);
                        break;
                    }
                case _Action.Action.StopWatch:
                    {
                        this._processStopWatch(dialect);
                        break;
                    }
                case _Action.Action.StopWatchAck:
                    {
                        this._processStopWatchAck(dialect);
                        break;
                    }
                default:
                    break;
            }
        }
    }]);

    return LiveServiceWorker;
}(_LiveService2.LiveService);

/***/ })

/******/ });
//# sourceMappingURL=cube-live.js.map