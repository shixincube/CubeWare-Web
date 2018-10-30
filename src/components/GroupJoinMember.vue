<template>
    <div class="cp-group-join-member">
		<p class="mt20">参会人员</p>
		<div class="cp-gj-list mt20">
			<div class="cp-gj-member">
				<p class="img-container pointer"
				   @click="addMember"></p>
				<p>添加</p>
			</div>
			<div class="cp-gj-member"
				 v-for="item in groupMemberList">
				<img src="./../assets/img/user-face.jpg">
				<p class="overflow">{{ item.displayName || item.cubeId }}</p>
			</div>
		</div>
		<el-button class="cp-gj-join-btn"
		           @click="joinConference"
				   v-if="isCreate">
			进入会议
		</el-button>
		<select-member v-show="showInviteDialog"
					   :showInviteList="$store.state.userList"
					   :checkMembers="groupMemberList"
					   @closeDialog="closeDialog"
					   @inviteList="inviteJoin">
		</select-member>
	</div>
</template>

<script>
	import SelectMember from './../components/SelectMember';
    export default {
        name: "GroupJoinMember",
        data() {
            return {
            	addList: [],
				showInviteDialog: false
			}
        },
        props: {
        	memberList: {
        		type: Array,
				default: function () {
					return []
				}
			},
			isCreate: {
        		type: Boolean,
				default: false
			}
		},
        computed: {
        	groupMemberList: function () {
				let list = this.memberList;
				let has = {};
				list.map((member)=>{
					has[member.cubeId] = true;
				})
				for(let item of this.addList) {
					if(has[item.cubeId]){
						continue;
					}
					list.push(item);
				}
				return list
			}
		},
        watch: {
        	"memberList": function (newVal, oldVal) {
				if(null == newVal || newVal.length == 0){
					this.addList = [];
				}
			}
		},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			addMember() {
				this.showInviteDialog = true;
			},
			joinConference() {
				this.$emit('joinConference');
			},
			inviteJoin(list) {
				for(let item of list) {
					this.addList.push(item);
				}
				this.$emit('inviteList', list);
				this.showInviteDialog = false;
			},
			closeDialog(){
				this.showInviteDialog = false;
			}
		},
        components: {
			SelectMember
		}
    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-group-join-member {
		display: inline-block;
		.cp-gj-list {
			.cp-gj-member {
				display: inline-block;
				width: 42px;
				margin-right: 24px;
				text-align: center;
				vertical-align: top;
				.img-container {
					display: inline-block;
					width: 41px;
					height: 41px;
					background: url("./../assets/img/msg_add.png") no-repeat;
					background-size: 100% 100%;
					&:hover {
						background: url("./../assets/img/msg_popadd_s.png") no-repeat;
					}
				}
				> img {
					width: 41px;
					height: 41px;
					border-radius: 50%;
				}
				> p {
					width: 40px;
					font-size: 14px;
					color: $T8;
				}
			}
		}
		.cp-gj-join-btn {
			margin-top: 80px;
			width: 120px;
			height: 30px;
			padding: 0;
			background-color: $BG7;
			color: $T3;
			border: none;
		}
	}
</style>
