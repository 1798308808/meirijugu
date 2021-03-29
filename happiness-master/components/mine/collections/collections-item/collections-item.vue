<template>
	<view>
		<view class="cts-single-goods cts-flex-dir cts-flex-ac cts-flex-jfs cts-basic-full-padding" >
			<view class="cts-single-goods-thumb">
				<image class="cts-single-goods-img" lazy-load="true" :src="thumb" mode="aspectFit"></image>
			</view>
			<view class="cts-single-goods-column-empty"></view>
			<view class="cts-single-goods-desc cts-flex-ac cts-flex-jc">
				<view class="cts-single-goods-title-box cts-flex-dir cts-flex-jfs cts-flex-afs">
					<image class="cts-single-goods-title-platform" :src="platform" mode="aspectFit"></image>
					<text class="cts-single-goods-title-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{title}}</text>
				</view>
				
				<view v-if="!!storeName" class="cts-single-goods-store cts-flex-dir cts-flex-ac cts-flex-jfs">
					<image class="cts-single-goods-store-icon" src="/static/store.png" mode="aspectFit"></image>
					<text class="cts-single-goods-store-txt">{{storeName}}</text>
				</view>
				<view class="cts-single-goods-price-box cts-flex-dir cts-flex-jfs cts-flex-ac">
					<text class="cts-single-goods-main-price">￥{{price}}</text>
					<view class="cts-empty-row"></view>
					<text class="cts-single-goods-sales">销量{{sales}}</text>
				</view>
				
				<view class="cts-single-goods-dbbox cts-flex-ac cts-flex-jfs cts-flex-dir">
					<view class="cts-single-goods-discount-box cts-padding-dc  cts-flex-ac cts-flex-jc cts-border-bottom-solid-half-b  cts-border-left-solid-half-l cts-border-top-solid-half-t">
						<text class="cts-single-goods-discount-box-txt">￥{{discount}}&nbsp;&nbsp;券</text>
						<view class="cts-single-goods-discount-line"></view>
						<view class="cts-single-goods-discount-middle-line"></view>
						<view class="cts-single-goods-discount-circle cts-border-right-solid-half-cover cts-border-bottom-solid-half-b cts-border-left-solid-half-l cts-border-top-solid-half-t"></view>
					</view>
					<view class="cts-single-goods-rewards cts-padding-rd cts-flex-ac cts-flex-jc">
						<text class="cts-single-goods-rewards-txt">奖￥{{rewards}}</text>
					</view>
				</view>
			</view>
			<view class="cts-single-goods-border"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['id','title','thumb','price','d_price','discount','platform','rewards','seckill','storeName','sales']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(dc,$cts-min-padding,$cts-middle-padding,null,null)
	@include createPadding(rd,$cts-min-padding,$cts-min-padding,null,null)
	@include createBorder('half-l',left, $cts-alert-red,solid,2rpx)
	@include createBorder('half-r',right, $cts-alert-red,solid,2rpx)
	@include createBorder('half-t',top,$cts-alert-red,solid,2rpx)
	@include createBorder('half-cover',right,$cts-all-white,solid,2rpx)
	@include createBorder('half-b',bottom, $cts-alert-red,solid,2rpx)
	$desc:490rpx;
	$desc_sect:50rpx;

	.cts-single-goods{
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		background-color:$cts-all-white;
		position: relative;
		&-column-empty{
			width:$cts-basic-padding;
			height:10rpx;
		}
		&-sales{
			font-size: $cts-middle-font;
			color: $cts-light-dark;

		}
		&-border{
			bottom: 0;
			left:25rpx ;
			width: 700rpx;
			height: 1rpx;
			background-color: $cts-soso-grey;
			position: absolute;
		}
		&-store{
			width: $desc;
			height: $desc_sect;
		}
		&-store-icon{
			width: 30rpx;
			height: 30rpx;
		}
		&-store-txt{
			margin-left: 10rpx;
			width: 440rpx;
			font-size: $cts-middle-font;
			line-height: $desc_sect;
			lines:1;
			text-overflow: ellipsis;
			color: $cts-middle-grey;
		}
		&-img{
			width: 200rpx;
			height: 200rpx;
		}
		&-thumb{
			width: 200rpx;
			height: 200rpx;
			background-color: $cts-light-grey;
		}
		&-desc{
			overflow: hidden;
			width: $desc;
			height: 200rpx;
		}
		&-title-box{
			position: relative;
			width: $desc;
			height: 90rpx;
		}
		&-title-platform{
			position: absolute;
			left: 0;
			top: 0;
			width: 40rpx;
			height: 40rpx;
		}
		&-title-title{
			margin-left: $cts-middle-padding;
			width: 440rpx;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			lines:2;
			text-overflow: ellipsis;
		}
		&-desc-detail{
			width: $desc;
			height: $desc_sect;
		}
		&-desc-detail{
			width: $desc;
			color: $cts-middle-grey;
			font-size: $cts-middle-font;
			line-height: $desc_sect;
			lines:1;
			text-overflow: ellipsis;
		}
		&-price-box{
			width: $desc;
			height: $desc_sect;
		}
		&-main-price{
			font-size: $cts-soso-font;
			color: $cts-alert-red;
		}
		&-dis-price{
			font-size: $cts-middle-font;
			text-decoration: line-through;
			color: $cts-light-dark;
		}
		&-dbbox{
			width: $desc;
			height: $desc_sect;
		}
		&-discount-box{
			overflow: hidden;
			border-radius: $cts-min-padding;
			height: 35rpx;
			position: relative;
		}
		&-discount-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-alert-red;
			position: absolute;
			top: 0;
			right: 0rpx;
		}
		&-discount-middle-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-alert-red;
			position: absolute;
			top: 0;
			right: 40rpx;
		}
		&-discount-circle{
			height: 20rpx;
			width: 20rpx;
			position: absolute;
			background-color: $cts-all-white;
			top: 7.5rpx;
			right: -14rpx;
			border-radius: 50%;
		}
		&-discount-box-txt{
			font-size: $cts-middle-font;
			color: $cts-alert-red
		}
		&-rewards{
			margin-left: $cts-middle-padding;
			border-radius: $cts-min-padding;
			height: 35rpx;
			position: relative;
			background-image:linear-gradient(to right,$cts-gradient-light-golden,$cts-gradient-dark-golden) ;
		}
		&-rewards-txt{
			color: $cts-gradient-font;
			font-size: $cts-middle-font;
		}
		&-dis-seckill{
			width: 70rpx;
			height: 30rpx;
		}
	}
</style>
