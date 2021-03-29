<template>
	<scroller class="cts-free cts-padding-ios" :style="{height:h+'px'}">
		<image class="cts-free-bg" src="/static/free_rules.png" mode="widthFix"></image>
		<image class="cts-free-close" src="/static/close_w.png" mode="aspectFit" :style="{top:t+'px'}" @tap="close"></image>
		<view class="cts-free-empty"></view>
		<view class="cts-free-section cts-padding-sec">
			<view class="cts-free-container cts-padding-con">
				<rich-text class="cts-free-rich" :nodes="text1"></rich-text>
			</view>
			<view class="cts-free-title cts-flex-jc cts-flex-ac">
				<image class="cts-free-title-bg" src="/static/rules.png" mode="heightFix"></image>
				<text class="cts-free-title-txt">活动规则</text>
			</view>
		</view><view class="cts-free-section cts-padding-sec">
			<view class="cts-free-container cts-padding-con">
				<rich-text class="cts-free-rich" :nodes="text2"></rich-text>
			</view>
			<view class="cts-free-title cts-flex-jc cts-flex-ac">
				<image class="cts-free-title-bg" src="/static/rules.png" mode="heightFix"></image>
				<text class="cts-free-title-txt">注意事项</text>
			</view>
		</view>
	</scroller>
</template>

<script>
	import htmlParser from '@/static/js/html-parser'
	
	export default {
		data() {
			return {
				h:'',
				t:'',
				text1:'<p class="cts-free-inner">活动对象：黑猫乐购APP首单用户；<br/><br/>在当前0元购活动中，同一用户仅可限购1件商品，不可重复享有二次优惠。</p>',
				text2:'<p class="cts-free-inner">该活动的商品均来源于淘宝天猫，需用户的手机安装淘宝APP的情况下才可领取优惠券进行购买，同时用户如未进行淘宝授权，需要先进行淘宝授权；<br/><br/>活动页标志的商品原价选取的是该商品的最低价格，如果用户选择同一个商品的不同规格导致价格不一致，仍然能享有活动页标志的返利金额。(即活动页该商品标志原价19元，优惠券10元，首单返9元，如果用户购买了该商品的其他规格价格为29元，最终返现仍然为9元)；&#10;&#10;本次活动订单返利金额以当前活动页面的为准，付款后15分钟内个人中心会显示订单，在淘宝确认收货之后补贴金额到账。<br/><br/>该活动页的0元购商品禁止使用积分、集分宝、金币下单或者通过第三方软件转链下单付款，否则无法获得返利。</p>'
			};
		},
		methods:{
			close(){
				this.$emit('returnClose',{msg:'ok'})
			}
		},
		mounted() {
			this.text1 = htmlParser(this.text1)
			this.text2 = htmlParser(this.text2)
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
			this.h = s
			this.t = st;
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(ios,null,null,null,80rpx)
	@include createPadding(sec,40rpx,40rpx,80rpx,null)
	@include createPadding(con,40rpx,40rpx,80rpx,60rpx)
	.cts-free{
		width: $cts-screen-full;
		background-color:#FF5454;
		position: relative;
		&-rich{
			background-color: rgba(0,0,0,0);
		}
		&-inner{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-title{
			width: 250rpx;
			height: 80rpx;
			position: absolute;
			left: $cts-basic-padding + $cts-middle-padding;
			top: 70rpx;
		}
		&-title-bg{
			width: 250rpx;
			height: 80rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
		&-title-txt{
			transform: translateX(-$cts-middle-padding) translateY(-$cts-middle-padding);
			font-size: $cts-soso-font;
			color: $cts-gradient-light-golden;
		}
		&-section{
			position: relative;
			width: $cts-screen-full;
			margin-bottom: $cts-basic-padding;
		}
		&-container{
			border-radius: $cts-basic-padding;
			background-color: $cts-gradient-fade-red;
			width: 670rpx;
		}
		&-empty{
			width: 200rpx;
			height: 400rpx;
		}
		&-bg{
			position: absolute;
			left: 0;
			top: 0;
			width: $cts-screen-full;
		}
		&-close{
			position: absolute;
			right: $cts-basic-padding*2;
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>
