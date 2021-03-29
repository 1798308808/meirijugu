<template>
	<view class="cts-home-subarea cts-flex-ac cts-flex-jsb cts-flex-dir">
		<view class="cts-home-subarea-box cts-flex-ac cts-flex-jc" v-for="(item,index) in group" :key="item.src" @tap="home_subarea_tapped(index)">
			<image class="cts-home-subarea-img" :src="item.src" mode="aspectFit"></image>
			<text class="cts-home-subarea-txt">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		mixins:[homePublicMixins],
		methods:{
			home_subarea_tapped(index){
				uni.$emit('home_subarea_tapped',{index})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-home-subarea{
		width: $cts-screen-full;
		height: 150rpx;
		background-color: $cts-all-white;
		&-box{
			flex: 1;
			height: 150rpx;
		}
		&-img{
			width: 80rpx;
			height: 80rpx;
		}
		&-txt{
			margin-top: $cts-middle-padding;
			color: $cts-dark-brown;
			font-size: $cts-middle-font;
		}
	}
</style>
