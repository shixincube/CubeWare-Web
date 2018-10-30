<template>
    <div class="cp-common-title"
		 :style="{ borderBottom: border ? '1px solid #dddddd' : 'none',
		 		   textAlign: textAlign,
		 		   width: width,
		 		   height: height,
		 		   lineHeight: height,
		 		   position: position,
		 		   backgroundColor: backgroundColor }">
		<h2 :style="{ color: color,
					  fontSize: fontSize}">{{title}}</h2>
	</div>
</template>

<script>
    export default {
        name: "CommonTitle",
        data() {
            return {}
        },
        props: {
        	title: {
        		type: String,
				default: 'Cube Team'
			},
			border: {
        		type: Boolean,
				default: true
			},
			textAlign: {
        		type: String,
				default: 'left'
			},
			width: {
        		type: String,
				default: '100%'
			},
			height: {
        		type: String,
				default: '80px'
			},
			color: {
        		type: String,
				default: '#333333'
			},
			fontSize: {
        		type: String,
				default: '26px'
			},
			position: {
        		type: String,
				default: 'fixed'
			},
			backgroundColor: {
        		type: String,
				default: '#ffffff'
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
	.cp-common-title {
		top: 0;
		height: 80px;
		line-height: 80px;
		padding: 0 20px;
		box-sizing: border-box;
		z-index: 1000;
		> h2 {
			font-weight: 400;
		}
	}
</style>
