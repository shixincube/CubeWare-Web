<template>
	<div class="cp-add-friend-group">
		<div class="cp-group-content">
			<div @click="joinGroup" class="group-btn join-group-btn">加入群</div>
			<div @click="show = true" class="group-btn create-group-btn">创建群</div>
		</div>
		<!--<el-dropdown trigger="click">-->
		<!--<el-button class="cb-friend-btn">-->
		<!--<i class="el-icon-plus"></i>-->
		<!--</el-button>-->
		<!--<el-dropdown-menu slot="dropdown">-->
		<!--<el-dropdown-item @click="joinGroup">加入群</el-dropdown-item>-->
		<!--<el-dropdown-item ><el-button type="text" @click="show = true">创建群</el-button></el-dropdown-item>-->
		<!--</el-dropdown-menu>-->
		<!--</el-dropdown>-->

		<ChooseCubeDialog @complete="createGroup" :title="'创建群聊'" :show.sync="show"></ChooseCubeDialog>

	</div>
</template>
<script>
	import ChooseCubeDialog from './../components/ChooseCubeDialog';

	export default {
		name: "AddFriendOrGroup",
		data() {
			return {
				accountService: window.cube.getUserService(),
				dialogVisible: false,
				groupMember: [],
				show: false
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {

		},
		mounted() {

		},
		methods: {

			handleClose(done) {
				done();
			},
			joinGroup(){
				this.$message({
					showClose: true,
					message: '当前不支持加群操作',
					type: 'error',
					duration: 2000
				});
			},

			createGroup(members) {
				//获取群组名称
				var groupName = this.$store.state.curUser + "创建的群";
				//获取Cube群组服务
				var groupService = window.cube.getGroupService();
				var config = new CubeGroupConfig(CubeGroupType.NORMAL, groupName, members);
				var ret = groupService.create(config);
				if (ret) {
					this.$notify({
						title: '创建群成功',
						duration: 1500,
						type: 'success'
					});
					this.show = false;
				}
			},
		},
		components: {
			ChooseCubeDialog
		}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-add-friend-group {
		height: 60px;
		padding: 20px 0 0 0;
		.cp-group-content {
			border: 1px solid #CCCCCC;
			width: 220px;
			margin: 0 10px;
			height: 32px;
			padding: 6px 0 0 0;
			.group-btn {
				display: inline-block;
				cursor: pointer;
				margin: 0;
				border: none;
				border-radius: 2px;
				background: #ffffff;
				width: 100px;
				height: 26px;
				line-height: 26px;
				font-family: MicrosoftYaHei;
				font-size: 14px;
				color: #26252A;
			}
			.join-group-btn {
				border-right: 1px solid #CCCCCC;
			}
		}
		.cb-friend-btn {
			display: inline-block;
			margin: 20px auto;
			width: 100px;
			background-color: $BG3;
			color: $T3;
			border-radius: 30px;
			border: 1px solid $BD4;
		}

		.create-btn {

		}
	}
</style>
