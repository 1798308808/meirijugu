import com from '@/static/js/common.js'
export const seckill_data = {
	data(){
		return {
			goods:[],
			kill_goods:[
				[],[],[],[],[]
			],
			// 秒杀列表参数
			seckill_args:[],
			// 当前显示场数
			seckill_games:0,
			
			// 请求处理集合
			request_handler_group:{
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
			},
			// 请求集合
			request_task_group:[
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
						this.cover=false
					}
				},
			],
		}
	},
	methods:{
		// 秒杀好物(发起)
		getSeckillList(hour_type,page){
			this.$set(this.request_task_group[0],'data',{hour_type:hour_type,min_id:page})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取秒杀好物成功(接收)
		getSeckillListSuccess(column,res){
			console.log('获取秒杀好物成功',res)
			this.renderSeckillList(column,res.data)
		},
		// 获取秒杀好物失败(接收)
		getSeckillListFailed(res){
			console.log('获取秒杀好物失败',res)
		},
		// 渲染秒杀列表
		// @params column(Number) 第几场
		renderSeckillList(column,list){
			if(list.data.length==0){
				console.log('没咯')
				this.nomore=true;
				this.loadmore=true;
				return;
			}
			console.log("当前场次",column,'当前页数',list.min_id)
			
			let result = [];
			result = JSON.parse(JSON.stringify(list.data)
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
				item.platform = item.platform =='B'?'/sta.tic/tmall.png':'/static/taobao.png';
				item.seckill = true;
			})
			
			if(list.min_id==2){
				this.$set(this.kill_goods,column.toString(),result)
			}else{
				this.kill_goods[column].push(...result)
			}

			if(this.loadmore){
				// this.kill_goods[column].push(...result)
				this.$set(this.goods_page,column.toString(),list.min_id)
				console.log('页数:',this.goods_page[column],'mid_id:',list.min_id)
				this.loadmore =false;
				this.nomore=true;
				this.$refs.ctr.resetLoad();		
			}

			com.refreshOver(this.refresh,true,()=>{this.refresh=false;})
			// this.$set(this.kill_goods,column.toString(),result)
		},
	},
}