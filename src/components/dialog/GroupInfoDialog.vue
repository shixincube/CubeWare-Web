<template>
	<div class="cp-group-info">
		<el-dialog
			:visible ="groupShow"
			@close="close"
			:show-close = "false"
			width="435px"
		> 
			<i-d-card-group @groupItemInfo='groupItemInfo' :groupInfo ="groupInfo" v-on:closeDialog = "close" class="cb-friends-id-group"></i-d-card-group>
		</el-dialog>
	</div>
</template>
<script>
	import IDCardGroup from './../IDCardGroup';

	export default {
		name: "GroupInfoDialog",
		data() {
			return {
				groupMember: [],
				curCube: this.$store.state.curUser,
				userList: []
			};
		},
		beforeMount() {},
		props: {
			groupShow: {
				type: Boolean,
				default: function () {
					return false
				}
			},
			groupInfo:{
				type: Object,
				default: this.firstUserInfo
			}
		},
		watch: {
		},
		methods: {
			groupItemInfo(item){
				this.$emit('groupItemInfo',item)
			},
			close() {
				this.$emit('update:groupShow', false);
			},
		},
		components: {
			IDCardGroup
		}

	}
</script>

<style lang='scss'>
	.cp-group-info{
		.el-dialog__header,.el-dialog__body {
			padding: 0;
		}
	}

</style>
