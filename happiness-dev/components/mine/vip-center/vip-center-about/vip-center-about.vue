<template>
	<view class="cts-vip">
		<rich-text :nodes="nodes"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['nodes']
	}
</script>

<style lang="scss" scoped>
	.cts-vip{
		width: 670rpx;
		min-height: 400rpx;
	}
</style>
