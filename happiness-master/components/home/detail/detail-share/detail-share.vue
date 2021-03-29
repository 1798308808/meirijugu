<template>
	<view class="cts-detail-share cts-flex-jfe cst-flex-ac" :style="{height:no?'300rpx':''}">
		<template v-if="!no">
			<image class="cts-detail-close" src="/static/close_w.png" mode="aspectFit" @tap="closeThis"></image>
			<view class="cts-detail-top cts-flex-ac cts-flex-jfs">
				<view class="cts-empty-column"></view>
				<view class="cts-detail-share-card">
					<image class="cts-detail-thumb" src="/static/goods2.webp" mode="aspectFit"></image>
					<view class="cts-detail-title cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
						<image class="cts-detail-icon-s" src="/static/jd.png" mode="heightFix"></image>
						<text class="cts-detail-name cts-text-overflow-1">飞科剃须刀电动男士刮胡刀充电水洗多功能男士刮胡刀充电水洗多功能</text>
					</view>
					<view class="cts-detail-desc cts-basic-horizontal-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
						<view class="cts-flex-dir cts-flex-afe cts-flex-jfs">
							<text class="cts-detail-desc-a">￥99.90</text>
							<text class="cts-detail-desc-b">券后</text>
							<text class="cts-detail-desc-c">原价</text>
							<text class="cts-detail-desc-d">189.90</text>
						</view>
						<view class="cts-detail-discount-box cts-padding-dc  cts-flex-ac cts-flex-jc cts-border-bottom-solid-half-b  cts-border-left-solid-half-l cts-border-top-solid-half-t">
							<text class="cts-detail-discount-box-txt">￥90&nbsp;&nbsp;券</text>
							<view class="cts-detail-discount-line"></view>
							<view class="cts-detail-discount-middle-line"></view>
							<view class="cts-detail-discount-circle cts-border-right-solid-half-cover cts-border-bottom-solid-half-b cts-border-left-solid-half-l cts-border-top-solid-half-t"></view>
						</view>
					</view>
					<view class="cts-detail-ecode cts-basic-horizontal-padding cts-flex-dir cts-flex-ac cts-flex-jsb">
						<view class="cts-flex-dir">
							<image class="cts-detail-ecode-icon" src="" mode="aspectFit"></image>
							<view class="cts-flex-afs cts-flex-jc">
								<text class="cts-detail-ecode-name">每日聚财</text>
								<text class="cts-detail-ecode-desc">自购生,分享唐</text>
							</view>
						</view>
						<image class="cts-detail-ecode-qr" src="" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="cts-empty-column"></view>
		</template>
		<view class="cts-detail-bottom cts-flex-ac cts-flex-jsb cts-basic-full-padding">
			<text class="cts-detail-title">分享到</text>
			<view class="cts-detail-box cts-flex-dir cts-flex-jc cts-flex-ac">
				<view class="cts-detail-item cts-flex-ac cts-flex-jc" @tap="shareOptions(0)">
					<image class="cts-detail-icon" src="/static/wx.png" mode="aspectFit"></image>
					<text class="cts-detail-txt">微信</text>
				</view>
				<view class="cts-detail-item cts-flex-ac cts-flex-jc" @tap="shareOptions(1)">
					<image class="cts-detail-icon" src="/static/fc.png" mode="aspectFit"></image>
					<text class="cts-detail-txt">朋友圈</text>
				</view>
				<view class="cts-detail-item cts-flex-ac cts-flex-jc" @tap="shareOptions(2)">
					<image class="cts-detail-icon" src="/static/qq.png" mode="aspectFit"></image>
					<text class="cts-detail-txt">QQ</text>
				</view>
				<view class="cts-detail-item cts-flex-ac cts-flex-jc" @tap="shareOptions(3)">
					<image class="cts-detail-icon" src="/static/dwld.png" mode="aspectFit"></image>
					<text class="cts-detail-txt">保存图片</text>
				</view>
			</view>
		</view>
		<view class="white" v-if="platform=='ios'">
			<view class="cts-empty-column"></view>
			<view class="cts-empty-column"></view>
			<view class="cts-empty-column"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				platform:''
			};
		},
		created() {
			this.platform = this.$store.state.common.platform;
		},
		methods:{
			// 分享选项
			shareOptions(index){
				this.$emit('returnSelectedOptions',index)
			},
			// 关闭遮罩
			closeThis(){
				this.$emit('returnClosePopup')
			}
		},
		props:['no']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(dc,$cts-min-padding,$cts-middle-padding,null,null)
	@include createPadding(rd,$cts-min-padding,$cts-min-padding,null,null)
	@include createBorder('half-l',left,$cts-gradient-light-red,solid,2rpx)
	@include createBorder('half-r',right,$cts-gradient-light-red,solid,2rpx)
	@include createBorder('half-t',top,$cts-gradient-light-red,solid,2rpx)
	@include createBorder('half-cover',right,$cts-all-white,solid,2rpx)
	@include createBorder('half-b',bottom,$cts-gradient-light-red,solid,2rpx)
	.white{
		background-color: $cts-all-white;
	}
	.cts-detail{
		&-close{
			align-self: flex-end;
			margin-bottom: $cts-basic-padding;
			margin-right: $cts-basic-padding;
			width: 50rpx;
			height: 50rpx;
		}
		&-ecode{
			width: 500rpx;
			height: 180rpx;
			&-icon{
				width: 100rpx;
				height: 100rpx;
				background-color: $cts-soso-grey;
				margin-right: $cts-basic-padding;
			}
			&-name{
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
			&-desc{
				margin-top: $cts-middle-padding;
				font-size: $cts-middle-font;
				color: $cts-main-brown;
			}
			&-qr{
				width: 150rpx;
				height: 150rpx;
				background-color: $cts-soso-grey;
			}
		}
		&-discount-box{
			overflow: hidden;
			border-radius: $cts-min-padding;
			height: 35rpx;
			position: relative;
			background-image: linear-gradient(to right,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-discount-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-gradient-light-red;
			position: absolute;
			top: 0;
			right: 0rpx;
		}
		&-discount-middle-line{
			height: 35rpx;
			width: 2rpx;
			background-color: $cts-gradient-light-red;
			position: absolute;
			top: 0;
			right: 40rpx;
		}
		&-discount-circle{
			height: 20rpx;
			width: 20rpx;
			position: absolute;
			background-color: $cts-all-white;
			top: 7.5rpx;
			right: -14rpx;
			border-radius: 50%;
		}
		&-discount-box-txt{
			font-size: $cts-middle-font;
			color: $cts-all-white;
		}
		&-desc{
			width: 500rpx;
			&-a{
				font-size: $cts-soso-font;
				color: $cts-alert-red;
			}
			&-b{
				font-size: $cts-middle-font;
				color: $cts-alert-red;
			}
			&-c{
				margin-left: $cts-basic-padding;
				font-size: $cts-middle-font;
				color: $cts-light-dark;
			}
			&-d{
				font-size: $cts-middle-font;
				text-decoration: line-through;
				color: $cts-light-dark;
			}
		}
		&-title{
			height: 80rpx;
		}
		&-icon-s{
			height: 25rpx;
		}
		&-name{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			width: 420rpx;
		}
		&-thumb{
			width: 500rpx;
			height: 500rpx;
			background-color: $cts-soso-grey;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
		}
		&-icon{
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			margin-bottom: $cts-basic-padding;
		}
		&-txt{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
		&-share{
			width: $cts-screen-full;
			height: 1200rpx;	
		}
		&-share-card{
			width: 500rpx;
			background-color: $cts-all-white;
			border-radius: $cts-basic-padding;
		}
		&-top{
			width: $cts-screen-full;
			height: 850rpx;
			position: relative;
		}
		&-bottom{
			width: $cts-screen-full;
			height: 250rpx;
			background-color: $cts-all-white;
			border-top-left-radius: $cts-big-padding;
			border-top-right-radius: $cts-big-padding;
		}
		&-title{
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
		}
		&-item{
			height: 150rpx;
			flex:1;
		}
		&-box{
			height: 150rpx;
			width: 710rpx;
		}
	}
</style>
