<template>
	<view class="cts-detail-second cts-basic-horizontal-padding cts-flex-ac cts-flex-jc">
		<text class="cts-detail-second-title cts-basic-horizontal-padding" v-if="!!extra.title">{{extra.title}}</text>
		<view class="cts-detail-second-desc cts-flex-dir cts-flex-ac cts-flex-jsa cts-flex-wrap">
			<view class="cts-detail-second-item cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="item.title" @tap="menuTap(index)">
				<image class="cts-detail-second-item-img" :src="item.src" mode="aspectFit"></image>
				<text class="cts-detail-second-item-txt">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {userPublicMixins} from '@/static/mixins/mine/user/user_public.js'
	export default {
		mixins:[userPublicMixins],
		data() {
			return {
				group:[],
				extra:{
					title:''
				}
			};
		},
		props:['id'],
		methods:{
			menuTap(index){
				uni.$emit('user_menu_group',{id:this.id,index})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	$width:710rpx;
	.cts-detail{
		&-second{
			width:$width;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
			border-radius: $cts-basic-padding;
		}
		&-second-title{
			text-align: left;
			line-height: 50rpx;
			height: 50rpx;
			width:$width;
			font-size: $cts-basic-font;
			font-weight: 700;
			color: $cts-deep-dark;
		}
		&-second-desc{
			width:$width;
		}
		&-second-item{
			width: 160.5rpx;
			height: 150rpx;
		}
		&-second-item-img{
			width: 60rpx;
			height: 60rpx;
		}
		&-second-item-txt{
			margin-top: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-deep-dark;
		}
	}
</style>
