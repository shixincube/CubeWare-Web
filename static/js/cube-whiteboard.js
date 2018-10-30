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
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileInfo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileType = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 文件信息实体
 *
 * @class FileInfo
 * @author Xu Jiangwei, Guan Yong
 */
var FileInfo = exports.FileInfo = function () {

    /**
     * @constructs FileInfo
     * @param {string} fileId 文件id
     * @param {string} name 文件名称
     * @param {number} progress 进度
     * @param {number} size 文件大小
     * @param {FileType} type 文件类型
     * @param {string} md5 文件MD5
     * @param {string} createTime 文件创建时间
     * @param {string} parentId 文件父目录sn
     * @param {string} permission 文件可操作权限
     * @param {string} url 文件地址
     * @param {string} expires 文件有效期
     * */
    function FileInfo(fileId, name, progress, size, type, md5, createTime, parentId, permission, url, expires) {
        _classCallCheck(this, FileInfo);

        this.fileId = fileId;
        this.name = name;
        this.progress = progress;
        this.size = size;
        this.type = type;
        this.md5 = md5;
        this.createTime = createTime;
        this.parentId = parentId;
        this.permission = permission;
        this.url = url;
        this.expires = expires;
        this.file = null;
    }

    /**
     * 获取文件类型
     * @returns {FileType} - 文件类型
     */


    _createClass(FileInfo, [{
        key: 'getType',
        value: function getType() {
            if (!this.type) {
                var sf = this.name.split('.');
                if (sf.length > 0) {
                    var sfArr = sf[sf.length - 1];
                    var fileTypes = {
                        '': _FileType.FileType.Folder,
                        'png': _FileType.FileType.Image,
                        'jpeg': _FileType.FileType.Image,
                        'jpg': _FileType.FileType.Image,
                        'gif': _FileType.FileType.Image,
                        'doc': _FileType.FileType.Word,
                        'docx': _FileType.FileType.Word,
                        'xls': _FileType.FileType.Excel,
                        'xlsx': _FileType.FileType.Excel,
                        'pdf': _FileType.FileType.Pdf,
                        'pptx': _FileType.FileType.Ptt,
                        'mp3': _FileType.FileType.Audio,
                        'wma': _FileType.FileType.Audio,
                        'wav': _FileType.FileType.Audio,
                        'avi': _FileType.FileType.Video,
                        'rmvb': _FileType.FileType.Video,
                        'rm': _FileType.FileType.Video,
                        'exe': _FileType.FileType.App,
                        'com': _FileType.FileType.App,
                        'app': _FileType.FileType.App,
                        'rar': _FileType.FileType.Zip,
                        'zip': _FileType.FileType.Zip
                    };
                    this.type = null == fileTypes[sfArr] ? _FileType.FileType.Other : fileTypes[sfArr];
                }
            }
            return this.type;
        }

        /**
         * 解析文件
         * */

    }], [{
        key: 'parse',
        value: function parse(strJson) {
            if (null == strJson || (typeof strJson === 'undefined' ? 'undefined' : _typeof(strJson)) != 'object') {
                nucleus.getLogger().e('CubeFileInfo#parse', 'Error of parameters');
            }
            var fileInfo = new FileInfo();
            for (var item in strJson) {
                if (fileInfo.hasOwnProperty(item)) {
                    fileInfo[item] = strJson[item];
                }
            }
            fileInfo.getType();
            return fileInfo;
        }
    }]);

    return FileInfo;
}();

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(i) {
    if (r[i]) return r[i].exports;var o = r[i] = { i: i, l: !1, exports: {} };return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }var r = {};t.m = e, t.c = r, t.i = function (e) {
    return e;
  }, t.d = function (e, r, i) {
    t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: i });
  }, t.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(r, "a", r), r;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 16);
}([function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.GraphicsEntity = void 0;var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      n = r(1);t.GraphicsEntity = function () {
    function e(t) {
      i(this, e), this.name = t, this.board = null, this.exclusive = !1;
    }return o(e, [{ key: "setColor", value: function value(e) {
        this.color = e;
      } }, { key: "setBorderColor", value: function value(e) {
        this.borderColor = e;
      } }, { key: "setLineWeight", value: function value(e) {
        this.weight = e;
      } }, { key: "setBorderWidth", value: function value(e) {
        this.borderWidth = e;
      } }, { key: "dispose", value: function value() {
        this.board = null;
      } }, { key: "getCursorPos", value: function value(e) {
        var t = n.Utils.getCursorPosition(e),
            r = t.x,
            i = t.y,
            o = this.board.paperDom.createSVGPoint();return o.x = r, o.y = i, o = o.matrixTransform(this.board.paperDom.getScreenCTM().inverse()), r = o.x, i = o.y, { x: r, y: i };
      } }, { key: "onDraw", value: function value(e) {} }, { key: "onResize", value: function value(e, t) {} }, { key: "onClick", value: function value(e) {} }, { key: "onMouseMove", value: function value(e) {} }, { key: "onMouseDown", value: function value(e) {} }, { key: "onMouseUp", value: function value(e) {} }, { key: "onTouchMove", value: function value(e) {} }, { key: "onTouchStart", value: function value(e) {} }, { key: "onTouchEnd", value: function value(e) {} }, { key: "onKeyPress", value: function value(e) {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var i = navigator.userAgent.toLowerCase();t.Utils = { isIPhone: "iphone os" == i.match(/iphone os/i), isAndroid: "android" == i.match(/android/i), getElementChildren: function getElementChildren(e) {
      if (e.children) return e.children;for (var t = [], r = e.childNodes, i = 0; i < r.length; ++i) {
        1 === r[i].nodeType && t.push(r[i]);
      }return t;
    }, getCursorPosition: function getCursorPosition(e) {
      if (void 0 === e.touches) {
        return { x: e.clientX || e.pageX, y: e.clientY || e.pageY };
      }if (e.touches.length > 0) {
        return { x: e.touches[0].pageX || e.touches[0].clientX || e.clientX, y: e.touches[0].pageY || e.touches[0].clientY || e.clientY };
      }return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }, getDrawPosition: function getDrawPosition(e, t) {
      var r = void 0 === t.touches ? this.getMousePos(t) : this.getTouchPos(t),
          i = this.getX(e),
          o = this.getY(e);return { x: r.x - i, y: r.y - o };
    }, getMousePos: function getMousePos(e) {
      var t = e || window.event,
          r = document.documentElement.scrollLeft || document.body.scrollLeft,
          i = document.documentElement.scrollTop || document.body.scrollTop;return { x: t.pageX || t.clientX + r, y: t.pageY || t.clientY + i };
    }, getTouchPos: function getTouchPos(e) {
      var t = e || window.event,
          r = document.documentElement.scrollLeft || document.body.scrollLeft,
          i = document.documentElement.scrollTop || document.body.scrollTop;return { x: t.touches[0].pageX || t.clientX + r, y: t.touches[0].pageY || t.clientY + i };
    }, getX: function getX(e) {
      for (var t = e.offsetLeft, r = e; null != (r = r.offsetParent);) {
        t += r.offsetLeft;
      }return t;
    }, getY: function getY(e) {
      for (var t = e.offsetTop, r = e; null != (r = r.offsetParent);) {
        t += r.offsetTop;
      }return t;
    }, fixNumber: function fixNumber(e) {
      var t = new Number(e);return Number(t.toFixed(2));
    }, fixNumberToString: function fixNumberToString(e) {
      return new Number(e).toFixed(2);
    }, unselectable: function unselectable(e) {
      e.setAttribute("unselectable", "on"), e.onmousedown = function () {
        return !1;
      };var t = e.style;t.userSelect = "none", t.webkitUserSelect = "none", t.MozUserSelect = "-moz-none";
    } };
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.SlideEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(6);t.SlideEntity = function (e) {
    function t(e, r, n) {
      i(this, t);var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return a.file = null, a.obscure = !1, a.from = null, a.group = null, a.cursor = 0, a.presentedImage = null, a.presentedWidth = 0, a.presentedHeight = 0, a.scale = 1, a.prevImage = null, a.prevWidth = 0, a.prevHeight = 0, a.nextImage = null, a.nextWidth = 0, a.nextHeight = 0, a.pageLock = !1, a.loadedImageList = [], a.loadedImageSizes = [], a.changedCallback = null, a.notes = null, a.restore = !0, a.isFirstSharing = !1, a.exclusive = !1, a.file = e, a.obscure = void 0 !== r && r, void 0 !== n && (a.cursor = n - 1), a;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "slide";
      } }]), a(t, [{ key: "getSize", value: function value() {
        return { width: this.presentedWidth, height: this.presentedHeight };
      } }, { key: "getPosition", value: function value() {
        if (null != this.presentedImage && null != this.presentedImage.node) {
          return { x: parseInt(this.presentedImage.node.getAttribute("x")), y: parseInt(this.presentedImage.node.getAttribute("y")) };
        }
      } }, { key: "getDocName", value: function value() {
        return this.file.name;
      } }, { key: "currentPage", value: function value() {
        return this.cursor + 1;
      } }, { key: "numPages", value: function value() {
        return this.file.urls.length;
      } }, { key: "prevPage", value: function value() {
        if (0 != this.cursor && !this.pageLock) {
          this.pageLock = !0, this.board.erase(!0, !1), this.board.showMask();var e = this,
              t = e.cursor - 1;null == e.prevImage ? e._loadImage(e.board.paper, e.file.urls[t], function (t, r, i) {
            e._backupImage(t, r, i), e.prevImage = t, e.prevWidth = r, e.prevHeight = i, e._page(e.prevImage, function () {
              e.cursor -= 1, e._preparePrev(), e.restore && e.restoreNote(e.cursor + 1), e.pageLock = !1, e.board.hideMask();
            });
          }, function (t) {
            e.board.delegate.onWhiteboardFailed(e.board, CubeErrorCode.LoadFileFailed), e.pageLock = !1, e.board.hideMask();
          }) : e._page(e.prevImage, function () {
            e.cursor -= 1, e._preparePrev(), e.restore && e.restoreNote(e.cursor + 1), e.pageLock = !1, e.board.hideMask();
          });
        }
      } }, { key: "nextPage", value: function value() {
        if (!(this.cursor >= this.file.urls.length - 1 || this.pageLock)) {
          this.pageLock = !0, this.board.erase(!0, !1), this.board.showMask();var e = this,
              t = e.cursor + 1;null == e.nextImage ? e._loadImage(e.board.paper, e.file.urls[t], function (t, r, i) {
            e._backupImage(t, r, i), e.nextImage = t, e.nextWidth = r, e.nextHeight = i, e._page(e.nextImage, function () {
              e.cursor += 1, e._prepareNext(), e.restore && e.restoreNote(e.cursor + 1), e.pageLock = !1, e.board.hideMask();
            });
          }, function (t) {
            e.board.delegate.onWhiteboardFailed(e.board, CubeErrorCode.LoadFileFailed), e.pageLock = !1, e.board.hideMask();
          }) : e._page(e.nextImage, function () {
            e.cursor += 1, e._prepareNext(), e.restore && e.restoreNote(e.cursor + 1), e.pageLock = !1, e.board.hideMask();
          });
        }
      } }, { key: "gotoPage", value: function value(e) {
        var t = e - 1;if (!(t == this.cursor || t < 0 || t > this.file.urls.length - 1)) {
          this.board.erase(!0, !1), this.board.showMask();var r = this,
              i = function i() {
            if (null != r.prevImage && r.prevImage.remove(), null != r.nextImage && r.nextImage.remove(), null != r.presentedImage && r.presentedImage.remove(), r._loadImage(r.board.paper, r.file.urls[t], function (e, t, i) {
              r._presentImage(e, t, i), r.board.hideMask();
            }, function (e) {
              r.board.delegate.onWhiteboardFailed(r.board, CubeErrorCode.LoadFileFailed), r.board.hideMask();
            }), t > 0 && r._loadImage(r.board.paper, r.file.urls[t - 1], function (e, t, i) {
              r._backupImage(e, t, i), r.prevImage = e, r.prevWidth = t, r.prevHeight = i;
            }), t < r.file.urls.length - 1 && r._loadImage(r.board.paper, r.file.urls[t + 1], function (e, t, i) {
              r._backupImage(e, t, i), r.nextImage = e, r.nextWidth = t, r.nextHeight = i;
            }), r.cursor = t, r.restore && r.restoreNote(r.cursor + 1), r.pageLock = !1, null != r.changedCallback && r.changedCallback.call(r.board, r, "="), !r.obscure) {
              var e = { whiteboardId: r.board.name, from: r.board.sessionName, command: { name: "slide", param: r.file, attr: { cursor: r.cursor, page: "=" } } };this.board.triggerChange(e);
            }
          };this.pageLock ? setTimeout(function () {
            r.pageLock = !0, i();
          }, 200) : i();
        }
      } }, { key: "reload", value: function value() {
        var e = this;e.board.showMask(), e._loadImage(e.board.paper, e.file.urls[e.cursor], function (t, r, i) {
          e._presentImage(t, r, i), e.board.hideMask();
        }, function (t) {
          e.board.delegate.onWhiteboardFailed(e.board, CubeErrorCode.LoadFileFailed), e.board.hideMask();
        });
      } }, { key: "dispose", value: function value() {
        this.board.hideMask(), null != this.presentedImage && (this.presentedImage.remove(), this.presentedImage = null), null != this.nextImage && (this.nextImage.remove(), this.nextImage = null), null != this.prevImage && (this.prevImage.remove(), this.prevImage = null), this.board.dom.style.overflow = "hidden", this.board.viewport.reset(), this.faultListener = null, s.GraphicsEntity.prototype.dispose.call(this);
      } }, { key: "appendNote", value: function value(e) {
        var t = this.cursor + 1;if (void 0 !== e.page && null != e.page && (t = e.page), null == this.notes) {
          this.notes = new HashMap();var r = new u.SlideNote(t);r.append(e), this.notes.put(t, r);
        } else {
          var r = this.notes.get(t);null == r ? (r = new u.SlideNote(t), r.append(e), this.notes.put(t, r)) : r.append(e);
        }
      } }, { key: "popNote", value: function value() {
        if (null == this.notes) return null;var e = this.cursor + 1,
            t = this.notes.get(e);return null == t ? null : t.pop();
      } }, { key: "clearNote", value: function value() {
        if (null != this.notes) {
          var e = this.cursor + 1,
              t = this.notes.get(e);null != t && (this.notes.remove(e), t.clear());
        }
      } }, { key: "restoreNote", value: function value(e) {
        if (null != this.notes) {
          this.board.erase(!0, !1);var t = this.notes.get(e);if (null != t) for (var r = t.records, i = 0; i < r.length; ++i) {
            this.board._replayRecord(r[i]);
          }
        }
      } }, { key: "exportPage", value: function value(e) {
        var t = this;if (0 == e || e - 1 >= t.file.urls.length) return null;var r = null;null != t.notes && (r = t.notes.get(e));var i = { page: e, url: t.file.urls[e - 1] };if (null != r) {
          i.notes = [];for (var o = 0; o < r.records.length; ++o) {
            var n = r.records[o],
                a = { sn: n.sn, type: n.type, raw: n.raw, time: n.time };i.notes.push(a);
          }
        }return i;
      } }, { key: "onDraw", value: function value(e) {
        var r = this,
            i = r.board.getExEntity(t.Name);null != i && i.dispose(), r.changedCallback = r.board.onSlideChanged, r.board.showMask(), r._loadImage(e, r.file.urls[r.cursor], function (e, t, i) {
          if (r._presentImage(e, t, i), !r.obscure) {
            var o = { whiteboardId: r.board.name, from: r.board.sessionName, command: { name: "slide", param: r.file, attr: { cursor: r.cursor, page: "*" } } };r.isFirstSharing && (o.command.upload = !0, r.isFirstSharing = !1), r.board.triggerChange(o);
          }r.changedCallback.call(r.board, r, "*"), r.board.hideMask();
        }, function (e) {
          r.board.delegate.onWhiteboardFailed(r.board, CubeErrorCode.LoadFileFailed), r.board.hideMask();
        }), r.file.urls.length > 1 && r.cursor + 1 < r.file.urls.length && r._loadImage(e, r.file.urls[r.cursor + 1], function (e, t, i) {
          r._backupImage(e, t, i), r.nextImage = e, r.nextWidth = t, r.nextHeight = i;
        });
      } }, { key: "onResize", value: function value(e, t) {
        this._adjustImagePos(this.presentedImage, this.presentedWidth, this.presentedHeight, e, t), this._adjustImagePos(this.prevImage, this.prevWidth, this.prevHeight, e, t), this._adjustImagePos(this.nextImage, this.nextWidth, this.nextHeight, e, t);
      } }, { key: "onClick", value: function value(e) {} }, { key: "onKeyPress", value: function value(e) {
        if (!this.obscure) {
          var t = e.which || e.keyCode;39 == t || 93 == t ? this.nextPage() : 37 != t && 91 != t || this.prevPage();
        }
      } }, { key: "_presentImage", value: function value(e, t, r) {
        var i = this;i.presentedImage = e, i.presentedWidth = t, i.presentedHeight = r, null == e.node ? setTimeout(function () {
          i._adjustImagePos(e, t, r, i.board.width, i.board.height);
        }, 40) : i._adjustImagePos(e, t, r, i.board.width, i.board.height), e.attr("opacity", 1), e.toBack(), null != i.prevImage && i.prevImage.toBack(), null != i.nextImage && i.nextImage.toBack();
      } }, { key: "_backupImage", value: function value(e, t, r) {
        var i = this;null == e.node ? setTimeout(function () {
          i._adjustImagePos(e, t, r, i.board.width, i.board.height);
        }, 40) : i._adjustImagePos(e, t, r, i.board.width, i.board.height), e.attr("opacity", 0), e.toBack();
      } }, { key: "_preparePrev", value: function value() {
        var e = this;if (!e.obscure) {
          var t = { whiteboardId: e.board.name, from: e.board.sessionName, command: { name: "slide", param: e.file, attr: { cursor: e.cursor, page: "<" } } };this.board.triggerChange(t);
        }if (null != this.nextImage && this.nextImage.remove(), this.nextImage = this.presentedImage, this.presentedImage = this.prevImage, 0 == this.cursor) return this.prevImage = null, void (null != this.changedCallback && this.changedCallback.call(this.board, this, "<"));e._loadImage(e.board.paper, e.file.urls[e.cursor - 1], function (t, r, i) {
          e._backupImage(t, r, i), e.prevImage = t, e.prevWidth = r, e.prevHeight = i, null != e.changedCallback && e.changedCallback.call(e.board, e, "<");
        });
      } }, { key: "_prepareNext", value: function value() {
        var e = this;if (!e.obscure) {
          var t = { whiteboardId: e.board.name, from: e.board.sessionName, command: { name: "slide", param: e.file, attr: { cursor: e.cursor, page: ">" } } };this.board.triggerChange(t);
        }if (null != this.prevImage && this.prevImage.remove(), this.prevImage = this.presentedImage, this.presentedImage = this.nextImage, this.cursor + 1 >= this.file.urls.length - 1) return this.nextImage = null, void (null != this.changedCallback && this.changedCallback.call(this.board, this, ">"));e._loadImage(e.board.paper, e.file.urls[e.cursor + 1], function (t, r, i) {
          e._backupImage(t, r, i), e.nextImage = t, e.nextWidth = r, e.nextHeight = i, null != e.changedCallback && e.changedCallback.call(e.board, e, ">");
        });
      } }, { key: "_page", value: function value(e, t) {
        null != this.presentedImage && (this.presentedImage.animate({ opacity: 0 }, 300, "linear"), e.animate({ opacity: 1 }, 300, "linear", function () {
          t.call(null);
        }));
      } }, { key: "_loadImage", value: function value(e, t, r, i) {
        var o = this.loadedImageList.indexOf(t);if (o >= 0) {
          var n = this.loadedImageSizes[o],
              a = e.image(t, 0, 0, n.width, n.height);a.node.setAttribute("unselectable", "on"), a.node.onmousedown = function () {
            return !1;
          };var s = a.node.style;return s.userSelect = "none", s.webkitUserSelect = "none", s.MozUserSelect = "-moz-none", void r.call(null, a, n.width, n.height);
        }var u = this,
            l = new Image();l.onload = function (i) {
          var o = l.width,
              n = l.height;u.loadedImageList.push(t.toString()), u.loadedImageSizes.push({ width: o, height: n });var a = e.image(t, 0, 0, o, n);a.node.setAttribute("unselectable", "on"), a.node.onmousedown = function () {
            return !1;
          };var s = a.node.style;s.userSelect = "none", s.webkitUserSelect = "none", s.MozUserSelect = "-moz-none", r.call(null, a, o, n);
        }, void 0 !== i && (l.onerror = function (e) {
          i.call(null, t);
        }), l.src = t;
      } }, { key: "_adjustImagePos", value: function value(e, t, r, i, o) {
        if (null != e && null != e.node) {
          var n = .5 * (this.board.paperWidth - t),
              a = .5 * (this.board.paperHeight - r);e.node.setAttribute("x", parseInt(n)), e.node.setAttribute("y", parseInt(a));
        }
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.WhiteboardCoreListener = function () {
    function e() {
      i(this, e);
    }return o(e, [{ key: "onSlideOpened", value: function value(e) {} }, { key: "onSlideChanged", value: function value(e) {} }, { key: "onCleanup", value: function value() {} }, { key: "onChange", value: function value(e) {} }, { key: "onWhiteboardFailed", value: function value(e) {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.WhiteboardPlayer = void 0;var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      n = r(2);t.WhiteboardPlayer = function () {
    function e(t) {
      i(this, e), this.board = t, this.data = null, this.listener = null, this.tickTimer = 0, this.timestamp = 0, this.timeDelta = 0, this.timeCursor = 0, this.timeline = null;
    }return o(e, [{ key: "setListener", value: function value(e) {
        this.listener = e;
      } }, { key: "play", value: function value() {
        if (this.isPlaying() || null == this.data) return !1;if (null != this.board.recorder && this.board.recorder.isRecording()) return !1;if (this.board.cleanup(!0), void 0 !== this.data.slideFile) {
          var e = new n.SlideEntity(this.data.slideFile, !0, this.data.beginPage);this.board.selectEntity(e);
        }var t = this;this.tickTimer = setTimeout(function () {
          if (null != t.listener && t.listener.onStarted(t), void 0 !== t.data.currents) for (var e = 0; e < t.data.currents.length; ++e) {
            t.board._replayRecord(t.data.currents[e], !0);
          }t._tick();
        }, 200), this.timestamp = Date.now(), this.timeCursor = 0;for (var r = 0; r < this.data.timeline.length; ++r) {
          this.timeline.push(this.data.timeline[r]);
        }return !0;
      } }, { key: "stop", value: function value() {
        this.tickTimer > 0 && (clearTimeout(this.tickTimer), this.tickTimer = 0), this._stop();
      } }, { key: "pause", value: function value() {
        null != this.data && 0 != this.timeline.length && (this.tickTimer > 0 && (clearTimeout(this.tickTimer), this.tickTimer = 0), this.timeDelta = Date.now() - this.timeCursor, null != this.listener && this.listener.onPaused(this));
      } }, { key: "resume", value: function value() {
        if (!(this.tickTimer > 0 || null == this.data || 0 == this.timeline.length)) {
          this.timestamp = Date.now() + this.timeDelta;var e = this;setTimeout(function () {
            e._tick();
          }, 30), null != this.listener && this.listener.onResumed(this);
        }
      } }, { key: "isPlaying", value: function value() {
        return this.tickTimer > 0;
      } }, { key: "importData", value: function value(e) {
        this.data = e, this.timeline = new Array();
      } }, { key: "_stop", value: function value() {
        null != this.listener && this.listener.onStopped(this);
      } }, { key: "_fetchAndPresent", value: function value() {
        var e = Date.now(),
            t = this.timeline[0];if (t.time - this.data.start <= e - this.timestamp) if (this.timeline.shift(), "vg" == t.category) this.board._replayRecord(t, !0, { dur: 400 });else if ("opt" == t.category) if ("undo" == t.name) this.board.undo(!0);else if ("redo" == t.name) this.board.redo(!0);else if ("erase" == t.name) this.board.erase(!0);else if ("slide" == t.name) {
          var r = this.board.getSlide();null != r && r.currentPage() != t.page && r.gotoPage(t.page);
        }return this.timeCursor = e, 0 != this.timeline.length;
      } }, { key: "_tick", value: function value() {
        if (this.tickTimer > 0 && (clearTimeout(this.tickTimer), this.tickTimer = 0), !this._fetchAndPresent()) return void this._stop();var e = this;this.tickTimer = setTimeout(function () {
          e._tick();
        }, 300);
      } }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.WhiteboardRecorder = function () {
    function e(t) {
      i(this, e), this.board = t, this.timeline = [], this.recording = !1, this.listener = null, this.start = 0, this.currents = null, this.slide = null, this.beginPage = -1, this.pauseRecorder = !1, this._pauseRecorder = null, this._resumeRecorder = null;
    }return o(e, [{ key: "setListener", value: function value(e) {
        this.listener = e;
      } }, { key: "startRecording", value: function value() {
        var e = this;if (this.recording) return !1;if (null != this.board.player && this.board.player.isPlaying()) return !1;if (this.recording = !0, this._pauseRecorder = function () {
          if (e.pauseRecorder) return !1;e.pauseRecorder = !0, e.recording = !1, null != e.listener && e.listener.onPaused(e);
        }, this._resumeRecorder = function () {
          if (!e.pauseRecorder) return !1;e.recording = !0, e.pauseRecorder = !1, null != e.listener && e.listener.onResumed(e);
        }, this.slide = this.board.getSlide(), null != this.slide ? this.beginPage = this.slide.currentPage() : this.beginPage = -1, this.pauseRecorder) return !1;var t = this.board.pastRecords.length;if (t > 0) {
          this.currents = [];for (var r = 0; r < t; ++r) {
            this._notifyRecord(this.board.pastRecords[r], this.currents);
          }
        } else this.currents = null;return this.timeline.splice(0, this.timeline.length), this.start = Date.now(), null != this.listener && this.listener.onStarted(this), !0;
      } }, { key: "pauseRecording", value: function value() {
        return void 0 !== this._pauseRecorder && "function" == typeof this._pauseRecorder && this._pauseRecorder();
      } }, { key: "resumeRecording", value: function value() {
        return void 0 !== this._resumeRecorder && "function" == typeof this._resumeRecorder && this._resumeRecorder();
      } }, { key: "stopRecording", value: function value() {
        return !!this.recording && (this.recording = !1, this.pauseRecorder = !1, null != this.listener && this.listener.onStopped(this), !0);
      } }, { key: "isRecording", value: function value() {
        return this.recording;
      } }, { key: "exportData", value: function value(e) {
        if (this.recording || this.pauseRecorder) return null;var t = this,
            r = 0;void 0 !== e && (r = e - t.start);var i = { start: t.start, delta: r, timeline: t.timeline };return null != this.currents && (i.currents = this.currents), null != this.slide && (i.slideFile = this.slide.file, i.beginPage = this.beginPage), i;
      } }, { key: "_notifyOperation", value: function value(e) {
        this.recording && !this.pauseRecorder && (e.category = "opt", this.timeline.push(e));
      } }, { key: "_notifyRecord", value: function value(e, t) {
        if (this.recording && !this.pauseRecorder) {
          var r = { category: "vg", sn: e.sn, type: e.type, raw: e.raw, time: e.time };void 0 === t ? this.timeline.push(r) : t.push(r);
        }
      } }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.SlideNote = function () {
    function e(t) {
      i(this, e), this.page = t, this.records = [];
    }return o(e, [{ key: "append", value: function value(e) {
        this.records.push(e);
      } }, { key: "pop", value: function value() {
        return this.records.pop();
      } }, { key: "clear", value: function value() {
        0 !== this.records.length && this.records.splice(0, this.records.length);
      } }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.ArrowEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(1);t.ArrowEntity = function (e) {
    function t(e) {
      i(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return r.weight = 4, r.color = "#FE0000", r.flag = !1, r.startPos = null, r.endPos = null, r.arrow = null, r.drawTimer = 0, r.drawEl = null, r.exclusive = !0, void 0 !== e && (r.weight = (e.weight || 2) + 2, r.color = e.color || "#FE0000"), r;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "arrow";
      } }]), a(t, [{ key: "setLineWeight", value: function value(e) {
        this.weight = e + 2;
      } }, { key: "fireBegin", value: function value(e) {
        this.flag = !0, this.startPos = this.getCursorPos(e), this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0), this.arrow = "url(" + this.board._matcheArrow(this.color) + ")";
      } }, { key: "fireEnd", value: function value(e) {
        if (this.flag = !1, this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0), null != this.drawEl && this.drawEl.remove(), this.endPos = this.getCursorPos(e), this.drawEl = this.draw(this.startPos, this.endPos), null != this.drawEl) {
          var r = this.startPos.x,
              i = this.startPos.y,
              o = this.endPos.x,
              n = this.endPos.y,
              a = this,
              s = { x1: u.Utils.fixNumber(r), y1: u.Utils.fixNumber(i), x2: u.Utils.fixNumber(o), y2: u.Utils.fixNumber(n) },
              l = { stroke: a.color, strokeWidth: a.weight },
              h = a.board.record(t.Name, a.drawEl, { param: s, attr: l }),
              c = { whiteboardId: a.board.name, command: { name: "arrow", sn: h, param: s, attr: l } },
              d = this.board.getSlide();null != d && (c.command.page = d.cursor + 1), this.board.triggerChange(c), this.drawEl = null;
        }
      } }, { key: "fireMove", value: function value(e) {
        if (this.flag && !(this.drawTimer > 0)) {
          var t = this;this.drawTimer = setTimeout(function () {
            clearTimeout(t.drawTimer), t.drawTimer = 0, null != t.drawEl && t.drawEl.remove();var r = t.getCursorPos(e);t.drawEl = t.draw(t.startPos, r);
          }, 40);
        }
      } }, { key: "dispose", value: function value() {
        this.board.paperDom.style.cursor = "auto", this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0), s.GraphicsEntity.prototype.dispose.call(this);
      } }, { key: "draw", value: function value(e, r) {
        return t._Draw(this.board, e, r, this.color, this.weight, this.arrow);
      } }, { key: "onMouseMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onMouseDown", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onMouseUp", value: function value(e) {
        this.fireEnd(e);
      } }, { key: "onTouchMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        this.fireEnd(e);
      } }], [{ key: "_Draw", value: function value(e, t, r, i, o, n) {
        var a = t.x,
            s = t.y,
            l = r.x,
            h = r.y;if (Math.abs(l - a) < 3 && Math.abs(h - s) < 3) return null;var c = u.Utils;if (n.length > 20) {
          e.paper.setStart();var d = e.paper.path("M" + c.fixNumberToString(a) + "," + c.fixNumberToString(s) + " L" + c.fixNumberToString(l) + "," + c.fixNumberToString(h));d.attr("stroke", i), d.attr("stroke-width", o), d.attr("stroke-linecap", "round");var p = Math.sqrt(Math.pow(Math.abs(l - a), 2) + Math.pow(Math.abs(h - s), 2)),
              f = Math.abs(h - s) / p,
              m = Math.asin(f),
              g = (Math.PI, o + 3),
              v = g + 6,
              y = p - v,
              b = { x: l, y: h },
              k = { x: l - g, y: h + v },
              w = { x: l + g, y: h + v },
              E = Math.atan(g / y),
              _ = Math.sqrt(g * g + y * y);if (h <= s && l >= a) {
            var x = m + E;k.x = a + _ * Math.cos(x), k.y = s - _ * Math.sin(x), x = m - E, w.x = a + _ * Math.cos(x), w.y = s - _ * Math.sin(x);
          } else if (h > s && l >= a) {
            var x = m + E;k.x = a + _ * Math.cos(x), k.y = s + _ * Math.sin(x), x = m - E, w.x = a + _ * Math.cos(x), w.y = s + _ * Math.sin(x);
          } else if (h > s && l < a) {
            var x = m + E;k.x = a - _ * Math.cos(x), k.y = s + _ * Math.sin(x), x = m - E, w.x = a - _ * Math.cos(x), w.y = s + _ * Math.sin(x);
          } else {
            var x = m + E;k.x = a - _ * Math.cos(x), k.y = s - _ * Math.sin(x), x = m - E, w.x = a - _ * Math.cos(x), w.y = s - _ * Math.sin(x);
          }var M = e.paper.path("M" + c.fixNumberToString(b.x) + "," + c.fixNumberToString(b.y) + " L" + c.fixNumberToString(k.x) + "," + c.fixNumberToString(k.y) + " L" + c.fixNumberToString(w.x) + "," + c.fixNumberToString(w.y) + " z");return M.attr("stroke", i), M.attr("stroke-width", o), M.attr("stroke-linecap", "butt"), M.attr("fill", i), e.paper.setFinish();
        }var d = e.paper.path("M" + c.fixNumberToString(a) + "," + c.fixNumberToString(s) + " L" + c.fixNumberToString(l) + "," + c.fixNumberToString(h));return d.attr("stroke", i), d.attr("stroke-width", o), d.attr("stroke-linecap", "round"), d.node.setAttribute("marker-end", n), d;
      } }, { key: "draw", value: function value(e, r, i) {
        var o = "url(" + i._matcheArrow(r.attr.stroke) + ")",
            n = { x: r.param.x1, y: r.param.y1 },
            a = { x: r.param.x2, y: r.param.y2 };return t._Draw(i, n, a, r.attr.stroke, r.attr.strokeWidth, o);
      } }, { key: "restore", value: function value(e, r, i, o) {
        var n = void 0 !== o,
            a = r.raw.param,
            s = "url(" + i._matcheArrow(r.raw.attr.stroke) + ")",
            u = { x: a.x1, y: a.y1 },
            l = { x: a.x2, y: a.y2 },
            h = t._Draw(i, u, l, r.raw.attr.stroke, n ? 0 : r.raw.attr.strokeWidth, s);r.set = h, n && h.animate({ "stroke-width": r.raw.attr.strokeWidth }, o.dur, "linear");
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.BackgroundImageEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0);t.BackgroundImageEntity = function (e) {
    function t(e, r) {
      i(this, t);var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return n.source = null, n.obscure = !1, n.domImage = null, n.img = null, n.rawWidth = 0, n.rawHeight = 0, n.exclusive = !1, n.source = void 0 === e ? null : e, n.obscure = void 0 !== r && r, n;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "bgimage";
      } }]), a(t, [{ key: "dispose", value: function value() {
        var e = this;null != e.board.bgImage && (e.board.bgImage.remove(), e.board.bgImage = null), s.GraphicsEntity.prototype.dispose.call(this);
      } }, { key: "onDraw", value: function value() {
        var e = this;if (null == e.source) return void (null != e.board.bgImage && (e.board.bgImage.remove(), e.board.bgImage = null));var t = new Image();if (t.onload = function (r) {
          var i = t.width,
              o = t.height;e.rawWidth = i, e.rawHeight = o, nucleus.getLogger().i("BackgroundImageEntity", "Image size: " + i + "x" + o), null != e.board.bgImage && (e.board.bgImage.remove(), e.board.bgImage = null), e.img = e.board.paper.image(e.source, 0, 0, i, o), e.board.bgImage = e.img, null == e.img.node ? setTimeout(function () {
            e.onResize(e.board.width, e.board.height);
          }, 60) : e.onResize(e.board.width, e.board.height), e.img.toBack(), e.board.bgImage.node.setAttribute("unselectable", "on"), e.board.bgImage.node.onmousedown = function () {
            return !1;
          };var n = e.board.bgImage.node.style;n.userSelect = "none", n.webkitUserSelect = "none", n.MozUserSelect = "-moz-none";
        }, t.src = e.source, !this.obscure) {
          var r = { whiteboardId: e.board.name, command: { name: "bgimage", param: e.source } };this.board.triggerChange(r);
        }
      } }, { key: "onResize", value: function value(e, t) {
        if (null != this.img && null != this.img.node) {
          var r = this.rawWidth,
              i = this.rawHeight,
              o = e / r,
              n = t / i;o < n ? (this.img.node.setAttribute("width", parseInt(o * r)), this.img.node.setAttribute("height", parseInt(o * i))) : (this.img.node.setAttribute("width", parseInt(n * r)), this.img.node.setAttribute("height", parseInt(n * i)));var a = .5 * (e - parseInt(this.img.node.getAttribute("width"))),
              s = .5 * (t - parseInt(this.img.node.getAttribute("height")));this.img.node.setAttribute("x", parseInt(a)), this.img.node.setAttribute("y", parseInt(s));
        }
      } }, { key: "getSource", value: function value() {
        return this.source;
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.EllipseEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(1);t.EllipseEntity = function (e) {
    function t(e) {
      i(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return r.borderWidth = 2, r.borderColor = "#FE0000", r.flag = !1, r.startPos = null, r.endPos = null, r.drawTimer = 0, r.drawEl = null, r.exclusive = !0, void 0 != e && (r.borderWidth = e.borderWidth || 2, r.borderColor = e.borderColor || "#FE0000"), r;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "ellipse";
      } }]), a(t, [{ key: "fireBegin", value: function value(e) {
        this.flag = !0, this.startPos = this.getCursorPos(e), this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0);
      } }, { key: "fireEnd", value: function value(e) {
        this.flag = !1, this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0), null != this.drawEl && this.drawEl.remove(), this.endPos = this.getCursorPos(e), this.draw(this.startPos, this.endPos);var r = this,
            i = { x: r.drawEl.attr("cx"), y: r.drawEl.attr("cy"), rx: r.drawEl.attr("rx"), ry: r.drawEl.attr("ry") },
            o = { stroke: r.borderColor, strokeWidth: r.borderWidth },
            n = r.board.record(t.Name, r.drawEl, { param: i, attr: o }),
            a = { whiteboardId: r.board.name, command: { name: "ellipse", sn: n, param: i, attr: o } },
            s = this.board.getSlide();null != s && (a.command.page = s.cursor + 1), this.board.triggerChange(a), this.drawEl = null;
      } }, { key: "fireMove", value: function value(e) {
        if (this.flag && !(this.drawTimer > 0)) {
          var t = this;this.drawTimer = setTimeout(function () {
            clearTimeout(t.drawTimer), t.drawTimer = 0, null != t.drawEl && t.drawEl.remove();var r = t.getCursorPos(e);t.draw(t.startPos, r);
          }, 40);
        }
      } }, { key: "draw", value: function value(e, t) {
        var r = parseInt(.5 * (t.x - e.x)),
            i = parseInt(.5 * (t.y - e.y)),
            o = e.x + r,
            n = e.y + i;r < 0 && (r = Math.abs(r)), i < 0 && (i = Math.abs(i));var a = u.Utils;this.drawEl = this.board.paper.ellipse(a.fixNumber(o), a.fixNumber(n), a.fixNumber(r), a.fixNumber(i)), this.drawEl.attr("stroke", this.borderColor), this.drawEl.attr("stroke-width", this.borderWidth), this.drawEl.attr("stroke-linecap", "round");
      } }, { key: "onMouseMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onMouseDown", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onMouseUp", value: function value(e) {
        this.fireEnd(e);
      } }, { key: "onTouchMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        this.fireEnd(e);
      } }], [{ key: "draw", value: function value(e, t) {
        var r = e.ellipse(t.param.x, t.param.y, t.param.rx, t.param.ry);return r.attr("stroke", t.attr.stroke), r.attr("stroke-width", t.attr.strokeWidth), r.attr("stroke-linecap", "round"), r;
      } }, { key: "restore", value: function value(e, t, r) {
        var i = void 0 !== r,
            o = e.ellipse(t.raw.param.x, t.raw.param.y, i ? 0 : t.raw.param.rx, i ? 0 : t.raw.param.ry);o.attr("stroke", t.raw.attr.stroke), o.attr("stroke-width", t.raw.attr.strokeWidth), o.attr("stroke-linecap", "round"), t.set = o, i && o.animate({ rx: t.raw.param.rx, ry: t.raw.param.ry }, r.dur, "linear");
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.PencilEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(1);t.PencilEntity = function (e) {
    function t(e) {
      i(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return r.weight = 2, r.color = "#FE0000", r.lastX = -1, r.lastY = -1, r.lineX = [], r.lineY = [], r.flag = 0, r.beginTime = 0, r.timer = 0, r.queue = [], r.queueTimer = 0, r.vgCmdArray = null, r.exclusive = !0, void 0 !== e && (r.weight = e.weight || 2, r.color = e.color || "#FE0000"), r;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "path";
      } }]), a(t, [{ key: "onDraw", value: function value() {
        this.board.paperDom.style.cursor = "url(" + this.board.resourcePath + "/cursor_pencil.png), default";
      } }, { key: "onMouseMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onMouseDown", value: function value(e) {
        this.fireStart(e);
      } }, { key: "onMouseUp", value: function value(e) {
        this.fireEnd(e);
      } }, { key: "onTouchMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        this.fireStart(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        this.fireEnd(e);
      } }, { key: "fireMove", value: function value(e) {
        if (1 == this.flag) {
          var t = this.getCursorPos(e);this.lineX.push(t.x), this.lineY.push(t.y);
        }
      } }, { key: "fireStart", value: function value(e) {
        var t = this;this.lineX.splice(0, this.lineX.length), this.lineX.length = 0, this.lineY.splice(0, this.lineY.length), this.lineY.length = 0;var r = this.getCursorPos(e);this.lineX.push(r.x), this.lineY.push(r.y), this.flag = 1, this.beginTime = Date.now(), this.board.paper.setStart(), this.vgCmdArray = [], this.timer > 0 && clearTimeout(this.timer), this.timer = setTimeout(function () {
          clearTimeout(t.timer), t.timer = 0, t.draw();
        }, 60);
      } }, { key: "fireEnd", value: function value(e) {
        if (this.flag = 0, this.timer > 0 && (clearTimeout(this.timer), this.timer = 0), null != this.vgCmdArray) {
          var r = Date.now(),
              i = this.vgCmdArray.join(" "),
              o = this.board.paper.setFinish();o.attr("stroke", this.color), o.attr("stroke-width", this.weight), o.attr("stroke-linecap", "round");var n = this.board.record(t.Name, o, { param: i, attr: { stroke: this.color, strokeWidth: this.weight, begin: this.beginTime, end: r } }),
              a = { whiteboardId: this.board.name, command: { name: "path", sn: n, param: i, attr: { stroke: this.color, strokeWidth: this.weight } } },
              s = this.board.getSlide();null != s && (a.command.page = s.currentPage()), this.queue.push(a), this.tick(), this.vgCmdArray.length = 0, this.vgCmdArray = null;
        }
      } }, { key: "dispose", value: function value() {
        this.board.paperDom.style.cursor = "auto", this.timer > 0 && (clearTimeout(this.timer), this.timer = 0), s.GraphicsEntity.prototype.dispose.call(this);
      } }, { key: "draw", value: function value() {
        var e = this;if (this.timer > 0 && clearTimeout(this.timer), this.lineX.length <= 1) return void (this.timer = setTimeout(function () {
          e.draw();
        }, 60));var t = [],
            r = u.Utils;this.lastX = this.lineX[0], this.lastY = this.lineY[0], t.push("M" + r.fixNumberToString(this.lastX) + "," + r.fixNumberToString(this.lastY));for (var i = 1; i < this.lineX.length; ++i) {
          var o = this.lineX[i],
              n = this.lineY[i];t.push("L" + r.fixNumberToString(o) + "," + r.fixNumberToString(n));
        }var a = t.join(" ");if (t.length > 1) {
          var s = this.board.paper.path(a);s.attr("stroke", this.color), s.attr("stroke-width", this.weight), s.attr("stroke-linecap", "round");
        }t.splice(0, t.length), t = null, this.lastX = this.lineX[this.lineX.length - 1], this.lastY = this.lineY[this.lineY.length - 1], this.lineX.splice(0, this.lineX.length - 1), this.lineY.splice(0, this.lineY.length - 1), null == this.vgCmdArray && (this.vgCmdArray = []), this.vgCmdArray.push(a), this.timer = setTimeout(function () {
          e.draw();
        }, 60);
      } }, { key: "tick", value: function value() {
        var e = this;if (!(this.queueTimer > 0)) {
          if (this.queue.length > 0) {
            var t = this.queue.shift();this.board.triggerChange(t);
          }this.queueTimer = setTimeout(function () {
            clearTimeout(e.queueTimer), e.queueTimer = 0, 0 !== e.queue.length && e.tick();
          }, 300);
        }
      } }], [{ key: "draw", value: function value(e, t) {
        var r = e.path(t.param);return r.attr("stroke", t.attr.stroke), r.attr("stroke-width", t.attr.strokeWidth), r.attr("stroke-linecap", "round"), r;
      } }, { key: "restore", value: function value(e, t, r) {
        var i = void 0 !== r,
            o = e.path(t.raw.param);o.attr("stroke", t.raw.attr.stroke), o.attr("stroke-width", i ? 0 : t.raw.attr.strokeWidth), o.attr("stroke-linecap", "round"), t.set = o, i && o.animate({ "stroke-width": t.raw.attr.strokeWidth }, r.dur, "linear");
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.RectEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(1);t.RectEntity = function (e) {
    function t(e) {
      i(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return r.borderWidth = 2, r.borderColor = "#FE0000", r.flag = !1, r.startPos = null, r.endPos = null, r.beginTime = 0, r.drawTimer = 0, r.drawEl = null, r.exclusive = !0, void 0 !== e && (r.borderWidth = e.borderWidth || 2, r.borderColor = e.borderColor || "#FE0000"), r;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "rect";
      } }]), a(t, [{ key: "fireBegin", value: function value(e) {
        this.flag = !0, this.startPos = this.getCursorPos(e), this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0);
      } }, { key: "fireEnd", value: function value(e) {
        this.flag = !1, this.drawTimer > 0 && (clearTimeout(this.drawTimer), this.drawTimer = 0), null != this.drawEl && this.drawEl.remove(), this.endPos = this.getCursorPos(e), this.draw(this.startPos, this.endPos);var r = this,
            i = { x: r.drawEl.attr("x"), y: r.drawEl.attr("y"), width: r.drawEl.attr("width"), height: r.drawEl.attr("height") },
            o = { stroke: r.borderColor, strokeWidth: r.borderWidth },
            n = r.board.record(t.Name, r.drawEl, { param: i, attr: o }),
            a = { whiteboardId: r.board.name, command: { name: "rect", sn: n, param: i, attr: o } },
            s = this.board.getSlide();null != s && (a.command.page = s.cursor + 1), this.board.triggerChange(a), this.drawEl = null;
      } }, { key: "fireMove", value: function value(e) {
        if (this.flag && !(this.drawTimer > 0)) {
          var t = this;this.drawTimer = setTimeout(function () {
            clearTimeout(t.drawTimer), t.drawTimer = 0, null != t.drawEl && t.drawEl.remove();var r = t.getCursorPos(e);t.draw(t.startPos, r);
          }, 40);
        }
      } }, { key: "draw", value: function value(e, t) {
        var r = e.x,
            i = e.y,
            o = t.x - e.x,
            n = t.y - e.y;o < 0 && (r = t.x, o = Math.abs(o)), n < 0 && (i = t.y, n = Math.abs(n));var a = u.Utils;this.drawEl = this.board.paper.rect(a.fixNumber(r), a.fixNumber(i), a.fixNumber(o), a.fixNumber(n)), this.drawEl.attr("stroke", this.borderColor), this.drawEl.attr("stroke-width", this.borderWidth), this.drawEl.attr("stroke-linecap", "round");
      } }, { key: "onMouseMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onMouseDown", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onMouseUp", value: function value(e) {
        this.fireEnd(e);
      } }, { key: "onTouchMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        this.fireBegin(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        this.fireEnd(e);
      } }], [{ key: "draw", value: function value(e, t) {
        var r = e.rect(t.param.x, t.param.y, t.param.width, t.param.height);return r.attr("stroke", t.attr.stroke), r.attr("stroke-width", t.attr.strokeWidth), r.attr("stroke-linecap", "round"), r;
      } }, { key: "restore", value: function value(e, t, r) {
        var i = void 0 !== r,
            o = e.rect(t.raw.param.x, t.raw.param.y, i ? 0 : t.raw.param.width, i ? 0 : t.raw.param.height);o.attr("stroke", t.raw.attr.stroke), o.attr("stroke-width", t.raw.attr.strokeWidth), o.attr("stroke-linecap", "round"), t.set = o, i && o.animate({ width: t.raw.param.width, height: t.raw.param.height }, r.dur, "linear");
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.TextEntity = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(0),
      u = r(1);t.TextEntity = function (e) {
    function t(e) {
      i(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.Name));return r.inputDom = null, r.input = !1, r.paperEl = null, r.textPos = null, r.text = null, r.color = "#FE0000", r.fontFamily = "微软雅黑, 黑体", r.fontSize = "16", r.exclusive = !0, void 0 !== e && (r.color = e.color || "#FE0000", r.fontFamily = e.fontFamily || '"Microsoft YaHei"', r.fontSize = e.fontSize || "16"), r;
    }return n(t, e), a(t, null, [{ key: "Name", get: function get() {
        return "text";
      } }]), a(t, [{ key: "dispose", value: function value() {
        null != this.inputDom && (this.inputDom.remove(), this.inputDom.value = ""), null != this.paperEl && (this.paperEl = null), this.input = !1, this.textPos = null, s.GraphicsEntity.prototype.dispose.call(this);
      } }, { key: "onClick", value: function value(e) {
        if (null == this.inputDom && (this.inputDom = this._createInputDom()), e.target != this.inputDom) if (this.input) {
          var r = this.inputDom.value;if (r.length > 0) {
            var i = u.Utils.fixNumber(this.textPos.x),
                o = u.Utils.fixNumber(this.textPos.y),
                n = this.board.paper.text(i, o, r);n.attr("fill", this.color), n.attr("font-family", this.fontFamily), n.attr("font-size", this.fontSize), this.paperEl = n;var a = this,
                s = { x: i, y: o, text: r.toString() },
                l = a.board.record(t.Name, n, { param: s, attr: { color: a.color, fontFamily: a.fontFamily, fontSize: a.fontSize } });this.board.viewport.manage(l, n);var h = { whiteboardId: a.board.name, command: { name: "text", sn: l, param: s, attr: { color: a.color, fontFamily: a.fontFamily, fontSize: a.fontSize } } },
                c = this.board.getSlide();null != c && (h.command.page = c.cursor + 1), this.board.triggerChange(h);
          }this.inputDom.value = "", this.inputDom.remove(), this.input = !1;
        } else {
          this.textPos = this.getCursorPos(e);var d = u.Utils.getDrawPosition(this.board.dom, e);this.inputDom.style.left = d.x - 84 + "px", this.inputDom.style.top = d.y - 0 + "px", this.board.dom.appendChild(this.inputDom), this.inputDom.focus(), this.input = !0;
        }
      } }, { key: "_createInputDom", value: function value() {
        var e = document.createElement("input");return e.setAttribute("type", "text"), e.setAttribute("maxlength", "128"), e.style.color = this.color, e.style.fontSize = this.fontSize + "px", e.style.fontFamily = this.fontFamily, e.style.position = "absolute", e.style.cssFloat = "left", e.style.styleFloat = "left", e.style.padding = "0px", e.style.margin = "0px", e.style.width = "200px", e.style.textAlign = "center", e;
      } }], [{ key: "draw", value: function value(e, t) {
        var r = e.text(t.param.x, t.param.y, t.param.text);return r.attr("fill", t.attr.color), r.attr("font-family", t.attr.fontFamily), r.attr("font-size", t.attr.fontSize), r;
      } }, { key: "restore", value: function value(e, t, r) {
        var i = void 0 !== r,
            o = e.text(t.raw.param.x, t.raw.param.y, t.raw.param.text);o.attr("fill", t.raw.attr.color), o.attr("font-family", t.raw.attr.fontFamily), o.attr("font-size", i ? 0 : t.raw.attr.fontSize), t.set = o, i && o.animate({ "font-size": t.raw.attr.fontSize }, r.dur, "linear");
      } }]), t;
  }(s.GraphicsEntity);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.WhiteboardPlayerListener = function () {
    function e() {
      i(this, e);
    }return o(e, [{ key: "onStarted", value: function value(e) {} }, { key: "onStopped", value: function value(e) {} }, { key: "onPaused", value: function value(e) {} }, { key: "onResumed", value: function value(e) {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.WhiteboardRecorderListener = function () {
    function e() {
      i(this, e);
    }return o(e, [{ key: "onStarted", value: function value() {} }, { key: "onStopped", value: function value() {} }, { key: "onPaused", value: function value() {} }, { key: "onResumed", value: function value() {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.WhiteboardCoreServiceWorker = void 0;var a = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      s = r(17),
      u = r(19),
      l = r(20),
      h = r(7),
      c = r(8),
      d = r(9),
      p = r(10),
      f = r(11),
      m = r(2),
      g = r(12),
      v = r(1),
      y = r(5),
      b = r(4),
      k = r(3),
      w = r(18);t.WhiteboardCoreServiceWorker = function (e) {
    function t(e, r, n) {
      i(this, t);var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return a.listener = new k.WhiteboardCoreListener(), a.name = r, a.curEntity = null, a.exMap = new l.HashMap(), a.domId = e, a.dom = document.getElementById(e), a.viewport = new u.Viewport(a), a.pastRecords = [], a.undoRecords = [], a.remoteRecordMap = new l.HashMap(), a.remoteHistoryMap = new l.HashMap(), a.paper = null, a.paperDom = null, a.maskDom = null, a.arrowMarkerColors = ["", "", "", "", ""], a.arrowMatchTimestamps = [0, 0, 0, 0, 0], a.bgDom = null, a.bgImage = null, a.transparent = !1, a.defaultColor = null, a.defaultWeight = -1, a.defaultBorderColor = null, a.defaultBorderWidth = -1, a.cmdSnCursor = 0, a.remoteSlide = null, a.width = 0, a.height = 0, a.paperWidth = 2048, a.paperHeight = 2048, a.remoteWidth = -1, a.remoteHeight = -1, a.sessionName = n, a.recorder = null, a.player = null, a.resourcePath = "./resource/images", a;
    }return n(t, e), a(t, [{ key: "setListener", value: function value(e) {
        this.listener = e;
      } }, { key: "setResourcePath", value: function value(e) {
        this.resourcePath = e;
      } }, { key: "load", value: function value(e, t) {
        void 0 === e && (e = this.dom.offsetWidth), void 0 === t && (t = this.dom.offsetHeight), this.dom.style.textAlign = "left", this.dom.style.overflow = "hidden", this.paper = Raphael(this.domId, Math.max(this.paperWidth, e), Math.max(this.paperHeight, t)), this.paperDom = this.dom.getElementsByTagName("svg")[0], this.transparent || (this.paperDom.style.backgroundColor = "#fefefe"), this.paperDom.style.left = parseInt(.5 * (e - this.paperWidth)) + "px", this.paperDom.style.top = parseInt(.5 * (t - this.paperHeight)) + "px", this.width = e, this.height = t, this._buildEvents(), this.maskDom = document.createElement("div"), this.maskDom.style.position = "absolute", this.maskDom.style.styleFloat = "left", this.maskDom.style.cssFloat = "left", this.maskDom.style.left = "0px", this.maskDom.style.top = "0px", this.maskDom.style.backgroundImage = "url('" + this.resourcePath + "/loading.gif')", this.maskDom.style.backgroundRepeat = "no-repeat", this.maskDom.style.backgroundPosition = "center center", this.maskDom.style.width = e + "px", this.maskDom.style.height = t + "px", this.maskDom.style.display = "none", this.dom.appendChild(this.maskDom), this.bgDom = document.createElement("div"), this.bgDom.style.position = "absolute", this.bgDom.style.styleFloat = "left", this.bgDom.style.cssFloat = "left", this.transparent || (this.bgDom.style.backgroundColor = "#efefef"), this.dom.insertBefore(this.bgDom, this.paperDom), this._fix();
      } }, { key: "unload", value: function value() {
        this.cleanup(!0), this.unselect(), this.maskDom && (this.maskDom.parentNode.removeChild(this.maskDom), this.maskDom = null), this.bgDom && (this.bgDom.parentNode.removeChild(this.bgDom), this.bgDom = null), this.paper && (this.paper.remove(), this.paper = null, this.paperDom = null), this._destroyEvents();
      } }, { key: "_buildEvents", value: function value() {
        var e = this;this._onClick = function (t) {
          e.onClick(t);
        }, this._onMouseMove = function (t) {
          e.onMouseMove(t);
        }, this._onMouseDown = function (t) {
          e.onMouseDown(t);
        }, this._onMouseUp = function (t) {
          e.onMouseUp(t);
        }, this._onTouchMove = function (t) {
          e.onTouchMove(t);
        }, this._onTouchStart = function (t) {
          e.onTouchStart(t);
        }, this._onTouchEnd = function (t) {
          e.onTouchEnd(t);
        }, this._onKeyPress = function (t) {
          e.onKeyPress(t);
        }, this.dom.addEventListener("click", this._onClick, !1), this.dom.addEventListener("mousemove", this._onMouseMove, !1), this.dom.addEventListener("mousedown", this._onMouseDown, !1), this.dom.addEventListener("mouseup", this._onMouseUp, !1), this.dom.addEventListener("touchmove", this._onTouchMove, !1), this.dom.addEventListener("touchstart", this._onTouchStart, !1), this.dom.addEventListener("touchend", this._onTouchEnd, !1), this.dom.addEventListener("keypress", this._onKeyPress, !1);
      } }, { key: "_destroyEvents", value: function value() {
        this.dom.removeEventListener("click", this._onClick, !1), this.dom.removeEventListener("mousemove", this._onMouseMove, !1), this.dom.removeEventListener("mousedown", this._onMouseDown, !1), this.dom.removeEventListener("mouseup", this._onMouseUp, !1), this.dom.removeEventListener("touchmove", this._onTouchMove, !1), this.dom.removeEventListener("touchstart", this._onTouchStart, !1), this.dom.removeEventListener("touchend", this._onTouchEnd, !1), this.dom.removeEventListener("keypress", this._onKeyPress, !1);
      } }, { key: "_fix", value: function value() {
        var e = this.paperDom,
            t = e.getElementsByTagName("desc");null !== t && t.length > 0 && (t = t[0], t.innerHTML = "Cube Engine Whiteboard - www.getcube.cn");var r = e.getElementsByTagName("defs");null !== r && r.length > 0 ? r = r[0] : (r = document.createElement("defs"), e.appendChild(r));var i = ['<marker id="_cube_arrow_0" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_1" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_2" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_3" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_4" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>'];r.innerHTML = i.join(""), i = null;
      } }, { key: "_matcheArrow", value: function value(e) {
        for (var t = 0; t < this.arrowMarkerColors.length; ++t) {
          if (this.arrowMarkerColors[t] == e) return this.arrowMatchTimestamps[t] = Date.now(), "#_cube_arrow_" + t;
        }for (var r = 0; r < this.arrowMarkerColors.length; ++r) {
          if (this.arrowMarkerColors[r].length < 2) {
            var i = "_cube_arrow_" + r,
                o = this.paperDom.getElementById(i);return null === o ? (this.arrowMarkerColors[r] = "", this.arrowMatchTimestamps[r] = 0, "#_cube_arrow_default") : (this.arrowMarkerColors[r] = e, this.arrowMatchTimestamps[r] = Date.now(), o = o.getElementsByTagName("path")[0], o.setAttribute("fill", e), "#" + i);
          }
        }for (var n = -1, a = Number.MAX_VALUE, s = 0; s < this.arrowMatchTimestamps.length; ++s) {
          var u = this.arrowMatchTimestamps[s];u < a && (a = u, n = s);
        }if (n < 0) return "#_cube_arrow_default";this.arrowMarkerColors[n] = e, this.arrowMatchTimestamps[n] = Date.now();var l = "_cube_arrow_" + n,
            h = this.paperDom.getElementById(l);return null === h && null === (h = document.getElementById(l)) ? "#_cube_arrow_default" : (h = h.getElementsByTagName("path")[0], h.setAttribute("fill", e), "#" + l);
      } }, { key: "_centerBgImage", value: function value(e) {
        var t = .5 * (this.width - e.width),
            r = .5 * (this.height - e.height);this.bgDom.style.paddingLeft = parseInt(t) + "px", this.bgDom.style.paddingTop = parseInt(r) + "px";
      } }, { key: "_replayRecord", value: function value(e, t, r) {
        e.type === f.RectEntity.Name ? (f.RectEntity.restore(this.paper, e, r, this), (void 0 === t || t) && this.record(e.type, e.set, e.raw, !1)) : e.type === d.EllipseEntity.Name ? (d.EllipseEntity.restore(this.paper, e, r, this), (void 0 === t || t) && this.record(e.type, e.set, e.raw, !1)) : e.type === h.ArrowEntity.Name ? (h.ArrowEntity.restore(this.paper, e, this, r), (void 0 === t || t) && this.record(e.type, e.set, e.raw, !1)) : e.type === p.PencilEntity.Name ? (p.PencilEntity.restore(this.paper, e, r, this), (void 0 === t || t) && this.record(e.type, e.set, e.raw, !1)) : e.type === g.TextEntity.Name && (g.TextEntity.restore(this.paper, e, r, this), (void 0 === t || t) && this.record(e.type, e.set, e.raw, !1));
      } }, { key: "_replayVGCommand", value: function value(e) {
        var t = null,
            r = null;this.sessionName !== e.from && (t = e.from), void 0 !== e.group && "" !== e.group && (r = e.group);var i = null;if ("rect" === e.name) i = this.loadVGCommand(e, t), null === t && this.record(e.name.toString(), i, { param: e.param, attr: e.attr });else if ("ellipse" === e.name) i = this.loadVGCommand(e, t), null === t && this.record(e.name.toString(), i, { param: e.param, attr: e.attr });else if ("arrow" === e.name) i = this.loadVGCommand(e, t), null === t && this.record(e.name.toString(), i, { param: e.param, attr: e.attr });else if ("path" === e.name) i = this.loadVGCommand(e, t, r), null === t && this.record(e.name.toString(), i, { param: e.param, attr: e.attr });else if ("text" === e.name) i = this.loadVGCommand(e, t, r), null === t && this.record(e.name.toString(), i, { param: e.param, attr: e.attr });else if ("slide" === e.name) null === t ? this.workAsSlide(e.param, !0) : this.loadVGCommand(e, t, r);else if ("undo" === e.name) null === t ? this.undo(!0) : this.loadVGCommand(e, t, r);else if ("redo" === e.name) null === t ? this.redo(!0) : this.loadVGCommand(e, t, r);else if ("bgimage" === e.name) {
          var o = new c.BackgroundImageEntity(e.param, !0);this.selectEntity(o);
        } else nucleus.getLogger().w("CubeWhiteboard", "Unknown replay VG command: " + e.name);
      } }, { key: "onClick", value: function value(e) {
        if (null !== this.curEntity) this.curEntity.onClick(e);else {
          this.viewport.onClick(e);var t = this.getSlide();t && t.onClick(e);
        }
      } }, { key: "onMouseMove", value: function value(e) {
        v.Utils.isAndroid || v.Utils.isIPhone || (null !== this.curEntity ? this.curEntity.onMouseMove(e) : this.viewport.onMouseMove(e));
      } }, { key: "onMouseDown", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onMouseDown(e) : this.viewport.onMouseDown(e);
      } }, { key: "onMouseUp", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onMouseUp(e) : this.viewport.onMouseUp(e);
      } }, { key: "onTouchMove", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onTouchMove(e) : this.viewport.onTouchMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onTouchStart(e) : this.viewport.onTouchStart(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onTouchEnd(e) : this.viewport.onTouchEnd(e);
      } }, { key: "onKeyPress", value: function value(e) {
        null !== this.curEntity ? this.curEntity.onKeyPress(e) : this.viewport.onKeyPress(e);var t = this.getSlide();t && t.onKeyPress(e);
      } }, { key: "adjustSize", value: function value() {
        var e = parseInt(this.dom.offsetWidth),
            t = parseInt(this.dom.offsetHeight);this.resize(e, t), this._syncSize(), this.viewport.adaptView();
      } }, { key: "_syncSize", value: function value() {
        var e = { whiteboardId: this.name, boardSize: { width: this.width, height: this.height }, paperSize: { width: this.paperWidth, height: this.paperHeight } };this.triggerChange(e);
      } }, { key: "selectEntity", value: function value(e) {
        var t = this;if (e.exclusive) {
          null !== this.curEntity && (this.curEntity.dispose(), this.curEntity = null), e.board = this, this.curEntity = e, null !== this.defaultColor && e.color && (e.color = this.defaultColor), null !== this.defaultBorderColor && e.borderColor && (e.borderColor = this.defaultBorderColor), this.defaultWeight > 0 && void 0 !== e.weight && (e.weight = this.defaultWeight), this.defaultBorderWidth > 0 && void 0 !== e.borderWidth && (e.borderWidth = this.defaultBorderWidth);var r = setTimeout(function () {
            clearTimeout(r), null !== t.curEntity && t.curEntity.onDraw(t.paper);
          }, 30);
        } else {
          e.board = this;var i = setTimeout(function () {
            clearTimeout(i), e.onDraw(t.paper), t.exMap.put(e.name, e);
          }, 30);
        }
      } }, { key: "unselect", value: function value(e) {
        if (void 0 !== e && this.exMap.containsKey(e.name)) {
          var t = this.exMap.get(e.name);return this.exMap.remove(e.name), void t.dispose();
        }null !== this.curEntity && this.curEntity.exclusive && (this.curEntity.dispose(), this.curEntity = null);
      } }, { key: "undo", value: function value(e) {
        if (0 === this.pastRecords.length) return !1;var t = this.pastRecords.pop();this.undoRecords.push(t), this.viewport.unmanage(t.set), void 0 === t.set.forEach ? (t.set._custom && (t.set._custom.remove(), t.set._custom = null), t.set.remove()) : t.set.forEach(function (e) {
          e.remove();
        });var r = this.getSlide();if (r && r.popNote(), null != this.recorder && this.recorder.isRecording() && this.recorder._notifyOperation({ name: "undo", time: Date.now() }), !e) {
          var i = { whiteboardId: this.name, command: { name: "undo", param: t.sn } };this.triggerChange(i);
        }return !0;
      } }, { key: "redo", value: function value(e) {
        if (0 === this.undoRecords.length) return !1;var t = this.undoRecords.pop();this.pastRecords.push(t), t.type === f.RectEntity.Name ? f.RectEntity.restore(this.paper, t) : t.type === d.EllipseEntity.Name ? d.EllipseEntity.restore(this.paper, t) : t.type === h.ArrowEntity.Name ? h.ArrowEntity.restore(this.paper, t, this) : t.type === p.PencilEntity.Name ? p.PencilEntity.restore(this.paper, t) : t.type === g.TextEntity.Name ? g.TextEntity.restore(this.paper, t) : nucleus.getLogger().e("CubeWhiteboard#redo", "Unknown command type: " + t.type);var r = this.getSlide();if (r && r.appendNote(t), null != this.recorder && this.recorder.isRecording() && this.recorder._notifyOperation({ name: "redo", time: Date.now() }), !e) {
          var i = { whiteboardId: this.name, command: { name: "redo", param: t.sn } };null !== r && (i.command.page = t.cursor + 1), this.triggerChange(i);
        }return !0;
      } }, { key: "erase", value: function value(e, t) {
        if (this.pastRecords.length > 0) for (var r = 0; r < this.pastRecords.length; ++r) {
          var i = this.pastRecords[r];void 0 === i.set.forEach ? (i.set._custom && (i.set._custom.remove(), i.set._custom = null), i.set.remove()) : i.set.forEach(function (e) {
            e.remove();
          });
        }if (this.remoteRecordMap.size() > 0) for (var o = this.remoteRecordMap.values(), n = 0; n < o.length; ++n) {
          for (var a = o[n], s = 0; s < a.length; ++s) {
            var u = a[s];u.el.remove();
          }
        }this.pastRecords.splice(0, this.pastRecords.length), this.undoRecords.splice(0, this.undoRecords.length), this.cmdSnCursor = 0;for (var l = 0; l < this.arrowMarkerColors.length; ++l) {
          this.arrowMarkerColors[l] = "", this.arrowMatchTimestamps[l] = 0;
        }if (this.remoteRecordMap.clear(), this.remoteHistoryMap.clear(), void 0 === t || t) {
          t = !0;var h = this.getSlide();h && h.clearNote();
        } else t = !1;if (null != this.recorder && this.recorder.isRecording() && this.recorder._notifyOperation({ name: "erase", time: Date.now() }), !e) {
          var c = { whiteboardId: this.name, command: { name: "erase", param: t } };this.triggerChange(c);
        }return !0;
      } }, { key: "cleanup", value: function value(e) {
        this.exMap.clear(), this.pastRecords.splice(0, this.pastRecords.length), this.undoRecords.splice(0, this.undoRecords.length), this.cmdSnCursor = 0;for (var t = 0; t < this.arrowMarkerColors.length; ++t) {
          this.arrowMarkerColors[t] = "", this.arrowMatchTimestamps[t] = 0;
        }if (this.remoteRecordMap.clear(), this.remoteHistoryMap.clear(), null !== this.remoteSlide && (this.remoteSlide.dispose(), this.remoteSlide = null), null !== this.bgImage && (this.bgImage.remove(), this.bgImage = null), null != this.paper && this.paper.clear(), this.adjustSize(), this.viewport.reset(), this._fix(), this.hideMask(), this.listener.onCleanup(this), !e) {
          var r = { whiteboardId: this.name, command: { name: "cleanup", param: 0 } };this.triggerChange(r);
        }return !0;
      } }, { key: "zoom", value: function value(e) {
        v.Utils.getElementChildren(this.paperDom).length <= 2 || this.viewport.zoom(e);
      } }, { key: "resetView", value: function value(e) {
        !this.getSlide() && (this.remoteWidth <= 0 || e) ? this.viewport.reset() : this.viewport.adaptView();
      } }, { key: "setRemoteSize", value: function value(e, t) {
        this.remoteWidth = e, this.remoteHeight = t;
      } }, { key: "syncBoardSize", value: function value(e) {
        e.width > this.remoteWidth && this.setRemoteSize(e.width, e.height), this.viewport.adaptView();
      } }, { key: "numPaperElements", value: function value() {
        return v.Utils.getElementChildren(this.paperDom).length - 2;
      } }, { key: "getExEntity", value: function value(e) {
        return this.exMap.get(e);
      } }, { key: "showMask", value: function value() {
        this.maskDom.style.display = "block";
      } }, { key: "hideMask", value: function value() {
        this.maskDom.style.display = "none";
      } }, { key: "exportContent", value: function value(e) {
        var t = null,
            r = this.getSlide();if (r) {
          t = { slide: { origin: r.getDocName().toString(), alias: r.file.alias.toString(), size: r.file.size, pages: [] } };var i = null;void 0 !== e && (e instanceof Array ? i = e : e instanceof Number && (i = [e])), null === i && (i = [r.currentPage()]);for (var o = 0; o < i.length; ++o) {
            var n = i[o],
                a = r.exportPage(n);null !== a && t.slide.pages.push(a);
          }
        } else {
          t = { records: [] };for (var s = 0; s < this.pastRecords.length; ++s) {
            var u = this.pastRecords[s],
                l = { sn: u.sn, type: u.type, raw: u.raw, time: u.time };t.records.push(l);
          }
        }return t;
      } }, { key: "importContent", value: function value(e) {
        var t = this;if (this.numPaperElements() > 0) return this.cleanup(!0), setTimeout(function () {
          t.importContent(e);
        }, 150), !0;if (void 0 !== e.slide) {
          for (var r = { cubeId: e.slide.cubeId, origin: e.slide.name, alias: e.slide.alias, size: e.slide.size, urls: [] }, i = e.slide.pages, o = 0; o < i.length; ++o) {
            var n = i[o];r.urls.push(n.url);
          }this.workAsSlide(r, !0), setTimeout(function () {
            var e = i[0].notes;if (void 0 !== e) for (var r = 0; r < e.length; ++r) {
              t._replayRecord(e[r]);
            }for (var o = t.getSlide(), n = 0; n < i.length; ++n) {
              var a = i[n].notes;if (void 0 !== a) for (var s = 0; s < a.length; ++s) {
                o.appendNote(n + 1, a[s]);
              }
            }
          }, 500);
        } else if (void 0 !== e.records) for (var a = 0; a < e.records.length; ++a) {
          var s = e.records[a];this._replayRecord(s);
        } else nucleus.getLogger().e("CubeWhiteboard#importContent", "Data format error!");return !0;
      } }, { key: "record", value: function value(e, t, r, i) {
        var o = this.cmdSnCursor++,
            n = Date.now(),
            a = { sn: o, type: e, set: t, raw: r, time: n };if (this.pastRecords.push(a), void 0 === i || i) {
          var s = this.getSlide();s && s.appendNote(a);
        }return null !== this.recorder && this.recorder._notifyRecord(a), o;
      } }, { key: "setTransparency", value: function value(e) {
        this.transparent !== e && (this.transparent = e, e ? (this.paperDom.style.backgroundColor = "", this.bgDom.style.backgroundColor = "") : (this.paperDom.style.backgroundColor = "#fefefe", this.bgDom.style.backgroundColor = "#efefef"));
      } }, { key: "setBackgroundImage", value: function value(e, t) {
        var r = this,
            i = this.bgDom,
            o = i.getElementsByTagName("img")[0];if (void 0 === o || null === o) {
          var n = document.createElement("img");return i.appendChild(n), n.onload = function (e) {
            t.call(null, n), r._centerBgImage(n);
          }, n.src = e, n;
        }return o.setAttribute("src", ""), o.onload = function (e) {
          t.call(null, o), r._centerBgImage(o);
        }, o.setAttribute("src", e), o;
      } }, { key: "setBackgroundColor", value: function value(e) {
        this.paperDom.style.backgroundColor = e, this.bgDom.style.backgroundColor = e;
      } }, { key: "loadRecordData", value: function value(e, t) {
        void 0 !== t && t && this.cleanup(!0);for (var r = e.commands, i = this, o = 0; o < r.length; ++o) {
          var n = r[o];null == n.page ? this._replayVGCommand(n) : (1 === n.page && this._replayVGCommand(n), function (e) {
            setTimeout(function () {
              var t = i.getSlide();if (t) {
                var r = { sn: e.sn, type: e.name, set: null, raw: { param: e.param, attr: e.attr }, page: e.page };t.appendNote(r);
              }
            }, 60);
          }(n));
        }
      } }, { key: "loadVGCommand", value: function value(e, t, r) {
        var i = void 0;if ("slide" === e.name) {
          if (null !== this.remoteSlide && (this.remoteSlide.from = t, r && (this.remoteSlide.group = r), this.remoteSlide.file.origin === e.param.origin)) {
            var o = e.attr;return void ((Math.abs(o.cursor - this.remoteSlide.cursor) > 0 || "=" === o.page) && this.remoteSlide.gotoPage(o.cursor + 1));
          }if (this.exMap.containsKey(c.BackgroundImageEntity.Name)) {
            var n = this.exMap.get(c.BackgroundImageEntity.Name);n.dispose(), this.exMap.remove(c.BackgroundImageEntity.Name), n = null;
          }this.cleanup(!0), this.remoteSlide = new m.SlideEntity(e.param, !0), this.remoteSlide.from = t, r && (this.remoteSlide.group = r), this.remoteSlide.cursor = e.attr.cursor, this.selectEntity(this.remoteSlide);
        } else if ("undo" === e.name) {
          var a = null;a = r ? t + "_" + r : t;var s = this.remoteRecordMap.get(a);if (s) {
            for (var u = parseInt(e.param), l = [], v = s.length - 1; v >= 0; --v) {
              var y = s[v];if (!(y.sn >= u)) break;l.push(y);
            }if (l.length > 0) {
              var b = this.remoteHistoryMap.get(a);b || (b = [], this.remoteHistoryMap.put(a, b));for (var k = 0; k < l.length; ++k) {
                var w = l[k];b.push(w);var E = s.indexOf(w);E >= 0 && s.splice(E, 1), w.el.remove();
              }
            }
          }var _ = this.getSlide();_ && _.popNote();
        } else if ("redo" === e.name) {
          var x = null;x = r ? t + "_" + r : t;var M = this.remoteHistoryMap.get(x);if (M) {
            for (var T = parseInt(e.param), P = [], C = M.length - 1; C >= 0; --C) {
              var I = M[C];if (!(I.sn <= T)) break;P.push(I);
            }if (P.length > 0) {
              var S = this.remoteRecordMap.get(x);S || (S = [], this.remoteRecordMap.put(x, S));for (var R = 0; R < P.length; ++R) {
                var D = P[R];S.push(D);var W = M.indexOf(D);if (W >= 0 && M.splice(W, 1), e.page) {
                  var N = this.getSlide();N && N.appendNote(D);
                }var O = D.type;O === f.RectEntity.Name ? f.RectEntity.restore(this.paper, D) : O === d.EllipseEntity.Name ? d.EllipseEntity.restore(this.paper, D) : O === h.ArrowEntity.Name ? h.ArrowEntity.restore(this.paper, D, this) : O === p.PencilEntity.Name ? p.PencilEntity.restore(this.paper, D) : O === g.TextEntity.Name ? g.TextEntity.restore(this.paper, D) : nucleus.getLogger().e("CubeWhiteboard#_processVGRedo", "Unknown command type: " + O);
              }
            }
          }
        } else if ("erase" === e.name) this.erase(!0);else if ("cleanup" === e.name) this.cleanup(!0);else if ("bgimage" === e.name) {
          var L = new c.BackgroundImageEntity(e.param, !0);this.selectEntity(L);
        } else {
          var j = void 0;if ("rect" === e.name ? j = f.RectEntity : "ellipse" === e.name ? j = d.EllipseEntity : "arrow" === e.name ? j = h.ArrowEntity : "path" === e.name ? j = p.PencilEntity : "text" === e.name && (j = g.TextEntity), null !== j) {
            if (i = j.draw(this.paper, e, this), null === t) return i;var z = null;if (z = void 0 !== r && null != r ? t + "_" + r : t, this.remoteRecordMap.containsKey(z)) {
              var A = this.remoteRecordMap.get(z);A.push({ sn: e.sn, type: j.Name, el: i, raw: { param: e.param, attr: e.attr } });
            } else {
              var B = [{ sn: e.sn, type: j.Name, el: i, raw: { param: e.param, attr: e.attr } }];this.remoteRecordMap.put(z, B);
            }return i;
          }nucleus.getLogger().w("CubeWhiteboard", "Unknown VG command: " + e.name);
        }
      } }, { key: "remove", value: function value(e) {
        if (0 !== this.pastRecords.length) {
          for (var t = null, r = -1, i = this.pastRecords.length - 1; i >= 0; --i) {
            var o = this.pastRecords[i];if (o.sn === e) {
              t = o, r = i;break;
            }
          }null !== t && (this.pastRecords.splice(r, 1), this.undoRecords.push(t), this.viewport.unmanage(t.set), void 0 === t.set.forEach ? (t.set._custom && (t.set._custom.remove(), t.set._custom = null), t.set.remove()) : t.set.forEach(function (e) {
            e.remove();
          }));
        }
      } }, { key: "resize", value: function value(e, t) {
        if (null !== this.paper) {
          if (this.paperWidth > 0 && this.paperHeight > 0) {
            var r = e - this.paperWidth,
                i = t - this.paperHeight;this.paper.setSize(this.paperWidth, this.paperHeight), this.paperDom.style.left = parseInt(.5 * r) + "px", this.paperDom.style.top = parseInt(.5 * i) + "px";
          } else this.paper.setSize(e, t), this.paperDom.style.left = "0px", this.paperDom.style.top = "0px";this.width = e, this.height = t, null !== this.curEntity && this.curEntity.onResize(e, t);var o = this.getSlide();o && o.onResize(e, t), null !== this.remoteSlide && this.remoteSlide.onResize(e, t), this.maskDom.style.width = e + "px", this.maskDom.style.height = t + "px", this.bgDom.style.width = e + "px", this.bgDom.style.height = t + "px";var n = this.bgDom.getElementsByTagName("img");null !== n && void 0 !== (n = n[0]) && null !== n && this._centerBgImage(n);
        }
      } }, { key: "workAsSlide", value: function value(e, t) {
        var r = !t || void 0;if (void 0 === e.urls || void 0 === e.name) return nucleus.getLogger().w("CubeWhiteboard", "Invalid sharing file"), !1;if (this.getSlide() && (null !== this.recorder && this.recorder.isRecording() || null !== this.player && this.player.isPlaying())) return this.listener.onWhiteboardFailed(w.StateCode.OpenSlideFailed), !1;if (this.exMap.containsKey(c.BackgroundImageEntity.Name)) {
          var i = this.exMap.get(c.BackgroundImageEntity.Name);i.dispose(), this.exMap.remove(c.BackgroundImageEntity.Name), i = null;
        }this.cleanup(!0);var o = new m.SlideEntity(e);return o.from = this.sessionName, r && (o.isFirstSharing = !0), this.selectEntity(o), this.listener.onSlideOpened(o), !0;
      } }, { key: "getSlide", value: function value() {
        return this.exMap.get(m.SlideEntity.Name);
      } }, { key: "getZoomRatio", value: function value() {
        return this.viewport.getRatio();
      } }, { key: "getRecorder", value: function value() {
        return null === this.recorder && (this.recorder = new y.WhiteboardRecorder(this)), this.recorder;
      } }, { key: "getPlayer", value: function value() {
        return null === this.player && (this.player = new b.WhiteboardPlayer(this)), this.player;
      } }, { key: "onSlideChanged", value: function value(e, t) {
        this.viewport.adaptView(), this.listener.onSlideChanged(e), null !== this.recorder && this.recorder.isRecording() && this.recorder._notifyOperation({ name: "slide", page: e.currentPage(), time: Date.now() });
      } }, { key: "triggerChange", value: function value(e) {
        this.listener.onChange(e);
      } }]), t;
  }(s.WhiteboardCoreService);
}, function (e, t, r) {
  "use strict";
  var i = r(3),
      o = r(15),
      n = r(14),
      a = r(5),
      s = r(13),
      u = r(4),
      l = r(0),
      h = r(6),
      c = r(7),
      d = r(8),
      p = r(9),
      f = r(10),
      m = r(11),
      g = r(2),
      v = r(12);!function (e) {
    e.CubeWhiteboardCoreListener = i.WhiteboardCoreListener, e.CubeWhiteboardCoreServiceWorker = o.WhiteboardCoreServiceWorker, e.CubeWhiteboardRecorderListener = n.WhiteboardRecorderListener, e.CubeWhiteboardRecorder = a.WhiteboardRecorder, e.CubeWhiteboardPlayerListener = s.WhiteboardPlayerListener, e.CubeWhiteboardPlayer = u.WhiteboardPlayer, e.GraphicsEntity = l.GraphicsEntity, e.SlideNote = h.SlideNote, e.ArrowEntity = c.ArrowEntity, e.BackgroundImageEntity = d.BackgroundImageEntity, e.EllipseEntity = p.EllipseEntity, e.PencilEntity = f.PencilEntity, e.RectEntity = m.RectEntity, e.SlideEntity = g.SlideEntity, e.TextEntity = v.TextEntity;
  }(window);
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.WhiteboardCoreService = function () {
    function e() {
      i(this, e);
    }return o(e, [{ key: "setListener", value: function value(e) {} }, { key: "load", value: function value(e, t) {} }, { key: "adjustSize", value: function value() {} }, { key: "selectEntity", value: function value(e) {} }, { key: "unselect", value: function value(e) {} }, { key: "undo", value: function value(e) {} }, { key: "redo", value: function value(e) {} }, { key: "erase", value: function value(e, t) {} }, { key: "cleanup", value: function value(e) {} }, { key: "zoom", value: function value(e) {} }, { key: "resetView", value: function value(e) {} }, { key: "setRemoteSize", value: function value(e, t) {} }, { key: "syncBoardSize", value: function value(e) {} }, { key: "numPaperElements", value: function value() {} }, { key: "getExEntity", value: function value(e) {} }, { key: "showMask", value: function value() {} }, { key: "hideMask", value: function value() {} }, { key: "exportContent", value: function value(e) {} }, { key: "importContent", value: function value(e) {} }, { key: "record", value: function value(e, t, r, i) {} }, { key: "setTransparency", value: function value(e) {} }, { key: "setBackgroundImage", value: function value(e, t) {} }, { key: "setBackgroundColor", value: function value(e) {} }, { key: "loadRecordData", value: function value(e, t) {} }, { key: "loadVGCommand", value: function value(e, t, r) {} }, { key: "remove", value: function value(e) {} }, { key: "resize", value: function value(e, t) {} }, { key: "workAsSlide", value: function value(e, t) {} }, { key: "getSlide", value: function value() {} }, { key: "getZoomRatio", value: function value() {} }, { key: "getRecorder", value: function value() {} }, { key: "getPlayer", value: function value() {} }, { key: "unload", value: function value() {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });t.StateCode = { OpenSlideFailed: 1600 };
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.Viewport = void 0;var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }(),
      n = r(1);t.Viewport = function () {
    function e(t) {
      i(this, e), this.wb = t, this.width = t.paperWidth, this.height = t.paperHeight, this.enabled = !0, this.down = !1, this.bboxPadding = 4, this.zoomRatio = -1, this.posX = 0, this.posY = 0, this.tempX = 0, this.tempY = 0, this.elements = [];
    }return o(e, [{ key: "manage", value: function value(e, t) {
        var r = this;n.Utils.unselectable(t.node), this.elements.indexOf(t) >= 0 || (t.sn = e, this.elements.push(t), t.click(function (e) {
          if (null == t._custom || void 0 === t._custom) {
            var i = r.wb.paper,
                o = t.getBBox();t._custom = { list: [], remove: function remove() {
                for (var e = 0; e < this.list.length; ++e) {
                  this.list[e].remove();
                }this.list.splice(0, this.list.length);
              } };var n = i.rect(o.x - r.bboxPadding, o.y - r.bboxPadding, o.width + r.bboxPadding + r.bboxPadding, o.height + r.bboxPadding + r.bboxPadding);n.attr("stroke", "#1AA0E6"), n.attr("stroke-dasharray", "."), t._custom.list.push(n);var a = i.circle(o.x - r.bboxPadding, o.y, 10),
                s = function e(i) {
              t._custom.remove(), t._custom = null, r.wb.remove(t.sn), a.unclick(e);
            };a.click(s), a.attr("fill", "#1AA0E6"), a.attr("stroke", "#1AA0E6"), t._custom.list.push(a);var u = o.x - 5 - r.bboxPadding,
                l = o.y - 5,
                h = o.x + 5 - r.bboxPadding,
                c = o.y + 5,
                d = i.path("M" + u + "," + l + " L" + h + "," + c + " Z");d.attr("stroke", "#FFF"), d.attr("stroke-width", 2), t._custom.list.push(d), u = o.x + 5 - r.bboxPadding, l = o.y - 5, h = o.x - 5 - r.bboxPadding, c = o.y + 5, d = i.path("M" + u + "," + l + " L" + h + "," + c + " Z"), d.attr("stroke", "#FFF"), d.attr("stroke-width", 2), t._custom.list.push(d);
          }
        }));
      } }, { key: "unmanage", value: function value(e) {
        var t = this.elements.indexOf(e);t < 0 || (this.elements.splice(t, 1), void 0 !== e._custom && null != e._custom && (e._custom.remove(), e._custom = null));
      } }, { key: "reset", value: function value() {
        this.posX = 0, this.posY = 0, this.width = this.wb.paperWidth, this.height = this.wb.paperHeight, this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, !0), this.zoomRatio = 1, this.elements.splice(0, this.elements.length);
      } }, { key: "adaptView", value: function value() {
        var e = null,
            t = null,
            r = this.wb.getSlide(),
            i = this.wb.width,
            o = this.wb.height;if (0 != i && 0 != o) {
          var n = !1;if (null == r) {
            if (this.wb.remoteWidth <= 0) return;this.wb.remoteWidth > i && (n = !0);
          }if (n) {
            var a = this.wb.remoteWidth,
                s = this.wb.remoteHeight,
                u = .5 * (this.wb.paperWidth - a),
                l = .5 * (this.wb.paperHeight - s),
                h = a,
                c = s;e = { x: u, y: l }, t = { width: h, height: c };
          } else {
            if (null == r) return;if (null == (e = r.getPosition())) {
              var d = this;return void setTimeout(function () {
                d.adaptView();
              }, 40);
            }if (t = r.getSize(), i >= t.width && o >= t.height) return;
          }var p = t.width / i,
              f = t.height / o;if (p > f) {
            var m = p,
                g = parseInt(Math.round(m * this.wb.paperWidth)) + 1,
                v = .5 * (i * m - this.wb.paperWidth * m) + e.x;this.posX = parseInt(v), this.posY = 0, this.width = g, this.height = this.wb.paperHeight, this.zoomRatio = i / t.width;
          } else {
            var m = f,
                y = parseInt(Math.round(m * this.wb.paperHeight)) + 1,
                b = .5 * (o * m - this.wb.paperHeight * m) + e.y;this.posX = 0, this.posY = parseInt(b), this.width = this.wb.paperWidth, this.height = y, this.zoomRatio = o / t.height;
          }this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, !0);
        }
      } }, { key: "getRatio", value: function value() {
        if (this.zoomRatio > 0) return this.zoomRatio;var e = this.wb.paperWidth / this.width,
            t = this.wb.paperHeight / this.height;return Math.abs(e - 1) < Math.abs(t - 1) ? (this.zoomRatio = t, t) : (this.zoomRatio = e, e);
      } }, { key: "zoom", value: function value(e) {
        if (!(e <= 0)) {
          var t = this.wb.paperWidth / e,
              r = this.wb.paperHeight / e;this.posX = parseInt(.5 * (this.wb.paperWidth - t)), this.posY = parseInt(.5 * (this.wb.paperHeight - r)), this.width = t, this.height = r, this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, !0), this.zoomRatio = e;
        }
      } }, { key: "fireDown", value: function value(e) {
        if (this.enabled && 0 != this.wb.numPaperElements()) {
          this.down = !0;var t = void 0 === e.touches ? n.Utils.getMousePos(e) : n.Utils.getTouchPos(e);this.tempX = t.x, this.tempY = t.y;
        }
      } }, { key: "fireUp", value: function value(e) {
        this.enabled && (this.down = !1);
      } }, { key: "fireMove", value: function value(e) {
        if (this.enabled && this.down) {
          var t = void 0 === e.touches ? n.Utils.getMousePos(e) : n.Utils.getTouchPos(e);if (!isNaN(parseInt(t.x)) && !isNaN(parseInt(t.y))) {
            var r = this.tempX - t.x,
                i = this.tempY - t.y;this.posX += parseInt(r), this.posY += parseInt(i), this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, !0), this.tempX = t.x, this.tempY = t.y;
          }
        }
      } }, { key: "onClick", value: function value(e) {
        if ("svg" == e.target.tagName) for (var t = 0; t < this.elements.length; ++t) {
          var r = this.elements[t];void 0 !== r._custom && null != r._custom && (r._custom.remove(), r._custom = null);
        }
      } }, { key: "onMouseMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onMouseDown", value: function value(e) {
        this.fireDown(e);
      } }, { key: "onMouseUp", value: function value(e) {
        this.fireUp(e);
      } }, { key: "onTouchMove", value: function value(e) {
        this.fireMove(e);
      } }, { key: "onTouchStart", value: function value(e) {
        this.fireDown(e);
      } }, { key: "onTouchEnd", value: function value(e) {
        this.fireUp(e);
      } }, { key: "onKeyPress", value: function value(e) {} }, { key: "_detectCollision", value: function value(e, t) {} }]), e;
  }();
}, function (e, t, r) {
  "use strict";
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, r, i) {
      return r && e(t.prototype, r), i && e(t, i), t;
    };
  }();t.HashMap = function () {
    function e() {
      i(this, e), this._stack = {}, this._size = 0;
    }return o(e, [{ key: "put", value: function value(e, t) {
        this.containsKey(e) || this._size++, this._stack[e] = t;
      } }, { key: "get", value: function value(e) {
        return this._stack[e];
      } }, { key: "containsKey", value: function value(e) {
        return this._stack.hasOwnProperty(e);
      } }, { key: "containsValue", value: function value(e) {
        for (var t in this._stack) {
          if (this._stack.hasOwnProperty(t) && this._stack[t] === e) return !0;
        }return !1;
      } }, { key: "remove", value: function value(e) {
        return !!this.containsKey(e) && (this._size--, delete this._stack[e]);
      } }, { key: "keySet", value: function value() {
        return Object.keys(this._stack);
      } }, { key: "values", value: function value() {
        return Object.values(this._stack);
      } }, { key: "isEmpty", value: function value() {
        return 0 === this._size;
      } }, { key: "size", value: function value() {
        return this._size;
      } }, { key: "clear", value: function value() {
        this._size = 0, this._stack = {};
      } }]), e;
  }();
}]);
//# sourceMappingURL=cube-whiteboard-core.js.map

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WhiteboardServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WhiteboardService2 = __webpack_require__(165);

var _WhiteboardListener = __webpack_require__(66);

var _Whiteboard = __webpack_require__(67);

var _WhiteboardSlide = __webpack_require__(167);

var _CubeError = __webpack_require__(0);

var _WhiteboardConfig = __webpack_require__(166);

var _FileHttp = __webpack_require__(21);

var _FileInfo = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WhiteboardServiceWorker.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cube Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-2016 Cube Team. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 白板服务实现。
 *
 * @class WhiteboardServiceWorker
 * @author Xu Jiangwei, Guan Yong
 */
var WhiteboardServiceWorker = exports.WhiteboardServiceWorker = function (_WhiteboardService) {
    _inherits(WhiteboardServiceWorker, _WhiteboardService);

    function WhiteboardServiceWorker(engine, id) {
        _classCallCheck(this, WhiteboardServiceWorker);

        var _this = _possibleConstructorReturn(this, (WhiteboardServiceWorker.__proto__ || Object.getPrototypeOf(WhiteboardServiceWorker)).call(this, engine, _WhiteboardListener.WhiteboardListener, CELLET.Whiteboard));

        _this.fileHttp = null;
        _this.session = engine.session;
        _this.whiteboard = new _Whiteboard.Whiteboard();
        // this.name = (name !== undefined && null != name) ? name : UUID.v4().toString();
        _this.name = null;

        // 白板权限为默认读写都具备
        _this.permission = CubePermission.WRITE;

        // 离线模式
        _this.offline = false;

        // 查询数据回调
        _this.queryWBCallback = null;
        _this.queryWBErrorCallback = null;
        _this.querySharedCallback = null;
        _this.querySharedErrorCallback = null;

        // 当前远端
        _this.remoteSizeName = null;

        _this.passiveList = [];
        _this.currentWhiteboard = [];

        // 核心库
        _this.core = new CubeWhiteboardCoreServiceWorker(id, _this.name, engine.session.name);
        _this.core.load();
        _this.core.setResourcePath(engine.resourcePath);
        _this.core.setListener({
            onSlideOpened: function onSlideOpened(slide) {
                _this.delegate.onFileShared(_this.whiteboard, slide.file);
            },

            onSlideChanged: function onSlideChanged(slide) {
                _this.delegate.onSlide(_this.whiteboard, slide);
            },

            onCleanup: function onCleanup() {
                _this.delegate.onCleanup(_this.whiteboard);
            },

            onChange: function onChange(data) {
                if (!_this.offline) {
                    var action = CubeConst.ActionRestrainWhiteboard;
                    if (data.command) {
                        action = CubeConst.ActionVgCmdWhiteboard;
                    }
                    var _whiteboard = _this.whiteboard;
                    var param = {};
                    if (!data.command) {
                        param = {
                            whiteboardId: _whiteboard.whiteboardId,
                            boardSize: data.boardSize,
                            paperSize: data.paperSize,
                            from: cube.session.name
                        };
                    } else {
                        param = {
                            whiteboardId: _whiteboard.whiteboardId,
                            command: data.command,
                            from: cube.session.name
                        };
                    }
                    var ret = _this.engine.connect.send(CELLET.Whiteboard, action, param);
                    if (!ret) {
                        // 报告网络错误
                        _this.delegate.onWhiteboardFailed(_this.whiteboard, new _CubeError.CubeError(CubeStateCode.RequestTimeout, "request timeout"));
                    }
                }
            },
            onFailed: function onFailed(stateCode) {
                _this.delegate.onWhiteboardFailed(_this.whiteboard, new _CubeError.CubeError(stateCode));
            }
        });
        return _this;
    }

    /**
     * 返回幻灯片实体。
     */


    _createClass(WhiteboardServiceWorker, [{
        key: 'getSlide',
        value: function getSlide() {
            return this.core.getSlide();
        }
    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged() {
            if (this.engine.registered) {
                this.fileHttp = new _FileHttp.FileHttp(this.engine);
            }
        }

        /**
         * 创建白板
         *
         * @param {WhiteboardConfig} config
         */

    }, {
        key: 'create',
        value: function create(config) {
            var whiteboard = new _WhiteboardConfig.WhiteboardConfig();
            whiteboard.displayName = config.displayName;
            whiteboard.bindGroupId = config.bindGroupId;
            whiteboard.maxNumber = config.maxNumber;
            var param = {
                whiteboard: whiteboard,
                from: this.engine.session.name
            };

            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionCreateWhiteboard, param);
        }
    }, {
        key: 'destroy',


        /**
         * 销毁白板
         *
         * @param whiteboardId
         */
        value: function destroy(whiteboardId) {
            var param = {
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionDestroyWhiteboard, param);
        }

        /**
         * 申请加入白板
         *
         * @param whiteboardId 白板Id
         */

    }, {
        key: 'join',
        value: function join(whiteboardId) {
            var param = {
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionJoinWhiteboard, param);
        }

        /**
         * 退出白板
         *
         * @param whiteboardId 白板Id
         */

    }, {
        key: 'quit',
        value: function quit(whiteboardId) {
            var param = {
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionQuitWhiteboard, param);
        }

        /**
         * 拒绝申请
         *
         * @param whiteboardId 白板Id
         * @param cubeId 申请者ID
         */

    }, {
        key: 'rejectApply',
        value: function rejectApply(whiteboardId, cubeId) {
            var param = {
                cubeId: cubeId,
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionRejectApplyWhiteboard, param);
        }
    }, {
        key: 'acceptApply',


        /**
         * 同意申请
         *
         * @param whiteboardId 白板Id
         * @param cubeId 申请者ID
         */
        value: function acceptApply(whiteboardId, cubeId) {
            var param = {
                cubeId: cubeId,
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionAcceptApplyWhiteboard, param);
        }

        /**
         * 邀请白板成员
         *
         * @param whiteboardId 白板Id
         * @param members 被邀请列表
         */

    }, {
        key: 'invite',
        value: function invite(whiteboardId, members) {
            var param = {
                whiteboardId: whiteboardId,
                members: members,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionInviteWhiteboard, param);
        }

        /**
         * 拒绝邀请
         *
         * @param whiteboardId 白板Id
         * @param cubeId 邀请者ID
         */

    }, {
        key: 'rejectInvite',
        value: function rejectInvite(whiteboardId, cubeId) {
            var param = {
                cubeId: cubeId,
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionRejectWhiteboardInvite, param);
        }
    }, {
        key: 'acceptInvite',


        /**
         * 接受邀请
         *
         * @param whiteboardId 白板Id
         * @param cubeId 邀请者ID
         */
        value: function acceptInvite(whiteboardId, cubeId) {
            var param = {
                cubeId: cubeId,
                whiteboardId: whiteboardId,
                from: this.engine.session.name
            };
            this.engine.connect.send(CELLET.Whiteboard, CubeConst.ActionAcceptWhiteboardInvite, param);
        }
    }, {
        key: 'setLineWeight',


        /**
         * 设置画笔粗细
         *
         * @param wide
         */
        value: function setLineWeight(wide) {
            this.core.setLineWeight(wide);
        }
    }, {
        key: 'setLineColor',


        /**
         * 设置画笔颜色
         *
         * @param color
         */
        value: function setLineColor(color) {
            this.core.curEntity.borderColor = color;
        }

        /**
         * 选择铅笔
         */

    }, {
        key: 'selectPencil',
        value: function selectPencil() {
            this._selectEntity(new PencilEntity());
        }
    }, {
        key: 'selectText',


        /**
         * 选择文本（暂未开放）
         */
        value: function selectText() {
            this._selectEntity(new TextEntity());
        }
    }, {
        key: 'selectRect',


        /**
         * 选择方框
         */
        value: function selectRect() {
            this._selectEntity(new RectEntity());
        }
    }, {
        key: 'selectEllipse',


        /**
         * 选择圆圈
         */
        value: function selectEllipse() {
            this._selectEntity(new EllipseEntity());
        }
    }, {
        key: 'selectArrow',


        /**
         * 选择箭头
         */
        value: function selectArrow() {
            this._selectEntity(new ArrowEntity());
        }
    }, {
        key: 'unSelect',


        /**
         * 取消选中模式
         */
        value: function unSelect(whiteboard, entity) {
            this.core.unselect(entity);
        }
    }, {
        key: '_selectEntity',
        value: function _selectEntity(entity) {
            if (this.permission != CubePermission.WRITE) {
                nucleus.getLogger().e("CubeWhiteboard#selectEntity", "You don't have permission to write on the whiteboard!");
                this.delegate.onFailed(this, CubeStateCode.NotHavePermission);
                return;
            }
            this.core.selectEntity(entity);
        }

        /**
         * 撤销上一次操作
         */

    }, {
        key: 'undo',
        value: function undo() {
            if (this.permission != CubePermission.WRITE) {
                nucleus.getLogger().e("CubeWhiteboard#undo", "You don't have permission to write on the whiteboard!");
                return false;
            }
            this.core.undo();
            return true;
        }
    }, {
        key: 'redo',


        /**
         * 恢复上一次操作
         */
        value: function redo() {
            if (this.permission != CubePermission.WRITE) {
                nucleus.getLogger().e("CubeWhiteboard#redo", "You don't have permission to write on the whiteboard!");
                return false;
            }
            this.core.redo();
            return true;
        }
    }, {
        key: 'erase',


        /**
         * 擦除所有画笔标注
         */
        value: function erase() {
            if (this.permission != CubePermission.WRITE) {
                nucleus.getLogger().e("CubeWhiteboard#erase", "You don't have permission to write on the whiteboard!");
                return false;
            }
            this.core.erase();
            return true;
        }
    }, {
        key: 'cleanup',


        /**
         * 清空白板所有数据
         */
        value: function cleanup() {
            if (this.permission != CubePermission.WRITE) {
                nucleus.getLogger().e("CubeWhiteboard#cleanup", "You don't have permission to write on the whiteboard!");
                return false;
            }
            this.core.cleanup();
            return true;
        }
    }, {
        key: 'zoom',


        /**
         * 缩放白板
         *
         * @param ratio
         */
        value: function zoom(ratio) {
            this.core.zoom(ratio);
        }
    }, {
        key: 'getZoomRatio',


        /**
         * 获取白板当前缩放比例
         *
         * @return
         */
        value: function getZoomRatio() {
            return this.core.getZoomRatio();
        }
    }, {
        key: 'shareFile',


        /**
         * 分享云储存文件（office，图片及PDF）或本地文件
         *
         * @param {string||File} file
         */
        value: function shareFile(file) {
            var _this2 = this;

            new Promise(function (resolve, reject) {
                _this2.fileHttp.createUpload(file, function (err, data) {
                    if (err) {
                        reject(data);
                        _this2.delegate.onWhiteboardFailed(_this2.whiteboard, err);
                    }
                    if (data.state.code == 200) {
                        resolve(data);
                    } else {
                        _this2.delegate.onWhiteboardFailed(_this2.whiteboard, 'Error');
                    }
                });
            }).then(function (res) {
                var fileInfo = res.data.fileInfo;
                var whiteboardSlide = new _WhiteboardSlide.WhiteboardSlide(_this2.session.name, _this2.whiteboard.whiteboardId, fileInfo.md5, fileInfo.url, fileInfo.name);
                // fileInfo内需要包含原始file， 否则无法发起upload
                fileInfo.file = file.file;
                whiteboardSlide.name = fileInfo.name;
                whiteboardSlide.size = fileInfo.size;
                _this2.fileHttp.upload(fileInfo, function (err, data) {
                    if (!err && data.state.code == 200) {
                        _this2.delegate.onSlideUpdated(_this2.whiteboard, whiteboardSlide);
                        setTimeout(function () {
                            _this2.fileHttp._progressTask(fileInfo.fileId, function (err, data) {
                                if (!err && data.state.code == 200) {
                                    var f = data.data.fileInfo;
                                    _this2.delegate.onSlideUploading(_this2.whiteboard, whiteboardSlide, f.progress, f.size);
                                }
                            });
                        }, 200);
                        var upLoadFile = data.data.fileInfo;
                        if (upLoadFile.size == upLoadFile.progress) {
                            whiteboardSlide.url = upLoadFile.url;
                            var isPPT = whiteboardSlide.name.substr(whiteboardSlide.name.length - 4);
                            if (isPPT == 'pptx' || isPPT.match('.ppt') != null) {
                                var pptUrl = upLoadFile.url + '?info';
                                Ajax.newRequest(pptUrl).method("GET").send(function (response) {
                                    var data = JSON.parse(response.data);
                                    console.log(data);
                                    if (data.state.code == 200) {
                                        var arr = data.data.slideUrls;
                                        whiteboardSlide.urls = arr;
                                        _this2.delegate.onSlideUploadCompleted(_this2.whiteboard, whiteboardSlide);
                                    }
                                });
                            } else {
                                var arr = [upLoadFile.url];
                                whiteboardSlide.urls = arr;
                                _this2.delegate.onSlideUploadCompleted(_this2.whiteboard, whiteboardSlide);
                            }
                        }
                    }
                });
            }).catch(function (err) {
                _this2.delegate.onWhiteboardFailed(_this2.whiteboard, err);
            });
        }
    }, {
        key: 'listFile',


        /**
         * 列出所有幻灯片
         *
         * @param callback
         */
        value: function listFile(whiteboardId, callback) {
            var p = this.utils.isSecure ? "https" : "http";
            var url = p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/whiteboard';
            var list = whiteboardId.split(',');
            var param = {
                wbIds: JSON.stringify(list),
                token: this.engine.accToken
            };
            // let url = 'http://192.168.1.19:7070/v3/whiteboard';
            Ajax.newRequest(url).method("POST").content(param).send(function (response) {
                var data = JSON.parse(response.data);
                if (data.state.code == 200) {
                    callback(data);
                } else {
                    // callback(CubeStateCode.SetTopError)
                }
            });
        }
    }, {
        key: 'syncAllWhiteboard',


        /**
         *  同步所有白板
         * */
        value: function syncAllWhiteboard(cubeId, offset, limit) {
            var p = this.utils.isSecure ? "https" : "http";
            var url = p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/whiteboard/users/sync';
            // let url = 'http://192.168.1.19:7070/v3/whiteboard/users/sync'
            var param = {
                offset: offset,
                limit: limit,
                cubeId: cubeId,
                token: this.engine.accToken
            };
            Ajax.newRequest(url).method("POST").content(param).send(function (response) {
                var data = JSON.parse(response.data);
                if (data.state.code == 200) {
                    callback(data);
                } else {
                    // callback(CubeStateCode.SetTopError)
                }
            });
        }

        /**
         * 下一页（幻灯片模式操作）
         */

    }, {
        key: 'nextPage',
        value: function nextPage() {
            if (null != this.getSlide()) {
                this.getSlide().nextPage();
            }
        }
    }, {
        key: 'prevPage',


        /**
         * 上一页（幻灯片模式操作）
         */
        value: function prevPage() {
            if (null != this.getSlide()) {
                this.getSlide().prevPage();
            }
        }
    }, {
        key: 'gotoPage',


        /**
         * 指定页（幻灯片模式操作）
         *
         * @param page
         */
        value: function gotoPage(page) {
            if (null != this.getSlide()) {
                this.getSlide().gotoPage(page);
            }
        }
    }, {
        key: 'getView',


        /**
         * 获取白板画面（必须先创建白板）
         *
         * @return
         */
        value: function getView() {
            return document.getElementById(this.core.domId);
        }
    }, {
        key: 'exportWhiteboard',


        /**
         * 导出白板加密白板数据
         *
         * @param callback 回调
         */
        value: function exportWhiteboard(pages, callback) {
            return this.core.exportContent(pages);
        }
    }, {
        key: 'importWhiteboard',


        /**
         * 导入白板消息
         *
         * @param wbString 加密白板数据
         * @param callback 回调
         */
        value: function importWhiteboard(wbString, callback) {
            return this.core.importContent(wbString);
        }
    }, {
        key: 'setBackgroundColor',


        /**
         * 设置背景颜色（#123456）
         *
         * @param color
         */
        value: function setBackgroundColor(color) {
            this.core.setBackgroundColor(color);
        }
    }, {
        key: 'workAsSlide',


        /**
         * 以幻灯片模式进行工作。
         */
        value: function workAsSlide(file, isLoad) {
            if (undefined == file) {
                this.delegate.onFailed(whiteboard, CubeStateCode.CubeStateLoadFileFailed);
                nucleus.getLogger().e("CubeWhiteboard#workAsSlide", "File Info is undefined!");
                return;
            }
            return this.core.workAsSlide(file, isLoad);
        }

        /**
         * 查询cubeId画的白板记录
         *
         * @param cubeId
         * @param isCover
         * @param startTime
         */

    }, {
        key: 'queryRecords',
        value: function queryRecords(whiteboardId, startTime, callback) {
            var p = this.utils.isSecure ? "https" : "http";
            var list = typeof whiteboardId == 'string' ? whiteboardId.split(',') : whiteboardId.whiteboardId;
            // let url = 'http://192.168.1.19:7070/v3/whiteboard/action/list';
            var url = p + '://' + _CUBE_DOMAIN + ':' + _CUBE_PORT + '/v3/whiteboard/action/list';
            var param = {
                whiteboardId: list,
                token: this.engine.accToken,
                startTime: startTime
            };
            Ajax.newRequest(url).method("POST").content(param).send(function (response) {
                var data = JSON.parse(response.data);
                if (data.state.code == 200) {
                    callback(data, whiteboardId);
                } else {
                    // callback(CubeStateCode.SetTopError)
                }
            });
        }
    }, {
        key: 'queryHistoryRecords',


        /**
         * 查询cubeId画的白板记录
         *
         * @param whiteboardId
         * @param since
         * @param until
         */
        value: function queryHistoryRecords(whiteboardId, since, until) {}
    }, {
        key: '_processVGCommand',
        value: function _processVGCommand(data) {
            // let boardName = data.boardName;
            var from = data.from;
            var group = null;
            if (data.group !== undefined && data.group != "") {
                group = data.group;
                nucleus.getLogger().d('CubeWhiteboard', 'Group shared - group: ' + data.group + ' and from: ' + data.from);
            }

            this.loadVGCommand(data.command, from, group);
        }
    }, {
        key: 'loadVGCommand',
        value: function loadVGCommand(command, from, group) {
            return this.core.loadVGCommand(command, from, group);
        }

        /**
         * 加载白板记录。
         */

    }, {
        key: 'loadRecordData',
        value: function loadRecordData(whiteboard, data, clean) {
            if (null == this.session) {
                return;
            }

            this.core.loadRecordData(data, clean);
        }
    }, {
        key: 'onDialogue',
        value: function onDialogue(action, dialect) {
            var state = dialect.getParamAsString('state');
            var data = dialect.getParamAsString('data');
            var whiteboard = data.whiteboard;
            var from = new CubeUser(data.from);
            var user = new CubeUser(data.user ? data.user : this.engine.accName);
            if (!state && state.code != 200) {
                this.delegate.onWhiteboardFailed(this.whiteboard, new _CubeError.CubeError(state.code, state.desc));
                return false;
            }

            if (whiteboard && action.indexOf('ack') > -1) {
                whiteboard.isSelf = true;
            }
            switch (action) {
                case CubeConst.ActionCreateWhiteboardAck:
                    {
                        this.delegate.onWhiteboardCreated(whiteboard, from);
                        break;
                    }
                case CubeConst.ActionCreateWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardCreated(whiteboard, from);
                        break;
                    }
                case CubeConst.ActionVgCmdWhiteboardNotify:
                    {
                        this._processVgCmdWhiteboardNotify(data);
                        break;
                    }
                case CubeConst.ActionDestroyWhiteboardAck:
                    {
                        this.delegate.onWhiteboardDestroyed(whiteboard, from);
                        break;
                    }
                case CubeConst.ActionDestroyWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardDestroyed(whiteboard, from);
                        break;
                    }
                case CubeConst.ActionApplyjoinWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardApplied(whiteboard, from);
                        break;
                    }
                case CubeConst.ActionRejectApplyWhiteboardAck:
                    {
                        this.delegate.onWhiteboardRejectApplied(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionRejectApplyWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardRejectApplied(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionAcceptApplyWhiteboardAck:
                    {
                        this.delegate.onWhiteboardApplyJoined(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionAcceptApplyWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardApplyJoined(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionInviteWhiteboardAck:
                    {
                        this.delegate.onWhiteboardInvited(whiteboard, from, data.members);
                        break;
                    }
                case CubeConst.ActionInviteWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardInvited(whiteboard, from, data.members);
                        break;
                    }
                case CubeConst.ActionRejectWhiteboardInviteAck:
                    {
                        this.delegate.onWhiteboardRejectInvited(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionRejectWhiteboardInviteNotify:
                    {
                        this.delegate.onWhiteboardRejectInvited(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionAcceptWhiteboardInviteAck:
                    {
                        this.delegate.onWhiteboardInviteJoined(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionAcceptWhiteboardInviteNotify:
                    {
                        this.delegate.onWhiteboardInviteJoined(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionAcceptWhiteboardInviteSync:
                    {
                        this.delegate.onWhiteboardJoinFromOthers(whiteboard, from, user);
                        break;
                    }
                case CubeConst.ActionJoinWhiteboardAck:
                    {
                        this._processJoinWhiteboardAck(data);
                        break;
                    }
                case CubeConst.ActionJoinWhiteboardSync:
                    {
                        this.delegate.onWhiteboardApplied(whiteboard);
                        break;
                    }
                case CubeConst.ActionJoinWhiteboardNotify:
                    {
                        this.delegate.onWhiteboardApplied(whiteboard);
                        break;
                    }
                case CubeConst.ActionQuitWhiteboardAck:
                    {
                        this._processQuitWhiteboardAck(data);
                        break;
                    }
                case CubeConst.ActionQuitWhiteboardSync:
                    {
                        this._processQuitWhiteboardSync(data);
                        break;
                    }
                case CubeConst.ActionQuitWhiteboardAck:
                    {
                        this.delegate.onWhiteboardQuited(whiteboard, from);
                        break;
                    }
                default:
                    break;
            }
        }
    }, {
        key: '_processQuitWhiteboardAck',
        value: function _processQuitWhiteboardAck(data) {
            var user = data.from;
            this.whiteboard = null;
            this.delegate.onWhiteboardQuited(data.whiteboard, user);
        }
    }, {
        key: '_processQuitWhiteboardSync',
        value: function _processQuitWhiteboardSync(data) {
            this.whiteboard = null;
            document.getElementsByClassName();
        }
    }, {
        key: '_processVgCmdWhiteboardNotify',
        value: function _processVgCmdWhiteboardNotify(data) {
            nucleus.getLogger().d('CubeWhiteboard', 'VG Command received.');

            if (this.offline) {
                return;
            }
            var src = {
                command: data.command,
                from: data.from,
                whiteboardId: data.whiteboardId
            };
            this._processVGCommand(src);
            // 如果是对方共享的幻灯片, 则保存笔记
            if (null != data.command.page) {
                var slide = this.getSlide();
                if (slide) {
                    // 将 Command 转为 Record
                    var cmd = data.command;
                    var r = {
                        sn: cmd.sn,
                        type: cmd.name,
                        set: null,
                        raw: { "param": cmd.param, "attr": cmd.attr },
                        page: cmd.page
                    };
                    slide.appendNote(r);
                }
            }
        }
    }, {
        key: '_processJoinWhiteboardAck',
        value: function _processJoinWhiteboardAck(data) {
            var _this3 = this;

            var whiteboard = data.whiteboard;
            this.whiteboard = whiteboard;
            var promise = new Promise(function (resolve, reject) {
                // this.queryRecords(whiteboard.whiteboardId, 0, (res) => {
                //     if (res.state.code == 200) {
                //         resolve(res.data.action);
                //     } else {
                //         reject(res.state.desc)
                //     }
                // });
                resolve();
            });
            promise.then(function (res) {
                // for (let i = 0; i < res.length; i++) {
                //     res[i].command.name && this.core.loadVGCommand(res[i].command, res[i].from);
                // }
            }).then(function () {
                _this3.name = whiteboard.whiteboardId.toString();
                _this3.whiteboard = _Whiteboard.Whiteboard.parse(whiteboard);
                _this3.currentWhiteboard.push(_this3.whiteboard);
                _this3.delegate.onWhiteboardJoined(data.whiteboard, data.user.cubeId);
            });
        }
    }]);

    return WhiteboardServiceWorker;
}(_WhiteboardService2.WhiteboardService);

/***/ }),

/***/ 11:
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WhiteboardListener = __webpack_require__(66);

var _WhiteboardServiceWorker = __webpack_require__(103);

var _cubeWhiteboardCore = __webpack_require__(102);

var WhiteboardCore = _interopRequireWildcard(_cubeWhiteboardCore);

var _Whiteboard = __webpack_require__(67);

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
    // 提供全局的接口类
    global.CubeWhiteboardListener = _WhiteboardListener.WhiteboardListener;
    global.CubeWhiteboardServiceWorker = _WhiteboardServiceWorker.WhiteboardServiceWorker;
    global.CubeWhiteboard = _Whiteboard.Whiteboard;

    // 回调白板 onReady
    // global.addEventListener('load', function() {
    //     let services = global.cube.services.values();
    //     for (let i = 0; i < services.length; i++) {
    //         let service = services[i];
    //         if (service instanceof CubeWhiteboardServiceWorker) {
    //             service.delegate.onReady(service);
    //         }
    //     }
    // }, false);
})(window);

/***/ }),

/***/ 165:
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
 * WhiteboardService.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * @typedef {Object} WhiteboardFile
 * @property {String} account - 文件关联的 Cube 号。
 * @property {String} origin - 原始文件名。
 * @property {String} alias - 由服务器生成的文件别名。
 * @property {String} url - 文件的访问 URL 。
 * @property {Number} size - 文件的大小，单位：字节。
 * @property {Array.<String>} [urls] - 文档类型文件被转换之后的访问 URL 地址的数组。
 */

/**
 * 白板服务。
 *
 * @interface WhiteboardService
 * @author Xu Jiangwei, Guan Yong
 */
var WhiteboardService = exports.WhiteboardService = function (_CubeService) {
  _inherits(WhiteboardService, _CubeService);

  function WhiteboardService() {
    _classCallCheck(this, WhiteboardService);

    return _possibleConstructorReturn(this, (WhiteboardService.__proto__ || Object.getPrototypeOf(WhiteboardService)).apply(this, arguments));
  }

  _createClass(WhiteboardService, [{
    key: "create",


    /**
     * 创建白板
     *
     * @param {WhiteboardConfig} config
     */
    value: function create(config) {}
  }, {
    key: "destroy",


    /**
     * 销毁白板
     *
     * @param whiteboardId
     */
    value: function destroy(whiteboardId) {}

    /**
     * 申请加入白板
     *
     * @param whiteboardId 白板Id
     */

  }, {
    key: "applyJoin",
    value: function applyJoin(whiteboardId) {}
  }, {
    key: "quit",


    /**
     * 退出白板
     *
     * @param whiteboardId 白板Id
     */
    value: function quit(whiteboardId) {}
  }, {
    key: "rejectApply",


    /**
     * 拒绝申请
     *
     * @param whiteboardId 白板Id
     * @param cubeId 申请者ID
     */
    value: function rejectApply(whiteboardId, cubeId) {}
  }, {
    key: "acceptApply",


    /**
     * 同意申请
     *
     * @param whiteboardId 白板Id
     * @param cubeId 申请者ID
     */
    value: function acceptApply(whiteboardId, cubeId) {}
  }, {
    key: "inviteMembers",


    /**
     * 邀请白板成员
     *
     * @param whiteboardId 白板Id
     * @param members 被邀请列表
     */
    value: function inviteMembers(whiteboardId, members) {}
  }, {
    key: "rejectInvite",


    /**
     * 拒绝邀请
     *
     * @param whiteboardId 白板Id
     * @param cubeId 邀请者ID
     */
    value: function rejectInvite(whiteboardId, cubeId) {}
  }, {
    key: "acceptInvite",


    /**
     * 接受邀请
     *
     * @param whiteboardId 白板Id
     * @param cubeId 邀请者ID
     */
    value: function acceptInvite(whiteboardId, cubeId) {}
  }, {
    key: "setLineWeight",


    /**
     * 设置画笔粗细
     *
     * @param wide
     */
    value: function setLineWeight(wide) {}
  }, {
    key: "setLineColor",


    /**
     * 设置画笔颜色
     *
     * @param color
     */
    value: function setLineColor(color) {}
  }, {
    key: "selectPencil",


    /**
     * 选择铅笔
     */
    value: function selectPencil() {}
  }, {
    key: "selectText",


    /**
     * 选择文本（暂未开放）
     */
    value: function selectText() {}
  }, {
    key: "selectRect",


    /**
     * 选择方框
     */
    value: function selectRect() {}
  }, {
    key: "selectEllipse",


    /**
     * 选择圆圈
     */
    value: function selectEllipse() {}
  }, {
    key: "selectArrow",


    /**
     * 选择箭头
     */
    value: function selectArrow() {}
  }, {
    key: "unSelect",


    /**
     * 取消选中模式
     */
    value: function unSelect() {}
  }, {
    key: "undo",


    /**
     * 撤销上一次操作
     */
    value: function undo() {}
  }, {
    key: "redo",


    /**
     * 恢复上一次操作
     */
    value: function redo() {}
  }, {
    key: "erase",


    /**
     * 擦除所有画笔标注
     */
    value: function erase() {}
  }, {
    key: "cleanup",


    /**
     * 清空白板所有数据
     */
    value: function cleanup() {}
  }, {
    key: "zoom",


    /**
     * 缩放白板
     *
     * @param ratio
     */
    value: function zoom(ratio) {}
  }, {
    key: "getZoomRatio",


    /**
     * 获取白板当前缩放比例
     *
     * @return
     */
    value: function getZoomRatio() {}
  }, {
    key: "shareFile",


    /**
     * 分享云储存文件（office，图片及PDF）或本地文件
     *
     * @param {string||File} url
     */
    value: function shareFile(url) {}
  }, {
    key: "listFile",


    /**
     * 列出所有幻灯片
     *
     * @param callback
     */
    value: function listFile(whiteboardId, callback) {}
  }, {
    key: "nextPage",


    /**
     * 下一页（幻灯片模式操作）
     */
    value: function nextPage() {}
  }, {
    key: "prevPage",


    /**
     * 上一页（幻灯片模式操作）
     */
    value: function prevPage() {}
  }, {
    key: "gotoPage",


    /**
     * 指定页（幻灯片模式操作）
     *
     * @param page
     */
    value: function gotoPage(page) {}
  }, {
    key: "getView",


    /**
     * 获取白板画面（必须先创建白板）
     *
     * @return
     */
    value: function getView() {}
  }, {
    key: "exportWhiteboard",


    /**
     * 导出白板加密白板数据
     *
     * @param callback 回调
     */
    value: function exportWhiteboard(callback) {}
  }, {
    key: "importWhiteboard",


    /**
     * 导入白板消息
     *
     * @param wbString 加密白板数据
     * @param callback 回调
     */
    value: function importWhiteboard(wbString, callback) {}
  }, {
    key: "setBackgroundColor",


    /**
     * 设置背景颜色（#123456）
     *
     * @param color
     */
    value: function setBackgroundColor(color) {}
  }, {
    key: "queryRecords",


    /**
     * 查询cubeId画的白板记录
     *
     * @param cubeId
     * @param isCover
     * @param startTime
     */
    value: function queryRecords(cubeId, isCover, startTime) {}
  }, {
    key: "queryHistoryRecords",


    /**
     * 查询cubeId画的白板记录
     *
     * @param whiteboardId
     * @param since
     * @param until
     */
    value: function queryHistoryRecords(whiteboardId, since, until) {}
  }]);

  return WhiteboardService;
}(CubeService);

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * WhiteboardConfig.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 白板配置对象
 *
 * @class WhiteboardConfig
 * @author Huang yuanliang
 */
var WhiteboardConfig = exports.WhiteboardConfig = function (_CubeGroupConfig) {
  _inherits(WhiteboardConfig, _CubeGroupConfig);

  /**
   * @constructor
   * @param {GroupType} type
   * @param {String} displayName
   * */
  function WhiteboardConfig(type, displayName, bindGroupId) {
    _classCallCheck(this, WhiteboardConfig);

    var _this = _possibleConstructorReturn(this, (WhiteboardConfig.__proto__ || Object.getPrototypeOf(WhiteboardConfig)).call(this, type, displayName));

    _this.bindGroupId = bindGroupId;
    return _this;
  }

  return WhiteboardConfig;
}(CubeGroupConfig);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * WhiteboardSlide.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 幻灯片对象
 *
 * @class WhiteboardSlide
 * @author Huang yuanliang
 */
var WhiteboardSlide =

/**
 * @constructor
 * @param {string} cubeId 分享者id
 * @param {string} whiteboardId 白板id
 * @param {string} alias 原始文件md5名字
 * @param {string} size 原始文件大小
 * @param {string} url 原始文件url
 * @param {string} origin 幻灯片名字
 * @param {Array<String>} urls 幻灯片
 * @param {number} offset 第几页
 * @param {number} page 总页数
 * */
exports.WhiteboardSlide = function WhiteboardSlide(cubeId, whiteboardId, alias, size, url, origin, urls, offset, page) {
  _classCallCheck(this, WhiteboardSlide);

  this.cubeId = cubeId;
  this.whiteboardId = whiteboardId;
  this.alias = alias;
  this.size = size;
  this.url = url;
  this.origin = origin;
  this.urls = urls;
  this.offset = offset;
  this.page = page;
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 文件类型枚举。
 *
 * @readonly
 * @enum {Number}
 * @author Xu Jiangwei, Guan Yong
 */
var FileType = exports.FileType = {
  /** 文件夹类型 */
  Folder: 1,

  /** pdf类型 */
  Pdf: 2,

  /** word类型 */
  Word: 3,

  /** excel类型 */
  Excel: 4,

  /** ppt类型 */
  Ptt: 5,

  /** 图片 */
  Image: 11,

  /** office类型 */
  Office: 12,

  /** 视频 */
  Video: 13,

  /** 音频 */
  Audio: 14,

  /** 应用 */
  App: 15,

  /** 压缩文件 */
  Zip: 16,

  /** 白板 */
  Whiteboard: 20,

  /** 文件 */
  File: 99,

  /** 其它 */
  Other: 100
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileHttp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileAction = __webpack_require__(11);

var _CubeError = __webpack_require__(0);

var _sparkMd = __webpack_require__(34);

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

/***/ 34:
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

/***/ 66:
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
 * WhiteboardListener.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 白板监听器。
 *
 * @interface WhiteboardListener
 * @author Xu Jiangwei, Guan Yong
 */
var WhiteboardListener = exports.WhiteboardListener = function (_CubeListener) {
  _inherits(WhiteboardListener, _CubeListener);

  function WhiteboardListener() {
    _classCallCheck(this, WhiteboardListener);

    return _possibleConstructorReturn(this, (WhiteboardListener.__proto__ || Object.getPrototypeOf(WhiteboardListener)).apply(this, arguments));
  }

  _createClass(WhiteboardListener, [{
    key: "onWhiteboardCreated",

    /**
     * 当创建白板成功时回调
     *
     * @param whiteboard 白板实体
     * @param from 白板创建者
     */
    value: function onWhiteboardCreated(whiteboard, from) {}
  }, {
    key: "onWhiteboardDestroyed",


    /**
     * 当白板销毁时回调
     *
     * @param whiteboard 白板实体
     * @param from 白板销毁者（默认为创建者）
     */
    value: function onWhiteboardDestroyed(whiteboard, from) {}
  }, {
    key: "onWhiteboardApplied",


    /**
     * 有人申请加入版本时回调，仅群主和管理员（主持人）收到申请回调
     *
     * @param whiteboard 白板实体
     * @param applier 申请者
     */
    value: function onWhiteboardApplied(whiteboard, applier) {}
  }, {
    key: "onWhiteboardRejectApplied",


    /**
     * 拒绝申请者加入白板回调（仅申请者和拒绝者收到）
     *
     * @param whiteboard 白板实体
     * @param from 拒绝者
     * @param applier 申请者
     */
    value: function onWhiteboardRejectApplied(whiteboard, from, applier) {}
  }, {
    key: "onWhiteboardApplyJoined",


    /**
     * 同意申请者加入时回调
     *
     * @param whiteboard 白板实体
     * @param from 同意者
     * @param applier 申请者
     */
    value: function onWhiteboardApplyJoined(whiteboard, from, applier) {}
  }, {
    key: "onWhiteboardInvited",


    /**
     * 收到邀请回调(仅邀请者自己和被邀请者收到)
     *
     * @param whiteboard 白板实体
     * @param from 邀请者
     * @param invites 被邀请列表
     */
    value: function onWhiteboardInvited(whiteboard, from, invites) {}
  }, {
    key: "onWhiteboardRejectInvited",


    /**
     * 拒绝邀请回调（仅拒绝者和邀请者收到）
     *
     * @param whiteboard 白板实体
     * @param from 邀请者
     * @param rejectMember 拒绝加入者
     */
    value: function onWhiteboardRejectInvited(whiteboard, from, rejectMember) {}
  }, {
    key: "onWhiteboardInviteJoined",


    /**
     * 同意邀请加入时回调
     *
     * @param whiteboard 白板实体
     * @param from 邀请者
     * @param joinedMember 同意加入者
     */
    value: function onWhiteboardInviteJoined(whiteboard, from, joinedMember) {}
  }, {
    key: "onWhiteboardJoinFromOthers",


    /**
     * 通账号除加入设备之外的其他设备回调
     *
     * @param whiteboard 白板实体
     * @param from 申请者/邀请者
     * @param joinedMember 入会者
     */
    value: function onWhiteboardJoinFromOthers(whiteboard, from, joinedMember) {}
  }, {
    key: "onSlideUploading",


    /**
     * 幻灯片上传进度
     *
     * @param whiteboard
     * @param slide
     * @param processed
     * @param total
     */
    value: function onSlideUploading(whiteboard, slide, processed, total) {}
  }, {
    key: "onSlideUploadCompleted",


    /**
     * 幻灯片上传完成
     *
     * @param whiteboard
     * @param slide
     */
    value: function onSlideUploadCompleted(whiteboard, slide) {}
  }, {
    key: "onSlideUpdated",


    /**
     * 幻灯片上传
     *
     * @param whiteboard
     * @param slide
     */
    value: function onSlideUpdated(whiteboard, slide) {}
  }, {
    key: "onWhiteboardFailed",


    /**
     * 白板错误
     *
     * @param error
     */
    value: function onWhiteboardFailed(whiteboard, error) {}
  }, {
    key: "onFileShared",


    /**
     * 当文件被分享时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {WhiteboardFile} file - 被分享的白板文件对象。
     */
    value: function onFileShared(whiteboard, file) {}

    /**
     * 当白板内有幻灯片操作时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {SlideEntity} slide - 幻灯片实体。
     */

  }, {
    key: "onSlide",
    value: function onSlide(whiteboard, slide) {}

    /**
     * 当白板被清空时调用。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     */

  }, {
    key: "onCleanup",
    value: function onCleanup(whiteboard) {}

    /**
     * 有成员加入时回调
     *
     * @param whiteboard   白板实体
     * @param joinedMember 加入者
     */

  }, {
    key: "onWhiteboardJoined",
    value: function onWhiteboardJoined(whiteboard, joinedMember) {}

    /**
     * 有成员退出时回调
     *
     * @param whiteboard   白板实体
     * @param quitedMember 退出者
     */

  }, {
    key: "onWhiteboardQuited",
    value: function onWhiteboardQuited(whiteboard, quitedMember) {}
  }]);

  return WhiteboardListener;
}(CubeListener);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by dell on 2017/7/18.
 */

/**
 * 白板对象
 */
var Whiteboard = exports.Whiteboard = function (_CubeGroup) {
    _inherits(Whiteboard, _CubeGroup);

    /**
     * @constructor
     * @param {GroupType } type
     * @param {displayName} displayName
     * @param {Array<WhiteboardSlide>} 所有人分享的幻灯片数据集
     * */
    function Whiteboard(type, displayName) {
        var whiteboardSlides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var worker = arguments[3];

        _classCallCheck(this, Whiteboard);

        var _this = _possibleConstructorReturn(this, (Whiteboard.__proto__ || Object.getPrototypeOf(Whiteboard)).call(this, type, displayName));

        _this.whiteboardSlides = whiteboardSlides;
        _this.whiteboardId = _this.groupId;
        return _this;
    }

    /**
     * 解析白板对象
     * */


    _createClass(Whiteboard, null, [{
        key: 'parse',
        value: function parse(strJson) {
            if (null == strJson || (typeof strJson === 'undefined' ? 'undefined' : _typeof(strJson)) != 'object') {
                nucleus.getLogger().e('CubeWhiteboard#parse', 'Error of parameters');
            }
            var obj = new Whiteboard();
            for (var item in strJson) {
                if (obj.hasOwnProperty(item)) {
                    obj[item] = strJson[item];
                }
            }
            return obj;
        }
    }]);

    return Whiteboard;
}(CubeGroup);

/***/ })

/******/ });
//# sourceMappingURL=cube-whiteboard.js.map