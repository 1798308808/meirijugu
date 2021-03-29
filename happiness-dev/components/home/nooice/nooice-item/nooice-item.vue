<template>
	<view class="cts-nice cts-basic-horizontal-padding cts-flex-jc cts-flex-ac">
		<text class="cts-nice-title cts-basic-vertical-padding">{{time}}</text>
		<view class="cts-nice-box cts-basic-full-padding cts-flex-dir">
			<image v-if="!noimg" class="cts-nice-img" :src="thumb" mode="aspectFit"></image>
			<view class=" cts-padding-detail cts-flex-jc cts-flex-afs" :class="[noimg?'cts-nice-detail-full':'cts-nice-detail']">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<text class="cts-nice-main">{{title}}</text>
					<view v-if="is_new" class="cts-nice-point"></view>
				</view>
				<text class="cts-nice-desc">{{desc}}</text>
			</view>
			<view class="cts-nice-right cts-flex-afe cts-flex-jfe">
				<image class="cts-nice-right-icon" src="/static/back.png" mode="aspectFit"></image>
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
		props:['thumb','time','title','is_new','desc','noimg']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(detail,$cts-middle-padding,$cts-middle-padding,null,null)
	
	.cts-nice{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		&-point{
			margin-left: $cts-middle-padding;
			width: 15rpx;
			height: 15rpx;
			background-color: $cts-alert-red;
			border-radius: 50%;
		}
		&-box{
			width: 710rpx;
			background-color: $cts-all-white;
		}
		&-img{
			width: 120rpx;
			height: 120rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-soso-grey;
		}
		&-title{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-detail-full{
			width: 610rpx;
		}
		&-detail{
			width: 490rpx;
		}
		&-right{
			width: 60rpx;
		}
		&-right-icon{
			width: 30rpx;
			height: 30rpx;
			transform: rotate(180deg);
		}
		&-main{
			max-width: 400rpx;
			lines:1;
			text-overflow: ellipsis;
			font-weight: 700;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-desc{
			margin-top: $cts-middle-padding;
			width: 470rpx;
			lines:2;
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color:$cts-light-dark;
		}
	}
</style>
