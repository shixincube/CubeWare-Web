<template>
	<div class="cb-scroll">
		<el-container class="el-container">
			<el-aside width="70px">
				<left-nav></left-nav>
			</el-aside>
			<el-main style="padding: 0;" class="cb-container">
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import LeftNav from './../components/LeftNav';

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
			this.checkLogin();
			this.addAppListener();
		},
		mounted() {

		},
		methods: {
			checkLogin() {
				if (!this.$store.state.curUser) {
					this.$store.dispatch('onLogined', this);
				}
			},
			addAppListener() {
				this.$bus.on('onLogined', () => {

				});

			}
		},
		components: {
			LeftNav
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cb-container {
		height: 100%;
		box-sizing: border-box;
		.cb-message-list-container {
			display: inline-block;
			width: 250px;
			height: 99%;
			overflow: hidden;
			border-right: 1px solid $BD1;
			.cp-scroll {
				height: 100%;
			}
		}
		.cb-message-content {
			display: inline-block;
			vertical-align: top;
		}
	}
</style>
