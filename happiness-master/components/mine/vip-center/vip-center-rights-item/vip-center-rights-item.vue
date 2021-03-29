<template>
	<view class="cts-vip-items cts-flex-jc cts-flex-ac">
		<image class="cts-vip-img" :src="src" mode="aspectFit"></image>
		<text class="cts-vip-main">{{main}}</text>
		<text class="cts-vip-sub">{{sub}}</text>
		<image v-if="up" class="cts-vip-arrow" src="/static/rights_arrow.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		props:['src','main','sub','up']
		
	}
</script>

<style lang="scss" scoped>
	.cts-vip{
		&-arrow{
			width: 20rpx;
			height: 20rpx;
			position: absolute;
			right:75rpx;
			top: 35rpx;
		}
		&-items{
			position: relative;
			width: 230rpx;
			height: 220rpx;
		}
		&-img{
			width: 80rpx;
			height: 80rpx;
			margin-bottom: $cts-basic-padding;
		}
		&-main{
			font-size: $cts-middle-font;
			font-weight: 700;
			color: $cts-dark-brown;
		}
		&-sub{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-main-brown;
		}
	}
</style>
