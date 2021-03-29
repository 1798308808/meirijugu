<template>
	<view class="cts-board cts-flex-jc cts-flex-ac cts-basic-horizontal-padding">
		<image class="cts-board-bg" src="/static/fans_wall.png" mode="aspectFit"></image>
		<view class="cts-board-people-box cts-flex-dir cts-flex-jc cts-flex-afe">
			<text class="cts-board-people">{{total_fans}}</text>
			<text class="cts-board-unit">人</text>
		</view>
		<text class="cts-board-desc">我的粉丝</text>
		<view class="cts-board-data cts-flex-dir cts-flex-jc cts-flex-ac cts-basic-horizontal-padding">
			<view class="cts-board-item cts-flex-jc cts-flex-ac">
				<text class="cts-board-item-data">{{daily_increase}}</text>
				<text class="cts-board-item-desc">今日新增</text>
				<view class="cts-board-border"></view>
			</view>
			<view class="cts-board-item cts-flex-jc cts-flex-ac">
				<text class="cts-board-item-data">{{newly_increase}}</text>
				<text class="cts-board-item-desc">昨日新增</text>
				<view class="cts-board-border"></view>
			</view>
			<view class="cts-board-item cts-flex-jc cts-flex-ac">
				<text class="cts-board-item-data">{{first_fans}}</text>
				<text class="cts-board-item-desc">一级粉丝</text>
				<view class="cts-board-border"></view>
			</view>
			<view class="cts-board-item cts-flex-jc cts-flex-ac">
				<text class="cts-board-item-data">{{secondary_fans}}</text>
				<text class="cts-board-item-desc">二级粉丝</text>
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
		props:['total_fans','daily_increase','newly_increase','first_fans','secondary_fans']
	}
</script>

<style lang="scss" scoped>
	.cts-board{
		position: relative;
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		height: 487rpx;
		&-border{
			background-color: $cts-all-white;
			height: 50rpx;
			width: 1rpx;
			position: absolute;
			right: 0;
			top: 50rpx;
		}
		&-bg{
			width: 710rpx;
			height: 487rpx;
			position: absolute;
			left: $cts-basic-padding;
			top: 0;
		}
		&-item{
			position: relative;
			width: 167.5rpx;
			height: 150rpx;
		}
		&-item-data{
			font-size: $cts-big-font;
			color: $cts-gradient-font;
		}
		&-item-desc{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-main-brown;
		}
		&-data{
			width: 710rpx;
			height: 150rpx;
		}
		&-people-box{
			width: 710rpx;
			height: 200rpx;
		}
		&-people{
			font-size: $cts-mega-font;
			font-weight: 300;
			color: $cts-gradient-font;
		}
		&-unit{
			transform: translateY(-10rpx);
			font-size: $cts-basic-font;
			color: $cts-gradient-font;
		}
		&-desc{
			font-size: $cts-basic-font;
			color: $cts-main-brown;
			margin-bottom: 50rpx;
		}
	}
</style>
