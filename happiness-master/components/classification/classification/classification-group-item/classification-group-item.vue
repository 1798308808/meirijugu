<template>
	<view class="cts-cl-group cts-flex-jc cts-flex-ac">
		<slot></slot>
		<view class="cts-cl-content cts-flex-dir cts-flex-jsb cts-flex-afs cts-flex-wrap">
			<view class="cts-cl-item cts-padding-box" v-for="(item,index) in group" :key="item.id" @tap="classification_tap(item)">
				<view class="cts-cl-box cts-flex-jc cts-flex-ac">
					<view class="cts-cl-bg cts-border-thumb"></view>
					<custom-pic-loading class="cts-cl-thumb cts-border-thumb" :b_radius="-1" :img="item.icon"></custom-pic-loading>
					<text class="cts-cl-main cts-text-overflow-1 cts-cl-max">{{item.name}}</text>
					<text class="cts-cl-sub cts-text-overflow-1 cts-cl-max">{{item.instructions}}</text>
					<text class="cts-cl-badge cts-border-badge cts-padding-badge cts-cl-max cts-text-overflow-1">{{item.discount}}</text>
				</view>
			</view>
			<view v-if="group.length%3!=0" class="cts-cl-empty"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['group'],
		methods:{
			classification_tap(data){
				uni.$emit('classification_tap',{item:data})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(thumb,solid,$cts-gradient-light-golden,0.5px)
	@include createFullBorder(badge,solid,$cts-all-white,1px)
	@include createPadding(box,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(badge,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	$width:520rpx;
	$i_width:168rpx;
	$b_width:148rpx;
	.cts-cl{
		&-max{
			max-width: 140rpx;
		}
		&-group{
			width: 550rpx;
		}
		&-content{
			width: $width;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
			overflow: hidden;
		}
		&-txt{
			width: $i_width;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
			margin-top: $cts-basic-padding;
			text-align: center;
			lines:1
		}
		&-item{
			width: $i_width;
			height: 240rpx;
			margin-bottom: $cts-basic-padding;
		}
		&-header-empty{
			height: 80rpx;
		}
		&-empty{
			width: $i_width;
			height: 240rpx;
			margin-bottom: $cts-basic-padding;
		}
		&-box{
			width: $b_width;
			height: 220rpx;
			position: relative;
			overflow: hidden;
		}
		&-thumb{
			width: 95rpx;
			height: 95rpx;
			border-radius: 50%;
			background-color: $cts-light-grey;
		}
		&-bg{
			background-color: $cts-gradient-barely-golden;
			width: $b_width;
			height: 140rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			border-radius: $cts-middle-padding;
		}
		&-main{
			margin-top: $cts-basic-padding;
			margin-bottom: $cts-middle-padding;
			font-size: $cts-little-font;
			color: $cts-deep-dark;
		}
		&-sub{
			font-size: $cts-min-font;
			color: $cts-light-dark;
		}
		&-badge{
			position: absolute;
			right: 0;
			top: $cts-middle-padding;
			font-size: $cts-min-font;
			background-image: linear-gradient(to right, $cts-gradient-light-red, $cts-gradient-dark-red);
			color: $cts-all-white;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			border-bottom-left-radius: $cts-min-padding;
			border-bottom-right-radius: $cts-basic-padding;
			overflow: hidden;
		}
	}
</style>
