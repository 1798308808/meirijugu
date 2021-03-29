import com from '@/static/js/common.js'
export const platform_extra = {
	data(){
		return{
			// 加载更多监听器
			loadmore_monitor:'reLoadmore',
			loadmore:false,
			nomore:false,
			// 为您推荐loading
			re_loading:true,
			// 请求处理集合
			request_handler_group2:{
				getTBRecommand:[
					{
						code:1,
						handle:()=>this.getTBRecommandSuccess
					},
					{
						code:-1,
						handle:()=>this.getTBRecommandFailed
					}
					
				],
				getPDDRecommand:[
					{
						code:0,
						handle:()=>this.getPDDRecommandSuccess
					},
					{
						code:-1,
						handle:()=>this.getPDDRecommandFailed
					}
					
				],
				getWPHRecommand:[
					{
						code:0,
						handle:()=>this.getWPHRecommandSuccess
					},
					{
						code:-1,
						handle:()=>this.getWPHRecommandFailed
					}
					
				]
			},
			// 请求集合
			request_task_group2:[
				{
					task:null,
					func:'获取淘宝推荐',
					url:'http://www.jufu-unique.com/app.php/Haodanku/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group2.getTBRecommand,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.re_loading=false;
					}
				},
				{
					task:null,
					func:'获取拼多度商品列表',
					url:'http://www.jufu-unique.com/app.php/Pdd/getGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group2.getPDDRecommand,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.re_loading=false;
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
						com.requestResponse(this,[],this.request_handler_group2.getWPHRecommand,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.re_loading=false;
					}
				},
			],
			current_re_page:1,
		}
	},
	methods:{
		// 商品点击
		goodsTapped(res){
			com.pageNavigation('/pages/home/detail/detail',null,{type:this.platform_info.type,id:res.id})
		},
		// 加载更多触发
		loadmoreHandle(){
			if(this.loadmore||this.re_loading)return;
			this.loadmore=true;
			let page ;
			switch(this.platform_info.type){
				case 1:this.getTBRecommand(this.current_re_page);break;
				case 2:;break;
				case 3:
					page = this.current_re_page +1;
					this.getPDDRecommand(page);
				break;
				case 4:
					page = this.current_re_page +1;
					this.getWPHRecommand(page);
				;break;
			}
		},
		// 获取淘宝推荐商品(发起)
		getTBRecommand(page){
			page = page ||1
			this.$set(this.request_task_group2[0],'data',{type:1,cid:0,min_id:page,sale_min:200})
			this.$set(this.request_task_group2[0],'task',com.createRequestTask(this.request_task_group2[0]))
		},
		// 获取淘宝推荐商品成功(接收) 
		getTBRecommandSuccess(res){
			console.log('获取淘宝推荐商品成功')
			this.renderGoodsList(this.platform_info.type,res.data.min_id,res.data.data)
		},
		// 获取淘宝推荐商品失败(接收) 
		getTBRecommandFailed(res){
			console.log('获取淘宝推荐商品失败',res)
		},
		// 获取拼多多推荐商品(发起)
		getPDDRecommand(page){
			page = page ||1
			this.$set(this.request_task_group2[1],'data',{page:page,sort_type:6})
			this.$set(this.request_task_group2[1],'task',com.createRequestTask(this.request_task_group2[1]))
		},
		// 获取拼多多推荐商品成功(接收) 
		getPDDRecommandSuccess(res){
			console.log('获取拼多多推荐商品成功')
			this.renderGoodsList(this.platform_info.type,this.current_re_page+1,res.data.data.list)
		},
		// 获取拼多多推荐商品失败(接收) 
		getPDDRecommandFailed(res){
			console.log('获取拼多多推荐商品失败',res)
		},
		// 获取唯品会推荐商品(发起)
		getWPHRecommand(page){
			page = page ||1
			this.$set(this.request_task_group2[2],'data',{page:page,field_name:'SALES'})
			this.$set(this.request_task_group2[2],'task',com.createRequestTask(this.request_task_group2[2]))
		},
		// 获取唯品会推荐商品成功(接收) 
		getWPHRecommandSuccess(res){
			console.log('获取唯品会推荐商品成功')
			this.renderGoodsList(this.platform_info.type,this.current_re_page+1,res.data.data.list)
		},
		// 获取唯品会推荐商品失败(接收) 
		getWPHRecommandFailed(res){
			console.log('获取唯品会推荐商品失败',res)
		},
		renderGoodsList(type,page,list){
			let result = []
			switch(type){
				case 1:
					// 替换字段
					result = JSON.parse(JSON.stringify(list)
					.replace(/itemid/g,'id')
					.replace(/itemtitle/g,'title')
					.replace(/itempic/g,'thumb')
					.replace(/itemendprice/g,'price')
					.replace(/itemprice/g,'d_price')
					.replace(/discount/g,'mdiscount')
					.replace(/couponmoney/g,'discount')
					.replace(/shoptype/g,'platform')
					.replace(/tkmoney/g,'rewards')
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
						item.platform = '/static/wph_v.png';
					})
				;break;
			}
			
			if(this.current_re_page!=1){
				// 查看最后一行商品是否为两个
				if(this.goods[this.goods.length-1].length!=2){
					this.goods[this.goods.length-1].push(result.splice(0,1)[0])
				}
			}
			
			// 分割成两个一组，cell限制
			let group = []
			for(let i=0;i<result.length;i+=2){
				group.push(result.slice(i,i+2));
			}
			if(this.current_re_page!=1){
				this.goods.push(...group)
				this.$refs.pl_list.resetLoad()
				this.loadmore=false;
			}
			else{
				this.goods = group;
			}
			this.current_re_page = page;
		},
	},
	onLoad(){
		com.global_watcher_regist(this.loadmore_monitor,this.loadmoreHandle)
		com.global_watcher_regist('home_double_goods_tapped',this.goodsTapped)
		
	}
}