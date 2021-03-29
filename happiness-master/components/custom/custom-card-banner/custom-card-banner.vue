<template>
	<view class="cts-card-banner" :style="{height:!!height?height+'rpx':''}">
		<view class="cts-card-container cts-flex-jfs cts-flex-ac cts-flex-dir" ref="controller" @touchstart="controllerMove"
		 :style="{transform:!!current_f?`translateX(${current_x}px)`:''}">
			<view v-for="(item,index) in group" :key="index+'card'" :style="calculateBox(index)" class="cts-card-item" ref="banner">
				<slot :name="item.id" v-if="custom"></slot>
				<custom-pic-loading v-else :style="{width:width+'px',height:height+'rpx'}" :img="item.src"></custom-pic-loading>
				<view v-if="shadow" :style="{width:width+'px'}" class="cts-card-shadow"></view>
			</view>
		</view>
	</view>
</template>

<script>
	const Binding = uni.requireNativePlugin('bindingx');
	import ctr from '@/static/js/container.js'
	import com from '@/static/js/common.js'

	export default {
		data() {
			return {
				x: 0,
				animation_active: false,
				current_x: 0,
				current: 0,
				container: null,
				width: null,
				margin: null,
				height: null,
				group: [],
				pl:''
			};
		},
		props: ['width_f', 'margin_f', 'height_f', 'group_f', 'custom', 'current_f', 'shadow','motion'],
		watch: {
			group_f: {
				handler: function(val) {
					com.updateComponentData(this, 'group', val)
					this.parallaxEffect(val)
				},
				deep: true
			},
			current_f: function(val) {
				this.scrollToBannerItem(val)
			}
		},
		created() {
			this.pl = this.$store.state.common.platform
		},
		mounted() {
			setTimeout(() => {
				com.updateComponentData(this, 'group', this.group_f)
				if (this.width_f) {
					com.updateComponentData(this, 'width', uni.upx2px(this.width_f))
				} else {
					this.width = uni.upx2px(680)
				}
				if (this.margin_f) {
					com.updateComponentData(this, 'margin', uni.upx2px(this.margin_f))
				} else {
					this.margin = uni.upx2px(20)
				}
				if (this.height_f) {
					com.updateComponentData(this, 'height', this.height_f)
				} else {
					this.height = 293
				}
				if (!!this.current_f) this.scrollToBannerItem(this.current_f)
			}, 50)

		},
		methods: {
			// 陀螺仪
			parallaxEffect(group) {
				if(!this.motion)return;
				let props = []
				
				setTimeout(() => {
					for (let i = 0; i < group.length; i++) {
						let ele = ctr.getBindingEle(this.$refs.banner[i])
						let arr = []
						if(this.pl=='ios'){
							arr = [
								{
									element: ele, //动画元素
									property: 'transform.translateX', //动画属性
									expression: 'x/2+0' //表达式  
								},
								{
									element: ele, //动画元素
									property: 'transform.translateY', //动画属性
									expression: 'y/2+0'
								},
								{
									element: ele, //动画元素
									property: 'transform.rotateY', //动画属性
									expression: this.pl=='ios'?'x/2+0':'x/10+0' //表达式  
								},
								{
									element: ele, //动画元素
									property: 'transform.rotateX', //动画属性
									expression: this.pl=='ios'?'y/3+0':'y/15+0'
								}
							]
						}
						else{
							arr = [
								{
									element: ele, //动画元素
									property: 'transform.rotateY', //动画属性
									expression: 'x/14+0' //表达式  
								},
								{
									element: ele, //动画元素
									property: 'transform.rotateX', //动画属性
									expression: 'y/20+0'
								}
							]
						}
						props.push(...arr)
					}
					Binding.bind({
						eventType: 'orientation',
						props
					}, function(e) {});
				}, 500)

			},
			// 滚动到指定
			scrollToBannerItem(val) {
				this.x = com.accMul(com.accPlus(this.width, this.margin), -val);
				this.current_x = this.x;
				this.current = val
			},
			// 计算盒子高度，间隔
			calculateBox(index) {
				let obj = {}
				if (index == 0) {
					obj = {
						width: this.width + 'px',
						height: this.height + 'rpx',
						marginLeft: com.accDiv(this.$store.state.common.screenWidth - this.width, 2) + 'px',
						marginRight: com.accDiv(this.margin, 2) + 'px'
					}
					return obj;
				}
				if (index == this.group.length - 1) {
					obj = {
						width: this.width + 'px',
						height: this.height + 'rpx',
						marginRight: com.accDiv(this.$store.state.common.screenWidth - this.width, 2) + 'px',
						marginLeft: com.accDiv(this.margin, 2) + 'px'
					}
					return obj;
				}
				if (index != this.group.length - 1 && index != 0) {
					obj = {
						width: this.width + 'px',
						height: this.height + 'rpx',
						marginRight: com.accDiv(this.margin, 2) + 'px',
						marginLeft: com.accDiv(this.margin, 2) + 'px'
					}
					return obj;
				}

			},
			// 切换动画
			movAnimation(x) {
				let that = this;
				// 表达式
				let translate_x_expression = null;
				// 时长
				let duration = 0;
				// 最小触发移动距离
				let limits = 30;
				// 元素
				let ele = ctr.getBindingEle(this.$refs.controller)
				// 移动距离
				let step = 0;
				// 起始位置
				let start = com.accPlus(this.x, x);
				this.animation_active = true;

				// console.log('当前位置', this.x)

				if (x > limits && this.current - 1 >= 0) {
					// console.log('进了右滑')
					// 右滑
					this.current = this.current - 1;
					step = com.accMul(com.accPlus(this.width, this.margin), -this.current);
					duration = 250
					translate_x_expression = `easeOutExpo(t,${start},${step-start},${duration})`
				} else if (x < -limits && this.current + 1 <= this.group.length - 1) {
					// console.log('进了左滑')
					// 左滑
					this.current = this.current + 1;
					step = com.accMul(com.accPlus(this.width, this.margin), -this.current);
					duration = 250
					translate_x_expression = `easeOutExpo(t,${start},${step-start},${duration})`
				} else {
					// console.log('进了复位')
					// 复位
					step = com.accMul(com.accPlus(that.width, that.margin), -this.current)
					duration = 500
					translate_x_expression = `easeOutElastic(t,${start},${step-start},${duration})`
				}



				let result = Binding.bind({
					eventType: 'timing',
					exitExpression: `t>${duration}`,
					props: [{
						element: ele,
						property: 'transform.translateX',
						expression: translate_x_expression
					}, ]
				}, function(e) {
					if (e.state == 'exit') {
						that.x = com.accMul(com.accPlus(that.width, that.margin), -that.current)
						that.animation_active = false;
						that.$emit('returnCurrent', that.current)
					}
				});
			},
			// 滑动
			controllerMove() {
				// console.log(this.animation_active)

				if (this.animation_active) {
					Binding.unbind({
						eventType: 'pan',
						token: this.container.token
					})
					this.container = null
					return
				}
				let that = this;
				let ele = ctr.getBindingEle(this.$refs.controller)
				this.container = Binding.bind({
					anchor: ele,
					eventType: 'pan',
					props: [{
							element: ele,
							expression: `x+${that.x}`,
							property: 'transform.translateX',
						}

					]
				}, function(e) {
					if (e.state == 'end' || e.state == 'cancel') {
						that.movAnimation(e.deltaX)
					}

				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-card {
		&-banner {
			width: $cts-screen-full;
			overflow: hidden;
			position: relative;
			margin-top: $cts-basic-padding;
			margin-bottom: $cts-basic-padding;
		}

		&-container {
			position: absolute;
			left: 0;
			top: 0;
			overflow: hidden;
		}

		&-item {
			border-radius: $cts-basic-padding;
			position: relative;
		}

		&-shadow {
			position: absolute;
			left: 0;
			bottom: 0;
			height: 100rpx;
			background-image: linear-gradient(to bottom, $cts-soso-grey, $cts-narrow-grey);
			margin-top: $cts-basic-padding;
		}
	}
</style>
