<template>
	<view class="cts-store" :style="{height:h+'px',top:t+'px'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				t:'',
				
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
			this.h = s - n - st;
			this.t = n + st;
		}
	}
</script>

<style lang="scss" scoped>
	.cts-store{
		width: $cts-screen-full;
	}
</style>
