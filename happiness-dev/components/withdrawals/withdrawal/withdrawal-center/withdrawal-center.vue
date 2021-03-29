<template>
	<view>
		<view class="cts-wd-center cts-padding-box">
			<view class="cts-flex-dir cts-flex-jsb cts-wd-center-top">
				<view class="cts-flex-dir cts-flex-jsa">
					<icon type="success" class="cts-wd-center-top-lineHeight" size="26" />
					<text class="cts-wd-center-top-iconTxt cts-wd-center-top-lineHeight">{{rebateOrder}}</text>
				</view>
				<image class="cts-wd-center-fontImg" src="/static/back1.png" mode=""></image>
			</view>
			<view>
				<text class="cts-border-bottom-solid-btm"></text>
			</view>
			
			<view class="cts-flex-dir cts-flex-jsb cts-wd-center-top">
				<view class="cts-flex-dir cts-flex-jsa">
					<icon type="success" class="cts-wd-center-top-lineHeight" size="26" />
					<text class="cts-wd-center-top-iconTxt cts-wd-center-top-lineHeight">{{cash}}</text>
				</view>
				<image class="cts-wd-center-fontImg" src="/static/back1.png" mode=""></image>
			</view>
	</view>
	</view>
</template>

<script>
	export default {
		props:['rebateOrder','cash'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(box,$cts-ext-padding,$cts-ext-padding,0,0);
	@include createBorder(btm,bottom,$cts-light-grey,solid,1px);
	$fontBig:120rpx;
	$msg:60rpx;
	.cts-wd{
		&-center{
			height: 300rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
			margin-top:$cts-big-padding;
		},
		
		&-marginTop{
			margin-top: $cts-ext-padding;
		},
	
		&-center-top{
			height: 140rpx;
		},
		&-center-top-lineHeight{
			height: 140rpx;	
			line-height: 140rpx;
		},
		&-center-top-iconTxt{
			margin-left: $cts-basic-padding;
		},
		&-top-center-msg{
			font-size: $cts-ext-font;
			color: $cts-all-white;
			margin-top: $msg;
		},
		&-center-fontImg{
			width: $cts-big-font;
			height: $cts-big-font;
			margin-top: $cts-ext-font;
		}	
	}
</style>
