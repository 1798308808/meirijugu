<template>
	<view class="cts-cl-navbar" :style="{height:`${h}px`}">
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
		mounted() {
			let [n,st] =
			[
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.h = n + st;
		}
	}
</script>

<style lang="scss" scoped>
	.cts-cl-navbar{
		width: $cts-screen-full;
	}
</style>
