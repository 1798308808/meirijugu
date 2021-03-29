<template>
	<view class='cts-user-info'>
		<view class="cts-user-info-empty" :style="{height:`${eh}px`}"></view>
		<view class="cts-user-info-box cts-basic-horizontal-padding">
			<view class="cts-user-info-desc cts-flex-dir cts-flex-ac cts-flex-jsb">
				<custom-pic-loading class="cts-user-info-avatar" :img="group[0].avatar" :b_radius="-1"></custom-pic-loading>
				<view v-if="login_state" class="cts-user-info-detail cts-flex-afs cts-flex-jsb">
					<view class="cts-user-info-detail-name cts-flex-ac cts-flex-jfs cts-flex-dir">
						<text class="cts-user-info-detail-name-txt">{{group[0].name}}</text>
						<image v-if="group[0].vip_level=='1'" class="cts-user-info-detail-name-icon" src="/static/vip_golden.png" mode="heightFix"></image>
						<image v-else-if="group[0].vip_level=='2'" class="cts-user-info-detail-name-icon" src="/static/vip_silvery.png" mode="heightFix"></image>
						<image v-else-if="group[0].vip_level=='3'" class="cts-user-info-detail-name-icon" src="/static/vip_diamond.png" mode="heightFix"></image>
						<image v-else class="cts-user-info-detail-name-icon" src="/static/vip_master.png" mode="heightFix"></image>
					</view>
					<view class="cts-user-info-detail-code cts-flex-jfs cts-flex-ac cts-flex-dir">
						<text class="cts-user-info-detail-code-txt">邀请码:{{group[0].code}}</text>
						<text class="cts-user-info-detail-code-copy cts-padding-cp cts-border-cl" @tap="copyCode">复制</text>
					</view>
					<view class="cts-user-info-detail-exp">
						<view class="cts-user-info-detail-exp-in" :style="{width:group[0].max?'250rpx':bar_width+'px'}"></view>
					</view>
					<text class="cts-user-info-detail-exp-num">经验值:{{group[0].max?'max':group[0].current_exp}}</text>
				</view>
				<text v-else class="cts-user-info-login" @tap="login">点击登录</text>
				<view @tap="login" class="cts-user-info-arrow cts-flex-ac cts-flex-jc">
					<image class="cts-user-info-arrow-img" src="/static/back.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="cts-user-info-money cts-flex-dir cts-flex-ac cts-flex-jsb cts-padding-mf" @tap="getRemain">
				<view class="cts-user-info-money-cover">
					<image class="cts-user-info-money-cover-img" src="/static/user_mony.png" mode="aspectFit"></image>
				</view>
				<template v-if="group[0].has_card=='N'">
					<text class="cts-user-info-card">聚福会员 开通即省1599/年</text>
					<text class="cts-user-info-card-btn cts-padding-mb">立即开通</text>
				</template>
				<template v-else>
					<view class="cts-user-info-money-rest cts-flex-jc cts-flex-afs">
						<text class="cts-user-info-money-rest-rest">余额</text>
						<text class="cts-user-info-money-rest-money">￥{{group[0].balance}}</text>
					</view>
					<text class="cts-user-info-money-btn cts-padding-mb">立即提现</text>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import {userPublicMixins} from '@/static/mixins/mine/user/user_public.js'
	export default {
		mixins:[userPublicMixins],
		data() {
			return {
				eh:'',
				bar_width:0,
				group:[{
					name:'',
					avatar:'',
					code:'',
					current_exp:0,
					total_exp:0,
					vip_level:1,
					balance:'0',
					today_income:0,
					month_income:0,
					last_month_income:0,
					credit:0,
					max:false
				}]
			};
		},
		props:['login_state'],
		watch:{
			group:{
				handler:function(val){
					if(!!val[0].total_exp){
						this.bar_width = val[0].current_exp / val[0].total_exp * uni.upx2px(250);
					}
				},
				deep:true
			}
		},
		methods:{
			login(){
				if(!!this.login_state){
					this.$emit('returnLoginState',{isLogin:true})
				}
				else{
					this.$emit('returnLoginState',{isLogin:false})
				}
			},
			getRemain(){
				this.$emit('returnRemain',this.group[0].has_card)
			},
			copyCode(){
				uni.setClipboardData({
				    data: this.group[0].code,
				    success: function () {
						uni.hideToast();
						plus.nativeUI.toast('邀请码已复制到剪贴板',{verticalAlign:'top'});
				    },
					fail() {
						uni.hideToast();
					},
					complete() {
						uni.hideToast();
					}
				});
			}
		},
		created(){
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
			this.eh = st+n
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(mf,$cts-big-padding,$cts-big-padding,null,null)
	@include createPadding(cp,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createPadding(mb,$cts-basic-padding,$cts-basic-padding,$cts-middle-padding,$cts-middle-padding)
	
	@include createFullBorder(cl,solid,$cts-deep-dark-golden,1px)
	$width : 710rpx;
	$desc_height:230rpx;
	.cts-user-info{
		width: $cts-screen-full;
		&-card{
			font-size: $cts-basic-font;
			color: $cts-all-white;
			&-btn{
				font-size: $cts-basic-font;
				color: $cts-all-white;
				border-radius:35rpx;
				background-image:linear-gradient(to right,$cts-main-brown,$cts-gradient-font);
			}
		}
		&-login{
			width: 430rpx;
			text-align: left;
			font-size: $cts-soso-font;
			color: $cts-main-brown;
		}
		&-empty{
			width: $cts-screen-full;
		}
		&-box{
			width: $cts-screen-full;
		}
		&-desc{
			width: $width;
			height: $desc_height;
		}
		&-money{
			position: relative;
			width: $width;
			height: 150rpx;
			background-color: $cts-dark-brown;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			overflow: hidden;
		}
		&-money-cover{
			width: $width;
			height: 150rpx;
			left: 0;
			top: 0;
			position: absolute;
		}
		&-money-cover-img{
			width: $width;
			height: 150rpx;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
		}
		&-money-rest{
			width: 400rpx;
			height: 150rpx;
		}
		&-money-rest-rest{
			font-size: $cts-middle-font;
			color: $cts-dark-golden;
			margin-bottom: $cts-middle-padding;
		}
		&-money-rest-money{
			font-size: $cts-big-font;
			color: $cts-all-white;
		}
		&-money-btn{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			background-image:linear-gradient(to right,$cts-gradient-light-golden,$cts-gradient-dark-golden);
			border-radius:35rpx;
		}
		&-avatar{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		&-avatar-img{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
		&-detail{
			width: 430rpx;
			height: 150rpx;
		}
		&-arrow{
			width: 80rpx;
			height: $desc_height;
		}
		&-arrow-img{
			width: 50rpx;
			height: 50rpx;
			transform: rotate(180deg);
		}
		&-detail-name{
			width: 430rpx;
			height: 40rpx;
		}
		&-detail-code{
			width: 430rpx;
			height: 40rpx;
		}
		&-detail-name-txt{
			lines:1;
			font-size: $cts-soso-font;
			color:$cts-dark-brown;
		}
		&-detail-name-icon{
			height: 40rpx;
			margin-left: $cts-middle-padding;
		}
		&-detail-code-txt{
			font-size: $cts-basic-font;
			color: $cts-deep-dark-golden;
		}
		&-detail-code-copy{
			margin-left: $cts-basic-padding;
			font-size: $cts-middle-font;
			color: $cts-deep-dark-golden;
			border-radius: $cts-basic-padding;
		}
		&-detail-exp{
			width: 250rpx;
			height: 8rpx;
			background-color: $cts-darken-golden;
			border-radius: 10rpx;
			overflow: hidden;
		}
		&-detail-exp-in{
			width: 1px;
			height: 8rpx;
			background-image: linear-gradient(to right,$cts-gradient-light-golden,$cts-gradient-dark-golden) ;
			border-radius: 10rpx;
		}
		&-detail-exp-num{
			width: 430rpx;
			height: 30rpx;
			color: $cts-main-brown;
			text-align: left;
			font-size: $cts-middle-font;
		}
	}
</style>
