<template>
	<view class="cts-public-zone cts-flex-dir cts-flex-ac cts-flex-jsb">
		<view class="cts-public-left cts-flex-dir cts-flex-ac cts-flex-jfs cts-padding-left">
			<text class="cts-public-title">{{group[0].title}}</text>
			<view class="cts-public-bar"></view>
			<text class="cts-public-desc">{{group[0].desc}}</text>
		</view>
		<view class="cts-public-right cts-flex-afe cts-flex-jc cts-padding-right">
			<text class="cts-public-right-txt" v-if="group[0].more">更多</text>
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
						more:false,
						title:'',
						desc:''
					}
				]
			};
		},
		mixins:[homePublicMixins]
	}
</script>

<style lang="scss" scoped>
	@include createPadding(right,null,$cts-basic-padding,null,null)
	@include createPadding(left,$cts-basic-padding,null,null,null)
	.cts-public{
		&-zone{
			width: $cts-screen-full;
			height: 80rpx;
			background-color: $cts-narrow-grey;
		}
		&-bar{
			width: 5rpx;
			border-radius: 10rpx;
			height: 20rpx;
			margin-left: $cts-middle-padding;
			margin-right:$cts-middle-padding;
			background-image: linear-gradient(to bottom,$cts-light-golden,$cts-main-brown);
		}
		&-left{
			width: 600rpx;
			height: 80rpx;
		}
		&-title{
			font-weight: 800;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-right{
			width: 150rpx;
			height: 80rpx;
		}
		&-right-txt{
			font-size: $cts-basic-font;
			color:$cts-middle-grey;
		}
	}
</style>
