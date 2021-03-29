<template>
	<view class="cts-menu-swiper-container">
		<swiper class="cts-menu-swiper" :style="{height:!!height?height:'250rpx'}" @transition="moving" 
		@animationfinish="finish" @change="changed" @touchend="throttleFunction" @touchstart="throttleStart" >
			<swiper-item v-for="(item,index) in group" :key="item.id">
				<slot :name="item.id"></slot>
				<!-- <text>{{item.id}}</text> -->
			</swiper-item>
		</swiper>
		<view class="cts-dots ">
			<view class="cts-dots-box cts-flex-dir cts-flex-ac cts-flex-jc">
				<view class="cts-dots-item cts-transition-swiper-indicator"
				:style="{width:`${item.width}px`}" :class="[item.active?'cts-dots-item-active':'cts-dots-item-mute']"
				v-for="(item,index) in group" :key="index"></view>
			</view>
		</view>
		<view class="throttle_cover_box" v-if="throttle" :style="{height:!!height?height:'250rpx'}"></view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				group:[],
				index:0,
				prev_dx:0,
				current:0,
				reverse:false,
				swiper_width:0,
				shit:0,
				throttle:false,
				throttle_timer:null,
				heigth:null,
				// 防止双击误触发
				start_position_x:0,
				start_position_y:0,
				// list滚动swiper不执行animationfinish
				changedOccurs:false,
				changeTimer:null
			};
		},
		watch:{
			group_f:{
				handler:function(val){
					com.updateComponentData(this,'group',val)
				}
			},
			height_f:function(val){
				com.updateComponentData(this,'height',val)
			},
			throttle:function(val){
				clearTimeout(this.throttle_timer)
				if(val){
					this.throttle_timer=setTimeout(()=>{
						this.throttle=false;
					},700)
				}
			},
			changedOccurs:function(val){
				if(val){
					clearTimeout(this.changeTimer)
					this.changeTimer = setTimeout(()=>{
						console.log('执行了')
						this.resetIndicatorPosition();
					},700)
				}
				else{
					clearTimeout(this.changeTimer)
				}
			}
		},
		props:['group_f','height_f'],
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'group',this.group_f)
				com.updateComponentData(this,'height',this.heigth_f)
			},50)
			this.swiper_width = uni.getSystemInfoSync().safeArea.width;
		},
		methods:{
			throttleStart(e){
				this.start_position_x = e.changedTouches[0].screenX;
				this.start_position_y = e.changedTouches[0].screenY;
			},
			// 防止连续触发
			throttleFunction(e){
				let x =e.changedTouches[0].screenX;
				let y =e.changedTouches[0].screenY;
				if(Math.abs(x-this.start_position_x)<2||Math.abs(y-this.start_position_y)<2)return;
				this.throttle=true;
			},
			moving(e){
				// 计算移动比例
				let offset = com.accDiv(
					com.accMul(
					(e.detail.dx - this.prev_dx),15),
					this.swiper_width
				);
				// 总偏移量
				// this.shit = com.accPlus(this.shit,offset);
				
				this.prev_dx = e.detail.dx;
				
				
				// console.log(this.reverse)
				// console.log('差值',offset)
				// console.log(this.group[this.index].width)
				
				if(this.index==this.group.length-1){
					// console.log('最右反向',this.shit)
					this.group[this.index-1].width<5?this.group[this.index-1].width=5:
					this.group[this.index-1].width = this.group[this.index-1].width-offset;
					
					this.group[this.index].width>20?this.group[this.index].width=20:
					this.group[this.index].width=com.accPlus(this.group[this.index].width,offset);
				}	
				else if(this.index==0){
					this.group[this.index].width>20?this.group[this.index].width=20:
					this.group[this.index].width = this.group[this.index].width-offset;
					
					this.group[this.index+1].width<5?this.group[this.index+1].width=5:
					this.group[this.index+1].width=com.accPlus(this.group[this.index+1].width,offset);
				}
				else{
					
					
					
					
					if(this.group[this.index].width>=20&&offset<0){
						this.reverse=true;
					}
					if(this.group[this.index-1].width<=5&&offset>=0){
						this.reverse=false;
					}
					
					// console.log(this.shit)
					
					if(this.reverse){
						this.group[this.index].width = com.accPlus(this.group[this.index].width,offset)
						this.group[this.index-1].width = this.group[this.index-1].width - offset;
						this.group[this.index+1].width=5;
					}
					else{
						this.group[this.index].width =this.group[this.index].width-offset;
						this.group[this.index+1].width=com.accPlus(this.group[this.index+1].width,offset)
						this.group[this.index-1].width = 5;
					}
					
					
				}
			},
			changed(e){
				this.current = e.detail.current;
				this.changedOccurs=true;
			},
			finish(e){
				this.changedOccurs=false;
				this.throttle=false;
				// console.log('最终结果',this.shit)
				// this.shit=0;
				this.resetIndicatorPosition()
			},
			resetIndicatorPosition(){
				for(let i=0;i<this.group.length;i++){
					if(i!=this.current){
						this.group[i].width = 5;
						this.group[i].active=false;
					}
					else{
						this.group[i].width = 20;
						this.group[i].active=true;
					}
				}
				this.index = this.current;
				this.prev_dx=0;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition('swiper-indicator',backgroundColor,.2s,ease-out,null,null)
	@include createTransition('move-indicator',backgroundColor,.2s,ease-out,null,width)
	@include createTransition('mute-indicator',backgroundColor,.2s,ease-out,null,null)
	.throttle_cover_box{
		position: absolute;
		left: 0;
		top: 0;
		width: $cts-screen-full;
	}
	.cts-menu-swiper{
		width: $cts-screen-full;
		&-container{
			position: relative;
		}
	}
	.cts-dots{
		width: $cts-screen-full;
		height: 30rpx;
		position: relative;
		background-color: $cts-all-white;
		&-box{
			width: $cts-screen-full;
			height: 30rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-item{
			transform-origin: right;
			height: 5px;
			border-radius: $cts-basic-padding;
			margin-left: $cts-min-padding;
			margin-right: $cts-min-padding;
		}
		&-item-active{
			background-color: $cts-light-golden;
		}
		&-item-mute{
			background-color: $cts-light-dark;
		}
	}
</style>
