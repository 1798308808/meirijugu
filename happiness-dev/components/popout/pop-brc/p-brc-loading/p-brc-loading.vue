<template>
	<view class="cts-pop cts-flex-dir cts-flex-jc cts-flex-ac">
		<loading-indicator class="cts-pop-indicator" animating="true"></loading-indicator>
		<text class="cts-pop-txt">处理中...</text>
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
		height: 80rpx;
		&-indicator{
			width: 40rpx;
			height: 40rpx;
			color: $cts-all-white;
		}
		&-txt{
			margin-left: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-all-white;
		}
	}
</style>
