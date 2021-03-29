<template>
	<view class="cts-user-bg">
		<image class="cts-user-bg-img" src="/static/user_bg.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cts-user-bg{
		position: absolute;
		left: 0;
		width: $cts-screen-full;
		height: 560rpx;
		&-img{
			width: $cts-screen-full;
			height: 560rpx;
		}
	}
</style>
