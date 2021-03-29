export const signin = {
	data() {
		return {
			group2:[
				{
					id:'task1',
					src:'/static/sign1.png',
					title:'签到',
					num:'连续签到，获得更多积分',
					btn:'签到',
					mute:false,
				},
				{
					id:'task2',
					src:'/static/sign2.png',
					title:'推荐粉丝',
					num:'每推荐1名获得10积分，粉丝消费也可获得积分',
					btn:'去邀请',
					mute:false,
				},
				{
					id:'task3',
					src:'/static/sign3.png',
					title:'完善资料',
					num:'完善个人资料可获得100积分',
					btn:'去完善',
					mute:false,
				},
				{
					id:'task4',
					src:'/static/sign3.png',
					title:'每日观看',
					num:'每日观看视频，领取500积分',
					btn:'去完善',
					mute:false,
				}
				
			],
			title:[
				{
					title:'积分任务',
					desc:'做任务赚积分',
					more:false
				}
			],
			user:{
				greetings:'',
				name:'',
				avatar:''
			},
			day:[
				// {
				// 	// 标题
				// 	title:'1天',
				// 	// 描述
				// 	desc:'',
				// 	// 状态 1已领取 0未领取 -1已结束
				// 	state:0,
				//  是否不可用
				//  mute:true,
				// 	// 图标类型
				// 	type:1
				// }
			]
		}
	},
	methods: {
		
	}
}