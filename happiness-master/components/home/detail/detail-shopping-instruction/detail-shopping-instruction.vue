<template>
	<view class="cts-detail-ins cts-basic-full-padding">
		<view class="cts-detail-box cts-basic-full-padding">
			<view class="cts-detail-title cts-flex-dir cts-flex-jfs cts-flex-ac">
				<view class="cts-detail-ins-bar"></view>
				<text class="cts-detail-ins-title">{{title}}</text>
			</view>
			<view class="cts-detail-box cts-basic-horizontal-padding">
				<text :class="item.type==1?'cts-detail-ins-box-title':'cts-detail-ins-box-inner'" v-for="(item,index) in group" :key="index+'ins'">{{item.content}}</text>
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
		props:['group','title']
	}
</script>

<style lang="scss" scoped>
	.cts-detail{
		&-title{
			margin-bottom: $cts-basic-padding*2;
		}
		&-box{
			width: 710rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-all-white;
		}
		&-ins{
			width: $cts-screen-full;
			&-bar{
				height: 30rpx;
				width: 8rpx;
				background-color: $cts-dark-brown;
				border-radius: $cts-middle-padding;
				margin-right: $cts-middle-padding;
			}
			&-title{
				font-size: $cts-basic-font;
				color: $cts-light-dark;
			}
			&-box-title{
				font-size: $cts-middle-font;
				color: $cts-dark-brown;
				margin-bottom: $cts-middle-padding;
			}
			&-box-inner{
				font-size: $cts-middle-font;
				color: $cts-light-dark;
				margin-bottom: $cts-basic-padding;
			}
		}
		
	}
</style>
