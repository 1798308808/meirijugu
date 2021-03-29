<template>
	<view class="cts-signin-box cts-basic-full-padding">
		<slot name="head"></slot>
		<view class="cts-signin-container cts-basic-vertical-padding cts-flex-jc cts-flex-ac">
			<slot name="body"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cts-signin{
		&-box{
			width: $cts-screen-full;
		}
		&-container{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		
	}
</style>
