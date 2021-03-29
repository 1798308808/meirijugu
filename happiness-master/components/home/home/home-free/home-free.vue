<template>
	<view class="cts-free cts-basic-horizontal-padding">
		<custom-pic-loading class="cts-free-bg" :img="bg"></custom-pic-loading>
		<view class="cts-free-box">
			<view class="cts-free-header"></view>
			<view class="cts-free-body cts-basic-full-padding cts-flex-jc cts-flex-ac">
				<scroller class="cts-free-scroll cts-flex-dir" scroll-direction="horizontal" v-if="group.length>0">
					<view class="cts-free-item" v-for="(item,index) in group" :key="item.id" @tap="check(item.id)">
						<custom-pic-loading class="cts-free-item-thumb" :img="item.thumb"></custom-pic-loading>
						<text class="cts-free-discount cts-padding-dis">省{{(Number(item.d_price) - Number(item.price)).toFixed(2)}}</text>
						<view class=" cts-free-item-detail cts-padding-detail cts-flex-jc">
							<text class="cts-free-item-title cts-text-overflow-1">{{item.title}}</text>
							<view class="cts-flex-dir cts-flex-afe">
								<text class="cts-free-item-dprice">￥{{item.price}}</text>
								<text class="cts-free-item-price">￥{{item.d_price}}</text>
							</view>
						</view>
					</view>
					<view class="cts-free-more cts-flex-jc cts-flex-ac" @tap="more">
						<text class="cts-free-more-txt">查看更多</text>
					</view>
				</scroller>
				<template v-else>
					<custom-elements-loading bg="transparent"></custom-elements-loading>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			more(){
				this.$emit('returnMore')
			},
			check(id){
				this.$emit('returnGoodsCheck',id)
			}
		},
		props:['bg','group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(dis,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createPadding(detail,$cts-middle-padding,$cts-middle-padding,null,null)
	$bw:710rpx;
	.cts-free{
		width: $cts-screen-full;
		position: relative;
		background-color: $cts-all-white;
		&-discount{
			position: absolute;
			left: 0;
			top: 205rpx;
			font-size: $cts-middle-font;
			color: $cts-main-brown;
			background-image: linear-gradient(to right, $cts-gradient-light-golden, $cts-gradient-dark-golden);
			border-top-right-radius: $cts-middle-padding;
			border-bottom-right-radius: $cts-middle-padding;
		}
		&-bg{
			position: absolute;
			left: $cts-basic-padding;
			top: 0;
			width: 710rpx;
			height: 580rpx;
		}
		&-scroll{
			width: 670rpx;
			height: 360rpx;
		}
		&-box{
			width:$bw;
		}
		&-header{
			width:$bw;
			height: 180rpx;
		}
		&-body{
			width:$bw;
			height: 400rpx;
		}
		&-item{
			width: 240rpx;
			height: 360rpx;
			background-color: $cts-all-white;
			margin-right: $cts-basic-padding;
			position: relative;
			&-detail{
				width: 240rpx;
				height:120rpx;
				overflow: hidden;
			}
			&-thumb{
				width: 240rpx;
				height:240rpx;
			}
			&-title{
				width: 220rpx;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
				margin-bottom: $cts-middle-padding;
			}
			&-dprice{
				font-size: $cts-soso-font;
				font-weight: 700;
				color: $cts-dark-brown;
			}
			&-price{
				margin-left: $cts-middle-padding;
				font-size: $cts-middle-font;
				color: $cts-light-dark;
				text-decoration: line-through;
			}
		}
		&-more{
			width: 240rpx;
			height: 360rpx;
			background-color: rgba(255,255,255,.4);
			&-txt{
				font-size: $cts-basic-font;
				font-weight: 700;
				color: $cts-gradient-light-golden;
			}
		}
	}
</style>
