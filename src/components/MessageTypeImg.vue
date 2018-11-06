<template>
	<div class="cp-mt-img" :class="{ myselfMessage: isMyself } ">
		<img @click="$emit('openDialog',true)"
			 :name="message.sender"
			 :src="dataCenter.getAvatarByCube(message.sender)"
			 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
		<div class="img-container ml10" :class="{ myselfContainer: isMyself } ">
			<p class="message-name" v-show="isGroup && !isMyself">{{message.name}}</p>
			<div class="img-body pointer" @click="imgSrc">
				<img :src="message.fileUrl+ '?imageView2/2/h/200' "
					 :onerror="'this.src='+'\''+message.fileUrl+'\',this.onerror = null'">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MessageTypeImg",
		data() {
			return {}
		},
		props: {
			message: {
				type: Object,
				default: function () {
					return {}
				}
			},
			isGroup: false,
			isMyself: false
		},
		computed: {},
		watch: {},
		beforeMount() {

		},
		mounted() {

		},
		methods: {
			imgSrc(e) {
				let img = new Image();
				img.onload = () => {
					var obj = {
						'imgSrc': this.message.fileUrl,
						'width': img.width,
						'height': img.height,
					}
					this.$emit('changeImgShow', obj);
				}
				img.src = this.message.fileUrl
			}
		},
		components: {}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.pointer {
		cursor: pointer;
	}

	.cp-mt-img {
		box-sizing: border-box;
		padding: 20px;
		> img {
			cursor: pointer;
			display: inline-block;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: top;
		}
		.img-container {
			position: relative;
			display: inline-block;
			max-width: 400px;
			> p {
				&:first-child {
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #666666;
					text-align: left;
				}
			}
			.img-body {
				background-color: $BD6;
				border-radius: 10px;
				margin-top: 5px;
				> img {
					/*width: 150px;*/
					max-width: 400px;
					/*height: auto;*/
					display: flex;
					height: 150px;
					width: auto;
					align-items: center;
					justify-content: center;
				}
			}
		}
		.myselfContainer {
			margin-right: 10px;
			text-align: right;
			.message-name {
				text-align: right !important;
			}
		}
	}
</style>
