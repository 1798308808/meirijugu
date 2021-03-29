<template>
	<view class="cts-detail cts-flex-jfs cts-flex-ac">
		<view class="cts-detail-first cts-basic-horizontal-padding cts-flex-ac cts-flex-jc" @tap="boardTapped">
			<view class="cts-detail-first-top cts-flex-ac cts-flex-jsa cts-flex-dir cts-border-bottom-solid-fb">
				<view class="cts-detail-first-item cts-basic-horizontal-padding cts-flex-afs cts-flex-jc">
					<text class="cts-detail-first-item-price">￥{{p1 | money}}</text>
					<text class="cts-detail-first-item-title">返利余额</text>
					<!-- <view class="cts-detail-first-item-border"></view> -->
				</view>
				<view class="cts-detail-first-item cts-basic-horizontal-padding cts-flex-ac cts-flex-jc">
					<text class="cts-detail-first-item-price">￥{{p2 | money}}</text>
					<text class="cts-detail-first-item-title">待入账</text>
					<!-- <view class="cts-detail-first-item-border"></view> -->
				</view>
				<!-- <view class="cts-detail-first-item cts-basic-horizontal-padding cts-flex-ac cts-flex-jc">
					<text class="cts-detail-first-item-price">￥{{p3 | money}}</text>
					<text class="cts-detail-first-item-title">上月预估</text>
					<view class="cts-detail-first-item-border"></view>
				</view> -->
				<!-- <view class="cts-detail-first-item cts-basic-horizontal-padding cts-flex-ac cts-flex-jc">
					<text class="cts-detail-first-item-price">{{p4}}</text>
					<text class="cts-detail-first-item-title">积分剩余</text>
				</view> -->
			</view>
			<view class="cts-detail-first-bottom cts-flex-jc cts-flex-afs cts-basic-horizontal-padding">
				<text class="cts-detail-first-bottom-txt">每月20号结算上个工作日已结算的订单佣金</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			boardTapped(){
				this.$emit('returnBoardTapped')
			}
		},
		props:['p1','p2','p3','p4'],
		filters:{
			money:function(val){
				if(!val)return val;
				let str = val.toString().split('');
				switch(true){
					case str.length>=12:return `${str[0]}.${str[1]}亿`
					case str.length>=11:return `${str[0]}千万`
					case str.length>=10:return `${str[0]}百万`
					case str.length>=9:return `${str[0]}十万`
					case str.length>=8:return `${str[0]}.${str[1]}万`
					case str.length>=7:return `${str[0]}.${str[1]}千`
					case str.length>=6:return `${str[0]}.${str[1]}百`
					default:return val;
				}
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	@include createBorder(fb,bottom,$cts-narrow-grey,solid,1px)
	
	$width:710rpx;
	.cts-detail{
		width: $cts-screen-full;
		background-color: $cts-narrow-grey;
		
		&-first{
			width: $width;
			height: 200rpx;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
			border-bottom-left-radius: $cts-basic-padding;
			border-bottom-right-radius: $cts-basic-padding;
		}
		&-first-top{
			width: 670rpx;
			height: 150rpx;
		}
		&-first-item{
			position: relative;
			width: 167.5rpx;
			height: 150rpx;
		}
		&-first-item-border{
			position: absolute;
			width: 1px;
			height: 60rpx;
			background-color: $cts-narrow-grey;
			right: 0;
			top: 60rpx;
		}
		&-first-item-title{
			margin-top: $cts-basic-padding;
			font-size: $cts-basic-font;
			color:$cts-light-dark;
		}
		&-first-item-price{
			lines:1;
			text-overflow: ellipsis;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-first-bottom{
			width: 670rpx;
			height: 50rpx;
		}
		&-first-bottom-txt{
			font-size: $cts-middle-font;
			color:$cts-light-dark;
		}

	}
</style>
