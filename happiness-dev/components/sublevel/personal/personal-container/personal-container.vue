<template>
	<view class="cts-personal cts-basic-horizontal-padding">
		<view class="cts-personal-box">
			<slot></slot>
		</view>
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
	.cts-personal{
		width: $cts-screen-full;
		&-box{
			border-radius: $cts-middle-padding;
			background-color: $cts-all-white;
		}
	}
</style>
