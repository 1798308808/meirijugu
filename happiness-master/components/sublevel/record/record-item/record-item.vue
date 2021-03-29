<template>
	<view class="cts-record-item cts-border-bottom-solid-btm cts-flex-dir cts-flex-jsb cts-flex-ac">
		<view class="cts-flex-dir cts-flex-ac cts-flex-jfs">
			<image v-if="!!icon" class="cts-record-item-icon" :src="icon" mode="aspectFit"></image>
			<view class="cts-record-detail cts-flex-afs cts-flex-jc">
				<text class="cts-record-detail-title">{{title}}</text>
				<text class="cts-record-detail-time">{{time}}</text>
			</view>
		</view>
		<view class="cts-flex-afe cts-flex-jc">
			<text class="cts-record-credit">{{addition}}</text>
			<text class="cts-record-credit-current">{{current}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['icon','time','title','addition','current']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(btm,bottom,$cts-light-grey,solid,1px)
	.cts-record{
		&-item{
			width: 710rpx;
			height: 180rpx;
		}
		&-item-icon{
			width: 60rpx;
			height: 60rpx;
		}
		&-detail{
			margin-left: $cts-basic-padding;
		}
		&-detail-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-detail-time{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-credit{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-credit-current{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
