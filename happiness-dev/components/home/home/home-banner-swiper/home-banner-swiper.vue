<template>
	<view class="cts-home-banner-box cts-flex-ac cts-flex-jc">
		<swiper class="cts-home-banner" :autoplay="true" :interval="5000" circular @change="backgroundChanged">
			<swiper-item  v-for="(item,index) in group" :key="item.id" @tap="tapped(item)">
				<custom-pic-loading class="cts-home-banner-image" :img="item.img"></custom-pic-loading>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		mixins:[homePublicMixins],
		methods:{
			backgroundChanged(e){
				let index = e.detail.current;
				uni.$emit('backgroundChanged',{now:index})
			},
			tapped(item){
				this.$emit('returnBannerTapped',item)
			},
			// 图片加载完毕
			picLoadFinished(e,index){
				this.group[index].load = true;
				console.log(this.group)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-home-banner{
		width: 718rpx;
		height: 301rpx;
		&-box{
			width: 750rpx;
			height: 301rpx;
		}
		&-image{
			position: relative;
			width: 718rpx;
			height: 301rpx;
		}
	}
</style>
