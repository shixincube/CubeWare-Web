<template>
	<div class="cp-person-info">
		<el-dialog
			:visible ="personShow"
			@close="close"
			width="378px"
		>
			<i-d-card-person :isQuit = "isQuit" :userInfo ="userInfo" v-on:closeDialog = "close" class="cb-friends-id-group"></i-d-card-person>
		</el-dialog>
	</div>
</template>

<script>
	import IDCardPerson from "../IDCardPerson.vue";

	export default {
		name: "PersonInfoDialog",
		data() {
			return {
				curCube: this.$store.state.curUser,
				firstUserInfo:this.$store.state.userList[0]
			};
		},
		beforeMount() {
		},
		props: {
			personShow: {
				type: Boolean,
				default: false
			},
			userInfo:{
				type: Object,
				default: this.firstUserInfo
			},
			isQuit:{
				type: Boolean,
				default: false
			}
		},
		watch: {},
		methods: {
			close() {
				this.$emit('update:personShow', false);
			}
		},
		components: {
			IDCardPerson,
		}
	};
</script>

<style lang='scss'>
	.cp-person-info {
		.el-dialog__header, .el-dialog__body {
			padding: 0;
		}
	}
</style>
