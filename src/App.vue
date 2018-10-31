<template>
	<div id="app">
		<router-view/>
		<video
			id="c_local_video"
			autoplay
			v-show="$store.state.showCLocalVideo">
		</video>
		<video
			id="c_remote_video"
			autoplay
			:class="$store.state.inviteType == 'shareScreen' ? 'share-screen-video' : 'conference-video'"
			v-show="$store.state.showCRemoteVideo">
		</video>
		<audio
			id="c_bell_audio"
			autoplay
			v-show="$store.state.showBellAudio">
		</audio>
		<canvas
			id="c_local_canvas"
			autoplay
			v-show="$store.state.showLocalCanvas">
		</canvas>
		<div
			id="wb_canvas"
			v-show="$store.state.showWBCanvas">
		</div>
		<video
			id="local_video"
			autoplay
			v-show="$store.state.showLocalVideo">
		</video>
		<video
			id="remote_video"
			autoplay
			v-show="$store.state.showRemoteVideo">
		</video>
	</div>
</template>

<script>
	import './../static/js/Genie-min';
	import './../static/js/cube-core';
	import './../static/js/cube-message';
	import './../static/js/cube-file';
	import './../static/js/cube-instruction';
	import './../static/js/cube-rd';
	import './../static/js/cube-recorder';
	import './../static/js/cube-signaling';
	import './../static/js/cube-sipworker';
	import './../static/js/cube-whiteboard';
	import './../static/js/cube-recentSession';
	import {AppAccountListener} from './listener/AppAccountListener';
	import {AppCallListener} from './listener/AppCallListener';
	import {AppConferenceListener} from './listener/AppConferenceListener';
	import {AppMessageListener} from './listener/AppMessageListener';
	import {AppWhiteboardListener} from "./listener/AppWhiteboardListener";
	import {AppGroupListener} from "./listener/AppGroupListener"
	import {AppRecentListener} from "./listener/AppRecentListener"

	export default {
		name: 'App',
		data() {
			return {}
		},
		props: {},
		computed: {},
		watch: {
			'$route'() {
				if (window._czc) {
					// 友盟统计
					let location = window.location;
					let contentUrl = location.pathname + location.hash;
					let refererUrl = '/';

					window._czc.push(['_trackPageview', contentUrl, refererUrl]);
				}
			}
		},
		beforeCreate() {

		},
		beforeMount() {
			this.$bus.on('onLogined', () => {
				this.loadingMsgs();
			});
		},
		mounted() {
			if (cube.startup((error) => {
					if (error) throw error;
					// 加载即时消息模块
					window.cube.loadMessager();
					// 加载通话模块
					window.cube.loadSignaling('local_video', 'remote_video', 'bell_audio');
					// 加载会议模块
					window.cube.loadConference('c_local_video', 'c_remote_video', 'bell_audio', 'local_canvas');
					// 加载白板模块
					window.cube.loadWhiteboard('wb_canvas');
					//加载最近会话模块
					window.cube.loadRecentSession();

					window.cube.getUserService().addListener(new AppAccountListener(this));

					window.cube.getGroupService().addListener(new AppGroupListener(this));

					window.cube.getMessageService().addListener(new AppMessageListener(this));

					window.cube.getCallService().addListener(new AppCallListener(this));

					window.cube.getConferenceService().addListener(new AppConferenceListener(this));

					window.cube.getWhiteboardService().addListener(new AppWhiteboardListener(this));

					window.cube.getRecentSessionService().addListener(new AppRecentListener(this));

					window.cube.getRecentSessionService().setSkipMessages([
						CubeMessageType.Custom,
						CubeMessageType.Receipt
					]);
				})) {
				console.log("Cube Engine 正在启动…");
			} else {
				this.$message.error('Cube Engine 启动失败！');
			}

			if (this.utils.getCookie('appId')) {
				window.appId = this.utils.getCookie('appId');
				window.cube.setCubeConfig({
					"appid": this.utils.getCookie('appId'),
					"licenseServer": 'http://125.208.1.67:9000/auth/license/get',
					"showCallMask" :false
				});
			}

			// 友盟组件
			const script = document.createElement('script')
			script.src = 'https://s19.cnzz.com/z_stat.php?id=1275174797&web_id=1275174797'
			script.language = 'JavaScript'
			document.body.appendChild(script);
		},
		methods: {
			loadingMsgs() {
				let loading = this.$loading({
					lock: true,
					text: '数据初始化中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});

				this.$store.commit('updateLoadingMsg', loading);

				setTimeout(() => {
					if (this.$store.state.loadingMsg) this.$store.state.loadingMsg.close();
				}, 10000);
			},
		},
		components: {}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	[v-cloak] {
		display: none;
	}

	html, body {
		height: 100%;
		font-family: "Microsoft YaHei", "微软雅黑";
		-webkit-tap-highlight-color: transparent !important;
		-webkit-appearance: none;
		scroll-behavior: smooth;
		overflow: hidden;
	}

	#app, .el-container {
		height: 100%;
	}

	.overflow {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.pointer {
		cursor: pointer;
	}

	.mt10 {
		margin-top: 10px;
	}

	.mt20 {
		margin-top: 20px;
	}

	.ml10 {
		margin-left: 10px;
	}

	.tac {
		text-align: center;
	}

	.el-main {
		padding: 0;
	}

	.el-button {
		border-radius: 2px;
	}

	.el-scrollbar__wrap {
		overflow-x: hidden !important;
	}

	.cb-scroll{
		height: 100%;
	}
	// 没有滚动条的原因
	// .el-scrollbar__view {
	// 	height: 100%;
	// }
	.el-select-dropdown__item {
		&:last-child {
			margin-bottom: 20px;
		}
	}
</style>
