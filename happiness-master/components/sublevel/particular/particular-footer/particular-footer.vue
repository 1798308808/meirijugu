<template>
	<view class="cts-detail-footer cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac" elevation="5px">
		<view class="cts-detail-left cts-flex-dir cts-flex-jsb cts-flex-ac">
			<view class="cts-detail-hc cts-flex-ac cts-flex-jc">
				<image class="cts-detail-hc-img" src="/static/service.png" mode="aspectFit"></image>
				<text  class="cts-detail-hc-txt">客服</text>
			</view>
			<view class="cts-detail-hc cts-flex-ac cts-flex-jc">
				<image class="cts-detail-hc-img" src="/static/shopcart.png" mode="aspectFit"></image>
				<text class="cts-detail-hc-txt">购物车</text>
			</view>
		</view>
		<view class="cts-detail-right cts-flex-dir cts-flex-jc cts-flex-ac">
			<text class="cts-detail-btn cts-detail-color-1 cts-basic-full-padding">加入购物车</text>
			<view class="cts-empty-row"></view>
			<text class="cts-detail-btn cts-detail-color-2 cts-basic-full-padding">立即购买</text>
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
	.cts-detail{
		&-footer{
			left: 0;
			bottom: 0;
			position: absolute;
			width: $cts-screen-full;
			background-color: $cts-all-white;
			height: 100rpx;
			box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		}
		&-hc{
			width: 80rpx;
			height: 100rpx;
		}
		&-hc-img{
			width:40rpx;
			height: 40rpx;
		}
		&-hc-txt{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-btn{
			text-align: center;
			border-radius: $cts-middle-padding;
			line-height: 40rpx;
			font-size: $cts-basic-font;
			width: 230rpx;
			height: 80rpx;
		}
		&-color-1{
			color: $cts-main-brown;
			background-image: linear-gradient(to left, $cts-light-golden, $cts-gradient-dark-golden);;
		}
		&-color-2{
			color: $cts-all-white;
			background-image: linear-gradient(to right, $cts-gradient-light-red,$cts-gradient-dark-red);;
		}
		&-left{
			width: 170rpx;
		}
	}
</style>
