<template>
	<view class="cts-loadmore cts-flex-dir cts-flex-jc cts-flex-ac" ref="loadmore" :style="{backgroundColor:!!bg?bg:'#f7f7f7'}">
		<loading-indicator v-if="!nomore" class="cts-loadmore-indicator" :animating="ani" :style="{color:!!color?color:'#999999'}"></loading-indicator>
		<text  class="cts-loadmore-txt" :style="{color:!!color?color:'#999999'}">{{nomore?'抱歉，没有了':'努力加载中'}}</text>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation')
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				show:false,
				ani:false,
				nomore:false,
			};
		},
		watch:{
			show_f:function(val){
				com.updateComponentData(this,'show',val)
			},
			nomore_f:function(val){
				com.updateComponentData(this,'nomore',val)
			},
			show:function(val){
				this.toggle(val)
			}
		},
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'show',this.show_f)
				com.updateComponentData(this,'nomore',this.nomore_f)
			},50)
		},
		props:['show_f','nomore_f','color','bg'],
		methods:{
			toggle(flag){
				if(flag){
					this.showBox()
					this.ani=true;
				}
				else{
					this.ani=false;
					if(!this.nomore){
						this.hideBox()
					}
				}
			},
			showBox(){
				animation.transition(this.getEl(this.$refs.loadmore), {
				styles: {
					transform:'scaleY(1)',
				},
				duration: 250, //ms
				timingFunction: 'ease-out',
				needLayout:false,
				delay: 0 //ms
				}, function () {})
			},
			hideBox(){
				animation.transition(this.getEl(this.$refs.loadmore), {
				styles: {
					transform:'scaleY(0)',
				},
				duration: 250, //ms
				timingFunction: 'ease-out',
				needLayout:false,
				delay: 0 //ms
				}, function () {})
			},
			getEl(el) {
				if (typeof el === 'string' || typeof el === 'number') return el;
				if (WXEnvironment) {
					return el.ref;
				} else {
					return el instanceof HTMLElement ? el : el.$el;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cts-loadmore{
		width: $cts-screen-full;
		overflow: hidden;
		height: 100rpx;
		transform: scaleY(0);
		transform-origin: center top;
		&-indicator{
			width: 30rpx;
			height: 30rpx;
			margin-right: $cts-basic-padding;
		}
		&-txt{
			font-size: $cts-middle-font;
		}
	}
</style>
