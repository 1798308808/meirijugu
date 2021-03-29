<template>
	<view class="cts-collect cts-collect-full cts-flex-ac cts-flex-jc">
		<image class="cts-collect-img cts-collect-absolute cts-collect-full cts-transition-m" :style="{transform:active?'scale(0)':'scale(1)'}" src="/static/star_m.png" mode="aspectFit"></image>
		<view class="cts-collect-circle-y cts-collect-absolute cts-collect-full cts-transition-y" :style="{transform:active?'scale(1)':'scale(0)'}"></view>
		<view class="cts-collect-circle-w cts-collect-absolute cts-collect-full cts-transition-w cts-flex-ac cts-flex-jc" :style="{transform:active?'scale(2.5)':'scale(0)'}">
			<view class="cts-collect-bar"></view>
			<view class="cts-collect-bar rotate-1"></view>
			<view class="cts-collect-bar rotate-2"></view>
			<view class="cts-collect-bar rotate-3"></view>
			<view class="cts-collect-cover"></view>
		</view>
		<!-- 垃圾ios兼容 -->
		<image v-if="pl=='ios'" class="cts-collect-img cts-collect-absolute cts-collect-full cts-transition-a" :style="{transform:active?'scale(1)':'scale(0.01)'}" src="/static/star.png" mode="aspectFit"></image>
		<image v-else class="cts-collect-img cts-collect-absolute cts-collect-full cts-transition-a" :style="{transform:active?'scale(1)':'scale(0.)'}" src="/static/star.png" mode="aspectFit"></image>
		<loading-indicator :style="{color:active?'#fff':'#cccccc'}" class="cts-collect-indicator" v-if="loading" :animating="loading"></loading-indicator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pl:''
			};
		},
		created() {
			this.pl =this.$store.state.common.platform
		},
		props:{
			active: {
			  type: Boolean,
			  default: false
			},
			loading: {
			  type: Boolean,
			  default: false
			},
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(m,transform,0.15s,ease-out,null,null)
	@include createTransition(y,transform,0.25s,ease-out,null,null)
	@include createTransition(w,transform,0.7s,$cts-normal-time-function,0.25s,null)
	@include createTransition(a,transform,0.25s,cubic-bezier(0.47, 1.18, 0.7, 1.3),0.25s,null)
	.rotate{
		&-1{
			transform: rotate(45deg);
		}
		&-2{
			transform: rotate(-45deg);
		}
		&-3{
			transform: rotate(90deg);
		}
	}
	.cts-collect{
		position: relative;
		&-indicator{
			width: 20rpx;
			height: 20rpx;
		}
		&-cover{
			width: 26rpx;
			height: 26rpx;
			background-color:  #fff;
			border-radius:50%;
		}
		&-bar{
			border-radius: 50%;
			position: absolute;
			left: 0;
			top: 18rpx;
			width: 40rpx;
			height: 4rpx;
			background-color: #f8d44e;
		}
		&-full{
			width: 40rpx;
			height: 40rpx;
			overflow: hidden;
		}
		&-absolute{
			position: absolute;
			left: 0;
			top: 0;
		}
		&-img{
			
		}
		&-circle{
			&-y{
				background-color: #f8d44e;
				border-radius:50%;
			}
			&-w{
				background-color: #fff;
				border-radius:50%;
			}
		}
	}
</style>
