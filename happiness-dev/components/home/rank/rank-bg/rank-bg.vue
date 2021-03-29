<template>
	<view class="cts-rank">
		<image class="cts-rank-bg" src="/static/commision_bg.png" mode="aspectFit"></image>
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
	.cts-rank{
		width: $cts-screen-full;
		height: 440rpx;
		position: absolute;
		left: 0;
		top: 0;
		&-bg{
			width: $cts-screen-full;
			height: 440rpx;
		}
	}
</style>
