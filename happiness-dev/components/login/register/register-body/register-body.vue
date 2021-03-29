<template>
	<view class="cts-reg" :style="{marginTop:t+'px'}">
		<custom-pic-loading class="cts-reg-img" :img="'/static/rights.png'" mode="aspectFit"></custom-pic-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
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
			]
			this.t = n + st + uni.upx2px(100);
		}
	}
</script>

<style lang="scss" scoped>
	.cts-reg{
		width: $cts-screen-full;
		position: relative;
		&-img{
			width: $cts-screen-full;
			height: 634rpx;
		}
	}
</style>
