<template>
	<view class="cts-pop cts-flex-ac cts-flex-jc">
		<image class="cts-pop-img" :src="src" mode="widthFix" ref='g'></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['src']
	}
</script>

<style lang="scss" scoped>
	.cts-pop{
		width: $cts-screen-full;
		&-img{
			width: 700rpx;
		}
		
	}
</style>
