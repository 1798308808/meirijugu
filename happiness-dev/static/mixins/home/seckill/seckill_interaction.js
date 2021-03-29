import com from '@/static/js/common.js'
export const seckill_interaction = {
	data(){
		return{
			// 加载页
			goods_page:[1,1,1,1,1],
			// 刷新
			refresh:false,
			// 加载动画
			cover:false,
			// 加载更多监听器
			loadmore_monitor:'loadMoreGoods',
			// 加载更多标识
			loadmore:false,
			// 没有更多标识
			nomore:false,
			// 初始页面
			page:1
		}
	},
	onLoad(){
		com.global_watcher_regist(this.loadmore_monitor,this.regLoadmoreListener)
		com.global_watcher_regist('countdownOver',this.seckillCountdownOver)
		com.global_watcher_regist('home_single_goods_tapped',this.multiGoodsWather)
	},
	methods:{
		// 注册加载更多监听器
		regLoadmoreListener(){
			let index=this.seckill_group.findIndex(item=>{
				return item.active==true;
			})	
			this.loadmore=true;
			this.getSeckillList(this.seckill_group[index].type,this.goods_page[index]);
			console.log("当前页",this.goods_page[index]);
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 点击场次改变状态
		change(index){
			this.$emit("retrunChange",index)
			for(let i=0;i<this.seckill_group.length;i++){
				if(i==index){
					this.seckill_group[i].active=true;
				}
				else{
					this.seckill_group[i].active=false;	
				}
			}
		},
		
		// 刷新
		refreshing(){
			this.refresh=true
			// 获取当前场次的索引
			let index=this.seckill_group.findIndex(item=>{
				return item.active==true;
			})
			// 根据索引重新请求当前场次
			this.getSeckillList(this.seckill_group[index].type,this.page)	
		},
		// 当场秒杀结束
		seckillCountdownOver(){
			let current = this.seckill_group.findIndex((item)=>item.status==0);
			if(this.seckill_group[current+1]){
				this.change(current+1)
				// 重新设置一下场数
				let result = this.spliceSeckillTime()
			}
			else{
				this.kill_goods = [[],[],[],[],[]]
				this.seckillAppear()
			}		
		},
		
		// 限时秒杀区出现
		seckillAppear(){
			if(this.sections_loading_status.seckill||this.kill_goods[this.seckill_games].length!=0)return;
			this.sections_loading_status.seckill=true;
			console.log('我秒杀了！！')
			let args = this.spliceSeckillTime()
			this.seckill_args = [args[1]];
			console.log('快抢时间点',args[0])
			let index=this.seckill_group.findIndex(item=>{
				return item.type==args[0];
			})	
			this.getSeckillList(args[0],this.page)
			this.cover=true
		},
		
		// 获取当前进行中的活动
		spliceSeckillTime(){
			let current = new Date().getHours()
			let offset = this.seckill_group.map((item)=>{let p = current - Number(item.title.split(':')[0]);return p })
			let hours = offset.findIndex(item=>item==0)
			
			if(hours==-1){
				for(let i =0;i<offset.length;i++){
					if(offset[i+1]){
						if(com.accPlus(offset[i],offset[i+1])<offset[i]){hours=i;break;};
					}
				}
			}
			for(let i =0;i<this.seckill_group.length;i++){
				if(hours<i){
					this.$set(this.seckill_group[i],'status',1)
				}
				else if(hours==i){
					this.$set(this.seckill_group[i],'status',0)
					this.change(i)
					this.seckill_games=i;
				}
				else{
					this.$set(this.seckill_group[i],'status',-1)
				}
			}
			let end_time = 0;
			// 获取下场活动开始时间(即当场结束时间)
			if(this.seckill_group[hours+1]){
				end_time =`${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${new Date().getDate().toString().padStart(2,'0')} ${this.seckill_group[hours+1].title}`
			}
			// 若无则为明天第一场开始时间
			else{
				end_time =`${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${(new Date().getDate()+1).toString().padStart(2,'0')} ${this.seckill_group[0].title}`
			}
			console.log(end_time,'今天')
			// ios new Date兼容
			this.countdown =this.$store.state.common.platform=='ios'?new Date(end_time.replace(/-/g, "/")).getTime()/1000 :new Date(end_time).getTime()/1000;
			return [this.seckill_group[hours].type,hours];
		},

		// 当前秒杀场次
		getCurrentGames(index){
			// 如果是在加载则不允许切换场次
			if(this.loadmore){
				plus.nativeUI.toast("加载数据中")
				return;
			}					
			if(this.refresh){
				plus.nativeUI.toast("刷新数据中")
				return ;
			}
			this.seckill_games=index;
			if(this.kill_goods[index].length==0){
				this.sections_loading_status.seckill=true;
				this.seckill_args = [index];
				this.getSeckillList(this.seckill_group[index].type,this.page)
				this.cover=true
			}
		}
	}
}