<template>
	<view class="cts-home-background" :style="{top:`${t}px`}">
		<view class="cts-home-cover cts-transition-bg" :style="{backgroundColor:!!group[0].color?group[0].color:'#fff'}"></view>
	</view>
</template>

<script>
	import {homePublicMixins} from '@/static/mixins/home/home/home_public.js'
	export default {
		data() {
			return {
				group:[
					{
						color:''
					}
				],
				t:''
			};
		},
		mixins:[homePublicMixins],
		created() {
			let [n,st] =
			[
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.t = st + n*2;
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(bg,background-color,0.45s,$cts-normal-time-function,null,null)
	.cts-home-background{
		position: absolute;
		left: 0;
		width: $cts-screen-full;
		height: 300rpx;
	}
	.cts-home-cover{
		position: absolute;
		left: 0;
		top: 0;
		width: $cts-screen-full;
		height: 150rpx;
		border-bottom-left-radius: 25%;
		border-bottom-right-radius: 25%;
	}
</style>
