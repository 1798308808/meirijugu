<template>
	<view class="cts-rank-user cts-basic-horizontal-padding" :style="{marginTop:t+'px'}">
		<view class="cts-rank-box cts-flex-dir cts-flex-jsb cts-flex-ac cts-basic-horizontal-padding">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
				<image class="cts-rank-box-avatar" :src="avatar" mode="aspectFit"></image>
				<view class="cts-rank-detail">
					<text class="cts-rank-box-name">{{name}}</text>
					<text class="cts-rank-box-money">财富值:￥{{money}}</text>
				</view>
			</view>
			<text class="cts-rank-box-rank">排名:{{rank}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		props:['name','money','rank','avatar'],
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			];
			this.t = n + st +uni.upx2px(150)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-rank{
		&-user{
			width: $cts-screen-full;
		}
		&-detail{
			margin-left: $cts-basic-padding;
		}
		&-box{
			width: 710rpx;
			height: 150rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		&-box-avatar{
			width: 120rpx;
			height: 120rpx;
			background-color: $cts-soso-grey;
			border-radius: 50%;
		}
		&-box-name{
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-box-money{
			margin-top: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-box-rank{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
	}
</style>
