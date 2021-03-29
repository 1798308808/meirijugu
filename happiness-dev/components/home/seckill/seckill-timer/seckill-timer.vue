<template>
	<view class="cts-time cts-flex-dir cts-basic-horizontal-padding cts-flex-ac cts-flex-jfs">
		<image class="cts-time-icon" src="/static/flash.png" mode="aspectFit"></image>
		<text class="cts-time-limit">距离下场开始</text>
		<custom-countdown :time_f="time" :size_f="size"></custom-countdown>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	// import {seckillPublicMixins} from '@/static/mixins/home/seckill/seckill_public.js'
	const dom = weex.requireModule('dom')
	export default {
		data(){
			return{
			time:0,
			size:'s',
			group:[]
			}
		},
		watch:{
			size_f:function(val){
				com.updateComponentData(this,'size',val)
			},
			time_f:function(val){
				com.updateComponentData(this,'time',val)
			}
		},
		props:['time_f','size_f','group_f'],
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'time',this.time_f)
				com.updateComponentData(this,'size',this.size_f)
			},50)
		},
		// mixins:[seckillPublicMixins]
	}
</script>
<style lang="scss" scoped>
	.cts-time{
		width: $cts-screen-full;
		height: 100rpx;
		background-color: $cts-all-white;
		
		&-limit{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
			margin-right: $cts-middle-padding;
		}
		&-icon{
			width: 40rpx;
			height: 40rpx;
			margin-right: $cts-middle-padding;
		}
		
	}
</style>
