import com from '@/static/js/common.js'
export const platform_data = {
	data(){
		return {
			// 广告轮播图
			banner:[
				// {
				// 	id:'b1',
				// 	img:'/static/bb1.png',
				// },
			],
			// 广告
			double_group:[
				// [
				// 	{	
				// 		id:'s4',
				// 		type:1,
				// 		title:'骑士秒杀',
				// 		sub:'每日整点秒杀',
				// 		desc:'限时折扣 疯抢中',
				// 		g_type:2,
				// 		group:[
				// 			{
				// 				thumb:'/static/goods1.jpg',
				// 			},
				// 			{
				// 				thumb:'/static/goods1.jpg',
				// 			},
				// 		]
				// 	}
				// ],
			],
			// 平台顶部轮播图
			banner_group:[
				// {
				// 	id:'sg',
				// 	img:'/static/b3.png'
				// }
			],
			// 分类集合
			menu_group:[
				// [
				// 	{
				// 		id:'s1',
				// 		icon:'/static/menu_n.png',
				// 		name:'1元疯抢'
				// 	},
				// ]
			],
			// 请求处理集合
			request_handler_group:{
				getPDDMenu:[
					{
						code:0,
						handle:()=>this.getPDDMenuSuccess
					},
					{
						code:-1,
						handle:()=>this.getPDDMenuFailed
					}
					
				],
				getWPHMenu:[
					{
						code:0,
						handle:()=>this.getWPHMenuSuccess
					},
					{
						code:-1,
						handle:()=>this.getWPHMenuFailed
					}
					
				],
				getTBMenu:[
					{
						code:0,
						handle:()=>this.getTBMenuSuccess
					},
					{
						code:-1,
						handle:()=>this.getTBMenuFailed
					}
					
				],
				getJDMenu:[
					{
						code:0,
						handle:()=>this.getJDMenuSuccess
					},
					{
						code:-1,
						handle:()=>this.getJDMenuFailed
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
				getADS:[
					{
						code:0,
						handle:()=>this.getADSSuccess
					},
					{
						code:-1,
						handle:()=>this.getADSFailed
					}
					
				],
				getMBanner:[
					{
						code:0,
						handle:()=>this.getMBannerSuccess
					},
					{
						code:-1,
						handle:()=>this.getMBannerFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取拼多多分类',
					url:'http://www.jufu-unique.com/app.php/Pdd/getTopCatList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getPDDMenu,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
					}
				},
				{
					task:null,
					func:'获取唯品会分类',
					url:'http://www.jufu-unique.com/app.php/Vip/getTopCatList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getWPHMenu,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
					}
				},
				{
					task:null,
					func:'获取淘宝分类',
					url:'http://www.jufu-unique.com/app.php/TaobaoCat/getTopCatList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getTBMenu,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
					}
				},
				{
					task:null,
					func:'获取京东分类',
					url:'http://www.jufu-unique.com/app.php/JingdongCat/getTopCatList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getJDMenu,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
					}
				},
				{
					task:null,
					func:'获取顶部轮播图和广告图',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				},
			]
		}
	},
	methods:{
		// 定制平台动作
		startPlatformActions(type){
			switch(type){
				case 1:
					this.getTBMenu();
					this.getTopBanner(20)
					this.getADS(11)
					this.getMBanner(23)
				break;
				case 2:
					this.getJDMenu();
					this.getTopBanner(19)
					this.getADS(10)
					this.getMBanner(24)
				break;
				case 3:
					this.getPDDMenu();
					this.getTopBanner(21)
					this.getADS(12)
					this.getMBanner(25)
				break;
				case 4:
					this.getWPHMenu();
					this.getTopBanner(22)
					this.getADS(17)
					this.getMBanner(26)
				break;
			}
		},
		// 获取顶部轮播图(发起)
		getTopBanner(id){
			this.$set(this.request_task_group[4],'data',{cat_id:id})
			this.$set(this.request_task_group[4],'success',(res)=>{com.requestResponse(this,[],this.request_handler_group.getTopBanner,res,'short','bottom')})
			this.$set(this.request_task_group[4],'task',com.createRequestTask(this.request_task_group[4]))
		},
		// 获取广告图(发起)
		getADS(id){
			this.$set(this.request_task_group[4],'data',{cat_id:id})
			this.$set(this.request_task_group[4],'success',(res)=>{com.requestResponse(this,[],this.request_handler_group.getADS,res,'short','bottom')})
			this.$set(this.request_task_group[4],'task',com.createRequestTask(this.request_task_group[4]))
		},
		// 获取中部轮播图(发起)
		getMBanner(id){
			this.$set(this.request_task_group[4],'data',{cat_id:id})
			this.$set(this.request_task_group[4],'success',(res)=>{com.requestResponse(this,[],this.request_handler_group.getMBanner,res,'short','bottom')})
			this.$set(this.request_task_group[4],'task',com.createRequestTask(this.request_task_group[4]))
		},
		// 获取拼多多平台分类(发起)
		getPDDMenu(){
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取拼多多平台分类成功(接收)
		getPDDMenuSuccess(res){
			console.log('获取拼多多平台分类成功',res)
			this.renderCategory(res.data.data.list)
		},
		// 获取拼多多平台分类失败(接收)
		getPDDMenuFailed(res){
			console.log('获取拼多多平台分类失败',res)
		},
		// 获取唯品会平台分类(发起)
		getWPHMenu(){
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取唯品会平台分类成功(接收)
		getWPHMenuSuccess(res){
			console.log('获取唯品会平台分类成功',res)
			this.renderCategory(res.data.data.list)
		},
		// 获取唯品会平台分类失败(接收)
		getWPHMenuFailed(res){
			console.log('获取唯品会平台分类失败',res)
		},
		// 获取淘宝/天猫平台分类(发起)
		getTBMenu(){
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取淘宝/天猫平台分类成功(接收)
		getTBMenuSuccess(res){
			console.log('获取淘宝/天猫平台分类成功',res)
			this.renderCategory(res.data.data.list)
		},
		// 获取淘宝/天猫平台分类失败(接收)
		getTBMenuFailed(res){
			console.log('获取淘宝/天猫平台分类失败',res)
		},
		// 获取京东平台分类(发起)
		getJDMenu(){
			this.$set(this.request_task_group[3],'task',com.createRequestTask(this.request_task_group[3]))
		},
		// 获取京东平台分类成功(接收)
		getJDMenuSuccess(res){
			console.log('获取京东平台分类成功',res)
			this.renderCategory(res.data.data.list)
		},
		// 获取京东平台分类失败(接收)
		getJDMenuFailed(res){
			console.log('获取京东平台分类失败',res)
		},
		// 获取顶部轮播图成功 (接收)
		getTopBannerSuccess(res){
			console.log('获取顶部轮播图成功',res)
			this.renderTopBanner(res.data.data.list)
		},
		// 获取顶部轮播图失败(接收)
		getTopBannerFailed(res){
			console.log('获取顶部轮播图失败',res)
		},
		// 获取广告成功 (接收)
		getADSSuccess(res){
			console.log('获取广告成功',res)
			this.renderADS(res.data.data.list)
		},
		// 获取广告失败(接收)
		getADSFailed(res){
			console.log('获取广告失败',res)
		},
		// 获取中部轮播图成功 (接收)
		getMBannerSuccess(res){
			console.log('获取中部轮播图成功',res)
			this.renderMBanner(res.data.data.list)
		},
		// 获取中部轮播图失败(接收)
		getMBannerFailed(res){
			console.log('获取中部轮播图失败',res)
		},
		// 渲染顶部轮播图(渲染)
		renderTopBanner(list){
			this.banner_group = list.map((item)=>{item.img = 'http://www.jufu-unique.com/' + item.img;return item});
		},
		// 渲染广告(渲染)
		renderADS(list){
			list.forEach(item=>{
				item.img = item.img.map(item=>{let obj = {thumb:'http://www.jufu-unique.com/' + item};item=obj;return item})
			})
			let group = []
			for(var i=0;i<list.length;i+=2){
				group.push(list.slice(i,i+2));
			}
			console.log('结果',group)
			this.double_group = group;
		},
		// 渲染中部轮播图(渲染)
		renderMBanner(list){
			this.banner = list
		},
		// 渲染分类(渲染)
		renderCategory(list){
			let group = []
			for(var i=0;i<list.length;i+=10){
				group.push(list.slice(i,i+10));
			}
			this.category_count = group.length;
			let result = '';
			switch(this.platform_info.type){
				case 1:
					result = JSON.parse(JSON.stringify(group).replace(/taobao_cat_id/g,'id'))
				break;
				case 2:
					result = JSON.parse(JSON.stringify(group).replace(/jingdong_cat_id/g,'id'))
				break;
				case 3:
					result = JSON.parse(JSON.stringify(group).replace(/opt_id/g,'id'))
				break;
				case 4:
					result = JSON.parse(JSON.stringify(group).replace(/vip_cat_id/g,'id'))
				break;
			}
			result.forEach(item=>{
				item.forEach(item=>{
					item.icon = 'http://www.jufu-unique.com/' + item.icon;
				})
			});
			
			this.menu_group = result
			
		}
	}
}