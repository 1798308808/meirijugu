<template>
	<view class="navbar-container cts-transition-op" :style="{position:!!fixed?'fixed':'absolute',opacity:op?0:1}">
		<view class="navbar-container-empty cts-transition-bg" :style="{backgroundColor:!!status?status:'#fff',height:`${h}px`}"></view>
		<view v-if="type==1" class="navbar-container-box cts-flex-ac cts-flex-jc cts-transition-bg" :style="{backgroundColor:!!color?color:'#fff'}">
			<text class="cts-navbar-type-1 cts-basic-horizontal-padding cts-text-overflow-1"
			:style="{color:!!main_color?main_color:'#333333'}"
			>{{!!title?title:'未设置标题'}}</text>
		</view>
		<view v-else-if="type==2" class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jc cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<text class="cts-navbar-type-2 cts-padding-navbar-2 cts-text-overflow-1"
			:style="{color:!!main_color?main_color:'#333333'}"
			>{{!!title?title:'未设置标题'}}</text>
			<view class="icon-empty"></view>
		</view>
		<view v-else-if="type==3" class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jc cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<text class="cts-navbar-type-2 cts-padding-navbar-2 cts-text-overflow-1"
			:style="{color:!!main_color?main_color:'#333333'}"
			>{{!!title?title:'未设置标题'}}</text>
			<image class="navbar-container-icon" :src="!!icon2?icon2:'/static/search.png'" mode="aspectFit"  @tap="rightButtonTapped"></image>
		</view>
		<view v-else-if="type==4" class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jsb cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<text class="cts-navbar-type-4 cts-padding-navbar-2 cts-text-overflow-1"
			:style="{color:!!main_color?main_color:'#333333'}"
			>{{!!title?title:'未设置标题'}}</text>
			<view class="icon-empty"></view>
			<text class="cts-navbar-type-4-text" :style="{color:!!font?font:'#999999'}"  @tap="rightButtonTapped">{{!!text?text:'右标题'}}</text>
		</view>
		<view v-else-if="type==5" class="navbar-container-transparent cts-flex-dir cts-flex-ac cts-flex-jsb">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back_w.png'" mode="aspectFit"  @tap="goBack"></image>
			<image class="navbar-container-icon" :src="!!icon2?icon2:'/static/menu_w.png'" mode="aspectFit"  @tap="rightButtonTapped"></image>
		</view>
		<view v-else-if="type==6" class="navbar-container-box cts-flex-dir cts-flex-ac cts-flex-jsb cts-basic-horizontal-padding cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<view class="navbar-container-input-fake cts-flex-ac cts-flex-jc" @tap="leftButtonTapped">
				<text class="navbar-container-input-placeholder cts-text-overflow-1 cts-basic-horizontal-padding">{{!!holder?holder:'请输入搜索关键词'}}</text>
			</view>
			<text class="navbar-container-text-fake" @tap="rightButtonTapped">搜索</text>
		</view>
		<view v-else-if="type==7" class="navbar-container-box cts-flex-dir cts-flex-ac cts-flex-jsb cts-basic-horizontal-padding cts-transition-bg" 
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<view class="navbar-container-input-real cts-flex-ac cts-flex-jc">
				<input type="text" class="navbar-container-input-real-input cts-basic-horizontal-padding"
				:placeholder="!!holder?holder:'请输入搜索关键词'" return-key-type="search" :value="inputVal" @input="searchInput" @confirm="rightButtonTapped"
				>
				<text v-if="!!inputVal" class="empty-text" @tap="clearInput">×</text>
			</view>
			<text class="navbar-container-text-fake" @tap="rightButtonTapped">搜索</text>
		</view>
		<view v-else-if="type==8" class="navbar-container-transparent  cts-flex-dir cts-flex-ac cts-flex-jsb">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/service_w.png'" mode="aspectFit" @tap="leftButtonTapped"></image>
			<view class="navbar-container-input-fake-2 cts-flex-ac cts-flex-jfs cts-flex-dir" @tap="middleButtonTapped">
				<image class="navbar-container-input-icon" src="/static/search_g.png" mode="aspectFit"></image>
				<text class="navbar-container-input-placeholder-2">{{!!holder?holder:'请输入搜索关键词'}}</text>
			</view>
			<image class="navbar-container-icon" :src="!!icon2?icon2:'/static/message_w.png'" mode="aspectFit" @tap="rightButtonTapped"></image>
		</view>
		<view v-else-if="type==9"  class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jfe cts-transition-bg" :style="{backgroundColor:!!color?color:'rgba(0,0,0,0)'}">
			<!-- Hbuilder更新后ios的这个点击不了，待修复 -->
			<template v-if="pl=='android'">
				<image class="navbar-container-icon-w" :src="!!icon?icon:'/static/setting_w.png'" mode="aspectFit" @tap="middleButtonTapped"></image>
			</template>
			<image class="navbar-container-icon-w" :src="!!icon2?icon2:'/static/message_w.png'" mode="aspectFit" @tap="rightButtonTapped"></image>
		</view>
		<view v-else-if="type==10" class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jsb cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<view class="cts-flex-ac cts-flex-jc cts-flex-dir" @tap="select">
				<text class="cts-navbar-type-10 cts-padding-navbar-2 cts-text-overflow-1"
				:style="{color:!!main_color?main_color:'#333333'}"
				>{{!!title?title:'未设置标题'}}</text>
				<image class="navbar-container-icon-tri cts-transition-triangle" :class="[drop?'navbar-container-icon-down':'navbar-container-icon-up']" src="/static/triangle.png" mode="aspectFit"></image>
			</view>
			<view class="icon-empty"></view>
			<text class="cts-navbar-type-4-text" :style="{color:!!font?font:'#999999'}" @tap="rightButtonTapped">{{!!text?text:'右标题'}}</text>
		</view>
		<view v-else-if="type==11" class="navbar-container-box  cts-flex-dir cts-flex-ac cts-flex-jsb cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<image class="navbar-container-icon" :src="!!icon?icon:'/static/back.png'" mode="aspectFit" @tap="goBack"></image>
			<image class="navbar-container-img" :src="navbarImg" mode="aspectFit"></image>
			<view class="icon-empty"></view>
		</view>
		<view v-else-if="type==12" class="navbar-container-box cts-flex-dir cts-flex-ac cts-flex-jsb cts-basic-horizontal-padding cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac" @tap="leftButtonTapped">
				<text class="navbar-address-txt cts-text-overflow-1">{{!!title?title:'未设置标题'}}</text>
				<image class="navbar-address-icon" src="/static/back.png" mode="aspectFit"></image>
			</view>
			<view class="navbar-container-input-fake-3 cts-flex-dir cts-flex-ac cts-flex-jsb cts-padding-keywords" @tap="middleButtonTapped">
				<image class="navbar-address-search" src="/static/search_g.png" mode="aspectFit"></image>
				<text class="navbar-address-fake-pl cts-basic-horizontal-padding">搜索商品或特权</text>
			</view>
			<view class="cts-flex-ac cts-flex-jc">
				<image class="navbar-address-welfare" src="/static/sign_gift.png" mode="aspectFit"></image>
				<text class="navbar-address-welfare-txt">每日红包</text>
			</view>
		</view>
		<view v-else-if="type==13" class="navbar-container-box cts-flex-dir cts-flex-ac cts-flex-jsb cts-basic-horizontal-padding cts-transition-bg"
		:style="{backgroundColor:!!color?color:'#fff'}">
			<view class="navbar-container-input-fake-4 cts-flex-dir cts-flex-ac cts-flex-jsb cts-padding-keywords" @tap="middleButtonTapped">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<image class="navbar-store-search" src="/static/search_g.png" mode="aspectFit"></image>
					<text class="navbar-store-txt cts-text-overflow-1">{{!!title?title:'未设置标题'}}</text>
				</view>
				<text class="navbar-store-fake-pl cts-basic-horizontal-padding">{{!!text?text:'右标题'}}</text>
			</view>
		</view>
		<view v-else>
			
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				drop:false,
				h:'',
				pl:'',
				status:'',
				type:0,
				color:'',
				font:'',
				icon:'',
				icon2:'',
				text:'',
				title:'',
				holder:'',
				main_color:'',
				op:false
			};
		},
		created() {
			this.h = this.$store.state.common.statusBarHeight;
			this.pl = this.$store.state.common.platform;
		},
		watch:{
			navbarType:function(val){
				com.updateComponentData(this,'type',val)
			},
			navbarColor:function(val){
				com.updateComponentData(this,'color',val)
			},
			leftIcon:function(val){
				com.updateComponentData(this,'icon',val)
			},
			rightIcon:function(val){
				com.updateComponentData(this,'icon2',val)
			},
			rightText:function(val){
				com.updateComponentData(this,'text',val)
			},
			mainTitle:function(val){
				com.updateComponentData(this,'title',val)
			},
			fontColor:function(val){
				com.updateComponentData(this,'font',val)
			},
			placeHodler:function(val){
				com.updateComponentData(this,'holder',val)
			},
			mainTitleColor:function(val){
				com.updateComponentData(this,'main_color',val)
			},
			statusBarColor:function(val){
				com.updateComponentData(this,'status',val)
			},
			navbarOpacity:function(val){
				com.updateComponentData(this,'op',val)
			},
			navbarDrop:function(val){
				com.updateComponentData(this,'drop',val)
			}
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'type',this.navbarType)
				com.updateComponentData(this,'color',this.navbarColor)
				com.updateComponentData(this,'icon',this.leftIcon)
				com.updateComponentData(this,'icon2',this.rightIcon)
				com.updateComponentData(this,'text',this.rightText)
				com.updateComponentData(this,'title',this.mainTitle)
				com.updateComponentData(this,'font',this.fontColor)
				com.updateComponentData(this,'holder',this.placeHodler)
				com.updateComponentData(this,'main_color',this.mainTitleColor)
				com.updateComponentData(this,'status',this.statusBarColor)
				com.updateComponentData(this,'op',this.navbarOpacity)
				com.updateComponentData(this,'drop',this.navbarDrop)
			},50)
		},
		methods:{
			// 清空输入框
			clearInput(){
				this.$emit('update:inputVal','')
			},
			// 搜索输入框
			searchInput(e){
				this.$emit('update:inputVal',e.detail.value)
			},
			select(){
				this.drop=!this.drop;
				this.$emit('update:navbarDrop',this.drop)
			},
			goBack(){
				uni.navigateBack()
			},
			leftButtonTapped(){
				uni.$emit('navbarTapHandler',{position:0})
				console.log('导航栏左按钮点击')
			},
			middleButtonTapped(){
				uni.$emit('navbarTapHandler',{position:1})
				console.log('导航栏中按钮点击')
			},
			rightButtonTapped(){
				uni.$emit('navbarTapHandler',{position:2})
				console.log('导航栏右按钮点击')
			}
		},
		props:['inputVal','navbarDrop','navbarImg','navbarType','navbarColor','leftIcon','rightIcon','rightText','mainTitle','fontColor','placeHodler','mainTitleColor','statusBarColor','fixed','navbarOpacity']
	}
</script>

<style lang="scss" scoped>
	@include createTransition(bg,background-color,0.45s,$cts-normal-time-function,null,null)
	@include createTransition(triangle,transform,0.15s,ease-out,null,null)
	@include createTransition(op,opacity,0.25s,ease-out,null,null)
	@include createPadding('navbar-2',$cts-min-padding,$cts-min-padding,null,null)
	@include createPadding(keywords,$cts-middle-padding,$cts-middle-padding,null,null)
	.navbar-store{
		&-search{
			width: 35rpx;
			height: 35rpx;
		}
		&-fake-pl{
			font-size: $cts-middle-font;
			text-align: center;
			line-height: 50rpx;
			height: 50rpx;
			background-image: linear-gradient(to right,$cts-new-narrow-brown, $cts-dark-brown);
			border-radius: $cts-big-padding;
			color: $cts-light-golden;
		}
		&-txt{
			max-width: 500rpx;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			margin-left: $cts-middle-padding;
		}
	}
	.navbar-address{
		&-icon{
			margin-left: $cts-middle-padding;
			width: 30rpx;
			height: 30rpx;
			transform: rotate(-90deg);
		}
		&-txt{
			max-width: 100rpx;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
		}
		&-search{
			width: 30rpx;
			height: 30rpx;
		}
		&-fake-pl{
			font-size: $cts-middle-font;
			text-align: center;
			line-height: 40rpx;
			height: 40rpx;
			background-color: $cts-light-golden;
			border-radius: $cts-big-padding;
			color: $cts-all-white;
		}
		&-welfare{
			width: 40rpx;
			height: 40rpx;
		}
		&-welfare-txt{
			font-size: $cts-min-font;
			color: $cts-deep-dark;
		}
	}
	.cts-navbar-type{
		height: $cts-basic-height;
		&-1{
			width: $cts-screen-full;
			text-align: center;
			font-size: $cts-soso-font;
			font-weight: 700;
		}
		&-2{
			text-align: center;
			width: 570rpx;
			font-size: $cts-soso-font;
			font-weight: 700;
		}
		&-4{
			text-align: center;
			width: 450rpx;
			font-size: $cts-soso-font;
			font-weight: 700;
		}
		&-10{
			text-align: center;
			font-size: $cts-soso-font;
			font-weight: 700;
		}
		&-4-text{
			text-align: right;
			width: 150rpx;
			height: $cts-basic-height;
			line-height: $cts-basic-height;
			font-size: $cts-basic-font;
			position: absolute;
			right: $cts-basic-padding;
			top: 0;
		}
	}
	.navbar-container{
		left: 0;
		top: 0;
		width: $cts-screen-full;
		&-img{
			width: 180rpx;
			height: 50rpx;
		}
		&-empty{
			
		}
		&-box{
			position: relative;
			height: $cts-basic-height;
		}
		&-transparent{
			position: relative;
			height: $cts-basic-height;
			background-color: rgba(0,0,0,0);
		}
		&-icon{
			width: 80rpx;
			height: 50rpx;
		}
		&-icon-w{
			width: $cts-basic-height;
			height: 50rpx;
		}
		&-input-placeholder{
			width: 600rpx;
			text-align: left;
			color: $cts-light-dark;
			font-size: $cts-middle-font;
		}
		&-input-placeholder-2{
			width: 450rpx;
			text-align: left;
			color: $cts-light-dark;
			font-size: $cts-middle-font;
		}
		&-input-placeholder-3{
			width: 350rpx;
			text-align: left;
			color: $cts-light-dark;
			font-size: $cts-middle-font;
		}
		&-input-icon{
			width: 30rpx;
			height: 30rpx;
			margin-left: $cts-basic-padding;
			margin-right: $cts-basic-padding;
		}
		&-input-real-input{
			width: 500rpx;
			height: 60rpx;
			font-size: $cts-middle-font;
		}
		&-input-fake{
			width: 600rpx;
			height: 60rpx;
			background-color: $cts-light-grey;
			border-radius: $cts-big-padding;
		}
		&-input-fake-2{
			width: 550rpx;
			height: 60rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		&-input-fake-3{
			width: 500rpx;
			height: 60rpx;
			background-color: $cts-light-grey;
			border-radius: $cts-big-padding;
		}
		&-input-fake-4{
			width: 710rpx;
			height: 65rpx;
			background-color: $cts-all-white;
			border-radius: $cts-big-padding;
		}
		&-input-real{
			width: 500rpx;
			height: 60rpx;
			background-color: $cts-light-grey;
			border-radius: $cts-big-padding;
			position: relative;
		}
		&-text-fake{
			text-align: center;
			width: $cts-basic-height;
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}
		&-icon-tri{
			width: 30rpx;
			height: 30rpx;
		}
		&-icon-up{
			transform: rotate(0deg);
		}
		&-icon-down{
			transform: rotate(-180deg);
		}
		
	}
	.icon-empty{
		width: 80rpx;
		height: 50rpx;
	}
	.empty-text{
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50%;
		position: absolute;
		font-size: $cts-big-font;
		background-color: rgba(0,0,0,.2);
		color: $cts-all-white;
		text-align: center;
		right: 20rpx;
		top: 10rpx;
	}
</style>
