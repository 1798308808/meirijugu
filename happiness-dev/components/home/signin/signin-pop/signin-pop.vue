<template>
	<view class="cts-signin cts-flex-ac cts-flex-jc" :style="{height:h+'px'}">
		<view class="cts-signin-box cts-flex-ac" ref="pop" @tap="close">
			<image class="cts-signin-light" src="/static/light.png" mode="aspectFit" ref="light"></image>
			<image class="cts-signin-bg" src="/static/signin_board.png" mode="aspectFit"></image>
			<image class="cts-signin-close" src="/static/close_w.png" mode="aspectFit"></image>
			<text class="cts-signin-main">{{main}}</text>
			<text class="cts-signin-sub">{{sub}}</text>
		</view>
	</view>
</template>

<script>
	const Binding = uni.requireNativePlugin('bindingx');
	import ctr from '@/static/js/container.js'
	export default {
		data() {
			return {
				h:''
			};
		},
		props:['show','main','sub'],
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.h = s - tb;
		},
		methods:{
			close(){
				this.$emit('update:show',false)
			},
			show(){
				let ele = ctr.getBindingEle(this.$refs.pop)
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>450`,
					props: [{
						element: ele,
						property: 'transform.scale',
						expression: 'easeOutElastic(t,0,1,450)'
					}]
				}, function(e) {
				});
			},
			spin(){
				let that = this;
				let ele = ctr.getBindingEle(this.$refs.light)
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>10000`,
					props: [{
						element: ele,
						property: 'transform.rotateZ',
						expression: 'linear(t,0,720,10000)'
					}]
				}, function(e) {
					if(e.state=='exit'){
						that.$emit('update:show',false)
					}
				});
			}
		},
		mounted() {
			setTimeout(()=>{
				this.spin()
				this.show()
			},100)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-signin{
		width: $cts-screen-full;
		background-color: rgba(0,0,0,.3);
		position: absolute;
		left: 0;
		top: 0;
		&-box{
			transform: scale(0);
			width: 450rpx;
			height: 750rpx;
		}
		&-light{
			position: absolute;
			left: 75rpx;
			top: 50rpx;
			width: 300rpx;
			height: 300rpx;
		}
		&-bg{
			top: 125rpx;
			left: 0;
			width: 450rpx;
			height: 500rpx;
		}
		&-close{
			width: 60rpx;
			height: 60rpx;
			position: absolute;
			left: 195rpx;
			bottom: 0;
		}
		&-main{
			margin-top: -$cts-basic-padding;
			font-size: $cts-soso-font;
			color: $cts-main-brown;
		}
		&-sub{
			margin-top: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
