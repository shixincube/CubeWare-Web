<template>
	<div class="cp-message-list">
		<add-friend-or-group class="tac"></add-friend-or-group>
		<el-scrollbar
			class="el-menu-vertical-demo"
			v-if="!noRecentList"
			>
			<el-menu
				:default-active="sessionId"
				@select="handleSelect"
			>
				<el-menu-item 
					style="padding-left: 10px;"
					v-if="item.sessionId != $store.state.curUser"
					v-for="item in recentList"
					:index="item.sessionId"
					:key="item.sessionId"
					class="ln-container">
					<message-list-items :user="item"></message-list-items>
				</el-menu-item>
			</el-menu>
		</el-scrollbar>
		<p v-if="noRecentList" class="no-recent-list">暂时没有会话</p>
		<join-conference v-if="showJoin"
						 :conference-info="curConferenceInfo"
						 @conferenceJoined="conferenceJoined"></join-conference>
	</div>
</template>

<script>
	import MessageListItems from './MessageListItems';
	import AddFriendOrGroup from './AddFriendOrGroup';
	import JoinConference from './JoinConference';

	export default {
		name: "MessageList",
		data() {
			return {
				recentService: cube.getRecentSessionService(),
				recentList: [],
				noRecentList:true,
				message: {
					src: "./../assets/img/user-face.jpg",
					title: 'test',
					info: 'test',
					time: '昨天'
				},
				receiptTimer: 0,
				showJoin: false,
				curConferenceInfo: '',
				sessionId: this.$store.state.messagePeer,
				loading: null
			}
		},
		props: {},
		computed: {},
		watch: {
			'$store.state.groupList': function (groups) {
				this.sortRecent();
			},
			'$store.state.messagePeer': function (peer) {
				// 加载点击
				setTimeout(()=>{
					this.handleSelect(this.$store.state.messagePeer);
				}, 200)
				this.sessionId = peer;
			}
		},
		beforeMount() {
			this.addAppListener();
		},
		mounted() {
			this.queryRecent();
		},
		methods: {
			handleSelect(key) {
				if (key != this.$store.state.curGroup) {
					this.showJoin = false;
				};
				clearInterval(this.receiptTimer);
				this.recentList.map((list, index) => {
					if (list.sessionId == key) {
						if (key.includes('g')) {
							this.$store.commit('updateCurGroup', key);
							this.queryConference(key);
						}
							this.receiptMessage(list);
					}
				});
				this.$store.commit('updateMessagePeer', key);
				this.queryRecent();
			},

			queryConference(groupId) {
				let conference = window.cube.getConferenceService();
				conference.queryConferences([groupId], (res) => {
					let members = [];
					if(res.members){
						for (let i = 0; i < res.members.length; i++) {
							members.push(res.members[i].cubeId);
						}
						if (!members.includes(this.$store.state.curUser)) {
							this.showJoin = true;
						}
						this.curConferenceInfo = res;
					}
				});
			},

			conferenceJoined() {
				this.showJoin = false;
			},

			getAllUnread(recentList) {
				let allUnreadCount = 0;
				recentList.forEach((item) => {
					if (item.unreadCount > 0) {
						allUnreadCount = allUnreadCount + item.unreadCount
					}
				})
				this.$store.commit('getAllUnread', allUnreadCount);
			},

			queryRecent() {
				if (this.$store.state.curUser) {
					this.recentService.queryRecentSessions((err, data) => {
						console.log('最近会话列表', data);
						
						this.recentList = data || [];
						this.recentList.length > 0 ? this.noRecentList = false : this.noRecentList = true
						this.sortRecent();
						if ('' == this.$store.state.messagePeer && data != null) {
							this.$store.commit('updateMessagePeer', data[0].sessionId);
						}
					});
				}
			},

			receiptMessage(session) {
				console.log('receiptMessage', session)
				if (session.unreadCount != 0) {
					let lastMsg = session.messageJson;
					let receiptMessage = new CubeReceiptMessage(session.sessionId);
					if (lastMsg) {
						receiptMessage.sns = [lastMsg.sn];
						window.cube.getMessageService().sendMessage(receiptMessage);
					}
				}
			},

			sortRecent() {
				this.recentList.sort((a, b) => {
					return b.time - a.time;
				});

				let recentList = [], checkCurSession = true;
				//  排除群组 好友是否有效
				this.recentList.map((list, index) => {
					let info = this.invalidSession(list.sessionId);
					if (info) {
						list.displayName = info.displayName;
						recentList.push(list);
					}
					else if(this.sessionId == list.sessionId){
						checkCurSession = false;
					}
				});
				// 检测当前会话是否有效
				checkCurSession || this.$store.commit('updateMessagePeer', recentList[0].sessionId);
				this.recentList = recentList;
				this.recentList.length > 0 ? this.noRecentList = false : this.noRecentList = true
				// 获取总的未读数
				this.getAllUnread(this.recentList);
			},

			invalidSession(sessionId) {
				if (sessionId.includes('g')) {
					for (let group of this.$store.state.groupList) {
						if (group.groupId == sessionId) {
							return group
						}
					}
				} else {
					for (let user of this.$store.state.allUserList) {
						if (user.cubeId == sessionId) {
							return user;
						}
					}
				}
				return false;
			},

			closeLoading() {
				if (this.$store.state.loadingMsg) this.$store.state.loadingMsg.close();
			},

			addAppListener() {
				this.$bus.on('onRecentSessionAdded', (rencet) => {
					console.log('最近会话增加', rencet);
					let recents = [];
					for (let list of this.recentList) {
						if (list.sessionId != rencet.sessionId) {
							recents.push(list);
						}
					}
					recents.unshift(rencet);
					this.recentList = recents;
					this.recentList.length > 0 ? this.noRecentList = false : this.noRecentList = true
					this.sortRecent();
					console.log('当前的列表', this.recentList);
				});

				this.$bus.on('onRecentSessionChanged', (rencet) => {
					console.log('onRecentSessionChanged', rencet);
					let recents = this.recentList;
					this.recentList.map((list, index) => {
						if (list.sessionId == rencet.sessionId) {
							recents.splice(index, 1, rencet);
							this.sessionId == list.sessionId ? this.receiptMessage(rencet) : '';
						}
					});
					this.recentList = recents;
					this.recentList.length > 0 ? this.noRecentList = false : this.noRecentList = true
					this.sortRecent();
				});

				this.$bus.on('onMessageSyncEnd', () => {
					console.log('消息同步结束');
					setTimeout(() => {
						this.closeLoading();
						this.queryRecent();
					}, 2000);
				});

//				this.$bus.on('onQuitGroup', (groupId) => {
//					if (groupId == this.sessionId) {
//						if(this.sessionId == this.recentList[0].sessionId){
//							this.$store.commit('updateMessagePeer', this.recentList[1].sessionId);
//						}else {
//							this.$store.commit('updateMessagePeer', this.recentList[0].sessionId);
//						}
//
//					}
//				});
			},
			destroyAppListener() {
				this.$bus.off('onRecentSessionAdded');
				this.$bus.off('onRecentSessionChanged');
//				this.$bus.off('onMessageSyncEnd');
				this.$bus.off('onQuitGroup');
			}
		},
		components: {
			MessageListItems,
			AddFriendOrGroup,
			JoinConference
		},
		destroyed() {
			this.destroyAppListener();
		},
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-message-list {
		display: inline-block;
		width: 250px;
		height: 100%;
		border-right: 1px solid #dddddd;
		.no-recent-list{
			text-align: center;
			color: rgb(38, 37, 42);
   			opacity: 0.2;
			padding-top: 100px;
		}
		.el-menu {
			border-right: none;
		}
		.ln-container {
			height: 64px;
			text-align: center;
			line-height: normal;
			> img {
				width: 40px;
				height: 40px;
			}
			p {
				margin-top: 10px;
			}
		}
		.el-menu-vertical-demo {
			height: calc(100% - 100px);
		}
	}
</style>
