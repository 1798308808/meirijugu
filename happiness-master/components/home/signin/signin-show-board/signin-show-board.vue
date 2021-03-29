<template>
	<view class="cts-show cts-padding-round">
		<view class="cts-show-box cts-flex-dir cts-flex-jsb cts-flex-ac cts-flex-wrap">
			<view class=" cts-flex-jc cts-flex-ac" :class="[item.type==1?'cts-show-item-short':'cts-show-item-long']" v-for="(item,index) in group" :key="item.title">
				<view v-if="item.type==1" class="cts-show-item-short-icon cts-show-item-short-icon-su  cts-flex-jc cts-flex-ac">
					<image class="cts-show-item-short-icon-img" :src="item.state==1?'/static/sign_su.png':'/static/sign_coin.png'" mode="aspectFit"></image>
					<text class="cts-show-item-short-icon-txt">{{item.desc}}</text>
				</view>
				<view v-else class="cts-show-item-long-icon cts-flex-jc cts-flex-ac">
					<image class="cts-show-item-long-icon-img" :src="item.state==1?'/static/sign_su.png':'/static/sign_gift.png'" mode="aspectFit"></image>
					<text class="cts-show-item-long-icon-txt">{{item.desc}}</text>
				</view>
				<text class="cts-show-item-txt">{{item.title}}</text>
				<view v-if="item.mute" class="cts-show-item-cover"></view>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(round,$cts-big-padding,$cts-big-padding,$cts-ext-padding,$cts-ext-padding)
	.cts-show{
		width: 710rpx;
		background-color: $cts-all-white;
		border-radius: $cts-basic-padding;
		&-box{
			width: 650rpx;
			margin-bottom: $cts-basic-padding;
		}
		&-item-txt{
			font-size: $cts-basic-font;
			color: $cts-gradient-font;
			margin-top: $cts-basic-padding;
			margin-bottom: $cts-big-padding;
		}
		&-item-short{
			width: 150rpx;
			position: relative;
		}
		&-item-cover{
			position: absolute;
			left: 0;
			top: 0;
			width: 400rpx;
			height: 300rpx;
			background-color: rgba(255,255,255,.6);
		}
		&-item-short-icon-su{
			background-image:linear-gradient(180deg, #FFF1E4, #FFE9D6);
		}
		&-item-short-icon{
			width: 150rpx;
			height: 150rpx;
			background-image: linear-gradient(180deg, #FFFBF1, #FDF5E4)!important;
			border-radius: $cts-basic-padding;
		}
		&-item-short-icon-img{
			width: 70rpx;
			height: 70rpx;
		}
		&-item-short-icon-txt{
			font-size: $cts-middle-font;
			margin-top: $cts-middle-padding;
			color: $cts-main-brown;
		}
		&-item-long{
			width: 316.5rpx;
			position: relative;
		}
		&-item-long-icon{
			width: 316.5rpx;
			height: 150rpx;
			background-image:linear-gradient(180deg, #FFF1F1, #FFECE9);
			border-radius: $cts-basic-padding;
		}
		&-item-long-icon-img{
			width: 70rpx;
			height: 70rpx;
		}
		&-item-long-icon-txt{
			font-size: $cts-middle-font;
			margin-top: $cts-middle-padding;
			color: $cts-gradient-light-red;
		}
	}
</style>
