<template>
	<view class="cts-confirm cts-padding-cfm">
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
	@include createPadding(cfm,$cts-basic-padding,$cts-basic-padding,$cts-basic-padding,150rpx)
	.cts-confirm{
		width: $cts-screen-full;
	}
</style>
