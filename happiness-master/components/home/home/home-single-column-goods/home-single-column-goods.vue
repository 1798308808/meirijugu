<template>
	<view>
		<view class="cts-single-goods cts-flex-dir cts-flex-ac cts-flex-jfs cts-basic-full-padding" :style="{backgroundColor:color?'rgba(0,0,0,0)':'#fff'}" @tap="home_single_goods_tapped(group[0].id)">
			<view class="cts-single-goods-thumb">
				<custom-pic-loading :lazy="true" class="cts-single-goods-img" :img="group[0].thumb"></custom-pic-loading>
			</view>
			<view class="cts-single-goods-column-empty"></view>
			<view class="cts-single-goods-desc cts-flex-ac cts-flex-jc">
				<view class="cts-single-goods-title-box cts-flex-dir cts-flex-jfs cts-flex-afs">
					<image v-if="!!group[0].platform" class="cts-single-goods-title-platform" :src="group[0].platform" mode="aspectFit"></image>
					<text v-if="!!group[0].platform" class="cts-single-goods-title-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{group[0].title}}</text>
					<text v-else class="cts-single-goods-title-title">{{group[0].title}}</text>
				</view>
				
				<view v-if="!nosub">
					<view v-if="!!group[0].storeName"  class="cts-single-goods-store cts-flex-dir cts-flex-ac cts-flex-jfs">
						<image class="cts-single-goods-store-icon" src="/static/store.png" mode="aspectFit"></image>
						<text class="cts-single-goods-store-txt">{{group[0].storeName}}</text>
					</view>
					<text v-else  class="cts-single-goods-desc-detail">{{group[0].desc}}</text>
				</view>
				
				<view class="cts-single-goods-price-box cts-flex-dir cts-flex-jsb cts-flex-ac">
					<view class="cts-flex-dir cts-flex-ac cts-flex-jfs">
						<text class="cts-single-goods-main-price">￥{{group[0].price}}</text>
						<text class="cts-single-goods-dis-price">￥{{group[0].d_price}}</text>
						<image v-if="group[0].seckill" class="cts-single-goods-dis-seckill" src="/static/seckill.png" mode="aspectFit"></image>
					</view>
					<text class="cts-single-goods-sales" v-if="!!group[0].sales">销量{{group[0].sales | priceFilter}}</text>
				</view>
				
				<view class="cts-single-goods-dbbox cts-flex-ac cts-flex-jfs cts-flex-dir">
					<view class="cts-single-goods-discount-box cts-padding-dc  cts-flex-ac cts-flex-jc cts-border-bottom-solid-half-b  cts-border-left-solid-half-l cts-border-top-solid-half-t">
						<text class="cts-single-goods-discount-box-txt">￥{{group[0].discount}}&nbsp;&nbsp;券</text>
						<view class="cts-single-goods-discount-line"></view>
						<view class="cts-single-goods-discount-middle-line"></view>
						<view class="cts-single-goods-discount-circle cts-border-right-solid-half-cover cts-border-bottom-solid-half-b cts-border-left-solid-half-l cts-border-top-solid-half-t"></view>
					</view>
					<view class="cts-single-goods-rewards cts-padding-rd cts-flex-ac cts-flex-jc">
						<text class="cts-single-goods-rewards-txt">奖￥{{group[0].rewards}}</text>
					</view>
				</view>
			</view>
			<view class="cts-single-goods-border"></view>
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
						id:'',
						title:'',
						thumb:'',
						desc:'',
						price:'',
						d_price:'',
						discount:'',
						platform:'',
						rewards:'',
						seckill:false,
						storeName:''
					}
				]
			};
		},
		filters:{
			priceFilter:function(val){
				if(!val)return val;
				let str = val.toString().split('');
				if(str.length>4){
					let num = val.toString()
					return `${(Number(num.substr(0,num.length-2))/100).toFixed(2)}万`
				}
				else{
					return val;
				}
			}
		},
		methods:{
			home_single_goods_tapped(id){
				if(!!id)uni.$emit('home_single_goods_tapped',{id})
			}
		},
		props:['nosub','color'],
		mixins:[homePublicMixins]
	}
</script>

<style lang="scss" scoped>
	@include createPadding(dc,$cts-min-padding,$cts-middle-padding,null,null)
	@include createPadding(rd,$cts-min-padding,$cts-min-padding,null,null)
	@include createBorder('half-l',left, $cts-alert-red,solid,2rpx)
	@include createBorder('half-r',right, $cts-alert-red,solid,2rpx)
	@include createBorder('half-t',top,$cts-alert-red,solid,2rpx)
	@include createBorder('half-cover',right,$cts-all-white,solid,2rpx)
	@include createBorder('half-b',bottom, $cts-alert-red,solid,2rpx)
	$desc:450rpx;
	$desc_sect:50rpx;
	.cts-single-goods{
		width: $cts-screen-full;
		height: 280rpx;
		position: relative;
		&-column-empty{
			width:$cts-basic-padding;
			height:10rpx;
		}
		&-sales{
			font-size: $cts-middle-font;
			color: $cts-light-dark;

		}
		&-border{
			bottom: 0;
			left:25rpx ;
			width: 700rpx;
			height: 1rpx;
			background-color: $cts-soso-grey;
			position: absolute;
		}
		&-store{
			width: $desc;
			height: $desc_sect;
		}
		&-store-icon{
			width: 30rpx;
			height: 30rpx;
		}
		&-store-txt{
			margin-left: 10rpx;
			width: 440rpx;
			font-size: $cts-middle-font;
			line-height: $desc_sect;
			lines:1;
			text-overflow: ellipsis;
			color: $cts-middle-grey;
		}
		&-img{
			width: 240rpx;
			height: 240rpx;
		}
		&-thumb{
			width: 240rpx;
			height: 240rpx;
			background-color: $cts-light-grey;
		}
		&-desc{
			overflow: hidden;
			width: $desc;
			height: 240rpx;
		}
		&-title-box{
			position: relative;
			width: $desc;
			height: 90rpx;
		}
		&-title-platform{
			position: absolute;
			left: 0;
			top: 0;
			width: 40rpx;
			height: 40rpx;
		}
		&-title-title{
			margin-left: $cts-middle-padding;
			width: 440rpx;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			lines:2;
			text-overflow: ellipsis;
		}
		&-desc-detail{
			width: $desc;
			height: $desc_sect;
		}
		&-desc-detail{
			width: $desc;
			color: $cts-middle-grey;
			font-size: $cts-middle-font;
			line-height: $desc_sect;
			lines:1;
			text-overflow: ellipsis;
		}
		&-price-box{
			width: $desc;
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
		&-dbbox{
			width: $desc;
			height: $desc_sect;
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
		&-dis-seckill{
			width: 70rpx;
			height: 30rpx;
		}
	}
</style>
