import com from '@/static/js/common.js'
export const home_data={
	data(){
		return {
			// 顶部分类栏
			menu_group:[
				// {
				// 	text:'精选',
				// 	active:true
				// },
				// {
				// 	text:'母婴',
				// 	active:false
				// },
			],
			// 顶部三图广告
			top_billboard:[
				// 结构同返回数据
			],
			// 轮播图数据
			banner_group:[
				// 结构同返回数据
			],
			// 0元包邮数据
			free_group:{
				bg:'',
				group:[]
			},
			// 宫格菜单数据
			subarea_item_group:[
				// {
				// 	id:'page0',
				// 	active:true,
				// 	width:20,
				// 	data:[
				// 		{
				// 			icon:'/static/kk_hk.png',
				// 			text:'特权卡'
				// 		}
				// 	]
				// },
				// {
				// 	id:'page1',
				// 	active:false,
				// 	width:5,
				// 	data:[
				// 	]
				// }
			],
			// 好物推荐
			nice_goods:[
				// {
				// 	id:'s1',
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
				// 	sales:null
				// },
				// {
				// 	id:'s2',
				// 	title:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
				// 	thumb:'/static/goods2.webp',
				// 	desc:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
				// 	price:'1500.90',
				// 	d_price:'2200.90',
				// 	discount:'30',
				// 	platform:'/static/jd.png',
				// 	rewards:'9.55',
				// 	seckill:false,
				// 	storeName:null,
				// 	sales:null
				// }
			],
			// 秒杀商品
			kill_goods:[
				[],[],[],[],[]
				// {
				// 	id:'s1',
				// 	title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 	thumb:'/static/goods1.jpg',
				// 	desc:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 	price:'78.90',
				// 	d_price:'128.90',
				// 	discount:'40',
				// 	platform:'/static/tmall.png',
				// 	rewards:'2.55',
				// 	seckill:true,
				// 	storeName:'圣诞节精品店',
				// 	sales:null
				// },
			],
			// 为您推荐(双栏商品)
			db_group:[
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
				// 		sales:189
				// 	},
				// 	{
				// 		id:'s2',
				// 		title:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
				// 		thumb:'/static/goods2.webp',
				// 		price:'1500.90',
				// 		d_price:'2200.90',
				// 		discount:'30',
				// 		platform:'/static/jd_v.png',
				// 		rewards:'9.55',
				// 		sales:777
				// 	},
				// ],
			],
			// 佣金播报
			boardcast:[],
			// 请求处理集合
			request_handler_group:{
				// 轮播图,宫格菜单,佣金播报,新人区,宫格轮播图,六张广告
				fetchNewsAndOthers:[
					{
						success:true,
						handle:()=>this.fetchNewsAndOthersSuccess
					},
					{
						success:false,
						handle:()=>this.fetchNewsAndOthersFailed
					},
					{
						complete:true,
						handle:()=>this.fetchNewsAndOthersFinished
					}
					
				],
				// 获取好物推荐
				getNiceRecommandation:[
					{
						code:0,
						handle:()=>this.getNiceRecommandationSuccess
					},
					{
						code:-1,
						handle:()=>this.getNiceRecommandationFailed
					}
				],
				// 获取秒杀
				getSeckillList:[
					{
						code:1,
						handle:()=>this.getSeckillListSuccess
					},
					{
						code:-1,
						handle:()=>this.getSeckillListFailed
					}
				],
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
				// 获取推荐商品
				getFreeGoods:[
					{
						code:0,
						handle:()=>this.getFreeGoodsSuccess
					},
					{
						code:-1,
						handle:()=>this.getFreeGoodsFailed
					}
				],
			},
			// 联合请求集合
			request_task_group:[
				{
					task:null,
					func:'获取轮播图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:1}
				},
				{
					task:null,
					func:'获取宫格列表',
					url:'http://www.jufu-unique.com/app.php/Diy/set',
					method:'GET',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取佣金播报',
					url:'http://www.jufu-unique.com/app.php?c=User&a=bobao',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取新人区图片',
					url:'http://www.jufu-unique.com/app.php/Bk/getBkList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:1}
				},
				{
					task:null,
					func:'特权卡轮播图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:3}
				},
				{
					task:null,
					func:'宫格广告位',
					url:'http://www.jufu-unique.com/app.php/Bk/getBkList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:2}
				},
				{
					task:null,
					func:'活动广场',
					url:'http://www.jufu-unique.com/app.php/Bk/getBkList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:3}
				},
				{
					task:null,
					func:'头部分类',
					url:'http://www.jufu-unique.com/app.php/TaobaoCat/getTopCatList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'首页顶部广告和0元包邮背景',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:28}
				},
			],
			request_task_group2:[
				{
					task:null,
					func:'获取好物推荐',
					url:'http://www.jufu-unique.com/app.php/Tbk/getHotGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getNiceRecommandation,res,'short','bottom',[])
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.sections_loading_status.nice_stuff = false;
					}
				},
				{
					task:null,
					func:'获取为您推荐',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.user_red_args,this.request_handler_group.getUserRecommandation,res,'short','bottom',this.user_red_args)
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.sections_loading_status.user_red = false;
					}
				},
				{
					task:null,
					func:'获取限时秒杀',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getFastBuyList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.seckill_args,this.request_handler_group.getSeckillList,res,'short','bottom',[])
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.sections_loading_status.seckill = false;
					}
				},
				{
					task:null,
					func:'获取0元包邮',
					url:'http://linghuyouxi.cn/app.php/Tbk/getFreeGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getFreeGoods,res,'short','bottom',[])
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.sections_loading_status.free = false;
					}
				},
			],
			// 为您推荐参数
			user_red_args:[true],
			// 秒杀列表参数
			seckill_args:[],
			// 当前显示场数
			seckill_games:0
		}
	},
	methods:{
		// 接受根页面分发数据
		transmitData(data){
			console.log(`我${this.id}已接受到数据`,data)
		},
		// 获取0元包邮页面(发起)
		getFreeGoods(){
			this.$set(this.request_task_group2[3],'task',com.createRequestTask(this.request_task_group2[3]))
		},
		// 获取好物推荐列表(发起)
		getNiceRecommandation(){
			this.$set(this.request_task_group2[0],'task',com.createRequestTask(this.request_task_group2[0]))
		},
		// 获取秒杀列表(发起)
		// @params hour_type 第几场(具体见接口)
		// @params min_id(Number) 第几页
		getSeckillList(hour_type){
			this.$set(this.request_task_group2[2],'data',{hour_type,min_id:1})
			this.$set(this.request_task_group2[2],'task',com.createRequestTask(this.request_task_group2[2]))
		},
		// 获取为您推荐列表(发起)
		// @params type(Number) 推荐类型
		// @params min_id(Number) 第几页
		// @params back(Number) 每页几条，默认20
		getUserRecommandation(type,min_id,back){
			console.log('min_id',min_id)
			this.$set(this.request_task_group2[1],'data',{type:!!type?type:1,min_id:!!min_id?min_id:1,back:!!back?back:20})
			this.$set(this.request_task_group2[1],'task',com.createRequestTask(this.request_task_group2[1]))
		},
		// 获取新人区图片及宫格广告及特权卡轮播图(发起)
		async fetchNewsAndOthers(refresh){
			if(!refresh)this.cover=true;
			let result = await com.createIntegrationTask(this.request_task_group,[0,0,0,0,0,0,0,0,0],this,this.request_handler_group.fetchNewsAndOthers);
		},
		// 获取首屏接口成功(接收)
		fetchNewsAndOthersSuccess(data){
			console.log('获取首屏接口成功')
			console.log('轮播图',data[0].res)
			console.log('宫格列表',data[1].res)
			console.log('佣金播报',data[2].res)
			console.log('新人区',data[3].res)
			console.log('特权轮播图',data[4].res)
			console.log('宫格广告',data[5].res)
			console.log('活动广场',data[6].res)
			console.log('头部分类',data[7].res)
			console.log('首页顶部广告',data[8].res)
			this.renderBanner(data[0].res.list)
			this.renderSubareaGroup(data[1].res.moduleList)
			this.renderCommissionBroadcast(data[2].res.list)
			this.renderNewsAndOthers(data[3].res.list,data[4].res.list,data[5].res.list)
			this.renderPlaza(data[6].res.list)
			this.renderTopCategory(data[7].res.list)
			this.renderTopBillBoardAndFreeBackground(data[8].res.list)
		},
		// 获取首屏接口失败(接收)
		fetchNewsAndOthersFailed(res){
			console.log('获取首屏接口失败',res)
		},
		// 获取首屏接口结束(接收)
		fetchNewsAndOthersFinished(){
			console.log('获取首屏接口完成')
			if(this.refresh||(this.cover&&!this.showSkeleton)){
				com.refreshOver(this.refresh,true)
			}
			this.cover=false;
			this.showSkeleton=false;
			this.refresh = false;
		},
		// 获取好物推荐成功(接收)
		getNiceRecommandationSuccess(res){
			console.log('获取好物推荐成功',res)
			this.renderNiceStuff(res.data.data.list)
		},
		// 获取好物推荐失败(接收)
		getNiceRecommandationFailed(res){
			console.log('获取好物推荐失败',res)
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
		// 获取秒杀好物成功(接收)
		getSeckillListSuccess(column,res){
			console.log('获取秒杀好物成功',res)
			this.renderSeckillList(column,res.data.data)
		},
		// 获取秒杀好物失败(接收)
		getSeckillListFailed(res){
			console.log('获取秒杀好物失败',res)
		},
		// 获取0元包邮成功(接收)
		getFreeGoodsSuccess(res){
			console.log('获取0元包邮成功',res)
			this.renderFreeGoods(res.data.data.list)
		},
		// 获取0元包邮失败(接收)
		getFreeGoodsFailed(res){
			console.log('获取0元包邮失败',res)
		},
		// 渲染顶部广告和0元包邮背景图
		renderTopBillBoardAndFreeBackground(list){
			let group = [];
			list.forEach(item=>{
				item.img = 'http://www.jufu-unique.com/' + item.img;
				group.push(item)
			})
			this.top_billboard = group;
			this.free_group.bg = group[group.length-1].img;
		},
		// 渲染轮播图(渲染)
		renderBanner(list){
			let group = [];
			list.forEach(item=>{
				item.img = 'http://www.jufu-unique.com/' + item.img;
				group.push(item)
			})
			let length = this.banner_group.length;
			this.banner_group = group;
			if(length==0){
				this.current_background_color = [{color:this.changeBackgroundColor()}]
				this.navbarColor = this.changeBackgroundColor()
			}
		},
		// 渲染宫格(渲染)
		renderSubareaGroup(list){
			let group = []
			let result = [];
			for(let i=0;i<list.length;i+=10){
				group.push(list.slice(i,i+10));
			}
			group.forEach((item,index)=>{
				let obj = {
					id:`grid${index}`,
					active:index==0?true:false,
					width:index==0?20:5,
					data:item
				}
				result.push(obj)
			})
			this.subarea_item_group = result;
		},
		// 渲染佣金播报(渲染)
		renderCommissionBroadcast(list){
			this.boardcast = list.map((item)=>{item = `${item.account} 获得了 ${item.money} 元`; return item});
		},
		// 渲染新人区,特权卡轮播图,宫格广告(渲染)
		// @params new_zone_group(Array) 新人区
		// @params card_banner(Array) 特权卡轮播图
		// @params card_ad(Array) 宫格广告
		renderNewsAndOthers(new_zone_group,card_banner,card_ad){
			let obj = {
				double:new_zone_group.splice(1,2).map((item)=>{item.img = 'http://www.jufu-unique.com/' + item.img  ;return item;}),
				banner:card_banner.map((item)=>{item.img = 'http://www.jufu-unique.com/' + item.img  ;return item;}),
				activity:card_ad.map((item)=>{item.img = 'http://www.jufu-unique.com/' + item.img  ;return item;})
			}
			this.new_group = [obj];
		},
		// 渲染活动专区
		renderPlaza(res){
			let double = res.splice(0,2);
			let triple = res;
			let obj  = {
				double,
				triple
			}
			this.plaza_group = [obj]
		},
		// 渲染好物推荐
		renderNiceStuff(list){
			let group = []
			let result = []
			list.forEach((item,index)=>{
				let obj = {
					id:item.goods_id,
					title:item.goods_name,
					thumb:item.pict_url,
					desc:item.description,
					price:item.zk_final_price - item.coupon_amount,
					d_price:item.zk_final_price,
					discount:item.coupon_amount,
					platform:item.user_type=='1'?'/static/tmall.png':'/static/taobao.png',
					rewards:item.commission_rate,
					sales:item.volume
				}
				group.push(obj)
			})
			this.nice_goods = group
		},
		// 渲染秒杀列表
		// @params column(Number) 第几场
		renderSeckillList(column,list){
			console.log(column,'第几场')
			
			// id:'s1',
			// title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
			// thumb:'/static/goods1.jpg',
			// desc:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
			// price:'78.90',
			// d_price:'128.90',
			// discount:'40',
			// platform:'/static/tmall.png',
			// rewards:'2.55',
			// seckill:true,
			// storeName:'圣诞节精品店',
			// sales:null,
			
			let result = JSON.parse(JSON.stringify(list)
			.replace(/itemid/g,'id')
			.replace(/itemtitle/g,'title')
			.replace(/itempic/g,'thumb')
			.replace(/itemdesc/g,'desc')
			.replace(/itemshorttitle/g,'seckill')
			.replace(/itemendprice/g,'price')
			.replace(/itemprice/g,'d_price')
			.replace(/shopname/g,'storeName')
			.replace(/couponmoney/g,'discount')
			.replace(/shoptype/g,'platform')
			.replace(/tkmoney/g,'rewards')
			.replace(/itemsale/g,'sales'))
			
			result.forEach(item=>{
				item.platform = item.platform =='B'?'/static/tmall.png':'/static/taobao.png';
				item.seckill = true;
			})
			this.$set(this.kill_goods,column,result)
			
		},
		// 渲染0元包邮商品
		renderFreeGoods(list){
			let group = []
			list.forEach(item=>{
				let obj = {
					id:item.goods_id,
					title:item.goods_name,
					thumb:item.pict_url,
					storeName:null,
					desc:item.description,
					price:(Number(item.zk_final_price) - Number(item.coupon_amount) - Number(item.subsidy_amount)).toFixed(2),
					d_price:item.zk_final_price,
					discount:item.coupon_amount,
					rewards:item.subsidy_amount,
					sales:item.volume
				}
				group.push(obj)
			})
			this.free_group.group = group;
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
				if(this.db_group[this.db_group.length -1].length!=2){
					this.db_group[this.db_group.length -1].push(result.splice(0,1)[0])
				}
			}
			
			// 分割成两个一组，cell限制
			let group = []
			for(let i=0;i<result.length;i+=2){
				group.push(result.slice(i,i+2));
			}

			if(loadmore){
				console.log('当前页数',this.current_page)
				this.db_group.push(...group)
				this.$refs.home.resetLoadMoreGoods()
			}
			else{
				this.db_group = group;
			}
		},
		// 渲染头部分类
		renderTopCategory(list){
			let group = list.map((item,index)=>{
				Object.assign(item,{active:index==0?true:false})
				return item
			})
			
			this.menu_group = group;
		}
	},
	mounted(){
		this.fetchNewsAndOthers()
	}
}