<template>
	<view class="cts-user-avatar cts-transition-uv" :style="{top:`${t+20}px`}" :class="[extra.change?'cts-user-avatar-active':'cts-user-avatar-mute']">
		<image class="cts-user-avatar-img" :src="extra.avatar" mode="aspectFit"></image>
	</view>
</template>

<script>
	import {userPublicMixins} from '@/static/mixins/mine/user/user_public.js'
	export default {
		mixins:[userPublicMixins],
		data() {
			return {
				t:'',
				extra:{
					avatar:'',
					change:false
				}
			};
		},
		created() {
			let [n,st] =
			[
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.t = n + st;
		},
	}
</script>

<style lang="scss" scoped>
	@include  createTransition(uv,transform,.35s,$cts-normal-time-function,null,opacity)
	.cts-user-avatar{
		position: absolute;
		left: $cts-basic-padding;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		&-active{
			opacity:1;
			transform: scale(.5) translateX(-25rpx) translateY(-160rpx);
		}
		&-mute{
			opacity:0;
			transform: scale(1) translateX(0rpx) translateY(0rpx);
		}
		&-img{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
	}
</style>
