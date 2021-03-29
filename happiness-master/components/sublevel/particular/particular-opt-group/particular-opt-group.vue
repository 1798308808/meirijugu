<template>
	<view class="cts-opt cts-basic-horizontal-padding">
		<text class="cts-opt-title">{{title}}</text>
		<view class="cts-opt-box cts-flex-jfs cts-flex-afs cts-flex-dir cts-flex-wrap">
			<text class="cts-basic-full-padding" :class="[item.active?'cts-border-active':'',item.active?'cts-opt-item-active':'cts-opt-item']" v-for="(item,index) in options" :key="item.val">{{item.val}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','options']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(active,solid,$cts-gradient-dark-red,1px)
	.cts-opt{
		width: 710rpx;
		margin-bottom: $cts-basic-padding;
		&-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			font-weight: 700;
			margin-bottom: $cts-middle-padding;
		}
		&-box{
			width: 670rpx;
		}
		&-item{
			margin-bottom: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			background-color: $cts-light-grey;
			border-radius: $cts-min-padding;
			margin-right: $cts-basic-padding;
		}
		&-item-active{
			margin-bottom: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-gradient-dark-red;
			background-color: $cts-gradient-barely-red;
			border-radius: $cts-min-padding;
			margin-right: $cts-basic-padding;
		}
	}
</style>
