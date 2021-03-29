import com from '@/static/js/common.js'
export const store_data  = {
	data(){
		return {
			// 为您推荐参数
			user_red_args:[true],
			// 请求处理集合
			request_handler_group:{
				fetchStoreHomePageData:[
					{
						success:true,
						handle:()=>this.getStoreHomePageDataSuccess
					},
					{
						success:false,
						handle:()=>this.getStoreHomePageDataFailed
					},
					{
						complete:true,
						handle:()=>this.getStoreHomePageDataFinished
					}
					
				],
			},
			// 请求处理集合2
			request_handler_group2:{
				// 获取推荐商品
				getUserRecommandation:[
					{
						code:1,
						handle:()=>this.getUserRecommandationSuccess
					},
					{
						code:-1,
						handle:()=>this.getUserRecommandationFailed
					}
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取商城首页轮播图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:14}
				},
				{
					task:null,
					func:'获取商城顶部头图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:13}
				},
				{
					task:null,
					func:'获取商城菜单',
					url:'http://www.jufu-unique.com/app.php/DiyShop/set',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取顶部轮播图和广告图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:16},
					success:(res)=>{},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				},
			],
			// 请求集合2
			request_task_group2:[
				{
					task:null,
					func:'获取为您推荐',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.user_red_args,this.request_handler_group2.getUserRecommandation,res,'short','bottom',this.user_red_args)
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.re_loading = false;
					}
				}
			],
			// 说明
			instructions:[
				{
					type:1,
					content:'注意事项1.'
				},
				{
					type:2,
					content:'博菲欧热门儿童更可怕，二炮凯特偶然，配,任，Pero图,Pro欧特热破特欧普瑞儿童饿'
				},
				{
					type:1,
					content:'注意事项2.'
				},
				{
					type:2,
					content:'范德萨发文违法违法为额外访问weewf，we为违法为潍坊微服务是佛我欧哥哥任天野'
				},
			],
			// 菜单列表
			m_group:[
				{
					id:'s1',
					title:'母婴'
				},
				{
					id:'s2',
					title:'婚庆用品'
				},
				{
					id:'s3',
					title:'床上用品'
				},
				{
					id:'s5',
					title:'数码摄像'
				},
				{
					id:'s6',
					title:'手机3C'
				},
				{
					id:'s7',
					title:'门'
				},
			],
			// 商品列表
			goods:[
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
				// 	}
				// ]
			],
			// 双列面板
			double_group:[
				// [
				// 	{	
				// 		id:'s4',
				// 		sort:1,
				// 		title:'骑士秒杀',
				// 		title2:'每日整点秒杀',
				// 		desc:'限时折扣 疯抢中',
				// 		group_type:3,
				// 		img:[
				// 			{
				// 				thumb:'/static/goods1.jpg',
				// 				d_price:'1',
				// 				price:'9.9'
				// 			},
				// 			{
				// 				thumb:'/static/goods2.webp',
				// 				d_price:'9.9',
				// 				price:'19.9'
				// 			},
				// 			{
				// 				thumb:'/static/good3.webp',
				// 				d_price:'3549',
				// 				price:'9999.9'
				// 			}
				// 		]
				// 	},
				// ]
			],
			// 广告面板栏
			ad_group:[
				{
					id:'s1',
					title:'零食一站购',
					desc:'第2件0元',
					thumb:'/static/goods1.jpg',
					name:'9.9元秒杀',
					color:1
				},
				{
					id:'s2',
					title:'1500大额券',
					desc:'第2件0元',
					thumb:'/static/goods1.jpg',
					name:'大牌选购',
					color:2
				},
				{
					id:'s3',
					title:'小米note9新品',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'天猫/淘宝',
					color:3
				},
				{
					id:'s4',
					title:'抽888元神券',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'京东',
					color:4
				},
				{
					id:'s5',
					title:'抢1212元红包',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'拼多多',
					color:5
				},
				{
					id:'s6',
					title:'45元任选7件',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'骑士自营',
					color:6
				},
				{
					id:'s7',
					title:'预付超低价',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'考拉海狗',
					color:2
				},
				{
					id:'s8',
					title:'榜单狂欢购',
					desc:'立即领取',
					thumb:'/static/goods1.jpg',
					name:'京东',
					color:3
				}
			],
			// 顶部面板
			top_banner:'',
			// 菜单项
			menu_group:[
				// {
				// 	id:'s1',
				// 	title:'骑士优选',
				// 	desc:'低至1折',
				// 	thumb:'/static/zz1.png',
				// 	spec:'自营'
				// }
			],
			// 广告轮播图
			banner:[
				// {
				// 	id:'b1',
				// 	src:'/static/bb1.png',
				// },
				// {
				// 	id:'b2',
				// 	src:'/static/bb2.png',
				// }
			],
			// swiper页面配置
			page_group:[
				{
					name:'page1',
					render:true
				},
				{
					name:'page2',
					render:true
				},
				{
					name:'page3',
					render:true
				}
			],
			// swiper页面标题
			options_group:[
				{
					active:true,
					text:'猜你喜欢',
					desc:'精选推荐',
				},
				{
					active:false,
					text:'低至1折',
					desc:'骑士优选',
				},
				{
					active:false,
					text:'最高返90%',
					desc:'淘宝天猫',
				},
				{
					active:false,
					text:'最高返30%',
					desc:'京东',
				},
				{
					active:false,
					text:'低至1折',
					desc:'拼多多',
				},{
					active:false,
					text:'最高返90%',
					desc:'唯品会',
				},
			],
		}
	},
	methods:{
		// 获取为您推荐列表(发起)
		// @params type(Number) 推荐类型
		// @params min_id(Number) 第几页
		// @params back(Number) 每页几条，默认20
		getUserRecommandation(type,min_id,back){
			console.log('min_id',min_id)
			this.$set(this.request_task_group2[0],'data',{type:!!type?type:1,min_id:!!min_id?min_id:1,back:!!back?back:20,sale_min:500})
			this.$set(this.request_task_group2[0],'task',com.createRequestTask(this.request_task_group2[0]))
		},
		// 获取商城首页信息开始(发起)
		async getStoreHomePageData(){
			let result = await com.createIntegrationTask(this.request_task_group,[0,0,0,0],this,this.request_handler_group.fetchStoreHomePageData);
		},
		// 获取为您推荐成功(接收)
		getUserRecommandationSuccess(isFirstTime,res){
			console.log('获取为您推荐成功',isFirstTime)
			console.log('当前页面',res)
			this.current_page = res.data.min_id;
			if(isFirstTime){
				this.renderUserRecommand(res.data.data)
			}
			else{
				this.renderUserRecommand(res.data.data,true)
				this.loadmore=false;
			}
		},
		// 获取为您推荐失败(接收)
		getUserRecommandationFailed(isFirstTime,res){
			console.log('获取为您推荐失败',res)
			if(!isFirstTime){
				this.loadmore=false;
			}
		},
		// 获取商城首页信息成功(接收)
		getStoreHomePageDataSuccess(res){
			console.log('获取信息成功',res)
			this.renderStoreBanner(res[0].res.list)
			this.renderStoreHeader(res[1].res.list)
			this.renderStoreMenu(res[2].res.moduleList)
			this.renderStoreADS(res[3].res.list)
		},
		// 获取商城首页信息失败(接收)
		getStoreHomePageDataFailed(res){
			console.log('获取信息失败',res)
		},
		// 获取商城首页信息结束(接收)
		getStoreHomePageDataFinished(){
			console.log('获取信息结束')
			
			com.refreshOver(this.refresh,true)
			com.refreshOver((this.cover&&!this.showSkeleton),true)
			
			this.cover=false;
			this.showSkeleton=false;
			this.refresh=false;
		},
		// 渲染为您推荐商品
		// @params loadmore(Boolean) 是否为加载更多
		renderUserRecommand(list,loadmore){
			if(list.length==0&&loadmore){
				this.nomore=true;
				return;
			}
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
				if(this.goods[this.goods.length -1].length!=2){
					this.goods[this.goods.length -1].push(result.splice(0,1)[0])
				}
			}
			
			// 分割成两个一组，cell限制
			let group = []
			for(let i=0;i<result.length;i+=2){
				group.push(result.slice(i,i+2));
			}
		
			if(loadmore){
				console.log('当前页数',this.current_page)
				this.goods.push(...group)
				this.$refs.home.reset()
			}
			else{
				this.goods = group;
			}
		},
		// 渲染商城首页轮播图(渲染)
		renderStoreBanner(group){
			this.banner = group
		},
		// 渲染商城首页头图(渲染)
		renderStoreHeader(group){
			this.top_banner = 'http://www.jufu-unique.com/' + group[0].img
		},
		// 渲染商城首页菜单(渲染)
		renderStoreMenu(group){
			let list = [];
			group.forEach(item=>{
				let obj ={
					id:item.id,
					title:item.name,
					desc:item.instructions,
					thumb:'http://www.jufu-unique.com/' +item.icon,
					spec:item.discount
				}
				list.push(obj)
			})
			this.menu_group = list;
			
		},
		// 渲染首页广告
		renderStoreADS(list){
			list.forEach(item=>{
				item.img = item.img.map(item=>{let obj = {thumb:'http://www.jufu-unique.com/' + item};item=obj;return item})
			})
			let group = []
			for(var i=0;i<list.length;i+=2){
				group.push(list.slice(i,i+2));
			}
			this.double_group = group;
		}
	},
	mounted(){
		this.getStoreHomePageData()
	}
}