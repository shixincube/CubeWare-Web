<template>
    <div class="cp-member-inline-container">
		<div class="cp-member-inline pointer"
			 v-show="isRemoveSelf?!$store.state.curUser == item.cubeId:true"
			 v-for="item in groupsList"
			 :key="item.groupId"
			 @click="checkInfo(item)"
			 :style="{height: height ? height : '30px',
			 		  lineHeight: height ? height: '30px',
			 		  fontSize: fontSize ? fontSize : '16px'}">
			<img src="./../assets/img/group-face.jpg"
				 v-if="groupsList && groupsList.length > 0">
			<span class="ml10">{{ item.displayName }}</span>
		</div>
	</div>
</template>

<script>
    export default {
        name: "GroupInline",
        data() {
            return {}
        },
        props: {
			groupsList: {
        		type: Array,
				default: function () {
					return []
				}
			},
			isRemoveSelf:{
				type: Boolean,
				default: false
			},
			height: {
				type: String,
				default: '30px'
			},
			fontSize: {
				type: String,
				default: '16px'
			}
		},
        computed: {},
        watch: {},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			checkInfo(group){
				this.$bus.emit('checkGroupInfo',group);
			},

		},
        components: {}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-member-inline-container{
		.cp-member-inline{
			height: 30px;
			line-height: 30px;
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
				vertical-align: middle;
				color: $T1;
				font-size: 16px;
			}
		}
	}
</style>
