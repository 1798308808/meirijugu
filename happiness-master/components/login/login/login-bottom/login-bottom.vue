<template>
	<view class="cts-login cts-flex-jsa cts-flex-ac">
		<view class="cts-flex-dir cts-flex-jc cts-flex-ac" v-if="!reg">
			<view class="cts-login-line"></view>
			<text class="cts-login-title">其他方式登录</text>
			<view class="cts-login-line"></view>
		</view>
		<view class="cts-flex-jc cts-flex-ac cts-flex-dir" v-if="!reg">
			<image class="cts-login-item" src="/static/wx.png" mode="aspectFit" @tap="login(1)"></image>
			<view class="cts-login-item cts-login-ios cts-flex-ac cts-flex-jc" @tap="login(2)" v-if="pl=='ios'">
				<image class="cts-login-ios-icon" src="/static/apple_logo.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="cts-flex-dir">
			<text class="cts-login-desc">登录表示您已阅读并同意</text>
			<text class="cts-login-link" @tap="to(1)">《用户协议》</text>
			<text class="cts-login-link" @tap="to(2)">《隐私协议》</text>
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				pl:''
			};
		},
		created() {
			this.pl = this.$store.state.common.platform
		},
		methods:{
			to(type){
				if(type==1)com.pageNavigation('/pages/mine/article/article',null,{id:1});
				if(type==2)com.pageNavigation('/pages/mine/article/article',null,{id:37});
			},
			login(index){
				this.$emit('returnLogin',index)
			}
		},
		props:['reg']
	}
</script>

<style lang="scss" scoped>
	.cts-login{
		width: $cts-screen-full;
		height: 250rpx;
		position: absolute;
		left: 0;
		bottom: $cts-basic-padding*2;
		&-ios{
			background-image: linear-gradient(to right,$cts-middle-grey,$cts-dark-brown);
			border-radius: 50%;
			&-icon{
				width: 45rpx;
				height: 45rpx;
			}
		}
		&-title{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			margin-left: $cts-basic-padding;
			margin-right: $cts-basic-padding;
		}
		&-line{
			width: 100rpx;
			background-color: $cts-light-dark;
			height: 1rpx;
		}
		&-item{
			width: 80rpx;
			height: 80rpx;
			margin-left: $cts-basic-padding;
			margin-right: $cts-basic-padding;
		}
		&-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-link{
			font-size: $cts-middle-font;
			font-weight: 700;
			color: $cts-middle-grey;
			text-decoration: underline;
			margin-left: $cts-middle-padding;
		}
	}
</style>
