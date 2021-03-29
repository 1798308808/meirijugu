<template>
	<view class="cts-message-cell cts-flex-dir cts-flex-ac cts-flex-jsb cts-basic-horizontal-padding cts-border-top-solid-btm">
		<image class="cts-message-img" :src="src" mode="aspectFit"></image>
		<view class="cts-message-desc cts-flex-jc cts-flex-afs cts-basic-horizontal-padding">
			<text class="cts-message-desc-main">{{title}}</text>
			<text class="cts-message-desc-sub">{{desc}}</text>
		</view>
		<view class="cts-message-etc cts-flex-jc cts-flex-afe">
			<text class="cts-message-etc-time">{{time}}</text>
			<text v-if="count>1" class="cts-message-etc-count cts-padding-count">{{count>100?99:count}}</text>
			<text v-else>&nbsp;&nbsp;</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','desc','count','time','src']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(count,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createBorder(btm,top,$cts-soso-grey,solid,1px)
	.cts-message{
		&-cell{
			width: $cts-screen-full;
			height: 180rpx;
			background-color: $cts-all-white;
		}
		&-img{
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
		}
		&-desc{
			width:510rpx;
		}
		&-desc-main{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			margin-bottom: $cts-middle-padding;
		}
		&-desc-sub{
			lines:1;
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-etc{
			width: 110rpx;
		}
		&-etc-time{
			margin-bottom: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-etc-count{
			font-size: $cts-middle-font;
			color:$cts-all-white;
			border-radius: $cts-basic-padding;
			background-color: $cts-alert-red;
		}
	}
</style>
