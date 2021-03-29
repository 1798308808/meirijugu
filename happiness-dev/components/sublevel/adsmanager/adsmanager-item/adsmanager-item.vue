<template>
	<view class="cts-ads cts-basic-horizontal-padding">
		<view class="cts-ads-box cts-flex-dir cts-basic-full-padding">
			<view class="cts-ads-detail cts-flex-afs cts-flex-jc">
				<view class="cts-ads-detail-box cts-flex-dir cts-flex-jfs cts-flex-ac">
					<text class="cts-ads-name">{{name}}</text>
					<text class="cts-ads-phone">{{phone}}</text>
					<text v-if="de" class="cts-ads-default cts-padding-de">默认</text>
				</view>
				<text class="cts-ads-address">{{address}}</text>
			</view>
			<view class="cts-ads-edit cts-flex-jc cts-flex-ac">
				<view class="cts-ads-edit-border"></view>
				<text class="cts-ads-edit-txt">编辑</text>
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
		props:['name','phone','de','address']
	}
</script>

<style lang="scss" scoped>
	@include  createPadding(de,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.cts-ads{
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
			height: 160rpx;
			margin-bottom: $cts-basic-padding;
			border-radius: $cts-middle-padding;
			background-color: $cts-all-white;
		}
		&-name{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-phone{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			margin-left: $cts-basic-padding;
		}
		&-default{
			border-radius: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-all-white;
			background-color: $cts-dark-brown;
			margin-left: $cts-basic-padding;
		}
		&-address{
			lines:1;
			text-overflow: ellipsis;
			margin-top: $cts-basic-padding;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-detail{
			width: 550rpx;
			height: 120rpx;
		}
		&-edit-txt{
			font-size: $cts-basic-font;
			color: $cts-main-brown;
		}
		&-edit{
			position: relative;
			width: 120rpx;
			height: 120rpx;
		}
		&-edit-border{
			width: 1px;
			height: 100rpx;
			background-color: $cts-light-grey;
			position: absolute;
			left: 0;
			top: 10rpx;
		}
	}
</style>
