<template>
	<view class="cts-og cts-basic-full-padding">
		<view class="cts-og-container cts-basic-full-padding">
			<view class="cts-og-header cts-flex-ac cts-flex-jsb cts-flex-dir cts-border-bottom-solid-head">
				<text class="cts-og-header-store">{{store_name}}</text>
				<text class="cts-og-header-state">{{state}}</text>
			</view>
			<view class="cts-og-body cts-flex-dir cts-basic-vertical-padding cts-flex-jsb cts-border-bottom-solid-head">
				<view class="cts-og-body-thumb">
					<image lazy-load="true" class="cts-og-body-img" :src="goods_thumb" mode="aspectFit"></image>
				</view>
				<view class="cts-og-body-detail">
					<text class="cts-og-body-detail-title">{{goods_name}}</text>
					<view class="cts-og-body-detail-order-detail cts-flex-ac cts-flex-jsb cts-flex-dir">
						<text class="cts-og-body-detail-order-detail-number">订单号:{{order_number}}</text>
						<text class="cts-og-body-detail-order-detail-btn">复制</text>
					</view>
					<text class="cts-og-body-detail-time">交易时间:{{create_time}}</text>
				</view>
			</view>
			<view class="cts-og-footer cts-flex-dir cts-basic-vertical-padding cts-flex-jsb cts-flex-ac">
				<view class="cts-og-footer-income cts-flex-dir cts-flex-ac cts-flex-jc">
					<text class="cts-og-footer-income-desc">付款预估收入</text>
					<text class="cts-og-footer-income-txt">￥{{income}}</text>
				</view>
				<view class="cts-og-footer-price cts-flex-dir cts-flex-ac cts-flex-jc">
					<text class="cts-og-footer-price-desc">付款金额</text>
					<text class="cts-og-footer-price-txt">￥{{price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: ['order_id','store_name','state','goods_thumb','goods_name','order_number','create_time','income','price']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(head,bottom,$cts-soso-grey,solid,1px)
	$width: 670rpx;
	.cts-og {
		width: $cts-screen-full;
		&-container {
			width: 710rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		&-header{
			width:$width;
			height: 60rpx;
		}
		&-header-store{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-header-state{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		
		&-body{
			width: $width;
		}
		&-body-thumb{
			width: 180rpx;
			height: 180rpx;
			background-color: $cts-soso-grey;
		}
		&-body-img{
			width: 180rpx;
			height: 180rpx;
		}
		
		&-body-detail{
			width: 470rpx;
		}
		&-body-detail-title{
			lines:2;
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			line-height: 45rpx;
		}
		&-body-detail-order-detail{
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
			width: 470rpx;
		}
		&-body-detail-order-detail-number{
			font-size: $cts-middle-font;
			color:$cts-middle-grey;
		}
		&-body-detail-order-detail-btn{
			font-size: $cts-middle-font;
			color: $cts-main-brown;
		}
		&-body-detail-time{
			font-size: $cts-middle-font;
			color: $cts-middle-grey;
		}
		&-footer{
			width:$width;
			height: 80rpx;
		}
		&-footer-income-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-footer-price-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-footer-income-txt{
			font-weight: 700;
			font-size: $cts-basic-font;
			color: $cts-alert-red;
		}
		&-footer-price-txt{
			font-weight: 700;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
		}
	}
</style>
