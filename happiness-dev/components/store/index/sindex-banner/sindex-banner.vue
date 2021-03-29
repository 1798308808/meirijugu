<template>
	<swiper class="cts-store-banner" :autoplay="true" :interval="3000" :circular="true">
		<swiper-item v-for="(item,index) in group" :key="item.id">
			<view class="cts-store-img cts-flex-ac cts-flex-jc cts-basic-horizontal-padding">
				<custom-pic-loading class="cts-store-img-box" :img="'http://www.jufu-unique.com/'+item.img"></custom-pic-loading>
			</view>
		</swiper-item>
	</swiper>
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
		&-banner{
			width: $cts-screen-full;
			height:200rpx;
			position: relative;
		}
		&-img{
			width: $cts-screen-full;
			height:200rpx;
		}
		&-img-box{
			width: 650rpx;
			height:200rpx;
		}
	}
</style>
