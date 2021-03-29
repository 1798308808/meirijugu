<template>
	<view class="cts-withdraw">
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
	.cts-withdraw{
		width: $cts-screen-full;
		background-color: $cts-all-white;
	}
</style>
