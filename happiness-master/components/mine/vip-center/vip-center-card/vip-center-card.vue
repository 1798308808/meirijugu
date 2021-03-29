<template>
	<view class="cts-vip-card cts-flex-jc cts-flex-afs cts-padding-vip">
		<image class="cts-vip-bg" :src="bg" mode="aspectFit"></image>
		<view class="cts-vip-name">
			<text :class="[`cts-vip-name-main-${type}`]">{{current_level_name}}</text>
			<text :class="[`cts-vip-name-desc-${type}`]">{{greetings}}</text>
		</view>
		<view class="cts-vip-detail" v-if="!finish">
			<text :class="[`cts-vip-detail-main-${type}`]">经验值：{{current_exp}}/{{total_exp}}</text>
			<view v-if="current">
				<view :class="[`cts-vip-detail-exp-${type}`]">
					<view :class="[`cts-vip-detail-exp-bar-${type}`]" :style="{width:bar_width+'px'}"></view>
				</view>
				<view class=" cts-flex-dir cts-flex-jsb cts-flex-ac" :class="[`cts-vip-detail-level-${type}`]">
					<text :class="[`cts-vip-detail-level-ex-${type}`]">{{current_level_name}}</text>
					<text :class="[`cts-vip-detail-level-ns-${type}`]">{{next_level_name}}</text>
				</view>
			</view>
			<text v-else :class="[`cts-vip-name-desc-${type}`]">还需{{total_exp-current_exp}}经验</text>
		</view>
		<view class="cts-vip-detail cts-flex-dir cts-flex-jfs cts-flex-ac" v-else>
			<image class="cts-vip-medal" :src="`/static/vip_medal_${type}.png`" mode="aspectFit"></image>
			<view class="cts-vip-medal-box cts-flex cts-flex-afs cts-flex-jc">
				<text :class="[`cts-vip-medal-title-${type}`]">已达成该等级</text>
				<text :class="[`cts-vip-medal-desc-${type}`]">需要{{total_exp}}经验值</text>
			</view>
		</view>
		<view class="cts-current-level cts-padding-cr" v-if="current">
			<text class="cts-current-level-txt">当前等级</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bar_width:0
			};
		},
		mounted() {
			if(this.finish)return;
			this.bar_width = this.total_exp=='max'?uni.upx2px(300): this.current_exp / this.total_exp * uni.upx2px(300)
		},
		props:['current_level_name','current','greetings','total_exp','current_exp','next_level_name','require','bg','type','finish']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(vip,$cts-big-padding,$cts-big-padding,null,null)
	@include createPadding(cr,$cts-basic-padding,$cts-basic-padding,$cts-min-padding,$cts-min-padding)
	
	$cts-vip-dark-golden:#785629;
	$cts-vip-narrow-golden:#A68457;
	$cts-vip-exp-bg-golden:#d0b99b;
	
	$cts-vip-dark-silvery:#374B68;
	$cts-vip-narrow-silvery:#5D6C7E;
	$cts-vip-exp-bg-silvery:#9bc0d0;
	
	$cts-vip-dark-diamond:#27505D;
	$cts-vip-narrow-diamond:#627A80;
	$cts-vip-exp-bg-diamond:#9bc0d0;
	
	$cts-vip-dark-monarch:#F4D49D;
	$cts-vip-narrow-monarch:#AFA69B;
	$cts-vip-exp-bg-monarch:#686868;
	.cts-vip{
		&-medal{
			width: 60rpx;
			height: 60rpx;
			
			&-box{
				margin-left: $cts-basic-padding;
			}
			
			&-title-golden{
				font-size: $cts-basic-font;
				color: $cts-vip-dark-golden;
				margin-bottom: $cts-middle-padding;
			}
			&-desc-golden{
				font-size: $cts-middle-font;
				color: $cts-vip-narrow-golden;
			}
			
			&-title-silvery{
				font-size: $cts-basic-font;
				color: $cts-vip-dark-silvery;
				margin-bottom: $cts-middle-padding;
			}
			&-desc-silvery{
				font-size: $cts-middle-font;
				color: $cts-vip-narrow-silvery;
			}
			
			&-title-diamond{
				font-size: $cts-basic-font;
				color: $cts-vip-dark-diamond;
				margin-bottom: $cts-middle-padding;
			}
			&-desc-diamond{
				font-size: $cts-middle-font;
				color: $cts-vip-narrow-diamond;
			}
			
			&-title-monarch{
				font-size: $cts-basic-font;
				color: $cts-vip-dark-monarch;
				margin-bottom: $cts-middle-padding;
			}
			&-desc-monarch{
				font-size: $cts-middle-font;
				color: $cts-vip-narrow-monarch;
			}
		}
		&-card{
			overflow: hidden;
			width: 680rpx;
			height: 293rpx;
			position: relative;
		}
		
		&-bg{
			width: 680rpx;
			height: 293rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-name{
			margin-bottom: $cts-big-padding;
		}
		
		// 黄金
		&-name-main-golden{
			color: $cts-vip-dark-golden;
			font-size: $cts-soso-font;
		}
		&-name-desc-golden{
			margin-top: $cts-middle-padding;
			color: $cts-vip-narrow-golden;
			font-size: $cts-middle-font;
		}

		&-detail-main-golden{
			color: $cts-vip-dark-golden;
			font-size: $cts-middle-font;
		}
		&-detail-exp-golden{
			width: 300rpx;
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-exp-bg-golden;
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
		}
		&-detail-exp-bar-golden{
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-narrow-golden;
		}
		&-detail-level-golden{
			width: 300rpx;
		}
		&-detail-level-ex-golden{
			font-size: $cts-min-font;
			color: $cts-vip-dark-golden;
		}
		&-detail-level-ns-golden{
			font-size: $cts-min-font;
			color: $cts-vip-dark-golden;
		}
		
		// 铂金
		&-name-main-silvery{
			color: $cts-vip-dark-silvery;
			font-size: $cts-soso-font;
		}
		&-name-desc-silvery{
			margin-top: $cts-middle-padding;
			color: $cts-vip-narrow-silvery;
			font-size: $cts-middle-font;
		}
		
		&-detail-main-silvery{
			color: $cts-vip-dark-silvery;
			font-size: $cts-middle-font;
		}
		&-detail-exp-silvery{
			width: 300rpx;
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-exp-bg-silvery;
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
		}
		&-detail-exp-bar-silvery{
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-narrow-silvery;
		}
		&-detail-level-silvery{
			width: 300rpx;
		}
		&-detail-level-ex-silvery{
			font-size: $cts-min-font;
			color: $cts-vip-dark-silvery;
		}
		&-detail-level-ns-silvery{
			font-size: $cts-min-font;
			color: $cts-vip-dark-silvery;
		}
		// 钻石
		&-name-main-diamond{
			color: $cts-vip-dark-diamond;
			font-size: $cts-soso-font;
		}
		&-name-desc-diamond{
			margin-top: $cts-middle-padding;
			color: $cts-vip-narrow-diamond;
			font-size: $cts-middle-font;
		}
		
		&-detail-main-diamond{
			color: $cts-vip-dark-diamond;
			font-size: $cts-middle-font;
		}
		&-detail-exp-diamond{
			width: 300rpx;
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-exp-bg-diamond;
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
		}
		&-detail-exp-bar-diamond{
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-narrow-diamond;
		}
		&-detail-level-diamond{
			width: 300rpx;
		}
		&-detail-level-ex-diamond{
			font-size: $cts-min-font;
			color: $cts-vip-dark-diamond;
		}
		&-detail-level-ns-diamond{
			font-size: $cts-min-font;
			color: $cts-vip-dark-diamond;
		}
		// 至尊
		&-name-main-monarch{
			color: $cts-vip-dark-monarch;
			font-size: $cts-soso-font;
		}
		&-name-desc-monarch{
			margin-top: $cts-middle-padding;
			color: $cts-vip-narrow-monarch;
			font-size: $cts-middle-font;
		}
		
		&-detail-main-monarch{
			color: $cts-vip-dark-monarch;
			font-size: $cts-middle-font;
		}
		&-detail-exp-monarch{
			width: 300rpx;
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-exp-bg-monarch;
			margin-top: $cts-middle-padding;
			margin-bottom: $cts-middle-padding;
		}
		&-detail-exp-bar-monarch{
			height: 10rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-vip-narrow-monarch;
		}
		&-detail-level-monarch{
			width: 300rpx;
		}
		&-detail-level-ex-monarch{
			font-size: $cts-min-font;
			color: $cts-vip-dark-monarch;
		}
		&-detail-level-ns-monarch{
			font-size: $cts-min-font;
			color: $cts-vip-dark-monarch;
		}
	}
	.cts-current-level{
		position: absolute;
		left: 0;
		top: 0;
		background-color: $cts-dark-brown;
		border-bottom-right-radius: $cts-basic-padding;
		border-top-left-radius: $cts-basic-padding;
		
		&-txt{
			color: $cts-light-golden;
			font-size: $cts-middle-font;
		}
	}
</style>
