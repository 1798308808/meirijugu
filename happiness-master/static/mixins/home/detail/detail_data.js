import com from '@/static/js/common.js'
export const detail_data = {
	data(){
		return {
			banner:[
				// {
				// 	src:"..."
				// }
			],
			// 顶部广播
			boardcast:[
				// {
				// 	avatar:'/static/avatar.png',
				// 	txt:'用户48484**15646领取了优惠券'
				// },
			],
			// 详情图(拼多多)
			detail_group:[],
			// 优惠券信息
			discount:[
				// {	
				// 	// 优惠券id
				// 	id:'s1',
				// 	// 是否已经使用过
				// 	mute:false,
				// 	// 额度
				// 	title:90.0,
				// 	// 起始日期
				// 	start:'2020.07.20',
				// 	// 有效期
				// 	end:'2020.09.12'
				// },
			],
			// 请求处理集合
			request_handler_group:{
				getGoodsDetail:[
					{
						code:0,
						handle:()=>this.getGoodsDetailSuccess
					},
					{
						code:-1,
						handle:()=>this.getGoodsDetailFailed
					}
					
				],
				getUserSmoke:[
					{
						code:0,
						handle:()=>this.getUserSmokeSuccess
					},
					{
						code:-1,
						handle:()=>this.getUserSmokeFailed
					}
					
				],
				getPDDGoodsDetail:[
					{
						code:0,
						handle:()=>this.getPDDGoodsDetailSuccess
					},
					{
						code:-1,
						handle:()=>this.getPDDGoodsDetailFailed
					}
					
				],
				getWPHGoodsDetail:[
					{
						code:0,
						handle:()=>this.getWPHGoodsDetailSuccess
					},
					{
						code:-1,
						handle:()=>this.getWPHGoodsDetailFailed
					}
					
				],
				addToFav:[
					{
						code:0,
						handle:()=>this.addToFavSuccess
					},
					{
						code:-1,
						handle:()=>this.addToFavFailed
					}
				],
				removeFromFav:[
					{
						code:0,
						handle:()=>this.removeFromFavSuccess
					},
					{
						code:-1,
						handle:()=>this.removeFromFavFailed
					}
				],
				fetchifFav:[
					{
						code:0,
						handle:()=>this.fetchifFavSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchifFavFailed
					}
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取淘宝/天猫商品信息',
					url:'http://www.jufu-unique.com/app.php/Tbk/getGoodsMsg',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getGoodsDetail,res,'short','bottom')
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
					func:'获取商品烟雾弹',
					url:'http://www.jufu-unique.com/app.php/Tbk/getGoodsSmoke',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getUserSmoke,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				},
				{
					task:null,
					func:'获取拼多多商品信息',
					url:'http://www.jufu-unique.com/app.php/Pdd/getGoodsDetail',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getPDDGoodsDetail,res,'short','bottom')
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
					func:'获取唯品会商品信息',
					url:'http://www.jufu-unique.com/app.php/Vip/getGoodsDetail',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getWPHGoodsDetail,res,'short','bottom')
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
					func:'收藏商品',
					url:'',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.addToFav,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.collect_loading = false;
					}
				},
				{
					task:null,
					func:'取消收藏',
					url:'',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.removeFromFav,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.collect_loading = false;
					}
				},
				{
					task:null,
					func:'判断是否收藏',
					url:'',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchifFav,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.collect_loading = false;
					}
				}
			],
			// 商品消息
			goods_detail:{
				title:'',
				price:'',
				origin_price:'',
				rewards:'',
				vip_rewards:'',
				platform:'',
				store_name:'',
				location:'',
				sales:0
			},
			// 当前商品id
			current_id:'',
			// 商城平台
			platform:null
		}
	},
	methods:{
		// 获取用户收藏状态(发起)
		fetchifFav(goods_id){
			let token = uni.getStorageSync('token').val
			let url;
			switch(this.platform.type){
				case 1:url = 'http://www.jufu-unique.com/app.php/TbGoodsCollect/is_collect';break;
				case 2:url = 'http://www.jufu-unique.com/app.php/JingdongCollect/is_collect';break;
				case 3:url = 'http://www.jufu-unique.com/app.php/PddCollect/is_collect';break;
				case 4:url = 'http://www.jufu-unique.com/app.php/VipCollect/is_collect' ;break;
			}
			this.$set(this.request_task_group[6],'url',url)
			this.$set(this.request_task_group[6],'data',{goods_id,token})
			this.$set(this.request_task_group[6],'task',com.createRequestTask(this.request_task_group[6]))
		},
		// 获取淘宝/天猫信息(发起)
		getGoodsDetail(num_iid){
			this.cover=true;
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[0],'data',{num_iid,token})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取拼多多商品详情(发起)
		getPDDGoodsDetail(goods_id){
			this.cover=true;
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[2],'data',{goods_id,token})
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取唯品会商品详情(发起)
		getWPHGoodsDetail(goods_id){
			this.cover=true;
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[3],'data',{goods_id,token})
			this.$set(this.request_task_group[3],'task',com.createRequestTask(this.request_task_group[3]))
		},
		// 获取唯品会信息成功(接收)
		getWPHGoodsDetailSuccess(res){
			console.log('获取唯品会信息成功',res)
			this.renderWPHGoodsDetail(res.data.data.goods_details)
		},
		// 获取唯品会信息失败(接收)
		getWPHGoodsDetailFailed(res){
			console.log('获取唯品会信息失败',res)	
		},
		// 获取拼多多信息成功(接收)
		getPDDGoodsDetailSuccess(res){
			console.log('获取拼多多信息成功',res)
			this.renderPDDGoodsDetail(res.data.data.goods_details)
		},
		// 获取拼多多信息失败(接收)
		getPDDGoodsDetailFailed(res){
			console.log('获取拼多多信息失败',res)	
		},
		// 获取淘宝/天猫信息成功(接收)
		getGoodsDetailSuccess(res){
			console.log('获取淘宝/天猫信息成功',res)
			this.renderGoodsDetail(res.data.data)
		},
		// 获取淘宝/天猫信息失败(接收)
		getGoodsDetailFailed(res){
			console.log('获取淘宝/天猫信息失败',res)	
		},
		// 获取商品烟雾弹(发起)
		getUserSmoke(){
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取商品烟雾弹成功(接收)
		getUserSmokeSuccess(res){
			console.log('获取商品烟雾弹成功',res)
			this.renderUserSmoke(res.data.data.list)
		},
		// 获取商品烟雾弹失败(接收)
		getUserSmokeFailed(res){
			console.log('获取商品烟雾弹失败',res)	
		},
		// 获取用户收藏状态成功(接收)
		fetchifFavSuccess(res){
			console.log('获取用户收藏状态成功',res)
			this.renderUserFavStatus(res.data.data.is_collect)
		},
		// 获取用户收藏状态失败(接收)
		fetchifFavFailed(res){
			console.log('获取用户收藏状态失败',res)
		},
		// 添加收藏成功(接收)
		addToFavSuccess(res){
			console.log('添加收藏成功',res)
			this.collect=true;
		},
		// 添加收藏失败(接收)
		addToFavFailed(res){
			console.log('添加收藏失败',res)	
		},
		// 取消收藏成功(接收)
		removeFromFavSuccess(res){
			console.log('取消收藏成功',res)
			this.collect=false;
		},
		// 取消收藏失败(接收)
		removeFromFavFailed(res){
			console.log('取消收藏失败',res)	
		},
		// 渲染用户烟雾弹-什么鬼名字(渲染)
		renderUserSmoke(list){
			let group =[]
			list.forEach(item=>{
				let obj = {
					avatar:item.avatar,
					txt:item.smoke
				}
				group.push(obj)
			})
			this.boardcast = group;
		},
		// 渲染淘宝/天猫商品详情(渲染)
		renderGoodsDetail(data){
			let obj = {
				title:data.title,
				price:data.zk_final_price,
				origin_price:data.zk_final_price,
				rewards:data.commission,
				vip_rewards:data.commission_vip,
				platform:data.user_type=='1'?'/static/tmall.png':'/static/taobao.png',
				store_name:data.nick,
				location:data.provcity,
				sales:data.volume
			}
			this.goods_detail = obj;
			this.banner = data.small_images?data.small_images.string.map(item=>{let obj ={src:''};obj.src = item ;return obj}):[{src:data.pict_url}]
		},
		// 渲染拼多多商品详情(渲染)
		renderPDDGoodsDetail(data){
			let d_price = data.min_group_price.toString().split('');
			d_price.splice(-2,0,'.');
			d_price = Number(d_price.toString().replace(/,/g,""))
			
			
			let discount = data.coupon_discount.toString().split('');
			discount.splice(-2,0,'.');
			discount = Number(discount.toString().replace(/,/g,""))
						
			let price = (d_price - discount).toFixed(2);
			
			data.min_group_price = d_price;
			data.promotion_rate = (com.accMul(price,com.accDiv(data.promotion_rate,1000))).toFixed(2)
			
			let obj = {
				title:data.goods_name,
				price:price,
				origin_price:data.min_group_price,
				rewards:data.promotion_rate,
				vip_rewards:com.accMul(data.promotion_rate,2),
				platform:'/static/pdd.png',
				store_name:data.mall_name,
				location:'',
				sales:data.sales_tip
			}
			
			if(data.coupon_discount){
				let price = com.accDiv(data.coupon_discount,100)
				let start_time = this.formatDate(com.accMul(data.coupon_start_time,1000))
				let end_time = this.formatDate(com.accMul(data.coupon_end_time,1000))
				
				let obj2 = {
					id:'',
					mute:false,
					title:price,
					start:start_time,
					end:end_time
				}
				this.discount.push(obj2)
			}
			
			this.goods_detail = obj;
			this.banner = data.goods_gallery_urls.map(item=>{let obj ={src:''};obj.src = item ;return obj});
			this.detail_group  = data.goods_gallery_urls
		},
		// 渲染唯品会详情(渲染)
		renderWPHGoodsDetail(data){
			let obj = {
				title:data.goodsName,
				price:data.vipPrice,
				origin_price:data.marketPrice,
				rewards:data.commission,
				vip_rewards:com.accMul(data.commission,2),
				platform:'/static/wph.png',
				store_name:data.storeInfo.storeName,
				location:'',
				sales:45642
			}
			this.goods_detail = obj;
			this.banner = data.goodsCarouselPictures.map(item=>{let obj ={src:''};obj.src = item ;return obj});
			this.detail_group  = data.goodsDetailPictures;
		},
		// 获取平台并渲染
		getPlatformAndRender(){
			let data =getCurrentPages()[getCurrentPages().length - 1].$routeParams
			this.platform = data;
			if(!('type' in data))this.platform.type=1
			this.current_id = data.id
			
			this.fetchifFav(data.id)
			
			if(data.type){
				switch(data.type){
					case 1:this.getGoodsDetail(data.id);break;
					// 狗东
					case 2:break;
					// 拼多多
					case 3:this.getPDDGoodsDetail(data.id) ;break;
					case 4:this.getWPHGoodsDetail(data.id) ;break;
				}
				
				// 注册绑定商城账号弹框
				uni.$emit('bindStoreAccountPop',{index:data.type})
			}
			else{
				this.getGoodsDetail(data.id)
				uni.$emit('bindStoreAccountPop',{index:1})
			}
			this.getUserSmoke()
		},
		// 渲染用户收藏状态
		renderUserFavStatus(flag){
			this.collect = flag=='Y'?true:false
		}
	},
	onLoad(){
		this.getPlatformAndRender()
	}
}