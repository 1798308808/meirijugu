<template>
	<header class="cts-flex-ac cts-flex-jc">
		<view class="cts-empty-column cts-br"></view>
		<view class="cts-article-header-box cts-basic-full-padding">
			<text class="cts-article-header-title cts-basic-vertical-padding">{{title}}</text>
			<view class="cts-article-header-detail cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<custom-pic-loading class="cts-article-header-avatar" :img="!!avatar?avatar:'/static/logo.png'" b_radius="-1"></custom-pic-loading>
					<view class="cts-empty-row"></view>
					<view>
						<text class="cts-article-header-name">{{name}}</text>
						<text class="cts-article-header-time">{{time}}</text>
					</view>
				</view>
				<text class="cts-article-header-read">{{other}}</text>
			</view>
			<view class="cts-article-header-border"></view>
		</view>
	</header>
</template>

<script>
	export default {
		props:['title','time','other','name','avatar']
	}
</script>

<style lang="scss" scoped>
	.cts-br{
		width: $cts-screen-full;
		background-color: $cts-narrow-grey;
	}
	.cts-article-header{
		&-box{
			width:710rpx;
			background-color: $cts-all-white;
			min-height: 150rpx;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			position: relative;
		}
		&-border{
			width: 670rpx;
			height: 2rpx;
			background-color: $cts-soso-grey;
			position: absolute;
			left: 20rpx;
			bottom: 0;
		}
		&-title{
			font-size: $cts-ext-font;
			color: $cts-dark-brown;
			font-weight: 700;
			margin-bottom: $cts-middle-padding;
		}
		&-time{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-read{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-name{
			font-size: $cts-middle-font;
			font-weight: 700;
			color: $cts-light-dark;
		}
		&-avatar{
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>
