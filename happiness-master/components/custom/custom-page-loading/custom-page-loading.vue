<template>
	<view class="cts-basic-loading cts-flex-ac cts-flex-jc" elevation="5px" ref="loading">
		<loading-indicator class="cts-basic-loading-indicator" :animating="show"></loading-indicator>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	const animation = weex.requireModule('animation')
	export default {
		data() {
			return {
				show:false
			};
		},
		watch:{
			show_f:function(val){
				com.updateComponentData(this,'show',val)
			},
			show:function(val){
				this.toggle(val)
			}
		},
		props:['show_f'],
		methods:{
			toggle(flag){
				if(flag){
					this.appear()
				}
				else{
					this.disappear()
				}
			},
			getEl(el) {
				if (typeof el === 'string' || typeof el === 'number') return el;
				if (WXEnvironment) {
					return el.ref;
				} else {
					return el instanceof HTMLElement ? el : el.$el;
				}
			},
			appear(){
				animation.transition(this.getEl(this.$refs.loading), {
				styles: {
					transform:'translateY(0%)',
					opacity:1
				},
				duration: 450, //ms
				timingFunction: 'cubic-bezier(0.22, 0.74, 0.03, 0.99)',
				needLayout:false,
				delay: 0 //ms
				}, function () {})
			},
			disappear(){
				animation.transition(this.getEl(this.$refs.loading), {
				styles: {
					transform:'translateY(-200%)',
					opacity:0
				},
				duration: 450, //ms
				timingFunction: 'cubic-bezier(0.22, 0.74, 0.03, 0.99)',
				needLayout:false,
				delay: 0 //ms
				}, function () {})
			}
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'show',this.show_f)
			},50)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-basic-loading{
		width: 80rpx;
		height: 80rpx;
		background-color: $cts-all-white;
		box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		border-radius: 50%;
		position: absolute;
		left: 335rpx;
		top: 270rpx;
		opacity: 0;
		transform: translateY(-200%);
		&-indicator{
			width: 40rpx;
			height: 40rpx;
			color: $cts-light-golden;
		}
	}
</style>
