<template>
	<view :style="{position:'relative',borderRadius:b_radius==-1?'500rpx':b_radius+'rpx'}">
		<image class="cts-mask-img" :lazy-load="lazy" :style="{borderRadius:b_radius==-1?'500rpx':b_radius+'rpx'}"  :src="img" :mode="!!mode?mode:'aspectFit'" @load="picLoadFinished" @error="picLoadFailed"></image>
		<view class="cts-mask cts-transition-bg"  :style="{opacity:finish?'0':'1',borderRadius:b_radius==-1?'500rpx':b_radius+'rpx'}">
			<view class="cts-mask-bar cts-transition-bg" :style="{height:h+'px',backgroundColor:ani?'#ececec':'#f7f7f7',borderRadius:b_radius==-1?'500rpx':b_radius+'rpx'}"></view>
		</view>
	</view>
</template>

<script>
	import ctr from '@/static/js/container.js'
	export default {
		data() {
			return {
				ani:false,
				finish:false,
				timer:null,
				h:''
			};
		},
		watch:{
			img:function(val){
				this.finish =false;
			}
		},
		created() {
			this.h = this.$store.state.common.safeAreaHeight;
		},
		methods:{
			loadingAnimation(){
				this.timer = setInterval(()=>{
					this.ani = !this.ani;
				},500)
			},
			picLoadFinished(e){
				this.finish=true;
				clearInterval(this.timer)
			}
		},
		mounted() {
			this.loadingAnimation()
		},
		props:['img','b_radius','lazy','mode']
	}
</script>

<style lang="scss" scoped>
	@include createTransition(bg,opacity,0.25s,linear,null,background-color)
	.cts-mask{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: $cts-soso-grey;
		&-error{
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background-color: $cts-soso-grey;
			&-txt{
				font-size: $cts-middle-font;
				color: $cts-mute-grey;
			}
		}
		&-img{
			flex: 1;
		}
		&-circle{
			border-radius: 50%!important;
			overflow: hidden;
		}
		&-bar{
			flex: 1;
		}
	}
</style>
