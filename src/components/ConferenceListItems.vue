<template>
	<div class="cp-conference-list-items">
		<p class="cp-conference-info">
			{{ conference.displayName }}
		</p>
		<p class="cp-conference-time">
			{{ utils.parseTimeAbbr(conference.created, 'YY-MM-DD')}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "ConferenceListItems",
		data() {
			return {
				src: 'http://download.getcube.cn/file/download/6ac1e304-0cab-41c0-865c-cf5f8e358ff5.png',
			}
		},
		props: {
			conference: {
				type: Object,
				default: function () {
					return {};
				}
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
	.cp-conference-list-items {
		position: relative;
		box-sizing: border-box;
		height: 60px;
		line-height: 60px;
		overflow: hidden;
		.cp-conference-info {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 150px;
			font-size: 14px;
			color: $T8;
		}
		.cp-conference-time {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 12px;
			color: $T4;
		}
	}
</style>
