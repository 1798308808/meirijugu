<template>
	<view class="cts-pop cts-flex-ac cts-flex-jc">
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
			this.h = this.$store.state.common.screenHeight
		}
	}
</script>

<style lang="scss" scoped>
	.cts-pop{
		width: 750rpx;
	}
</style>
