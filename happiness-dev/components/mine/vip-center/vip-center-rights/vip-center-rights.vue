<template>
	<view class="cts-basic-container cts-flex-jfs cts-flex-ac">
		<text class="cts-basic-title">{{title}}</text>
		<view class="cts-basic-box cts-basic-vertical-padding cts-flex-dir cts-flex-ac cts-flex-wrap" :class="[between?'cts-flex-jsb':'cts-flex-jc']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','between']
	}
</script>

<style lang="scss" scoped>
	.cts-basic{
		&-title{
			width: 710rpx;
			text-align: left;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
			margin-top: $cts-basic-padding;
			margin-bottom: $cts-big-padding;
		}
		&-container{
			width: $cts-screen-full;
		}
		&-box{
			width: 710rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
		}
	}
</style>
