<template>
	<view>
		<view class="cts-flex-dir cts-flex-ac cts-flex-jfe cts-padding-info">
			<text class="cts-bean-info">每月3张补签卡当前剩余</text>
			<text class="cts-bean-num-b">3</text>
			<text class="cts-bean-info">张</text>
		</view>
		<view class="cts-bean cts-basic-full-padding">
			<view class="cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-flex-dir cts-flex-ac cts-flex-jc">
					<image class="cts-bean-icon" src="/static/bean.png" mode="aspectFit"></image>
					<text class="cts-bean-num">95153</text>
					<text class="cts-bean-name cts-padding-name">福豆</text>
				</view>
				<view class="cts-bean-line"></view>
				<view class="cts-flex-dir cts-flex-ac cts-flex-jc">
					<text class="cts-bean-txt">当前可兑换</text>
					<text class="cts-bean-money">2345.20</text>
					<text class="cts-bean-txt">元</text>
					<image class="cts-bean-arrow" src="/static/back_w.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"signin-bean",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@include  createPadding('info',null,null,null,$cts-middle-padding)
	@include  createPadding('name',$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.cts-bean{
		width: 710rpx;
		border-radius: $cts-basic-padding;
		background-image: linear-gradient(to right,$cts-new-narrow-brown,$cts-new-deep-brown);
		&-info{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
		}
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-all-white;
		}
		&-money{
			color: $cts-light-golden;
			font-size: $cts-basic-font;
			font-weight: 700;
			margin-left: $cts-min-padding;
			margin-right: $cts-min-padding;
		}
		&-arrow{
			width: 35rpx;
			height: 35rpx;
			margin-left: $cts-middle-padding;
			transform: rotate(180deg);
		}
		&-icon{
			width: 40rpx;
			height: 40rpx;
			&-min{
				width: 35rpx;
				height: 35rpx;
				margin-right: $cts-middle-padding;
			}
		}
		&-name{
			color: $cts-all-white;
			font-size: $cts-min-font;
			background-color: $cts-gradient-dark-red;
			border-radius: $cts-middle-padding;
		}
		&-num{
			margin-right: $cts-basic-padding;
			color: $cts-light-golden;
			font-size: $cts-ext-font;
			&-b{
				color: $cts-dark-brown;
				font-size: $cts-basic-font;
				font-weight: 700;
			}
		}
		&-line{
			width: 1px;
			height: 40rpx;
			background-color: $cts-all-white;
		}
	}
</style>
