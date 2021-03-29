<template>
	<view class="cts-pop cts-flex-ac cts-flex-jc">
		<image class="cts-pop-img" src="/static/close_w.png" mode="aspectFit"></image>
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
	.cts-pop{
		width: $cts-screen-full;
		margin-top: $cts-ext-padding;
		&-img {
			width: 60rpx;
			height: 60rpx;
		}
		
	}
</style>
