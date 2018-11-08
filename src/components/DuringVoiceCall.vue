<template>
    <div class="cp-during-voice-call">
		<p>语音通话</p>
		<div class="voice-call-box">
			<p>正在进行语音通话<span>...</span></p>
			
		</div>
		<div class="quit-button">
			<el-button
				@click="quitCall" 
				type="danger">挂断
			</el-button>
		</div>
	</div>
</template>
 
<script>
export default {
  name: "DuringVoiceCall",
  data() {
    return {};
  },
  props: {},
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {},
  methods: {
	  quitCall(){
		  console.log('挂断一对一语音');
		  this.$store.dispatch('rejectCallInvite');
		  this.$store.commit('updateInviteType', '');
	  }
  },
  components: {}
};
</script>

<style lang='scss'>
@import "./../assets/css/color-library";
.cp-during-voice-call {
  position: absolute;
  top: 10%;
  left: 321px;
  text-align: left;
  box-sizing: border-box;
  padding: 0 20px;
  height: 600px;
  width: 860px;
  line-height: 40px;
  font-size: 16px;
  z-index: 1111;
  //   background-color: $BG20;
  background-color: #000000;
  color: #c0c0c0;
  .voice-call-box {
    position: relative;
    height: 560px;
    > p {
      position: absolute;
      text-align: center;
      top: 45%;
      color: #c0c0c0;
	  left: 0;
	  right: 0;
	  > span {
      display: inline-block;
      height: 1em;
      line-height: 1;
      text-align: left;
      text-align: -0.25em;
      overflow: hidden;
      &::before {
        display: block;
        content: "...\A..\A.";
        white-space: pre-wrap;
        animation: dot 3s infinite step-start both;
      }
    }
    }
    
   
  }
  .quit-button{
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  height: 40px;
	border-top: 1px solid rgba(242, 242, 242, 0.2);
	  .el-button {
		position: absolute;
		right: 20px;
		padding: 0 10px;
		height: 30px;
		top: 5px;
	}
  }
  
  @keyframes dot {
    33% {
      transform: translateY(-2em);
    }
    66% {
      transform: translateY(-1em);
    }
  }
}
</style>
