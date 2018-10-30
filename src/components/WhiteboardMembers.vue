<template>
    <div class="cp-wb-members">
		<div class="wb-joined">
			<p>已加入人员</p>
			<el-scrollbar class="wb-scroll">
				<member-inline
					:user-list="joinedList"
					font-color="#ffffff">
				</member-inline>
			</el-scrollbar>
		</div>
		<div class="wb-waiting">
			<p>待加入人员</p>
			<el-scrollbar class="wb-scroll">
				<member-inline
					:user-list="waitingList"
					font-color="#ffffff">
				</member-inline>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
	import MemberInline from './../components/MemberInline';
    export default {
        name: "WhiteboardMembers",
        data() {
            return {}
        },
        props: {
        	joinedList: {
        		type: Array,
				default: function () {
					return []
				}
			},
			waitingList: {
        		type: Array,
				default: function () {
					return []
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
        components: {
			MemberInline
		}
    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-wb-members {
		height: 510px;
		overflow: hidden;
		color: $T3;
		padding: 15px;
		text-align: left;
		box-sizing: border-box;
		border-top: 1px solid rgba(242,242,242,.2);
		border-bottom: 1px solid rgba(242,242,242,.2);
		.wb-scroll {
			height: 220px;
		}
		.wb-joined {
			height: 50%;
		}
		.wb-waiting {
			height: 50%;
		}
	}
</style>
