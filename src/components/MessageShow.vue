<template>
	<div>
		<div v-if="message.type === 'text'">
			<message-text @openDialog ="openDialog" :message="message"
						  :isGroup="isGroup"
						  :isMyself="isMyself"></message-text>
		</div>
		<div v-else-if="message.type === 'image'">
			<message-img @openDialog ="openDialog" @changeImgShow='changeImgShow' :message="message"
						 :isGroup="isGroup"
						 :isMyself="isMyself"></message-img>
		</div>
		<div v-else-if="message.type === 'file'">
			<message-file @openDialog ="openDialog" :message="message"
						  :isGroup="isGroup"
						  :isMyself="isMyself"></message-file>
		</div>
		<div v-else-if="message.type === 'voice'">
			<message-voice @openDialog ="openDialog" :message="message"
						   :isGroup="isGroup"
						   :isMyself="isMyself"></message-voice>
		</div>
		<div v-else-if="message.type === 'call'">
			<message-call @openDialog ="openDialog" :direction="message.direction"
						  :caller="message.caller"></message-call>
		</div>
		<person-info-dialog :userInfo="curInfo" :personShow.sync="personShow"></person-info-dialog>
		<change-img-size-dialog :imgSrc='imgSrc' :imgShow.sync='imgShow'></change-img-size-dialog>
		
	</div>
</template>

<script>
	import MessageText from './../components/MessageTypeText';
	import MessageImg from './../components/MessageTypeImg';
	import MessageFile from './../components/MessageTypeFile';
	import MessageCall from './../components/MessageTypeCall';
	import MessageVoice from './../components/MessageTypeVoice';
	import PersonInfoDialog from './dialog/PersonInfoDialog';
	import changeImgSizeDialog from './dialog/changeImgSizeDialog';

	export default {
		name: "MessageShow",
		data() {
			return {
				imgSrc:{
					'imgSrc': '',
					'width': '',
					'height': '',
				},
				imgShow:false,
				isMyself: false,
				curInfo: null,
				personShow: false
			}
		},
		props: {
			message: {
				type: Object,
				default: function () {
					return {}
				}
			},
			isGroup: false
		},
		computed: {},
		watch: {},
		beforeMount() {
			this.queryCurInfo();
		},
		mounted() {
			this.initMessage();
		},
		methods: {
			changeImgShow(obj){
				this.imgShow = true;
				this.imgSrc = obj;
			},
			initMessage() {
				this.isMyself = this.message.sender == cube.accName;
				console.log(cube.accName)
			},

			queryCurInfo() {
				this.dataCenter.getInfoByCube(this.message.sender, info => {
					this.curInfo = info;
				});
			},

			openDialog() {
				this.personShow = true;
			}
		},
		components: {
			MessageText,
			MessageImg,
			MessageFile,
			MessageCall,
			MessageVoice,
			PersonInfoDialog,
			changeImgSizeDialog
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.myselfMessage {
		display: flex;
		flex-direction: row-reverse;
	}
</style>
