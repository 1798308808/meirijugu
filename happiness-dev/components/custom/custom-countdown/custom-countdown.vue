<template>
	<view class=" cts-flex-ac cts-flex-jc cts-flex-dir" :class="[`cts-countdown-${size}`]">
		<text v-if="!!countDown.day" :class="[`cts-countdown-${size}-item`]" :style="{color:!!txt_color?txt_color:'#fff'}">{{countDown.day | doubleZero}}</text>
		<text :class="[`cts-countdown-${size}-dots`]" v-if="!!countDown.day" :style="{color:!!point_color?point_color:'#333'}">:</text>
		<text :class="[`cts-countdown-${size}-item`]" :style="{color:!!txt_color?txt_color:'#fff'}">{{countDown.hours | doubleZero}}</text>
		<text :class="[`cts-countdown-${size}-dots`]" :style="{color:!!point_color?point_color:'#333'}">:</text>
		<text :class="[`cts-countdown-${size}-item`]" :style="{color:!!txt_color?txt_color:'#fff'}">{{countDown.minus | doubleZero}}</text>
		<text :class="[`cts-countdown-${size}-dots`]" :style="{color:!!point_color?point_color:'#333'}">:</text>
		<text :class="[`cts-countdown-${size}-item`]" :style="{color:!!txt_color?txt_color:'#fff'}">{{countDown.seconds | doubleZero}}</text>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	
	export default {
		data() {
			return {
				countDown:{
					day:null,
					hours:null,
					minus:null,
					seconds:null
				},
				over:false,
				timer:null,
				size:''
			};
		},
		filters:{
			doubleZero:function(val){
				if(val!=null){
					return val.toString().padStart(2,'0')
				}
			}
		},
		mounted() {
			this.init(this.time_f)
			setTimeout(()=>{
				com.updateComponentData(this,'size',this.size_f)
				com.updateComponentData(this,'time',this.time_f)
				
			},50)
		},
		watch:{
			size_f:function(val){
				com.updateComponentData(this,'size',val)
			},
			time_f:function(val){
				com.updateComponentData(this,'time',val)
				this.init(val)
			}
		},
		methods:{
			init(time){
				if(!!this.timer)clearInterval(this.timer)
				
				this.countDown={
					day:0,
					hours:0,
					minus:0,
					seconds:0
				}
				
				this.createCountDownTime(time)
				if(this.over){
					this.countDown={
						day:0,
						hours:0,
						minus:0,
						seconds:0
					}
				}
				else{
					this.startCountDown()
				}
			},
			// 创建秒杀倒计时
			createCountDownTime(end){
				let now = new Date()
				now = now.getTime()
				now = parseInt(com.accDiv(now,1000))
				// console.log('当前时间',now)
				// 处理天数
				let interval = end-now;
				let day = parseInt(com.accDiv(interval,86400));
				// console.log('天数',day)
				
				// 处理小时
				interval = interval-com.accMul(day,86400);
				let hours = parseInt(com.accDiv(interval,3600));
				// console.log('小时',hours)
				
				// 处理分钟
				interval = interval-com.accMul(hours,3600);
				let minus = parseInt(com.accDiv(interval,60));
				// console.log('分钟',minus)
				
				// 处理秒数
				let seconds = interval-com.accMul(minus,60);
				// console.log('秒数',seconds)
				
				this.countDown ={
					day,
					hours,
					minus,
					seconds
				}
				
				let arr = Object.values(this.countDown)
				let over =arr.some(item=>item<0);
				this.over =over;
			},
			// 倒计时开始
			startCountDown(){
				clearInterval(this.timer);
				this.timer = setInterval(()=>{
					this.countDown.seconds--;
					if(this.countDown.seconds<0){
						this.countDown.seconds = 59;
						this.countDown.minus--;
						if(this.countDown.minus<0){
							this.countDown.minus =59;
							this.countDown.hours --;
							if(this.countDown.hours<0){
								this.countDown.hours = 23;
								this.countDown.day--;
								if(this.countDown.day<0){
									this.countDown ={
										day:0,
										hours:0,
										minus:0,
										seconds:0
									}
									clearInterval(this.timer);
									console.log('倒计时结束')
									uni.$emit('countdownOver')
									return;
								}
							}
						}
					}
					
				},1000)
			},
		},
		props:['size_f','time_f','txt_color','point_color']
	}
</script>

<style lang="scss" scoped>
	$l_time_font:$cts-soso-font;
	$l_dots_font:$cts-basic-font;
	$l_item_height:60rpx;
	$l_item_width:60rpx;
	$l_dots_width:30rpx;
	.cts-countdown-l{
		&-dots{
			font-size: $cts-min-font;
			font-weight: 700;
			width: $l_dots_width;
			text-align: center;
		}
		&-item{
			width: $l_item_width;
			font-size:$l_time_font;
			height: $l_item_height;
			line-height: $l_item_height;
			border-radius: $cts-min-padding;
			background-color: $cts-dark-brown;
			font-weight: 700;
			text-align: center;
		}
	}
	$m_time_font:$cts-basic-font;
	$m_dots_font:$cts-middle-font;
	$m_item_height:50rpx;
	$m_item_width:50rpx;
	$m_dots_width:20rpx;
	
	.cts-countdown-m{
		&-dots{
			font-size: $cts-min-font;
			font-weight: 700;
			width: $m_dots_width;
			text-align: center;
		}
		&-item{
			width: $m_item_width;
			font-size:$m_time_font;
			height: $m_item_height;
			line-height: $m_item_height;
			border-radius: $cts-min-padding;
			background-color: $cts-dark-brown;
			font-weight: 700;
			text-align: center;
		}
	}
	$s_time_font:$cts-middle-font;
	$s_dots_font:$cts-min-font;
	$s_item_height:40rpx;
	$s_item_width:40rpx;
	$s_dots_width:15rpx;
	
	.cts-countdown-s{
		&-dots{
			font-size: $cts-min-font;
			font-weight: 700;
			width: $s_dots_width;
			text-align: center;
		}
		&-item{
			width: $s_item_width;
			font-size:$s_time_font;
			height: $s_item_height;
			line-height: $s_item_height;
			border-radius: $cts-min-padding;
			background-color: $cts-dark-brown;
			font-weight: 700;
			text-align: center;
		}
	}
</style>
