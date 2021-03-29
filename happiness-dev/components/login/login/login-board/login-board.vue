<template>
	<view class="cts-login">
		<view class="cts-login-box cts-flex-jc cts-flex-ac">
			<image class="cts-login-icon" src="/static/logo.png" mode="aspectFit"></image>
			<text class="cts-login-name">每日聚福</text>
		</view>
		<view @tap="jump">
			<custom-button :type="2":text="'一键登录'" :width="500" :shadow="true"></custom-button>
		</view>
		<text class="cts-login-other" @tap="login">其他号码登录</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			jump(){
				this.$emit('returnOneStep',{msg:'ok'})
			},
			login(){
				this.$emit('returnAnotherLogin',{msg:'ok'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-login{
		width: $cts-screen-full;
		&-box{
			width: $cts-screen-full;
			height: 600rpx;
		}
		&-icon{
			width: 150rpx;
			height: 150rpx;
			margin-bottom: $cts-basic-padding;
			background-color: $cts-light-grey;
			border-radius: $cts-basic-padding;
		}
		&-name{
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
			font-weight: 700;
		}
		&-other{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			height: 150rpx;
			line-height: 150rpx;
			text-align: center;
		}
	}
</style>
