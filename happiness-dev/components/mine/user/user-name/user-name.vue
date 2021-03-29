<template>
	<view class="cts-user-name cts-flex-dir cts-flex-jfs cts-flex-ac cts-transition-op" @tap="go" :style="{top:`${t}px`}" :class="extra.change?'cts-user-name-mute':'cts-user-name-active'">
		<text class="cts-user-name-txt">{{extra.name}}</text>
		<image class="cts-user-name-img" src="/static/back.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	import {userPublicMixins} from '@/static/mixins/mine/user/user_public.js'
	import com from '@/static/js/common.js'
	export default {
		mixins:[userPublicMixins],
		data() {
			return {
				t:'',
				extra:{
					change:true,
					name:'',
				}
			};
		},
		methods:{
			go(){
				if(!!this.extra.name&&this.extra.name!='请登录'){
					com.pageNavigation('/pages/sublevel/personal/personal')
				}
			}
		},
		created() {
			this.t = this.$store.state.common.statusBarHeight;
		},
	}
</script>

<style lang="scss" scoped>
	@include createTransition(op,opacity,.35s,$cts-normal-time-function,null,transform)
	.cts-user-name{
		position: absolute;
		left: 130rpx;
		height: 100rpx;
		&-txt{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-img{
			margin-left: $cts-basic-padding;
			width: 30rpx;
			height: 30rpx;
			transform: rotate(180deg);
		}
		&-active{
			opacity: 1;
			transform: translateX(0%);
		}
		&-mute{
			opacity: 0;
			transform: translateX(-50%);
		}
	}
</style>
