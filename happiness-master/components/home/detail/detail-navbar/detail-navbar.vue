<template>
	<view class="cts-detail cts-transition-nav" :class="[show?'cts-show':'cts-hide']">
		<view class="cts-detail-empty" :style="{height:h+'px'}"></view>
		<view class="cts-detail-navbar cts-basic-horizontal-padding cts-flex-jc cts-flex-ac cts-flex-dir">
			<image class="cts-detail-back" src="/static/back.png" mode="aspectFit" @tap="goBack"></image>
			<text class="cts-detail-item" :class="[current==index?'cts-detail-item-active':'',current==index?'cts-border-bottom-solid-btm':'']" 
			v-for="(item,index) in group" :key="item" @tap="select(index)">{{item}}</text>
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				h:'',
				current:0,
				group:['商品','详情','猜你喜欢'],
				show:false
			};
		},
		methods:{
			select(index){
				this.current = index;
				uni.$emit('navbar_tap',{index})
				
			},
			goBack(){
				uni.navigateBack()
			}
		},
		created() {
			this.h = this.$store.state.common.statusBarHeight;
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'show',this.show_f)
				if(this.current_f)com.updateComponentData(this,'current',this.current_f)
			},50)
		},
		watch:{
			show_f:function(val){
				com.updateComponentData(this,'show',val)
			},
			current_f:function(val){
				com.updateComponentData(this,'current',val)
			}
		},
		props:['show_f','current_f']
	}
</script>

<style lang="scss" scoped>
	@include  createBorder(btm,bottom,$cts-main-brown,solid,2px)
	@include createTransition(nav,transform,0.25s,$cts-normal-time-function,null,null)
	.cts-show{
		transform: translateY(0%);
	}
	.cts-hide{
		transform: translateY(-100%);
	}
	.cts-detail{
		width: $cts-screen-full;
		left: 0;
		top: 0;
		position: absolute;
		background-color: $cts-all-white;
		&-back{
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			left: $cts-basic-padding;
			top: 20rpx;
		}
		&-navbar{
			width: $cts-screen-full;
			height: 90rpx;
		}
		&-empty{
			width: $cts-screen-full;
		}
		&-item{
			height: 50rpx;
			margin-right: $cts-basic-padding;
			margin-left: $cts-basic-padding;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-item-active{
			color: $cts-main-brown!important;
		}
	}
</style>
