import com from '@/static/js/common.js'
export const collections_data ={
	data() {
		return {
			// 请求处理集合
			request_handler_group:{
				fetchTBUserCollections:[
					{
						code:0,
						handle:()=>this.fetchTBUserCollectionsSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchTBUserCollectionsFailed
					}
					
				],
				fetchPDDUserCollections:[
					{
						code:0,
						handle:()=>this.fetchPDDUserCollectionsSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchPDDUserCollectionsFailed
					}
					
				],
				fetchWPHUserCollections:[
					{
						code:0,
						handle:()=>this.fetchWPHUserCollectionsSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchWPHUserCollectionsFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取淘宝收藏列表',
					url:'http://www.jufu-unique.com/app.php/TbGoodsCollect/getCollectList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchTBUserCollections,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
						this.refresh=false
					}
				},
				{
					task:null,
					func:'获取拼多多收藏列表',
					url:'http://www.jufu-unique.com/app.php/PddCollect/getCollectList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
						this.refresh=false
					}
				},
				{
					task:null,
					func:'获取唯品会收藏列表',
					url:'http://www.jufu-unique.com/app.php/VipCollect/getCollectList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
						this.refresh=false
					}
				}
			],
			pdd_args:[1],
			wph_args:[1]
		}
	},
	methods: {
		// 获取淘宝收藏列表(发起)
		fetchTBUserCollections(){
			let token = uni.getStorageSync('token').val;
			this.$set(this.request_task_group[0],'data',{token})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取拼多多收藏列表(发起)
		fetchPDDUserCollections(page){
			page = page ||1
			let token = uni.getStorageSync('token').val;
			this.$set(this.request_task_group[1],'data',{token,p:page,per:6})
			this.$set(this.request_task_group[1],'success',(res)=>{
				com.requestResponse(this,[page],this.request_handler_group.fetchPDDUserCollections,res,'short','bottom')
			})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取唯品会收藏列表(发起)
		fetchWPHUserCollections(page){
			page = page ||1
			let token = uni.getStorageSync('token').val;
			this.$set(this.request_task_group[2],'data',{token,p:page,per:6})
			this.$set(this.request_task_group[2],'success',(res)=>{
				com.requestResponse(this,[page],this.request_handler_group.fetchWPHUserCollections,res,'short','bottom')
			})
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取唯品会收藏列表成功(接收)
		fetchWPHUserCollectionsSuccess(page,res){
			console.log('获取唯品会收藏列表成功',res)
			this.renderPDDorWPHGoods(page,res.data.data.list,3)
		},
		// 获取唯品会收藏列表失败(接收)
		fetchWPHUserCollectionsFailed(res){
			console.log('获取唯品会收藏列表失败',res)
		},
		// 获取拼多多收藏列表成功(接收)
		fetchPDDUserCollectionsSuccess(page,res){
			console.log('获取拼多多收藏列表成功',res)
			this.renderPDDorWPHGoods(page,res.data.data.list,2)
		},
		// 获取拼多多收藏列表失败(接收)
		fetchPDDUserCollectionsFailed(res){
			console.log('获取拼多多收藏列表失败',res)
		},
		// 获取淘宝收藏列表成功(接收)
		fetchTBUserCollectionsSuccess(res){
			console.log('获取淘宝收藏列表成功',res)
			this.renderTBGoods(res.data.data.list)
		},
		// 获取淘宝收藏列表失败(接收)
		fetchTBUserCollectionsFailed(res){
			console.log('获取淘宝收藏列表失败',res)
		},
		// 渲染淘宝收藏商品(渲染)
		renderTBGoods(list){
			let group = []
			list.forEach((item,index)=>{
				let obj = {
					id:item.num_iid,
					title:item.title,
					thumb:item.pict_url,
					desc:'',
					price:item.zk_final_price - item.coupon_amount,
					d_price:item.zk_final_price,
					discount:item.coupon_amount,
					platform:item.is_tmall?'/static/tmall.png':'/static/taobao.png',
					rewards:item.commission,
					seckill:false,
					storeName:null,
					sales:item.volume
				}
				group.push(obj)
			})
			
			this.$set(this.options_group[0],'data',group)
			this.group = group;
			this.dontmove=false
		},
		// 渲染拼多多或唯品会收藏商品(渲染)
		renderPDDorWPHGoods(page,list,type){
			let group = []
			list.forEach((item,index)=>{
				let obj ;
				if(type==2){
					obj = {
						id:item.goods_id,
						title:item.goods_name,
						thumb:item.goods_thumbnail_url,
						desc:'',
						price:(com.accDiv(item.min_group_price,100) - com.accDiv(item.coupon_discount,100)).toFixed(2),
						d_price:com.accDiv(item.min_group_price,100),
						discount:com.accDiv(item.coupon_discount,100),
						platform:'/static/pdd.png',
						rewards:item.commission,
						seckill:false,
						storeName:null,
						sales:item.sales_tip
					}
				}
				else{
					obj = {
						id:item.goodsId,
						title:item.goodsName,
						thumb:item.goodsThumbUrl,
						desc:'',
						price:item.vipPrice,
						d_price:item.marketPrice,
						discount:item.discount,
						platform:'/static/wph.png',
						rewards:item.commission,
						seckill:false,
						storeName:null,
						sales:item.sales_tip
					}
				}
				
				group.push(obj)
			})
			if(page==1){
				this.$set(this.options_group[type],'data',group)
				this.group = group;
			}
			else{
				this.options_group[type].data.push(...group)
				this.group = this.options_group[type].data
				
				if(type==2){
					this.pdd_args = [page]
				}
				else{
					this.wph_args = [page]
				}
				
				this.$refs.s.reset()
				if(group.length==0){
					this.nomore=true
					this.dontmove=false
					return;
				}
				this.loadmore=false;
			}
			
			this.dontmove=false
		},
		
	},
	onLoad(){
		this.fetchTBUserCollections()
	}
}