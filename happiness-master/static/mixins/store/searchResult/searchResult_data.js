import com from '@/static/js/common.js'
export const searchResult_data = {
	data(){
		return {
			// 当前平台
			current_platform:1,
			// 请求处理集合
			request_handler_group:{
				getTBSearch:[
					{
						code:1,
						handle:()=>this.getTBSearchSuccess
					},
					{
						code:-1,
						handle:()=>this.getTBSearchFailed
					}
					
				],
				getPDDSearch:[
					{
						code:0,
						handle:()=>this.getPDDSearchSuccess
					},
					{
						code:-1,
						handle:()=>this.getPDDSearchFailed
					}
					
				],
				getWPHSearch:[
					{
						code:0,
						handle:()=>this.getWPHSearchSuccess
					},
					{
						code:-1,
						handle:()=>this.getWPHSearchFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取淘宝搜索商品',
					url:'http://www.jufu-unique.com/app.php/Haodanku/supersearch',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getTBSearch,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
						this.dontmove=false
					}
				},
				{
					task:null,
					func:'获取拼多度搜索商品',
					url:'http://www.jufu-unique.com/app.php/Pdd/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getPDDSearch,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
						this.dontmove=false
					}
				},
				{
					task:null,
					func:'获取唯品会搜索商品',
					url:'http://www.jufu-unique.com/app.php/Vip/getKeywordGoods',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getWPHSearch,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false;
						this.dontmove=false
					}
				},
			],
			args_group:[1,1,1,1]
		}
	},
	methods:{
		// 获取淘宝搜索商品(发起)
		getTBSearch(keyword,page){
			page = page || 1
			this.$set(this.request_task_group[0],'data',{keyword,min_id:page})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取淘宝搜索商品成功(接收) 
		getTBSearchSuccess(res){
			console.log('获取淘宝搜索商品成功',res)
			this.renderGoodsList(this.current_platform,res.data.min_id,res.data.data)
		},
		// 获取淘宝搜索商品失败(接收) 
		getTBSearchFailed(res){
			console.log('获取淘宝搜索商品失败',res)
		},
		// 获取拼多多搜索商品(发起)
		getPDDSearch(keyword,page){
			page = page || 1
			this.$set(this.request_task_group[1],'data',{keyword,page})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 获取拼多多搜索商品成功(接收) 
		getPDDSearchSuccess(res){
			console.log('获取拼多多搜索商品成功')
			this.renderGoodsList(this.current_platform,this.args_group[2]+1,res.data.data.list)
		},
		// 获取拼多多搜索商品失败(接收) 
		getPDDSearchFailed(res){
			console.log('获取拼多多搜索商品失败',res)
		},
		// 获取唯品会搜索商品(发起)
		getWPHSearch(keyword,page){
			page = page ||1
			this.$set(this.request_task_group[2],'data',{keyword,page})
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 获取唯品会搜索商品成功(接收) 
		getWPHSearchSuccess(res){
			console.log('获取唯品会搜索商品成功')
			this.renderGoodsList(this.current_platform,this.args_group[3]+1,res.data.data.list)
		},
		// 获取唯品会搜索商品失败(接收) 
		getWPHSearchFailed(res){
			console.log('获取唯品会搜索商品失败',res)
		},
		renderGoodsList(type,page,list){
			let result = []
			switch(type){
				case 1:
					// 替换字段
					result = JSON.parse(JSON.stringify(list)
					.replace(/itemid/g,'id')
					.replace(/itemtitle/g,'title')
					.replace(/shopname/g,'storeName')
					.replace(/itempic/g,'thumb')
					.replace(/itemendprice/g,'price')
					.replace(/itemprice/g,'d_price')
					.replace(/discount/g,'mdiscount')
					.replace(/couponmoney/g,'discount')
					.replace(/shoptype/g,'platform')
					.replace(/tkrates/g,'rewards')
					.replace(/itemsale/g,'sales')
					.replace(/todaysale/g,'spread'))
					
					
					result.forEach(item=>{
						item.platform = item.platform =='B'?'/static/tmall.png':'/static/taobao.png';
					})
				;break;
				case 2:;break;
				case 3:
					result = JSON.parse(JSON.stringify(list)
					.replace(/goods_id/g,'id')
					.replace(/goods_image_url/g,'thumb')
					.replace(/mall_name/g,'storeName')
					.replace(/goods_name/g,'title')
					.replace(/mall_cps/g,'price')
					.replace(/coupon_discount/g,'discount')
					.replace(/min_group_price/g,'d_price')
					.replace(/promotion_rate/g,'rewards')
					.replace(/share_rate/g,'platform')
					.replace(/sales_tip/g,'sales')
					)
					
					result.forEach(item=>{
						
						item.sales = Number(item.sales.replace('+','').replace('.','').replace('万','000'))
						
						item.platform = '/static/pdd.png';
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
				;break;
				case 4:
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
						item.platform = '/static/wph.png';
						item.storeName = item.storeInfo.storeName
					})
				;break;
			}
			
			
			if(this.args_group[type-1]==1){
				this.$set(this.options_group[type-1],'data',result)
				this.$set(this.options_group[type-1],'backup',result)
				this.group = result
				// 加载更多暂不启用筛选
				this.autoFilter()
			}
			else{
				this.loadmore=false;
				this.$refs.search.reset()
				this.options_group[type-1].data.push(...result)
				this.group = this.options_group[type-1].data;
				this.$set(this.options_group[type-1],'backup',this.options_group[type-1].data)
			}
			
			
			
			this.$set(this.args_group,(type-1).toString(),page)
		},
	}
}