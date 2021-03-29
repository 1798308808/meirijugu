<template>
	<view class="cts-exchange-top cts-basic-horizontal-padding">
		<view class="cts-exchange-content cts-padding-box">
			<view class="cts-exchange-top-top  cts-flex-dir cts-flex-jfs">
				<text class="cts-exchange-top-top-title">可兑换锦鲤币</text>
				<text class="cts-exchange-top-top-price">（10000=1元）</text>
			</view>
			
			<view class="cts-exchange-top-center cts-flex-dir cts-flex-jsb cts-exchange-top-marginTop">
				<text class="cts-exchange-top-center-price">{{totalMoney}}</text>
		
				<view class="cts-exchange-top-center-btn cts-exchange-top-marginTop">
					<custom-button class="cts-exchange-cts-wd-btn" :type="2" text="兑换" :colorType="2" :shadow="false"></custom-button>
				</view>
			</view>
			
			<view class="cts-exchange-top-center-xian cts-border-bottom-solid-btm cts-exchange-top-marginTop" ></view>
			
			<view class="cts-exchange-top-footer cts-flex-dir cts-flex-jfs cts-exchange-top-marginTop">
				<view>
					<text class="cts-exchange-top-footer-msg-txt1">今日锦鲤币</text>
					<text class="cts-exchange-top-footer-msg-txt">{{todayMoney}}</text>
				</view>
				
				<view class="cts-exchange-top-footer-msg1">
					<text class="cts-exchange-top-footer-msg-txt1">累积锦鲤币</text>
					<text class="cts-exchange-top-footer-msg-txt">{{totalMoney}}</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:['totalMoney','todayMoney'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(box,$cts-ext-padding,$cts-ext-padding,$cts-big-font,$cts-big-font);
	@include createBorder(btm,bottom,$cts-mute-grey,solid,4rpx);
	$fontSize:45rpx;
	$lineHeight:120rpx;
	$marginLeft:150rpx;
	.cts-exchange{
		&-top{
			width: $cts-screen-full;
			height:520rpx;
			margin-top:$cts-big-padding;
			// background-color:linear-gradient(90deg,#fff 0%,#bbb 49%,#bbb 51%,#fff 100%);
		},
		&-content{
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
			// margin-top:$cts-big-padding;
			box-shadow:$cts-min-padding $cts-min-padding $cts-middle-padding $cts-middle-padding $cts-soso-grey;
		},
		&-top-top{
			// margin-top:$cts-ext-padding ;
		},
		
		&-top-marginTop{
			margin-top:$cts-ext-padding ;
		},
		&-top-footer-msg-txt1{
			text-align: center;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		},
		&-top-footer-msg-txt{
			text-align: center;
			font-size: $fontSize;
			font-weight: 700;
			margin-top: $cts-basic-padding;
		},
		&-top-center{
			height: $lineHeight;
		},
		&-top-center-price{
			height: $lineHeight;
			line-height: $lineHeight;
			font-size: $cts-mega-font;
			font-weight: 700;
		},
		&-top-center-btn{
			height: $lineHeight;
			line-height: $lineHeight;
		},
		&-top-top-title{
				color: $cts-light-dark;
		},
		&-top-top-price{
			color: $cts-main-brown;
			font-weight: 700;
		},
		&-top-footer-msg1{
			margin-left: $marginLeft;
		}
	}
</style>
