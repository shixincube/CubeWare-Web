<template>
	<div class="cp-message-list-items" :data-sessionid = "user.sessionId">
		<div class="ml-avatar">
			<img v-show="user.sessionType != 'GROUP'"
				 :src="'https://dev.download.shixincube.cn/file/avatar/' + user.sessionId"
				 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
			<img v-show="user.sessionType == 'GROUP'" src="./../assets/img/group-face.jpg">
		</div>
		<div class="ml-info">
			<h2 class="ml10 overflow">
				<span>{{user.displayName ? user.displayName : user.sessionId}}</span>
				<span>{{ utils.parseTimeAbbr(user.time) }}</span>
			</h2>
			<div class="list-bottom">
				<p class="ml10 overflow">{{user.content}}</p>
				<p v-show="user.unreadCount && user.unreadCount!=0 && $store.state.messagePeer != user.sessionId" class="ml10 overflow">
					{{user.unreadCount > 99 ? 99 : user.unreadCount}}</p>
			</div>
		</div>
		<person-info-dialog :show="GroupInfoDialog"></person-info-dialog>
	</div>
</template>

<script>
	import GroupInfoDialog from "./dialog/GroupInfoDialog"
	import PersonInfoDialog from "./dialog/PersonInfoDialog.vue";

	export default {
		name: "MessageListItems",
		data() {
			return {
				GroupInfoDialog: false
			}
		},
		props: {
			user: {
				type: Object,
				default: {}
			}
		},
		computed: {},
		watch: {},
		beforeMount() {
//              this.src = this.user.cubeId.indexOf('g')>-1?'./../assets/img/user-face.jpg':'./../assets/img/group-face.jpg'
		},
		mounted() {

		},
		methods: {},
		components: {
			PersonInfoDialog,
			GroupInfoDialog
		}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-message-list-items {
		display: flex;
		box-sizing: border-box;
		flex-direction: row;
		.ml-avatar {
			flex-grow: 1;
			> img {
				margin-top: 10px;
				width: 40px;
				height: 40px;
				border-radius: 100%;
			}
		}
		.ml-info {
			flex-grow: 3;
			text-align: left;
			margin-top: 10px;
			> h2 {
				font-size: 16px;
				font-weight: 400;
				> span {
					display: inline-block;
					width: 100px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:last-child {
						width: auto;
						font-size: 14px;
						float: right;
					}
				}
			}
			.list-bottom {
				> p {
					&:first-child {
						float: left;
						width: 120px;
						font-size: 12px;
						margin-top: 0 !important;
					}
					&:last-child {
						float: right;
						display: inline-block;
						width: 18px;
						height: 18px;
						line-height: 18px;
						font-size: 10px;
						text-align: center;
						margin-top: 0 !important;
						background: #FC605B;
						border-radius: 100%;
						color: #ffffff;
					}
				}
			}

		}
	}
</style>
