<template>
	<view class="cts-board cts-flex-ac cts-flex-jc">
		<view class="cts-board-box cts-flex-ac cts-flex-jc">
			<image class="cts-board-bg "  src="/static/success.png" mode="aspectFit"></image>
			<image class="cts-board-finish cts-transition-jj" :style="{transform:jump?'scale(1)':'scale(0.1)'}" :src="icon" mode="aspectFit"></image>
			<text class="cts-board-main">{{main}}</text>
			<text class="cts-board-sub">{{sub}}</text>
		</view>
		<view class="cts-board-bottom cts-flex-dir cts-flex-jc cts-flex-ac">
			<custom-button @tap="shit" :type="1" :colorType="1" :text="'返回首页'"></custom-button>
			<view class="cts-empty-row"></view>
			<custom-button :type="2" :colorType="1" :text="'查看订单'"></custom-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jump:false
			};
		},
		props:['icon','main','sub'],
		mounted() {
			setTimeout(()=>{
				this.jump=true
			},300)
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(jj,transform,0.25s,$cts-alternate-time-function,null,null)
	.cts-board{
		margin-top: $cts-basic-padding*2;
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
			height: 473rpx;
			position: relative;
		}
		&-bg{
			width: 710rpx;
			height: 473rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-finish{
			width: 120rpx;
			height: 120rpx;
		}
		&-main{
			margin-top: $cts-basic-padding;
			font-size: $cts-big-font;
			color: $cts-dark-brown;
		}
		&-sub{
			margin-top: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-bottom{
			height: 200rpx;
			width: $cts-screen-full;
		}
	}
</style>
