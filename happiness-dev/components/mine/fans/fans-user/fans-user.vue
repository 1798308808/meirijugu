<template>
	<view class="cts-fans-user cts-basic-full-padding">
		<view class="cts-fans-user-box cts-flex-ac cts-flex-jfs cts-flex-dir cts-basic-full-padding">
			<image class="cts-fans-user-avatar" :src="avatar" mode="aspectFit"></image>
			<view class="cts-fans-user-detail cts-flex-jc cts-flex-afs">
				<view class="cts-fans-user-detail-top cts-flex-dir cts-flex-jsb cts-flex-ac">
					<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
						<text class="cts-fans-user-name">{{name}}</text>
						<image v-if="vip==1" class="cts-fans-user-vip" src="/static/vip_golden.png" mode="heightFix"></image>
						<image v-else-if="vip==2" class="cts-fans-user-vip" src="/static/vip_silvery.png" mode="heightFix"></image>
						<image v-else-if="vip==3" class="cts-fans-user-vip" src="/static/vip_diamond.png" mode="heightFix"></image>
						<image v-else class="cts-fans-user-vip" src="/static/vip_master.png" mode="heightFix"></image>
					</view>
					<text class="cts-fans-user-recommand">推荐人数:{{recommand}}</text>
				</view>
				<view class="cts-fans-user-detail-bottom cts-flex-dir cts-flex-jsb cts-flex-ac">
					<text class="cts-fans-user-code">{{code}}</text>
					<text class="cts-fans-user-order">订单数:{{total_order}}</text>
				</view>
			</view>
		</view>
		<view class="cts-fans-user-money cts-border-bottom-solid-btm cts-flex-dir cts-flex-jc cts-flex-ac">
			<view class="cts-fans-user-money-item cts-basic-horizontal-padding cts-flex-jc cts-flex-ac">
				<text class="cts-fans-user-money-title">上月计算</text>
				<text class="cts-fans-user-money-money">￥{{last_month}}</text>
				<view class="cts-fans-user-money-border"></view>
			</view>
			<view class="cts-fans-user-money-item cts-basic-horizontal-padding cts-flex-jc cts-flex-ac">
				<text class="cts-fans-user-money-title">本月预估</text>
				<text class="cts-fans-user-money-money">￥{{this_month}}</text>
				<view class="cts-fans-user-money-border"></view>
			</view>
			<view class="cts-fans-user-money-item cts-basic-horizontal-padding cts-flex-jc cts-flex-ac">
				<text class="cts-fans-user-money-title">今日预估</text>
				<text class="cts-fans-user-money-money">￥{{today_prediction}}</text>
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
		props:['avatar','name','recommand','total_order','code','last_month','this_month','today_prediction','vip']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(btm,bottom,$cts-light-grey,solid,1px)
	.cts-fans-user{
		width: $cts-screen-full;
		&-money{
			width: 710rpx;
			background-color: $cts-all-white;
		}
		&-money-item{
			flex: 1;
			height: 160rpx;
			position: relative;
		}
		&-money-border{
			position: absolute;
			right: 0;
			top: 60rpx;
			width: 1px;
			height: 40rpx;
			background-color: $cts-soso-grey;
		}
		&-money-title{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			margin-bottom: $cts-middle-padding;
		}
		&-money-money{
			font-size: $cts-basic-font;
			color: $cts-darken-golden;
		}
		&-box{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-middle-padding;
		}
		&-avatar{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
			margin-right: $cts-basic-padding;
		}
		&-detail{
			width: 530rpx;
		}
		&-detail-top{
			width: 530rpx;
		}
		&-detail-bottom{
			width: 530rpx;
		}
		&-recommand{
			font-size: $cts-middle-font;
			color: $cts-middle-grey;
		}
		&-name{
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-vip{
			height: 40rpx;
			margin-left: $cts-middle-padding;
		}
		&-order{
			font-size: $cts-middle-font;
			color: $cts-middle-grey;
		}
		&-code{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
