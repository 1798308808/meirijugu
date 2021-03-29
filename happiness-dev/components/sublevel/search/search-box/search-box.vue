<template>
	<view class="cts-search cts-basic-full-padding">
		<view class="cts-search-box cts-flex-jsb cts-flex-dir cts-flex-ac">
			<view class="cts-flex-jfs cts-flex-dir cts-flex-ac">
				<text class="cts-search-title">{{title}}</text>
				<image v-if="hot" class="cts-search-icon" src="/static/fire.png" mode="aspectFit"></image>
			</view>
			<image v-if="bin" class="cts-search-icon" src="/static/bin.png" mode="aspectFit" @tap="clear"></image>
		</view>
		<view class="cts-search-container cts-flex-dir cts-flex-jfs cts-flex-afs cts-flex-wrap">
			<text v-if="options.length==0" class="cts-search-item cts-padding-item">无</text>
			<text class="cts-search-item cts-padding-item" v-for="(item,index) in options" :key="item+'his'" @tap="itemTapped(item)">{{item}}</text>
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
			itemTapped(item){
				this.$emit('returnKeyword',item)
			},
			clear(){
				this.$emit('returnClearHistory')
			}
		},
		props:['title','hot','bin','options']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(item,$cts-basic-padding,$cts-basic-padding,null,null)
	
	.cts-search{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-title{
			font-size: $cts-soso-font;
			font-weight: 700;
			color: $cts-dark-brown;
			margin-right: $cts-basic-padding;
		}
		&-icon{
			width: 30rpx;
			height: 30rpx;
		}
		&-box{
			width: 710rpx;
			height: 80rpx;
		}
		&-item{
			margin-right: $cts-middle-padding;
			margin-left: $cts-middle-padding;
			margin-bottom: $cts-basic-padding;
			height: 50rpx;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			background-color: $cts-soso-grey;
			border-radius: $cts-ext-padding;
			min-width: 150rpx;
			text-align: center;
			line-height: 50rpx;
		}
	}
</style>
