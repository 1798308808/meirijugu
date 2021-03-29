<template>
	<view class="cts-order cts-basic-full-padding cts-flex-jsa cts-flex-ac">
		<text class="cts-order-title cts-border-bottom-solid-title">选择支付方式</text>
		<view class="cts-order-box cts-flex-jsa cts-flex-dir cts-flex-ac cts-basic-vertical-padding">
			<view class="cts-order-pay cts-flex-jc cts-flex-ac" @tap="paymentTapped(0)">
				<image class="cts-order-pay-icon" src="/static/wx_pay.png" mode="aspectFit"></image>
				<text class="cts-order-pay-txt">微信支付</text>
			</view>
			<view class="cts-order-pay cts-flex-jc cts-flex-ac" @tap="paymentTapped(1)">
				<image class="cts-order-pay-icon" src="/static/ali_pay.png" mode="aspectFit"></image>
				<text class="cts-order-pay-txt">支付宝支付</text>
			</view>
		</view>
		<view class="cts-order-cover cts-flex-ac cts-flex-jc cts-transition-cover" :class="[cover?'cts-order-cover-show':'cts-order-cover-hide']" @touchmove.prevent>
			<loading-indicator class="cts-order-indicator" :animating="true"></loading-indicator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			paymentTapped(index){
				this.$emit('returnPayment',index)
			}
		},
		props:['cover']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(title,bottom,$cts-soso-grey,solid,1px)
	@include createTransition(cover,transform,0.25s,ease-out,null,null)
	.cts-order{
		width: $cts-screen-full;
		overflow: hidden;
		position: relative;
		height:300rpx;
		background-color: $cts-all-white;
		border-top-left-radius: $cts-basic-padding;
		border-top-right-radius: $cts-basic-padding;
		&-indicator{
			color: $cts-dark-brown;
			width: 60rpx;
			height: 60rpx;
		}
		&-cover{
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			position: absolute;
			left: 0;
			top: 0;
			width: $cts-screen-full;
			height:300rpx;
			background-color: rgba(255,255,255,.8);
			&-show{
				transform: translateY(0%);
			}
			&-hide{
				transform: translateY(100%);
			}
		}
		&-title{
			width: 710rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-box{
			width: 710rpx;
		}
		&-pay{
			width: 200rpx;
			&-icon{
				width: 85rpx;
				height: 85rpx;
				margin-bottom: $cts-basic-padding;
			}
			&-txt{
				font-size: $cts-middle-font;
				font-weight: 700;
				color: $cts-dark-brown;
			}
		}
	}
</style>
