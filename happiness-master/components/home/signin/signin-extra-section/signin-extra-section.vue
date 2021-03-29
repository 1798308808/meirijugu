<template>
	<view class="cts-signin-box cts-basic-full-padding">
		<slot name="head"></slot>
		<view class="cts-signin-container cts-basic-vertical-padding cts-flex-jc cts-flex-ac"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<slot name="body"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['color']
	}
</script>

<style lang="scss" scoped>
	.cts-signin{
		&-box{
			width: $cts-screen-full;
		}
		&-container{
			width: 710rpx;
			border-radius: $cts-basic-padding;
		}
		
	}
</style>
