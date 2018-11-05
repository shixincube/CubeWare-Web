<template>
	<div class="ly-change-img-container">
		<el-dialog :visible="imgShow" @close="close" :show-close="false" width="750px" :title="imgInfo">
			<div class="img-info"></div>
			<div class="ly-change-img-box">
				<img id='ly-change-img' :src="imgSrc.imgSrc" alt="" @mousewheel='changeImg' :width="imgWidth" @mousedown="move"/>
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
	export default {
		name: "changeImgSizeDialog",
		data() {
			return {
				imgInfo: '',
				delta: -1,
				imgWidth: 200,
				maxW: 2000,
			};
		},
		beforeMount() {},
		mounted() {},
		props: {
			imgShow: {
				type: Boolean,
				default: function() {
					return false
				}
			},
			imgSrc: {
				type: Object,
			}
		},
		watch: {
			imgSrc() {
				this.imgWidth = this.imgSrc.width;
				this.imgInfo = this.imgSrc.imgSrc.replace(/(.*\/)*([^.]+).*/ig, "$2") + '  ' + this.imgSrc.width + '*' + this.imgSrc.height;
			}
		},
		created() {},
		methods: {
			 move(e){
				let odiv = e.target;    //获取目标元素
				
				//算出鼠标相对元素的位置
				let disX = e.clientX - odiv.offsetLeft;
				let disY = e.clientY - odiv.offsetTop;
				document.onmousemove = (e)=>{    //鼠标按下并移动的事件
					//用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
					let left = e.clientX - disX;  
					let top = e.clientY - disY;
					//绑定元素位置到positionX和positionY上面
					this.positionX = top;
					this.positionY = left;
					
					//移动当前元素
					odiv.style.left = left + 'px';
					odiv.style.top = top + 'px';
				};
				document.onmouseup = (e) => {
					document.onmousemove = null;
					document.onmouseup = null;
				};
				},
			close() {
				document.getElementById('ly-change-img').style.left = '50%'
				document.getElementById('ly-change-img').style.top = '50%'

				this.$emit('update:imgShow', false);
			},
			changeImg() {
				let e = window.event || e; // old IE support   
				let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				this.imgWidth = Math.max(50, Math.min(this.maxW, this.imgWidth + (30 * delta)));
			},
			addSize(e) {
				var delta = this.delta;
				if(delta < 0) {
					this.delta = 1
				} else {
					this.delta = ++delta
				}
				delta = this.delta
				this.imgWidth = Math.max(50, Math.min(this.maxW, this.imgWidth + (30 * delta)));
				return false;
			},
			smallSize() {
				var delta = this.delta;
				if(delta < 0) {
					this.delta = --delta
				} else {
					this.delta = -1
				}
				delta = this.delta
				this.imgWidth = Math.max(50, Math.min(this.maxW, this.imgWidth + (30 * delta)));
				return false;
			},
		},
		components: {}

	}
</script>

<style lang="scss">
	@import './../../assets/css/grid';
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
					background-color: #4493FA;
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
		.close-dailog-btn{
			width: 24px;
			height: 24px;
			overflow: hidden;
			cursor: pointer;
			position: absolute;
			top: 10px;
			right: 10px;
			i{
				font-size: 24px;
			}
		}
	}
</style>