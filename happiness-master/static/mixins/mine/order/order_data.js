import com from '@/static/js/common.js'
export const order_data = {
	data(){
		return {
			// 订单列表 0淘宝 1狗东 2拼多多 3 唯品会
			order:[
				[
					[
						// {
						// 	order_id:15,
						// 	store_name:'KWAS-124旗舰店',
						// 	state:2,
						// 	state_info:'已付款',
						// 	goods_thumb:'/static/goods1.jpg',
						// 	goods_name:'T恤男KWAS联名优衣库潮流搭配优质面料抗机洗抗皱舒适',
						// 	order_number:'1234567890123456789',
						// 	create_time:'2020-05-21 18:00:45',
						// 	income:'6.25',
						// 	price:'255.90'
						// }
					],
					[],
					[]
				],
				[
					[],[],[]
				],
				[
					[],[],[]
				],
				[
					[],[],[]
				]
			],
			// 请求处理集合
			request_handler_group:{
				getOrder:[
					{
						code:0,
						handle:()=>this.getOrderSuccess
					},
					{
						code:-1,
						handle:()=>this.getOrderFailed
					}
					
				],
			},
			// 参数集合
			argsGroup:{
				tb:['0','淘宝',0,1],
				jd:['0','京东',1,1],
				pdd:['0','拼多多',2,1],
				wph:['0','唯品会',3,1]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取淘宝订单',
					url:'http://www.jufu-unique.com/app.php/TaobaoOrder/getOrderList_new',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.argsGroup.tb,this.request_handler_group.getOrder,res,'short','bottom',this.argsGroup.tb)
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
					func:'获取京东订单',
					url:'http://www.jufu-unique.com/app.php/JingdongOrder/getOrderList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.argsGroup.jd,this.request_handler_group.getOrder,res,'short','bottom',this.argsGroup.jd)
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
					func:'获取拼多多订单',
					url:'http://www.jufu-unique.com/app.php/PddOrder/getOrderList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.argsGroup.pdd,this.request_handler_group.getOrder,res,'short','bottom',this.argsGroup.pdd)
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
					func:'获取唯品会订单',
					url:'http://www.jufu-unique.com/app.php/VipOrder/getOrderList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.argsGroup.wph,this.request_handler_group.getOrder,res,'short','bottom',this.argsGroup.wph)
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				}
			]
		}
	},
	methods:{
		// 获取淘宝订单(发起)
		getTaobaoOrder({trade_id='',type='',tk_status='',p='',per=''}={}){
			let token = uni.getStorageSync('token');
			if(!token)return;
			this.$set(this.request_task_group[0],'data',{token:token.val,trade_id,type,tk_status,p,per})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取狗东,拼多多,唯品会订单(发起)
		getMultiOrder({order_sn='',type='',order_status='',p='',per='',brand=1}={}){
			let token = uni.getStorageSync('token');
			if(!token)return;
			
			this.$set(this.request_task_group[brand],'data',{token:token.val,order_sn,type,order_status,p,per})
			this.$set(this.request_task_group[brand],'task',com.createRequestTask(this.request_task_group[brand]))
		},
		// 获取订单成功(接收)
		// @params index(String) 平台订单类型索引 0我的 1直邀 2间邀
		// @params name(String) 平台名称
		// @params brand(Number) 平台类型
		// @params res(Object) 服务器返回数据
		getOrderSuccess(index,name,brand,page,res){
			console.log(`获取${name}订单成功`,res)
			this.toggleSwiperPageAnimation('refresh',parseInt(index),false)
			this.renderData(brand,index,res.data.data.list,page)
			
			// 若为加载操作，成功后需要更新当前数据页数
			if(page>1)this.actionAfterloadmore(brand,index,page,res.data.data.list.length,true)
		},
		// 获取订单失败(接收)
		// @params 同上
		getOrderFailed(index,name,brand,page,res){
			console.log(`获取${name}订单失败`,res)
			this.toggleSwiperPageAnimation('refresh',parseInt(index),false)
			
			// 若为加载操作，成功后需要更新当前数据页数
			if(page>1)this.actionAfterloadmore(brand,index,page,0,false)
		},
		// 渲染数据
		// @params brand(Number)平台 0淘宝 1京东 2拼多多 3唯品会
		// @params data 商品列表
		// @params type(String) 订单类型 0我的订单 1直邀 2间邀
		renderData(brand,type,data,page){
			let group = [];
			data.forEach(item=>{
				let obj = {};
				switch(brand){
					case 0:
						obj  ={
							order_id:item.num_iid,
							store_name:item.seller_shop_title,
							state:item.tk_status,
							state_info:this.stringifyOrderStatus(brand,item.tk_status),
							goods_thumb:item.goods_img,
							goods_name:item.item_title,
							order_number:item.trade_id,
							create_time:item.create_time,
							income:item.commission,
							price:item.alipay_total_price
						};
					break;
					case 1:
						obj  ={
							order_id:item.skuid,
							store_name:'',
							state:item.order_status,
							state_info:this.stringifyOrderStatus(brand,item.order_status),
							goods_thumb:item.goods_img,
							goods_name:item.goods_name,
							order_number:item.order_sn,
							create_time:item.order_time,
							income:item.commission,
							price:item.pay_price
						};
					break;
					case 2:
						obj  ={
							order_id:item.goods_id,
							store_name:'',
							state:item.order_status,
							state_info:this.stringifyOrderStatus(brand,item.order_status),
							goods_thumb:item.goods_thumbnail_url,
							goods_name:item.goods_name,
							order_number:item.order_sn,
							create_time:item.order_create_time,
							income:item.pdd_commission,
							price:item.goods_price
						};
					break;
					case 3:
						obj  ={
							order_id:item.goodsid,
							store_name:'',
							state:item.vipstatus,
							state_info:item.ordersubstatusname,
							goods_thumb:item.goodsthumb,
							goods_name:item.goodsname,
							order_number:item.ordersn,
							create_time:item.ordertime,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
							income:item.commission,
							price:item.commissiontotalcost
						};
					break;
				}
				
				group.push(obj)
			})
			if(page>1){
				this.order[brand][type].push(...group)
			}
			else{
				this.$set(this.order[brand],type,group)
			}
			
		}
	}
}