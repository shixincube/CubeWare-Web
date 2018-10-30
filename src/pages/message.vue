<template>
	<div class="cp-scroll">
		<div class="cb-message-list-container">
			<message-list></message-list>
			<message-container></message-container>
			<!--<group-list></group-list>-->
		</div>
	</div>
</template>

<script>
	import MessageList from './../components/MessageList';
	import GroupList from './../components/GroupList';
	import MessageContainer from './../components/MessageContainer';

	export default {
		name: "index",
		data() {
			return {
				groupList: []
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {
			this.$bus.on('onLogined',function(){
				console.log("登录成功通知 - message")
			});
			this.$bus.on('onMessageSent',message =>{
				console.log("消息发送成功通知",message)
			});

		},
		mounted() {

		},
		methods: {},
		components: {
			MessageContainer,
			MessageList,
			GroupList
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-scroll {
		height: 100%;
		overflow: hidden;
		.cb-message-list-container {
			display: inline-block;
			width: 100%;
			height: 100%;
			overflow: hidden;
			border-right: 1px solid $BD1;
		}
		.cb-message-content {
			display: inline-block;
		}
	}
</style>




