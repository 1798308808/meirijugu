<template>
	<view class="cts-shopcart-item cts-flex-dir cts-flex-afs cts-flex-jsb cts-border-bottom-solid-sp cts-basic-vertical-padding">
		<view @tap="select">
			<shopcart-radio :active="active" ></shopcart-radio>
		</view>
		<image class="cts-shopcart-item-thumb" :src="thumb" mode="aspectFit"></image>
		<view class="cts-shopcart-item-detail cts-basic-horizontal-padding cts-flex-jsb cts-flex-afs">
			<text class="cts-shopcart-item-title">{{title}}</text>
			<view class="cts-shopcart-item-options cts-flex-dir cts-flex-jfs cts-flex-afs cts-flex-wrap">
				<text class="cts-shopcart-item-options-item cts-padding-item" v-for="(item,index) in options" :key="index+'opt'">{{item}}</text>
			</view>
			<view class="cts-shopcart-item-bottom cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-shopcart-item-price">￥{{price}}</text>
				<uni-number-box :value="count"></uni-number-box>
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
		methods:{
			select(){
				this.$emit('update:active', !this.active);
			}
		},
		props:['title','thumb','options','price','count','active']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(sp,bottom,$cts-light-grey,solid,1px)
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	
	.cts-shopcart-item{
		width: 710rpx;

		background-color: $cts-all-white;
		border-radius: $cts-middle-padding;
		&-thumb{
			width: 180rpx;
			height: 180rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-soso-grey;
		}
		&-detail{
			width: 450rpx;
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
	}
</style>
