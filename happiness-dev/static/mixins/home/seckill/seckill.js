export const seckill ={
	data() {
		return {
			// 秒杀倒计时(毫秒时间戳)
			countdown:0,
			// 分区加载状态
			sections_loading_status:{
				seckill:false,
			},
			// 秒杀场次时刻表
			seckill_group:[
				{
					title:'00:00',
					type:6,
					status:-1,
					active:false
				},
				{
					title:'10:00',
					type:7,
					status:0,
					active:true
				},
				{
					title:'12:00',
					type:8,
					status:1,
					active:false
				},
				{
					title:'15:00',
					type:9,
					status:1,
					active:false
				},
				{
					title:'20:00',
					type:10,
					status:1,
					active:false
				}
			],
		}
	}
}