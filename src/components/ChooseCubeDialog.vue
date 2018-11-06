<template>
	<div >
		<el-dialog
			:title="title"
			:visible.sync="visible"
			@close="close"
			:show="show"
			width="30%"
			append-to-body class="cp-choose-cube-dilaog">

			<el-checkbox-group v-model="groupMember">
				<div class="cp-member-list"
					 v-if="item.cubeId != $store.state.curUser"
					 v-for="item in userList">
					<img class="avatar"
						 :name="item.cubeId"
						 :src="dataCenter.getAvatarByCube(item.cubeId)"
						 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
					<div class="cp-member-list-info">
						<p class="overflow">{{ item.displayName || item.cubeId }}</p>
						<el-checkbox :label="item.cubeId"></el-checkbox>
					</div>
				</div>
			</el-checkbox-group>

			<span slot="footer" class="dialog-footer">
              <el-button :disabled = "!groupMember.length" class="el-icon--right complete-btn" type="primary" @click="$emit('complete',groupMember)">完成 ({{ groupMember.length }})</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import Avatar from './../assets/img/user-face.jpg';
	export default {
		name: "ChooseCubeDialog",
		data() {
			return {
				avatar: Avatar,
				visible: this.show,
				groupMember: [],
				curCube: this.$store.state.curUser,
				userList: []
			};
		},
		beforeMount() {
			this.open();
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			hasCubes: {
				type: Array,
				default: function () {
					return []
				}
			},
			title: {
				type: String,
				default: '提示'
			}
		},
		watch: {
			'visible': function () {
				let userList = [];
				userList = userList.concat(this.$store.state.userList);
				this.userList = this.mergeArrayMerge(this.hasCubes, userList);
			},
			show() {
				this.visible = this.show;
			}
		},
		methods: {
			open() {
				this.groupMember = [];
			},
			mergeArrayMerge(array1, array2) {
				let array = []
				array1.map((v, index) => {
					if (v !== '') {
						array2.map((c, index2) => {
							if (v.cubeId == c.cubeId) {
								array2.splice(index2, 1)
							}
						})
					}
				})
				array1 = array1.concat(array2)
				return array2
			},
			close() {
				this.$emit('update:show', false);
				this.groupMember = [];
			},
		}
	};
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-choose-cube-dilaog{
		.el-dialog__header{
			border-bottom: 1px solid #F2F2F2;
		}
		.el-dialog__body{
			padding: 0 20px;
		}

		.el-dialog__footer{
			text-align: center;
			padding: 32px 20px 20px;
		}

		.complete-btn{
			width: 120px;
			height: 30px;
			padding: 0;
		}


		.cp-member-list {
			position: relative;
			display: inline-block;
			text-align: center;
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
					width: 50px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
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

</style>
