<template>
	<div class="cp-conference-list">
		<el-button class="conference-create-btn"
				   @click="showCreate">
			<i class="el-icon-plus"></i>创建会议
		</el-button>
		<el-scrollbar class="cp-conference-scroll">
			<el-menu
				default-active="1"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				@select="handleSelect">
				<el-menu-item
					v-for="item in sortConferences"
					:index="item.conferenceId"
					:key="item.conferenceId">
					<conference-list-items :conference="item"></conference-list-items>
				</el-menu-item>
			</el-menu>
		</el-scrollbar>

		<div class="cp-create-conference" v-show="createDialogVisible">
			<h2>创建会议</h2>
			<div class="cp-cm-inline-list mt20">
				<span>会议主题</span>
				<el-input type="textarea"
					      placeholder="请输入会议主题"
					      v-model="conferenceTopic">
				</el-input>
			</div>
			<div class="cp-cm-inline-list mt20">
				<span>开始时间</span>
				<div>
					<el-date-picker
					editable=false
						v-model="date"
						type="date"
						value-format="timestamp"
						placeholder="选择日期"
						:picker-options="pickerOptions"
						>
					</el-date-picker>
					<el-time-select
					editable=false
						v-model="time"
						:picker-options="timePickerOptions"
						@focus='focus'
						placeholder="选择时间">
					</el-time-select>
				</div>
			</div>
			<div class="cp-cm-inline-list mt20">
				<span>会议时长</span>
				<el-input-number :controls="false"
								 :max="60*24"
								 :min="1"
								 v-model="duration">
				</el-input-number>
			</div>
			<group-join-member :memberList="inviteList"></group-join-member>
			<el-button class="cp-create-conference-btn" :class="{'active':time&&date&&duration&&conferenceTopic}"
					   @click="createConference">
				创建会议
			</el-button>
		</div>

		<!--<el-dialog-->
			<!--title="创建会议"-->
			<!--:visible.sync="createDialogVisible"-->
			<!--width="70%"-->
			<!--:before-close="createClose">-->
			<!--<span>会议主题</span>-->
			<!--<el-input-->
				<!--type="textarea"-->
				<!--:autosize="{ minRows: 5, maxRows: 5}"-->
				<!--placeholder="请输入内容"-->
				<!--v-model="conferenceName"-->
				<!--maxlength="200">-->
			<!--</el-input>-->
			<!--<span>参会人员</span>-->
			<!--<div>-->
				<!--<el-select-->
					<!--v-model="inviteList"-->
					<!--multiple-->
					<!--collapse-tags-->
					<!--placeholder="请选择">-->
					<!--<el-option-->
						<!--v-for="item in this.$store.state.userList"-->
						<!--:key="item.cubeId"-->
						<!--:label="item.cubeId"-->
						<!--:value="item.cubeId">-->
					<!--</el-option>-->
				<!--</el-select>-->
			<!--</div>-->
			<!--<span slot="footer" class="dialog-footer">-->
				<!--<el-button @click="createClose">取 消</el-button>-->
				<!--<el-button type="primary" @click="createConference">确 定</el-button>-->
			<!--</span>-->
		<!--</el-dialog>-->
	</div>
</template>

<script>
	import ConferenceListItems from './ConferenceListItems';
	import GroupJoinMember from './GroupJoinMember';
	export default {
		name: "ConferenceList",
		data() {
			return {
				pickerOptions:{
					 disabledDate(time) {
						return time.getTime() < Date.now()-86400000;
					},
				},
				timePickerOptions:{
							start:'00:00',
							step: '00:30',
							end: '24:00',
							minTime:'00:00'
						},
				conferenceService: window.cube.getConferenceService(),
				conferenceName: '',
				inviteList: [],
				conferences: [],
				conferenceTopic: '',
				date: '',
				time: '',
				duration: 30
			}
		},
		computed: {
			sortConferences(){
				return this.conferences.sort((a, b)=>{
					return b.created - a.created;
				})
			}
		},
		watch: {},
		props: {
			memberList: {
				type: Array,
				default: function () {
					return []
				}
			},
			createDialogVisible: {
				type: Boolean,
				default: false
			}
		},
		beforeMount() {
			console.log('渲染监听');
			this.addAppListener();
		},
		mounted() {
			setTimeout(()=>{
				this.queryConferences();
			}, 100);
		},
		methods: {
			focus(){
				let nowDate = this.utils.formatTime(Date.now(), 'YY-MM-DD'), selectDate = this.utils.formatTime(this.date, 'YY-MM-DD');
				if(selectDate <= nowDate){
					this.timePickerOptions.minTime = this.utils.parseTimeAbbr(Date.now())

				}else{
					this.timePickerOptions.minTime = ''
				}

			},
			handleOpen() {

			},
			handleClose() {

			},
			handleSelect(key, keyPath){
				for(let c of this.conferences){
					if(c.conferenceId == key){
						this.$emit('changeConference', c);
						this.changeCreateDialog(false);
						break;
					}
				}
			},
			createClose(){
				this.changeCreateDialog(false);
			},
			showCreate(){
				this.changeCreateDialog(true);
			},
			createConference(){
				if(this.duration == undefined || this.time == '' || this.date == '' || this.conferenceTopic == ''){
					this.$message({
					showClose: true,
					message: '请填写完整',
					type: 'error',
					duration: 2000
				});
					return false;
				}
				let coferenceConfig = new CubeConferenceConfig();
				coferenceConfig.displayName = this.conferenceTopic;
				let startTime = new Date().getTime();
				if('' != this.time && '' != this.date){
					startTime = this.timeToTimestamp(this.time) + this.date;
				}
				let invites = [];
				for(let invite of this.inviteList){
					invites.push(invite.cubeId);
				}
				coferenceConfig.invites = invites;
				coferenceConfig.type = CubeGroupType.VIDEO_CONFERENCE;
				coferenceConfig.startTime = startTime;
				coferenceConfig.duration = this.duration * 60 || 60;
				this.conferenceService.create(coferenceConfig);
				this.initData();
				this.changeCreateDialog(false);
			},
			onVideoCreated(conference, from){
				console.log('list中的会议申请成功', conference, from);
				this.conferences.push(conference);
				this.$emit('changeConference', conference);
			},
			onVideoInvited(res){
				console.log('收到了邀请', res);
				for(let conference of this.conferences){
					if(conference.conferenceId == res.conference.conferenceId){
						return;
					}
				}
				this.conferences.push(res.conference);
			},
			onVideoQuited(res){
				console.log("会议退出====>onConferenceQuited", res);
				if(res.quitMember.cubeId == cube.accName){
					this.queryConferences();
				}
			},
			onVideoUpdated(res){
				this.queryConferences();
			},
			onVideoDestroyed(res){
				this.queryConferences();
			},
			addAppListener(){
				this.$bus.on('onVideoCreated', this.onVideoCreated);
				this.$bus.on('onVideoInvited', this.onVideoInvited);
				this.$bus.on('onVideoQuited', this.onVideoQuited);
				this.$bus.on('onVideoDestroyed', this.onVideoDestroyed);
				this.$bus.on('onVideoUpdated', this.onVideoUpdated);
			},
			destroyAppListener(){
				this.$bus.off('onVideoCreated', this.onVideoCreated);
				this.$bus.off('onVideoInvited', this.onVideoInvited);
				this.$bus.off('onVideoQuited', this.onVideoQuited);
				this.$bus.off('onVideoDestroyed', this.onVideoDestroyed);
				this.$bus.off('onVideoUpdated', this.onVideoUpdated);
			},
			queryConferences(){
				if(this.$store.state.curUser){
					this.conferenceService.queryNowConference([CubeGroupType.VIDEO_CONFERENCE], (conferences)=>{
						let change = conferences.length > 0 ? conferences[0] : {};
						this.$emit('changeConference', change);
						this.conferences = conferences;
					})
				}
			},
			// HH:SS格式的字符串转时间戳
			timeToTimestamp(time){
				let times = time.split(':');
				return times[0] * 60 * 60 * 1000 + times[1] * 60 * 1000;
			},
			initData(){
				this.conferenceTopic = '';
				this.inviteList = [];
				this.time = '';
				this.date = '';
				this.duration = 30;
			},
			changeCreateDialog(isShow){
				this.$emit('changeCreateDialog', isShow);
			}
		},
		components: {
			ConferenceListItems,
			GroupJoinMember
		},
		beforeDestroy(){
			console.log('销毁监听');
			this.destroyAppListener();
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.cp-conference-list{
		display: inline-block;
		width: 260px;
		height: 100%;
		box-sizing: border-box;
		border-right: 1px solid $BD1;
		.cp-conference-scroll {
			height: calc(100% - 100px);
			.el-menu-item {
				&:hover, &.is-active{
					background-color: rgba(245, 245, 245, 0.6);
				}
			}
		}
		.cp-create-conference {
			width: calc(100% - 330px);
			box-sizing: border-box;
			padding: 60px;
			position: absolute;
			right: 0;
			top: 0;
			.cp-cm-inline-list {
				display: flex;
				flex-direction: row;
				span {
					display: inline-block;
					width: 100px;
					flex-shrink: 1;
				}
				div{
					flex-shrink: 10;
				}
				.el-input {
					.el-input__inner {
						border-radius: 2px;
						background-color: $BG1;
						border: none;
					}
				}
				.el-textarea {
					.el-textarea__inner {
						height: 90px;
						border-radius: 2px;
						background-color: $BG1;
						border: none;
					}
				}
				.el-input__prefix {
					display: none;
				}
			}
			.cp-create-conference-btn {
				display: block;
				margin-top: 80px;
				border: none;
				width: 120px;
				padding: 0;
				color: $T3;
				height: 30px;
				background-color: #b3b3b3;
				&.active{
					background-color: $BG21;
				}
			}
		}
		.ln-container{
			height: 100px;
			text-align: center;
			line-height: normal;
			> img {
				margin-top: 20px;
				width: 40px;
				height: 40px;
			}
			p {
				margin-top: 10px;
			}
		}
		.conference-add-icon-btn {
			margin: 0px;
			font-size: 45px;
			&:hover {
				 color: $T2;
			 }
		}
		.conference-create-btn{
			margin: 25px 0 20px 20px;
			width: 220px;
			height: 40px;
			color: $T1;
			border: 1px solid $BD5;
			border-radius: 2px;
			font-size: 14px;
			&:hover {
				background-color: transparent;
			}
			.el-icon-plus {
				top: -10px;
				margin-right: 5px;
				font-size: 12px;
			}
		}
	}
	.time-select-item:last-child{
		padding-bottom: 18px;
	}
</style>
