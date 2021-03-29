<template>
	<view class="cts-info cts-flex-ac cts-flex-jfe cts-flex-dir cts-basic-horizontal-padding">
		<text class="cts-info-desc">{{title}}</text>
		<text class="cts-info-price">{{total}}</text>
		<view class="cts-info-border"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['total','title']
	}
</script>

<style lang="scss" scoped>
	.cts-info{
		width: 710rpx;
		height: 80rpx;
		position: relative;
		&-border{
			width: 640rpx;
			position: absolute;
			left: 35rpx;
			top: 0;
			height:1px;
			background-color: $cts-light-grey;
		}
		&-desc{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-price{
			font-size: $cts-basic-font;
			color: $cts-alert-red;
		}
	}
</style>
