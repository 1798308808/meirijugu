<template>
	<view class="cts-home-top cts-transition-bg" :style="{height:`${h}px`,backgroundColor:!!bg[0].color?bg[0].color:'#fff'}" >
		<view class="cts-home-top-menu cts-flex-dir cts-flex-ac cts-flex-jfs">
			<!-- #ifdef APP-NVUE -->
			<scroller class="cts-home-top-scroller cts-flex-dir cts-flex-ac cts-flex-jfs" show-scrollbar="false" scroll-direction="horizontal">
				<view class="cts-home-top-menu-item cts-flex-ac cts-flex-jc cts-padding-item" v-for="(item,index) in group" :key="item.name" @tap="home_top_menu_tapped(index)">
					<text class="cts-home-top-menu-text" :class="[item.active?'cts-home-top-menu-text-active':'cts-home-top-menu-text-mute']"
					>{{item.name}}</text>
					<view class="cts-home-top-menu-indicator" v-if="item.active"></view>
				</view>
			</scroller>
			<!-- #endif -->
			<view class="cts-home-top-menu-options cts-flex-ac cts-flex-jc cts-transition-menu" @tap="menuToggle" :class="[menu_toggle?'menu-show':'menu-hide']">
				<image class="cts-home-top-menu-img" :src="'/static/menu_w.png'" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				h:0,
				bg:[{color:''}],
				group:[]
			};
		},
		watch:{
			bg_f:{
				handler:function(val){
					com.updateComponentData(this,'bg',val)
				},
				deep:true
			}
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'bg',this.bg_f)
			},50)
		},
		methods:{
			menuToggle(){
				this.menu_toggle=!this.menu_toggle
				this.$emit('returnHomeMenuToggle',this.menu_toggle)
			},
			home_top_menu_tapped(index){
				uni.$emit('home_top_menu_tapped',{index})
			}
		},
		props:['bg_f','group_f','menu_toggle'],
		mixins:[homePublicMixins],
		created() {
			let [n,st] =
			[
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.h = st + n*2;
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(menu,transform,0.25s,ease-out,null,null)
	@include createTransition(bg,background-color,0.45s,$cts-normal-time-function,null,null)
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,0,0)
	.menu{
		&-show{
			transform: rotate(-90deg);
		}
		&-hide{
			transform: rotate(0deg);
		}
	}
	.cts-home-top{
		position: absolute;
		right: 0;
		top: 0;
		width:$cts-screen-full;
		
		&-menu{
			position: absolute;
			bottom: 0;
			width: $cts-screen-full;
			height: $cts-basic-height;
		}
		&-scroller{
			width: 650rpx;
			height: $cts-basic-height;
		}
		&-menu-text{
			font-size: $cts-basic-font;
		}
		&-menu-text-active {
			color: $cts-light-golden;
			position: relative;
		}
		&-menu-indicator{
			position: absolute;
			width: 30rpx;
			border-radius: 10rpx;
			left: 24rpx;
			bottom: 5rpx;
			height: 8rpx;
			background-color: $cts-light-golden;
		}
		&-menu-text-mute {
			color: $cts-all-white;
			transform: scale(1);
		}
		&-menu-item{
			position: relative;
			height: 90rpx;
			margin-left: $cts-middle-padding;
			margin-right: $cts-middle-padding;
		}
		&-menu-options{
			width: $cts-basic-height;
			height: $cts-basic-height;
		}
		&-menu-img{
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>
