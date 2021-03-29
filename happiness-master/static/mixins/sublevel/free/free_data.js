import com from '@/static/js/common.js'
export const free_data = {
	data() {
		return {
			// 商品列表
			group:[
				// {
				// 	id:'s1',
				// 	title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
				// 	thumb:'/static/goods1.jpg',
				// 	desc:'',
				// 	price:'78.90',
				// 	d_price:'128.90',
				// 	discount:'40',
				// 	platform:'',
				// 	rewards:'2.55',
				// 	seckill:false,
				// 	storeName:null,
				// 	sales:null
				// }
				
			],
			// 请求处理集合
			request_handler_group:{
				fetchFreeGoods:[
					{
						code:0,
						handle:()=>this.fetchFreeGoodsSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchFreeGoodsFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取0元购商品',
					url:'http://www.jufu-unique.com/app.php/Tbk/getFreeGoodsList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchFreeGoods,res,'short','top')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
						this.refreshing=false;
					}
				}
			]
		}
	},
	methods: {
		// 获取0元购商品列表(发起)
		fetchFreeGoods(page_no){
			this.$set(this.request_task_group[0],'data',{page_no})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取0元购商品列表(接收)
		fetchFreeGoodsSuccess(res){
			console.log('获取0元购商品列表',res)
			this.renderGoodsList(res.data.data.list)
		},
		// 获取0元购商品列表(接收)
		fetchFreeGoodsFailed(res){
			console.log('获取0元购商品列表',res)
		},
		// 渲染0元购商品列表
		renderGoodsList(list){
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
			console.log(group)
			this.group = group;
		}
	},
	onLoad(){
		this.fetchFreeGoods(1)
	}
}
