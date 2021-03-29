<template>
	<view class="cts-vip-header">
		<view class="cts-vip cts-flex-dir cts-flex-jfs cts-flex-ac cts-basic-horizontal-padding">
			<image class="cts-vip-avatar" :src="avatar" mode="aspectFit"></image>
			<view class="cts-vip-detail cts-flex-jc cts-flex-afs">
				<text class="cts-vip-name">{{name}}</text>
				<text class="cts-vip-greeting">{{greetings}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		props:['name','greetings','avatar']
	}
</script>

<style lang="scss" scoped>
	.cts-vip{
		width: $cts-screen-full;
		height: 100rpx;
		margin-top: $cts-basic-padding;
		&-avatar{
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
			margin-right: $cts-middle-padding;
		}
		
		&-detail{
			height: 100rpx;
		}
		&-name{
			font-size: $cts-basic-font;
			font-weight: 700;
			color: $cts-deep-dark;
			margin-bottom: $cts-middle-padding;
		}
		&-greeting{
			font-size: $cts-middle-font;
			color:$cts-light-dark;
		}
	}
</style>
