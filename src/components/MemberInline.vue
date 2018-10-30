<template>
	<div class="cp-member-inline-container">
		<div class="cp-member-inline pointer"
			 v-show="isRemoveSelf?!($store.state.curUser == item.cubeId):true"
			 v-for="item in userList"
			 @click="$emit('select',item)"
			 :style="{height: height ? height : '30px',
			 		  lineHeight: height ? height: '30px',
			 		  fontSize: fontSize ? fontSize : '16px'}">
			<img src="./../assets/img/user-face.jpg"
				 v-if="userList && userList.length > 0">
			<span class="ml10 overflow"
				  :style="{ color: fontColor }">{{ item.displayName != "" ? item.displayName : item.cubeId }}</span>
			<img v-show="item.role == 'MASTER'" src="./../assets/img/group_master.png" style="width: 11px;height: 13px;border-radius: 0">
		</div>
	</div>
</template>

<script>
	export default {
		name: "MemberInline",
		data() {
			return {}
		},
		props: {
			userList: {
				type: Array,
				default: function () {
					return []
				}
			},
			fontColor: {
				type: String,
				default: '#001300'
			},
			height: {
				type: String,
				default: '30px'
			},
			fontSize: {
				type: String,
				default: '16px'
			},
			isRemoveSelf:{
				type: Boolean,
				default: function () {
					return false
				}
			}

		},
		computed: {},
		watch: {},
		beforeMount() {

		},
		mounted() {

		},
		methods: {

		},
		components: {}

	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-member-inline-container {
		.cp-member-inline {
			height: 30px;
			line-height: 30px;
			overflow: hidden;
			&:hover {
				background-color: $BD6;
			}
			> img {
				width: 24px;
				height: 24px;
				border-radius: 50%;
				vertical-align: middle;
			}
			> span {
				display: inline-block;
				vertical-align: middle;
				color: $T1;
				font-size: 16px;
				width: 120px;
			}
		}
	}
</style>
