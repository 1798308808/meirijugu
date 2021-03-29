<template>
	<view class="cts-cover" :style="{height:h+'px',backgroundColor:transparent?'rgba(0,0,0,0)':'rgba(0,0,0,.3)',position:tabbar?'absolute':'fixed'}" @touchmove.prevent>
		<view v-if="!nothing" class="cts-cover-container cts-flex cts-flex-jc cts-flex-ac" :style="{top:t + 'px'}">
			<view class="cts-cover-box cts-flex cts-flex-dir cts-flex-ac cts-flex-jc">
				<view class="cts-cover-item" :class="[`cts-cover-tri-${index}`]" v-for="(item,index) in bar" ref="bar"></view>
			</view>
		</view>
	</view>
</template>

<script>
	const Binding = uni.requireNativePlugin('bindingx');
	import ctr from '@/static/js/container.js'
	export default {
		data() {
			return {
				h:'',
				bar:[
					{
						active:false
					},
					{
						active:false
					},
					{
						active:false
					}
				],
				timer:null
			};
		},
		props:['transparent','tabbar','nothing'],
		created() {
			this.h = this.$store.state.common.screenHeight;
			this.t = this.h/2 - uni.upx2px(70)
		},
		mounted() {
			uni.hideKeyboard()
			if(this.nothing)return;
			let task = this.animateBar()
			let i =-1;
			this.timer = setInterval(()=>{
				i+=1;
				if(i>2){
					i=0;
					task.next(true)
				}
				else{
					task.next()
				}
			},800)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods:{
			animateBar:function *(){
				for(let i = 0; true; i++) {
				    let reset = yield this.loadingAnimation(i);
				    if(reset) { i = -1; }
				  }
			},
			loadingAnimation(index){
				let ele = ctr.getBindingEle(this.$refs.bar[index])
				
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>1500`,
					props: [{
						element: ele,
						property: 'transform.translateY',
						expression: 'easeOutElastic(t,-8,8,1500)'
					}]
				}, function(e) {
				});
				return index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-cover{
		top: 0;
		left: 0;
		width: $cts-screen-full;
		&-box{
			height: 140rpx;
			overflow: hidden;
		}
		&-item{
			width: 13rpx;
			height: 40rpx;
			background-color: $cts-deep-dark;
			margin-left: $cts-min-padding;
			margin-right: $cts-min-padding;
			border-radius: $cts-basic-padding;
		}
		&-container{
			width: 140rpx;
			height: 140rpx;
			background-color: $cts-all-white;
			border-radius: $cts-middle-padding;
			position: absolute;
			left: 305rpx;
		}
	}
</style>
