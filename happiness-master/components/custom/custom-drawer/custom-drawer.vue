<template>
	<view class="cts-drawer cts-flex-ac">
		<view class="cts-drawer-header cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac" @tap="extend">
			<view class="cts-drawer-header-box cts-flex-dir cts-flex-jfs cts-flex-ac" >
				<image class="cts-drawer-header-img" :src="icon" mode="aspectFit"></image>
				<text class="cts-drawer-header-txt">{{title}}</text>
			</view>
			<image v-if="group.length>0" class="cts-transition-ro" :class="[flat?'cts-drawer-header-arrow-up':'cts-drawer-header-arrow-down']" src="/static/triangle_g.png" mode="aspectFit"></image>
		</view>
		<view class="cts-drawer-container cts-transition-swell" ref="container" :style="{height:origin_height+'rpx'}">
			<view class="cts-drawer-item cts-flex-jc cts-flex-afs cts-basic-horizontal-padding" v-for="(item,index) in group" :key="index+'qs'"
			:class="[index!=group.length-1?'cts-border-bottom-solid-bt':'']">
				<text class="cts-drawer-item-txt">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import ctr from '@/static/js/container.js'
	
	const animation = weex.requireModule('animation')
	export default {
		data() {
			return {
				origin_height:uni.upx2px(0),
				flat:false,
				total_height:0,
				ele:null,
				platform:null
			};
		},
		props:['group','title','icon'],
		mounted() {
			let height = this.group.length*100;
			this.total_height = uni.upx2px(height)
			this.ele = ctr.getBindingEle(this.$refs.container)
			this.platform =this.$store.state.common.platform
		},
		methods:{
			extend(){
				this.flat=!this.flat;
				if(this.flat){
					animation.transition(this.ele, {
					styles: {
						height:this.total_height+'px'
					},
					duration: this.platform=='ios'?250:0, //ms
					timingFunction: 'cubic-bezier(0.22, 0.74, 0.03, 0.99)',
					needLayout:true,
					delay: 0 //ms
					}, function () {
						
					})
				}
				else{
					animation.transition(this.ele, {
					styles: {
						height:this.origin_height+'px'
					},
					duration: this.platform=='ios'?250:0, //ms
					timingFunction: 'cubic-bezier(0.22, 0.74, 0.03, 0.99)',
					needLayout:true,
					delay: 0 //ms
					}, function () {
						
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(ro,transform,0.25s,$cts-normal-time-function,null,null)
	@include createBorder(bt,bottom,$cts-soso-grey,solid,1px)
	$width:710rpx;
	.cts-drawer{
		margin-top: $cts-big-padding;
		width: $cts-screen-full;
		&-header{
			width: $width;
			height: 100rpx;
			border-radius: $cts-basic-padding;
			background-color: $cts-all-white;
		}
		&-header-box{
			width: 650rpx;
		}
		&-header-img{
			width: 60rpx;
			height: 60rpx;
			background-color: $cts-soso-grey;
			border-radius: 50%;
			margin-right: $cts-basic-padding;
		}
		&-header-txt{
			font-size: $cts-soso-font;
			font-weight: 700;
			color: $cts-deep-dark;
		}
		&-header-arrow-up{
			width: 30rpx;
			height: 30rpx;
			transform: rotate(180deg);
		}
		&-header-arrow-down{
			width: 30rpx;
			height: 30rpx;
			transform: rotate(0deg);
		}
		&-container{
			height: 0rpx;
			overflow: hidden;
			margin-top: $cts-basic-padding;
			width: $width;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		&-item{
			width: $width;
			height: 100rpx;
		}
		&-item-txt{
			lines:1;
			text-overflow: ellipsis;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
	}
</style>
