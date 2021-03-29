<template>
	<view class="cts-double cts-basic-full-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
		<view class="cts-double-item" v-for="(item,index) in group" :key="item.id">
			<image class="cts-double-thumb" :src="item.thumb" mode="aspectFit"></image>
			<view class="cts-basic-horizontal-padding cts-flex-afs cts-flex-jc">
				<text class="cts-double-title">{{item.title}}</text>
				<text v-if="item.red" class="cts-double-desc-red cts-border-desc-r cts-padding-desc">{{item.desc}}</text>
				<text v-else class="cts-double-desc cts-border-desc cts-padding-desc">{{item.desc}}</text>
			</view>
			<view class="cts-double-price-box cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-flex-dir">
					<text class="cts-double-hd">抵扣后</text>
					<text class="cts-double-price">￥{{item.price}}</text>
				</view>
				<text class="cts-double-sales">销量{{item.sales}}</text>
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
		props:['group']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(desc,solid,$cts-dark-golden,1px)
	@include createFullBorder('desc-r',solid,$cts-alert-red,1px)
	@include createPadding(desc,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.cts-double{
		width: $cts-screen-full;
		&-item{
			border-radius: $cts-basic-padding;
			width: 345rpx;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
		}
		&-thumb{
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			width: 345rpx;
			height: 345rpx;
		}
		&-title{
			margin-top: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:2;
			text-overflow: ellipsis;
		}
		&-desc-red{
			margin-top: $cts-middle-padding;
			align-self: flex-start;
			border-radius: $cts-min-padding;
			font-size: $cts-middle-font;
			color: $cts-alert-red;
		}
		&-desc{
			margin-top: $cts-middle-padding;
			align-self: flex-start;
			border-radius: $cts-min-padding;
			font-size: $cts-middle-font;
			color: $cts-dark-golden;
		}
		&-price-box{
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-basic-padding;
		}
		&-hd{
			font-size: $cts-basic-font;
			color:$cts-alert-red;
		}
		&-price{
			font-size: $cts-basic-font;
			color:$cts-alert-red;
			font-weight: 700;
		}
		&-sales{
			font-size: $cts-min-font;
			color:$cts-light-dark
		}
	}
</style>
