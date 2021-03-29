<template>
	<view class="cts-flex-ac cts-flex-jc">
		<view class="cts-pop cts-padding-pop">
			<slot></slot>
		</view>
		<image @tap="close" class="cts-pop-close" src="/static/close_w.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['id'],
		methods:{
			close(){
				const subNVue = uni.getSubNVueById(this.id)
				subNVue.hide('fade-out', 250);  
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(pop,$cts-basic-padding*2,$cts-basic-padding*2,$cts-basic-padding*5,$cts-basic-padding*5)
	.cts-pop{
		width: 600rpx;
		border-radius: $cts-middle-padding;
		background-color: $cts-all-white;
		&-close{
			margin-top: $cts-ext-padding;
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
