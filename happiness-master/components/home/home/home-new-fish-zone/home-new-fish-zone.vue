<template>
	<view>
		<!-- <view class="cts-double-ad cts-flex-ac cts-flex-jsb cts-flex-dir cts-basic-horizontal-padding">
			<custom-pic-loading class="cts-double-ad-img"  :img="item.img" v-for="(item,index) in group[0].double" :key="item.id" v-if="index<2"></custom-pic-loading>
		</view> -->
		<view class="cts-header">
			<view class="cts-header-cover">
				<custom-pic-loading class="cts-header-cover-img"  :img="group[0].activity.length>0?group[0].activity[group[0].activity.length-1].img:''"></custom-pic-loading>
			</view>
			<swiper class="cts-header-banner" :autoplay="true" :interval="3000" :circular="true">
				<swiper-item v-for="(item,index) in group[0].banner" :key="item.id">
					<view class="cts-header-img cts-flex-ac cts-flex-jc cts-basic-horizontal-padding">
						<custom-pic-loading class="cts-header-img-box"  :img="item.img"></custom-pic-loading>
					</view>
				</swiper-item>
			</swiper>
			<view class="cts-speed-dial cts-flex-jc cts-flex-ac cts-flex-wrap cts-flex-dir cts-basic-horizontal-padding">
				<view class="cts-speed-dial-box cts-padding-sd" v-for="(item,index) in group[0].activity" v-if="index<6" :key="item.id" @tap="home_new_fish_tapped">
					<custom-pic-loading class="cts-speed-dial-img"  :img="item.img" :mode="'scaleToFill'"></custom-pic-loading>
				</view>
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
						banner:[],
						activity:[]
					}
				]
			};
		},
		mixins:[homePublicMixins],
		methods:{
			home_new_fish_tapped(index){
				uni.$emit('home_new_fish_tapped',{index})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(sd,2.5rpx,2.5rpx,2.5rpx,2.5rpx)
	.cts-double-ad{
		width: $cts-screen-full;
		height: 200rpx;
		background-color: $cts-narrow-grey;
		&-img{
			width: 350rpx;
			height: 200rpx;
		}
	}
	.cts-speed-dial{
		width: $cts-screen-full;
		height: 498rpx;
		&-box{
			width: 355rpx;
			height: 166rpx;
		}
		&-img{
			width: 350rpx;
			height: 161rpx;
		}
	}
	.cts-header{
		width: $cts-screen-full;
		height: 755rpx;
		position: relative;
		background-color: $cts-narrow-grey;
		&-cover{
			width: $cts-screen-full;
			height: 594rpx;
			position: absolute;
			left: 0;
			bottom: 0;
		}
		&-cover-img{
			width: $cts-screen-full;
			height: 594rpx;
		}
		&-banner{
			width: $cts-screen-full;
			height: 250rpx;
			position: relative;
		}
		&-bg{
			position: absolute;
			width: $cts-screen-full;
			height: 100rpx;
			
			background-color: red;
			left: 0;
			bottom: 0;
		}
		&-img{
			width: $cts-screen-full;
			height: 250rpx;
		}
		&-img-box{
			width: 650rpx;
			height: 250rpx;
		}
	}
</style>
