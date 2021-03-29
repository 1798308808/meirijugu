<template>
	<view class="cts-flex-dir cts-flex-ac cts-flex-jc cts-basic-vertical-padding">
		<view class="cts-celebrity-bar" :style="{backgroundColor:!!color?color:'#333'}"></view>
		<text class="cts-celebrity-txt" :style="{color:!!color?color:'#333'}">返现流程</text>
		<view class="cts-celebrity-bar" :style="{backgroundColor:!!color?color:'#333'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['color']
	}
</script>

<style lang="scss" scoped>
	.cts-celebrity{
		&-bar{
			width: 40rpx;
			height: 8rpx;
			border-radius: $cts-middle-padding;
		}
		&-txt{
			font-size: $cts-soso-font;
			font-weight: 700;
			margin-left: $cts-basic-padding;
			margin-right: $cts-basic-padding;
		}
	}
</style>
