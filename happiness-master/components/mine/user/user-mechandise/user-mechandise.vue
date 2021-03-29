<template>
	<view class="cts-user cts-basic-horizontal-padding">
		<view class="cts-user-box">
			<view class="cts-user-header cts-flex-dir cts-flex-jsb cts-flex-ac cts-basic-horizontal-padding">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<image class="cts-user-header-icon" src="/static/m3.png" mode="aspectFit"></image>
					<text class="cts-user-header-txt cts-text-overflow-1">9.9元包邮</text>
				</view>
				<view class="cts-flex-dir cts-flex-jfe cts-flex-ac" @tap="go">
					<text class="cts-user-header-more">全部</text>
					<image class="cts-user-header-go" src="/static/back.png" mode="aspectFit"></image>
				</view>
				
			</view>
			<view class="cts-user-goods cts-flex-ac cts-flex-jc cts-flex-dir">
				<custom-elements-loading bg="transparent" v-if="group.length==0"></custom-elements-loading>
				<view class="cts-user-goods-item cts-basic-vertical-padding cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="item.id" @tap="selectThis(item.id)">
					<custom-pic-loading class="cts-user-goods-thumb" :img="item.thumb"></custom-pic-loading>
					<view class="cts-empty-column"></view>
					<text class="cts-user-goods-title cts-text-overflow-1">{{item.title}}</text>
					<view class="cts-user-goods-price cts-flex-dir cts-flex-jfs ct-flex-ac">
						<text class="cts-user-goods-price-desc">到手价￥</text>
						<text class="cts-user-goods-price-val">{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			go(){
				this.$emit('returnMore')
			},
			selectThis(id){
				this.$emit('returnGoodsId',id)
			}
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	.cts-user{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		&-box{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		&-goods{
			background-color: $cts-all-white;
			width: 710rpx;
			min-height: 300rpx;
			&-item{
				flex: 1;
			}
			&-thumb{
				width: 220rpx;
				height: 220rpx;
				border-radius: $cts-middle-padding;
			}
			&-title{
				width: 220rpx;
				font-size: $cts-middle-font;
				color: $cts-dark-brown;
				margin-bottom: $cts-middle-padding;
			}
			&-price{
				width: 220rpx;
				&-desc{
					font-size:$cts-middle-font;
					color: $cts-main-brown;
				}
				&-val{
					font-size: $cts-middle-font;
					font-weight: 700;
					color: $cts-main-brown;
				}
			}
		}
		&-header{
			width:710rpx;
			height: 80rpx;
			&-more{
				font-size: $cts-middle-font;
				color: $cts-light-dark;
			}
			&-go{
				width: 25rpx;
				height: 25rpx;
				transform: rotate(180deg);
			}
			&-txt{
				text-align: left;
				line-height: 50rpx;
				height: 50rpx;
				font-size: $cts-basic-font;
				font-weight: 700;
				color: $cts-deep-dark;
			}
			&-icon{
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				margin-right: $cts-middle-padding;
			}
		}
	}
</style>
