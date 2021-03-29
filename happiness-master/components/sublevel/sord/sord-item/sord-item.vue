<template>
	<view class="cts-sord  cts-basic-horizontal-padding">
		<view class="cts-sord-container cts-basic-horizontal-padding">
			<view class="cts-sord-top cts-flex-dir cts-flex-jsb cts-flex-ac cts-border-bottom-solid-btm">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<image class="cts-sord-top-icon" src="/static/form.png" mode="aspectFit"></image>
					<text class="cts-sord-top-code">订单编号:{{code}}</text>
				</view>
				<text class="cts-sord-top-desc" :class="[type==2?'cts-sord-top-desc-red':'']">{{type | typeName}}</text>
			</view>
			<view class="cts-sord-middle cts-flex-dir cts-flex-jsb cts-flex-afs cts-basic-vertical-padding">
				<image class="cts-sord-thumb" :src="thumb" mode="aspectFit"></image>
				<view class="cts-sord-middle-detail cts-flex-jsb cts-flex-afs">
					<text class="cts-sord-title">{{name}}</text>
					<view class="cts-sord-middle-opt-box cts-flex-dir cts-flex-jfs cts-flex-afs cts-flex-wrap">
						<text class="cts-sord-middle-opt-item cts-padding-item" v-for="(item,index) in options" :key="index+'ort'">{{item}}</text>
					</view>
					<text class="cts-sord-price">￥{{price}}</text>
				</view>
			</view>
			<view v-if="type==1" class="cts-sord-bottom cts-basic-vertical-padding cts-flex-dir cts-flex-jfe cts-flex-ac">
				<custom-button :type="1" :text="'取消订单'" :size="'middle'"></custom-button>
				<view class="cts-empty-row"></view>
				<custom-button :type="1" :text="'查看物流'" :size="'middle'"></custom-button>
			</view>
			<view v-else-if="type==2" class="cts-sord-bottom cts-basic-vertical-padding cts-flex-dir cts-flex-jfe cts-flex-ac">
				<custom-button :type="1" :text="'取消订单'" :size="'middle'"></custom-button>
				<view class="cts-empty-row"></view>
				<custom-button :type="1" :colorType="1" :text="'去支付'" :size="'middle'"></custom-button>
			</view>
			<view v-else-if="type==3" class="cts-sord-bottom cts-basic-vertical-padding cts-flex-dir cts-flex-jfe cts-flex-ac">
				<custom-button :type="1" :text="'申请退款'" :size="'middle'"></custom-button>
				<view class="cts-empty-row"></view>
				<custom-button :type="1" :text="'查看物流'" :size="'middle'"></custom-button>
				<view class="cts-empty-row"></view>
				<custom-button :type="1" :colorType="1" :text="'确认收货'" :size="'middle'"></custom-button>
			</view>
			<view v-else-if="type==4" class="cts-sord-bottom cts-basic-vertical-padding cts-flex-dir cts-flex-jfe cts-flex-ac">
				<custom-button :type="1" :colorType="1" :text="'填写单号'" :size="'middle'"></custom-button>
			</view>
			<view v-else class="cts-sord-bottom cts-basic-vertical-padding cts-flex-dir cts-flex-jfe cts-flex-ac">
				<view class="cts-empty-column"></view>
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
		filters:{
			typeName:function(val){
				switch(val){
					case 1:return '待发货';
					case 2:return '待付款';
					case 3:return '待收货';
					case 4:return '退款中';
					default:return '已完成';
				}
			}
		},
		props:['type','name','thumb','options','code','price','id']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(btm,bottom,$cts-light-grey,solid,1px)
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.cts-sord{
		width: $cts-screen-full;
		&-title{
			line-height: 40rpx;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			lines:2;
			width: 450rpx;
			text-overflow: ellipsis;
		}
		&-container{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-middle-padding;
			margin-bottom: $cts-basic-padding;
		}
		&-top{
			height: 80rpx;
		}
		&-top-icon{
			width: 25rpx;
			height: 25rpx;
			margin-right: $cts-middle-padding;
		}
		&-top-code{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-top-desc{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
			&-red{
				font-size: $cts-middle-font;
				color: $cts-gradient-dark-red;
			}
		}
		&-middle{
			&-detail{
				width: 450rpx;
				min-height: 200rpx;
			}
			&-opt-box{
				margin-top: $cts-basic-padding;
				width: 450rpx;
			}
			&-opt-item{
				word-wrap: anywhere;
				max-width: 450rpx;
				font-size: $cts-middle-font;
				color: $cts-light-dark;
				background-color: $cts-light-grey;
				border-radius: $cts-min-padding;
				margin-right: $cts-middle-padding;
				margin-bottom: $cts-middle-padding;
			}
		}
		&-price{
			margin-top: $cts-basic-padding;
			text-align: right;
			font-weight: 700;
			font-size: $cts-basic-font;
			color: $cts-deep-dark;
		}
		&-thumb{
			width: 200rpx;
			height: 200rpx;
			background-color: $cts-soso-grey;
			border-radius: $cts-middle-padding;
		}
	}
</style>
