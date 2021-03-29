<template>
	<view>
		<view class="cts-wd-top cts-padding-box">
			<view class="cts-wd-top-top cts-wd-marginTop">
				<text class="cts-wd-top-top cts-wd-top-top-txt">可提现余额</text>
			</view>
			
			<view class="cts-wd-top-center cts-flex-dir cts-flex-jsb  cts-wd-marginTop">
				<view class="cts-flex-dir cts-mr-price">
					<text class="cts-wd-top-center-msg">￥</text>
					<text class="cts-wd-top-center-txt">{{yue}}</text>
				</view>
				
				<view class="cts-flex-jsa" @tap="btn">
					<custom-button class="cts-wd-btn" :type="2" text="提现" :colorType="2" :shadow="true"></custom-button>
				</view>
			</view>
			
			<text class="cts-border-bottom-solid-btm cts-wd-marginTop"></text>
			
			<view class="cts-wd-top-footer cts-flex-dir cts-flex-jsa">
				<view>
					<text class="cts-wd-top-footer-txt">待入账</text>
					<text class="cts-wd-top-footer-price">￥{{daiPrice}}</text>
				</view>
				
				<view class="cts-border-right-solid-rig"></view>
				
				<view>
					<text class="cts-wd-top-footer-txt">累计到账</text>
					<text class="cts-wd-top-footer-price">￥{{leiPrice}}</text>
				</view>
				
				<view class="cts-border-right-solid-rig"></view>
				
				<view>
					<text class="cts-wd-top-footer-txt">累计提现</text>
					<text class="cts-wd-top-footer-price">￥{{leiRebate}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['yue','daiPrice','leiPrice','leiRebate'],
		data() {
			return {
				
			}
		},
		methods: {
			btn(){
				this.$emit("retrunWithdrawal")
			}
		}
	}
</script>

<style lang="scss" scoped>
@include createPadding(box,$cts-ext-padding,$cts-ext-padding,0,0);
@include createBorder(btm,bottom,$cts-dark-brown,solid,1px);
@include createBorder(rig,right,$cts-dark-brown,solid,1px);
	$fontBig:120rpx;
	$msg:60rpx;
	.cts-wd{
		&-top{
			height: 410rpx;
			background-color: $cts-deep-dark;
			border-radius: $cts-basic-padding;
			margin-top:$cts-big-padding;
		},
		
		&-top-top-txt{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		},
		&-top-footer{
			margin-top: $cts-ext-min-font;
		},
		&-top-center-txt{
			font-size: $fontBig;
			color: $cts-all-white;
			font-weight: 700;
		},
		&-top-center-msg{
			font-size: $cts-ext-font;
			color: $cts-all-white;
			margin-top: $msg;
		},
		&-marginTop{
			margin-top: $cts-ext-padding;
		},

		// &-bottom-solid-right{
		// 	// border-right: 1rpx solid $cts-dark-brown ;
		// 	height: 60rpx;
		// 	margin-top: $cts-basic-padding;
		// },

		&-top-footer-txt{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			text-align: center;
		},
		&-top-footer-price{
			font-size: $cts-big-font;
			font-weight: 700;
			color: $cts-all-white;
			padding-top: $cts-basic-padding;
		}
	}
</style>
