import home from '@/pages/home/home/home.nvue'
import classification from '@/pages/classification/classification/classification.nvue'
import user from '@/pages/mine/user/user.nvue'
import store from '@/pages/store/index/index.nvue'
import card from '@/pages/card/card/card.nvue'
import signin from '@/pages/home/signin/signin'
export const index = {
	data() {
		return {
			// tabbar页面
			tabbarPage: [{
					id: 'page0',
					render: false
				},
				{
					id: 'page1',
					render: false
				},
				{
					id: 'page2',
					render: false
				},
				{
					id: 'page3',
					render: false
				},
				{
					id: 'page4',
					render: false
				}
			],
			// tabbar按钮
			tabbarGroup: [{
					// 标题
					title: '主页',
					// 激活态
					actived: '/static/t3.png',
					// 静默态
					muted: '/static/t3_m.png',
					// 激活标识
					active: false
				},
				{
					title: '商城',
					actived: '/static/t7.png',
					muted: '/static/t7_m.png',
					desc:'1折起',
					active: false
				},
				{
					title: '聚福卡',
					actived: '',
					muted: '',
					active: false
				},
				{
					title: '尊享权限',
					actived: '/static/t6.png',
					muted: '/static/t6_m.png',
					active: false
				},
				{
					title: '我的',
					actived: '/static/t4.png',
					muted: '/static/t4_m.png',
					active: false
				},
			]
		}
	},
	onBackPress() {
		return true;
	},
	onReady() {

	},
	components: {
		home,
		classification,
		user,
		store,
		card,
		signin
	},
	methods: {

	}
}
