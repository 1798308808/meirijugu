<template>
	<view class="cts-login cts-flex-ac cts-flex-jc">
		<text class="cts-login-txt">中国移动提供认证服务</text>
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
	.cts-login{
		position: absolute;
		left: 0;
		bottom: 0;
		width: $cts-screen-full;
		height: 300rpx;
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
	}
	
</style>
