<template>
	<view>
		<view class="cts-class-title cts-flex-ac cts-flex-jc cts-flex-dir" v-if="!!title">
			<view class="cts-class-title-bar"></view>
			<view class="cts-empty-row"></view>
			<text class="cts-class-title-txt">{{title}}</text>
			<view class="cts-empty-row"></view>
			<view class="cts-class-title-bar"></view>
		</view>
		<view class="cts-class-item cts-flex-jsb cts-flex-ac cts-flex-dir cts-basic-horizontal-padding cts-border-bottom-solid-item">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
				<custom-pic-loading class="cts-class-item-icon" b_radius="-1" :img="item.icon"></custom-pic-loading>
				<view class="cts-empty-row"></view>
				<text class="cts-class-item-title">{{item.name}}</text>
			</view>
			<image class="cts-class-item-arrow" src="/static/back.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','item']
	}
</script>

<style lang="scss" scoped>
	@include createBorder('item',bottom,$cts-light-grey,solid,1px)
	.cts-class{
		&-title{
			height: $cts-basic-height;
			flex:1;
			&-txt{
				color:$cts-light-dark;
				font-size: $cts-middle-font;
				font-weight: 700;
			}
			&-bar{
				width: 100rpx;
				height: 1rpx;
				background: $cts-light-dark;
			}
		}
		&-item{
			background-color: $cts-all-white;
			height: $cts-basic-height*1.3;
			width: $cts-screen-full;
			&-icon{
				width: 90rpx;
				height: 90rpx;
			}
			&-title{
				font-size: $cts-basic-font;
				color: $cts-deep-dark;
			}
			&-arrow{
				width: 30rpx;
				height: 30rpx;
				transform: rotate(180deg);
			}
		}
	}
</style>
