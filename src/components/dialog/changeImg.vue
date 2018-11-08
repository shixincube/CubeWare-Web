<template>
	<div>
		<img id='ly-change-img' :src="imgSrc.imgSrc" alt="" @mousewheel="changeImg" :width="imgWidth" ref="drag" />
	</div>
</template>
<script>
export default {
  name: "changeImg",
  data() {
    return {
      maxW: 2000,
      imgWidth: 200
    };
  },

  beforeMount() {},
  mounted() {
    this.$nextTick(() => {
      this.drag(this.$refs.drag);
    });
  },
  props: {
    imgSrc: {
      type: Object
    },
    top: {
      type: String
    },
    left: {
      type: String
    },
    imgWidthInfo: {
      type: Number
    }
  },
  watch: {
    imgSrc() {
      this.imgWidth = this.imgWidthInfo;
      document.getElementById("ly-change-img").style.top = this.top;
      document.getElementById("ly-change-img").style.left = this.left;
    },
    imgWidthInfo() {
      this.imgWidth = this.imgWidthInfo;
    }
  },
  created() {
    this.imgWidth = this.imgWidthInfo;
  },
  methods: {
    emitImgWidth(){
      this.$emit('emitImgWidth',this.imgWidth)
    },
    drag(el) {
      let oDiv = el;
      oDiv.onmousedown = function(e) {
        e.preventDefault();
        let disX = e.clientX - oDiv.offsetLeft;
        let disY = e.clientY - oDiv.offsetTop;
        document.onmousemove = function(e) {
          console.log("move");
          let l = e.clientX - disX;
          let t = e.clientY - disY;
          oDiv.style.left = l + "px";
          oDiv.style.top = t + "px";
        };
        document.onmouseup = function(e) {
          e.preventDefault();
          document.onmousemove = null;
          document.onmouseup = null;

          return false;
        };
      };
    },

    changeImg() {
      let e = window.event || e; // old IE support
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      this.imgWidth = Math.max(
        50,
        Math.min(this.maxW, this.imgWidth + 30 * delta)
      );
       this.emitImgWidth();
    }
  },
  components: {}
};
</script>
