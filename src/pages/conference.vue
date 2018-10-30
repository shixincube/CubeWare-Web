<template>
	<div class="cp-scroll">
		<div class="cb-conference-list-container">
			<conference-list
				:createDialogVisible="createDialogVisible"
				@changeConference="changeConference"
				@changeCreateDialog="changeCreateDialog"></conference-list>
			<conference-container
				v-show="nowConference.conferenceId != null && !createDialogVisible"
				:conference="nowConference"></conference-container>
		</div>
	</div>
</template>

<script>
	import ConferenceList from './../components/ConferenceList';
	import ConferenceContainer from './../components/ConferenceContainer';
	export default {
		name: "conference",
		data() {
			return {
				nowConference: {},
				createDialogVisible: false
			}
		},
		props: {},
		computed: {},
		watch: {},
		beforeMount() {
		},
		mounted() {

		},
		methods: {
			changeConference(conference) {
				this.nowConference = conference;
			},
			changeCreateDialog(createDialogVisible){
				this.createDialogVisible = createDialogVisible;
			}
		},
		components: {
			ConferenceList,
			ConferenceContainer
		}
	}
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";

	.cp-scroll {
		height: 100%;
		box-sizing: border-box;
		.cb-conference-list-container {
			display: inline-block;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>




