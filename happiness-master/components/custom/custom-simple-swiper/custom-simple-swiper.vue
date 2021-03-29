<template>
	<view>
		<view v-if="!for_swiper" class="cts-simple-empty" :style="{height:`${t}px`}"></view>
		<scroller v-if="for_swiper" class="cts-simple-header cts-flex-dir cts-flex-jfs cts-flex-ac" scroll-direction="horizontal" show-scrollbar="false">
			<view class="cts-flex-jc cts-flex-ac" :class="[normal?'cts-simple-item-normal':'cts-simple-item-swiper']"
			v-for="(item,index) in group" :key="item.text" @tap="select(index)" ref="item">
				<text class="cts-simple-txt" :class="[item.active?'cts-simple-txt-active':'cts-simple-txt-mute']">{{item.text}}</text>
				<view v-if="normal" :class="[item.active?'cts-simple-in-show-normal':'cts-simple-in-hide-normal']" class="cts-simple-item-indicator-normal cts-transition-in"></view>
				<view v-else :class="[item.active?'cts-simple-in-show':'cts-simple-in-hide']" class="cts-simple-item-indicator-swiper cts-transition-in"></view>
			</view>
		</scroller>
		<view v-else class="cts-simple-header cts-flex-dir cts-flex-jsa cts-flex-ac">
			<view class="cts-simple-item cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="item.text" @tap="select(index)">
				<text class="cts-simple-txt" :class="[item.active?'cts-simple-txt-active':'cts-simple-txt-mute']">{{item.text}}</text>
				<view :class="[item.active?'cts-simple-in-show':'cts-simple-in-hide']" class="cts-simple-item-indicator cts-transition-in"></view>
			</view>
		</view>
		<view class="cts-simple-body" :style="{height:`${custom_height?custom_height:h}px`}">
			<slot v-if="custom"></slot>
			<list v-else class="cts-simple-body" @loadmore="loadMoreData" ref="mylist" :class="[need_padding?'cts-basic-vertical-padding':'']" :style="{height:`${custom_height?custom_height:h}px`}">
				<slot></slot>
			</list>
		</view>
	</view>
</template>

<script>
	const dom = weex.requireModule('dom')
	export default {
		data() {
			return {
				t:'',
				h:'',
				hn:''
			};
		},
		methods:{
			select(index) {
				if(this.disabled){
					plus.nativeUI.toast('数据加载中，请稍等~');
					return;
				}
				this.group.forEach((item, i) => {
					if (i == index) {
						item.active = true;
						if(this.for_swiper){
							dom.scrollToElement(this.$refs.item[index])
						}
					} else {
						item.active = false;
					}
				})
				this.$emit('returnTappedItem',{id:!!this.id?this.id:0,index})
			},
			loadMoreData(){
				this.$emit('returnLoadmore')
			},
			reset(){
				this.$refs.mylist.resetLoadmore()
			}
		},
		props:['group','custom','for_swiper','need_padding','normal','custom_height','id','refresh_flag','disabled'],
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
			this.t = n + st;
			this.h = s - n - st - uni.upx2px(90);
			this.hn = s - n - st;
		},
		mounted() {
			if(this.for_swiper)this.h = this.h - uni.upx2px(90)
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(in,transform,0.25s,$cts-normal-time-function,null,null)
	.cts-simple{
		&-in-show-normal{
			transform: scaleX(1) translateY(15rpx);
		}
		&-in-hide-normal{
			transform: scaleX(0) translateY(15rpx);
		}
		&-in-show{
			transform: scaleX(1);
		}
		&-in-hide{
			transform: scaleX(0);
		}
		&-header{
			width: $cts-screen-full;
			height: 90rpx;
			background-color: $cts-all-white;
		}
		&-body{
			width: $cts-screen-full;
		}
		&-item-normal{
			padding: 0 $cts-basic-padding 0 $cts-basic-padding;
			height: 70rpx;
			position: relative;
		}
		&-item-swiper{
			width: 100rpx;
			height: 70rpx;
			position: relative;
		}
		&-item-indicator-normal{
			width: 30rpx;
			height: 4rpx;
			background-color:$cts-main-brown;
			border-radius: $cts-middle-padding;
		}
		&-item-indicator-swiper{
			width: 30rpx;
			height: 4rpx;
			background-color: $cts-main-brown;
			position: absolute;
			left: 35rpx;
			bottom: 0;
			border-radius: $cts-middle-padding;
		}
		&-item{
			width: 184rpx;
			position: relative;
			height: 90rpx;
		}
		&-item-indicator{
			position: absolute;
			left: 72rpx;
			bottom: 5rpx;
			width: 40rpx;
			border-radius: $cts-basic-padding;
			height: 4rpx;
			background-color: $cts-main-brown;
		}
		&-txt{
			font-size: $cts-basic-font;
		}
		&-txt-active{
			color:$cts-main-brown;
		}
		&-txt-mute{
			color:$cts-dark-brown;
		}
	}
</style>
