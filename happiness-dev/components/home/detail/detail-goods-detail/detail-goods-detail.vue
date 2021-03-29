<template>
	<view class="cts-goods cts-basic-full-padding">
		<text class="cts-goods-title">商品详情</text>
		<view class="cts-goods-body">
			<rich-text :nodes="nodes"></rich-text>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['nodes']
	}
</script>

<style lang="scss" scoped>
	.rich{
		width: 710rpx;
	}
	.cts-goods{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		margin-bottom: $cts-basic-padding;
		&-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-body{
			width: 710rpx;
		}
	}
</style>
