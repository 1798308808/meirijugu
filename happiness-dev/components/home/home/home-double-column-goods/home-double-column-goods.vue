<template>
	<view class="cts-double cts-flex-dir cts-flex-ac cts-flex-jsb cts-padding-cp">
		<view class="cts-double-item cts-flex-ac cts-flex-jfs" v-for="(item,index) in group" :key="item.id" @tap="home_double_goods_tapped(item.id)">
			<custom-pic-loading :lazy="true" class="cts-double-img" :img="item.thumb"></custom-pic-loading>
			<view class="cts-double-detail cts-flex-afs cts-flex-jsb">
				<view class="cts-double-title-box cts-flex-jc cts-flex-ac">
					<image class="cts-double-title-platform" :src="item.platform" mode="aspectFit"></image>
					<text class="cts-double-title-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}</text>
				</view>
				
				<view class="cts-double-price-box cts-flex-dir cts-flex-jfs cts-flex-ac cts-padding-dp">
					<text class="cts-double-main-price">￥{{item.price}}</text>
					<text class="cts-double-dis-price">￥{{item.d_price}}</text>
				</view>
				<text class="cts-double-sales cts-padding-dp">已售{{item.sales}}</text>
				
				<view class="cts-double-dbbox cts-flex-ac cts-flex-jfs cts-flex-dir cts-padding-dp">
					<view class="cts-double-discount-box cts-padding-dc  cts-flex-ac cts-flex-jc cts-border-bottom-solid-half-b  cts-border-left-solid-half-l cts-border-top-solid-half-t">
						<text class="cts-double-discount-box-txt">{{item.discount}}&nbsp;&nbsp;券</text>
						<view class="cts-double-discount-line"></view>
						<view class="cts-double-discount-middle-line"></view>
						<view class="cts-double-discount-circle cts-border-right-solid-half-cover cts-border-bottom-solid-half-b cts-border-left-solid-half-l cts-border-top-solid-half-t"></view>
					</view>
					<view class="cts-double-rewards cts-padding-rd cts-flex-ac cts-flex-jc">
						<text class="cts-double-rewards-txt">奖{{item.rewards}}</text>
					</view>
				</view>
			</view>
			<view class="cts-double-cover cts-flex-ac cts-flex-jc" v-if="!!item.video">
				<view class="cts-double-cover-circle cts-flex-ac cts-flex-jc">
					<image class="cts-double-cover-img" src="/static/play.png" mode="aspectFit"></image>
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
						id:'a',
						title:'',
						thumb:'',
						price:'',
						d_price:'',
						discount:'',
						platform:'',
						rewards:'',
						sales:'',
						video:''
					},
					{
						id:'b',
						title:'',
						thumb:'',
						price:'',
						d_price:'',
						discount:'',
						platform:'',
						rewards:'',
						sales:'',
						video:''
					}
				]
			};
		},
		methods:{
			home_double_goods_tapped(id){
				if(!!id)uni.$emit('home_double_goods_tapped',{id})
			}
		},
		mixins:[homePublicMixins]
	}
</script>

<style lang="scss" scoped>
	@include createPadding(cp,$cts-basic-padding,$cts-basic-padding,null,$cts-basic-padding)
	@include createPadding(dp,$cts-middle-padding,$cts-middle-padding,null,null)
	@include createPadding(gp,$cts-basic-padding,$cts-basic-padding,$cts-basic-padding,$cts-basic-padding)
	@include createPadding(dc,$cts-min-padding,$cts-middle-padding,null,null)
	@include createPadding(rd,$cts-min-padding,$cts-min-padding,null,null)
	
	@include createBorder('half-l',left, $cts-alert-red,solid,2rpx)
	@include createBorder('half-r',right, $cts-alert-red,solid,2rpx)
	@include createBorder('half-t',top,$cts-alert-red,solid,2rpx)
	@include createBorder('half-cover',right,$cts-all-white,solid,2rpx)
	@include createBorder('half-b',bottom, $cts-alert-red,solid,2rpx)
	$width:345rpx;
	$desc_sect:50rpx;
	.cts-double{
		width: $cts-screen-full;
		background-color: $cts-narrow-grey;
		overflow: hidden;
		&-cover{
			position: absolute;
			left: 0;
			top: 0;
			width: $width;
			height: $width;
		}
		&-cover-circle{
			width: 100rpx;
			height: 100rpx;
			background-color: rgba(0,0,0,.4);
			border-radius: 50%;
		}
		&-cover-img{
			width: 40rpx;
			height: 40rpx;
		}
		&-item{
			width: $width;
			height: 580rpx;
			background-color: $cts-all-white;
			position: relative;
		}
		&-img{
			width: $width;
			height: $width;
			margin-bottom: $cts-middle-padding;
		}
		&-detail{
			overflow: hidden;
			width: $width;
			height: 220rpx;
			background-color: $cts-all-white;
		}
		&-title-box{
			position: relative;
			width: 330rpx;
			margin-bottom: $cts-middle-padding;
		}
		&-title-platform{
			position: absolute;
			left: $cts-middle-padding;
			top: 5rpx;
			width: 30rpx;
			height: 30rpx;
		}
		&-title-title{
			margin-left: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			lines:2;
			width: 330rpx;
			text-overflow: ellipsis;
		}
		&-price-box{
			width: $width;
			height: $desc_sect;
		}
		&-main-price{
			font-size: $cts-soso-font;
			color: $cts-alert-red;
		}
		&-dis-price{
			font-size: $cts-middle-font;
			text-decoration: line-through;
			color: $cts-light-dark;
		}
		&-sales{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-dbbox{
			width: $width;
			// height: $desc_sect;
		}
		&-discount-box{
			overflow: hidden;
			border-radius: $cts-min-padding;
			height: 35rpx;
			position: relative;
		}
		&-discount-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-alert-red;
			position: absolute;
			top: 0;
			right: 0rpx;
		}
		&-discount-middle-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-alert-red;
			position: absolute;
			top: 0;
			right: 40rpx;
		}
		&-discount-circle{
			height: 20rpx;
			width: 20rpx;
			position: absolute;
			background-color: $cts-all-white;
			top: 7.5rpx;
			right: -14rpx;
			border-radius: 50%;
		}
		&-discount-box-txt{
			font-size: $cts-middle-font;
			color: $cts-alert-red
		}
		&-rewards{
			margin-left: $cts-middle-padding;
			border-radius: $cts-min-padding;
			height: 35rpx;
			position: relative;
			background-image:linear-gradient(to right,$cts-gradient-light-golden,$cts-gradient-dark-golden) ;
		}
		&-rewards-txt{
			color: $cts-gradient-font;
			font-size: $cts-middle-font;
		}
	}
</style>
