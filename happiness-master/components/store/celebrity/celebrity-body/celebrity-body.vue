<template>
	<view class="cts-platform">
		<view class="cts-platform-bg"></view>
		<view class="cts-platform-head">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				n:''
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
			this.h =st;
			this.n = n*0.5;
		},
		props:['info']
	}
</script>

<style lang="scss" scoped>
	.cts-platform{
		position: relative;
		width: $cts-screen-full;
		&-bg{
			width: $cts-screen-full*1.6;
			height: $cts-screen-full*1.4;
			border-radius: $cts-screen-full*1.4;
			position: absolute;
			left: -$cts-screen-full*0.3;
			top: -$cts-screen-full*0.7;
			background-color: $cts-gradient-dark-red;
		}
		&-head{
			width: $cts-screen-full;
			height: 550rpx;
		}
	}
</style>
