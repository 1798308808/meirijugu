import com from '@/static/js/common.js'
export const list_data = {
	data(){
		return {
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
				// 	},
				// 	{
				// 		id:'s2',
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
			],
			// 请求处理集合
			request_handler_group:{
				getPDDGoodsList:[
					{
						code:0,
						handle:()=>this.getPDDGoodsListSuccess
					},
					{
						code:-1,
						handle:()=>this.getPDDGoodsListFailed
					}
					
				],
				getWPHGoodsList:[
					{
						code:0,
						handle:()=>this.getWPHGoodsListSuccess
					},
					{
						code:-1,
						handle:()=>this.getWPHGoodsListFailed
					}
					
				],
				getTBGoodsList:[
					{
						code:1,
						handle:()=>this.getTBGoodsListSuccess
					},
					{
						code:-1,
						handle:()=>this.getTBGoodsListFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取拼多度商品列表',
					url:'http://www.jufu-unique.com/app.php/Pdd/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.request_params,this.request_handler_group.getPDDGoodsList,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
				{
					task:null,
					func:'获取唯品会商品列表',
					url:'http://www.jufu-unique.com/app.php/Vip/getKeywordGoods',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.request_params,this.request_handler_group.getWPHGoodsList,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
				{
					task: null,
					func: '获取淘宝/天猫商品',
					url: 'http://www.jufu-unique.com/app.php/Haodanku/supersearch',
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {},
					success: (res) => {
						com.requestResponse(this,this.request_params,this.request_handler_group.getTBGoodsList,res,'short','bottom')
					},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {
						this.cover = false
					}
				},
			],
			// 请求参数
			request_params:[]
			
		}
	},
	methods:{
		// 获取拼多多商品列表(发起)
		getPDDGoodsList(page){
			this.$set(this.request_task_group[0],'data',{opt_id:this.category_id,page})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取拼多多商品列表成功(接收)
		getPDDGoodsListSuccess(page,res){
			console.log('获取拼多多商品列表成功',res)
			this.renderGoodsList(page,res.data.data.list)
		},
		// 获取拼多多商品列表失败(接收)
		getPDDGoodsListFailed(res){
			console.log('获取拼多多商品列表失败',res)
		},
		// 获取唯品会商品列表(发起)
		getWPHGoodsList(page){
			this.$set(this.request_task_group[1],'data',{keyword:this.title,page})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取唯品会商品列表成功(接收)
		getWPHGoodsListSuccess(page,res){
			console.log('获取唯品会商品列表成功',res)
			this.renderGoodsList(page,res.data.data.list)
		},
		// 获取唯品会商品列表失败(接收)
		getWPHGoodsListFailed(res){
			console.log('获取唯品会商品列表失败',res)
		},
		// 获取淘宝/天猫商品列表(发起)
		getTBGoodsList(page){
			this.$set(this.request_task_group[2],'data',{keyword:this.title,min_id:page})
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取淘宝/天猫商品列表成功(接收)
		getTBGoodsListSuccess(page,res){
			console.log('获取淘宝/天猫商品列表成功',res)
			this.renderGoodsList(page,res.data.data)
		},
		// 获取淘宝/天猫商品列表失败(接收)
		getTBGoodsListFailed(res){
			console.log('获取淘宝/天猫商品列表失败',res)
		},
		// 渲染拼多多商品列表
		// @params page(Number) 当前页数
		// @params list(Array) 数据
		renderGoodsList(page,list){
			if(list.length==0&&page==1){
				console.log('没咯')
				this.nomore=true;
				this.loadmore=true;
				this.refresh=false;
				return;
			}
			console.log('当前页数',page)
			// id:'s1',
			// 		title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
			// 		thumb:'/static/goods1.jpg',
			// 		price:'78.90',
			// 		d_price:'128.90',
			// 		discount:'40',
			// 		platform:'/static/tmall_v.png',
			// 		rewards:'2.55',
			// 		sales:189,
			// 		video:true
			let group = []
			let result = [];
			switch(this.platform){
				case 1:
					result = JSON.parse(JSON.stringify(list)
					.replace(/itemid/g,'id')
					.replace(/itemtitle/g,'title')
					.replace(/itempic/g,'thumb')
					.replace(/itemendprice/g,'price')
					.replace(/itemprice/g,'d_price')
					.replace(/couponmoney/g,'discount')
					.replace(/shoptype/g,'platform')
					.replace(/tkrates/g,'rewards')
					.replace(/itemsale/g,'sales'))
					
					result.forEach(item=>{
						item.platform = item.platform =='B'?'/static/tmall_v.png':'/static/taobao_v.png';
					})
				break;
				case 2:;break;
				case 3:
					result = JSON.parse(JSON.stringify(list)
					.replace(/goods_id/g,'id')
					.replace(/goods_image_url/g,'thumb')
					.replace(/goods_name/g,'title')
					.replace(/mall_cps/g,'price')
					.replace(/coupon_discount/g,'discount')
					.replace(/min_group_price/g,'d_price')
					.replace(/promotion_rate/g,'rewards')
					.replace(/share_rate/g,'platform')
					)
					
					result.forEach(item=>{
						item.platform = '/static/pdd_v.png';
						let d_price = item.d_price.toString().split('');
						d_price.splice(-2,0,'.');
						d_price = Number(d_price.toString().replace(/,/g,""))
						
						
						let discount = item.discount.toString().split('');
						discount.splice(-2,0,'.');
						discount = Number(discount.toString().replace(/,/g,""))
					
						
						item.d_price = d_price;
						item.price = (d_price - discount).toFixed(2);
						item.discount =  discount;
						item.rewards = (com.accMul(item.price,com.accDiv(item.rewards,1000))).toFixed(2)
					})
				break;
				case 4:;
					result = JSON.parse(JSON.stringify(list)
					.replace(/goodsId/g,'id')
					.replace(/goodsThumbUrl/g,'thumb')
					.replace(/goodsName/g,'title')
					.replace(/vipPrice/g,'price')
					.replace(/commissionRate/g,'discount')
					.replace(/marketPrice/g,'d_price')
					.replace(/commission/g,'rewards')
					.replace(/weight/g,'platform')
					)
					
					result.forEach(item=>{
						item.platform = '/static/wph_v.png';
					})
				break;
			}
			
			
			if(page==1){
				for(var i=0;i<result.length;i+=2){
					group.push(result.slice(i,i+2));
				}
				
				this.goods = group;
				
			}
			else{
				let last = this.goods[this.goods.length-1].length!=2;
				if(last){
					let sp = result.splice(0,1);
					this.goods[this.goods.length-1].push(sp[0])
				}
				
				
				for(var i=0;i<result.length;i+=2){
					group.push(result.slice(i,i+2));
				}
				
				this.goods.push(...group)
			}
			
			com.refreshOver(this.refresh,true,()=>{this.refresh=false;})
			
			if(this.loadmore){
				this.loadmore =false;
				this.page = this.page+1;
				this.$refs.ctr.resetLoad();
			}
		}
	}
}