<template>
	<view class="cts-record cts-basic-full-padding">
		<view class="cts-record-container">
			<view class="cts-record-empty"></view>
			<text class="cts-record-title cts-padding-title">{{time}}</text>
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
		props:['time']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(title,$cts-ext-padding,$cts-ext-padding,$cts-middle-padding,$cts-middle-padding)
	.cts-record{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-container{
			width: 710rpx;	
		}
		&-title{
			align-self: flex-start;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			background-color: $cts-soso-grey;
			border-radius: $cts-ext-font;
		}
		&-empty{
			height: $cts-basic-padding*2;
		}
	}
</style>
