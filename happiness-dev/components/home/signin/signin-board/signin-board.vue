<template>
	<view class="cts-signin-board cts-flex-ac cts-flex-jfs">
		<image class="cts-signin-board-bg" src="/static/signin.png" mode="aspectFit"></image>
		<view class="cts-signin-board-detail cts-flex-dir cts-flex-ac cts-flex-jfs cts-basic-full-padding" :style="{marginTop:t+'px'}">
			<image class="cts-signin-board-avatar" :src="avatar" mode="aspectFit"></image>
			<view class="cts-signin-board-desc">
				<text class="cts-signin-board-name">{{name}}</text>
				<text class="cts-signin-board-greetings">{{greetings}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		props:['name','greetings','avatar'],
		created() {
			this.t = this.$store.state.common.navbarHeight+this.$store.state.common.statusBarHeight;
		}
	}
</script>

<style lang="scss" scoped>
	.cts-signin-board{
		width: $cts-screen-full;
		position: relative;
		&-bg{
			width: $cts-screen-full;
			height: 434rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-detail{
			width: $cts-screen-full;
		}
		&-avatar{
			width: 130rpx;
			height: 130rpx;
			background-color: $cts-soso-grey;
			border-radius: 50%;
		}
		&-desc{
			margin-left: $cts-basic-padding;
		}
		&-name{
			font-size: $cts-soso-font;
			color: $cts-gradient-font;
			font-weight: 700;
		}
		&-greetings{
			margin-top: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-main-brown;
		}
	}
</style>
