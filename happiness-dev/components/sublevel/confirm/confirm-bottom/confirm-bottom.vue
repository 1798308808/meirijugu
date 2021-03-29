<template>
	<view class="cts-confirm-bottom cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac" elevation="5px">
		<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
			<text class="cts-confirm-bottom-text-1">共1件</text>
			<text class="cts-confirm-bottom-text-2">合计:</text>
			<text class="cts-confirm-bottom-text-3">￥35.00</text>
		</view>
		<custom-button :type="2" :colorType="1" :text="'立即支付'"></custom-button>
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
	.cts-confirm-bottom{
		position: absolute;
		left: 0;
		bottom: 0;
		width: $cts-screen-full;
		height: 120rpx;
		background-color: $cts-all-white;
		box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		&-text-1{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-text-2{
			margin-left: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-text-3{
			font-size: $cts-basic-font;
			color: $cts-alert-red;
			font-weight: 700;
		}
	}
</style>
