<template>
	<view>
		<view class="ad-title" :style="{top:`${s+10}px`}">广告</view>
		<view class="ad-btn" @tap="jump">跳过 {{countdown}}</view>
		<image class="ad" :src="src" mode="aspectFit"></image>
	</view>
</template>

<script>
	import ctr from '@/static/js/container.js'
	export default {
		data() {
			return {
				src:"/static/open.webp",
				s:'',
				time:3,
				countdown:'3',
				timer:null
			}
		},
		methods: {
			jump(){
				uni.navigateTo({
					url:'/pages/index/index',
					animationType:'fade-in',
					animationDuration:500
				})
			},
			startCountDown(){
				this.timer = setInterval(()=>{
					if(this.time>1){
						this.time--;
					}
					else{
						this.jump()
					}
					this.countdown=`${this.time}`
				},1000)
			}
		},
		onLoad() {
			//#ifdef APP-PLUS
				plus.navigator.closeSplashscreen()
			//#endif
		},
		onShow() {
			this.s = ctr.getStatusBarHeight();
			this.startCountDown()
		},
		onHide() {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="scss" scoped>
	.ad{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
		background-color: #380b10;
	}
	.ad-title{
		position: fixed;
		padding: 5rpx 20rpx;
		color: #fff;
		width: fit-content;
		background: rgba(0,0,0,.3);
		backdrop-filter: blur(10px);
		border-radius: 20rpx;
		font-size: 25rpx;
		right: 20rpx;
	}
	.ad-btn{
		position: fixed;
		padding: 10rpx 30rpx;
		color: #444;
		width: fit-content;
		background: rgba(255,255,255,.7);
		backdrop-filter: blur(10px);
		border-radius: 40rpx;
		font-size: 35rpx;
		right: 20rpx;
		bottom: 40rpx;
	}
</style>
