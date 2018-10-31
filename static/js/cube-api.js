/*-----------------------------------------------------------
 *
 * 魔方引擎API解释文件 -- 只用于提示API调用参考 无需引用。
 * @author Xu Jiangwei, Guan Yong, Li Wenkai
 *
 *
 *--------------------------------------------------------- */

/**
 * 文档管理监听器
 *
 * @interface CubeFileManagerListener
 * @author Xu Jiangwei, Guan Yong
 *
 */
export class FileManagerListener extends CubeListener {
    /**
     * 文件/文件夹添加回调
     *
     * @param {FileInfo} file 添加的文件
     * @param {FileInfo} parent 文件的上级目录
     */
    onFileAdded(file, parent){}

    /**
     * 文件/文件夹删除回调
     *
     * @param {FileInfo} file 删除的文件
     * @param {FileInfo} parent 文件的上级目录
     */
    onFileDeleted(file, parent){}

    /**
     * 文件/文件夹更名回调
     *
     * @param {FileInfo} from 旧文件
     * @param {FileInfo} to 新文件
     */
     onFileRenamed(from, to){}

    /**
     * 文件/文件夹移动回调
     *
     * @param {FileInfo} from 旧文件
     * @param {FileInfo} to 新文件
     */
    onFileMoved(from, to){}

    /**
     * 文件上传操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */
    onFileUploading(file, progress, total){}

    /**
     * 文件上传暂停操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */
    onFilePaused(file, progress, total){}

    /**
     * 文件开始上传
     *
     * @param {FileInfo} file 文件
     */
    onFileStart(file){}

    /**
     * 文件上传恢复操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */
    onFileResumed(file, progress, total){}

    /**
     * 文件上传完成
     *
     * @param {FileInfo} file 完成的文件
     */
    onFileUploadCompleted(file){}

    /**
     * 文件下载操作进度
     *
     * @param {FileInfo} file 文件
     * @param {number} progress 当前
     * @param {number} total 总进度
     */
    onDownloading(file, progress, total){}

    /**
     * 文件下载完成
     *
     * @param {FileInfo} file
     */
    onDownloadCompleted(file){}

    /**
     * 文件操作错误
     *
     * @param {FileInfo} file
     * @param {CubeError} error
     */
    onFileManagerFailed(file, error){}
}/**
 * 文件管理服务接口
 *
 * @interface FileManagerService
 * @author Xu Jiangwei, Guan Yong
 */
export class FileManagerService extends CubeService{

    /**
     * 创建目录
     * @param {string} dir 目录名称
     * @param {string} parentId 父目录id
     */
    mkdir(dir, parentId){}

    /**
     * 删除文件或目录（删除目录时同时清除旗下文件）
     *
     * @param {string} fileId 文件ID
     */
    deleteFile(fileId){}

    /**
     * 修改名称(文件/文件夹)
     *
     * @param {string} fileId
     * @param {string} newName
     */
    rename(fileId, newName){}

    /**
     * 移动文件（移动文件或文件夹到别的文件夹下）
     *
     * @param {string} fileId 文件信息
     * @param {string} parentId 目标文件夹
     */
    move(fileId, parentId){}

    /**
     * 文件拷贝//开发中
     *
     * @param {string} fileId 文件id
     * @param {string} parentId 目标文件夹id
     */
    copy(fileId, parentId){}

    /**
     * 获取当前目录下的文件列表信息（含目录）
     *
     * @param {string} fileId 文件id
     * @param {Function} callback 回调函数
     */
    list(fileId, callback){};

    /**
     * 通过文件名查询文件查询文件
     *
     * @param {string} fileName 文件名
     * @param {Function} callback 回调函数
     */
    queryByName(fileName, callback){};

    /**
     * 通过文件Id查询文件查询文件
     *
     * @param {string} fileId 文件ID
     * @param {Function} callback 回调函数
     */
    queryById(fileId, callback){};

    /**
     * 上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    upload(file, parentId){};

    /**
     * 暂停上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    pauseUpload(file, parentId){};

    /**
     * 恢复上传文件
     *
     * @param {FileInfo} file 文件信息
     * @param {string} parentId 上级文件夹id
     */
    resumeUpload(file, parentId){};

    /**
     * 取消上传
     *
     * @param {string} fileId 文件id
     */
    cancelUpload(fileId){};

    /**
     * 下载文件
     *
     * @param {string} fileId 文件id
     */
    download(fileId){};

    /**
     * 暂停下载文件
     *
     * @param {string} fileId 文件id
     */
    pauseDownload(fileId){};

    /**
     * 恢复下载文件
     *
     * @param {string} fileId 文件id
     */
    resumeDownload(fileId){};

    /**
     * 取消下载
     *
     * @param {string} fileId 文件id
     */
    cancelDownload(fileId){};

}/**
 * 文件状态监听器
 *
 * @interface FileStatusListener
 * @author Xu Jiangwei, Guan Yong
 *
 */
export class FileStatusListener extends CubeListener{
    /**
     * 当文件开始上传时回调
     * @param file {FileInfo} - 开始上传的文件
     */
    onStarted(file) { }

    /**
     * 当收到文件进度时回调
     * @param file {FileInfo} - 收到进度信息的文件
     * @param processed {Number} - 已完成的字节数
     * @param total {Number} - 文件总字节数
     */
    onProgress(file, processed, total) { }

    /**
     * 当文件上传完成时回调
     * @param file {FileInfo} - 上传完成的文件
     */
    onCompleted(file) { }

    /**
     * 当文件取消上传时回调
     * @param file {FileInfo} - 取消上传的文件
     */
    onCanceled(file) { }

    /**
     * 当文件暂停上传时回调
     * @param file {FileInfo} - 暂停上传的文件
     */
    onPause(file) { }

    /**
     * 当文件失败时回调
     * @param error {Object} - 错误信息
     */
    onFail(error) { }
}/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {FileManagerServiceWorker} from './service/impl/FileManagerServiceWorker.js'
import {FileManagerListener} from './service/FileManagerListener.js'
import {FileInfo} from './service/entity/FileInfo.js'
import {FileType} from './service/entity/FileType.js'
import {FilePermission} from './service/entity/FilePermission.js'
import {FileStatusListener} from './service/FileStatusListener.js'

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeFileManagerServiceWorker = FileManagerServiceWorker;
    global.CubeFileManagerListener = FileManagerListener;
    global.CubeFileInfo = FileInfo;
    global.CubeFileType = FileType;
    global.CubeFilePermission = FilePermission;
    global.CubeFileStatusListener = FileStatusListener;
})(window);/**
 * 指令服务监听器
 *
 * @interface InstructionListener
 * @author Guan Yong
 *
 */
export class InstructionListener extends CubeListener {
    /**
	 * 接收指令
     * @param from {String}
     * @param instruction {CubeInstruction}
     */
    onInstructionRequested(from, instruction) { }

    /**
	 * 指令执行结果
     * @param result {InstructionRequestedResult} 指令
     */
    onInstructionResponded(result) { }

    /**
     * 当发生错误时被回调。
     *
     * @param {CubeStateCode} errorCode - 错误码。
     */
    onInstructionFailed(errorCode) { }
}/*
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
export class InstructionService extends CubeService{

    /**
     *  发送指令给用户
     *
     * @param Array<string> cubeIds - 用户cube号
     * @param Instruction instruction - 指令对象
     * */
    sendInstructionToUsers(cubeIds, instruction){}

    /**
     * 发送指令给群组
     *
     * @param Array<string> groupIds - 群组号
     * @param Instruction instruction - 指令对象
     * */
    sendInstructionToGroups(groupIds, instruction){}

    /**
     * 发送指令给设备
     *
     * @param Array<string> deviceIds - 设备号
     * @param Instruction instruction - 指令对象
     * */
    sendInstructionToDevices(deviceIds, instruction){}

    /**
     * 执行任务后发送执行结果的反馈
     *
     * @param {InstructionFeedback} feedback - 反馈结果对象
     * */
    sendFeedback(feedback){}

    /**
     * 查询最近的一条指令
     *
     * @param {function} callback - 查询后的回调
     */
    queryLastInstruction(callback){}

    /**************以下是2.X的方法****************/
    /**
     * 发送指令给特定设备或特定用户和群
     * @param target {DeviceInfo|String}
     * @param instruction {CubeInstruction}
     */
    exeInstruction(target, instruction) { }

    /**
     * 查询某个用户或群组的最后指令
     * @param target {String} 用户或群的CubeID
     * @param callback {QueryInstructionCallback} 查询回调
     */
    queryLastInstruction (target, callback) { }

    /**
     * This is a description of the callback
     * @callback QueryInstructionCallback
     * @param error {CubeError | null} - 是否发生错误
     * @param instruction {CubeInstruction} - 查询到的指令信息
     */
}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {InstructionServiceWorker} from './service/impl/InstructionServiceWorker.js'
import {InstructionListener} from './service/InstructionListener.js'
import {Instruction} from './service/entity/Instruction.js'
import {InstructionFeedback} from "./service/entity/InstructionFeedback";

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeInstructionServiceWorker = InstructionServiceWorker;
    global.CubeInstructionListener = InstructionListener;
    global.CubeInstruction = Instruction;
    global.CubeInstructionFeedBack = InstructionFeedback;
})(window);/**
 * 直播服务监听器
 *
 * @interface LiveListener
 * @author Guan Yong
 *
 */
export class LiveListener extends CubeListener {
    onLiveStarted(groupId, master) { }

    onLiveStopped(groupId, master) { }

    onLookerJoined(groupId, watchers) { }

    onLookerQuit(groupId, watchers) { }

    onFailed(err) { }
}/*
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
export class LiveService extends CubeService {
    /**
     * 开启直播
     * @param {String} groupId - 需要直播的群组号码
     * @param {String} liveName - 直播房间名称
     * @param {LiveMediaDevice} [device] - 需要使用的媒体设备
     * @param {Number} [type] - 直播类型 (可能的值: 0 - 默认, 1 - 带远程桌面的, 2 - 带白板的)
     */
    startRecord(groupId, liveName, device, type) { }

    /**
     * 关闭直播
     */
    stopRecord() { }

    /**
     * 获取直播信息
     * @param {String} groupId - 需要获取所在群组的直播信息
     * @returns {LiveInfo, null} - 直播信息
     */
    getLiveInfo(groupId) { }

    /**
     * 观看直播
     * @param {String} groupId - 需要观看的直播房间号
     * @returns {Boolean} - 返回操作是否正常进行
     */
    startWatch(groupId) { }

    /**
     * 停止观看当前直播
     * @param {String} groupId - 需要观看的直播房间号
     * @returns {Boolean} - 返回操作是否正常进行
     */
    stopWatch(groupId) { }

    /**
     * 获取媒体设备
     * @returns {{video: Array<String>, audio: Array<String>}}
     */
    getMediaDeviceList() { }

    /**
     * @typedef {Object} LiveMediaDevice
     * @property {String} video
     * @property {String} audio
     */
}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {LiveServiceWorker} from './service/impl/LiveServiceWorker.js'
import {LiveListener} from './service/LiveListener.js'

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeLiveServiceWorker = LiveServiceWorker;
    global.CubeLiveListener = LiveListener;
})(window);/*
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
export class MessageListener extends CubeListener {

    /**
     * 消息发送成功时回调。
     *
     * @param {MessageEntity} message
     */
    onMessageSent(messgae){}

    /**
     * 上传进度
     *
     * @param {MessageEntity} message
     * @param {Number} processed
     * @param {Number} total
     */
    onMessageUploading(message, progress, total){};

    /**
     * 上传完成
     * */
    onMessageUploadCompleted(message){}
    /**
     * 下载进度
     *
     * @param {MessageEntity} message
     * @param {Number} processed
     * @param {Number} total
     */
    onMessageDownloading(message, progress, total){};

    /**
     * 消息数据下载完成
     *
     * @param {MessageEntity} message
     * */
    onMessageDownloadCompleted(message){}

    /**
     * 消息撤回成功时回调
     *
     * @param {MessageEntity} message
     * */
    onMessageRecalled(message){}

    /**
     * 收到消息时的回调
     *
     * @param {MessageEntity} message
     * */
    onMessageReceived(message){}

    /**
     * 当消息被取消时回调
     *
     * @param {MessageEntity} message
     * */
    onMessageCanceled(message){}

    /**
     * 消息暂停
     *
     * @param {MessageEntity} message
     * */
    onMessagePaused(message){}

    /**
     * 消息恢复
     *
     * @param {MessageEntity} message
     * */
    onMessageResumed(message){}

    /**
     * 开始同步消息
     */
    onMessageSyncBegin() {}

    /**
     * 同步未拉取消息
     *
     * @param {Array} messageMap cube对应消息实体数组
     */
    onMessagesSyncing(messageMap) {}

    /**
     * 结束同步消息
     *
     */
    onMessageSyncEnd() {}

    /**
     * 当消息发生错误时被回调。
     *
     * @param {StateCode} errorCode - 错误码。
     * @param {MessageEntity} [message] - 发生错误时的消息对象。
     */
    onMessageFailed(errorCode, message) {}
}/*
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
export class MessageService extends CubeService {
    /**
     * 发送消息。
     *
     * @param {String, MessageEntity, FileMessage} mix - 指定需要接收消息的 Cube 号，或者待发送的消息对象。
     * @param {String, MessageEntity, FileMessage} [content] - 指定消息内容。
     * @returns {boolean} 如果发送请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    sendMessage(mix, content) { }

    /**
     * @param {Number} sn - 指定需要重发消息的SN, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * */
    reSendMessage(sn){}

    /**
     * 转发消息。
     *
     * @param {Array.<String>} sns - 指定需要转发消息的SN数组, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * @param {Array.<String>} cubeIds - 指定消息转发目标数组。
     * @returns {boolean} 如果转发请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    sendHistoryMessage(cubeIds, sns) { }

    /**
     * 撤回消息。
     *
     * @param {Number} sn - 指定需要撤回消息的SN, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
     * @returns {boolean} 如果撤回请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    recallMessage(sn) { }

    /**
     * 取消发送消息。
     *
     * @param {MessageEntity} message - 指定需要取消发送的消息对象。
     * @returns {boolean} 如果取消请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    cancelMessage (message) { }

    /**
     * 暂停上传
     *
     * @param sn 暂停sn
     */
    pauseMessage (sn,callback){}

    /**
     * 恢复
     *
     * @param sn
     * @TODO 验证中
     */
    resumeMessage(sn){}

    /**
     * 回复消息
     *
     * @param {Number} sn 原始消息sn
     * @param {MessageEntity} 回复消息内容
     */
    replyMessage(sn, reply){}

    /**
     * 删除消息
     *
     * @param sn
     */
    deleteMessage(sn){}

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
    queryHistoryMessage(cubeId, sinceTimestamp, untilTimestamp, offset, conut, cubeCallback){}

    /**
     * 反序列化消息数据
     *
     * @param {object} json
     * @return {MessageEntity}
     * */
    parseMessage(json){}

    /**
     *  存储消息
     *
     *  @param {MessageEntity} message
     * */
    saveMessage(message){}

    /**
     * 同步未拉取消息
     *
     * @TODO 验证中
     */
    syncMessages (){}

    /************ 以下是2.X版本的方法 **********/
    /**
     * 消息置顶。
     *
     * @param {String} cube - 操作是否置顶cube号。
     * @param {Boolean} isTop - 是否置顶。
     * @returns {Function} 置顶操作成功函数。
     */
    setTop(cube, isTop, callback){ }

}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {MessageServiceWorker} from './service/impl/MessageServiceWorker.js'
import {MessageListener} from './service/MessageListener.js'
import {ImageMessage} from './service/entity/message/file/ImageMessage.js'
import {VideoMessage} from './service/entity/message/file/VideoMessage.js'
import {VoiceMessage} from './service/entity/message/file/VoiceMessage.js'
import {CardMessage} from './service/entity/message/CardMessage.js'
import {CustomMessage} from './service/entity/message/CustomMessage.js'
import {FileMessage} from './service/entity/message/FileMessage.js'
import {TextMessage} from './service/entity/message/TextMessage.js'
import {ReplyMessage} from './service/entity/message/ReplyMessage.js'
import {WhiteboardMessage} from './service/entity/message/WhiteboardMessage.js'
import {HistoryMessage} from './service/entity/message/HistoryMessage.js'
import {RichContentMessage} from './service/entity/message/RichContentMessage.js'
import {LocationMessage} from './service/entity/message/LocationMessage.js'

import {MessageType} from './service/entity/MessageType.js'
import {ReceiptMessage} from "./service/entity/message/ReceiptMessage";



/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeMessageServiceWorker = MessageServiceWorker;
    global.CubeMessageListener = MessageListener;
    
    global.CubeImageMessage = ImageMessage;
    global.CubeVideoMessage = VideoMessage;
    global.CubeVoiceMessage = VoiceMessage;
    global.CubeCardMessage = CardMessage;
    global.CubeCustomMessage = CustomMessage;
    global.CubeFileMessage = FileMessage;
    global.CubeTextMessage = TextMessage;
    global.CubeReplyMessage = ReplyMessage;
    global.CubeHistoryMessage = HistoryMessage;
    global.CubeWhiteboardMessage = WhiteboardMessage;
    global.CubeRichContentMessage = RichContentMessage;
    global.CubeLocationMessage = LocationMessage;
    global.CubeReceiptMessage = ReceiptMessage;
    global.CubeMessageType = MessageType;
})(window);/**
 * 分享桌面服务监听器
 *
 * @interface ShareDesktopListener
 * @author Li wenkai
 *
 */
export class ShareDesktopListener extends CubeListener {
    /**
     * 当桌面创建时回调
     * @param {sd} 共享消息实体
     * @param {user} fromUser 创建者user实体
     */
    onShareDesktopCreated(sd,fromUser) {
    }

    /**
     * 当连接上桌面共享时回调
     * @param src {String} 共享者CubeID
     * @param target {String} 成功连接的目标用户CubeID
     */
    onShareDesktopConnectShare(src, target) {
    }

    /**
     * 通账号除加入设备之外的其他设备回调
     *
     * @param sd   远程桌面实体
     * @param joinedMember 加入者
     */
    onShareDesktopJoined(sd, joinedMember) {
    }

    /**
     * 当桌面共享销毁时回调
     * @param {sd} 共享消息实体
     * @param {user} fromUser 邀请者user实体
     */
    onShareDesktopDestroyed(sd,fromUser) {}

    /**
     * 当离开桌面共享时回调
     * @param {sd} 共享桌面消息实体
     * @param {user} fromUser 离开者user实体
     */
    onShareDesktopQuitd(sd,fromUser) {
    }

    /**
     * 收到邀请回调(仅邀请者自己和被邀请者回调)
     *
     * @param {shareDesktop} shareDesktop 共享桌面对象实例
     *  @param {user} fromUser 邀请者user实体
     */
    onShareDesktopInvited(shareDesktop, fromUser) {
    }

    /**
     * 同意邀请加入时回调
     *
     * @param{shareDesktop} ShareDesktop 共享桌面对象实例
     * @param {user} fromUser 同意者user实体
     * @param {user} joinedMembers 加入者user实体
     */
    onShareDesktopInviteJoined(ShareDesktop,fromUser, joinedMember){
    }

    /**
     * 当拒绝共享桌面时回调
     * @param {shareDesktop} shareDesktop 共享桌面对象实例
     * @param {user} fromUser 邀请者user实体
     * @param {user} rejectMember 拒绝者user实体
     */
    onShareDesktopRejectInvited(rejectCubeId, fromUser , rejectMember) {
    }

    /**
     * 共享桌面出错回调
     * @param error {CubeError} 错误信息
     */
    onShareDesktopFailed(error) {
    }
}/*
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
export class ShareDesktopService extends CubeService {
    /**
     * 创建共享桌面
     *
     * @param {String} config  共享桌面配置对象
     */
    create(config){ }

    /**
     * 加入共享桌面
     *
     * @param {String} desktopId   共享桌面Id
     */
    join(desktopId) {}


    /**
     * 邀请加入共享桌面
     *
     * @param {String} desktopId   共享桌面Id
     * @param {String|Array<String>} cubeIds - 需要邀请的成员的 Cube 号数组
     */
    invite(desktopId,cubeIds){}

    /**
     * 接受邀请
     *
     * @param {string} desktopId
     * @param {string} 邀请者ID
     */
    acceptInvite(desktopId, cubeId) {}

    /**
     * 拒绝邀请
     *
     * @param {String} desktopId   桌面桌面Id
     * @param {string} 邀请者ID
     */
    rejectInvite(desktopId,cubeId){}

    /**
     * 销毁分享
     *
     * @param {String} desktopId  共享桌面ID
     */
    destroy(desktopId) {}

    /**
     * 离开共享桌面
     *
     * @param {String} desktopId 共享桌面ID
     */
    quit(desktopId) {}

    /**
     * 查询共享桌面
     *
     * @param  {Array} desktopIds 共享桌面bindGroupId
     * @param {function} callback
     */
    queryRemoteDesktop(desktopIds, callback){}

    /**
     *  分页同步当前账号下所有共享桌面
     *  @param {number} offset
     *  @param {number} limit
     * */
    syncShareDesktop(offset, limit) {}

}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {ShareDesktopServiceWorker} from './service/impl/ShareDesktopServiceWorker.js'
import {ShareDesktopListener} from './service/ShareDesktopListener.js'
import {ShareDesktopConfig} from './service/entity/ShareDesktopConfig.js'
import {ShareDesktopMember} from './service/entity/ShareDesktopMember.js'

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeShareDesktopMember = ShareDesktopMember;
    global.CubeShareDesktopConfig = ShareDesktopConfig;

    global.CubeShareDesktopServiceWorker = ShareDesktopServiceWorker;
    global.CubeShareDesktopListener = ShareDesktopListener;
})(window);/*
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
export class CallListener extends CubeListener {
    /**
     * 当发起新呼叫或者收到呼叫时被回调。
     *
     * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
     * @param {Session} session - 当前引擎的会话。
     * @param {boolean} video - 是否启用了视频呼叫。
     * */
    onCall(direction, session, video) { }

    /**
     * 当正在发起呼叫或收到呼叫时被呼叫的回调。
     *
     * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
     * @param {Session} session - 当前引擎的会话。
     * @param {boolean} video - 是否启用了视频呼叫。
     */
    onNewCall(direction, session, video) { }

    /**
     * 当呼叫正在处理时被回调。
	 *
     * @param {Session} session 呼叫会话
     */
    onInProgress(session) { }

    /**
     * 当对方振铃时被回调。
	 *
     * @param {Session} session - 当前引擎的会话。
     */
    onCallRinging(session) { }

    /**
     * 当呼叫已经接通时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     */
    onCallConnected(session) { }

	onCallHold(session) { }

    /**
     * 当呼叫结束时被回调。
	 *
     * @param {Session} session - 当前引擎的会话。
     * @param {String} action - 结束方式。
     */
    onCallEnded(session, action) { }

    /**
     * 当呼叫发生错误时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     * @param {StateCode} errorCode - 错误码。
     */
    onCallFailed(session, errorCode) { }

    /**
     * 呼叫反转
     * @param session
     */
    onReverseCall(session) { }
}/*
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
export class CallService extends CubeService {
    /**
     * 设置是否自动应答。
	 * <p>
     * 当使用自动应答时，用户同意浏览器调用设备摄像头和麦克风之后，引擎会自动调用 <code>answerCall()</code> 进行应答。
     * 也就是说当自动应答被激活后，引擎始终同意任何端的通话邀请。
	 * </p>
     *
     * @param {boolean} autoAnswer - 指定是否启用自动应答。
     */
    setAutoAnswer(autoAnswer) { }

    /**
     * 应当并接听通话邀请。
	 *
	 * @returns {boolean} 如果应答请求发送成功则返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    answerCall() { }

    /**
     * 发起通话邀请。
	 *
     * @param {String} callee - 被叫方 Cube 号。
     * @param {Boolean|String} video - 是否启用视频或指定一个视频设备ID。
	 * @param {Function} [callback] - 呼叫回调
     * @returns {Boolean} 如果通话请求发送成功则返回 <code>true</code>，否则返回 <code>false</code> 。
     */
    makeCall(callee, video, callback) {  }

    /**
     * 挂断通话。
	 *
     */
    terminateCall() { }

	/**
	 *
	 */
	reply(target, timeout, callback) { }

    /**
	 * 切换媒体设备
     * @param deviceId {String}
     */
	changeMediaDevice (deviceId) { }
}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {CallServiceWorker} from './service/impl/CallServiceWorker.js'
import {CallListener} from './service/CallListener.js'
import {CallDirection} from './service/dep/CallDirection.js'
import {SignalingState} from './service/dep/SignalingState.js'
import {VideoSize} from './media/VideoSize.js'
import {MediaProbe} from './media/MediaProbe.js'
import {MediaServiceWorker} from './media/impl/MediaServiceWorker.js'
import * as adapter from './lib/adapter.js'
import {Call} from './service/entity/Call.js'
import {CallSession} from './service/entity/CallSession.js'

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
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
        let s = document.createElement("script");
        s.setAttribute("src", "http://" + _CUBE_DOMAIN + "/libs/adapter-min.js");
        s.onload = function(e) {
            AdapterJS.webRTCReady(function(isUsingPlugin) {
                nucleus.getLogger().d("CubeEngine", "WebRTC Plugin Ready!");
            });
        };
        document.body.appendChild(s);
    }

    window.getScreenId = function(callback, custom_parameter) {
        if(navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)) {
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

        if(!custom_parameter) {
            setTimeout(postGetSourceIdMessage, 100);
        }
        else {
            setTimeout(function() {
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

        if(!!canRequestAudioTrack) {
            screen_constraints.audio = {
                mandatory: {
                    chromeMediaSource: error ? 'screen' : 'desktop',
                    // echoCancellation: true
                },
                optional: []
            };
        }

        if (sourceId) {
            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;

            if(screen_constraints.audio && screen_constraints.audio.mandatory) {
                screen_constraints.audio.mandatory.chromeMediaSourceId = sourceId;
            }
        }

        return screen_constraints;
    }

    function postGetSourceIdMessage(custom_parameter) {
        if (!iframe) {
            loadIFrame(function() {
                postGetSourceIdMessage(custom_parameter);
            });
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(function() {
                postGetSourceIdMessage(custom_parameter);
            }, 100);
            return;
        }

        if(!custom_parameter) {
            iframe.contentWindow.postMessage({
                captureSourceId: true
            }, '*');
        }
        else if(!!custom_parameter.forEach) {
            iframe.contentWindow.postMessage({
                captureCustomSourceId: custom_parameter
            }, '*');
        }
        else {
            iframe.contentWindow.postMessage({
                captureSourceIdWithAudio: true
            }, '*');
        }
    }

    var iframe;

    // this function is used in RTCMultiConnection v3
    window.getScreenConstraints = function(callback) {
        loadIFrame(function() {
            getScreenId(function(error, sourceId, screen_constraints) {
                if(!screen_constraints) {
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
        iframe.onload = function() {
            iframe.isLoaded = true;

            loadCallback();
        };
        iframe.src = 'https://www.webrtc-experiment.com/getSourceId/'; // https://wwww.yourdomain.com/getScreenId.html
        iframe.style.display = 'none';
        (document.body || document.documentElement).appendChild(iframe);
    }

    window.getChromeExtensionStatus = function(callback) {
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
    global.CubeCallServiceWorker = CallServiceWorker;
    global.CubeCallListener = CallListener;
    global.CubeCallDirection = CallDirection;
    global.CubeSignalingState = SignalingState;
    global.CubeVideoSize = VideoSize;
    global.CubeMediaProbe = MediaProbe;
    global.CubeMediaServiceWorker = MediaServiceWorker;
    global.webrtcAdapter = adapter;
    global.CubeCall = Call;
    global.CubeCallSession = CallSession;

})(window);/*
 * ConferenceListener.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * @typedef {Object} CubeConferenceMemberStatus
 * @property {boolean} joined - 是否已经加入会议。
 * @property {boolean} videoEnabled - 是否使用视频参会。
 * @property {boolean} hasFloor - 是否是当前发言人/主讲人。
 * @property {boolean} canSpeak - 是否可在会议中发言。
 * @property {boolean} canHear - 是否可在会议中听到他人发言。
 * @property {boolean} canWatch - 是否可以在会议中被他人看到。
 * @property {boolean} kicked - 是否被踢出会议。
 * @property {Number} joinTime - 本次加入会议的时间戳。
 * @property {Number} quitTime - 本次退出会议的时间戳。
 */
/**
 * @typedef {Object} CubeConference
 * @property {String} group - 会议所属群组的 Cube 号。
 * @property {String} id - 会议的 ID 。
 * @property {String} founder - 会议创建人。
 * @property {Array.<String>} presenters - 会议主持人列表。
 * @property {Number} created - 会议的创建时间戳。
 * @property {Number} expired - 会议的有效时长，单位：秒。
 * @property {Number} closed - 会议的关闭时间戳。
 * @property {boolean} hasGuest - 会议成员里是否有访客。
 * @property {Object.<String, CubeConferenceMemberStatus>} status - 所有会议成员的状态映射。
 */
/**
 * 会议监听器接口。
 *
 * @interface ConferenceListener
 * @author Xu Jiangwei, Guan Yong
 */
export class ConferenceListener extends CubeListener {
    /**
     * 错误回调
     *
     * @param {Conference} conference
     * @param {CubeError} error
     */
    onConferenceFailed(conference, error){}

    /**
     * 当创建会议成功时回调
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     */
    onConferenceCreated(conference, from){}

    /**
     * 同账号在其他设备创建会议成功时回调
     *
     * @param conference 会议实体
     * @param from       会议创建者
     */
    onConferenceCreatedOther(conference, from){}

    /**
     * 当会议销毁时回调
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     */
    onConferenceDestroyed(conference, from){}

    /**
     * 同账号在其他设备销毁会议时回调
     *
     * @param conference 会议实体
     * @param from       会议销毁者（默认为创建者）
     */
    onConferenceDestroyedOther(conference, from){}

    /**
     * 有人申请入会时回调，仅群主和管理员（主持人）收到申请回调
     *
     * @param {Conference} conference 会议实体
     * @param {CubeUser} applier 申请者
     */
    onConferenceApplied(conference, applier){}

    /**
     * 拒绝申请者入会回调（仅申请者和拒绝者收到）
     *
     * @param {Conference} conference 会议实体
     * @param {CubeUser} from 拒绝者
     * @param {CubeUser} applier 申请者
     */
    onConferenceRejectApplied(conference, from, applier){}

    /**
     * 同意申请者加入时回调
     *
     * @param {Conference} conference 会议实体
     * @param {CubeUser} from 同意者
     * @param {CubeUser} applier 申请者
     */
    onConferenceApplyJoined(conference, from, applier){}

    /**
     * 会议音频启用禁用回调
     *
     * @param {Conference} conference
     * @param {boolean} enable
     */
    onAudioEnable(conference, enable){}

    /**
     * 会议视频启用禁用回调
     *
     * @param {Conference} conference
     * * @param {boolean} enable
     */
    onVideoEnable(conference, enable){}

    /**
     * 收到邀请回调(仅邀请者自己和被邀请者回调)
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     * @param {Array<CuberUser>} inviters
     */
    onConferenceInvited(conference, from, inviters){}

    /**
     * 同账号在其他设备发起邀请
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     * @param {Array<CuberUser>} inviters
     */
    onConferenceInvitedOther(conference, from, inviters){}

    /**
     * 同意邀请加入时回调
     *
     * @param {Conference} conference
     * @param {CubeUser} from 同意者
     * @param {CubeUser} joinedMember 加入者
     */
    onConferenceAcceptInvited(conference, from, joinedMember){}

    /**
     * 同账号在其他设备同意邀请
     *
     * @param conference   会议实体
     * @param from         邀请者
     * @param joinedMember 同意加入者
     */
    onConferenceAcceptInvitedOther(conference, from, joinedMember){}

    /**
     * 拒绝邀请入群回调
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     * @param {CubeUser} rejectMember
     */
    onConferenceRejectInvited(conference, from, rejectMember){}

    /**
     * 同账号在其他设备拒绝邀请
     *
     * @param conference   会议实体
     * @param from         邀请者
     * @param rejectMember 拒绝加入者
     */
    onConferenceRejectInvitedOther(conference, from, rejectMember){}

    /**
     * 通知账号除加入设备之外的其他设备回调
     *
     * @param {Conference} conference 会议实体
     * @param {CubeUser} from 申请者/邀请者
     * @param {CubeUser} joinedMember 入会者
     */
    onConferenceJoinFromOthers(conference, from, joinedMember){}

    /**
     * 会议成员状态改变
     *
     * @param {Conference} conference
     * @param {Array<ConferenceControl>} list
     */
    onConferenceUpdated(conference, list){}

    /**
     * 退出时回调
     *
     * @param {Conference} conference
     * @param {CubeUser} quitMember 退出者
     */
    onConferenceQuited(conference, quitMember){}

    /**
     * 同账号在其他设备退出会议
     *
     * @param conference 会议实体
     * @param quitMember 退出者
     */
    onConferenceQuitedOther(conference, quitMember){}

    /**
     * 加入会议
     *
     * @param {Conference} conference
     * @param {CubeUser} from
     * */
    onConferenceJoined(conference, from){}

    /**
     * 同账号在其他设备加入会议
     *
     * @param conference   会议实体
     * @param joinedMember 入会者
     */
    onConferenceJoinedOther(conference, from){}

    /**
     * 当自己加入会议,会议音视频流连接成功时回调
     * @param {Conference} conference 会议对象实例
     */
    onConferenceConnected(conference) { }

    /**
     * 当sip监听end时发生。
     *
     * @param {Conference} conference - 会控动作
     */
    onConferenceSipEnd(conference) { }

    /**
     * 会议音视频流连接失败
     * @param {Conference} conference 会议对象实例
     */
    onConferenceCallDisConnected(){}
}
/*
 * ConferenceService.js
 * Cube Engine
 * 
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */
/**
 * 会控指令操作回调。
 *
 * @callback ConferenceCallback
 * @param {CubeStateCode} state - 操作状态码。
 * @param {CubeConference} [conference] - 会议数据。
 * @param {String} [cmd] - 当前操作的会控指令。
 */

/**
 * 会议服务接口。
 *
 * @interface ConferenceService
 * @author Xu Jiangwei, Guan Yong
 */
export class ConferenceService extends CubeService {

    /**
     * 创建会议
     *
     * @param {ConferenceConfig} conferenceConfig 会议配置对象
     */
    create(conferenceConfig){}

    /**
     * 销毁会议
     *
     * @param {string} conferenceId 会议Id
     */
    destory(conferenceId){}

    /**
     * 申请加入会议
     *
     * @param {string} conferenceId
     */
    applyJoin(conferenceId){}

    /**
     * 退出会议
     *
     * @param {string} conferenceId
     */
    quit(conferenceId){}

    /**
     * 拒绝申请
     *
     * @param {string} conferenceId 会议Id
     * @param {string} cubeId 申请者ID
     */
    rejectApply(conferenceId, cubeId){}

    /**
     * 同意申请
     *
     * @param {string} conferenceId 会议Id
     * @param {string} cubeId 申请者ID
     */
    acceptApply(conferenceId, cubeId){}

    /**
     * 邀请会议成员
     *
     * @param {string} conferenceId
     * @param {Array<string>} members
     */
    inviteMembers(conferenceId, members){}

    /**
     * 拒绝邀请
     *
     * @param {string} conferenceId
     * @param {string} cubeId 邀请者ID
     */
    rejectInvite(conferenceId, cubeId){}

    /**
     * 接受邀请
     *
     * @param {string} conferenceId
     * @param {string} cubeId 邀请者ID
     */
    acceptInvite(conferenceId, cubeId){}

    /**
     * 打开或关闭音频，如果此前已经视频呼入，则关闭视频
     *
     * @param {String} conferenceId 会议ID
	 * @param {boolean} enable 是否开启
     */
    setAudioEnabled(conferenceId, enable) {}

    /**
     * 打开或关闭视频，如果此前已经音频呼入，则断开重呼
     *
     * @param {String} conferenceId 会议ID
     * @param {boolean} enable 是否开启
     */
    setVideoEnabled(conferenceId, enable) {}

    /**
     * 添加主持人（必须先入会）
     *
     * @param {string} conferenceId 会议ID
     * @param {string} cubeId 被控人员ID
     *
     * @return
     */
    addPresenter(conferenceId, cubeId){};

    /**
     * 删除主持人（必须先入会）
     *
     * @param {string} conferenceId 会议ID
     * @param {string} cubeId 被控人员ID
     *
     * @return
     */
    removePresenter(conferenceId, cubeId){}

    /**
     * 切换主讲人
     *
     * @param {String} conferenceId 会议ID
     * @param {String} cubeId 用户ID
     * @param {ConferenceCallback} callback 操作应答回调
     */
    changeSpeaker(conferenceId, cubeId, callback) {}

    /**
     * 控听
     *
     * @param {String} conferenceId 会议ID
     * @param {String} cubeId 用户ID
     * @param {boolean} deaf
     * @param {ConferenceCallback} callback 操作应答回调
     */
    setMemberDeaf(conferenceId, cubeId, deaf, callback){}

    /**
     * 控言
     *
     * @param {String} conferenceId 会议ID
     * @param {String} cubeId 用户ID
     * @param {boolean} mute
     * @param {ConferenceCallback} callback 操作应答回调
     */
    setMemberMute(conferenceId, cubeId, mute, callback){}

    /**
     * 控视
     *
     * @param {conferenceId} conferenceId
     * @param {String} cubeId
     * @param {boolean} watch
     * @param {ConferenceCallback} callback 操作应答回调
     */
    setMemberWatch(conferenceId, cubeId, watch, callback){};


    /**
     * 控人
     *
     * @param {String} conferenceId
     * @param {String} cubeId
     * @param {ConferenceCallback} callback 操作应答回调
     */
    kickMember(conferenceId, cubeId, callback){}

    /**
     * 是否为会议
     *
     * @param {String} strJson
     * @return {boolean}
     */
    isConference(strJson){}

    /**
     * 解析会议
     *
     * @param {String}  strJson
     * @param {ConferenceCallback} callback 操作应答回调
     */
	parse(strJson, callback){}

	/**
    * 获取会议成员静态帧
    *
    * @param {String} conferenceId
    * @param {String} cubeId
    * @param {boolean} quality
	* @return {String}
    */
    getCapturedCameraImages(conferenceId, cubeId, quality){}

	/**
	* 获取本地视频通话画面。
	*
	* @return {HTMLDocument}
     */
	getLocalView(){}

	/**
	* 获取远端视频通话画面。
	*
	* @return {HTMLDocument}
	*/
	getRemoteView(){}

}
/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

import {SIPServiceWorker} from './service/impl/SIPServiceWorker.js'
import {ConferenceListener} from './conference/service/ConferenceListener.js'
import {ConferenceType} from './conference/service/entity/ConferenceType.js'
import {ConferenceServiceWorker} from './conference/service/impl/ConferenceServiceWorker.js'
import {ConferenceConfig} from './conference/service/entity/ConferenceConfig.js'

/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    // 提供全局的接口类
    global.CubeSIPServiceWorker = SIPServiceWorker;
    global.CubeConferenceServiceWorker = ConferenceServiceWorker;
    global.CubeConferenceListener = ConferenceListener;
    global.CubeConferenceType = ConferenceType;
    global.CubeConferenceConfig = ConferenceConfig;


    window.getScreenId = function(callback, custom_parameter) {
        if(navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)) {
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

        if(!custom_parameter) {
            setTimeout(postGetSourceIdMessage, 100);
        }
        else {
            setTimeout(function() {
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

        if(!!canRequestAudioTrack) {
            screen_constraints.audio = {
                mandatory: {
                    chromeMediaSource: error ? 'screen' : 'desktop',
                    // echoCancellation: true
                },
                optional: []
            };
        }

        if (sourceId) {
            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;

            if(screen_constraints.audio && screen_constraints.audio.mandatory) {
                screen_constraints.audio.mandatory.chromeMediaSourceId = sourceId;
            }
        }

        return screen_constraints;
    }

    function postGetSourceIdMessage(custom_parameter) {
        if (!iframe) {
            loadIFrame(function() {
                postGetSourceIdMessage(custom_parameter);
            });
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(function() {
                postGetSourceIdMessage(custom_parameter);
            }, 100);
            return;
        }

        if(!custom_parameter) {
            iframe.contentWindow.postMessage({
                captureSourceId: true
            }, '*');
        }
        else if(!!custom_parameter.forEach) {
            iframe.contentWindow.postMessage({
                captureCustomSourceId: custom_parameter
            }, '*');
        }
        else {
            iframe.contentWindow.postMessage({
                captureSourceIdWithAudio: true
            }, '*');
        }
    }

    var iframe;

    // this function is used in RTCMultiConnection v3
    window.getScreenConstraints = function(callback) {
        loadIFrame(function() {
            getScreenId(function(error, sourceId, screen_constraints) {
                if(!screen_constraints) {
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
        iframe.onload = function() {
            iframe.isLoaded = true;

            loadCallback();
        };
        iframe.src = 'https://www.webrtc-experiment.com/getSourceId/'; // https://wwww.yourdomain.com/getScreenId.html
        iframe.style.display = 'none';
        (document.body || document.documentElement).appendChild(iframe);
    }

    window.getChromeExtensionStatus = function(callback) {
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
})(window);/*
 * DeviceListener.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

import {Listener} from '../Listener.js'

/**
 * 设备上下线监听器
 *
 * @interface DeviceListener
 * @author Li Wenkai
 */
export class DeviceListener extends Listener {
    /**
     * 设备上线通知
     * @param {loginDevice} 登陆设备信息
     * @param {onlineDevices} 在线设备信息
     */
    onDeviceOnline(loginDevice,onlineDevices) { }

    /**
     * 设备下线通知
     * @param {logoutDevice} 登出设备信息
     * @param {onlineDevices} 在线设备信息
     */
    onDeviceOffline(logoutDevice,onlineDevices) { }
}/*
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
export class GroupContext {
    constructor(data) {
        this.data = data;
    }

    getName() {
        return this.data.name;
    }

    /**
     * 返回群组 ID 。群组 ID 唯一表示一个群组。
     *
     * @returns {String} 群组 ID 。
     */
    getId() {
        return this.data.name;
    }

    /**
     * 返回群组的显示名称。
     *
     * @returns {String} 群组显示名。
     */
    getDisplayName() {
        return this.data.displayName;
    }

    /**
     * 返回群组创建人。
     *
     * @returns {String} 群组创建人的 Cube 号。
     */
    getFounder() {
        return this.data.founder;
    }

    /**
     * 返回群组创建的绝对时间。
     *
     * @returns {Number} 群组创建时的时间戳。
     */
    getCreated() {
        return this.data.created;
    }

    /**
     * 返回群组的所有成员。
     *
     * @returns {Array} 群组内的所有成员的 Cube 号数组。
     */
    getMembers() {
        return this.data.members;
    }

    /**
     * 返回群组的所有管理员。
     *
     * @returns {Array} 群组内的所有管理员的 Cube 号数组。
     */
    getMasters() {
        return this.data.masters;
    }

    /**
     * 返回群组的所有来宾成员。
     *
     * @returns {Array} 群组内的所有来宾的 Cube 号数组。如果没有来宾成员则返回 <code>null</code> 。
     */
    getGuests() {
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
    isOpen() {
        return this.data.open;
    }

    /**
     * 返回群组已经申请的会议实例。
     *
     * @returns {CubeConference} 返回会议对象实例。如果群组没有关联的会议则返回 <code>null</code> 。
     */
    getConference() {
        if (this.data.attachment) {
            if (undefined !== this.data.attachment.conference) {
                return this.data.attachment.conference;
            }
        }
        else if (undefined !== this.data.conference) {
            return this.data.conference;
        }

        return null;
    }
}/*
 * GroupListener.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

import {Listener} from '../Listener.js'

/**
 * 群组监听器。
 * <p>
 * 通过群组状态监听器来监听群组的状态变化。
 * </p>
 *
 * @interface GroupListener
 * @author Xu Jiangwei, Guan Yong
 */
export class GroupListener extends Listener {
    /**
     * 当有群组被创建且自己是其中成员时被调用。
     *
     * @param group 群组实体
     * @param from  群组创建者
     */
    onGroupCreated(group, from) {
    }

    /**
     * 当群组销毁时回调
     *
     * @param group 群组实体
     * @param from  群组销毁者
     */
    onGroupDestroyed(group, from) {
    }

    /**
     * 群组数据更新回调(修改群昵称，头像，拥有者，开关群组，绑定群组ID信息)
     *
     * @param group 群组实体
     * @param from  群组更新者
     */
    onGroupUpdated(group, from) {
    };

    /**
     * 当群组添加成员时回调
     *
     * @param group        群组实体
     * @param addedMembers 被添加列表
     * @param from         添加者
     */
    onMemberAdded(group, addedMembers, from) {
    }

    /**
     * 当自己所在的群组被删除时被调用。
     *
     * @param group          群组实体
     * @param removedMembers 被移除列表
     * @param from           移除者
     */
    onMemberRemoved(group, removedMembers, from) {
    }

    /**
     * 当自己所在的群组有新增管理员时调用。
     *
     * @param group        群组实体
     * @param addedMasters 被添加管理员列表
     * @param from         添加者
     */
    onMasterAdded(group, addedMaster, from) {
    }

    /**
     * 当自己所在的群组有管理员被移除时调用。
     *
     * @param group          群组实体
     * @param from           移除者
     * @param removedMasters 被移除管理员列表
     */
    onMasterRemoved(group, removedMaster, from) {
    }

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
    onGroupApplied(group, applier) {
    };

    /**
     * 同意申请加入时回调
     *
     * @param group   群组实体
     * @param from    同意者
     * @param applier 申请者
     */
    onGroupApplyJoined(group, from, applier) {
    };


    /**
     * 收到邀请回调(仅邀请者自己和被邀请者回调)
     *
     * @param group   群组实体
     * @param from    邀请者
     * @param invites 被邀请列表

     */
    onGroupInvited(group, inviters, from) {

    };

    /**
     * 同意邀请加入时回调
     *
     * @param group
     * @param from 同意者
     * @param joinedMembers 加入者
     */
    onGroupInviteJoined(group, from, joinedMember) {
    };

    /**
     * 拒绝要邀请入群回调
     *
     * @param group
     * @param rejectMember
     */
    onGroupRejectInvited(group, from, rejectMember) {
    };

    /**
     * 拒绝申请请入群回调
     *
     * @param group
     * @param rejectMember
     */
    onGroupRejectApplyed(group, rejectMember, from) {
    };


    /**
     * 当有错误时被调用。
     *
     * @param {StateCode} errorCode - 错误码。
     */
    onGroupFailed(errorCode) {
    }
}
/*
 * GroupService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

import {Service} from '../Service.js'

/**
 * 群组服务。
 *
 * @interface GroupService
 * @author Guan Yong, Xu Jiangwei
 */
export class GroupService extends Service {
    /**
     * 创建新群组。
     *
     * @param {cubeGroupConfig} config 群组配置
     */
    create(config) {
    }

    /**
     * 删除已存在的群组。
     *
     * @param groupId {String} - 指定需要删除的群组 Cube 号。
     * @returns {boolean} 该操作的指令是否被正确发出。
     */
    destroy(groupId) {
    }

    /**
     * 添加新的群组成员。
     *
     * @param groupId {String} - 指定需要添加成员的群组 Cube 号。
     * @param members {Array.<String>} - 指定需要添加的成员 Cube 号。
     * @returns {boolean} 该操作的指令是否被正确发出。
     */
    addMembers(groupId, members) {
    }

    /**
     * 删除已存在的群组成员。
     *
     * @param groupId {String} - 指定需要删除成员的群组 Cube 号。
     * @param members {Array.<String>} - 指定需要删除的成员 Cube 号。
     * @returns {boolean} 该操作的指令是否被正确发出。
     */
    removeMembers(groupId, members) {
    }

    /**
     * 邀请组成员
     *
     * @param groupId {String} - 指定需要邀请成员的群组 Cube 号。
     * @param members {Array.<String>} - 指定需要邀请的成员 Cube 号。
     * @returns {boolean} 该操作的指令是否被正确发出。
     */
    inviteMembers(groupId,members){

    };

    /**
     * 拒绝邀请
     *
     * @param groupId {String} - 指定拒绝邀请成员的群组 Cube 号。
     * @param members {Array.<String>} - 邀请者Cube 号。
     */
    rejectInvite(groupId, cubeId){

    };

    /**
     * 接受邀请
     *
     * @param groupId {String} - 指定拒绝邀请成员的群组 Cube 号。
     * @param members {<String>} - 邀请者Cube 号。
     */
    acceptInvite(groupId,cubeId){

    };

    /**
     * 申请加入群组
     *
     * @param groupId
     * @return
     */
    applyJoin(groupId){

    };

    /**
     * 拒绝申请
     *
     * @param groupId
     * @param cubeId 申请者ID
     */
     rejectApply( groupId,  cubeId){};

    /**
     * 同意申请
     *
     * @param groupId
     * @param cubeId 申请者ID
     */
     acceptApply(groupId, cubeId){};

    /**
     * 查询当前账号所在的所有群组的 Cube 号列表。
     *
     * @param {Function} callback - 指定查询成功回调。
     * @param {Function} errorCallback - 指定错误及异常回调。
     * @returns {boolean} 该操作的指令是否被正确发出。
     */
    queryGroups(callback, errorCallback) {
    }

    /**
     * 添加管理员
     * @param groupId {String} - 指定需要设置管理员的群组 Cube 号
     * @param master {String} - 需要设置为管理员的群成员 Cube 号
     */
    addMaster(groupId, master) {
    }

    /**
     * 删除管理员
     * @param groupId {String} - 指定需要删除管理员的群组 Cube 号
     * @param master {String} - 需要删除的管理员的 Cube 号
     */
    removeMaster(groupId, master) {
    }

    /**
     * 修改群组(仅可以修改群昵称，头像，拥有者，开关群组，绑定群组ID信息)
     *
     * @param group 群组实体
     * @return
     */
    update(group){

    }

    /**
     * 创建来宾账号，来宾账号在服务器不做持久化
     *
     * @param groupId
     * @param number
     * @return
     */
    createGuest(groupId, number){};

}
/*
 * AccountListener.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

import {Listener} from '../Listener.js'

/**
 * 账号服务监听器
 *
 * @interface AccountListener
 * @author Guan Yong
 */
export class UserListener extends Listener {
    /**
     * 账号登录成功回调
     * @param session {Session}
     */
    onLogined(session) {}

    /**
     * 账号注销成功回调
     * @param session {Session}
     */
    onLogouted(session) {}

    /**
     * 设备上线通知
     * @param {loginDevice} 登陆设备信息
     * @param {onlineDevices} 在线设备信息
     */
    onDeviceOnline(loginDevice,onlineDevices) { }

    /**
     * 设备下线通知
     * @param {logoutDevice} 登出设备信息
     * @param {onlineDevices} 在线设备信息
     */
    onDeviceOffline(logoutDevice,onlineDevices) { }


    onFailed(error, ...args) { }
}/*
 * AccountService.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

import {Service} from '../Service.js'

/**
 * 账号服务接口
 *
 * @interface AccountService
 * @author Guan Yong
 */
export class UserService extends Service {
    /**
     * 登录
     * @param {String} cubeId 登录账号
     * @param {String} cubePwd 登录密码
     * @param {String} licenseToken 授权令牌
     * @param {String} nickname 账号昵称
     * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表登录成功
     */
    login(cubeId, cubePwd, licenseToken, nickname) {
    }

    /**
     * 注销
     * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表注销成功
     */
    logout() {}

    /**
     * 查询账号基本信息和实时状态
     * @param {Array<String>} accounts 指定待查询账号列表
     * @param {QueryAccountsCallback} callback 指定查询回调函数
     */
    queryAccounts(accounts, callback) { }

    /**查询在线设备列表*
     *
     * @property cubeId  {String} cube账号
     * @property callback 回调函数
     *  */
    queryOnlineDevice(cubeId, callback) {}

    /**查询在线设备详情*
     *
     * @property deviceId {String} 设备ID
     * @property callback 回调函数
     *  */
    queryOnlineDeviceById(deviceId, callback) {}
}
/**
 * 引擎状态监听器
 * @interface CubeEngineListener
 *
 */
import {Listener} from "../Listener";

export class CubeEngineListener extends Listener {
    /**
     * 引擎启动完成时回调
     */
    onStarted() { }

    /**
     * 引擎状态变化时回调
     * @param state
     */
    onStateChange(state) { }

    /**
     * 引擎停止时回调
     */
    onStopped() { }

    /**
     * 引擎错误时回调
     * @param error {Object} 错误信息
     */
    onFailed(error) { }
}/*
 * CubeEngine.js
 * Cube Engine
 *
 * Copyright (c) 2015-2016 Cube Team. All rights reserved.
 */

/**
 * 魔方引擎类。
 * <p>
 * 魔方引擎类是为应用层提供接口的基础类，包括通话控制、获取白板对象实例、获取媒体控制器实例等。
 * </p>
 *
 * @class CubeEngine
 * @author Xu Jiangwei, Guan Yong
 */
export class CubeEngine {
    constructor() {

    }

    // 调试选项
    _adjust(param) {
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
    setCubeConfig(config) {
    }

    /**
     * 初始化并启动引擎。
     *
     * @param {StartupEngineCallback} callback - 指定引擎启动完成的回调方法。
     * @returns {boolean} 如果引擎正确进入启动流程返回 <code>true</code> ，否则返回 <code>false</code> 。<b>注：返回值不表示引擎是否启动成功。</b>
     */
    startup(callback) {
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
    shutdown() {
    }

    /**
     * 返回引擎状态
     */
    getCubeEngineState() {
    }

    triggerCubeEngineState(state) {
    }

    /**
     * 添加监听器
     * @param {Listener} listener 监听器实例
     */
    addListener(listener) {
    }

    /**
     * 移除监听器
     * @param {Listener} listener 监听器实例
     */
    removeListener(listener) {
    }

    /**
     * 返回引擎当前使用的会话实例。
     *
     * @returns {Session} 会话对象的实例。
     */
    getSession() {
    }

    loadService(name, serviceInstance, ...args) {
    }

    loadUser() {
    }

    loadLicense() {
    }

    /**
     * 加载群组模块。
     * 群组模块为基础模块, 引擎启动成功后就会调用。
     *
     * @returns {boolean} 返回是否加载成功。
     */
    loadGroup() {
    }

    /**
     * 加载消息服务模块。
     *
     * @returns {boolean} 返回是否加载成功。
     */
    loadMessager() {
    }

    /**
     * 加载文件管理模块。
     *
     * @returns {boolean} 返回是否加载成功
     */
    loadFileManager() {
    }

    /**
     * 加载指令模块。
     *
     * @returns {boolean} 返回是否加载成功
     */
    loadInstruction() {
    }

    /**
     * 加载音视频通话模块。
     *
     * @param {String} localVideo - 指定字符串形式的用于展示本地视频的 DOM 元素 ID 。
     * @param {String} remoteVideo - 指定字符串形式的用于展示对方视频的 DOM 元素 ID 。
     * @param {String} bellAudio - 指定用于播放响铃音频的 DOM 元素 ID 。
     * @returns {boolean} 返回是否加载成功。
     */
    loadSignaling(localVideo, remoteVideo, bellAudio) {
    }

    /**
     * 加载远程桌面模块。
     *
     * @returns {boolean} 返回是否加载成功
     */
    loadShareDesktop(ShareDesktopLib, viewDom) {
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
    loadConference(localVideo, remoteVideo, bellAudio, localCanvas) {
    }

    /**
     * 加载白板服务模块。
     *
     * @param {String} domId - 指定白板画布容器 DOM 节点的 ID 。
     * @param {String} name - 指定白板名称。
     * @returns {WhiteboardService} 白板服务实例。
     */
    loadWhiteboard(domId, name) {
    }

    /**
     * 加载最近会话列表模块
     */
    loadRecentSession(){
    }

    /**
     * 加载直播模块。
     * @param {Object} liveCore - 直播核心库
     * @param {HTMLElement} viewDom - 需要显示直播画面的视图元素
     * @returns {boolean} 返回是否加载成功
     */
    loadLive(liveCore, viewDom) {
    }

    /**
     * 返回账号管理服务对象
     * @returns {null|AccountService}
     */
    getUserService() {
    }

    /**
     * 返回群组服务实例。
     *
     * @returns {null|GroupService} 群组服务对象。
     */
    getGroupService() {
    }

    /**
     * 返回消息服务的实例。
     *
     * @returns {null|MessageService} 消息服务实例。
     */
    getMessageService() {
    }

    /**
     * 返回音视频通话服务的实例。
     *
     * @returns {null|CallService} 音视频服务实例。
     */
    getCallService() {
    }

    /**
     * 返回引擎中用户操作媒体设备的媒体控制器对象实例。
     *
     * @returns {null|MediaService} 返回媒体控制器对象实例。
     */
    getMediaService() {
    }

    /**
     * 返回白板服务对象实例。
     *
     * @param {String} boardName - 指定白板服务的名称，如果不填写该参数，则返回第一个白板服务。
     * @returns {null|WhiteboardService} 白板服务对象实例。
     */
    getWhiteboardService(boardName) {
    }

    /**
     * 返回会议服务的实例。
     *
     * @returns {null|ConferenceService} 会议服务实例。
     */
    getConferenceService() {
    }

    /**
     * 返回文件管理服务实例。
     *
     * @returns {null|FileManagerService} 文件管理服务实例。
     */
    getFileManagerService() {
    }

    /**
     * 返回指令服务的实例。
     *
     * @returns {null|InstructionService} 指令服务实例。
     */
    getInstructionService() {
    }

    /**
     * 返回远程桌面服务的实例。
     *
     * @returns {null|ShareDesktopService} 指令服务实例。
     */
    getShareDesktopService() {
    }

    /**
     * 返回直播服务的实例。
     *
     * @returns {null|LiveService} 指令服务实例。
     */
    getLiveService() {
    }

    /**
     * 返回最近会话服务的实例。
     *
     * @returns {null|RecentSessionService} 指令服务实例。
     */
    getRecentSessionService(){
    }

    getDeviceInfo() {
    }

    /**
     * 设置资源路径, 资源路径包含引擎依赖的声音文件和图片文件, 资源目录应和引擎提供的资源目录结构相同。
     *
     * @default "./assets"
     * @param {String} path - 资源根目录
     */
    setResourcePath(path) {
    }

    addCelletMember(cellet, member) {
    }

    removeCelletMember(cellet, member) {
    }

}/*
 * Boot.js
 * Cube Engine
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */
import {CubeEngine} from './CubeEngine.js'
import {Service} from './Service.js'
import {Listener} from './Listener.js'
import {DBEntity} from './db/DBEntity.js'
import {DBManager} from './db/DBManager.js'
import {CubeConst} from './net/CubeConst.js'
import {CubeRequest} from './net/CubeRequest.js'
import {CubeError} from './entity/CubeError.js'
import {CELLET} from './net/CELLET.js'
import {StateCode} from './entity/StateCode.js'
import {Delegate} from './Delegate.js'
import {Peer} from './entity/Peer.js'
import {Session} from './entity/Session.js'
import {UserListener} from './service/UserListener.js'
import {GroupContext} from './service/GroupContext.js'
import {RegistrationState} from './entity/RegistrationState.js'
import {Permission} from './entity/Permission.js'
import {GroupListener} from './service/GroupListener.js'
import {DeviceListener} from './service/DeviceListener.js'
import {CubeState} from './entity/CubeState.js'
import {CubeConfig} from './entity/CubeConfig.js'
import {CodecType} from './entity/CodecType.js'
import {Group} from './entity/group/Group.js'
import {GroupType} from './entity/group/GroupType.js'
import {Member} from './entity/group/Member.js'
import {MemberRole} from './entity/group/MemberRole.js'
import {User} from "./entity/user/User"
import {GroupConfig} from "./entity/group/GroupConfig.js"
import {SettingListener} from "./service/SettingListener";
import {NotifyConfig} from "./entity/setting/NotifyConfig";
import {DisturbConfig} from "./entity/setting/DisturbConfig";
import {Setting} from "./entity/setting/Setting";

/**
 * 引导程序, 负责引擎的初始化工作。
 *
 * @author Guan Yong
 */
(function (global) {
    global._CUBE_DOMAIN = null;
    global._CUBE_CONF_CAPTURE_SERVICE = null;

    global._CUBE_PORT = null;
    global._CUBE_HTTP_SERVICE = null;     // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_SERVICE = null;    // 格式： https://ex.shixinyun.com:9543
    global._CUBE_HTTP_SERVICES = null;  // 格式： https://ex.shixinyun.com:9543
    global._CUBE_SERVICE = null;           // 根据当前协议自动识别的服务器地址
    global._CUBE_HTTP_FILE_SERVICE = null;    // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_FILE_SERVICE = null;  // 格式： https://ex.shixinyun.com:9543
    global._CUBE_HTTP_STORAGE_SERVICE = null;  // 格式： http://ex.shixinyun.com:8018
    global._CUBE_HTTPS_STORAGE_SERVICE = null;  // 格式： https://ex.shixinyun.com:9543



    global._CUBE_STUN_SERVERS = null;
    global._CUBE_ICE_SERVERS = null;
    global._VALID_CELLETS = [];
    global._MSTR_TOKEN = "CubeTeam@2015";
    global._cube_timestamp = Date.now();


    global.cube = new CubeEngine();

    // 提供全局的接口类
    global.CubeService = Service;
    global.CubeListener = Listener;
    global.CubeDBEntity = DBEntity;
    global.CubeDBManager = DBManager;
    global.CubeConst = CubeConst;
    global.CubeRequest = CubeRequest;
    global.CubeError = CubeError;
    global.CELLET = CELLET;
    global.CubeStateCode = StateCode;
    global.CubeDelegate = Delegate;
    global.CubePeer = Peer;
    global.CubeSession = Session;
    global.CubeUserListener = UserListener;
    global.CubeSettingListener = SettingListener;
    global.CubeGroupContext = GroupContext;
    global.CubeRegistrationState = RegistrationState;
    global.CubePermission = Permission;
    global.CubeGroupListener = GroupListener;
    global.CubeDeviceListener = DeviceListener;
    global.CubeState = CubeState;
    global.CubeConfig = CubeConfig;
    global.CubeCodecType = CodecType;
    global.CubeGroup = Group;
    global.CubeGroupType = GroupType;
    global.CubeGroupConfig = GroupConfig;
    global.CubeGroupMember = Member;
    global.CubeMemberRole = MemberRole;
    global.CubeUser = User;
    global.CubeDisturbConfig = DisturbConfig;
    global.CubeNotifyConfig = NotifyConfig;
    global.CubeSetting = Setting;


    if (global._cube_cross === undefined) {
        global._cube_cross = {
            host: "http://" + _CUBE_DOMAIN,//"http://192.168.0.198:8080/cube"

            callbackMap: {},

            addCallback: function (sn, success, error) {
                this.callbackMap[sn] = success;
            }
        };
    }

    global._cube_cross.queryRecordArchives = function (sn, data) {
        let dom = document.getElementById(sn);
        let name = dom.getAttribute("name");

        let success = global._cube_cross.callbackMap[sn];
        success.call(null, name, data);

        document.body.removeChild(dom);
        dom = null;

        delete global._cube_cross.callbackMap[sn];
    };
})(window);

