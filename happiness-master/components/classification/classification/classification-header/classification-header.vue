<template>
	<header class="cts-class">
		<view class="cts-class cts-flex-dir cts-flex-jfs cts-flex-ac cts-padding-head">
			<image v-if="!!icon" class="cts-class-icon" :src="icon" mode="aspectFit"></image>
			<text class="cts-class-title">{{title}}</text>
		</view>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['icon','title']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(head,15rpx,15rpx,null,null)
	.cts-class{
		width: 550rpx;
		height: 80rpx;
		background-color: $cts-narrow-grey;
		&-icon{
			width: 35rpx;
			height: 35rpx;
			border-radius: 50%;
		}
		&-title{
			font-size: $cts-middle-font;
			color: $cts-deep-dark;
			margin-left: $cts-middle-padding;
			font-weight: 700;
		}
	}
</style>
