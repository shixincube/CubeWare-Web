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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
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

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _InstructionServiceWorker = __webpack_require__(86);

var _InstructionListener = __webpack_require__(47);

var _Instruction = __webpack_require__(48);

var _InstructionFeedback = __webpack_require__(85);

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
  global.CubeInstructionServiceWorker = _InstructionServiceWorker.InstructionServiceWorker;
  global.CubeInstructionListener = _InstructionListener.InstructionListener;
  global.CubeInstruction = _Instruction.Instruction;
  global.CubeInstructionFeedBack = _InstructionFeedback.InstructionFeedback;
})(window);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 指令执行结果
 *
 * @class InstructionRequestedResult
 * @author Guan Yong
 */
var InstructionRequestedResult = exports.InstructionRequestedResult = function () {
    function InstructionRequestedResult(targets, instruction, succeedDevices, failedDevices) {
        _classCallCheck(this, InstructionRequestedResult);

        this.targets = targets;
        this.instruction = instruction;
        this.succeedDevices = succeedDevices;
        this.failedDevices = failedDevices;
    }

    _createClass(InstructionRequestedResult, [{
        key: "getInstruction",
        value: function getInstruction() {
            return this.instruction;
        }
    }, {
        key: "getTargets",
        value: function getTargets() {
            return this.targets;
        }
    }]);

    return InstructionRequestedResult;
}();

/***/ }),

/***/ 128:
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
 * InstructionService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 指令服务接口。
 *
 * @interface InstructionService
 * @author Guan Yong
 */
var InstructionService = exports.InstructionService = function (_CubeService) {
  _inherits(InstructionService, _CubeService);

  function InstructionService() {
    _classCallCheck(this, InstructionService);

    return _possibleConstructorReturn(this, (InstructionService.__proto__ || Object.getPrototypeOf(InstructionService)).apply(this, arguments));
  }

  _createClass(InstructionService, [{
    key: "sendInstructionToUsers",


    /**
     *  发送指令给用户
     *
     * @param Array<string> cubeIds - 用户cube号
     * @param Instruction instruction - 指令对象
     * */
    value: function sendInstructionToUsers(cubeIds, instruction) {}

    /**
     * 发送指令给群组
     *
     * @param Array<string> groupIds - 群组号
     * @param Instruction instruction - 指令对象
     * */

  }, {
    key: "sendInstructionToGroups",
    value: function sendInstructionToGroups(groupIds, instruction) {}

    /**
     * 发送指令给设备
     *
     * @param Array<string> deviceIds - 设备号
     * @param Instruction instruction - 指令对象
     * */

  }, {
    key: "sendInstructionToDevices",
    value: function sendInstructionToDevices(deviceIds, instruction) {}

    /**
     * 执行任务后发送执行结果的反馈
     *
     * @param {InstructionFeedback} feedback - 反馈结果对象
     * */

  }, {
    key: "sendFeedback",
    value: function sendFeedback(feedback) {}

    /**
     * 查询最近的一条指令
     *
     * @param {function} callback - 查询后的回调
     */

  }, {
    key: "queryLastInstruction",
    value: function queryLastInstruction(callback) {}

    /**************以下是2.X的方法****************/
    /**
     * 发送指令给特定设备或特定用户和群
     * @param target {DeviceInfo|String}
     * @param instruction {CubeInstruction}
     */

  }, {
    key: "exeInstruction",
    value: function exeInstruction(target, instruction) {}

    /**
     * 查询某个用户或群组的最后指令
     * @param target {String} 用户或群的CubeID
     * @param callback {QueryInstructionCallback} 查询回调
     */

  }, {
    key: "queryLastInstruction",
    value: function queryLastInstruction(target, callback) {}

    /**
     * This is a description of the callback
     * @callback QueryInstructionCallback
     * @param error {CubeError | null} - 是否发生错误
     * @param instruction {CubeInstruction} - 查询到的指令信息
     */

  }]);

  return InstructionService;
}(CubeService);

/***/ }),

/***/ 47:
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
 * 指令服务监听器
 *
 * @interface InstructionListener
 * @author Guan Yong
 *
 */
var InstructionListener = exports.InstructionListener = function (_CubeListener) {
    _inherits(InstructionListener, _CubeListener);

    function InstructionListener() {
        _classCallCheck(this, InstructionListener);

        return _possibleConstructorReturn(this, (InstructionListener.__proto__ || Object.getPrototypeOf(InstructionListener)).apply(this, arguments));
    }

    _createClass(InstructionListener, [{
        key: "onInstructionRequested",

        /**
        * 接收指令
         * @param from {String}
         * @param instruction {CubeInstruction}
         */
        value: function onInstructionRequested(from, instruction) {}

        /**
        * 指令执行结果
         * @param result {InstructionRequestedResult} 指令
         */

    }, {
        key: "onInstructionResponded",
        value: function onInstructionResponded(result) {}

        /**
         * 当发生错误时被回调。
         *
         * @param {CubeStateCode} errorCode - 错误码。
         */

    }, {
        key: "onInstructionFailed",
        value: function onInstructionFailed(errorCode) {}
    }]);

    return InstructionListener;
}(CubeListener);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Instruction.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 指令实体。
 *
 * @class Instruction
 * @author Guan Yong
 */
var Instruction = exports.Instruction = function () {
    /**
     * @constructs
     * @param json {Object}
     */
    function Instruction(json) {
        _classCallCheck(this, Instruction);

        this.sn = Instruction.generateSerialNumber();
        this.expires = 0;
        this.instructions = new HashMap();

        if (null != json) {
            for (var item in json) {
                this.addInstruction(item, json[item]);
            }
        }
    }

    /**
     * 设置指令
     * @param name {String} 指令动作
     * @param data {String} 指令数据
     */


    _createClass(Instruction, [{
        key: "addInstruction",
        value: function addInstruction(name, data) {
            this.instructions.put(name, data);
        }

        /**
         * 删除指令
         * @param name {String} 指令动作
         */

    }, {
        key: "removeInstruction",
        value: function removeInstruction(name) {
            this.instructions.remove(name);
        }

        /**
         * 通过指令动作获取指令数据
         * @param name {String} 指令动作
         * @returns {String} 指令数据
         */

    }, {
        key: "getInstruction",
        value: function getInstruction(name) {
            return this.instructions.get(name);
        }

        /**
         * 获取指令有效期
         * @returns {Number} 指令有效期
         */

    }, {
        key: "getExpires",
        value: function getExpires() {
            return this.expires;
        }

        /**
         * 设置指令有效期
         * @param expires {Number} 指令有效期
         */

    }, {
        key: "setExpires",
        value: function setExpires(expires) {
            this.expires = expires;
        }

        /**
         * 转出为JSON
         * @returns {{sn:*, instr: {}, expires: *}}
         */

    }, {
        key: "toJSON",
        value: function toJSON() {
            var json = {};
            var keys = this.instructions.keySet();
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                json[key] = this.instructions.get(key);
            }
            return { sn: this.sn, instr: json, expires: this.expires };
        }

        // 指令sn生成

    }], [{
        key: "generateSerialNumber",
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

    return Instruction;
}();

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * InstructionFeedback.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 指令执行反馈数据实体
 *
 * @class InstructionFeedback
 * @author Guan Yong
 */
var InstructionFeedback = exports.InstructionFeedback = function () {
    /**
     * @constructs
     * @param {Number} sn
     * @param {boolean} isSuccess
     */
    function InstructionFeedback(sn) {
        var isSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _classCallCheck(this, InstructionFeedback);

        this.sn = sn;
        this.isSuccess = isSuccess;
        this.content = new HashMap();
    }

    /**
     * 转出为JSON
     * @returns {{sn:*, content: {}, expires: *}}
     */


    _createClass(InstructionFeedback, [{
        key: "toJSON",
        value: function toJSON() {
            var json = {};
            var keys = this.content.keySet();
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                json[key] = this.instructions.get(key);
            }
            return { sn: this.sn, content: json, isSuccess: this.isSuccess };
        }
    }]);

    return InstructionFeedback;
}();

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstructionServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InstructionRequestedResult = __webpack_require__(127);

var _InstructionListener = __webpack_require__(47);

var _InstructionService2 = __webpack_require__(128);

var _Instruction = __webpack_require__(48);

var _CubeError = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * 指令服务服务实现
 *
 * @class InstructionServiceWorker
 * @author Guan Yong
 */
var InstructionServiceWorker = exports.InstructionServiceWorker = function (_InstructionService) {
    _inherits(InstructionServiceWorker, _InstructionService);

    /**
     * @constructs
     * @param engine {CubeEngine}
     */
    function InstructionServiceWorker(engine) {
        _classCallCheck(this, InstructionServiceWorker);

        var _this = _possibleConstructorReturn(this, (InstructionServiceWorker.__proto__ || Object.getPrototypeOf(InstructionServiceWorker)).call(this, engine, _InstructionListener.InstructionListener, CELLET.InstructionService));

        _this.queryCallbacks = [];
        return _this;
    }

    _createClass(InstructionServiceWorker, [{
        key: '_sendInstruction',
        value: function _sendInstruction(ids, instruction, type) {
            if (null == this.session || null == this.session.name) {
                return false;
            }
            var param = {
                "instruction": instruction.toJSON(),
                "reference": Date.now(),
                "from": this.engine.session.accName
            };
            param[type] = JSON.parse(ids);
            return this.engine.connect.send(CELLET.InstructionService, CubeConst.ActionGo, param);
        }

        /**
         *  发送指令给用户
         *
         * @param Array<string> cubeIds - 用户cube号
         * @param Instruction instruction - 指令对象
         * */

    }, {
        key: 'sendInstructionToUsers',
        value: function sendInstructionToUsers(cubeIds, instruction) {
            return this._sendInstruction(cubeIds, instruction, 'cubeIds');
        }

        /**
         * 发送指令给群组
         *
         * @param Array<string> groupIds - 群组号
         * @param Instruction instruction - 指令对象
         * */

    }, {
        key: 'sendInstructionToGroups',
        value: function sendInstructionToGroups(groupIds, instruction) {
            return this._sendInstruction(groupIds, instruction, 'groupIds');
        }

        /**
         * 发送指令给设备
         *
         * @param Array<string> deviceIds - 设备号
         * @param Instruction instruction - 指令对象
         * */

    }, {
        key: 'sendInstructionToDevices',
        value: function sendInstructionToDevices(deviceIds, instruction) {
            return this._sendInstruction(deviceIds, instruction, 'deviceIds');
        }

        /**
         * 执行任务后发送执行结果的反馈
         *
         * @param {InstructionFeedback} feedback - 反馈结果对象
         * @param timestamp Go 返回的时间戳
         * */

    }, {
        key: 'sendFeedback',
        value: function sendFeedback(feedback, timestamp) {
            if (null == this.session || null == this.session.name) {
                return false;
            }
            var param = {
                "feedback": feedback.toJSON(),
                "reference": timestamp,
                "from": this.engine.session.accName
            };
            return this.engine.connect.send(CELLET.InstructionService, CubeConst.ActionFeedback, param);
        }

        /**
         * 查询最近的一条指令
         *
         * @param {function} callback - 查询后的回调
         */

    }, {
        key: 'queryLastInstruction',
        value: function queryLastInstruction(callback) {
            if (null == this.session || null == this.session.name) {
                return false;
            }
            this.queryCallbacks.push(callback);
            var param = {
                "from": this.engine.session.accName
            };
            return this.engine.connect.send(CELLET.InstructionService, CubeConst.ActionLast, param);
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString('state');
            var data = dialect.getParamAsString('data');
            if (state.code != 200) {
                this.delegate.onInstructionFailed(new _CubeError.CubeError(state.code, state.desc), this);
                return false;
            }
            switch (action) {
                case CubeConst.ActionGoAck:
                    {
                        this._processGoAck(data);
                        break;
                    }
                case CubeConst.ActionGoNotify:
                    {
                        this._processGoNotify(data);
                        break;
                    }
                case CubeConst.ActionFeedbackAck:
                    {
                        this._processFeedbackAck(data);
                        break;
                    }
                case CubeConst.ActionFeedbackNotify:
                    {
                        this._processFeedbackNotify(data);
                        break;
                    }
                case CubeConst.ActionLastAck:
                    {
                        this._processLastAck(data);
                        break;
                    }
                default:
                    break;
            }
        }
    }, {
        key: '_processGoAck',
        value: function _processGoAck(data) {}
    }, {
        key: '_processGoNotify',
        value: function _processGoNotify(data) {
            var payload = data;
            if (null != payload) {
                var from = payload.user.displayName;
                var obj = payload.instruction;
                var instruction = new _Instruction.Instruction(null != obj ? obj : {});
                this.delegate.onInstructionRequested(from, instruction);
            }
        }
    }, {
        key: '_processFeedbackAck',
        value: function _processFeedbackAck(data) {}
    }, {
        key: '_processFeedbackNotify',
        value: function _processFeedbackNotify(data) {
            var payload = data;
            var from = payload.user.displayName;
            var obj = payload.feedback;
            var instruction = new _Instruction.Instruction(null != obj ? obj : {});
            var result = new _InstructionRequestedResult.InstructionRequestedResult(from, instruction);
            this.delegate.onInstructionResponded(result);
        }
    }, {
        key: '_processLastAck',
        value: function _processLastAck(data) {
            var callback = this.queryCallbacks.shift();
            var payload = data;
            var obj = payload.instr;
            var instruction = new _Instruction.Instruction(null != obj ? obj : {});
            callback(false, instruction);
        }
    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {
            this.session = session;
        }
    }]);

    return InstructionServiceWorker;
}(_InstructionService2.InstructionService);

/***/ })

/******/ });
//# sourceMappingURL=cube-instruction.js.map