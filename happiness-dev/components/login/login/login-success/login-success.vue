<template>
	<view class="cts-login" :style="{marginTop:t+'px'}">
		<custom-pic-loading class="cts-login-img" :img="'/static/su.png'" mode="widthFix"></custom-pic-loading>
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
			this.t = n + st + uni.upx2px(100)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-login{
		width: $cts-screen-full;
		&-img{
			width: $cts-screen-full;
		}
	}
</style>
