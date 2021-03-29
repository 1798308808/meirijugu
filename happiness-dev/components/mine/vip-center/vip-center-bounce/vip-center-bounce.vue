<template>
	<view>
		<text class="cts-basic-horizontal-padding cts-bounce-txt">购买以下礼包，立即升级会员等级</text>
		<scroller class="cts-bounce-scroller cts-basic-horizontal-padding cts-flex-dir" show-scrollbar="false" scroll-direction="horizontal">
			<view class="cts-bounce-item cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="index+'bounce'">
				<view class="cts-bounce-img-box">
					<image class="cts-bounce-img" :src="item.thumb" mode="aspectFit"></image>
				</view>
				<view class='cts-bounce-detail cts-basic-full-padding'>
					<text class="cts-bounce-title">{{item.name}}</text>
					<text class="cts-bounce-price cts-padding-pr">￥{{item.price}}</text>
					<text class="cts-bounce-btn">立即购买</text>
				</view>
			</view>
		</scroller>
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

<style lang="scss"scoped>
	@include  createPadding(pr,null,null,$cts-middle-padding,$cts-middle-padding)
	$width:300rpx;
	.cts-bounce{
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-scroller{
			margin-top: $cts-basic-padding;
			width: $cts-screen-full;
		}
		&-item{
			width: $width;
			margin-right: $cts-basic-padding;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		
		&-img-box{
			width: $width;
			height: $width;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			background-color: $cts-soso-grey;
		}
		&-img{
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			width: $width;
			height: $width;
		}
		&-detail{
			width: $width;
		}
		&-title{
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:1;
		}
		&-price{
			font-size: $cts-basic-font;
			color: $cts-alert-red;
		}
		&-btn{
			text-align: center;
			height: 60rpx;
			border-radius: $cts-middle-padding;
			font-size: $cts-basic-font;
			line-height: 60rpx;
			color: $cts-main-brown;
			background-image: linear-gradient(to right, $cts-gradient-light-golden, $cts-gradient-dark-golden);
		}
	}
</style>
