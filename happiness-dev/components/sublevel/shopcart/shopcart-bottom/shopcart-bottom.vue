<template>
	<view class="cts-shopcart cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
		<view class="cts-shopcart-left cts-flex-dir cts-flex-jsb cts-flex-ac">
			<custom-radio></custom-radio>
			<text class="cts-shopcart-all">全选</text>
		</view>
		<view class="cts-shopcart-right cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-shopcart-total">结算:</text>
			<text class="cts-shopcart-price">￥34.90</text>
			<custom-button :type="2" :colorType="1" :text="'结算(4)'"></custom-button>
		</view>
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
	.cts-shopcart{
		width: $cts-screen-full;
		height: 120rpx;
		background-color: $cts-all-white;
		position: absolute;
		left: 0;
		bottom: 0;
		&-all{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			margin-left: $cts-basic-padding;
		}
		&-total{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-price{
			font-size: $cts-basic-font;
			color: $cts-alert-red;
			margin-right: $cts-basic-padding;
		}
		&-left{
			margin-left: $cts-middle-padding;
		}
	}
</style>
