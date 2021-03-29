<template>
	<view class="cts-detail cts-basic-horizontal-padding">
		<text v-if="!!text" class="cts-detail-title cts-basic-vertical-padding">{{text}}</text>
		<custom-pic-loading class="cts-detail-img" :img="img" lazy mode="widthFix"></custom-pic-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['img','text']
	}
</script>

<style lang="scss" scoped>
	.cts-detail{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-img{
			width: 710rpx;
		}
	}
</style>
