<template>
	<view class="cts-vip-rows cts-flex-jsb cts-flex-afs cts-flex-dir">
		<view class="cts-vip-rows-left cts-flex-dir cts-flex-ac cts-flex-jfs">
			<image class="cts-vip-rows-icon" :src="src" mode="aspectFit"></image>
			<view class="cts-vip-rows-detail cts-flex-afs cts-flex-jc">
				<text class="cts-vip-rows-detail-main">{{title}}</text>
				<text class="cts-vip-rows-detail-sub">{{num}}</text>
			</view>
		</view>
		<view class="cts-vip-rows-right cts-flex-afe cts-flex-jc">
			<view class="cts-vip-rows-btn-mute" v-if="mute">
				<text class="cts-vip-rows-btn-txt-mute">{{btn}}</text>
			</view>
			<view class="cts-vip-rows-btn" v-else @tap="tapped">
				<text class="cts-vip-rows-btn-txt">{{btn}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['src','title','num','btn','mute','id'],
		methods:{
			tapped(){
				this.$emit('returnRowItemTapped',{val:!!this.id?this.id:this.title})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-vip-rows{
		width: 650rpx;
		height: 90rpx;
		margin-bottom: $cts-middle-padding;
		margin-top: $cts-middle-padding;
		&-left{
			width: 500rpx;
			height: 90rpx;

		}
		&-right{
			width: 150rpx;
			height: 90rpx;
		}
		&-icon{
			width: 50rpx;
			height: 50rpx;
			margin-right: $cts-basic-padding;
		}
		&-detail{
		}
		&-detail-main{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			margin-bottom: $cts-middle-padding;
		}
		&-detail-sub{
			width: 400rpx;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-btn{
			border-radius: $cts-big-padding;
			width: 130rpx;
			height: 60rpx;
			background-image: linear-gradient(to left, $cts-gradient-dark-red, $cts-gradient-light-red);
		}
		&-btn-txt{
			line-height: 60rpx;
			text-align: center;
			color: $cts-all-white;
			font-size: $cts-middle-font;
		}
		&-btn-mute{
			border-radius: $cts-big-padding;
			width: 130rpx;
			height: 60rpx;
			background-color:$cts-soso-grey;
		}
		&-btn-txt-mute{
			line-height: 60rpx;
			text-align: center;
			color: $cts-mute-grey;
			font-size: $cts-middle-font;
		}
	}
</style>
