<template>
	<view class="cts-teacher cts-basic-full-padding">
		<view class="cts-teacher-container cts-basic-full-padding">
			<text class="cts-teacher-title">我的导师</text>
			<view class="cts-teacher-box cts-flex-ac cts-flex-jfs cts-flex-dir cts-basic-vertical-padding">
				<image class="cts-teacher-avatar" :src="avatar" mode="aspectFit"></image>
				<view class="cts-teacher-detail cts-flex-jc cts-flex-afs">
					<text class="cts-teacher-name">{{name}}</text>
					<text class="cts-teacher-code">{{code}}</text>
				</view>
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
		props:['avatar','name','code']
	}
</script>

<style lang="scss" scoped>
	.cts-teacher{
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		&-container{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-middle-padding;
		}
		&-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-box{
			width: 670rpx;
		}
		&-avatar{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
			margin-right: $cts-basic-padding;
		}
		&-detail{
			height: 80rpx;
		}
		&-name{
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
			margin-bottom: $cts-middle-padding;
		}
		&-code{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
