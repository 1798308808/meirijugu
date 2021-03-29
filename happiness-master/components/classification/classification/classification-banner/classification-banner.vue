<template>
	<view class="cts-class cts-flex-ac cts-flex-jc">
		<swiper class="cts-class-banner" :indicator-dots="true" :autoplay="true" :interval="5000" indicator-active-color="#ffffff">
			<swiper-item v-for="(item,index) in group" :key="index+'c_b'+index">
				<image class="cts-class-banner-img" :src="item" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	.cts-class{
		width: 520rpx;
		margin-bottom: $cts-basic-padding;
		&-banner{
			background-color: $cts-light-grey;
			width: 520rpx;
			height: 150rpx;
			border-radius: $cts-middle-padding;
		}
		&-banner-img{
			width: 520rpx;
			height: 150rpx;
		}
	}
</style>
