<template>
	<view class='cts-bubble cts-flex-ac cts-flex-jc' :style="{height:h+'px'}">
		<view class="cts-bubble-img-box cts-flex-ac cts-flex-jfs" :style="{height:ah+'px'}">
			<image class="cts-bubble-img" src="/static/bubble.png" mode="aspectFit" ref="bubble"></image>
			<view class="cts-bubble-title cts-flex-jc cts-flex-ac">
				<text class="cts-bubble-desc">专属客服微信:</text>
				<text v-if="!!code" class="cts-bubble-code">{{code}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	const Binding = uni.requireNativePlugin('bindingx');
	import ctr from '@/static/js/container.js'
	
	export default {
		data() {
			return {
				h:'',
				ah:'',
				code:''
			};
		},
		mounted() {
			this.jump()
		},
		methods:{
			jump(){
				let ele = ctr.getBindingEle(this.$refs.bubble)
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>2000`,
					props: [{
						element: ele,
						property: 'transform.scaleY',
						expression: 'easeOutElastic(t,0.8,0.2,2000)'
					}, ]
				}, function(e) {
				});
			}
		},
		created() {
			this.h = this.$store.state.common.safeAreaHeight*0.75
			this.ah = this.$store.state.common.safeAreaHeight*0.6
		},
		props:['code']
	}
</script>

<style lang="scss" scoped>
	.cts-bubble{
		width: $cts-screen-full;
		&-img{
			width: 500rpx;
			height: 500rpx;
		}
		&-img-box{
			position: relative;
			width: 500rpx;
		}
		&-title{
			width: 500rpx;
			position: absolute;
			left: 0;
			top: 150rpx;
		}
		&-desc{
			font-size: $cts-soso-font;
			font-weight: 700;
			color: $cts-main-brown;
		}
		&-code{
			margin-top: $cts-middle-padding;
			font-size: $cts-big-font;
			font-weight: 700;
			color: $cts-main-brown;
		}
	}
</style>
