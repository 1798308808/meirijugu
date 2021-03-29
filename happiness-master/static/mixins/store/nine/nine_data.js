import com from '@/static/js/common.js'
export const nine_data = {
	data() {
		return {
			// 头部轮播图
			banner: [
				// {
				// 	id: 's1',
				// 	img: '/static/99.png'
				// }
			],
			// 页面组合
			page_group: [
				// {
				// 	name:'page1',
				// 	render:true,
				// 	loadmore:false,
				//  loading:true,
				// 	nomore:false,
				// 	data:[
				// 	[
				// 		{
				// 			id:'s1',
				// 			title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 			thumb:'/static/goods1.jpg',
				// 			price:'78.90',
				// 			d_price:'128.90',
				// 			discount:'40',
				// 			platform:'/static/tmall_v.png',
				// 			rewards:'2.55',
				// 			sales:189,
				// 			video:true
				// 		}
				// 	]
				// ]
				// },
			],
			// 分类类目
			options_group: [
				// {
				// 	active:true,
				// 	text:'母婴童品'
				// }
			],
			// 请求处理集合
			request_handler_group: {
				fetchCategory: [{
						code: 0,
						handle: () => this.fetchCategorySuccess
					},
					{
						code: -1,
						handle: () => this.fetchCategoryFailed
					}

				],
				fetchGoodsList: [{
						code: 1,
						handle: () => this.fetchGoodsListSuccess
					},
					{
						code: -1,
						handle: () => this.fetchGoodsListFailed
					}
				
				],
				getTopBanner:[
					{
						code:0,
						handle:()=>this.getTopBannerSuccess
					},
					{
						code:-1,
						handle:()=>this.getTopBannerFailed
					}
					
				],
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取分类',
				url: 'http://www.jufu-unique.com/app.php/Haodanku/getCidList',
				method: 'GET',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [], this.request_handler_group.fetchCategory, res, 'short', 'bottom')
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
				}
			},
			{
				task: null,
				func: '获取分类商品列表',
				url: 'http://www.jufu-unique.com/app.php/Haodanku/getGoodsList',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
					this.cover = false
				}
			},
			{
				task:null,
				func:'获取轮播图',
				url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
				method:'POST',
				header:{'Content-Type': 'application/x-www-form-urlencoded'},
				data:{cat_id:27},
				success:(res)=>{
					com.requestResponse(this,[],this.request_handler_group.getTopBanner,res,'short','bottom')
				},
				fail:(err)=>{
					console.log(err)
				},
				complete:()=>{
				}
			},
			]
		}
	},
	methods: {
		// 获取顶部轮播图(发起)
		getTopBanner(){
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取分类(发起)
		fetchCategory() {
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 获取分类商品列表(发起)
		fetchGoodsList(cid,min_id,loadmore) {
			this.$set(this.request_task_group[1], 'data', {type:2,cid,min_id})
			this.$set(this.request_task_group[1], 'success', (res)=>{
				com.requestResponse(this, [!!loadmore?loadmore:false,cid], this.request_handler_group.fetchGoodsList, res, 'short', 'bottom')
			})
			this.$set(this.request_task_group[1], 'task', com.createRequestTask(this.request_task_group[1]))
		},
		// 获取顶部轮播图成功 (接收)
		getTopBannerSuccess(res){
			console.log('获取顶部轮播图成功',res)
			this.renderBanner(res.data.data.list)
		},
		// 获取顶部轮播图失败(接收)
		getTopBannerFailed(res){
			console.log('获取顶部轮播图失败',res)
		},
		// 获取分类成功(接收)
		fetchCategorySuccess(res) {
			console.log('获取分类成功', res)
			this.renderCategory(res.data.data.list)
		},
		// 获取分类失败(接收)
		fetchCategoryFailed(res) {
			console.log('获取分类失败', res)
		},
		// 获取分类商品列表成功(接收)
		fetchGoodsListSuccess(loadmore,page,res) {
			console.log('获取分类商品列表成功')
			this.setSwiperPageMinId(page,res.data.min_id)
			this.renderGoodsList(page,res.data.data,loadmore)
		},
		// 获取分类商品列表失败(接收)
		fetchGoodsListFailed(res) {
			console.log('获取分类商品列表失败', res)
		},
		// 设置下一页的min_id
		setSwiperPageMinId(index,val){
			this.$set(this.page_group[Number(index)],'page',val)
		},
		// 渲染分类
		renderCategory(list) {
			let group = []
			let group1 = []
			list.forEach((item, index) => {
				let obj = {
					name: `page${index}`,
					render: true,
					loadmore: false,
					loading:true,
					page:1,
					nomore: false,
					data: []
				}
				let obj1 = {
					active: index == 0 ? true : false,
					text: item.name
				}
				group.push(obj)
				group1.push(obj1)
			})
			
			this.page_group = group
			this.options_group = group1
			
			// 防止加载顺序引发报错
			com.global_watcher_regist('pageChanged',this.setListFixed)
			this.fetchGoodsList(0,1)
		},
		// 渲染分类商品
		// @params page(Number) 分类页面
		// @params loadmore(Boolean) 是否为加载更多
		renderGoodsList(page,list,loadmore){
			page = Number(page);
			

			// 替换字段
			let result = JSON.parse(JSON.stringify(list)
			.replace(/itemid/g,'id')
			.replace(/itemtitle/g,'title')
			.replace(/itempic/g,'thumb')
			.replace(/itemendprice/g,'price')
			.replace(/itemprice/g,'d_price')
			.replace(/discount/g,'mdiscount')
			.replace(/couponmoney/g,'discount')
			.replace(/shoptype/g,'platform')
			.replace(/tkmoney/g,'rewards')
			.replace(/itemsale/g,'sales'))
			
			
			
			result.forEach(item=>{
				item.platform = item.platform =='B'?'/static/tmall.png':'/static/taobao.png';
			})
			
			if(loadmore){
				// 查看最后一行商品是否为两个
				if(this.page_group[page].data[this.page_group[page].data.length -1].length!=2){
					this.page_group[page].data[this.page_group[page].data.length -1].push(result.splice(0,1)[0])
				}
			}
			
			// 分割成两个一组，cell限制
			let group = []
			for(let i=0;i<result.length;i+=2){
				group.push(result.slice(i,i+2));
			}
					
			if(loadmore){
				this.page_group[page].data.push(...group)
				this.$set(this.page_group[page],'loadmore',false)
				this.resetListLoadmore(page)
			}
			else{
				this.$set(this.page_group[page],'data',group)
				this.$set(this.page_group[page],'loading',false)
				this.refreshing=false;
			}
			
			console.log(this.page_group)
		},
		// 渲染轮播图
		renderBanner(list){
			let group = list.map(item=>{item.img = 'http://www.jufu-unique.com/' + item.img;return item})
			this.banner = group
		}
	},
	onLoad() {
		this.getTopBanner()
		this.fetchCategory()
	}
}
