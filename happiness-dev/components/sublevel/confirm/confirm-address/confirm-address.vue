<template>
	<view class="cts-confirm cts-flex-dir">
		<view class="cts-confirm-icon cts-flex-ac cts-flex-jc">
			<image class="cts-confirm-icon-img" src="/static/gps_b.png" mode="aspectFit"></image>
		</view>
		
		<view class="cts-confirm-detail cts-basic-vertical-padding cts-flex-jc cts-flex-ac">
			<view class="cts-confirm-user cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-confirm-name">Ccccccoc</text>
				<text class="cts-confirm-phone">1315312589</text>
			</view>
			<text class="cts-confirm-address">广东省深圳市宝安区点击方is附件为偶家我就二维</text>
		</view>
		<view class="cts-confirm-back cts-flex-ac cts-flex-jc">
			<image class="cts-confirm-back-img" src="/static/back.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cts-confirm{
		width: 710rpx;
		border-radius: $cts-middle-padding;
		background-color: $cts-all-white;
		&-icon{
			width: 125rpx;
			height: 180rpx;
		}
		&-user{
			width: 500rpx;
		}
		&-detail{
			width: 500rpx;
			height: 180rpx;
		}
		&-back{
			width: 125rpx;
			height: 180rpx;
		}
		&-icon-img{
			width: 60rpx;
			height: 60rpx;
		}
		&-back-img{
			transform: rotate(180deg);
			width: 30rpx;
			height: 30rpx;
		}
		&-name{
			font-size: $cts-soso-font;
			font-weight: 700;
			color: $cts-dark-brown;
		}
		&-phone{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
		}
		&-address{
			margin-top: $cts-basic-padding;
			lines:1;
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
	}
</style>
