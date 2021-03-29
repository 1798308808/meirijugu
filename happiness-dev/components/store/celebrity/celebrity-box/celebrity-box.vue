<template>
	<view class="cts-celebrity cts-basic-horizontal-padding">
		<view class="cts-celebrity-head cts-flex-dir cts-flex-jc cts-flex-a" v-if="title_group&&title_group.length>1">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac cts-celebrity-title cts-basic-horizontal-padding" v-for="(item,index) in title_group" :key="index+'brr'">
				<image class="cts-celebrity-title-icon" src="/static/title_icon.png" mode="aspectFit"></image>
				<text class="cts-celebrity-title-txt cts-text-overflow-1">{{item.name}}</text>
			</view>
		</view>
		<view class="cts-celebrity-body">
			<view class="cts-celebrity-banner cts-flex-dir cts-flex-jsb cts-flex-afe cts-padding-banner">
				<custom-pic-loading class="cts-celebrity-banner-bg" :img="brands.background"></custom-pic-loading>
				<view class="cts-celebrity-banner-cover"></view>
				<!-- 遮罩 -->
				<view class="cts-celebrity-banner-board cts-basic-full-padding cts-flex-jc cts-flex-afs">
					<text class="cts-celebrity-brand-name cts-text-overflow-1">{{brands.name}}</text>
					<view class="cts-celebrity-brand-detail cts-flex-jfs cts-flex-dir cts-flex-afe">
						<text class="cts-celebrity-brand-num">{{brands.discount}}折</text>
						<text class="cts-celebrity-brand-amount"> 起 ({{brands.count}}件)</text>
					</view>
					<view class="cts-celebrity-brand-countdown cts-flex-dir cts-flex-jfs cts-flex-ac cts-basic-horizontal-padding">
						<view class="cts-celebrity-brand-cover"></view>
						<text  class="cts-celebrity-brand-desc">距结束</text>
						<custom-countdown :time_f="brands.time" :size_f="'s'" :txt_color="'#f0cb8d'" :point_color="'#f0cb8d'"></custom-countdown>
					</view>
				</view>
				<text class="cts-celebrity-banner-all cts-padding-all">查看全部</text>
			</view>
			<view class="cts-celebrity-goods cts-flex-jfs cts-flex-ac cts-flex-dir cts-flex-wrap cts-basic-full-padding">
				<view class="cts-celebrity-item cts-flex-jc cts-flex-ac" v-for="(item,index)  in goods_group" :key="item.id">
					<custom-pic-loading class="cts-celebrity-item-img" :img="item.thumb" :b_radius="15"></custom-pic-loading>
					<text class="cts-celebrity-item-title cts-text-overflow-1">{{item.title}}</text>
					<view class="cts-celebrity-item-price cts-flex-dir cts-flex-jsb cts-flex-ac">
						<text class="cts-celebrity-item-np cts-text-overflow-1">￥{{item.d_price}}</text>
						<text class="cts-celebrity-item-dp cts-text-overflow-1">￥{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['brands','title_group','goods_group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(all,$cts-basic-padding,$cts-basic-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(banner,$cts-basic-padding,$cts-basic-padding,$cts-basic-padding*2,$cts-basic-padding*2)
	.cts-celebrity{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		&-goods{
			width: 710rpx;
		}
		&-item{
			width: 223rpx;
			height: 320rpx;
			&-img{
				width:210rpx;
				height:210rpx;
				margin-bottom: $cts-middle-padding;
			}
			&-title{
				max-width:210rpx;
				font-size: $cts-middle-font;
				color: $cts-deep-dark;
			}
			&-np{
				max-width:105rpx;
				font-size: $cts-middle-font;
				color: $cts-alert-red;
			}
			&-dp{
				max-width:105rpx;
				font-size: $cts-middle-font;
				color:$cts-light-dark;
				text-decoration: line-through;
			}
			&-price{
				width:210rpx;
			}
		}
		&-brand{
			&-name{
				font-size: $cts-basic-font;
				max-width: 310rpx;
				color: $cts-dark-brown;
				font-weight: 700;
			}
			&-detail{
				margin-top: $cts-middle-padding;
				margin-bottom: $cts-middle-padding;
			}
			&-num{
				font-size: $cts-big-font;
				font-weight: 700;
				color: $cts-alert-red;
			}
			&-amount{
				font-size: $cts-basic-font;
				color:  $cts-dark-brown;
			}
			&-desc{
				font-size: $cts-middle-font;
				font-weight: 700;
				color: $cts-gradient-font;
				margin-right: $cts-basic-padding;
				transform: translateX(-$cts-middle-padding);
			}
			&-countdown{
				margin-top: $cts-basic-padding;
				height: 50rpx;
				border-top-left-radius: $cts-basic-padding;
				border-top-right-radius: 50%;
				border-bottom-left-radius: $cts-basic-padding;
				border-bottom-right-radius: 50%;
				background-color:$cts-dark-brown;
				position: relative;
				overflow: hidden;
			}
			&-cover{
				height: 75rpx;
				width: 100rpx;
				background-image: linear-gradient(to right,$cts-gradient-light-golden,$cts-darken-golden);
				position: absolute;
				left: -10rpx;
				top: -15rpx;
				transform: rotate(15deg);
			}
		}
		&-head{
			height: 80rpx;
		}
		&-title{
			&-icon{
				width: 30rpx;
				height: 30rpx;
				margin-right: $cts-middle-padding;
			}
			&-txt{
				color: $cts-all-white;
				font-size: $cts-middle-font;
				max-width: 100rpx;
			}
		}
		&-body{
			width: 710rpx;
			border-radius: $cts-middle-padding;
			min-height: 600rpx;
			background-color: $cts-all-white;
		}
		&-banner{
			width: 710rpx;
			height: 300rpx;
			border-top-right-radius: $cts-middle-padding;
			border-top-left-radius: $cts-middle-padding;
			position: relative;
			&-bg{
				width: 710rpx;
				height: 300rpx;
				position: absolute;
				left: 0;
				top: 0;
			}
			&-cover{
				width: 710rpx;
				height: 300rpx;
				position: absolute;
				left: 0;
				top: 0;
				background-color: rgba(0,0,0,.4);
			}
			&-board{
				width: 380rpx;
				height: 220rpx;
				border-radius: $cts-middle-padding;
				background-color: rgba(255,255,255,0.8);
			}
			&-all{
				border-radius: 50%;
				color: $cts-dark-brown;
				font-size: $cts-middle-font;
				background-color: rgba(255,255,255,0.8);
			}
		}
	}
</style>
