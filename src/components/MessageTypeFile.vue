<template>
	<div class="cp-mt-file">
		<div class="cp-mt-file-container" :class="{ 'myselfMessage': isMyself,'mzub-ac': isMyself}">
			<img @click="$emit('openDialog',true)"  src="./../assets/img/user-face.jpg">

			<div class="file-container ml10 mr10"
				 :class="{ myselfContainer: isMyself } ">
				<p class="message-name"
				   v-show = "isGroup && !isMyself">{{message.name}}</p>
				<div class="file-body">
					<div class="file-info-container">
						<img src="./../assets/img/file.png">
						<div class="file-info">
							<p>{{message.fileName}}</p>
							<p>{{utils.revertByteToMB(message.size)}}</p>
						</div>
						<!--<div class="file-cancel">-->
						<!--<i class="el-icon-error pointer"-->
						<!--@click="cancel"></i>-->
						<!--</div>-->
					</div>
					<el-progress class="message-progress" :status="message.status" :percentage="message.percentage">
					</el-progress>
					<div class="file-action-container">
						<span class="pointer" @click="download">下载</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MessageTypeFile",
		data() {
			return {
				messageService: window.cube.getMessageService()
			}
		},
		props: {
			message: {
				type: Object,
				default: function() {
					return {}
				}
			},
			isGroup: false,
			isMyself: false
		},
		computed: {},
		watch: {},
		beforeMount() {
			this.addAppListener();
		},
		mounted() {

		},
		methods: {
			transmit() {

			},
			cancel() {
				if(this.message.status != 'success') {
					this.messageService.cancelMessage(this.message.sn);
				}
			},
			download() {
				console.log('文件下载', this.message);
				let url = this.message.fileUrl;
				if(null == url) {
					this.$message({
						showClose: true,
						message: '文件上传中',
						type: 'info',
						duration: 1000
					});
					return false;
				}

//				download(url, this.message.fileName);
//
//				/**
//				 * 获取 blob
//				 * @param  {String} url 目标文件地址
//				 * @return {Promise}
//				 */
//				function getBlob(url) {
//					return new Promise(resolve => {
//						const xhr = new XMLHttpRequest();
//
//						xhr.open('GET', url, true);
//						xhr.responseType = 'blob';
//						xhr.onload = () => {
//							if (xhr.status === 200) {
//								resolve(xhr.response);
//							}
//						};
//
//						xhr.send();
//					});
//				}
//
//				/**
//				 * 保存
//				 * @param  {Blob} blob
//				 * @param  {String} filename 想要保存的文件名称
//				 */
//				function saveAs(blob, filename) {
//					if (window.navigator.msSaveOrOpenBlob) {
//						navigator.msSaveBlob(blob, filename);
//					} else {
//						const link = document.createElement('a');
//						const body = document.querySelector('body');
//
//						link.href = window.URL.createObjectURL(blob);
//						link.download = filename;
//
//						// fix Firefox
//						link.style.display = 'none';
//						body.appendChild(link);
//
//						link.click();
//						body.removeChild(link);
//
//						window.URL.revokeObjectURL(link.href);
//					}
//				}
//
//				/**
//				 * 下载
//				 * @param  {String} url 目标文件地址
//				 * @param  {String} filename 想要保存的文件名称
//				 */
//				function download(url, filename) {
//					getBlob(url).then(blob => {
//						saveAs(blob, filename);
//					});
//				}



				let el = document.createElement('a');
				el.setAttribute('href',  url + '?attname=' + encodeURI(this.message.fileName));
				el.setAttribute('target', '_blank');
				el.style.display = 'none';
				document.body.appendChild(el);
               console.log(url + '?attname=' + encodeURI(this.message.fileName))
				if(el.click) {
					el.click();
				} else {
					let e = document.createEvent("MouseEvents");
					e.initEvent("click", true, true);
					el.dispatchEvent(e);
				}

				document.body.removeChild(el);
			},

			onMessageCanceled(message){
				if(message.sn == this.message.sn) {
					console.log("取消文件------messageTypeFile", message);
					this.message.status = 'exception';
					this.message.percentage = 100;
				}
			},
			onMessageUploadCompleted(message){
				if(message.sn == this.message.sn) {
					this.message.fileUrl = message.file.url;
				}
			},
			addAppListener() {
				this.$bus.on('onMessageCanceled', this.onMessageCanceled);
				this.$bus.on('onMessageUploadCompleted', this.onMessageUploadCompleted);
			},
			destroyAppListener() {
				this.$bus.off('onMessageCanceled', this.onMessageCanceled);
				this.$bus.off('onMessageUploadCompleted', this.onMessageUploadCompleted);
			},
		},
		components: {},
		destroyed() {
			this.destroyAppListener();
		},

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.mr10 {
		margin-right: 10px;
	}

	.mzub-ac {
		box-align: start;
		align-items: flex-start;
	}

	.cp-mt-file {
		box-sizing: border-box;
		padding: 20px;
		.cp-mt-file-container {
			> img {
				cursor: pointer;
				display: inline-block;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				vertical-align: top;
			}
			.myselfContainer{
				margin-right: 10px;
				text-align: right;
				.message-name{
					text-align: right !important;
				}
			}
			.file-container {
				position: relative;
				display: inline-block;
				> p {
					&:first-child {
						 font-family: MicrosoftYaHei;
						 font-size: 12px;
						 color: #666666;
						 text-align: left;
					 }
				}
				.file-body{
					width: 270px;
					display: inline-block;
					vertical-align: middle;
					background-color: $BD6;
					padding: 10px;
					border: 1px solid $BD6;
					color: $T1;
					border-radius: 2px 10px 10px 10px;
					.file-info-container {
						position: relative;
						padding: 5px 10px;
						border-radius: 8px 8px 0 0;
						background-color: $BG5;
						>p {
							&:first-child {
								font-family: MicrosoftYaHei;
								font-size: 12px;
								color: #666666;
								text-align: left;
							}
						}
						>img {
							vertical-align: middle;
						}
						.file-cancel {
							position: absolute;
							top: 5px;
							right: 10px;
						}
						.file-info {
							display: inline-block;
							vertical-align: middle;
							font-size: 14px;
							>p {
								&:first-child {
									display: inline-block;
									width: 200px;
									height: 20px;
									color: #445372;
									font-size: 14px;
									line-height: 20px;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									margin-right: auto;
								}
								&:last-child {
									color: $T4;
									line-height: 12px;
								}
							}
						}
					}
					.file-action-container {
						background-color: $BG5;
						border-radius: 0 0 8px 8px;
						color: $T2;
						padding: 5px 10px;
						font-size: 14px;
						text-align: right;
					}
					.el-progress__text {
						display: none;
					}
					.el-progress-bar {
						padding-right: 0;
						margin-right: 0;
					}
					.el-progress {
						background-color: #ffffff;
					}
					.el-progress-bar__outer {
						height: 2px !important;
						border-radius: 0;
					}
					.el-progress.is-success .el-progress-bar__inner {
						background-color: #f2f6fa;
					}
				}
			}
		}
	}
</style>
