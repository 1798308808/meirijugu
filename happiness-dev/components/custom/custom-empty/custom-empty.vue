<template>
	<view class="cts-flex-ac cts-flex-jc cts-empty-box">
		<image class="cts-empty-img" :src="img" mode="aspectFit"></image>
		<text class="cts-empty-txt">{{txt}}</text>
		<view class="cts-empty-column"></view>
		<view class="cts-empty-column"></view>
		<view class="cts-empty-column"></view>
		<custom-button v-if="button" :type="2" :text="button_text" :shadow="true"></custom-button>
	</view>
</template>

<script>
	export default {
		props:['img','txt','button','button_text']
	}
</script>

<style lang="scss" scoped>
	.cts-empty{
		&-img{
			width: 250rpx;
			height: 250rpx;
		}
		&-txt{
			margin-top: $cts-big-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-box{
			width: $cts-screen-full;
			height: 800rpx;
		}
	}
</style>
