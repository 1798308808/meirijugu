<template>
	<view class="cts-confirm">
		<text v-if="!!title" class="cts-basic-full-padding cts-confirm-title">{{title}}</text>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title']
	}
</script>

<style lang="scss" scoped>
	.cts-confirm{
		margin-top: $cts-basic-padding;
		width: 710rpx;
		border-radius: $cts-middle-padding;
		background-color: $cts-all-white;
		&-title{
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
		}
	}
</style>
