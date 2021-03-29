<template>
	<view class="cts-seller cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
		<view class="cts-seller-item cts-flex-afs cts-flex-jc cts-basic-vertical-padding" v-for="(item,index) in group" :key="'sel'+index">
			<image lazy-load="true" class="cts-seller-item-thumb" :src="item.thumb" mode="aspectFit"></image>
			<text class="cts-seller-item-txt cts-padding-txt">{{item.title}}</text>
			<view class="cts-flex-dir cts-padding-ele cts-flex-jfs cts-flex-ac">
				<text class="cts-seller-price">￥{{item.price}}</text>
				<text class="cts-seller-desc"  v-if="item.back">券后</text>
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

<style lang="scss">
	@include createPadding(txt,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(ele,$cts-middle-padding,$cts-middle-padding,null,null)
	.cts-seller{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		&-item{
			overflow: hidden;
			border-radius: $cts-basic-padding;
			width: 345rpx;
			background-color: $cts-all-white;
		}
		&-item-thumb{
			width: 345rpx;
			height: 345rpx;
		}
		&-item-txt{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:1;
			text-overflow: ellipsis;
		}
		&-price{
			font-size: $cts-basic-font;
			font-weight: 700;
			color: $cts-alert-red;
		}
		&-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			margin-left: $cts-middle-padding;
		}
	}
</style>
