<template>
	<view class="cts-rank-item cts-flex-dir cts-flex-ac cts-flex-jfs" :class="[rank<=3?'cts-rank-item-top':'']">
		<view class="cts-rank-item-rank cts-flex-ac cts-flex-jc">
			<image v-if="rank==1" class="cts-rank-item-rank-img" src="/static/commision_1st.png" mode="widthFix"></image>
			<image v-else-if="rank==2" class="cts-rank-item-rank-img" src="/static/commision_2nd.png" mode="widthFix"></image>
			<image v-else-if="rank==3" class="cts-rank-item-rank-img" src="/static/commision_3rd.png" mode="widthFix"></image>
			<text v-else class="cts-rank-item-rank-txt">{{rank}}</text>
		</view>
		<view class="cts-rank-item-avatar cts-flex-ac cts-flex-jc">
			<image v-if="rank==1" class="cts-rank-item-avatar-img cts-border-circle_g" :src="avatar" mode="aspectFit"></image>
			<image v-else-if="rank==2" class="cts-rank-item-avatar-img cts-border-circle_s" :src="avatar" mode="aspectFit"></image>
			<image v-else-if="rank==3" class="cts-rank-item-avatar-img cts-border-circle_b" :src="avatar" mode="aspectFit"></image>
			<image v-else class="cts-rank-item-avatar-img" :src="avatar" mode="aspectFit"></image>
		</view>
		<view class="cts-rank-item-name">
			<text class="cts-rank-item-name-txt">{{name}}</text>
		</view>
		<view class="cts-rank-item-money">
			<text class="cts-rank-item-money-txt">￥{{money}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['rank','avatar','name','money']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder('circle_g',solid,#FFE571,4px)
	@include createFullBorder('circle_s',solid,#CAE6EF,4px)
	@include createFullBorder('circle_b',solid,#EEBCB3,4px)
	.cts-rank-item{
		width: 670rpx;
		height: 150rpx;
		&-rank{
			width: 80rpx;
		}
		&-top{
			background-color: #FFFAF7;
		}
		&-rank-txt{
			font-size: $cts-big-font;
			color: $cts-gradient-dark-red;
			font-weight: 500;
		}
		&-rank-img{
			width: 80rpx;
		}
		&-avatar{
			width: 120rpx;
		}
		&-avatar-img{
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
		}
		&-name{
			width: 250rpx;
		}
		&-name-txt{
			lines:1;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-money{
			width: 200rpx;
		}
		&-money-txt{
			text-align: right;
			font-size: $cts-basic-font;
			color: $cts-main-brown;
		}
	}
</style>
