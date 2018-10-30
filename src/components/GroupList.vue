<template>
    <div class="cp-group-list">
		<div class="group-list-header">
			<p>
				<span>群成员</span>
				<span>({{ groupList.members ? groupList.members.length + groupList.masters.length : '' }})</span>
				<!--<i class="pointer cb-add-friend"></i>-->
			</p>
		</div>
		<el-scrollbar class="cb-scroll"  v-show="groupList && groupList.members && groupList.members.length > 0">
			<div class="group-list-items">
				<member-inline @select = "selectUser" :userList="groupList.masters.concat(groupList.members)"></member-inline>
			</div>
		</el-scrollbar>
		<person-info-dialog :userInfo="curInfo" :personShow.sync="personShow"></person-info-dialog>
	</div>
</template>

<script>
	import MemberInline from './../components/MemberInline';
	import PersonInfoDialog from './dialog/PersonInfoDialog'
    export default {
        name: "GroupList",
        data() {
            return {
				personShow: false,
				curInfo: {},
			}
        },
        props: {
        	groupList: {
        		type: Object,
				default: function () {
					return {}
				}
			}
		},
        computed: {},
        watch: {
		},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			selectUser(user){
				this.personShow = true;
				this.curInfo = user;
			},
		},
        components: {
			MemberInline,
			PersonInfoDialog
		}
    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-group-list {
		width: 180px;
		height: 400px;
		display: inline-block;
		.group-list-header {
			height: 30px;
			line-height: 30px;
			> p {
				> span {
					vertical-align: top;
					font-size: 14px;
					color: #3F3F3F;
					line-height: 21px;
					:last-child{
						font-size: 14px;
						color: #3F3F3F;
						line-height: 21px;
					}
				}

			}
			.cb-add-friend{
				display: inline-block;
				width: 12px;
				height: 12px;
				vertical-align: middle;
				background: url("./../assets/img/btn_addfriend_n@3x.png") no-repeat;
				background-position: center top;
				background-size: 12px 12px;
				float: right;
				margin: 3px;
				&:hover {
					background: url("./../assets/img/btn_addfriend_s@3x.png") no-repeat;
					background-position: center top;
					background-size: 12px 12px;
				}
			}
		}
		.cb-scroll {
			height: 100%;
			padding-bottom: 10px;
			.group-list-items{
				.cp-member-inline-container .cp-member-inline > span{
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #262728;
					display: inline-block;
					width: 120px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

		}
	}
</style>
