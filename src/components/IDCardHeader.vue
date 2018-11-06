<template>
	<div class="cp-id-card-header">
		<el-dropdown trigger="click" class="drop-button" @command="handleCommand" v-show="cardType == 'group'">
			<span class="el-dropdown-link">
 	           <i class="el-icon-setting  setting-icon pointer el-icon-arrow-right"></i>
            </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item v-show="isMaster" command="destroy">解散该群</el-dropdown-item>
				<el-dropdown-item command="quit">退出该群</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<div @click="uploadImg"
			:class="idCardId == $store.state.curUser ? 'isSelf': 'hide'"></div>
		<img v-show="cardType != 'group'"
			 :name="idCardId"
			 :src="'https://dev.download.shixincube.cn/file/avatar/' + idCardId"
			 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
		<img v-show="cardType == 'group'"
			 src="./../assets/img/group-face.jpg">

		<div class="cp-id-card-header-info">
			<el-input
				v-model="idCardName"
				:disabled="!editName"
				v-focus="editName"
				@blur="changeGroupName">
			</el-input>
			<i class="el-icon-edit edit-icon pointer"
			   v-if="(cardType == 'group' && !editName && isMaster) || idCardId == $store.state.curUser"
			   @click="editName = !editName ">
			</i>
		</div>

	</div>
</template>

<script>
	export default {
		name: "IDCardHeader",
		data() {
			return {
				name: '',
				groupName: '',
				editName: false,
				groupService: window.cube.getGroupService(),
				loading: null
			}
		},
		props: {
			idCardName: {
				type: String,
				default: 'Cube Team'
			},
			cardType: {
				type: String,
				default: 'person'
			},
			idCardId: {
				type: String,
				default: '1'
			},
			isMaster: {
				type: Boolean,
				default: false
			}
		},
		computed: {},
		watch: {},
		beforeMount() {
			this.initComponent();
			this.addAppListener();
		},
		mounted() {

		},
		methods: {
			initComponent() {
				this.name = this.idCardName;
			},
			changeGroupName() {
				this.editName = !this.editName;
				this.name = this.idCardName;
				if(this.cardType == 'group'){
					this.$emit('showUpdateGroup', this.idCardName);
				}else {
					let user = new CubeUser(this.$store.state.curUser, this.idCardName, 'https://dev.download.shixincube.cn/file/avatar/' + this.idCardId)
					window.cube.getUserService().update(user);
				}
			},

			handleCommand(command) {
				if (command == "destroy") {
					let ret = this.groupService.destroy(this.idCardId);
					this.loading = this.$loading({
						lock: true,
						text: '解散群组中...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						this.loading.close();
					}, 5000);
				}
				else if (command == "quit") {
					let ret = this.groupService.quit(this.idCardId);
					if (ret) {
						this.$notify({
							title: '退出群组成功',
							duration: 1500,
							type: 'success'
						});
					}
				}

				this.$bus.emit('onQuitGroup', this.idCardId);

				this.$emit("closeDialog", false);
			},

			uploadImg() {
				window.cube.getUserService().uploadAvatar((data) => {},true);
			},

			addAppListener() {
				if (this.cardType == 'group') {
					this.$bus.on('onGroupDestroyed', () => {
						this.loading.close();
						this.$notify({
							title: '解散群组成功',
							duration: 1500,
							type: 'success'
						});
					});
				}
			},
			destroyAppListener() {
				this.$bus.off('onGroupDestroyed');
			}
		},
		components: {},
		destroyed() {
			this.destroyAppListener();
		},
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-id-card-header {
		box-sizing: border-box;
		padding: 20px;
		height: 210px;
		text-align: center;
		background-color: $BG23;
		/*border-radius: 6px 6px 0 0;*/
		.hide {
			display: none;
		}
		.isSelf {
			position: absolute;
			width: 100px;
			height: 100px;
			border-radius: 100%;
			left: calc(50% - 50px);
			&:hover {
				opacity: 0.5;
				background: url("../../static/img/change-photo-icon.png") no-repeat black center;
				cursor: pointer;
			}
		}
		> img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
		.setting-icon {
			color: #434343;
			&:hover {
				color: $T2;
			}

		}
		.drop-button {
			float: right;
		}
		.cp-id-card-header-info {
			.el-input {
				width: auto;
				&.is-disabled .el-input__inner {
					background-color: #f4f4f4;
					border-color: #f4f4f4;
					font-size: 20px;
					color: #434343;
					font-weight: 700;
					padding: 0;
					max-width: 170px;
				}
			}
			> p {
				font-weight: 700;
				margin-top: 10px;
				ont-family: MicrosoftYaHei-Bold;
				font-size: 20px;
				color: #434343;
				text-align: center;
			}
			.edit-icon {
				margin-left: 5px;
				&:hover {
					color: $T2;
				}
			}
			.el-input__inner {
				text-align: center;
				width: auto;
				max-width: 200px;
				margin-top: 10px;
				height: 30px;
				line-height: 30px;
			}
		}
	}
</style>
