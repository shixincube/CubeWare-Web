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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FileManagerServiceWorker = __webpack_require__(84);

var _FileManagerListener = __webpack_require__(46);

var _FileInfo = __webpack_require__(10);

var _FileType = __webpack_require__(18);

var _FilePermission = __webpack_require__(83);

var _FileStatusListener = __webpack_require__(82);

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
  global.CubeFileManagerServiceWorker = _FileManagerServiceWorker.FileManagerServiceWorker;
  global.CubeFileManagerListener = _FileManagerListener.FileManagerListener;
  global.CubeFileInfo = _FileInfo.FileInfo;
  global.CubeFileType = _FileType.FileType;
  global.CubeFilePermission = _FilePermission.FilePermission;
  global.CubeFileStatusListener = _FileStatusListener.FileStatusListener;
})(window);

/***/ }),

/***/ 123:
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
 * 文件管理服务接口
 *
 * @interface FileManagerService
 * @author Xu Jiangwei, Guan Yong
 */
var FileManagerService = exports.FileManagerService = function (_CubeService) {
  _inherits(FileManagerService, _CubeService);

  function FileManagerService() {
    _classCallCheck(this, FileManagerService);

    return _possibleConstructorReturn(this, (FileManagerService.__proto__ || Object.getPrototypeOf(FileManagerService)).apply(this, arguments));
  }

  _createClass(FileManagerService, [{
    key: "mkdir",


    /**
     * 创建目录
     * @param {string} dir 目录名称
     * @param {string} parentId 父目录id
     */
    value: function mkdir(dir, parentId) {}

    /**
     * 删除文件或目录（删除目录时同时清除旗下文件）
     *
     * @param {string} fileId 文件ID
     */

  }, {
    key: "deleteFile",
    value: function deleteFile(fileId) {}

    /**
     * 修改名称(文件/文件夹)
     *
     * @param {string} fileId
     * @param {string} newName
     */

  }, {
    key: "rename",
    value: function rename(fileId, newName) {}

    /**
     * 移动文件（移动文件或文件夹到别的文件夹下）
     *
     * @param {string} fileId 文件信息
     * @param {string} parentId 目标文件夹
     */

  }, {
    key: "move",
    value: function move(fileId, parentId) {}

    /**
     * 文件拷贝//开发中
     *
     * @param {string} fileId 文件id
     * @param {string} parentId 目标文件夹id
     */

  }, {
    key: "copy",
    value: function copy(fileId, parentId) {}

    /**
     * 获取当前目录下的文件列表信息（含目录）
     *
     * @param {string} fileId 文件id
     * @param {Function} callback 回调函数
     */

  }, {
    key: "list",
    value: function list(fileId, callback) {}
  }, {
    key: "queryByName",


    /**
     * 通过文件名查询文件查询文件
     *
     * @param {string} fileName 文件名
     * @param {Function} callback 回调函数
     */
    value: function queryByName(fileName, callback) {}
  }, {
    key: "queryById",


    /**
     * 通过文件Id查询文件查询文件
     *
     * @param {string} fileId 文件ID
     * @param {Function} callback 回调函数
     */
    value: function queryById(fileId, callback) {}
  }, {
    key: "upload",


    /**
     * 上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    value: function upload(file, parentId) {}
  }, {
    key: "pauseUpload",


    /**
     * 暂停上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    value: function pauseUpload(file, parentId) {}
  }, {
    key: "resumeUpload",


    /**
     * 恢复上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    value: function resumeUpload(file, parentId) {}
  }, {
    key: "cancelUpload",


    /**
     * 取消上传
     *
     * @param {string} fileId 文件id
     */
    value: function cancelUpload(fileId) {}
  }, {
    key: "download",


    /**
     * 下载文件
     *
     * @param {string} fileId 文件id
     */
    value: function download(fileId) {}
  }, {
    key: "pauseDownload",


    /**
     * 暂停下载文件
     *
     * @param {string} fileId 文件id
     */
    value: function pauseDownload(fileId) {}
  }, {
    key: "resumeDownload",


    /**
     * 恢复下载文件
     *
     * @param {string} fileId 文件id
     */
    value: function resumeDownload(fileId) {}
  }, {
    key: "cancelDownload",


    /**
     * 取消下载
     *
     * @param {string} fileId 文件id
     */
    value: function cancelDownload(fileId) {}
  }]);

  return FileManagerService;
}(CubeService);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBFileManagerService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DBFile = __webpack_require__(125);

var _FileInfo = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DBFileManagerService = exports.DBFileManagerService = function () {
    function DBFileManagerService(engine) {
        _classCallCheck(this, DBFileManagerService);

        this.engine = engine;
        this.dbm = null;
    }

    _createClass(DBFileManagerService, [{
        key: 'startup',
        value: function startup() {
            this.dbm = new CubeDBManager('CubeFileManagerDataBase');
            this.dbm.loadEntity(_DBFile.CubeDBFile);
            this.dbm.connect(function () {});
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            if (null != this.dbm) {
                this.dbm.disconnect(function () {});
            }
            this.dbm = null;
        }
    }, {
        key: 'storageFileInfo',
        value: function storageFileInfo(fileInfo) {
            var fi = _FileInfo.FileInfo.parse(fileInfo);
            var entity = new _DBFile.CubeDBFile(fi.fileId);
            entity = Object.assign(entity, fi);
            this.dbm.setEntity(entity, function (err) {});
        }
    }, {
        key: 'queryFileInfoByFileId',
        value: function queryFileInfoByFileId(fileId, callback) {
            var entity = new _DBFile.CubeDBFile(fileId);
            this.dbm.getEntity(entity, function (err, ret) {
                if (err) {
                    callback(err);
                } else {
                    if (null != ret) {
                        var fileInfo = _FileInfo.FileInfo.parse(ret);
                        callback(false, fileInfo);
                    } else {
                        callback(false, null);
                    }
                }
            });
        }
    }]);

    return DBFileManagerService;
}();

/***/ }),

/***/ 125:
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
 * @class CubeDBFile
 * @author Guan Yong
 */
var CubeDBFile = exports.CubeDBFile = function (_CubeDBEntity) {
    _inherits(CubeDBFile, _CubeDBEntity);

    function CubeDBFile(id, fileId, name, progress, size, type, md5, createTime, parentId, permission, url, expires, file) {
        _classCallCheck(this, CubeDBFile);

        var _this = _possibleConstructorReturn(this, (CubeDBFile.__proto__ || Object.getPrototypeOf(CubeDBFile)).call(this, id, 'CubeDBFile'));

        _this.fileId = fileId;
        _this.name = name;
        _this.progress = progress;
        _this.size = size;
        _this.type = type;
        _this.md5 = md5;
        _this.createTime = createTime;
        _this.parentId = parentId;
        _this.permission = permission;
        _this.url = url;
        _this.expires = expires;
        _this.file = file;
        return _this;
    }

    return CubeDBFile;
}(CubeDBEntity);

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

/***/ 46:
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
 * 文档管理监听器
 *
 * @interface CubeFileManagerListener
 * @author Xu Jiangwei, Guan Yong
 *
 */
var FileManagerListener = exports.FileManagerListener = function (_CubeListener) {
  _inherits(FileManagerListener, _CubeListener);

  function FileManagerListener() {
    _classCallCheck(this, FileManagerListener);

    return _possibleConstructorReturn(this, (FileManagerListener.__proto__ || Object.getPrototypeOf(FileManagerListener)).apply(this, arguments));
  }

  _createClass(FileManagerListener, [{
    key: "onFileAdded",

    /**
     * 文件/文件夹添加回调
     *
     * @param {FileInfo} file 添加的文件
     * @param {FileInfo} parent 文件的上级目录
     */
    value: function onFileAdded(file, parent) {}

    /**
     * 文件/文件夹删除回调
     *
     * @param {FileInfo} file 删除的文件
     * @param {FileInfo} parent 文件的上级目录
     */

  }, {
    key: "onFileDeleted",
    value: function onFileDeleted(file, parent) {}

    /**
     * 文件/文件夹更名回调
     *
     * @param {FileInfo} from 旧文件
     * @param {FileInfo} to 新文件
     */

  }, {
    key: "onFileRenamed",
    value: function onFileRenamed(from, to) {}

    /**
     * 文件/文件夹移动回调
     *
     * @param {FileInfo} from 旧文件
     * @param {FileInfo} to 新文件
     */

  }, {
    key: "onFileMoved",
    value: function onFileMoved(from, to) {}

    /**
     * 文件上传操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */

  }, {
    key: "onFileUploading",
    value: function onFileUploading(file, progress, total) {}

    /**
     * 文件上传暂停操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */

  }, {
    key: "onFilePaused",
    value: function onFilePaused(file, progress, total) {}

    /**
     * 文件开始上传
     *
     * @param {FileInfo} file 文件
     */

  }, {
    key: "onFileStart",
    value: function onFileStart(file) {}

    /**
     * 文件上传恢复操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */

  }, {
    key: "onFileResumed",
    value: function onFileResumed(file, progress, total) {}

    /**
     * 文件上传完成
     *
     * @param {FileInfo} file 完成的文件
     */

  }, {
    key: "onFileUploadCompleted",
    value: function onFileUploadCompleted(file) {}

    /**
     * 文件下载操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */

  }, {
    key: "onDownloading",
    value: function onDownloading(file, progress, total) {}

    /**
     * 文件下载完成
     *
     * @param {FileInfo} file
     */

  }, {
    key: "onDownloadCompleted",
    value: function onDownloadCompleted(file) {}

    /**
     * 文件操作错误
     *
     * @param {FileInfo} file
     * @param {CubeError} error
     */

  }, {
    key: "onFileManagerFailed",
    value: function onFileManagerFailed(file, error) {}
  }]);

  return FileManagerListener;
}(CubeListener);

/***/ }),

/***/ 82:
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
 * 文件状态监听器
 *
 * @interface FileStatusListener
 * @author Xu Jiangwei, Guan Yong
 *
 */
var FileStatusListener = exports.FileStatusListener = function (_CubeListener) {
  _inherits(FileStatusListener, _CubeListener);

  function FileStatusListener() {
    _classCallCheck(this, FileStatusListener);

    return _possibleConstructorReturn(this, (FileStatusListener.__proto__ || Object.getPrototypeOf(FileStatusListener)).apply(this, arguments));
  }

  _createClass(FileStatusListener, [{
    key: "onStarted",

    /**
     * 当文件开始上传时回调
     * @param file {FileInfo} - 开始上传的文件
     */
    value: function onStarted(file) {}

    /**
     * 当收到文件进度时回调
     * @param file {FileInfo} - 收到进度信息的文件
     * @param processed {Number} - 已完成的字节数
     * @param total {Number} - 文件总字节数
     */

  }, {
    key: "onProgress",
    value: function onProgress(file, processed, total) {}

    /**
     * 当文件上传完成时回调
     * @param file {FileInfo} - 上传完成的文件
     */

  }, {
    key: "onCompleted",
    value: function onCompleted(file) {}

    /**
     * 当文件取消上传时回调
     * @param file {FileInfo} - 取消上传的文件
     */

  }, {
    key: "onCanceled",
    value: function onCanceled(file) {}

    /**
     * 当文件暂停上传时回调
     * @param file {FileInfo} - 暂停上传的文件
     */

  }, {
    key: "onPause",
    value: function onPause(file) {}

    /**
     * 当文件失败时回调
     * @param error {Object} - 错误信息
     */

  }, {
    key: "onFail",
    value: function onFail(error) {}
  }]);

  return FileStatusListener;
}(CubeListener);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 文件权限枚举。
 *
 * @readonly
 * @enum {Number}
 * @author Xu Jiangwei, Guan Yong
 */
var FilePermission = exports.FilePermission = {
    /** 读取。 */
    READ: 1 << 0,

    /** 新建文件。 */
    NEW_FILE: 1 << 1,

    /** 新建目录。 */
    NEW_FOLDER: 1 << 2,

    /** 移动。 */
    MOVE: 1 << 3,

    /** 重命名。 */
    RENAME: 1 << 4,

    /** 删除。 */
    DELETE: 1 << 5,

    /** 下载。 */
    DOWNLOAD: 1 << 6,

    /** 分享。 */
    SHARE: 1 << 7
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FileManagerServiceWorker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FileManagerListener = __webpack_require__(46);

var _DBFileManagerService = __webpack_require__(124);

var _FileManagerService2 = __webpack_require__(123);

var _FileAction = __webpack_require__(11);

var _FileInfo = __webpack_require__(10);

var _CubeError = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 文件管理服务实现
 *
 * @class FileManagerServiceWorker
 * @author Xu Jiangwei, Guan Yong
 * @param engine {CubeEngine}
 */
var FileManagerServiceWorker = exports.FileManagerServiceWorker = function (_FileManagerService) {
    _inherits(FileManagerServiceWorker, _FileManagerService);

    function FileManagerServiceWorker(engine) {
        _classCallCheck(this, FileManagerServiceWorker);

        var _this = _possibleConstructorReturn(this, (FileManagerServiceWorker.__proto__ || Object.getPrototypeOf(FileManagerServiceWorker)).call(this, engine, _FileManagerListener.FileManagerListener));

        _this.queryHttp = engine.utils.isSecure ? _CUBE_HTTPS_STORAGE_SERVICE : _CUBE_HTTP_STORAGE_SERVICE;
        _this.createHttp = engine.utils.isSecure ? _CUBE_HTTPS_FILE_SERVICE : _CUBE_HTTP_FILE_SERVICE;
        _this.session = null;
        _this.server = new CubeRequest(_this.queryHttp);
        _this.uploadProcessFiles = new HashMap();
        _this.dbService = new _DBFileManagerService.DBFileManagerService(engine);
        return _this;
    }

    /**
     * 创建目录
     * @param {string} dir 目录名称
     * @param {string} parentId 父目录id
     */


    _createClass(FileManagerServiceWorker, [{
        key: 'mkdir',
        value: function mkdir(dir, parentId) {
            var _this2 = this;

            if (null == dir) {
                nucleus.getLogger().e('CubeFileManager#mkdir', 'dir is null');
                return false;
            }
            var postData = {
                name: dir,
                parentId: parentId,
                token: this.engine.accToken
            };

            this._sendPostHttp(_FileAction.FileAction.Mkdir, postData, function (err, data) {
                var f = data.data.fileInfo;
                var file = _FileInfo.FileInfo.parse(f);
                _this2.dbService.storageFileInfo(file);
                if (null == parentId) {
                    _this2.delegate.onFileAdded(file, null);
                } else {
                    _this2.queryById(parentId, function (data) {
                        var pf = data.data;
                        var parent = _FileInfo.FileInfo.parse(pf);
                        _this2.delegate.onFileAdded(file, parent);
                    });
                }
            });
        }

        /**
         * 删除文件或目录（删除目录时同时清除旗下文件）
         *
         * @param {string} fileId 文件ID
         */

    }, {
        key: 'deleteFile',
        value: function deleteFile(fileId) {
            var _this3 = this;

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#deleteFile', 'fileId is null');
                return false;
            }
            var fileIds = void 0;
            if (!fileId instanceof Array) {
                fileIds = [fileId];
            } else {
                fileIds = fileId;
            }
            fileIds = JSON.stringify(fileIds);
            var postData = {
                fileIds: fileIds,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.DeleteFiles, postData, function (err, data) {
                var fs = data.data.fileInfos;
                var fileInfos = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = fs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var f = _step.value;

                        fileInfos.push(_FileInfo.FileInfo.parse(f));
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

                _this3.delegate.onFileDeleted(fileInfos, null);
            });
        }

        /**
         * 上传文件
         *
         * @param {FileInfo} file 文件信息
         * @param {string} parentId 上级文件夹id
         */

    }, {
        key: 'upload',
        value: function upload(file, parentId) {
            var _this4 = this;

            if (null == file) {
                nucleus.getLogger().e('CubeFileManager#upload', 'file is null');
                return false;
            }
            var postData = {
                token: this.engine.accToken,
                name: file.name,
                parentId: parentId,
                permission: file.permission,
                md5: file.md5,
                size: file.size
            };

            this._sendPostHttp(_FileAction.FileAction.CreateUploadFile, postData, function (err, data) {
                var self = _this4;
                var fileInfo = data.data.fileInfo;
                fileInfo.file = file.file;
                //如果是秒传文件，则将上传文件置为空，否则大文件服务器关闭流会花和上传时间一样的时间
                var fileBlob = fileInfo.secondUpload ? new Blob() : file.file.slice(0, file.file.size);
                fileBlob.name = fileInfo.name;
                var fileData = {
                    token: _this4.engine.accToken,
                    fileId: fileInfo.fileId
                };
                // 正在上传中的文件
                _this4.uploadProcessFiles.put(fileInfo.fileId, {
                    file: fileInfo,
                    // 用来表示文件是否上传成功
                    completed: false,
                    // 用来表示文件是否暂停
                    paused: false,
                    // 用来表示文件是否正在取消
                    cancel: false
                });
                self.delegate.onFileStart(fileInfo);
                self.dbService.storageFileInfo(fileInfo);
                // 开始查询进度
                self._progressTask(fileInfo);
                self._fileUpload(fileBlob, fileData);
            }, this.createHttp);
        }

        /**
         * 修改名称(文件/文件夹)
         *
         * @param {string} fileId
         * @param {string} newName
         */

    }, {
        key: 'rename',
        value: function rename(fileId, newName) {
            var _this5 = this;

            if (null == fileId || null == newName) {
                nucleus.getLogger().e('CubeFileManager#rename', 'fileId or newName is null');
                return false;
            }
            var postData = {
                fileId: fileId,
                name: newName,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.RenameFile, postData, function (err, data) {
                var f = data.data.fileInfo;
                var newFile = _FileInfo.FileInfo.parse(f);
                _this5.dbService.storageFileInfo(newFile);
                _this5.queryById(fileId, function (data) {
                    _this5.delegate.onFileRenamed(data[0], newFile);
                });
            });
        }

        /**
         * 移动文件（移动文件或文件夹到别的文件夹下）
         *
         * @param {FileInfo} file 文件信息
         * @param {string} fileId 目标文件夹
         */

    }, {
        key: 'move',
        value: function move(fileId, parentId) {
            var _this6 = this;

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#move', 'fileId is null');
                return false;
            }
            var postData = {
                fileIds: this._toIds(fileId),
                parentId: parentId,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.MoveFile, postData, function (err, data) {
                var f = data.data.fileInfo;
                var newFile = _FileInfo.FileInfo.parse(f);
                if (null == newFile.parentId) {
                    _this6.delegate.onFileMoved(newFile, null);
                } else {
                    _this6.queryById(newFile.parentId, function (data) {
                        var pf = data.data;
                        var parent = _FileInfo.FileInfo.parse(pf);
                        _this6.delegate.onFileMoved(newFile, parent);
                    });
                }
            });
        }

        /**
         * 文件拷贝//开发中
         *
         * @param {string} fileId 文件id
         * @param {string} parentId 目标文件夹id
         */

    }, {
        key: 'copy',
        value: function copy(fileId, parentId) {
            var _this7 = this;

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#copy', 'fileId is null');
                return false;
            }
            var postData = {
                fileIds: this._toIds(fileId),
                parentId: parentId,
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.CopyFile, postData, function (err, data) {
                var d = data.data.fileInfo;
                var fileInfo = _FileInfo.FileInfo.parse(d);
                _this7.dbService.storageFileInfo(newFile);
                if (null == fileInfo.parentId) {
                    _this7.delegate.onFileAdded(fileInfo, null);
                } else {
                    _this7.queryById(fileInfo.parentId, function (data) {
                        var pf = data.data;
                        var parent = _FileInfo.FileInfo.parse(pf);
                        _this7.delegate.onFileAdded(fileInfo, parent);
                    });
                }
            });
        }

        /**
         * 获取当前目录下的文件列表信息（含目录）
         *
         * @param {string} fileId 文件id
         * @param {Function} callback 回调函数
         */

    }, {
        key: 'list',
        value: function list(fileId) {
            var _this8 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            var postData = {
                token: this.engine.accToken,
                parentId: fileId
            };
            this._sendPostHttp(_FileAction.FileAction.FileList, postData, function (err, data) {
                var list = data.data.fileInfos;
                if (null != list) {
                    for (var i = 0; i < list.length; i++) {
                        var f = list[i];
                        list[i] = _FileInfo.FileInfo.parse(f);
                        _this8.dbService.storageFileInfo(list[i]);
                    }
                }
                callback(list);
            });
        }
    }, {
        key: 'queryByName',


        /**
         * 通过文件名查询文件查询文件
         *
         * @param {string} fileName 文件名
         * @param {Function} callback 回调函数
         */
        value: function queryByName(fileName, callback) {
            var _this9 = this;

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#copy', 'fileId is null');
                return false;
            }
            var postData = {
                keyword: fileName,
                token: this.engine.accToken,
                offset: 0,
                limit: 10
            };
            this._sendPostHttp(_FileAction.FileAction.FileList, postData, function (err, data) {
                if (err) {
                    nucleus.getLogger().w("FileManagerService#queryByName", "queryByName failed! error code is " + err.status);
                    return false;
                }

                if (data.state == 200) {
                    var list = data.data.fileInfos;
                    if (null != list) {
                        for (var i = 0; i < list.length; i++) {
                            var f = list[i];
                            list[i] = _FileInfo.FileInfo.parse(f);
                            _this9.dbService.storageFileInfo(list[i]);
                        }
                    }
                    callback(list);
                } else {
                    nucleus.getLogger().w("FileManagerService#list", "queryByName failed! error code is " + data.state);
                }
            });
        }
    }, {
        key: 'queryById',


        /**
         * 通过文件Id查询文件查询文件
         *
         * @param {string} fileId 文件ID
         * @param {Function} callback 回调函数
         */
        value: function queryById(fileId) {
            var _this10 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#queryById', 'fileId is null');
                return false;
            }
            var postData = {
                fileIds: this._toIds(fileId),
                token: this.engine.accToken
            };
            this._sendPostHttp(_FileAction.FileAction.FileInfo, postData, function (err, data) {
                var fs = data.data.fileInfos;
                var fileInfos = [];
                var fileInfo = void 0;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = fs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var f = _step2.value;

                        fileInfo = _FileInfo.FileInfo.parse(f);
                        fileInfos.push(fileInfo);
                        _this10.dbService.storageFileInfo(fileInfo);
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

                callback(fileInfos, false);
            });
        }
    }, {
        key: 'pauseUpload',


        /**
         * 暂停上传文件
         *
         * @param {FileInfo} file 文件信息
         * @param {string} parentId 上级文件夹id
         */
        value: function pauseUpload(file, parentId) {
            if (null == file) {
                nucleus.getLogger().e('CubeFileManager#pauseUpload', 'file is null');
                return false;
            }
            var fileData = this.uploadProcessFiles.get(file.fileId);
            if (null == fileData || fileData.paused) {
                return false;
            }
            fileData.paused = true;

            var postData = {
                fileId: file.fileId,
                token: this.engine.accToken
            };

            this._sendPostHttp(_FileAction.FileAction.PauseFile, postData, function (err, data) {
                if (err || data.state.code != 200) {
                    fileData.paused = false;
                }
            }, this.createHttp);
        }
    }, {
        key: 'resumeUpload',


        /**
         * 恢复上传文件
         *
         * @param {FileInfo} file 文件信息
         * @param {string} parentId 上级文件夹id
         */
        value: function resumeUpload(file, parentId) {
            if (null == file) {
                nucleus.getLogger().e('CubeFileManager#resumeUpload', 'file is null');
                return false;
            }
            var fileData = this.uploadProcessFiles.get(file.fileId);
            fileData.paused = false;
            var fileInfo = fileData.file;
            var fileBlob = fileInfo.file.slice(fileInfo.progress, fileInfo.size);
            fileBlob.name = fileInfo.name;
            var postData = {
                fileId: file.fileId,
                token: this.engine.accToken
            };
            this._progressTask(fileInfo);

            this.delegate.onFileResumed(fileInfo, fileInfo.progress, fileInfo.size);
            this._fileUpload(fileBlob, postData);
        }
    }, {
        key: '_fileUpload',
        value: function _fileUpload(fileBlob, fileData) {
            var _this11 = this;

            var self = this;
            self._sendFile(_FileAction.FileAction.Uploader, {
                name: 'file',
                value: fileBlob
            }, fileData, function (err, data) {
                if (err) {
                    _this11.delegate.onFileManagerFailed(null, self._getCubeError(data.state));
                } else if (data.state.code != 200) {
                    var dataFile = null == data.data ? null : data.data.fileInfo;
                    _this11.delegate.onFileManagerFailed(dataFile, self._getCubeError(data.state));
                } else {
                    var uploadFile = data.data.fileInfo;
                    if (uploadFile.size == uploadFile.progress) {
                        _this11.uploadProcessFiles.remove(uploadFile.fileId);
                        self.delegate.onFileUploadCompleted(uploadFile);
                    } else {
                        var _fileData = _this11.uploadProcessFiles.get(uploadFile.fileId);
                        _fileData.file.progress = uploadFile.progress;
                        _this11.delegate.onFilePaused(uploadFile, uploadFile.progress, uploadFile.size);
                    }
                }
            }, this.createHttp);
        }

        /**
         * 取消上传
         *
         * @param {string} fileId 文件id
         */

    }, {
        key: 'cancelUpload',
        value: function cancelUpload(fileId) {
            var _this12 = this;

            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#cancelUpload', 'fileId is null');
                return false;
            }
            var fileData = this.uploadProcessFiles.get(fileId);
            //取消上传
            if (null != fileData && null != fileData.xhr) {
                fileData.xhr.abort();
                fileData.xhr.onreadystatechange = function () {
                    console.log('取消请求');
                    console.log(fileData.xhr.readyState);
                };
            }

            if (null == fileData || fileData.cancel) {
                return false;
            }
            fileData.cancel = true;

            var postData = {
                fileId: fileId,
                token: this.engine.accToken
            };

            this._sendPostHttp(_FileAction.FileAction.CancelFile, postData, function (err, data) {
                if (err || data.state.code != 200) {
                    fileData.cancel = false;
                } else {
                    console.log('取消成功');
                    var progressInfo = data.data.fileInfo;
                    _this12.uploadProcessFiles.remove(progressInfo.fileId);
                }
            }, this.createHttp);
        }
    }, {
        key: 'download',


        /**
         * 下载文件
         *
         * @param {string} fileId 文件id
         */
        value: function download(fileId) {
            if (null == fileId) {
                nucleus.getLogger().e('CubeFileManager#download', 'fileId is null');
                return false;
            }
            var self = this;
            this.queryById(fileId, function (file) {
                console.log('下载的文件', file);
                self._download(file[0]);
            });
        }
    }, {
        key: '_download',
        value: function _download(file) {
            var url = file.url;
            if (null == url) {
                return false;
            }
            var el = document.createElement('a');
            el.setAttribute('download', file.name);
            el.setAttribute('href', url);
            el.setAttribute('target', '_blank');
            el.style.display = 'none';
            document.body.appendChild(el);

            if (el.click) {
                el.click();
            } else {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                el.dispatchEvent(e);
            }

            document.body.removeChild(el);
        }
    }, {
        key: '_sendPostHttp',
        value: function _sendPostHttp(action, postData, callback) {
            var httpAddr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.queryHttp;

            var self = this;
            var actionData = {};
            for (var key in postData) {
                if (null != postData[key]) {
                    actionData[key] = postData[key];
                }
            }
            NucleusAjax.newRequest(httpAddr + action).method("POST").content(actionData).send(function (response) {
                self._httpCallBack(response, callback);
            });
        }
    }, {
        key: '_httpCallBack',
        value: function _httpCallBack(response, callback) {
            var self = this;
            var status = response.getStatus();
            var rd = void 0;
            try {
                rd = JSON.parse(response.getData());
            } catch (e) {
                rd = response.getData();
            }
            if (status === 200) {
                if (rd.state.code == 200) {
                    callback(false, rd);
                } else {
                    var fileInfo = null == rd.data ? null : rd.data.fileInfo;
                    this.delegate.onFileManagerFailed(fileInfo, self._getCubeError(rd.state));
                }
            } else {
                this.delegate.onFileManagerFailed(null, status);
            }
        }
    }, {
        key: '_getCubeError',
        value: function _getCubeError(state) {
            this.uploadProcessFiles.clear();
            return new _CubeError.CubeError(state.code, state.desc);
        }
    }, {
        key: 'onRegisterStateChanged',
        value: function onRegisterStateChanged(session) {
            this.session = session;

            if (this.engine.registered) {
                this.queryHttp = this.engine.utils.isSecure ? _CUBE_HTTPS_FILE_SERVICE : _CUBE_HTTP_FILE_SERVICE;
                this.createHttp = this.engine.utils.isSecure ? _CUBE_HTTPS_STORAGE_SERVICE : _CUBE_HTTP_STORAGE_SERVICE;
                this.server = new CubeRequest(_CUBE_SERVICE);
                this.dbService.startup();
            } else {
                this.server = null;
                this.dbService.shutdown();
            }
        }

        /**
         * 获得ID数组
         * */

    }, {
        key: '_toIds',
        value: function _toIds(id) {
            var fileIds = void 0;
            if (!(id instanceof Array)) {
                fileIds = [id];
            } else {
                fileIds = id;
            }
            fileIds = JSON.stringify(fileIds);
            return fileIds;
        }

        /**
         * 发送文件
         * @param action {String} - 接口地址
         * @param file {{name: {String}, value: {HTMLElement|Blob}} 需要发送的文件
         * @param data {Object} 需要发送的其它数据
         * @param callback {Function} 数据回调
         */

    }, {
        key: '_sendFile',
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
                this.uploadProcessFiles.get(data.fileId).xhr = xhr;
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
            }
        }

        /**
         * 进度查询
         * */

    }, {
        key: '_progressTask',
        value: function _progressTask(fileInfo) {
            var _this13 = this;

            var self = this;
            var progressTask = function progressTask() {
                var file = _this13.uploadProcessFiles.get(fileInfo.fileId);
                if (null != file && !file.completed && !file.paused) {
                    setTimeout(function () {
                        progressTask(fileInfo);
                    }, 500);

                    var postData = {
                        token: _this13.engine.accToken,
                        fileId: fileInfo.fileId
                    };
                    self._sendPostHttp(_FileAction.FileAction.ProgressFile, postData, function (nErr, nData) {
                        var progressInfo = nData.data.fileInfo;
                        self.delegate.onFileUploading(progressInfo, progressInfo.progress, progressInfo.size);
                    }, _this13.createHttp);
                }
            };
            // 两秒后开始查询进度
            setTimeout(function () {
                progressTask(fileInfo);
            }, 200);
        }
    }]);

    return FileManagerServiceWorker;
}(_FileManagerService2.FileManagerService);

/***/ })

/******/ });
//# sourceMappingURL=cube-file.js.map