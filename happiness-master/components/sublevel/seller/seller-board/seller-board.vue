<template>
	<view class="cts-seller cts-flex-dir">
		<image class="cts-seller-bg" src="/static/sub_bg.png" mode="aspectFit"></image>
		<view class="cts-seller-desc cts-basic-full-padding cts-flex-ac cts-flex-jc">
			<text class="cts-seller-txt cts-basic-full-padding">{{desc}}</text>
		</view>
		<view class="cts-seller-detail cts-flex-ac cts-flex-jc">
			<image class="cts-seller-thumb" :src="thumb" mode="aspectFit"></image>
			<text class="cts-seller-name">{{name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['name','thumb','desc']
	}
</script>

<style lang="scss" scoped>
	.cts-seller{
		width: $cts-screen-full;
		height: 400rpx;
		position: relative;
		background-color: $cts-all-white;
		margin-bottom: $cts-basic-padding;
		&-bg{
			width: 300rpx;
			height: 400rpx;
		}
		&-desc{
			width: 450rpx;
			height: 400rpx;
		}
		&-txt{
			text-overflow: ellipsis;
			line-height: 40rpx;
			lines:8;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			width: 410rpx;
			height: 360rpx;
		}
		&-detail{
			position: absolute;
			width: 300rpx;
			height: 200rpx;
			left: 0;
			top: 100rpx;
		}
		&-thumb{
			width: 100rpx;
			height: 100rpx;
		}
		&-name{
			margin-top: $cts-basic-padding;
			width: 260rpx;
			text-align: center;
			lines:1;
			text-overflow: ellipsis;
			font-size: $cts-soso-font;
			font-weight: 700;
			color: $cts-all-white;
		}
	}
</style>
