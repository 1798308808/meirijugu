<template>
	<view class="cts-king-box cts-flex-dir cts-flex-afs cts-flex-jfs cts-flex-wrap">
		<view class="cts-king-item cts-flex-ac cts-flex-jc" v-for="(item,index) in group" :key="item.text" @tap="home_kingkong_tapped(item)">
			<custom-pic-loading class="cts-king-img" lazy :b_radius="-1" :img="'http://www.jufu-unique.com/' + item.icon"></custom-pic-loading>
			<text class="cts-king-txt cts-text-overflow-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		mixins:[homePublicMixins],
		methods:{
			home_kingkong_tapped(item){
				uni.$emit('home_kingkong_tapped',item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-king{
		&-box{
			width: $cts-screen-full;
			height: 250rpx;
			background-color: $cts-all-white;
		}
		&-item{
			width: 150rpx;
			height: 125rpx;
		}
		&-img{
			width: 60rpx;
			height: 60rpx;
		}
		&-txt{
			width: 130rpx;
			text-align: center;
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
		}
	}
</style>
