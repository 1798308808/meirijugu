<template>
	<view class="cts-store">
		<view class="cts-store-empty" :style="{height:t+'px'}"></view>
		<view class="cts-store-card cts-basic-horizontal-padding">
			<view class="cts-store-bg"></view>
			<custom-pic-loading class="cts-store-banner" :img="top_banner"></custom-pic-loading>
		</view>
		<view class="cts-store-menu cts-basic-horizontal-padding cts-flex-ac cts-flex-jc">
			<view class="cts-store-box cts-flex-dir cts-flex-wrap">
				<slot></slot>
			</view>
		</view>
		<view class="cts-store-cover cts-flex-dir cts-flex-jsb cts-flex-ac cts-padding-point" :style="{top:c+'px'}">
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
			<view class="cts-store-point"></view>
		</view>
		<loading-indicator class="cts-store-fake-loading" :animating="true" :style="{top:l+'px'}"></loading-indicator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:'',
				img:'',
				c:'',
				l:''
			};
		},
		props:['top_banner'],
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
			this.t = st + n;
			this.c = st + uni.upx2px(280)
			this.l = st - uni.upx2px(20)
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(point,$cts-basic-padding*2,$cts-basic-padding*2,null,null)
	.cts-store{
		position: relative;
		&-empty{
			flex: 1;
			background-color: $cts-new-deep-brown;
		}
		&-card{
			width: $cts-screen-full;
			position: relative;
		}
		&-bg{
			width: $cts-screen-full;
			height: 230rpx;
			background-color: $cts-new-deep-brown;
			position: absolute;
			left: 0;
			top: 0;
			border-bottom-left-radius: 120rpx;
			border-bottom-right-radius: 120rpx;
		}
		&-fake-loading{
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			left: 350rpx;
			color: $cts-all-white;
		}
		&-banner{
			width: 710rpx;
			height: 200rpx;
		}
		&-box{
			background-color: $cts-all-white;
			min-width: 710rpx;
			min-height: 410rpx;
			border-radius: $cts-basic-padding;
		}
		&-cover{
			width: $cts-screen-full;
			height: 40rpx;
			position: absolute;
			left: 0;
		}
		&-point{
			background-color: $cts-narrow-grey;
			width: 20rpx;
			height: 20rpx;
			border-radius: 50%;
		}
	}
</style>
