<template>
	<view class="cts-radio" >
		<image fade-show="false" class="cts-radio-icon-bottom" src="/static/radio.png" mode="aspectFit"></image>
		<image fade-show="false" class="cts-radio-icon-top" :class="[active?'':'cts-radio-move']" src="/static/radio_a.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['active']
	}
</script>

<style lang="scss" scoped>
	.cts-radio{
		overflow: hidden;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		position: relative;
		&-move{
			top: 40rpx!important;
		}
		&-icon-top{
			position: absolute;
			left: 0;
			top: 0;
			width: 40rpx;
			height: 40rpx;
		}
		&-icon-bottom{
			position: absolute;
			left: 0;
			top: 0;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
