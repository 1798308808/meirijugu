<template>
	<view>
		<scroll-view class="cts-scroller-bar" scroll-x="true" scroll-y="false"  v-if="platform=='ios'" scroll-with-animation="true" 
		@scroll="scrolling" :scroll-left="x" show-scrollbar="false" :style="{width:!!width_f?width_f+'rpx':'750rpx',height:!!height_f?height_f+'rpx':'400rpx'}"> 
		<!-- 当最外层的高度和宽度不一样或小于scroller宽度时，不能横向滚动 -->
			<view class="cts-scroller-bar-item-ios" :style="{width:`${!!count_f?count_f*750:screen_width}rpx`,height:`${!!count_f?count_f*750:screen_width}rpx`}">
				<view class="cts-scroller-bar-item-ios-item">
					<slot></slot>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="cts-scroller-bar" scroll-x="true" v-else scroll-with-animation="true"
		@scroll="scrolling" :scroll-left="x" show-scrollbar="false" :style="{width:!!width_f?width_f+'rpx':'750rpx',height:!!height_f?height_f+'rpx':'400rpx'}"> 
			<slot></slot>
		</scroll-view>
		<view class="cts-scroller-bar-container cts-flex-ac cts-flex-jc " v-if="indicator_width!=0">
			<view class="cts-scroller-bar-box">
				<view class="cts-scroller-bar-indicator" 
				:style="{width:`${indicator_width}px`,transform:`translateX(${indicator_x}px)`,backgroundColor:!!color?color:'#f0cb8d'}"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	
	export default {
		data() {
			return {
				x:0,
				indicator_width:0,
				screen_width:0,
				content_width:0,
				indicator_x:0,
				platform:null,
				timer1:null,
				timer2:null
			};
		},
		props:['count_f','height_f','width_f','retry','color'],
		created() {
			let [pl,w] =
			[
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.screen_width = w;
			this.platform = pl
		},
		mounted() {
			if(this.width_f)this.screen_width = uni.upx2px(this.width_f)
			setTimeout(()=>{
				this.x = 5
			},100)
			setTimeout(()=>{
				this.x = 0;
				this.maybeNeedRetry()
			},200)
		},
		methods:{
			maybeNeedRetry(){
				if(this.indicator_width==0||this.content_width==0){
					clearTimeout(this.timer1)
					clearTimeout(this.timer2)
					
					this.timer1 = setTimeout(()=>{
						this.x = 5
					},500)
					this.timer2 = setTimeout(()=>{
						this.x = 0;
					},700)
				}
			},
			scrolling(e){
				if(this.indicator_width==0){
					let width = com.accDiv(com.accMul(uni.upx2px(150),this.screen_width),e.detail.scrollWidth)
					this.indicator_width = width>uni.upx2px(150)?uni.upx2px(150):width;
					this.content_width = e.detail.scrollWidth
				}
				else{
					this.indicator_x = com.accDiv(com.accMul(uni.upx2px(150),e.detail.scrollLeft),this.content_width) ;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-scroller-bar{
		&-item-ios-item{
			position: absolute;
			left: 0;
			top: 0;
		}
		&-item-ios{
			position: relative;
		}
		&-container{
			width: $cts-screen-full;
			height: 80rpx;
		}
		&-box{
			border-radius: $cts-middle-padding;
			width: 150rpx;
			height: $cts-middle-padding;
			background-color: $cts-all-white;
			overflow: hidden;
		}
		&-indicator{
			border-radius: $cts-middle-padding;
			transform-origin: right;
			height: $cts-middle-padding;
		}
	}
</style>
