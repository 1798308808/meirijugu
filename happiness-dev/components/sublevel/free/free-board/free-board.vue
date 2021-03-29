<template>
	<view class="cts-free">
		<image class="cts-free-bg" src="/static/free.png" mode="aspectFit"></image>
		<view class="cts-free-button cts-flex-jc cts-flex-ac" ref="btn" @tap="show">
			<text class="cts-free-txt">规</text>
			<text class="cts-free-txt">则</text>
		</view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation')
	import ctr from '@/static/js/container.js'
	
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			let i = true;
			setInterval(()=>{
				this.move(i)
				i = !i;
			},1000)
		},
		methods:{
			show(){
				this.$emit('returnRules',{msg:'ok'})
			},
			move(al){
				let ele = ctr.getBindingEle(this.$refs.btn)
				
				if(al){
					animation.transition(ele, {
					styles: {
						transform:'translateY(20)'
					},
					duration: 1000, //ms
					timingFunction: 'ease-out',
					needLayout:false,
					delay: 0 //ms
					}, function () {
						
					})
				}
				else{
					animation.transition(ele, {
					styles: {
						transform:'translateY(0)'
					},
					duration: 1000, //ms
					timingFunction: 'ease-out',
					needLayout:false,
					delay: 0 //ms
					}, function () {
						
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(move,transform,1s,linear,null,null)
	
	.cts-free{
		position: relative;
		width: $cts-screen-full;
		height: 850rpx;
		&-bg{
			width: $cts-screen-full;
			height: 850rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-button{
			position: absolute;
			right: $cts-basic-padding;
			top: 365rpx;
			width: 70rpx;
			height: 120rpx;
			border-radius: $cts-basic-padding;
			background-image: linear-gradient(to bottom,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-txt{
			color: $cts-all-white;
			font-size: $cts-basic-font;
		}
	}
</style>
