<template>
	<view class="cts-detail cts-basic-full-padding">
		<text class="cts-detail-title">{{title}}</text>
		<view class="cts-detail-activity cts-flex-dir cts-flex-ac cts-flex-jfs cts-basic-vertical-padding">
			<text v-if="!!deduct" class="cts-detail-ac1 cts-border-desc cts-padding-desc">{{deduct}}</text>
			<view class="cts-empty-row"></view>
			<text v-if="!!earn" class="cts-detail-ac2 cts-border-desc-r cts-padding-desc">{{earn}}</text>
		</view>
		<text class="cts-detail-price">￥{{price}}</text>
		<view class="cts-detail-vip cts-flex-afs cts-flex-jc cts-padding-vip" v-if="!!vip">
			<image class="cts-detail-vip-img" src="/static/upgrade_hint.png" mode="aspectFit"></image>
			<view class="cts-flex-ac cts-flex-jfs cts-flex-dir">
				<text class="cts-detail-vip-desc">{{vip}}</text>
				<text class="cts-detail-question-mark">?</text>
			</view>
			<text class="cts-detail-vip-time">有效期:{{expire}}</text>
		</view>
		<text class="cts-detail-desc cts-basic-vertical-padding">已有{{count}}个人购买了该商品</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['title','price','count','deduct','earn','expire','vip']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(desc,solid,$cts-dark-golden,1px)
	@include createFullBorder('desc-r',solid,$cts-alert-red,1px)
	@include createPadding(desc,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createPadding(vip,$cts-ext-font,null,null,null)
	
	.cts-detail{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		margin-bottom: $cts-basic-padding;
		
		&-desc{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		
		&-question-mark{
			color: $cts-gradient-light-red;
			margin-left: $cts-middle-padding;
			text-align: center;
			line-height: 30rpx;
			font-size: $cts-middle-font;
			width: 30rpx;
			height: 30rpx;
			background-color: $cts-all-white;
			border-radius: 50%;
		}
		
		&-title{
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-activity{
			width: $cts-screen-full;
		}
		&-ac1{
			font-size: $cts-middle-font;
			color: $cts-dark-golden;
		}
		&-ac2{
			font-size: $cts-middle-font;
			color: $cts-alert-red;
		}
		&-price{
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
			font-size: $cts-ext-font;
			color: $cts-alert-red;
			font-weight: 500;
		}
		&-vip{
			margin-top: $cts-middle-padding;
			width: 710rpx;
			height:120rpx;
			position: relative;
			border-radius: $cts-middle-padding;
		}
		&-vip-desc{
			font-size: $cts-basic-font;
			color: $cts-gradient-light-red;
		}
		&-vip-time{
			margin-top: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-gradient-fade-red;
		}
		&-vip-img{
			left: 0;
			top: 0;
			position: absolute;
			width: 710rpx;
			height:120rpx;
			border-radius: $cts-middle-padding;
		}
	}
</style>
