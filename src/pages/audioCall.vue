<template>
	<div class="cb-audioCall-container">
		<common-audio-call></common-audio-call>
	</div>
</template>

<script>
	import CommonAudioCall from './../components/CommonAudioCall';
	export default {
		name: "audioCall",
		data() {
			return {}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {


		},
		mounted() {

		},
		methods: {},
		components: {
			CommonAudioCall
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cb-container {
		height: 100%;
		.cb-message-content {
			display: inline-block;
			vertical-align: top;
		}
	}
</style>




