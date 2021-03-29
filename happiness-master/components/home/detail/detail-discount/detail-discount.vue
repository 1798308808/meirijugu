<template>
	<view class="cts-discount cts-flex-dir cts-flex-jc cts-flex-ac" :class="[mute?'cts-discount-mute':'']">
		<view class="cts-discount-circle-2" :class="[mute?'cts-discount-mute-2':'']"></view>
		<view class="cts-discount-circle-3 " :class="[mute?'cts-discount-mute':'']"></view>
		<view class="cts-discount-circle-4 " :class="[mute?'cts-discount-mute':'']"></view>
		<view class="cts-discount-circle-1"></view>
		
		<view class="cts-discount-left cts-flex-jc cts-flex-afs cts-basic-horizontal-padding">
			<text class="cts-discount-left-main">￥{{title}} 优惠券</text>
			<text class="cts-discount-left-sub" :class="[mute?'cts-discount-left-mute':'']">{{start}}至{{end}}</text>
		</view>
		<view class="cts-discount-right cts-flex-ac cts-flex-jc cts-border-left-dashed-l">
			<text class="cts-discount-right-txt">{{mute?'已失效':'立即领取'}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['mute','title','start','end']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(l,left,$cts-all-white,dashed,2px)
	.cts-discount{
		width: 710rpx;
		height: 150rpx;
		border-radius: $cts-middle-padding;
		background-image: linear-gradient(to left,$cts-gradient-light-red,$cts-gradient-dark-red);
		margin-bottom: $cts-middle-padding;
		position: relative;
		overflow: hidden;
		&-mute{
			background-image: linear-gradient(to left,$cts-soso-grey,$cts-mute-grey)!important;
		}
		&-mute-2{
			background-image: linear-gradient(to bottom,$cts-soso-grey,$cts-mute-grey)!important;
		}
		
		&-left{
			height: 150rpx;
			width: 460rpx;
		}
		&-left-main{
			color: $cts-all-white;
			font-size:$cts-big-font;
			font-weight: 700;
		}
		&-left-sub{
			margin-top: $cts-middle-padding;
			color: $cts-gradient-fade-red;
			font-size:$cts-basic-font;
		}
		&-left-mute{
			color: $cts-narrow-grey!important;
		}
		&-right{
			height: 150rpx;
			width: 250rpx;
		}
		&-right-txt{
			color: $cts-all-white;
			font-size:$cts-big-font;
		}
		&-circle-1{
			position: absolute;
			right: -25rpx;
			top: 70rpx;
			border-radius: 50%;
			width: 40rpx;
			height: 40rpx;
			background-color: $cts-all-white;
		}
		&-circle-2{
			position: absolute;
			right: -10rpx;
			bottom: -180rpx;
			border-radius: 150rpx;
			width: 300rpx;
			height: 300rpx;
			transform: rotate(85deg);
			background-image: linear-gradient(to bottom,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-circle-3{
			position: absolute;
			right: 280rpx;
			top: -50rpx;
			border-radius: 50rpx;
			width: 100rpx;
			height: 100rpx;
			transform: rotate(100deg);
			background-image: linear-gradient(to bottom,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-circle-4{
			position: absolute;
			left: 50rpx;
			bottom: -75rpx;
			border-radius: 75rpx;
			width: 150rpx;
			height: 150rpx;
			transform: rotate(30deg);
			background-image: linear-gradient(to left,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
	}
</style>
