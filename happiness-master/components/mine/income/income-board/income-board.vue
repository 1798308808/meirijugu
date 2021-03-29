<template>
	<view class="cts-income">
		<view class="cts-income-empty" :style="{height:t+'px'}"></view>
		<image class="cts-income-bg" src="/static/income_bg.png" mode="aspectFit"></image>
		<view class="cts-income-header cts-flex-jfe cts-flex-ac">
			<text class="cts-income-header-title">累计结算收益(元)</text>
			<text class="cts-income-header-total">{{total}}</text>
			<text class="cts-income-header-remain">账户余额(元):{{remain}}</text>
		</view>
		<view class="cts-income-data cts-flex-jc cts-flex-ac">
			<view class="cts-income-data-box cts-flex-dir cts-flex-jc cts-flex-ac">
				<view class="cts-income-data-item cts-flex-jc cts-flex-ac">
					<view class="cts-income-data-box-border"></view>
					<text class="cts-income-data-item-num">{{last_month}}</text>
					<text class="cts-income-data-item-title">上月预估收益(元)</text>
				</view>
				<view class="cts-income-data-item cts-flex-jc cts-flex-ac">
					<text class="cts-income-data-item-num">{{current_month}}</text>
					<text class="cts-income-data-item-title">本月预估收益(元)</text>
				</view>
			</view>
			<view class="cts-income-data-bottom cts-flex-afs cts-flex-jc">
				<view class="cts-income-data-bottom-border-left"></view>
				<view class="cts-income-data-bottom-border-right"></view>
				<text class="cts-income-data-bottom-txt">每月20号结算上个月已结算订单佣金</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		created() {
			let [s,n,st] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			];
			this.t = n+st;
		},
		props:['total','remain','last_month','current_month']
	}
</script>

<style lang="scss" scoped>
	.cts-income{
		width: $cts-screen-full;
		height: 641rpx;
		position: relative;
		&-empty{
			width: $cts-screen-full;
		}
		&-data{
			position: absolute;
			left: 0;
			bottom: 0;
			width: $cts-screen-full;
		}
		&-data-box{
			width: 670rpx;
		}
		&-data-box-border{
			position: absolute;
			width: 1px;
			height: 50rpx;
			background-color: $cts-light-grey;
			opacity: 0.3;
			top: 59rpx;
			right:0 ;
		}
		&-data-item{
			width: 335rpx;
			height: 150rpx;
			position: relative;
		}
		&-data-item-num{
			font-size: $cts-ext-font;
			color: $cts-all-white;
			margin-bottom: $cts-middle-padding;
		}
		&-data-item-title{
			font-size: $cts-basic-font;
			color: $cts-narrow-grey;
		}
		&-data-bottom{
			position: relative;
			width: 670rpx;
			height: 60rpx;
		}
		&-data-bottom-border-left{
			opacity: 0.3;
			position: absolute;
			top:0;
			width:335rpx;
			height:1px;
			left: 0;
			background-image: linear-gradient(to left,$cts-narrow-grey,$cts-gradient-light-red);
		}
		&-data-bottom-border-right{
			opacity: 0.3;
			position: absolute;
			top:0;
			width:335rpx;
			height:1px;
			right: 0;
			background-image: linear-gradient(to right,$cts-narrow-grey,$cts-gradient-light-red);
		}
		&-data-bottom-txt{
			margin-left: 60rpx;
			color: $cts-all-white;
			font-size: $cts-min-font;
		}
		&-bg{
			position: absolute;
			left: 0;
			top: 0;
			width: $cts-screen-full;
			height: 641rpx;
		}
		&-header{
			width: $cts-screen-full;
			height: 200rpx;
		}
		&-header-title{
			font-size: $cts-middle-font;
			color: $cts-narrow-grey;
		}
		&-header-total{
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
			font-size: $cts-mega-font;
			color: $cts-all-white;
		}
		&-header-remain{
			font-size: $cts-basic-font;
			color: $cts-light-grey;
		}
	}
</style>
