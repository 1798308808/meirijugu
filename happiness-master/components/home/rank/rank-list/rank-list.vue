<template>
	<view class="cts-rank-list cts-basic-horizontal-padding">
		<view class="cts-rank-list-box cts-basic-full-padding">
			<view class="cts-rank-list-title cts-flex-dir cts-flex-ac">
				<text class="cts-rank-list-rank">排名</text>
				<view class="cts-rank-list-empty"></view>
				<text class="cts-rank-list-name">会员名</text>
				<text class="cts-rank-list-money">财富</text>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cts-rank-list{
		width: $cts-screen-full;
		margin-top: $cts-basic-padding;
		&-box{
			width: 710rpx;
			background-color: $cts-all-white;
		}
		&-title{
			width: 670rpx;
			height: 80rpx;
		}
		&-rank{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			width: 80rpx;
			text-align: center;
		}
		&-empty{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			width: 120rpx;
			height: 100rpx;
		}
		&-name{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			width: 280rpx;
		}
		&-money{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			text-align: right;
			width: 170rpx;
		}
	}
</style>
