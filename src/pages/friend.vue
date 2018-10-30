<template>
	<section class="cb-friends-container">
		<div class="cb-fc-scroll">
			<el-scrollbar class="cb-fc-scroll">
				<add-friend-or-group class="tac"></add-friend-or-group>
				<el-tabs v-model="activeName" @tab-click="handleClick" style="padding-left: 10px;">
					<el-tab-pane label="好友" name="friends">
						<member-inline
							:isRemoveSelf="true"
							:user-list="friendList"
							@select="checkInfo"
							height="40px"
							font-size="24px">
						</member-inline>
					</el-tab-pane>
					<el-tab-pane label="群组" name="groups">
						<Group-inline
							:groups-list="groupsList"
							height="40px"
							font-size="24px">
						</Group-inline>
					</el-tab-pane>
				</el-tabs>
			</el-scrollbar>
		</div>
		<div class="cb-friends-id-container">
			<i-d-card-person :userInfo="userInfo" v-show="activeName == 'friends'"
							 class="cb-friends-id-group"></i-d-card-person>
			<i-d-card-group v-show="activeName == 'groups'" class="cb-friends-id-group"></i-d-card-group>
		</div>
	</section>
</template>

<script>
	import AddFriendOrGroup from './../components/AddFriendOrGroup';
	import MemberInline from './../components/MemberInline';
	import GroupInline from './../components/GroupInline';
	import IDCardPerson from './../components/IDCardPerson';
	import IDCardGroup from './../components/IDCardGroup';

	export default {
		name: "friends",
		data() {
			return {
				activeName: 'friends',
				userInfo: this.$store.state.userList[0],
				friendList: this.$store.state.userList,
				groupsList: this.$store.state.groupList
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {
			// 初始化个人资料页
			let index = this.$store.state.userList[0].cubeId == this.$store.state.curUser ? 1 : 0;
			this.userInfo = this.$store.state.userList[index]
			this.addAppListener()
		},
		mounted() {

		},
		methods: {
			handleClick(tab, event) {
			},
			handleFriendList() {
				(this.$store.state.userList).map((value) => {
					this.friendList.push(value.cubeId);
				});
			},
			checkInfo(user) {
				this.userInfo = user;
			},
			addAppListener() {
			},
		},
		components: {
			AddFriendOrGroup,
			MemberInline,
			GroupInline,
			IDCardPerson,
			IDCardGroup
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cb-friends-container {
		position: relative;
		height: 99%;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
		.cb-fc-scroll {
			width: 250px;
			display: inline-block;
			height: 100%;
			/*padding: 0 10px;*/
			border-right: 2px solid $BD6;
		}
		.cb-friends-id-container {
			position: relative;
			background-color: $BG5;
			display: inline-flex;
			vertical-align: top;
			width: 100%;
			height: 100%;
			.cb-friends-id-group {
				position: absolute;
				width: 430px;
				margin-top: 15vh;
				left: 50%;
				transform: translateX(-50%);
				background: #FFFFFF;
				border: 1px solid #F2F2F2;
				box-shadow: 0 4px 13px 1px rgba(232, 232, 232, 0.50);
				border-radius: 2px;
			}
		}
		.cp-member-inline-container {
			.cp-member-inline {
				> span {
					display: inline-block;
					vertical-align: middle;
					color: $T1;
					font-size: 16px;
					width: 160px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>




