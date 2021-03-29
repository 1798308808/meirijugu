<template>
	<view>
		<view class="cts-wd-footer">
			<image class="cts-wd-footer-img" src="/static/99.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(box,$cts-ext-padding,$cts-ext-padding,0,0);
	.cts-wd{
		&-footer{
			height: 200rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
			margin-top:$cts-big-padding;
		},
		&-marginTop{
			margin-top: $cts-ext-padding;
		},
		&-footer-img{
			width: 710rpx;
			height: 200rpx;
		}
	}
</style>
