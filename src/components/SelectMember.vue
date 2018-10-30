<template>
	<div class="cp-select-member">
		<p>
			选择好友
			<i class="el-icon-close pointer"
			   @click="closeDialog"></i>
		</p>
		<div class="cp-member-list-container">
			<el-scrollbar class="el-scrollbar">
				<el-checkbox-group v-model="selectList">
					<div class="cp-member-list"
						 v-for="item in showMembers"
						 v-if="item.cubeId != $store.state.curUser">
						<img :src="item.avatar || avatar">
						<div class="cp-member-list-info">
							<p class="overflow">{{ item.displayName || item.cubeId }}</p>
							<el-checkbox
								:label="item"
								:checked="item.checked"
								:disabled="item.checked"></el-checkbox>
						</div>
					</div>
				</el-checkbox-group>
			</el-scrollbar>
		</div>
		<el-button class="cp-ml-select-btn"
				   @click="select">
			完成 ( {{ selectList.length }} )
		</el-button>
	</div>
</template>

<script>
	import Avatar from './../assets/img/user-face.jpg';

	export default {
		name: "SelectMember",
		data() {
			return {
				avatar: Avatar,
				selectList: [],
				vueXInviteList: this.$store.state.inviteList,
				vueXUserList: this.$store.state.userList
			}
		},
		props: {
			inviteList: {
				type: Array,
				default: function () {
					return []
				}
			},
			checkMembers: {
				type: Array,
				default: function () {
					return []
				}
			},
			showInviteList: {
				type: Array,
				default: function () {
					return []
				}
			}
		},
		computed: {
			showMembers: function () {
				let members = this.$store.state.leftHoverNav <=2 ? this.vueXInviteList : this.vueXUserList;
				if(this.showInviteList.length >  0){
					members = this.vueXUserList;
				}
				let checks = {};
				for(let member of this.checkMembers){
					checks[member.cubeId] = true;
				}
//				let shows = members.map(member =>{
//					member.checked = checks[member.cubeId];
//					return member;
//				})
				let shows = members.filter(member =>{
					return !checks[member.cubeId];
				})
				return shows
			}
		},
		watch: {},
		beforeMount() {
//			if(this.$store.state.leftHoverNav <=2 && !this.$store.state.messagePeer.includes('g')){
//				this.$emit('inviteList', this.$store.state.inviteList[0]);
//			}
		},
		mounted() {

		},
		methods: {
			select() {
				if(this.selectList.length < 1) {
					this.$message.error('请选择邀请人员');
					return false;
				}
				this.$emit('inviteList', this.selectList);
				this.selectList = [];
			},
			closeDialog() {
				let exsist = this.$store.state.shareScreen || this.$store.state.whiteboard || this.$store.state.audioCall || this.$store.state.groupVideo;
				const element = {
					'conference': 'showCRemoteVideo',
					'groupVideo': 'showCRemoteVideo',
					'whiteboard': 'showWBCanvas',
					'shareScreen': this.$store.state.shareScreen && this.$store.state.shareScreen.masters[0].cubeId == this.$store.state.curUser ? 'showCLocalVideo' : 'showCRemoteVideo'
				};
				exsist && this.$store.commit('openEngineElement', element[this.$store.state.inviteType]);
				this.$emit('closeDialog');
//				this.$store.commit('changeLeftHoverNav', '');
//				this.$store.commit('updateInviteType', '');
			}
		},
		components: {}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-select-member {
		width: 500px;
		height: 490px;
		position: absolute;
		top: 15vh;
		left: 60px;
		background-color: $BG5;
		box-sizing: border-box;
		z-index: 30;
		overflow: hidden;
		box-shadow: 0 4px 13px 1px rgba(208, 208, 208, 0.50);
		> p {
			position: relative;
			box-sizing: border-box;
			padding-left: 20px;
			color: $T8;
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid $BD3;
			> .el-icon-close {
				position: absolute;
				right: 20px;
				top: 13px;
				font-size: 16px;
				&:hover {
					color: $T2;
				}
			}
		}
		.cp-member-list-container {
			.el-scrollbar {
				height: 380px;
				padding-bottom: 20px;
				.cp-member-list {
					position: relative;
					display: inline-block;
					text-align: center;
					float: left;
					width: 33.3%;
					margin-top: 40px;
					line-height: 1.5;
					> img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						vertical-align: middle;
					}
					.cp-member-list-info {
						display: inline-block;
						vertical-align: middle;
						text-align: left;
						margin-left: 10px;
						> p {
							font-size: 14px;
							color: $T8;
							line-height: 1.5;
							width: 100px;
						}
						.el-checkbox {
							&.is-checked {
								.el-icon-check {
									display: none;
								}
							}
							.el-checkbox__inner {
								width: 24px;
								&:after {
									left: 9px;
								}
							}
							.el-checkbox__label {
								display: none !important;
							}
						}
					}
				}
			}


		}
		.cp-ml-select-btn {
			margin: 0px auto 0 auto;
			display: block;
			padding: 0;
			height: 30px;
			line-height: 30px;
			width: 120px;
			border: none;
			background-color: $BG22;
			color: $T3;
		}
	}
</style>
