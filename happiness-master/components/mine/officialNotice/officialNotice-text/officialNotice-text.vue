<template>
	<view class="cts-textarea cts-flex-jfs cts-flex-ac">
		<text class="cts-textarea-time cts-basic-vertical-padding">{{time}}</text>
		<view class="cts-textarea-main cts-basic-full-padding">
			<view class="cts-textarea-main-header cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-textarea-main-title">{{title}}</text>
				<text class="cts-textarea-main-read">{{readed}}已读</text>
			</view>
			<image lazy-load="true" v-if="!!img" :src="img" mode="widthFix" class="cts-textarea-main-img"></image>
			<text class="cts-textarea-main-desc">{{desc}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title','desc','readed','time','shit','img']
	}
</script>

<style lang="scss" scoped>
	.cts-textarea{
		width: $cts-screen-full;
		margin-top: $cts-basic-padding;
		margin-bottom: $cts-basic-padding;
		&-time{
			align-self: center;
			font-size: $cts-middle-font;
			color: $cts-middle-grey;
		}
		&-main{
			width: 710rpx;
			min-height: 180rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		&-main-header{
			height: 80rpx;
		}
		&-main-title{
			font-weight: 700;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-main-read{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-main-desc{
			font-size: $cts-basic-font;
			color:$cts-middle-grey;
		}
		&-main-img{
			width: 670rpx;
			margin-bottom: $cts-basic-padding;
			background-color: $cts-narrow-grey;
		}
	}
</style>
