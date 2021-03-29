import com from '@/static/js/common.js'

export const home ={
	data() {
		return {
			// 骨架屏显示
			showSkeleton:true,
			// 秒杀倒计时(毫秒时间戳)
			countdown:0,
			// 当前对应轮播图的背景色
			current_background_color:[{color:''}],
			// 初始导航栏颜色
			navbarColor:'#fff',
			// 轮播图下第一行宫格
			main_menu_group:[
				{
					src:'/static/tb.png',
					text:'淘宝'
				},
				{
					src:'/static/xin.png',
					text:'拼夕夕'
				},
				{
					src:'/static/mt.png',
					text:'美团'
				},
				{
					src:'/static/gd.png',
					text:'京东'
				},
				{
					src:'/static/w.png',
					text:'唯品会'
				}
			],
			// 分区标题
			title1_group:[
				{
					title:'新人专区',
					desc:'一秒上手 开启终极福利',
					more:true
				}
			],
			title2_group:[
				{
					title:'活动广场',
					desc:'平台实惠 一手掌握',
					more:false
				}
			],
			title3_group:[
				{
					title:'好物推荐',
					desc:'每日为你精选好物',
					more:true
				}
			],
			title4_group:[
				{
					title:'为您推荐',
					desc:'精选好货，为您省钱',
					more:true
				}
			],
			// 活动广场
			plaza_group:[
				{
					double:[''],
					triple:['']
				}
			],
			// 秒杀场次时刻表
			seckill_group:[
				{
					title:'00:00',
					type:6,
					status:1,
					active:false
				},
				{
					title:'10:00',
					type:7,
					status:1,
					active:false
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
			// 新人专区及特权卡轮播图及宫格广告
			new_group:[
				{
					double:[],
					banner:[],
					activity:[]
				}
			],
			// 分区加载状态
			sections_loading_status:{
				nice_stuff:false,
				user_red:false,
				seckill:false,
				free:false
			}
		}
	},
	methods: {
		
	}
}