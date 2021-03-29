<template>
	<view :class="[list_outside?'cts-scroller-relative':'cts-scroller']" :style="{top:list_outside?'':`${sh}px`,backgroundColor:!!container_bg?container_bg:'#f7f7f7'}">
		<!-- 是否有菜单栏 -->
		<view v-if="menu_group" class="cts-flex-dir cts-flex-jfs cts-flex-ac">
			<scroller show-scrollbar="false" scroll-direction="horizontal" :style="{backgroundColor:!!header_bg?header_bg:'#fff'}"
			 class=" cts-flex-dir cts-flex-ac" :class="[ optionsGroup.length>5?'cts-flex-jfs':'cts-flex-jsa',if_tabbar_page?'cts-scroller-tab-container-menu':'cts-scroller-container-menu']">
				<!-- 是否为双标题，仅tabbar页面用 -->
				<!-- tabbar页面用只增加了副标题和高度 -->
				<template v-if="if_tabbar_page">
					<div class="cts-border-radius-wid cts-scroller-indicator-tab"
					 ref="indicator" :style="{left:`${indicator_positon}px`,width:`${indicator_width}px`,bottom:platform=='ios'?'15rpx':'20rpx'}">
					</div>
					<div class="cts-scroller-item cts-flex-ac cts-flex-jc cts-transition-item" ref="options_item"
					v-for="(item,index) in optionsGroup" :key="item.text+index" :class="swell?'cts-basic-horizontal-padding':'cts-padding-item'"
					:id="'indicator'+index" @tap="selectIndicator(index)">
						<text class="cts-scroller-desc" :class="[tap_item_index==index?'cts-scroller-desc-active':'cts-scroller-desc-mute']">{{item.desc}}</text>
						<text class="cts-scroller-text-tb" :style="{color:tap_item_index==index?`${!!text_active_color?text_active_color:'#DA9976'}`:`${!!text_mute_color?text_mute_color:'#333'}`}">{{item.text}}</text>
					</div>
				</template>
				<template v-else>
					<div class="cts-scroller-item cts-flex-ac cts-flex-jc cts-transition-item" ref="options_item"
					v-for="(item,index) in optionsGroup" :key="item.text+index" :class="swell?'cts-basic-horizontal-padding':'cts-padding-item'"
					:id="'indicator'+index" @tap="selectIndicator(index)" :style="{backgroundColor:tap_item_index==index?`${!!item_active_bg?item_active_bg:'transparent'}`:`${!!item_mute_bg?item_mute_bg:'transparent'}`}">
						<text class="cts-scroller-text" :style="{color:tap_item_index==index?`${!!text_active_color?text_active_color:'#DA9976'}`:`${!!text_mute_color?text_mute_color:'#333'}`}">{{item.text}}</text>
					</div>
					<div class="cts-border-radius-sid "
					 ref="indicator"  :class="[swell?'cts-scroller-indicator-s':'cts-scroller-indicator',indicator_fixed?'cts-scroller-indicator-fixed':'']"
					:style="{left:`${indicator_positon}px`,width:`${indicator_width}px`,backgroundColor:swell?`${!!indi_color?indi_color:'#333'}`:`${!!indi_color?indi_color:'#DA9976'}`}">
					</div>
				</template>
			</scroller>
			<view class="cts-flex-ac cts-flex-jc cts-border-left-solid-menu" :class="[if_tabbar_page?'menu-box-tb':'menu-box']" @tap="toggleMenuPanel">
				<image class="menu-icon cts-transition-menu" src="/static/menu.png" mode="aspectFit" :class="[menu_toggle?'menu-show':'menu-hide']"></image>
			</view>
		</view>
		<scroller show-scrollbar="false" scroll-direction="horizontal" :style="{backgroundColor:!!header_bg?header_bg:'#fff'}" v-else
		 class=" cts-flex-dir cts-flex-ac" :class="[ optionsGroup.length>5?'cts-flex-jfs':'cts-flex-jsa',if_tabbar_page?'cts-scroller-tab-container':'cts-scroller-container']">
			<template v-if="if_tabbar_page">
				<div class="cts-border-radius-wid cts-scroller-indicator-tab"
				 ref="indicator" :style="{left:`${indicator_positon}px`,width:`${indicator_width}px`,bottom:platform=='ios'?'15rpx':'20rpx'}">
				</div>
				<div class="cts-scroller-item cts-flex-ac cts-flex-jc cts-transition-item" ref="options_item"
				v-for="(item,index) in optionsGroup" :key="item.text+index" :class="swell?'cts-basic-horizontal-padding':'cts-padding-item'"
				:id="'indicator'+index" @tap="selectIndicator(index)">
					<text class="cts-scroller-desc" :class="[tap_item_index==index?'cts-scroller-desc-active':'cts-scroller-desc-mute']">{{item.desc}}</text>
					<text class="cts-scroller-text-tb" :style="{color:tap_item_index==index?`${!!text_active_color?text_active_color:'#DA9976'}`:`${!!text_mute_color?text_mute_color:'#333'}`}">{{item.text}}</text>
				</div>
			</template>
			<template v-else>
				<div class="cts-scroller-item cts-flex-ac cts-flex-jc cts-transition-item" ref="options_item"
				v-for="(item,index) in optionsGroup" :key="item.text+index" :class="swell?'cts-basic-horizontal-padding':'cts-padding-item'"
				:id="'indicator'+index" @tap="selectIndicator(index)" :style="{backgroundColor:tap_item_index==index?`${!!item_active_bg?item_active_bg:'transparent'}`:`${!!item_mute_bg?item_mute_bg:'transparent'}`}">
					<text class="cts-scroller-text" :style="{color:tap_item_index==index?`${!!text_active_color?text_active_color:'#DA9976'}`:`${!!text_mute_color?text_mute_color:'#333'}`}">{{item.text}}</text>
				</div>
				<div class="cts-border-radius-sid "
				 ref="indicator"  :class="[swell?'cts-scroller-indicator-s':'cts-scroller-indicator',indicator_fixed?'cts-scroller-indicator-fixed':'']"
				:style="{left:`${indicator_positon}px`,width:`${indicator_width}px`,backgroundColor:swell?`${!!indi_color?indi_color:'#333'}`:`${!!indi_color?indi_color:'#DA9976'}`}">
				</div>
			</template>
		</scroller>
		<swiper class="cts-swiper" ref="swiperContainer"  @touchend="preventIosMultipleSwitch" @transition="switching"
		@animationfinish="switchFinish" @change="switchIndexChange" :current="tap_item_index"
		:disable-programmatic-animation="true" :style="{height:if_tabbar_page?`${ph-sh-ih-th}px`:`${ph-sh-ih}px`}">
			<swiper-item v-for="(item,index) in pageGroup" :key="item.name">
				<slot :name="item.name" v-if="item.render"></slot>
			</swiper-item>
		</swiper>
		<view v-if="menu_toggle" class="cts-border-top-solid-drawer cts-flex-dir cts-basic-full-padding cts-flex-jfs cts-flex-afs cts-flex-wrap" elevation="2px" :class="[if_tabbar_page?'cts-scroller-menu-tb':'cts-scroller-menu',menu_toggle?'cts-scroller-menu-show':'']">
			<view class="cts-scroller-menu-item cts-padding-mtxt cts-flex-ac cts-flex-jc" v-for="(item,index) in menu_group" :key="item.id">
				<text class="cts-scroller-menu-txt cts-text-overflow-1">{{item.title}}</text>
			</view>
		</view>
		<view class="cts-throttle-cover" v-if="throttle" :style="{height:if_tabbar_page?`${ph-sh-ih-th}px`:`${ph-sh-ih}px`,top:`${ih}px`}"></view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	import ctr from '@/static/js/container.js'
	const dom = weex.requireModule('dom')

	export default {
		data() {
			return {
				// 节流
				throttle:false,
				// 重计定时器
				recal_timer:null,
				// 指示器位置
				indicator_positon: 0,
				// 指示器切换动画
				isTap: false,
				// 指示器宽度
				indicator_width: 0,
				// 状态栏高度
				sh: '',
				// 页面高度
				ph:'',
				// 指示器高度
				ih:'',
				// 选项间距集合
				scroll_item_distance_group:[],
				// 选项宽度集合
				scroll_item_width_group:[],
				// 当前激活页面/swiper-item
				current_swiper_index:0,
				// 选择的选项
				tap_item_index:0,
				// swiper-item宽度
				swiper_width:0,
				// 当前平台
				platform:null,
				// 选项集合
				optionsGroup:[],
				// 页面集合
				pageGroup:[],
				// 首次
				first_time:true,
				swiper_moving:false,
				// 菜单面板显示隐藏
				menu_toggle:false
			};
		},
		// text_active_color /mute 导航栏 当前项 挡墙文字激活/静默颜色 (双行文字只有第二行可以)
		// item_active_bg /mute 导航栏 当前项 挡墙当前项激活/静默背景色 
		// container_bg 整个容器的背景色
		// header_bg 导航栏背景色
		// indi_color 指示器颜色 (双行文字除外)
		// swell 指示器是否撑满文字的背景
		// indicator_fixed 指示器宽度不变(其实没有)
		// list_outside 是否为双list嵌套滚动
		// if_tabbar_page 是否为双行文字
		// 其他参数参考其他页面
		props:['optionsGroup_f','pageGroup_f','currentActivePage','swell','indicator_fixed','list_outside','if_tabbar_page','menu_group','text_active_color','text_mute_color','item_active_bg','item_mute_bg','header_bg','container_bg','indi_color'],
		computed:{
			ofg:function(){return this.optionsGroup_f},
			pgf:function(){return this.pageGroup_f},
			cap:function(){return this.currentActivePage},
		},
		watch:{
			ogf:{
				handler:function(val){
					com.updateComponentData(this,'optionsGroup',val)
				},
				deep:true
			},
			pgf:{
				handler:function(val){
					com.updateComponentData(this,'pageGroup',val)
				},
				deep:true
			},
			cap:function(val){
				com.updateComponentData(this,'current_swiper_index',val)
			}
		},
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
			
			this.sh = st + n;
			this.ph = s;
			this.ih = this.if_tabbar_page? uni.upx2px(120):uni.upx2px(90);
			this.platform = pl;
			this.th = tb;
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'optionsGroup',this.optionsGroup_f)
				com.updateComponentData(this,'pageGroup',this.pageGroup_f)
				com.updateComponentData(this,'current_swiper_index',this.currentActivePage)
				
			},50)
			this.$nextTick(function(){
				setTimeout(()=>{
					this.calculateAllScrollerItemDistance()
					this.selectIndicator(this.current_swiper_index)
					this.swiper_width = uni.getSystemInfoSync().safeArea.width;
				},100)
			})
			
		},
		methods: {
			// swiper切换完毕
			switchIndexChange(e){
				this.renderChoosenPage(e.detail.current)
				this.makeIndicatorVisiable(e.detail.current);
			},
			// 将选项移动到可视区域
			makeIndicatorVisiable(index){
				let margin =uni.upx2px(20)

				// ios滚动允许负值
				if(this.scroll_item_width_group[index-1]){
					dom.scrollToElement(this.$refs.options_item[index],
					{offset:-this.scroll_item_width_group[index-1]-margin})
				}
				else{
					dom.scrollToElement(this.$refs.options_item[index],{offset:-margin})
				}
			},
			// 计算所有选项之间间距和宽度
			calculateAllScrollerItemDistance(){
				this.scroll_item_distance_group=[]
				this.scroll_item_width_group=[]
				for(let i =0;i<this.optionsGroup.length;i++){
					ctr.getDomElement('indicator'+i, (el) => {
						this.scroll_item_distance_group.push(el[0].left)
						this.scroll_item_width_group.push(el[0].width)
					})
				}
			},
			// swiper切换动画结束
			switchFinish(e){
				let index = e.detail.current;
				// 暴露
				if(!this.isTap){
					this.outputCurrentPage(index)
				}
				
				if (this.tap_item_index === index) {
					this.isTap=false
				}
				this.current_swiper_index =index;
				
				
				this.throttle=false;
				if(!this.isTap){
					this.swiper_moving=false;
					this.tap_item_index=index;
					this.updateIndicator(this.scroll_item_distance_group[this.current_swiper_index],this.scroll_item_width_group[this.current_swiper_index])
				}
			},
			// 正在切换swiper
			switching(e){
				
				// 是否为代码驱动，去除干扰
				if(this.isTap)return
				this.swiper_moving=true;
				let offsetX = e.detail.dx;

				let preloadIndex = this.current_swiper_index;
				
				// 判断方向
				if (offsetX > 1) {
				  preloadIndex++;
				} else if (offsetX < -1) {
				  preloadIndex--;
				}
				// 边界值
				if (preloadIndex === this.current_swiper_index || preloadIndex < 0 || preloadIndex > this.optionsGroup.length - 1) {
				  return;
				}
				

				// 移动百分比
				let percentage = Math.abs(this.swiper_width / offsetX);

				let cd = this.scroll_item_distance_group[this.current_swiper_index];
				let pd = this.scroll_item_distance_group[preloadIndex];
				
				let cd_l = this.scroll_item_width_group[this.current_swiper_index];
				let pd_l = this.scroll_item_width_group[preloadIndex];
				
				let lineL = cd + (pd - cd) / percentage;
				let lineW = cd_l + (pd_l - cd_l) / percentage;
				

				this.updateIndicator(lineL, lineW);

			},
			// 防止ios连续滑动
			preventIosMultipleSwitch(e){
				let y =e.changedTouches[0].screenY;
				if(this.platform=='ios'){
					if(this.swiper_moving)this.throttle=true;
					
				};
			},
			// 更新指示器位置
			updateIndicator(left,width){
				this.indicator_positon=left;
				this.indicator_width=width;
			},
			// 暴露当前页面
			outputCurrentPage(index){
				uni.$emit('pageChanged',{index})
			},
			// 选中选项
			selectIndicator(item) {
				this.tap_item_index = item;
				// 首次
				if(this.first_time){
					this.first_time=false;
					// 否则切换动画效果会异常
					if(item!=0){
						this.isTap=true;
					}
				}
				else{
					this.isTap=true;
				}
				
				this.outputCurrentPage(item)
				
				if(this.scroll_item_distance_group.length==0){
					ctr.getDomElement('indicator' + item, (el) => {
						this.updateIndicator(el[0].left, el[0].width);
					})
				}
				// 缓存选项间距，宽度
				else{
					this.updateIndicator(this.scroll_item_distance_group[item], this.scroll_item_width_group[item]);
				}
			},
			// 渲染指定页面(渲染逻辑暂留)
			renderChoosenPage(index){
				
			},
			// 切换菜单面板
			toggleMenuPanel(){
				this.menu_toggle = !this.menu_toggle
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,0,0)
	@include createPadding(mtxt,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createBorder(menu,left,$cts-soso-grey,solid,1px)
	@include createBorder(drawer,top,$cts-soso-grey,solid,1px)
	@include createTransition(menu,transform,0.25s,ease-out,null,null)
	@include createTransition(item,background-color,0.25s,ease-out,null,null)
	.menu{
		&-box-tb{
			width: 100rpx;
			height: 120rpx;
			background-color: $cts-all-white;
		}
		&-box{
			width: 100rpx;
			height: 90rpx;
			background-color: $cts-all-white;
		}
		&-icon{
			width: 50rpx;
			height: 50rpx;
		}
		&-show{
			transform: rotate(-90deg);
		}
		&-hide{
			transform: rotate(0deg);
		}
	}
	.cts-throttle-cover{
		width: $cts-screen-full;
		position: absolute;
		left: 0;
	}
	.cts-scroller {
		width: $cts-screen-full;
		position: absolute;
		left: 0;
		overflow: hidden;
		&-menu-tb{
			position: absolute;
			left: 0;
			top: 120rpx;
			width: $cts-screen-full;
			background-color: $cts-all-white;
			box-shadow: 0 10px 3px 1px rgba(0,0,0,.1);
		}
		&-menu{
			position: absolute;
			left: 0;
			top: 90rpx;
			width: $cts-screen-full;
			background-color: $cts-all-white;
			box-shadow: 0 10px 3px 1px rgba(0,0,0,.1);
			&-item{
				width: 177.5rpx;
				height: 80rpx;
			}
			&-txt{
				width: 147.5rpx;
				text-align: center;
				line-height: 50rpx;
				height: 50rpx;
				background-color: $cts-light-grey;
				color: $cts-light-dark;
				font-size: $cts-basic-font;
				border-radius: 50%;
			}
		}
		&-relative{
			width: $cts-screen-full;
			position: relative;
			overflow: hidden;
		}
		&-indicator-fixed{
			transform-origin: center!important;
			transform: scaleX(0.4)!important;
		}
		&-indicator {
			height: 6rpx;
			left: 0;
			bottom: 8rpx;
			background-color: $cts-main-brown;
			transform-origin: left bottom;
			position: absolute;
		}
		&-indicator-tab {
			height: 35rpx;
			left: 0;
			background-image: linear-gradient(to right,$cts-new-narrow-brown, $cts-dark-brown);
			transform-origin: left bottom;
			position: absolute;
		}
		&-indicator-s {
			height: 50rpx;
			left: 0;
			bottom: 20rpx;
			background-color: $cts-dark-brown;
			border-radius: $cts-ext-padding;
			transform-origin: left bottom;
			position: absolute;
		}
		&-container-menu {
			position: relative;
			width: 650rpx;
			height: 90rpx;
			background-color: $cts-all-white;
		}
		&-tab-container-menu{
			position: relative;
			width: 650rpx;
			height: 120rpx;
			background-color: $cts-all-white;
		}
		&-container {
			position: relative;
			width: $cts-screen-full;
			height: 90rpx;
			background-color: $cts-all-white;
		}
		&-tab-container{
			position: relative;
			width: $cts-screen-full;
			height: 120rpx;
			background-color: $cts-all-white;
		}
		&-item {
			height: 90rpx;
			margin-left: $cts-middle-padding;
			margin-right: $cts-middle-padding;
		}
		&-desc {
			font-size: $cts-soso-font;
			margin-bottom: $cts-middle-padding;
			font-weight: 700;
		}
		&-desc-active {
			// color: $cts-main-brown;
			color:$cts-dark-golden;
		}
		&-desc-mute {
			color: $cts-deep-dark;
		}
		&-text-tb {
			font-size: $cts-middle-font;
		}
		&-text {
			font-size: $cts-basic-font;
		}
	}
	.cts-border-radius-sid{
		border-radius: $cts-middle-padding;
	}
	.cts-border-radius-wid{
		border-radius:50%;
	}
	.cts-swiper {
		width: $cts-screen-full;
	}
</style>
