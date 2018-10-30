<template>
	<el-dialog
		title="创建群聊"
		:visible.sync="dialog"
		width="30%"
		:before-close="handleClose">

		<el-select v-model="groupMember" multiple placeholder="请选择成员cube号">
			<el-option
				v-for="item in this.$store.state.userList"
				:key="item.cubeId.toString()"
				:label="item.cubeId.toString()"
				:value="item.cubeId.toString()">
			</el-option>
		</el-select>
		<span slot="footer" class="dialog-footer">
    <el-button class="el-icon--right" type="primary" @click="createGroup">完成</el-button>
  </span>
	</el-dialog>
</template>
<script>
	export default {
		name: "SelectCube",
		data() {
			return {
				accountService: window.cube.getUserService(),
				dialogVisible: false,
				groupMember: [],
			}
		},
		props: {
			dialog: {
				type: Object,
				default: {}
			}
		},
		computed: {},
		watch: {},
		beforeMount() {

		},
		mounted() {

		},
		methods: {
			joinGroup() {

			},
			handleClose(done) {
				done();
			},
			createGroup(done) {
				//获取群组名称
				var groupName = '123';
				//获取群成员列表
				var Members = this.groupMember;
				//获取Cube群组服务
				var groupService = window.cube.getGroupService();
				var config = new CubeGroupConfig(CubeGroupType.NORMAL, groupName, Members);
				var ret = groupService.create(config);
				if (ret) {
					this.dialogVisible = false;
				}
			},
		},
		components: {}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-add-friend-group {
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
