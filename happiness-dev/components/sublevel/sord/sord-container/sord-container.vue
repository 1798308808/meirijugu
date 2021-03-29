<template>
	<list class="cts-order" :style="{height:h+'px'}">
		<cell>
			<view class="cts-empty-column"></view>
		</cell>
		<slot></slot>
	</list>
</template>

<script>
	export default {
		data() {
			return {
				t:'',
				h:''
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
			this.h = s - n - st - uni.upx2px(90)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-order{
		width: $cts-screen-full;
	}
</style>
