import com from '@/static/js/common.js'
export const category_data = {
	data() {
		return {
			// 每个分类下页面组合
			page_group: [
				// {
				// 	name:'page1',
				// 	render:false,
				//  loading:true,
				//  loadmore:false,
				//  nomore:false
				// },
			],
			// 顶部分类菜单栏
			options_group: [
				// {
				// 	active:true,
				// 	text:'母婴'
				// },
				// {
				// 	active:false,
				// 	text:'家电'
				// }
			],
			// 子级分类菜单栏
			options: [
				// [
				// count:2
				// 	list:[{
				// 		taobao_cat_id:'o1',
				// 		icon:'/static/category.png',
				// 		name:"婴儿/童装"
				// 	}]
				// ]
			],
			// 分类下商品备份(筛选用)
			goods_backup_group:[
				
			],
			// 分类下商品
			goods_group:[
				// [
				// 	// {
				// 	// 	id:'s1',
				// 	// 	title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 	// 	thumb:'/static/goods1.jpg',
				// 	// 	desc:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 	// 	price:'78.90',
				// 	// 	d_price:'128.90',
				// 	// 	discount:'40',
				// 	// 	platform:'/static/tmall.png',
				// 	// 	rewards:'2.55',
				// 	// 	seckill:false,
				// 	// 	storeName:'圣诞节精品店',
				// 	// 	sales:165465
				// 	// },
				// ]
				
			],
			// 请求处理集合
			request_handler_group: {
				fetchSeCate: [{
						code: 0,
						handle: () => this.fetchSeCateSuccess
					},
					{
						code: -1,
						handle: () => this.fetchSeCateFailed
					}

				],
				fetchGoods:[
					{
						code: 1,
						handle: () => this.fetchGoodsSuccess
					},
					{
						code: -1,
						handle: () => this.fetchGoodsFailed
					}
				]
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取子级分类菜单',
				url: 'http://www.jufu-unique.com/app.php/TaobaoCat/getSubListByParent',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [res.data.data.list.length != 0 ? res.data.data.list[0].pid : '-1'], this.request_handler_group
						.fetchSeCate, res, 'short', 'top')
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
					this.cover = false
				}
			},
			{
				task: null,
				func: '获取指定分类商品',
				url: 'http://www.jufu-unique.com/app.php/Haodanku/supersearch',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			},
			],
			// 请求参数集合
			request_params_group: [
				// 子分类的父分类pid ，swiper分页页数
				// [15,1]
			]
		}
	},
	methods: {
		// 初始化页面内商品列表
		initSwiperPageGoodsGroup(group){
			let list = []
			group.forEach((item, index) => {
				list.push([])
			})
			this.goods_group = list;
		},
		// 初始化swiper页面渲染集合
		initSwiperPage(group, current) {
			let list = [];
			group.forEach((item, index) => {
				let obj = {
					name: 'page' + index,
					render: index == current ? true : false,
					loading: false,
					loadmore:false,
					nomore:false,
					refresh:false
				}
				list.push(obj)
			})
			this.page_group = list;
		},
		// 初始化子分类菜单列表
		initSecondaryCategoryList(group) {
			let list = []
			group.forEach((item) => {
				list.push({
					count: 0,
					list: []
				})
			})
			this.options = list;
		},
		// 初始化分页请求参数
		initSwiperPageRequestParams(group) {
			let list = []
			group.forEach((item, index) => {
				list.push([item.taobao_cat_id, 1])
			})
			this.request_params_group = list;
		},
		// 初始化分页筛选框
		initSwiperPageFilter(group) {
			let list = []
			group.forEach((item, index) => {
				list.push(
					[{
							title: '综合',
							active: true
						},
						{
							title: '价格',
							has: true,
							options: false,
							active: false
						},
						{
							title: '销量',
							has: true,
							options: false,
							active: false
						},
						{
							title: '佣金比例',
							has: true,
							options: false,
							active: false
						}
					]
				)
			})
			this.page_filters = list;
		},
		// 获取二级分类菜单(发起)
		// @params pid(String) 	父级淘宝商品分类ID
		getSecondaryCategory(pid) {
			this.$set(this.request_task_group[0], 'data', {
				pid
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 获得商品(发起)
		// @params keywords(Object) 关键词
		// @params s_keywords(Object) 子分类关键词
		// @params page(Number) 页面索引
		// @params s_index(Number) 子分类索引
		// @params noloading(Boolean) 是否不需要加载
		getGoodsList(keywords,page,s_keywords,s_index,noloading){
			
			// console.log('关键词',keywords,'页面',page,'子分类关键词',s_keywords)
			
			let index = this.request_params_group.findIndex(item=>item[0]==keywords.taobao_cat_id)
			// 加载更多不需要顶部加载动画
			if(!noloading)this.page_group[index].loading=true;
			
			this.$set(this.request_task_group[1], 'data', {
				keyword:s_keywords?s_keywords.name:keywords.text,
				min_id:page
			})
			
			let args = s_index?[page,s_index,index]:[page,false,index]
			this.$set(this.request_task_group[1], 'success', (res)=>{
				com.requestResponse(this, args, this.request_handler_group.fetchGoods, res, 'short', 'top')
			})
			this.$set(this.request_task_group[1], 'complete', (res)=>{
				if(this.page_group[index].loadmore){this.loadmoreToggle(index,false)}
				if(this.page_group[index].refresh){this.$set(this.page_group[index],'refresh',false)}
				if(this.page_group[index].loading){this.$set(this.page_group[index],'loading',false)}
			})
			
			this.$set(this.request_task_group[1], 'task', com.createRequestTask(this.request_task_group[1]))
		},
		// 接收二级分类菜单成功(接收)
		fetchSeCateSuccess(pid, res) {
			console.log('接收二级分类菜单成功', res)
			this.renderSecondaryCategory(pid, res.data.data.list)
		},
		// 接收二级分类菜单失败(接收)
		fetchSeCateFailed(res) {
			console.log('接收二级分类菜单失败', res)
		},
		// 获取当前分类下商品成功(接收)
		// @params dataPage(Number) 数据页码
		// @params isSecondary(Number/Boolean) 有子分类则为子分类索引，否则为false
		// @params page(Number) swiper页面索引
		fetchGoodsSuccess(dataPage,isSecondary,page,res){
			console.log('页面索引',page)
			console.log('获取当前分类下商品成功', res)
			this.renderGoodsList(dataPage,page,res.data.data,isSecondary)
		},
		// 获取当前分类下商品失败(接收)
		fetchGoodsFailed(res){
			console.log('获取当前分类下商品失败', res)
		},
		// 渲染二级分类菜单
		renderSecondaryCategory(pid, list) {
			console.log('父级pid', pid, '列表', list)
			let index = this.request_params_group.findIndex(item => item[0] == pid)
			this.$set(this.options[index], 'count', Math.ceil(list.length / 10))
			this.$set(this.options[index], 'list', list)
			
			this.options.forEach(item=>{
				item.list.forEach(item=>{
					Object.assign(item,{goods:[],active:false,page:1})
				})
			})
			console.log('子分类列表',this.options)
		},
		// 渲染商品列表
		// @params page(Number) 商品列表页码
		// @params index(Number) swiper页面索引
		// @params list(Array) 商品数据
		// @params s(Boolean) 是否为子分类数据
		renderGoodsList(page,index,list,s){
			console.log('当前',this.current_page_index,'渲染到了第',index,'第几页',page,'子分类',s)
			// id:'s1',
			// 	title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
			// 	thumb:'/static/goods1.jpg',
			// 	desc:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
			// 	price:'78.90',
			// 	d_price:'128.90',
			// 	discount:'40',
			// 	platform:'/static/tmall.png',
			// 	rewards:'2.55',
			// 	seckill:false,
			// 	storeName:'圣诞节精品店',
			// 	sales:165465
			
			let result = JSON.parse(JSON.stringify(list)
			.replace(/itemid/g,'id')
			.replace(/itemtitle/g,'title')
			.replace(/itempic/g,'thumb')
			.replace(/itemdesc/g,'desc')
			.replace(/itemendprice/g,'price')
			.replace(/itemprice/g,'d_price')
			.replace(/shopname/g,'storeName')
			.replace(/couponmoney/g,'discount')
			.replace(/shoptype/g,'platform')
			.replace(/tkrates/g,'rewards')
			.replace(/itemsale/g,'sales'))
			
			result.forEach(item=>{
				item.platform = item.platform =='B'?'/static/tmall.png':'/static/taobao.png';
			})
			// 是否为第一页
			if(page!=1){
				console.log('加载更多',result)
				// 是否是子分类的商品
				if(!!s){
					this.options[index].list[s].goods.push(...result)
					this.$set(this.options[index].list[s],'page',page)
					this.$set(this.goods_group,index.toString(),this.options[index].list[s].goods)
				}
				else{
					this.$set(this.request_params_group[index],'1',page)
					this.goods_group[index].push(...result)
				}
				this.loadmoreToggle(index,false)
			}
			else{
				this.$set(this.goods_group,index.toString(),[])
				if(!!s){
					this.$set(this.options[index].list[s],'goods',result)
				
				}
				this.$set(this.goods_group,index.toString(),result)
			}
			// 存储筛选用数据
			this.goods_backup_group = JSON.parse(JSON.stringify(this.goods_group))
			
			let f_index = this.page_filters[index].findIndex(item=>item.active==true)
			
			// 打开每次加载即已排序
			// this.filterUpdated({page:index,index:f_index})
			
			// 是否为刷新的数据
			if(this.page_group[index].refresh){
				plus.nativeUI.toast('已更新数据');
			}
		}

	}
}
