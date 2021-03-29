<template>
	<view class="cts-boardcast cts-flex-dir cts-flex-ac cts-flex-jfs" :style="{top:t+'px'}">
		<swiper class="cts-boardcast-box" :interval="3000" :autoplay="true" :circular="true" :skip-hidden-item-layout="true"
		:vertical="true" :disable-touch="true" :touchable="false"  :easing-function="'easeOutCubic'">
			<swiper-item v-for="(item,index) in group" :key="item.id">
				<view class="cts-boardcast-item cts-flex-dir cts-flex-jfs cts-flex-ac cts-padding-sw">
					<image class="cts-boardcast-img" :src="item.avatar" mode="aspectFit"></image>
					<text class="cts-boardcast-txt">{{item.txt}}</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		created() {
			let [s,n,st] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.t = n + st
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(sw,$cts-middle-padding,$cts-middle-padding,null,null)
	.cts-boardcast{
		width: 710rpx;
		height: 70rpx;
		margin-left: $cts-basic-padding;
		position: absolute;
		left: 0;
		&-box{
			width: 710rpx;
			height: 70rpx;
		}
		&-item{
			align-self: flex-start;
			height: 70rpx;
			background-color: rgba(0,0,0,.5);
			border-radius:$cts-ext-padding;
			backdrop-filter: blur(5px);
		}
		&-img{
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			margin-right: $cts-middle-padding;
			background-color: $cts-soso-grey;
		}
		&-txt{
			color: $cts-all-white;
			font-size: $cts-basic-font;
		}
	}
</style>
