<template>
	<view class="cts-box cts-flex-ac cts-flex-jc">
		<text class="cts-box-title">{{title}}</text>
		<view class="cts-flex-dir cts-flex-ac cts-flex-jc cts-basic-vertical-padding">
			<custom-pic-loading class="cts-box-img" b_radius="15" :img="platform"></custom-pic-loading>
			<custom-pic-loading class="cts-box-img" b_radius="15" img="/static/arrow_v.png"></custom-pic-loading>
			<custom-pic-loading class="cts-box-img" b_radius="15" img="/static/logo.png"></custom-pic-loading>
		</view>
		<text class="cts-box-desc">{{desc}}</text>
		<view class="cts-basic-vertical-padding">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['platform','desc','title']
	}
</script>

<style lang="scss" scoped>
	.cts-box{
		width: 520rpx;
		&-title{
			font-size: $cts-big-font;
			font-weight: 700;
			color: $cts-dark-brown;
			margin-bottom: $cts-basic-padding;
		}
		&-img{
			width: 80rpx;
			height: 80rpx;
		}
		&-desc{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			width: 520rpx;
			margin-bottom: $cts-basic-padding;
		}
	}
</style>
