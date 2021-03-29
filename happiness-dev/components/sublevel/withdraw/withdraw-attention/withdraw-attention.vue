<template>
	<view class="cts-withdraw-attention cts-basic-full-padding">
		<view class="cts-withdraw-attention-title cts-flex-dir cts-flex-jfs cts-flex-ac">
			<text class="cts-withdraw-attention-icon cts-border-icon">!</text>
			<text class="cts-withdraw-attention-txt">{{title}}</text>
		</view>
		<text class="cts-withdraw-attention-desc" v-for="(item,index) in list" :key="index+'att'">*{{item}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','list']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(icon,solid,$cts-light-dark,1px)
	.cts-withdraw-attention{
		width: $cts-screen-full;
		&-title{
			height: 80rpx;
		}
		&-icon{
			text-align: center;
			line-height: 35rpx;
			width: 35rpx;
			height: 35rpx;
			border-radius: 50%;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-txt{
			margin-left: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}
		&-desc{
			line-height: 50rpx;
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
