<template>
	<view class="cts-time cts-flex-dir cts-basic-horizontal-padding cts-flex-ac cts-flex-jfs">
		<image class="cts-time-icon" src="/static/flash.png" mode="aspectFit"></image>
		<text class="cts-time-limit">距离下场开始</text>
		<custom-countdown :time_f="1608859323" :size_f="'s'"></custom-countdown>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cts-time{
		width: $cts-screen-full;
		height: 100rpx;
		background-color: $cts-all-white;
		
		&-limit{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
			margin-right: $cts-middle-padding;
		}
		&-icon{
			width: 40rpx;
			height: 40rpx;
			margin-right: $cts-middle-padding;
		}
		
	}
</style>
