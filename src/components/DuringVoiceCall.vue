<template>
    <div class="cp-during-voice-call">
		<p>
			正在进行语音通话
			<dot>...</dot>
			<el-button
				@click="$store.dispatch('rejectCallInvite')"
				type="danger">挂断
			</el-button>
		</p>
	</div>
</template>

<script>
    export default {
        name: "DuringVoiceCall",
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
        components: {}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-during-voice-call {
		position: absolute;
		top: 67%;
		left: 321px;
		text-align: left;
		box-sizing: border-box;
		padding: 0 20px;
		width: calc(100% - 320px);
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		z-index: 11;
		background-color: $BG20;
		> p {
			width: 100%;
			> dot {
				display: inline-block;
				height: 1em;
				line-height: 1;
				text-align: left;
				text-align: -.25em;
				overflow: hidden;
				&::before {
					display: block;
					content: '...\A..\A.';
					white-space: pre-wrap;
					animation: dot 3s infinite step-start both;
				}
			}
		}
		.el-button {
			position: absolute;
			right: 20px;
			padding: 0 10px;
			height: 30px;
			top: 5px;
		}
		@keyframes dot {
			33% {
				transform: translateY(-2em);
			}
			66% {
				transform: translateY(-1em);
			}
		}
	}
</style>
