<template>
	<view class="cts-ads cts-padding-ads">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(ads,null,null,$cts-basic-padding,200rpx)
	.cts-ads{
		width: $cts-screen-full;
	}
</style>
