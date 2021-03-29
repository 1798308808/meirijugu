export const fans ={
	data() {
		return {
			// 用户粉丝数
			fans:{
				total_fans:0,
				// 今日新增
				daily_increase:0,
				// 昨日新增
				newly_increase:0,
				first_fans:0,
				secondary_fans:0
			},
			// 推荐人
			teacher:{
				avatar:'',
				name:'',
				code:''
			},
			users_group:[
				// {
				// 	avatar:'',
				// 	name:'weigooon1545',
				// 推荐人数
				// 	recommand:154687,
				// 订单数
				// 	total_order:7891,
				// 号码
				// 	code:'15234546451',
				// 上月计算
				// 	last_month:46491,
				// 会员组
				// vip:2,
				// 本月预估
				// 	this_month:1587,
				// 	today_prediction:187915
				// },
			]
		}
	},
	methods: {
		
	}
}