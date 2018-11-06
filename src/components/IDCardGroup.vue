<template>
	<div class="cp-id-card-group">

		<i-d-card-header
			:isMaster="isMaster"
			v-on:closeDialog = "$emit('closeDialog', false);"
			@showUpdateGroup = "updateGroup"
			:id-card-name="groupInfo.displayName"
			card-type="group" :id-card-id="groupInfo.groupId">
		</i-d-card-header>
		<div class="cp-id-card-body">
			<inline-list
				left-info="群号码"
				:right-info="groupInfo.groupId"
				left-width="80px"
				class="mt10"
				right-padding="0"
				left-padding="0 0 0 20px"></inline-list>
			<inline-list
				left-info="群成员"
				:right-info="(groupInfo.members.length + groupInfo.masters.length).toString()"
				left-width="80px"
				class="mt10"
				right-padding="0"
				left-padding="0 0 0 20px"></inline-list>

			<div class="group-members-avatar-container">
				<div v-show="isMaster" @click="openDialog()" class="add-btn" style="color: rgb(38, 37, 42);">添加</div>
				<div class="member-content member-master" v-for="item in groupInfo.masters"  @click='personInfo(item)'>
					<span  class="group-master remove-member-btn"></span>
					<img :name="item.cubeId"
						 :src="dataCenter.getAvatarByCube(item.cubeId)"
						 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
					<div style="display: block; width: 64px;font-size: 10px; text-align: center;  overflow: hidden; text-overflow:ellipsis; white-space: nowrap; color: #26252A">
						{{item.displayName ? item.displayName : item.cubeId}}
					</div>
				</div>
				<div class="member-content" v-for="item in groupInfo.members"
					 :key="item.cubeId"
					  @click='personInfo(item)'
					 >

					<i v-show="isMaster"
					   @click="removeMember(item)"
					   class="el-icon-remove remove-member-btn"></i>
					<img :name="item.cubeId"
						 :src="dataCenter.getAvatarByCube(item.cubeId)"
						:onerror="'this.src='+'\''+ $store.state.userFace +'\''">
					<div
						style="display: block; width: 70px;font-size: 10px; text-align: center;  overflow: hidden; text-overflow:ellipsis; white-space: nowrap; color: #26252A">
						{{item.displayName ? item.displayName : item.cubeId}}
					</div>
				</div>

			</div>
			<el-button
				@click="sendMessage"
				type="primary"
				:round="true"
				class="cp-id-card-btn">发消息
			</el-button>
		</div>
		<choose-cube-dialog
			@complete="addGroupMember"
			:hasCubes="groupInfo.members"
			:title="title"
			:show.sync="show">
		</choose-cube-dialog>
	</div>


</template>

<script>
	import IDCardHeader from './../components/IDCardHeader';
	import InlineList from './../components/InlineList';
	import ChooseCubeDialog from './../components/ChooseCubeDialog';

	export default {
		name: "IDCardGroup",
		data() {
			return {
				groupService: window.cube.getGroupService(),
				firstGroupInfo: this.$store.state.groupList[0],
				show: false,
				isMaster: false,
				title: "提示",
			}
		},
		props: {
			groupMemberCount: {
				type: String,
				default: '1'
			},
			groupInfo:{
				type: Object,
				default: function(){
					return this.$store.state.curGroupInfo;
				}
			}
		},
		computed: {},
		watch: {
			'$store.state.groupList': function (groups) {
				let update = false;
				groups.map(group => {
					if (this.groupInfo.groupId == group.groupId) {
						update = true;
						this.groupInfo = group;
					}
				});
				if (!update) {
					this.groupInfo = groups[groups.length - 1];
				}
				this.isMasters();
			},
			'$store.state.messagePeer': function (newVal, oldVal) {
				this.isMasters();
			},

			'$store.state.curGroupInfo': function (newVal, oldVal) {
				this.isMasters();
			}

		},
		beforeMount() {
			this.isMasters();
			this.addAppListener();
		},
		mounted() {
		},
		methods: {
			personInfo(item){
				this.$emit('groupItemInfo',item)
			},
			openDialog() {
				this.title = "添加群成员"
				this.show = true;
			},

			isMasters() {
				let isMaster = false;
				if(this.groupInfo["masters"]){
					this.groupInfo["masters"].map(master => {
						if (master.cubeId == this.$store.state.curUser) {
							isMaster = true;
							return;
						}
					});
				}
				this.isMaster = isMaster;
			},

			updateGroup(groupName){
				if (!groupName.length) {
					this.$message.error('群名不能为空');
					return false;
				}
				else {
					this.groupInfo.displayName = groupName;
					this.groupService.update(this.groupInfo);
				}
			},

			addGroupMember(groupMembers) {
				this.show = false;
				var ret = this.groupService.addMembers(this.groupInfo.groupId, groupMembers);
				if (ret) {
					this.$notify({
						title: '添加群成员成功',
						duration: 1500,
						type: 'success'
					});
				}
			},

			removeMember(member) {
				var ret = this.groupService.removeMembers(this.groupInfo.groupId, [member.cubeId]);
				if (ret) {
					this.$notify({
						title: '删除群成员' + member.cubeId + '成功',
						duration: 1500,
						type: 'success'
					});
				}
			},

			sendMessage() {
				this.$store.commit('updateMessagePeer', this.groupInfo.groupId);
				setTimeout(() => {
					this.dataCenter.getRecentSessionById(this.groupInfo.groupId, recent => {
						if(recent){
							recent.time  = Date.now();
							window.cube.getRecentSessionService().addRecentSession(new CubeRecentSession(recent));
						}else {
							window.cube.getRecentSessionService().addRecentSession(new CubeRecentSession({
								sessionId: this.groupInfo.groupId,
								displayName: this.groupInfo.displayName,
								sessionType: 'GROUP',
								time: Date.now()
							}));
						}
					});
				}, 300);
				this.$emit("closeDialog", false);
				this.$router.push({name: 'message'});
			},

			addAppListener() {

			},
		},
		components: {
			IDCardHeader,
			InlineList,
			ChooseCubeDialog
		}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-id-card-group {
		.cp-id-card-body {
			position: relative;
			height: 400px;
			background-color: $BG5;
			border-radius: 0 0 6px 6px;
			.cp-id-card-btn {
				position: absolute;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
			}
			.group-members-avatar-container {
				max-height: 250px;
				overflow: hidden;
				padding: 15px 5px;
				.member-content {
					position: relative;
					display: inline-block;
					> img {
						width: 50px;
						height: 50px;
						margin-left: 14px;
						border-radius: 50%;
						margin-top: 5px;
					}
					.remove-member-btn {
						position: absolute;
						right: 4px;
						top: -2px;
						color: #e2171c;
						float: right;
						padding-top: 6px;
						cursor: pointer;
					}
					.group-master{
						cursor: default;
						display: inline-block;
						width: 11px;
						right: -6px;
						height: 13px;
						background: url("./../assets/img/group_master.png") no-repeat center;
					}
				}
				.add-btn {
					padding: 0;
					margin: 5px 0 0 10px;
					cursor: pointer;
					font-weight: 100;
					float: left;
					display: block;
					width: 50px;
					height: 70px;
					background: url("./../assets/img/msg_add.png") no-repeat top;
					background-size: 50px 50px;
					color: rgb(38, 37, 42);
					font-size: 10px;
					text-align: center;
					line-height: 125px;
				}
			}
		}
	}
</style>
