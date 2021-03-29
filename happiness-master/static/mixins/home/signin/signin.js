export const signin = {
	data() {
		return {
			group2:[
				{
					id:'task1',
					src:'/static/sign1.png',
					title:'签到',
					num:'连续签到奖励更多',
					btn:'+200/次',
					mute:false,
				},
				// {
				// 	id:'task3',
				// 	src:'/static/sign3.png',
				// 	title:'完善资料',
				// 	num:'完善个人资料可获得100积分',
				// 	btn:'去完善',
				// 	mute:false,
				// },
				{
					id:'task2',
					src:'/static/sign3.png',
					title:'看视频',
					num:'看视频赚钱，竟有这好事？',
					btn:'+200/次',
					mute:false,
				},
				{
					id:'task3',
					src:'/static/sign2.png',
					title:'邀好友 享福豆',
					num:'即刻邀请，最高得5w福豆',
					btn:'去邀请',
					mute:false,
				},
				{
					id:'task4',
					src:'/static/sign2.png',
					title:'抽福豆',
					num:'最高500福豆',
					btn:'去参与',
					mute:false,
				},
				{
					id:'task5',
					src:'/static/sign2.png',
					title:'购物返福豆',
					num:'当季热销精品等你来抢',
					btn:'去抢购',
					mute:false,
				},
				{
					id:'task6',
					src:'/static/sign2.png',
					title:'整点领福豆',
					num:'每天可领5次',
					btn:'+50/次',
					mute:false,
				},
			],
			title:[
				{
					title:'积分任务',
					desc:'完成五个任务，领取额外福豆奖励    0/5',
					more:false
				},
				{
					title:'赚钱秘籍',
					desc:'赚多多',
					more:false
				},
				{
					title:'省钱好物推荐',
					desc:'精品推荐',
					more:false
				}
			],
			cards:[
				{
					img:'/static/f_banner.png',
					url:'1'
				},
				{
					img:'/static/f_banner.png',
					url:'2'
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