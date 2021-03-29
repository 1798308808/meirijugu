import com from '@/static/js/common.js'
export const bill_data = {
	data(){
		return {
			// 排行榜类目页面
			page_group:[
				{
					name:'page1',
					// 渲染标识
					render:true,
					// 加载标识
					loadmore:false,
					// 无数据标识
					nomore:false,
					// 分类面板是否可以使用标识
					disabled:false,
					// 刷新标识
					refresh:false,
					// 分类
					category:[
						// 分类下缓存数据
						// data
					],
					
				},
				{
					name:'page2',
					render:false,
					loadmore:false,
					nomore:false,
					disabled:false,
					refresh:false,
					category:[]
				},
				{
					name:'page3',
					render:false,
					loadmore:false,
					nomore:false,
					disabled:false,
					refresh:false,
					category:[]
				},
			],
			// 商品列表
			goods:[
				[
					// [
					// 	{
					// 		id:'s1',
					// 		title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
					// 		thumb:'/static/goods1.jpg',
					// 		price:'78.90',
					// 		d_price:'128.90',
					// 		discount:'40',
					// 		platform:'/static/tmall_v.png',
					// 		rewards:'2.55',
					// 		sales:189,
					// 		video:true
					// 	},
					// ]
				],[],[]
			],
			// 请求处理集合
			request_handler_group:{
				fetchBillBoard:[
					{
						code:1,
						handle:()=>this.fetchBillBoardSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchBillBoardFailed
					}
					
				],
				fetchCategory:[
					{
						code:0,
						handle:()=>this.fetchCategorySuccess
					},
					{
						code:-1,
						handle:()=>this.fetchCategoryFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取排行榜数据',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getSalesList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:()=>{},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
				{
					task:null,
					func:'获取分类列表',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getCidList',
					method:'GET',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchCategory,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				}
			]
		}
	},
	methods:{
		// 获取排行榜(发起)
		// @params sale_type(Number) 当前排行榜索引 0 1 2
		// @params cid(Number) 类目
		// @params min_id(Number) 页数
		fetchBillBoard(sale_type,cid,min_id,first_time){
			sale_type = com.accPlus(sale_type,1);
			this.$set(this.request_task_group[0],'data',{sale_type,cid,min_id})
			this.$set(this.request_task_group[0],'success',(res)=>{
				com.requestResponse(this,[first_time,sale_type-1,cid,min_id],this.request_handler_group.fetchBillBoard,res,'short','bottom')
			})
			this.$set(this.request_task_group[0],'complete',(res)=>{
				if(this.page_group[sale_type-1].loadmore){
					this.$set(this.page_group[sale_type-1],'loadmore',false)
					this.$refs._list[sale_type-1].reset()
				}
				if(this.page_group[sale_type-1].disabled)this.$set(this.page_group[sale_type-1],'disabled',false)
				if(this.page_group[sale_type-1].refresh)this.$set(this.page_group[sale_type-1],'refresh',false)
			})
			
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取分类
		fetchCategory(){
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取排行榜成功(接收)
		fetchBillBoardSuccess(first,type,category,page,res){
			if(this.cover)this.cover=false;
			console.log('获取排行榜成功')
			this.renderGoodsList(first,type,category,page,res.data)
		},
		// 获取排行榜失败(接收)
		fetchBillBoardFailed(res){
			console.log('获取排行榜失败',res)
		},
		// 获取分类成功(接收)
		fetchCategorySuccess(res){
			console.log('获取分类成功',res)
			this.renderCategory(res.data.data.list)
		},
		// 获取分类失败(接收)
		fetchCategoryFailed(res){
			console.log('获取分类失败',res)
		},
		// 渲染分类列表
		renderCategory(list){
			let result =JSON.parse(JSON.stringify(list).replace(/name/g,'text'))
			
			result.forEach((item,index)=>{
				Object.assign(item,{active:index==0?true:false})
				Object.assign(item,{data:[],page:1})
			})
			
			this.page_group.forEach((item,index)=>{
				this.$set(this.page_group[index],'category',JSON.parse(JSON.stringify(result)))
			})
			
			this.fetchBillBoard(0,0,1,true)
		},
		// 渲染分类下商品列表
		renderGoodsList(first,current_page,category,page,list){
			// 下一次请求的min_id
			let _page = list.min_id;
			
			list = list.data;
			
			let group = []
			let result = JSON.parse(JSON.stringify(list)
			.replace(/itemid/g,'id')
			.replace(/itemtitle/g,'title')
			.replace(/itempic/g,'thumb')
			.replace(/itemendprice/g,'price')
			.replace(/itemprice/g,'d_price')
			.replace(/couponmoney/g,'discount')
			.replace(/shoptype/g,'platform')
			.replace(/tkmoney/g,'rewards')
			.replace(/itemsale/g,'sales')
			)
			
			result.forEach(item=>{
				item.platform = item.platform=='B'?'/static/tmall_v.png':'/static/taobao_v.png'
			})
			
			
			if(first){
				for(var i=0;i<result.length;i+=2){
					group.push(result.slice(i,i+2));
				}
				
				this.$set(this.page_group[current_page].category[category],'data',group)
				this.$set(this.page_group[current_page].category[category],'page',_page)
				this.$set(this.goods,current_page.toString(),group)
			}
			else{
				let category_group = this.page_group[current_page].category[category].data;
				let last = category_group[category_group.length-1].length!=2;
				if(last){
					let sp = result.splice(0,1);
					category_group[category_group.length-1].push(sp[0])
				}
				
				for(var i=0;i<result.length;i+=2){
					group.push(result.slice(i,i+2));
				}
				
				category_group.push(...group)
				
				this.$set(this.page_group[current_page].category[category],'page',_page)
				this.$set(this.goods,current_page.toString(),JSON.parse(JSON.stringify(category_group)))
			}
		}
	},
	onLoad(){
		this.fetchCategory()
	}
}