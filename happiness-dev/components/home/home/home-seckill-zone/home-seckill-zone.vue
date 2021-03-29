<template>
	<view class="cts-seckill cts-flex-dir cts-flex-jfs cts-flex-ac cts-padding-gp">
		<view class="cts-seckill-box cts-flex-jc cts-flex-ac">
			<image class="cts-seckill-img" src="/static/seckill_bg.png" mode="aspectFit"></image>
			<view class="cts-seckill-time cts-flex-dir cts-flex-ac cts-flex-jc">
				<text class="cts-seckill-time-desc">距下场</text>
				<custom-countdown :time_f="time" :size_f="size"></custom-countdown>
			</view>
		</view>
		<scroller show-scrollbar="false" scroll-direction="horizontal"  class="cts-seckill-detail cts-flex-dir cts-flex-ac">
			<view class="cts-seckill-detail-item cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="item.title" @tap="change(index)" :ref="`item${index}`">
				<text class="cts-seckill-detail-time cts-transition-time2" :class="[item.active?'cts-seckill-time-active':'cts-seckill-time-mute']">{{item.title}}</text>
				<text class="cts-seckill-detail-status cts-padding-si cts-transition-time" :class="[item.active?'cts-seckill-status-active':'cts-seckill-status-mute']"  v-if="item.status==-1">已结束</text>
				<text class="cts-seckill-detail-status cts-padding-si cts-transition-time" :class="[item.active?'cts-seckill-status-active':'cts-seckill-status-mute']"  v-else-if="item.status==0">进行中</text>
				<text class="cts-seckill-detail-status cts-padding-si cts-transition-time" :class="[item.active?'cts-seckill-status-active':'cts-seckill-status-mute']"  v-else>即将开始</text>
			</view>
		</scroller>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	
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
		mixins:[homePublicMixins],
		methods:{
			change(index,dont){
				if(!dont)this.$emit('returnGames',index)
				dom.scrollToElement(this.$refs[`item${index}`][0])
				for(let i=0;i<this.group.length;i++){
					if(i==index){
						this.group[i].active=true;
					}
					else{
						this.group[i].active=false;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(gp,$cts-basic-padding,$cts-basic-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(si,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	
	$height:160rpx;
	.cts-seckill{
		width: $cts-screen-full;
		height: 200rpx;
		background-color: $cts-all-white;
		&-box{
			width: 300rpx;
			height: $height;
		}
		&-img{
			width: 200rpx;
			height: 60rpx;
		}
		&-time{
			width: 300rpx;
			height: 60rpx;
		}
		&-time-desc{
			font-size: $cts-middle-font;
			color: $cts-deep-dark;
			margin-right: $cts-min-padding;
		}
		&-count-down{
			margin-left: $cts-middle-padding;
			width: 150rpx;
			height: 50rpx;
			background-color: black;
		}
		&-detail{
			width: 410rpx;
			height: $height;
		}
		&-detail-item{
			width: 130rpx;
			height: 140rpx;
		}
		&-detail-time{
			font-size: $cts-soso-font;
			color: $cts-middle-grey;
		}
		&-detail-status{
			margin-top: $cts-middle-padding;
			
			border-radius: 30rpx;
			font-size: $cts-middle-font;
		}
		&-time-active{
			transform: scale(1.2);
			color: $cts-deep-dark;
		}
		&-time-mute{
			transform: scale(1);
			color: $cts-light-dark;
		}
		&-status-active{
			color: $cts-all-white;
			background-color: $cts-alert-red;
		}
		&-status-mute{
			color: $cts-light-dark;
			background-color: $cts-all-white;
		}
	}
</style>
