# CubeWare 简介
CubeWare工程基于时信魔方[webSDK](https://www.shixincube.com/)，演示了SDK聊天，群组，点对点音视频，会议，屏幕共享等功能。用户可参照CubeWare，将时信魔方SDK接入自己的app。

## 开源协议
CubeWare使用MIT开源协议

## 预览CubeWare
CubeWare地址 https://dev.cubeware.shixincube.cn/

将工程克隆到本地，使用静态服务启动本工程。

#### 例：node环境工程部署
1. `npm install`
2. `npm run dev`
3. 在浏览器中访问 https://127.0.0.1:8080/

** 注：必须启服务预览demo文件（node服务只是一个例子，并非必须）**

## 1. 目录简介

![结构](https://upload-images.jianshu.io/upload_images/4895345-2a6f7a9a4b793880.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* dist：代码产出位置（源码代码看这里）

* font：字体图标

* images：图片位置

* src：开发环境位置（不需要关心此处）

#### 初始化

用正确地appKey（在管理后台可以查看应用的appKey），account（帐号），token（帐号的token，用于建立连接，demo中使用md5加密的方式来登录，而管理后台创建的测试帐号直接使用即可）以及自定义回调方法来连接SDK并将sdk返回的消息，好友，群等数据保存到自己的数据缓存中。
在SDK同步数据完成后，开始页面渲染。

#### 缓存数据

dataCenter.js: 封装各种数据的增删改查

friendslist: 好友列表

userList: 用户信息map

groupList: 群列表

## 2. 即时消息

### 源码结构

依赖SDK文件 cube-core.js, cube-message.js
* app.vue：初始化SDK，以及封装SDK相关功能的方法

* state.js：负责业务数据层相关操作（数据包括消息对象，好友列表，会话列表，群等）

* main.js：功能入口

* util.js：包含一些公用的工具方法

* login.vue：登陆相关逻辑处理

* 单聊

![单聊](https://upload-images.jianshu.io/upload_images/4895345-0b64e3788b8aea36.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* 群聊

![群聊](https://upload-images.jianshu.io/upload_images/4895345-fe372390ea510584.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 消息处理
AppMessageListener.js 在收到消息后，SDK会回调onMessageReceived方法，缓存数据，最后刷新会话、聊天UI。

流程如下：收到消息 ---> 消息存储 ---> UI渲染

#### 发送消息处理
Cube-message.js里sendmessage方法提供发送文本，文件功能。发送后通过onMessageSent回调方法来处理发送后的业务逻辑，同消息处理。

#### 核心代码
* app.vue: 连接SDK实例代码，SDKAPI业务上再次封装
* messageList.js:聊天室的主要业务逻辑

#### 开发思路

[初始化SDK](https://www.shixincube.com/document/web/introduction.html)

监听消息通知  —> UI渲染

## 3. 视频通话

源码位于`CubeWare/src/components/CommonAudioCall.vue, CubeWare/src/components/CommonVideoCall.vue  `下

![视频通话](https://upload-images.jianshu.io/upload_images/4895345-80e7c127ac48878e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4. 会议

源码位于`CubeWare/src/audioCall`下

![创建会议](https://upload-images.jianshu.io/upload_images/4895345-0151fe9ffe5d3e39.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![会议](https://upload-images.jianshu.io/upload_images/4895345-9544619110da0305.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 源码结构

依赖SDK文件 `cube-signaling.js`
依赖SDK文件 `cube-sipworker.js`

#### 核心代码
* CommonVideoCall.js, CommonAudioCall.js: 调用agent、webrtc点对点音视频功能核心代码 音视频UI操作相关代码
* AppCallListener.js: 音视频功能相关回调

## 5. 白板

源码位于`CubeWare/src/whiteboard.vue`下

![邀请好友](https://upload-images.jianshu.io/upload_images/4895345-9c2ddafb717bbef5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![白板](https://upload-images.jianshu.io/upload_images/4895345-8170782f802c9f4b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 源码结构

依赖SDK文件 `cube-whiteBoard.js`

Demo中白板 进行开发时需额外加入了音频通话的功能，需要额外依赖音频相关的SDK自行组合。
音频部分依赖SDK文件 `cube-signaling.js`

另外为了简化代码，源码中尽可能减少UI操作逻辑，只包含业务逻辑。

#### 核心代码
* whiteboard.js: 包含白板通话建立流程以及功能操作等内容

## 6. 共享屏幕

源码位于`CubeWare/src/page/shareScreen.vue`下 ，此外demo依赖screen-capturing 插件，以构建屏幕共享的功能

![邀请好友](https://upload-images.jianshu.io/upload_images/4895345-101cdc8b106c9025.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![共享屏幕](https://upload-images.jianshu.io/upload_images/4895345-bc65baf0a38767b1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 源码结构

依赖SDK文件 `cube-sipworker.js`

屏幕共享依赖会议 大致流程与会议相同

另外为了简化代码，源码中尽可能减少UI操作逻辑，只包含业务逻辑。

#### 核心代码
* CommonShareScreen.vue: 包含屏幕共享建立流程以及功能操作等内容

## 修改代码为已用

时信魔方demo实现了一个IM软件的所有基础功能，开发者可直接以demo为基础，自定义相关样式，开发自己的IM软件，也可以参考demo中[sdk API](https://www.shixincube.com/document/web/introduction.html)使用方式自行开发。

注：魔方只提供消息通道，并不包含用户资料逻辑。开发者需要在管理后台或通过服务器接口将用户账号和token同步到魔方服务器。
