<template>
	<view class="tabbar-container" :style="{height:`${h}px`}">
		<view class="tabbar-container-main" :style="{paddingBottom:`${t}px`,height:`${b}px`}">
			<view class="tabbar-container-slot cts-flex-dir" 
			:style="{width:`${tabbarPage.length*750}rpx`,transform:`translateX(-${currentPage*750}rpx)`,height:`${b}px`}">
				<view class="tabbar-container-slot-item" :style="{left:`${index*750}rpx`}"  v-for="(item,index) in tabbarPage" :key="item.id">
					<slot v-if="item.render"  :name="item.id"></slot>
				</view>
			</view>
		</view>
		<view class="tabbar-container-tabbar cts-border-top-solid-tb cts-flex-dir cts-flex-ac cts-flex-jc" :style="{bottom:`${h-b}px`}">
			<view class="tabbar-container-item cts-flex-ac cts-flex-jc" v-for="(item,index) in tabbarGroup" :key="item.title"  @tap="switchTabbar(index)" >
				<view class="tabbar-item-icon" :ref="`tb_${index}`">
					<view class="tabbar-item-icon-box cts-transition-updown" :class="[item.active?'tabbar-item-active':'tabbar-item-mute']">
						<image class="tabbar-item-icon-img" :src="item.actived" mode="aspectFit"></image>
						<image class="tabbar-item-icon-img" :src="item.muted" mode="aspectFit"></image>
					</view>
				</view>
				<text class="tabbar-item-text">{{item.title}}</text>
				<text class="tabbar-item-desc cts-padding-desc" v-if="item.desc">{{item.desc | descFilter}}</text>
			</view>
		</view>
		<!-- 当底部没有虚拟按钮不显示 -->
		<view v-if="h-b!=0" class="tabbar-safearea" :style="{height:`${h-b}px`}"></view>
		<view class="tabbar-float-icon cts-flex cts-flex-ac cts-flex-jc cts-transition-updown tabbar-float-icon-active" :style="{bottom:`${h-b}px`}" ref="pop"
		v-if="pop_button&&this.tabbarGroup.length%2!=0" :class="[this.tabbarGroup[pop_index].active?'tabbar-float-icon-active':'tabbar-float-icon-mute']" @tap="popButtonTapped">
			<image class="tabbar-float-icon-img" :src="pop_icon" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	import ctr from '@/static/js/container.js'
	
	const Binding = uni.requireNativePlugin('bindingx');
	export default {
		data() {
			return {
				statusBarBackground:'',
				// 当前显示页面
				currentPage:-1,
				// 页面高度
				h:'',
				// 状态栏高度
				s:'',
				// 安全区域高度（不包含虚拟按钮）
				b:'',
				// tabbar高度
				t:'',
				// 平台
				platform:'',
				// tabbar项
				tabbarGroup:[],
				// tabbar页面
				tabbarPage:[],
				// 突出图标索引
				pop_index:0
			};
		},
		props:['tabbarGroup_f','tabbarPage_f','statusBarColor','currentPage_f','pop_button','pop_icon'],
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.s = st;
			this.h = p;
			this.b = s;
			this.t = tb;
			this.platform = pl;
		},
		filters:{
			descFilter:function(val){
				return val.substring(0,4)
			}
		},
		watch:{
			statusBarColor:function(val){
				com.updateComponentData(this,'statusBarBackground',val)
			},
			currentPage_f:function(val){
				com.updateComponentData(this,'currentPage',val)
			},
			tabbarGroup_f:{
				handler:function(val){
					com.updateComponentData(this,'tabbarGroup',val)
				},
				deep:true
			},
			tabbarPage_f:{
				handler:function(val){
					com.updateComponentData(this,'tabbarPage',val)
				},
				deep:true
			}
		},
		mounted(){
			setTimeout(()=>{
				com.updateComponentData(this,'tabbarGroup',this.tabbarGroup_f)
				com.updateComponentData(this,'tabbarPage',this.tabbarPage_f)
				com.updateComponentData(this,'statusBarBackground',this.statusBarColor)
				com.updateComponentData(this,'currentPage',this.currentPage_f)
				if(this.pop_button)this.getPopIndex()
				this.switchTabbar(this.currentPage_f)
			},50)
		},
		methods:{
			// 获取突出图标索引
			getPopIndex(){
				let index =this.tabbarGroup.length==1?0:Math.ceil(this.tabbarGroup.length/2)-1;
				this.pop_index = index;
			},
			// 重复点击动画
			tabbarButtonJump(index){
				let props = []
				// 是否有突出按钮
				if(this.pop_button&&index==this.pop_index){
					let pop = ctr.getBindingEle(this.$refs.pop)
					props = [
						{
							element: pop,
							property: 'transform.scale',
							expression: 'easeOutElastic(t,0.4,0.2,650)'
						}
					]
				}
				else{
					// 用数组会造成点击错位
					let ele = ctr.getBindingEle(this.$refs[`tb_${index}`][0])
					props = [
						{
							element: ele,
							property: 'transform.scale',
							expression: 'easeOutElastic(t,0.6,0.4,650)'
						}
					]
				}
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>650`,
					props
				}, function(e) {
				});
				
				uni.$emit(`tabbarRefreshRequire_${this.tabbarPage[index].id}`)
			},
			// 突出按钮点击(ios点击不能穿透)
			popButtonTapped(){
				this.switchTabbar(this.pop_index)
			},
			// 切换动画
			tabbarButtonActive(index){
				for(let i =0;i<this.tabbarGroup.length;i++){
					if(i==index){
						this.tabbarGroup[i].active = true;
					}
					else{
						this.tabbarGroup[i].active = false;
					}
				}
			},
			// 渲染逻辑
			onSwitchRender(index){
				uni.$emit('tabbarRenderRequire',{page:index,id:this.tabbarPage[index].id})
			},
			// 已激活为刷新，否则渲染
			switchTabbar(index){
				if(this.tabbarGroup[index].active){
					this.tabbarButtonJump(index)
				}
				else{
					this.tabbarButtonActive(index)
					this.onSwitchRender(index)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(updown,transform,0.45s,$cts-normal-time-function,null,null)
	@include createTransition(bg,background-color,0.45s,$cts-normal-time-function,null,null)
	@include createBorder(tb,top,$cts-light-grey,solid,.5px)
	@include createPadding(desc,$cts-min-padding,$cts-min-padding,$cts-min-padding,$cts-min-padding)
	.tabbar-safearea{
		position:fixed;
		bottom:0;
		left:0;
		width:$cts-screen-full;
		background-color:$cts-all-white;
	}
	.tabbar-container{
		&-slot{
			position: relative;
		}
		&-slot-item{
			width: $cts-screen-full;
			position: absolute;
			top: 0;
		}
		&-main{
			position: fixed;
			left: 0;
			top: 0;
			width: $cts-screen-full;
			background-color: $cts-narrow-grey;
		}
		&-tabbar{
			position: fixed;
			left: 0;
			height: 120rpx;
			width: $cts-screen-full;
			background-color: $cts-all-white;
		}
		&-item{
			flex: 1;
			height: 120rpx;
			margin-left: $cts-middle-padding;
			margin-right: $cts-middle-padding;
			position: relative;
		}
	}
	.tabbar-item{
		&-icon{
			width: 50rpx;
			height: 50rpx;
			overflow: hidden;
		}
		&-icon-box{
			
		}
		&-icon-img{
			width: 50rpx;
			height: 50rpx;
		}
		&-text{
			margin-top: $cts-middle-padding;
			font-size: $cts-middle-font;
			color: $cts-middle-grey;
		}
		&-desc{
			position: absolute;
			right: $cts-middle-padding;
			top: $cts-middle-padding;
			color: $cts-all-white;
			font-size: $cts-ext-min-font;
			background-color: $cts-gradient-dark-red;
			border-radius: $cts-min-padding;
			font-weight: 700;
		}
	}
	.tabbar-item-active{
		transform: translateY(0);
	}
	.tabbar-item-mute{
		transform: translateY(-50rpx);
	}
	.tabbar-float-icon{
		width: 150rpx;
		height: 160rpx;
		position: fixed;
		left: 300rpx;
		&-active{
			transform: scale(0.6) translateY(0%);
		}
		&-mute{
			transform: scale(1) translateY(-10%);
		}
		&-img{
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
