<template>
	<view class="cts-income-options cts-basic-full-padding">
		<view class="cts-income-box cts-basic-full-padding">
			<view class="cts-income-item cts-flex-dir cts-flex-jfs cts-flex-ac" v-for="(item,index) in group" :key="index+'in'" @tap="selectThis(index)">
				<image class="cts-income-icon" :src="item.icon" mode="aspectFit"></image>
				<text class="cts-income-txt">{{item.title}}</text>
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
		methods:{
			selectThis(index){
				this.$emit('returnOptions',index)
			}
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	.cts-income{
		&-options{
			width: $cts-screen-full;
		}
		&-box{
			width: 710rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		&-item{
			width: 670rpx;
			height: 100rpx;
		}
		&-icon{
			width: 50rpx;
			height: 50rpx;
			margin-right: $cts-basic-padding;
		}
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
	}
</style>
