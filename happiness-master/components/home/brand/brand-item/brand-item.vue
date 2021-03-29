<template>
	<view class="cts-brand-item cts-basic-full-padding">
		<view class="cts-brand-item-box cts-basic-full-padding cts-flex-jc cts-flex-ac">
			<image class="cts-brand-item-cover" src="/static/nice_bg.png" mode="widthFix"></image>
			<view class="cts-brand-item-title cts-flex-jsb cts-flex-ac cts-flex-dir">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<image class="cts-brand-item-title-avatar" :src="thumb" mode="aspectFit"></image>
					<text class="cts-brand-item-title-txt">{{name}}</text>
				</view>
				<text class="cts-brand-item-title-more">更多</text>
			</view>
			<view class="cts-brand-item-body cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-brand-item-body-item cts-flex-afs cts-flex-jc cts-basic-vertical-padding" v-for="(item,index) in group" :key="index+'bi'">
					<image class="cts-brand-item-body-item-thumb" :src="item.thumb" mode="aspectFit"></image>
					<text class="cts-brand-item-body-item-txt cts-padding-txt">{{item.title}}</text>
					<view class="cts-flex-dir cts-padding-ele cts-flex-jfs cts-flex-ac">
						<text class="cts-brand-item-body-price">￥{{item.price}}</text>
						<text class="cts-brand-item-body-desc" v-if="item.back">券后</text>
					</view>
				</view>
				<view class="cts-brand-item-empty" v-if="group.length<3"></view>
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
		props:['group','name','thumb']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(txt,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(ele,$cts-middle-padding,$cts-middle-padding,null,null)
	$width:670rpx;
	.cts-brand-item{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-empty{
			width: 210rpx;
		}
		&-box{
			width: 710rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-light-grey;
			position: relative;
			overflow: hidden;
		}
		&-cover{
			border-radius: $cts-basic-padding;
			width: 710rpx;
			height: 300rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-title{
			width: $width;
			height: 150rpx;
		}
		&-title-avatar{
			width: 80rpx;
			height: 80rpx;
			background-color: $cts-soso-grey;
			border-radius: 50%;
		}
		&-title-txt{
			font-size: $cts-soso-font;
			color: $cts-all-white;
			margin-left: $cts-basic-padding;
		}
		&-title-more{
			font-size: $cts-basic-font;
			color: $cts-all-white;
		}
		&-body{
			width: $width;
		}
		&-body-item{
			overflow: hidden;
			border-radius: $cts-basic-padding;
			width: 210rpx;
			background-color: $cts-all-white;
		}
		&-body-item-thumb{
			width: 210rpx;
			height: 210rpx;
		}
		&-body-item-txt{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:1;
			text-overflow: ellipsis;
		}
		&-body-price{
			font-size: $cts-middle-font;
			font-weight: 700;
			color: $cts-alert-red;
		}
		&-body-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			margin-left: $cts-middle-padding;
		}
	}
</style>
