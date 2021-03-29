<template>
	<view class="cts-store cts-flex-jc cts-flex-ac">
		<swiper elevation="3px" class="cts-store-banner" :autoplay="true" :interval="5000" circular="ture">
			<swiper-item v-for="(item,index) in group" :key="index+'st'">
				<image class="cts-store-img" :src="item.src" mode="aspectFit"></image>
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
	.cts-store{
		width: $cts-screen-full;
		height: 340rpx;
		&-banner{
			border-radius: $cts-basic-padding;
			width: 710rpx;
			height: 300rpx;
			box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		}
		&-img{
			width: 710rpx;
			height: 300rpx;
		}
	}
</style>
