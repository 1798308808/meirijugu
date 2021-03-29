<template>
	<view class="cts-login cts-basic-full-padding">
		<text class="cts-login-close" @tap="close">×</text>
		<view class="cts-login-box cts-flex-ac cts-flex-jc">
			<image class="cts-login-icon" src="" mode="aspectFit"></image>
			<text class="cts-login-phone">137****7960</text>
			<text class="cts-login-exchange">切换账号</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			close(){
				this.$emit('returnCloseOneKeyLoginIn')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-login{
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
			height: 400rpx;
		}
		&-close{
			margin-top: $cts-basic-padding*2;
			font-size: $cts-ext-font;
			color: $cts-dark-brown;
		}
		&-icon{
			width: 150rpx;
			height: 150rpx;
			background-color: $cts-light-grey;
			margin-bottom: $cts-basic-padding*2;
		}
		&-phone{
			font-size: $cts-ext-font;
			font-weight: 700;
			color: $cts-dark-brown;
			margin-bottom: $cts-basic-padding;
		}
		&-exchange{
			font-size: $cts-big-font;
			color:$cts-light-dark;
		}
	}
</style>
