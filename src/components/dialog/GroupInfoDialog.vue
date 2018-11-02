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
		<person-info-dialog :userInfo="curInfo" :personShow.sync="personShow"></person-info-dialog>
	</div>
</template>
<script>
	import IDCardGroup from './../IDCardGroup';
	import PersonInfoDialog from './PersonInfoDialog';
	export default {
		name: "GroupInfoDialog",
		data() {
			return {
				personShow:false,
				curInfo:null,
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
				this.curInfo = item;
				this.personShow = true;
				this.$emit('groupItemInfo',false)
			},
			close() {
				this.$emit('update:groupShow', false);
			},
		},
		components: {
			IDCardGroup,
			PersonInfoDialog
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
