<template>
	<view class="cts-withdraw cts-flex-ac cts-flex-jc">
		<image class="cts-withdraw-icon" :src="icon" mode="aspectFit"></image>
		<text class="cts-withdraw-title" :class="[sub?'cts-withdraw-dark':'']">{{title}}</text>
		<text v-if="!!sub" class="cts-withdraw-sub">{{sub}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','icon','sub']
	}
</script>

<style lang="scss" scoped>
	.cts-withdraw{
		width: $cts-screen-full;
		height: 340rpx;
		background-color: $cts-light-grey;
		&-dark{
			margin-top: $cts-basic-padding!important;
			color: $cts-dark-brown!important;
		}
		&-icon{
			width: 100rpx;
			height: 100rpx;
		}
		&-title{
			margin-top: $cts-basic-padding*2;
			font-size: $cts-soso-font;
			color: $cts-light-dark;
			font-weight: 700;
		}
		&-sub{
			margin-top: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
