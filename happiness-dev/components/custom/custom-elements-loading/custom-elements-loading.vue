<template>
	<view class="cts-ele-loading cts-flex-jc cts-flex-ac cts-flex-dir" :style="{backgroundColor:!!bg?bg:'#f7f7f7'}">
		<view class="cts-ele-loading-item"  v-for="(item,index) in bar" ref="bar"></view>
	</view>
</template>

<script>
	const Binding = uni.requireNativePlugin('bindingx');
	import ctr from '@/static/js/container.js'
	export default {
		data() {
			return {
				bar:[
					{
						active:false
					},
					{
						active:false
					},
					{
						active:false
					}
				],
				timer:null
			};
		},
		props:['bg'],
		beforeDestroy() {
			clearInterval(this.timer)
		},
		mounted() {
			let task = this.animateBar()
			let i =-1;
			this.timer = setInterval(()=>{
				i+=1;
				if(i>2){
					i=0;
					task.next(true)
				}
				else{
					task.next()
				}
			},800)
		},
		methods:{
			animateBar:function *(){
				for(let i = 0; true; i++) {
				    let reset = yield this.loadingAnimation(i);
				    if(reset) { i = -1; }
				  }
			},
			loadingAnimation(index){
				let ele = ctr.getBindingEle(this.$refs.bar[index])
				
				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>1500`,
					props: [{
						element: ele,
						property: 'transform.translateY',
						expression: 'easeOutElastic(t,-8,8,1500)'
					}]
				}, function(e) {
				});
				return index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-ele-loading{
		flex: 1;
		height: $cts-basic-height;
		&-item{
			width: 13rpx;
			height: 40rpx;
			background-color: $cts-deep-dark;
			margin-left: $cts-min-padding;
			margin-right: $cts-min-padding;
			border-radius: $cts-basic-padding;
		}
	}
</style>
