<template>
	<view class="cts-detail cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac" @tap="select">
		<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
			<text class="cts-detail-spec-title">规格</text>
			<view class="cts-empty-row"></view>
			<text class="cts-detail-spec">请选择规格</text>
		</view>
		<image class="cts-detail-arrow" src="/static/back.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			select(){
				this.$emit('returnSelect',{msg:'ok'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-detail{
		width: $cts-screen-full;
		height: 120rpx;
		background-color: $cts-all-white;
		margin-bottom: $cts-basic-padding;
		&-spec-title{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-spec{
			font-size: $cts-basic-font;
			color:$cts-light-dark;
		}
		&-arrow{
			width: 30rpx;
			height: 30rpx;
			transform: rotate(180deg);
		}
	}
</style>
