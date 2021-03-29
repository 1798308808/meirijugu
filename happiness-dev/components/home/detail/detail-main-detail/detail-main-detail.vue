<template>
	<view class="cts-detail cts-basic-full-padding">
		<view class="cts-detail-price-box cts-flex-dir cts-flex-jsb cts-flex-ac">
			<view class="cts-flex-dir cts-flex-ac cts-flex-jc">
				<text class="cts-detail-price">￥{{goods_detail.price}}</text>
				<text class="cts-detail-dis-price">￥{{goods_detail.origin_price}}</text>
			</view>
			<text class="cts-detail-sales">销量{{goods_detail.sales}}</text>
		</view>
		<view class="cts-detail-commission cts-flex-ac cts-flex-jc">
			<image class="cts-detail-commission-bg" src="/static/money.png" mode="aspectFit"></image>
			<text class="cts-detail-commission-txt cts-detail-commission-rewards">奖￥{{goods_detail.rewards}}</text>
			<text class="cts-detail-commission-txt cts-detail-commission-desc">升级会员等级 最高可奖</text>
			<text class="cts-detail-commission-txt cts-detail-commission-amount">￥{{goods_detail.vip_rewards}}</text>
		</view>
		<view class="cts-detail-title cts-basic-vertical-padding">
			<image class="cts-detail-brand" :src="goods_detail.platform" mode="aspectFit"></image>
			<text class="cts-detail-title-txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{goods_detail.title}}</text>
			<view class="cts-detail-location cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-flex-dir cts-flex-ac cts-flex-jc">
					<image class="cts-detail-store-icon" src="/static/store.png" mode="aspectFit"></image>
					<text class="cts-detail-store">{{goods_detail.store_name}}</text>
				</view>
				<view class="cts-flex-dir cts-flex-ac cts-flex-jc">
					<image class="cts-detail-gps-icon" src="/static/gps.png" mode="aspectFit"></image>
					<text class="cts-detail-gps">{{goods_detail.location}}</text>
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['goods_detail']
	}
</script>

<style lang="scss" scoped>
	.cts-detail{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		margin-bottom: $cts-basic-padding;
		&-price-box{
			height: 80rpx;
		}
		&-price{
			font-size: $cts-ext-font;
			color: $cts-alert-red;
		}
		&-dis-price{
			margin-left: $cts-basic-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			text-decoration: line-through;
		}
		&-sales{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-commission{
			position: relative;
			width: 710rpx;
			background-color: $cts-all-white;
			height: 80rpx;
		}
		&-commission-txt{
			position:absolute;
			line-height:80rpx;
			top:0rpx;
		}
		&-commission-rewards{
			font-size: $cts-basic-font;
			color: $cts-main-brown;
			line-height:85rpx;
			left: 60rpx;
		}
		&-commission-amount{
			font-size: $cts-basic-font;
			color: $cts-light-golden;
			right: 50rpx;
		}
		&-commission-desc{
			font-size: $cts-basic-font;
			color: $cts-all-white;
			right: 160rpx;
		}
		&-commission-bg{
			width: 710rpx;
			height: 80rpx;
		}
		&-title{
			position: relative;
		}
		&-brand{
			width: 60rpx;
			height: 30rpx;
			position: absolute;
			left: 0;
			top: $cts-basic-padding;
		}
		&-title-txt{
			width: 710rpx;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-location{
			height: 60rpx;
		}
		&-store-icon{
			width: 30rpx;
			height: 30rpx;
			margin-right: $cts-middle-padding;
		}
		&-store{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-gps{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-gps-icon{
			width: 30rpx;
			height: 30rpx;
			margin-right: $cts-middle-padding;
		}
	}
</style>
