<template>
	<view>
		<text class="cts-pop-title">请填写上级邀请码</text>
		<view class="cts-pop cts-flex-ac cts-flex-jc cts-basic-full-padding">
			<input class="cts-pop-input" type="text" placeholder="邀请码/手机号" @input="typing"/>
		</view>
		<text class="cts-pop-extra">*可在我的资料中填写邀请</text>
	</view>
</template>

<script>
	export default {
		methods:{
			typing(e){
				this.$emit('returnInput',e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-pop{
		width: 520rpx;
		height: 80rpx;
		background-color: $cts-light-grey;
		border-radius: 50%;
		&-title{
			font-size: $cts-big-font;
			color: $cts-deep-dark;
			font-weight: 700;
			margin-bottom: $cts-basic-padding;
		}
		&-input{
			font-size: $cts-basic-font;
			color:$cts-deep-dark;
			width: 480rpx;
			height: 60rpx;
		}
		&-extra{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			margin-top: $cts-middle-padding;
		}
	}
</style>
