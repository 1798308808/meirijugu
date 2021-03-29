<template>
	<view class="cts-login cts-flex-ac cts-flex-jc">
		<view class="cts-login-box cts-login-box cts-flex-dir cts-flex-afs cts-flex-jc">
			<custom-radio></custom-radio>
			<view class="cts-login-content cts-flex-dir cts-flex-wrap">
				<text class="cts-login-desc">同意</text>
				<text class="cts-login-link">中国移动服务条款</text>
				<text class="cts-login-desc">和</text>
				<text class="cts-login-link">MobTech</text>
				<text class="cts-login-link">隐私协议</text>
				<text class="cts-login-desc">并使用本机号登录</text>
			</view>
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
	.cts-login{
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		height: 150rpx;
		&-content{
			width: 500rpx;
			margin-left: $cts-basic-padding;
		}
		&-desc{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-link{
			font-size: $cts-basic-font;
			font-weight: 700;
			color: $cts-main-brown;
			text-decoration: underline;
			margin-left: $cts-middle-padding;
		}
	}
</style>
