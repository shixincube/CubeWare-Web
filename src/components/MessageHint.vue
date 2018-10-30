<template>
	<div class="cp-message-hint">
		<p>
			<i class="el-icon-warning"></i>
			<span>{{ info }}</span>
		</p>
	</div>
</template>

<script>
    export default {
        name: "MessageHint",
        data() {
            return {}
        },
        props: {
        	info: {
        		type: String,
				default: ''
			}
		},
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
	.cp-message-hint {
		text-align: center;
		> i {
			color: $T2;
		}
		> span {
			margin-left: 5px;
			color: $T4;
		}
	}
</style>
