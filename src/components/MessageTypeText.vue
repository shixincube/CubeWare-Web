<template>
    <div class="cp-mt-text mzub"
		 :class="{ myselfMessage: isMyself } ">
		<img @click="$emit('openDialog',true)"
			 :name="message.sender"
			 :src="dataCenter.getAvatarByCube(message.sender)"
			 :onerror="'this.src='+'\''+ $store.state.userFace +'\''">
		<div class="text-container ml10"
			 :class="{ myselfContainer: isMyself } ">

			<p v-show = "isGroup && !isMyself">{{message.name}}</p>
			<div :class="{'mzub':isMyself}">
			<p :class="{ 'mzub-f1': isMyself } "></p>
			<p>{{message.content}}</p>
			</div>
		</div>

	</div>
</template>

<script>

    export default {
        name: "MessageTypeText",
        data() {
            return {
				personShow:false
			}
        },
        props: {
        	message: {
        		type: Object,
				default: function () {
					return {}
				}
			},
			isGroup: false,
			isMyself: false
		},
        computed: {},
        watch: {},
        beforeMount() {

        },
        mounted() {

        },
        methods: {
			openDialog(){
				this.personShow = true;
			},

		},
        components: {

		}

    }
</script>

<style lang='scss'>
	@import "./../assets/css/color-library";
	.mzub-f1 {
		position: relative;
		-webkit-box-flex: 1;
		box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		}
		.mzub {
			display: -webkit-box;
			display: box;
			display: -webkit-flex;
			display: flex;
		}
	.cp-mt-text {

		box-sizing: border-box;
		padding: 20px;
		position: relative;
		> img {
			cursor: pointer;
			display: block;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: top;
		}

		.text-container {
			display: inline-flex;
			flex-direction: column;
			vertical-align: top;
			> p {
				&:first-child{
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #666666;
					text-align: left;
				}
				&:last-child {
					max-width: 80%;
					word-break: break-all;
					border: 1px solid $BD6;
					background-color: $BD6;
					padding: 10px 15px;
					color: $T1;
					border-radius: 0 6px 6px 6px ;
					margin-top: 5px;
				}
			}
			>div p:last-child {
				max-width: 80%;
					word-break: break-all;
					border: 1px solid $BD6;
					background-color: $BD6;
					padding: 10px 15px;
					color: $T1;
					border-radius: 0 6px 6px 6px ;
					margin-top: 5px;
					    line-height: 28px
			}
		}
		.myselfContainer{
			margin-right: 10px;
			text-align: right;
			> p {
				&:first-child{
					font-family: MicrosoftYaHei;
					font-size: 12px;
					color: #666666;
					text-align: right;
				}
				&:last-child {
					 color: $T3;
					background: #4493FA;
					border-radius:  6px 0 6px 6px ;
				 }
			}
			> div p:last-child {
					color: $T3;
					background: #4493FA;
					border-radius:  6px 0 6px 6px ;
					text-align: left;
					padding: 10px 15px;
					}
		}
	}
</style>
