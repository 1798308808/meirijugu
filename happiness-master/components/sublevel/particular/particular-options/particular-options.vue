<template>
	<view class="cts-part cts-basic-full-padding">
		<view class="cts-part-detail cts-flex-dir cts-flex-jfs cts-flex-ac cts-border-bottom-solid-btm">
			<image class="cts-part-detail-thumb" src="" mode="aspectFit"></image>
			<view class="cts-part-detail-desc cts-flex-jc cst-flex-afs">
				<text class="cts-part-detail-price">￥{{price}}</text>
				<view class="cts-empty-column"></view>
				<text class="cts-part-detail-opt">已选择: {{desc}}</text>
			</view>
		</view>
		<scroller scroll-direction="vertical" class="cts-part-options cts-basic-vertical-padding">
			<particular-opt-group :options="item.children" :title="item.title" v-for="(item,index) in options" :key="item.title"></particular-opt-group>
		</scroller>
		<view class="cts-part-btn cts-flex-dir cts-flex-jc cts-flex-ac">
			<custom-button :type="2" :colorType="2" :text="'加入购物车'"></custom-button>
			<view class="cts-empty-row"></view>
			<custom-button :type="2" :colorType="1" :text="'立刻购买'"></custom-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['price','desc','options']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(btm,bottom,$cts-light-grey,solid,1px)
	
	.cts-part{
		width: $cts-screen-full;
		height: 1000rpx;
		background-color: $cts-all-white;
		border-top-left-radius: $cts-basic-padding;
		border-top-right-radius: $cts-basic-padding;
		position: relative;
		&-options{
			width: 710rpx;
			height: 550rpx;
		}
		&-btn{
			width: 710rpx;
			height: 120rpx;
		}
		&-detail{
			width: 710rpx;
			height: 200rpx;
			&-thumb{
				background-color: $cts-soso-grey;
				border-radius: $cts-middle-padding;
				width: 150rpx;
				height: 150rpx;
				margin-right: $cts-basic-padding;
			}
				
			&-desc{
				height: 200rpx;
			}
			&-price{
				font-size: $cts-big-font;
				color: $cts-alert-red;
			}
			&-opt{
				font-size: $cts-basic-font;
				color: $cts-light-dark;
			}
		}
	}
</style>
