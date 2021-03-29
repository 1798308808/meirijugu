<template>
	<view class="cts-login" :style="{height:h+'px'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:''
			};
		},
		created() {
			let [s,n,st] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.h = s
		}
	}
</script>

<style lang="scss" scoped>
	.cts-login{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		position: relative;
	}
</style>
