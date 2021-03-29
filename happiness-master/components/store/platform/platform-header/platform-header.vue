<template>
	<view class="cts-platform">
		<view class="cts-platform-bg" :class="[`color-${info.type}`]"></view>
		<view class="cts-platform-head cts-padding-head cts-flex-ac">
			<view class="cts-platform-empty" :style="{height:h+'px'}"></view>
			<view class="cts-platform-title cts-flex-ac cts-flex-jc">
				<view class="cts-flex-dir cts-flex-jc cts-flex-ac" v-if="info.type==1">
					<image class="cts-platform-logo" src="/static/tb_h.png" mode="heightFix" :style="{height:n+'px'}"></image>
					<image class="cts-platform-logo" src="/static/tm_h.png" mode="heightFix" :style="{height:n+'px'}"></image>
				</view>
				<view class="cts-flex-dir cts-flex-jc cts-flex-ac" v-else-if="info.type==2">
					<image class="cts-platform-logo" src="/static/jd_h.png" mode="heightFix" :style="{height:n+'px'}"></image>
				</view>
				<view class="cts-flex-dir cts-flex-jc cts-flex-ac" v-else-if="info.type==3">
					<image class="cts-platform-logo" src="/static/pdd_h.png" mode="heightFix" :style="{height:n+'px'}"></image>
				</view>
				<view class="cts-flex-dir cts-flex-jc cts-flex-ac" v-else>
					<image class="cts-platform-logo" src="/static/wph_h.png" mode="heightFix" :style="{height:n+'px'}"></image>
				</view>
				<text class="cts-platform-desc">购物先上每日聚福 领券拿返现更省钱</text>
			</view>
			<view class="cts-platform-search cts-padding-search cts-flex-dir cts-flex-jsb cts-flex-ac">
				<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
					<image class="cts-platform-search-icon" src="/static/search_g.png" mode="aspectFit"></image>
					<text class="cts-platform-search-plac cts-text-overflow-1">搜索各大平台优惠</text>
				</view>
				<text class="cts-platform-search-btn cts-padding-btn" :class="[`color-${info.type}`]">搜优惠</text>
			</view>
			<view class="cts-platform-inst cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-platform-inst-txt" v-if="info.type==1">①复制淘宝商品链接</text>
				<text class="cts-platform-inst-txt" v-else-if="info.type==2">①复制京东商品链接</text>
				<text class="cts-platform-inst-txt"  v-else-if="info.type==3">①复制拼多多商品链接</text>
				<text class="cts-platform-inst-txt" v-else>①复制唯品会商品链接</text>
				<text class="cts-platform-inst-txt">②打开每日聚福</text>
				<view class="cts-platform-inst-btn cts-padding-ltn cts-flex-ac cts-flex-jc cts-flex-dir">
					<text class="cts-platform-inst-btn-txt">省钱攻略</text>
					<image class="cts-platform-inst-btn-icon" src="/static/arrow_w.png" mode="aspectFit"></image>
				</view>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				n:''
			};
		},
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.h =st;
			this.n = n*0.5;
		},
		props:['info']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(head,null,null,null,$cts-basic-padding)
	@include createPadding(search,$cts-middle-padding,$cts-middle-padding,null,null)
	@include createPadding(btn,$cts-basic-padding*2,$cts-basic-padding*2,null,null)
	@include createPadding(ltn,$cts-basic-padding,$cts-middle-padding,null,null)
	.color{
		&-1{
			background-image: linear-gradient(to right,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-2{
			background-image: linear-gradient(to right,$cts-gradient-dark-red,$cts-platform-jd);
		}
		&-3{
			background-color:$cts-platform-pdd;
		}
		&-4{
			background-color:$cts-platform-wph;
		}
	}
	.cts-platform{
		position: relative;
		width: $cts-screen-full;
		&-empty{
			width: $cts-screen-full;
		}
		&-bg{
			width: $cts-screen-full*1.6;
			height: $cts-screen-full*1.4;
			border-radius: $cts-screen-full*1.4;
			position: absolute;
			left: -$cts-screen-full*0.3;
			top: -$cts-screen-full*0.7;
		}
		&-head{
			width: $cts-screen-full;
		}
		&-desc{
			margin-top: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-all-white;
		}
		&-logo{
			margin-left: $cts-middle-padding;
			margin-right: $cts-middle-padding;
			margin-top: $cts-basic-padding+$cts-middle-padding;
		}
		&-search{
			margin-top: $cts-basic-padding*1.5;
			width: 710rpx;
			height: 80rpx;
			border-radius: 50%;
			background-color: $cts-all-white;
			&-icon{
				width: 35rpx;
				height: 35rpx;
			}
			&-plac{
				max-width: 430rpx;
				margin-left: $cts-middle-padding;
				font-size: $cts-basic-font;
				color: $cts-light-dark;
			}
			&-btn{
				height: 60rpx;
				border-radius: 50%;
				line-height: 60rpx;
				text-align: center;
				color: $cts-all-white;
			}
		}
		&-inst{
			margin-top: $cts-basic-padding;
			width: 710rpx;
			&-txt{
				color: $cts-all-white;
				font-size: $cts-basic-font;
			}
			&-btn{
				background-color: $cts-all-white;
				border-radius: 50%;
				&-txt{
					color: $cts-platform-jd;
					font-weight: 700;
					font-size: $cts-basic-font;
				}
				&-icon{
					margin-left: $cts-min-padding;
					width: 20rpx;
					height: 20rpx;
				}
			}
		}
	}
</style>
