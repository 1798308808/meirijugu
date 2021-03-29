<template>
	<view class="cts-free cts-flex-jc cts-flex-ac">
		<view class="cts-free-box">
			<slot></slot>
		</view>
		<view class="cts-free-btn cts-flex-ac cts-flex-jc">
			<text class="cts-free-txt">立即抢</text>
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
	.cts-free{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		overflow: hidden;
		position: relative;
		&-box{
			width: 730rpx;
			overflow: hidden;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		&-btn{
			position: absolute;
			right: $cts-middle-padding;
			bottom: $cts-basic-padding;
			width: 140rpx;
			height: 60rpx;
			border-top-left-radius: $cts-big-padding;
			border-bottom-left-radius: $cts-big-padding;
			background-color:$cts-gradient-dark-red;
		}
		&-txt{
			color: $cts-all-white;
			font-size: $cts-basic-font;
		}
	}
</style>
