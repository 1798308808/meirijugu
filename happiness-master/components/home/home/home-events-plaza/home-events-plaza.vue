<template>
	<view>
		<view class="cts-double-ad cts-flex-ac cts-flex-jsb cts-flex-dir cts-basic-horizontal-padding">
			<view v-for="(item,index) in group[0].double" :key="item.id" v-if="index<2" @tap="home_events_plaza_top(index)">
				<custom-pic-loading class="cts-double-ad-img" :img="'http://www.jufu-unique.com/' +item.img"></custom-pic-loading>
			</view>
		</view>
		<view class="cts-triple-ad cts-flex-ac cts-flex-jsb cts-flex-dir cts-basic-horizontal-padding">
			<view v-for="(item,index) in group[0].triple" :key="item.id" v-if="index<3" @tap="home_events_plaza_bottom(index)">
				<custom-pic-loading class="cts-triple-ad-img" :img="'http://www.jufu-unique.com/' +item.img"></custom-pic-loading>
			</view>
		</view>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		data() {
			return {
				group:[
					{
						double:[],
						triple:[]
					}
				]
			};
		},
		mixins:[homePublicMixins],
		methods:{
			home_events_plaza_top(index){
				uni.$emit('home_events_plaza_top',{index})
			},
			home_events_plaza_bottom(index){
				uni.$emit('home_events_plaza_bottom',{index})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-double-ad{
		width: $cts-screen-full;
		height: 200rpx;
		background-color: $cts-narrow-grey;
		&-img{
			width: 350rpx;
			height: 200rpx;
		}
	}
	.cts-triple-ad{
		width: $cts-screen-full;
		height: 380rpx;
		background-color: $cts-narrow-grey;
		&-img{
			width: 230rpx;
			height: 350rpx;
		}
	}
</style>
