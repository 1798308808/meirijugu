<template>
	<view class="cts-boardcast cts-basic-horizontal-padding cts-flex-dir cts-flex-ac cts-flex-jsb">
		<image class='cts-boardcast-img' src="/static/yjbb.png" mode="aspectFit"></image>
		<swiper class="cts-boardcast-swiper" :interval="3000" :autoplay="true" :circular="true" :skip-hidden-item-layout="true"
		:vertical="true" :disable-touch="true" :touchable="false"  :easing-function="'easeOutCubic'">
			<swiper-item v-for="(item,index) in group" :key="index">
				<view class="cts-boardcast-swiper-item cts-flex-afs cts-flex-jc">
					<text class="cts-boardcast-txt">{{item}}</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		mixins:[homePublicMixins]
	}
</script>

<style lang="scss" scoped>
	.cts-boardcast{
		width: $cts-screen-full;
		height: $cts-basic-height;
		background-color: $cts-all-white;
		&-img{
			width: 120rpx;
			height: $cts-basic-height;
			margin-right: $cts-basic-padding;
		}
		&-swiper{
			width: 600rpx;
			height: $cts-basic-height;
		}
		&-swiper-item{
			width: 600rpx;
			height: $cts-basic-height;
			background-color: $cts-all-white;
		}
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}
	}
</style>
