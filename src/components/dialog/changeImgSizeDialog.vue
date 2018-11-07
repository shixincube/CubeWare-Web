<template>
	<div class="ly-change-img-container">
		<el-dialog :visible="imgShow" @close="close" :show-close="false" width="750px" :title="imgInfo">
			<div class="img-info"></div>
			<div class="ly-change-img-box">
				<change-img :imgSrc='imgSrc' :left='left' :top='top' :imgWidthInfo='imgWidth' @emitImgWidth='emitImgWidth'></change-img>		
				<!-- <img id='ly-change-img' :src="imgSrc.imgSrc" alt="" @mousewheel='changeImg' :width="imgWidth" ref="p" /> -->
			</div>
			<div class="mzub ly-changeBtn">
				<span @click="addSize" class="add">+</span> <span @click="smallSize" class="detele">-</span>
			</div>
			<div class="close-dailog-btn" @click="close">
				<i class="el-icon-close pointer fz40"></i>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import changeImg from "./changeImg";
export default {
  name: "changeImgSizeDialog",
  data() {
    return {
      imgInfo: "",
      delta: -1,
      imgWidth: 200,
      maxW: 2000,
      top: "50%",
      left: "50%"
    };
  },
  beforeMount() {},
  mounted() {},
  props: {
    imgShow: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    imgSrc: {
      type: Object
    }
  },
  watch: {
    imgSrc() {
      // this.imgWidth = this.imgSrc.width;
      this.imgInfo =
        this.imgSrc.imgSrc.replace(/(.*\/)*([^.]+).*/gi, "$2") +
        "  " +
        this.imgSrc.width +
        "*" +
        this.imgSrc.height;
    }
  },
  created() {},
  methods: {
    close() {
      this.left = "50%";
      this.top = "50%";
      this.imgWidth = 200;
      this.$emit("update:imgShow", false);
    },
    emitImgWidth(info){
      this.imgWidth = info;
    },
    addSize(e) {
      var delta = this.delta;
      if (delta < 0) {
        this.delta = 1;
      } else {
        this.delta = ++delta;
      }
      delta = this.delta;
      this.imgWidth = Math.max(
        50,
        Math.min(this.maxW, this.imgWidth + 30 * delta)
      );
      return false;
    },
    smallSize() {
      var delta = this.delta;
      if (delta < 0) {
        this.delta = --delta;
      } else {
        this.delta = -1;
      }
      delta = this.delta;
      this.imgWidth = Math.max(
        50,
        Math.min(this.maxW, this.imgWidth + 30 * delta)
      );
      return false;
    }
  },
  components: {
    changeImg
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/grid";
.ly-change-img-container {
  .el-dialog__header {
    border-bottom: 1px solid #f2f2f2;
  }
  div {
    box-sizing: border-box;
  }
  .ly-changeBtn {
    span {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 1px solid #999999;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        background-color: #4493fa;
        color: #ffffff;
      }
    }
  }
  .ly-change-img-box {
    width: 710px;
    height: 400px;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
  .close-dailog-btn {
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    i {
      font-size: 24px;
    }
  }
}
</style>