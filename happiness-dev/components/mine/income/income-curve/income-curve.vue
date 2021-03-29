<template>
	<view class="cts-income" ref="box">
		<gcanvas ref="gcanvess" :style="{width:width+'px',height:height+'px'}"></gcanvas>
		<gcanvas class="cts-income-control" ref="gcanvess2" :style="{width:width+'px',height:height+'px'}" @touchmove="checkData"
		 @touchend="drawDataBox"  @touchcancel="drawDataBox"></gcanvas>
	</view>
</template>

<script>
	import {
		enable,
		WeexBridge
	} from '@/gcanvas/index.js';
	import com from '@/static/js/common.js'
	const dom = weex.requireModule('dom')
	export default {
		data() {
			return {
				// canvas 对象相关
				canvasObj: {},
				context: {},
				// canvas 对象相关2
				canvasObj2: {},
				context2: {},
				timer: null,
				// canvas画布尺寸
				width: 0,
				height: 0,
				// y轴坐标集合
				amount_point_group: [],
				// x轴坐标集合
				time_point_group: [],
				// 原始数据
				origin_data:{},
				// 金额数据
				user_data: [],
				// 时间数据
				user_data_time: [],
				// 数据坐标
				user_pos: [],
				// y轴差值
				step: 0,
				// 平台
				pl: '',
				// y轴刻度数
				y_count: 5,
				// x轴刻度数
				x_count: 0,
			};
		},
		watch:{
			commission_data:{
				handler:function(val){
					com.updateComponentData(this, 'origin_data', val)
					this.render(val)
				},
				deep:true
			}
		},
		mounted() {
			
			this.$nextTick(function() {
				this.handleViewappear()
				this.handleViewappear(true)
				
				setTimeout(()=>{
					com.updateComponentData(this, 'origin_data', this.commission_data)
					this.render(this.commission_data)
				},100)
			})
		},
		props:['commission_data'],
		created() {
			// 安卓画布会出现显示宽度不准确的情况，是gcanvas的bug
			let w = this.$store.state.common.screenWidth;
			this.pl = this.$store.state.common.platform;
			this.width = w * (670 / 750);
			this.height = w * (300 / 750);
		},
		methods: {
			// 渲染总数据
			render(data){
				if(this.pl=='android'){
					// 不清理即使切换了数据也会依然存在
					this.context2.clearRect(this.width,this.height)
					this.context2.draw()
				}
				this.user_pos=[]
				this.user_data_time=[]
				this.user_data=[]
				this.amount_point_group=[]
				this.time_point_group=[]
				for(let key in data){
					this.user_data_time.push(key)
					this.user_data.push(Number(data[key]))
				}
				
				this.x_count = this.user_data_time.length;
				this.calculMoneyMark(this.user_data)
				this.drawUnderLine(this.y_count)
				this.createPoint(this.x_count)
				this.drawAmount()
				this.drawTime()
				this.calculDataPointPosition()
				this.drawDataBackground()
				this.drawPoint()
				this.drawDataPoint()
				this.draw()
			},
			// 绘制数据盒子
			drawDataBox(e) {
				let ctx = this.context2;
				let x = e.changedTouches[0].pageX;
				if (this.pl == 'ios') {
					ctx.clearRect(0, 0, this.width, this.height)
				}
				
				let temp = this.time_point_group.map(item=>Math.abs(item - x).toString())
				let temp2 = temp.map(item=>item)
				let min = temp2.sort((a, b) => a-b)[0];
				let index = temp.findIndex(item=>item.match(min));
				console.log('差值',temp,'最小值',min,'位置',index)
				// 绘制基准线
				ctx.strokeStyle = "rgba(0,0,0,.2)"
				ctx.moveTo(this.time_point_group[index],this.user_pos[index])
				ctx.lineTo(this.time_point_group[index],this.height*0.9)
				
				ctx.moveTo(this.time_point_group[index],this.user_pos[index])
				ctx.lineTo(this.width*0.1,this.user_pos[index])
				
				ctx.stroke()
				
				// 绘制数据盒子
				ctx.setTextAlign('center')
				ctx.setTextBaseline('middle')
				this.pl == 'ios' ? ctx.setFontSize(this.width * 0.08) : ctx.setFontSize(this.width * 0.035)
				
				if(Math.abs(this.height*0.9 -  this.user_pos[index]) < Math.abs(this.height*0.1 -  this.user_pos[index])){
					// 盒子
					ctx.fillStyle='rgba(149, 51, 48, 0.8)';
					ctx.fillRect(this.time_point_group[index] - this.width*0.07, this.user_pos[index] - this.width*0.08 - this.width*0.03, this.width*0.14, this.width*0.08)
					ctx.fillStyle='#fff';
					// 金额
					ctx.fillText(this.user_data[index].toString(), this.time_point_group[index], this.user_pos[index]  - this.width*0.05)
					// 时间点
					this.pl == 'ios' ? ctx.setFontSize(this.width * 0.075) : ctx.setFontSize(this.width * 0.03)
					ctx.fillText(this.user_data_time[index], this.time_point_group[index], this.user_pos[index] - this.width*0.09 )
					ctx.fill()
				}
				else{
					ctx.fillStyle='rgba(149, 51, 48, 0.8)';
					ctx.fillRect(this.time_point_group[index] - this.width*0.07, this.user_pos[index] + this.width*0.08 + this.width*0.03, this.width*0.14, this.width*0.08)
					ctx.fillStyle='#fff';
					
					ctx.fillText(this.user_data[index].toString(), this.time_point_group[index], this.user_pos[index]  + this.width*0.17)
					
					this.pl == 'ios' ? ctx.setFontSize(this.width * 0.075) : ctx.setFontSize(this.width * 0.03 )
					ctx.fillText(this.user_data_time[index], this.time_point_group[index], this.user_pos[index] + this.width*0.13)
					ctx.fill()
				}
				// 绘制数据
				if (this.pl == 'ios') {
					ctx.draw(true)
				} else {
					ctx.draw()
				}
			},
			// 查看刻度
			checkData(e) {
				let ctx = this.context2;
				let x = e.changedTouches[0].pageX;
				if (this.pl == 'ios') {
					ctx.clearRect(0, 0, this.width, this.height)
				}
				ctx.strokeStyle = "rgba(0,0,0,.2)"
				ctx.be
				ctx.moveTo(x, 0)
				ctx.lineTo(x, this.height * 0.9)
				ctx.stroke()

				if (this.pl == 'ios') {
					ctx.draw(true)
				} else {
					ctx.draw()
				}
			},
			// 计算刻度(x)
			calculMoneyMark(list) {
				this.x_count = this.user_data_time.length;
				
				let temp = list.map(item => Number(item));
				let max = temp.sort((a, b) => b - a)[0];
				max = max % this.y_count == 0 ? max : max + this.y_count - (max % this.y_count)
				this.step = com.accDiv(max, this.y_count)
			},
			// 初始化画布
			handleViewappear: function(other) {
				if (other) {
					let that = this;
					let ganvas = this.$refs["gcanvess"];
					this.canvasObj = enable(ganvas, {
						bridge: WeexBridge
					});
					this.context = this.canvasObj.getContext('2d');
				} else {
					let that = this;
					let ganvas = this.$refs["gcanvess2"];
					this.canvasObj2 = enable(ganvas, {
						bridge: WeexBridge
					});
					this.context2 = this.canvasObj2.getContext('2d');
				}
			},
			// 绘制
			draw() {
				let ctx = this.context;
				ctx.draw()
			},
			// 创建坐标轴
			drawUnderLine(rows) {
				let ctx = this.context;
				let part = rows;
				let step = this.height * 0.9 / part;
				for (let i = 0; i <= part; i++) {

					ctx.beginPath();
					if (i == part) {
						ctx.strokeStyle = "#999999"
					} else {
						ctx.strokeStyle = "#ececec"
					}
					ctx.moveTo(this.width * 0.1, step * i)
					ctx.lineTo(this.width * 0.9, step * i)
					ctx.closePath();
					ctx.stroke()
					
					this.amount_point_group.push(step * i)
				}
			},
			// 创建坐标点
			createPoint(point) {
				let part = point;
				let step = this.width * 0.8 / part;
				for (let i = 0; i < part; i++) {
					this.time_point_group.push(step * i + this.width * 0.1)
				}
			},
			// 绘制坐标点
			drawPoint() {
				let ctx = this.context;
				for (let i = 0; i < this.time_point_group.length; i++) {
					ctx.beginPath();
					ctx.setLineWidth(2)
					ctx.fillStyle = "#333"
					ctx.arc(this.time_point_group[i], this.height * 0.9, 2, 0, 2 * Math.PI)

					ctx.closePath();
					ctx.fill()
				}
			},
			// 创建时间点
			drawTime() {
				let ctx = this.context;
				let length = this.time_point_group.length;
				let step = 1;
				if (length < 8) {
					step = 1;
				} else if (length < 15) {
					step = 2;
				} else if (length < 21) {
					step = 3;
				} else {
					step = 5;
				}
				
				for (let i = 0; i < length; i = i + step) {

					this.pl == 'ios' ? ctx.setFontSize(this.width * 0.1) : ctx.setFontSize(this.width * 0.035)
					ctx.setFillStyle('#333333')
					ctx.fillText(this.user_data_time[i], this.time_point_group[i], this.height)

				}
			},
			// 创建金额刻度
			drawAmount() {
				let ctx = this.context;
				let length = this.amount_point_group.length;

				for (let i = 0; i < length; i++) {
					if (i == 0) continue;
					this.pl == 'ios' ? ctx.setFontSize(this.width * 0.1) : ctx.setFontSize(this.width * 0.035)
					ctx.setFillStyle('#333333')
					ctx.fillText(`${com.accMul((length - 1 - i),this.step)}`, 0, this.amount_point_group[i] + 5)

				}
			},
			// 绘制数据点背景
			drawDataBackground() {
				let ctx = this.context;
				let group = this.user_pos
				let start_point = [this.time_point_group[0], this.height * 0.9]
				let end_point = [this.time_point_group[group.length - 1], this.height * 0.9]
				let gradient = ctx.createLinearGradient(this.width * 0.5, this.height * 0.1, this.width * 0.5, this.height * 0.9);
				gradient.addColorStop(0, 'rgba(255, 130, 130, 0.5)')
				gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)')

				ctx.beginPath()
				ctx.setLineWidth(this.width * 0.005)
				ctx.strokeStyle = "transparent"
				ctx.fillStyle = gradient
				ctx.setLineJoin('round')



				ctx.moveTo(start_point[0], start_point[1])
				ctx.lineTo(start_point[0], group[0])

				for (let i = 1; i < group.length; i++) {
					ctx.lineTo(this.time_point_group[i], group[i])
				}
				ctx.lineTo(end_point[0], end_point[1])
				ctx.closePath()

				ctx.lineTo(start_point[0], start_point[1])


				ctx.closePath()
				ctx.stroke()
				ctx.fill()

			},
			// 绘制数据点
			drawDataPoint() {
				let ctx = this.context;
				ctx.setLineWidth(this.width * 0.005)
				ctx.strokeStyle = "#FF8E8E"
				ctx.fillStyle = "#fff"
				ctx.setLineJoin('round')
				let group = this.user_pos
				for (let i = 0; i < group.length; i++) {
					if (group[i + 1]) {
						ctx.beginPath()
						ctx.moveTo(this.time_point_group[i], group[i])
						ctx.lineTo(this.time_point_group[i + 1], group[i + 1])
						ctx.closePath()
						ctx.stroke()
					}

				}

				ctx.setLineWidth(this.width * 0.015)
				ctx.fillStyle = "#fff"

				group.forEach((item, index) => {
					ctx.beginPath();
					ctx.arc(this.time_point_group[index], item, 2, 0, 2 * Math.PI)
					ctx.closePath();
					ctx.stroke()
					ctx.fill()
				})

			},
			// 计算数据点位置
			calculDataPointPosition() {
				let ctx = this.context;
				let group = this.amount_point_group.reverse()
				for (let i = 0; i < this.user_data.length; i++) {
					let index = 0;
					for (let j = 0; j < group.length; j++) {
						let forwards = this.user_data[i] - j * this.step

						if (forwards == 0) {
							index = j;
							break;
						} else {
							let backwards = 0
							if (group[j + 1]) {
								backwards = this.user_data[i] - (j + 1) * this.step
								if (forwards + backwards < forwards) {
									index = j + 1;
									break;
								}

							}
						}

					}
					let y = index * this.step - this.user_data[i] == 0 ? group[index] : group[index] + (((index * this.step - this.user_data[
						i]) / this.step) * (this.height * 0.9 / this.y_count))
					this.user_pos.push(Number(y))
				}
			},

		}
	}
</script>

<style lang="scss" scoped>
	.cts-income {
		position: relative;
		width: 670rpx;
		height: 300rpx;

		&-control {
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
