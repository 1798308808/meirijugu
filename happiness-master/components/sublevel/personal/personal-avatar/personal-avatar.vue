<template>
	<view class="cts-personal cts-flex-ac cts-flex-jc" @tap="choose">
		<image class="cts-personal-avatar"  :src="avatar" mode="aspectFit"></image>
		<text class="cts-personal-txt">点击修改头像</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			choose(){
				this.$emit('returnChoose',{mgs:'ok'})
			}
		},
		props:['avatar']
	}
</script>

<style lang="scss" scoped>
	.cts-personal{
		width: $cts-screen-full;
		height: 300rpx;
		&-avatar{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
		}
		&-txt{
			margin-top: $cts-basic-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
	}
</style>
