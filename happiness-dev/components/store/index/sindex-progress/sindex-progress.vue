<template>
	<view class="cts-index cts-basic-full-padding">
		<custom-pic-loading class="cts-index-box" :img="img"></custom-pic-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['img']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(title,null,null,null,$cts-basic-padding)
	.cts-index{
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
			height: 340rpx;
		}
	}
</style>
