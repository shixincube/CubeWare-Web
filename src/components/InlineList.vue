<template>
    <div class="cp-inline-list">
		<p :style="{ textAlign: leftTextAlign ,
					 width: leftWidth,
					 padding: leftPadding}">{{ leftInfo }}</p>
		<p :style="{ textAlign: rightTextAlign,
		 			 width: rightWidth,
		 			 padding: rightPadding}">{{ rightInfo }}</p>
	</div>
</template>

<script>
    export default {
        name: "InlineList",
        data() {
            return {}
        },
        props: {
        	leftInfo: {
        		type: String,
				default: 'Cube Team'
			},
			rightInfo: {
        		type: String,
				default: 'Cube Team'
			},
			leftTextAlign: {
        		type: String,
				default: 'left'
			},
			rightTextAlign: {
        		type: String,
				default: 'left'
			},
			leftWidth: {
        		type: String,
				default: '200px'
			},
			rightWidth: {
        		type: String,
				default: '200px'
			},
			leftPadding: {
        		type: String,
				default: '0 20px'
			},
			rightPadding: {
        		type: String,
				default: '0 20px'
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
	.cp-inline-list {
		width: 100%;
		> p {
			vertical-align: top;
			box-sizing: border-box;
			display: inline-block;
			color: $T8;
		}
	}
</style>
