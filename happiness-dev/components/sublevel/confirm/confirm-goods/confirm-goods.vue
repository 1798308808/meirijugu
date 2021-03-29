<template>
	<view class="cts-confirm cts-basic-full-padding cts-flex-dir ">
		<image class="cts-shopcart-item-thumb" :src="thumb" mode="aspectFit"></image>
		<view class="cts-shopcart-item-detail cts-basic-horizontal-padding cts-flex-jsb cts-flex-afs">
			<text class="cts-shopcart-item-title">{{title}}</text>
			<view class="cts-shopcart-item-options cts-flex-dir cts-flex-jfs cts-flex-afs cts-flex-wrap">
				<text class="cts-shopcart-item-options-item cts-padding-item" v-for="(item,index) in options" :key="index+'opt'">{{item}}</text>
			</view>
			<view class="cts-shopcart-item-bottom cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-shopcart-item-price">￥{{price}}</text>
				<text class="cts-shopcart-item-count">x{{count}}</text>
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
		props:['title','thumb','options','price','count']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(sp,bottom,$cts-light-grey,solid,1px)
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	
	.cts-confirm{
		width: 710rpx;
		border-radius: $cts-middle-padding;
		background-color: $cts-all-white;
		margin-top: $cts-basic-padding;
	}

	.cts-shopcart-item{
		&-thumb{
			width: 180rpx;
			height: 180rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-soso-grey;
		}
		&-detail{
			width: 490rpx;
			min-height: 180rpx;
		}
		&-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:1;
			text-overflow: ellipsis;
			margin-bottom: $cts-middle-padding;
		}
		&-options-item{
			border-radius: $cts-min-padding;
			margin-right: $cts-middle-padding;
			align-self: center;
			font-size: $cts-middle-font;
			background-color: $cts-narrow-grey;
			color: $cts-light-dark;
			margin-bottom: $cts-middle-padding;
		}
		&-bottom{
			width:  450rpx;
		}
		&-price{
			font-size: $cts-basic-font;
			color: $cts-alert-red;
		}
		&-count{
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}
	}
</style>
