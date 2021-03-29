import com from '@/static/js/common.js'
export const order ={
	data() {
		return {
			// 当前平台名称
			options:'淘宝订单',
			// 选项开启状态
			open:false,
			// 平台选项
			group:[
				{val:'淘宝订单',active:true},
				{val:'京东订单',active:false},
				{val:'拼多多订单',active:false},
				{val:'唯品会订单',active:false},
			],
			// 订单筛选项
			order_title: [
				[{
						title: '全部',
						active: true
					},
					{
						title: '已付款',
						active: false
					},
					{
						title: '已结算',
						active: false
					},
					{
						title: '已失效',
						active: false
					},
				
				],
				[{
						title: '全部',
						active: true
					},
					{
						title: '已付款',
						active: false
					},
					{
						title: '已结算',
						active: false
					},
					{
						title: '已失效',
						active: false
					},
				
				],
				[{
						title: '全部',
						active: true
					},
					{
						title: '已付款',
						active: false
					},
					{
						title: '已结算',
						active: false
					},
					{
						title: '已失效',
						active: false
					},
				
				]
			],
			// 加载状态
			loadmore_status:[
				[
					{
						// 加载更多触发
						loadmore:false,
						// 加载后无内容
						nomore:false,
						// 当前页数
						page:1,
					},
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,}
				],
				[
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,}
				],
				[
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,}
				],
				[
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,},
					{loadmore:false,nomore:false,page:1,}
				]
			],
			// 页面状态
			page_group:[
				{
					name:'page1',
					// 渲染
					render:true,
					// 刷新
					refresh:false,
					// 搜索关键词
					keywords:''
				},
				{
					name:'page2',
					render:false,
					refresh:false,
					keywords:''
				},
				{
					name:'page3',
					render:false,
					refresh:false,
					keywords:''
				}
			],
			options_group:[
				{
					active:true,
					text:'我的订单'
				},
				{
					active:false,
					text:'直邀订单'
				},
				{
					active:false,
					text:'间邀订单'
				},
			]
		}
	},
	methods: {
		// 订单号关键词筛选
		searchFilter(code,keywords){
			if(!!keywords){
				if(code.match(keywords))return true
				return false;
			}
			return true
		},
		// 订单项筛选
		itemFilter(orderType,state){
			state = parseInt(state)
			let index = this.order_title[orderType].findIndex(item=>item.active==true);
			switch(this.current_order){
				case 0:
					switch(index){
						case 0:return true
						case 1:return state==12?true:false
						case 2:return state==3?true:false
						case 3:return state==13?true:false
					}
				break;
				case 1:
					switch(index){
						case 0:return true
						case 1:return state==16?true:false
						case 2:return state==18?true:false
						case 3:return state<=14?true:false
					}
				break;
				case 2:
					switch(index){
						case 0:return true
						case 1:return state==0?true:false
						case 2:return state==5?true:false
						case 3:return state==4?true:false
					}
				break;
				case 3:
					switch(index){
						case 0:return true
						case 1:return state==1?true:false
						case 2:return state==2?true:false
						case 3:return state==0?true:false
					}
				break;
			}
		},
		// 订单状态转为字符串
		stringifyOrderStatus(platform,val){
			val = parseInt(val)
			switch(platform){
				case 0:
					switch(val){
						case 3:return '已结算'
						case 12:return '已付款'
						case 13:return '已失效'
						case 14:return '已完成'
					}
				break;	
				case 1:
					switch(val){
						case -1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 9:
						case 10:
						case 11:
						case 12:
						case 13:
						case 14:return '已失效'
						case 15:return '待付款'
						case 16:return '已付款'
						case 17:return '已完成'
						case 18:return '已结算'
					}
				break;	
				case 2:
					switch(val){
						case -1:return '待付款'
						case 0:return '已付款'
						case 1:return '已成团'
						case 2:return '已完成'
						case 3:return '审核成功'
						case 4:return '审核失败'
						case 5:return '已结算'
						case 8:return '非多多进宝商品'
						case 10:return '已处罚'
					}
				break;	
				case 3:

				break;	
			}
		}
	},
	onReady(){
		
	}
}