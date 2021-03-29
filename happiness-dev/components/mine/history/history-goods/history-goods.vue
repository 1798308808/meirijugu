<template>
	<view class="cts-double-item cts-flex-ac cts-flex-jfs" >
		<image class="cts-double-img" lazy-load="true" :src="thumb" mode="aspectFit"></image>
		<view class="cts-double-detail cts-flex-afs cts-flex-jsb">
			<text class="cts-double-title-title">{{title}}</text>
			
			<view class="cts-double-other cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-double-main-price">￥{{price}}</text>
				<view class="cts-double-rewards cts-padding-rd cts-flex-ac cts-flex-jc">
					<text class="cts-double-rewards-txt">奖{{rewards}}</text>
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
		props:['id','title','thumb','price','d_price','discount','platform','rewards','sales']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(rd,$cts-middle-padding,$cts-middle-padding,null,null)

	$width:345rpx;
	$desc_sect:50rpx;
	.cts-double{
		&-item{
			width: $width;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
		}
		&-other{
			height: 80rpx;
			width: 330rpx;
		}
		&-img{
			width: $width;
			height: $width;
			margin-bottom: $cts-middle-padding;
		}
		&-detail{
			overflow: hidden;
			width: $width;
			background-color: $cts-all-white;
		}
		&-title-title{
			margin-left: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			lines:1;
			width: 330rpx;
			text-overflow: ellipsis;
		}

		&-main-price{
			font-size: $cts-soso-font;
			color: $cts-alert-red;
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
			font-size: $cts-basic-font;
		}
	}
</style>
