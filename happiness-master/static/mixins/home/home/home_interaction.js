import com from '@/static/js/common.js'
export const home_interaction = {
	data(){
		return{
			// 顶部菜单栏显示
			menu_toggle:false,
			// 页面加载
			cover:false,
			// 为您推荐加载更多
			loadmore:false,
			// 无更多为您推荐
			nomore:false,
			// 当前为您推荐页数
			current_page:1,
			// 主页刷新
			refresh:false
		}
	},
	mounted(){
		com.setStatusBarColor(false)
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
		com.global_watcher_regist('home_single_goods_tapped',this.singleGoodsWatcher)
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
		com.global_watcher_regist('home_events_plaza_bottom',this.plazaWather)
		com.global_watcher_regist('home_new_fish_tapped',this.newFishWather)
		com.global_watcher_regist('home_kingkong_tapped',this.kingZoneWather)
		com.global_watcher_regist('home_subarea_tapped',this.tripleZoneWather)
		com.global_watcher_regist('backgroundChanged',this.bannerBackgroundWather)
		com.global_watcher_regist('home_top_menu_tapped',this.categoryWather)
		com.global_watcher_regist('refresh_home',this.loadMoreWather)
		com.global_watcher_regist('countdownOver',this.seckillCountdownOver)
	},
	methods:{
		// 秒杀更多点击
		moreSeckillGoods(){
			com.pageNavigation('/pages/home/seckill/seckill')
		},
		// 秒杀商品点击
		goSeckillGoodsDetail(id){
			com.pageNavigation('/pages/home/detail/detail',null,{id})
		},
		// 0元购商品点击
		goFreeGoodsDetail(id){
			com.pageNavigation('/pages/home/detail/detail',null,{id})
		},
		// 0元购更多点击(到0元购页面)
		goFreePage(){
			com.pageNavigation('/pages/sublevel/free/free');
		},
		// 0元包邮出现
		freeAppear(){
			if(this.sections_loading_status.free||this.free_group.length>0)return
			this.sections_loading_status.free=true;
			this.getFreeGoods()
		},
		// 主页顶部菜单栏显示切换
		toggleHomeMenuDisplay(flag){
			this.menu_toggle = flag;
		},
		// 当场秒杀结束
		seckillCountdownOver(){
			let current = this.seckill_group.findIndex((item)=>item.status==0);
			if(this.seckill_group[current+1]){
				this.$refs.seckill.change(current+1)
				// 重新设置一下场数
				let result = this.spliceSeckillTime()
			}
			else{
				this.kill_goods = [[],[],[],[],[]]
				this.seckillAppear()
			}
			
		},
		// 主页刷新
		homeRefreshing(){
			if(this.refresh||this.cover)return;
			this.loadmore=false;
			this.nomore=false;
			this.abandomCurrentTask()
			this.refresh = true;
			this.current_page=1;
			this.boardcast = []
			this.nice_goods = [];
			this.db_group = [];
			this.kill_goods = [[],[],[],[],[]]
			this.countdown=0;
			this.user_red_args = [true]
			this.fetchNewsAndOthers(true)
		},
		// 放弃当前请求任务
		abandomCurrentTask(){
			let task_group =this.request_task_group2.map(item=>item=item.task)
			com.abortAllRequestTask(task_group)
		},
		// 好物推荐区出现
		goodsStuffAppear(){
			if(this.sections_loading_status.nice_stuff||this.nice_goods.length>0)return;
			this.sections_loading_status.nice_stuff=true;
			this.getNiceRecommandation()
		},
		// 限时秒杀区出现
		seckillAppear(){
			if(this.sections_loading_status.seckill||this.kill_goods[this.seckill_games].length!=0)return;
			this.sections_loading_status.seckill=true;
			console.log('我秒杀了！！')
			let args = this.spliceSeckillTime()
			this.seckill_args = [args[1]];
			console.log('快抢时间点',args[0])
			this.getSeckillList(args[0])
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
					this.$refs.seckill.change(i,true)
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
		// 为您推荐区出现
		userRedAppear(){
			if(this.sections_loading_status.user_red||this.db_group.length>0)return;
			this.sections_loading_status.user_red=true;
			this.getUserRecommandation()
		},
		// 轮播图点击
		bannerTapped(data){
			if(!!data.href){
				com.pageNavigation('/pages/home/link/link',null,{link:data.href,name:data.title})
			}
		},
		// 监听tabbar按钮刷新
		tabbarRefresh(){
			if(this.cover)return;
			this.homeRefreshing()
			this.cover =true;
		},
		// 页面显示
		on_show(){
			com.global_watcher_regist('navbarTapHandler',this.navbarWather)
			com.global_watcher_regist('home_single_goods_tapped',this.singleGoodsWatcher)
			com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
			com.setStatusBarColor(false)
			console.log('主页 显示了')
		},
		// 单商品操作
		singleGoodsWatcher(res){
			console.log(res)
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 六饼区操作
		plazaWather(res){
			switch(res.index){
				case 0:com.pageNavigation('/pages/home/recommand/recommand');break;
				case 1:com.pageNavigation('/pages/home/billboard/billboard');break;
				case 2:com.pageNavigation('/pages/home/seckill/seckill');break;
			}
		},
		// 新人区操作
		newFishWather(res){
			com.pageNavigation('/pages/home/recommand/recommand')
		},
		// 导航栏操作
		navbarWather(res){
			switch(res.position){
				case 0:com.pageNavigation('/pages/mine/service/service');break;
				case 1:com.pageNavigation('/pages/sublevel/search/search');break;
				case 2:com.pageNavigation('/pages/home/message/message');break;
			}
		},
		// 金刚栏操作
		kingZoneWather(res){
			if(!!res.link){
				if(res.link.match('http')){
					com.pageNavigation('/pages/home/link/link',null,{link:res.link,name:res.name})
				}
				else{
					com.pageNavigation(res.link)
				}
				
			}
			else{
				plus.nativeUI.toast('敬请期待！');
			}
			
		},
		// 三栏区操作
		tripleZoneWather(res){
			console.log('顶部',res)
			switch(res.index){
				case 0:
					com.pageNavigation('/pages/store/platform/platform',null,{platform:1});
				;break;
				case 1:
					com.pageNavigation('/pages/store/platform/platform',null,{platform:3});
				;break;
				case 2:
					com.pageNavigation('/pages/home/link/link',null,{link:'http://i.meituan.com/',name:'美团'})
				;break;
				case 3:
					com.pageNavigation('/pages/store/platform/platform',null,{platform:2});
				;break;
				case 4:
					com.pageNavigation('/pages/store/platform/platform',null,{platform:4});
				;break;
			}
			// com.pageNavigation('/pages/home/recommand/recommand')
		},
		// 轮播图切换联动背景色
		bannerBackgroundWather(data){
			this.current_background_color = [{color:this.changeBackgroundColor(data.now)}]
			this.navbarColor = this.changeBackgroundColor(data.now)
		},
		// 分类操作
		categoryWather(res){
			com.pageNavigation('/pages/classification/category/category',null,{current:res.index,list:this.menu_group})
			this.menu_toggle=false
		},
		// 加载更多
		loadMoreWather(){
			// 未初始化为您推荐商品
			if(this.db_group.length<1)return;
			console.log('加载更多',this.db_group.length)
			console.log('加载更动画',this.loadmore)
			console.log('当前页面',this.current_page)
			this.$refs.home.resetLoadMoreGoods()
			this.nomore=false;
			this.loadmore=true;
			this.user_red_args = [false];
			this.getUserRecommandation(null,this.current_page)
		},
		// 修改背景色
		changeBackgroundColor(index){
			index =index||0;
			return  this.banner_group[index]?this.banner_group[index].color:'#222'
		},
		// 当前秒杀场次
		getCurrentGames(index){
			console.log('当前场次',index)
			this.seckill_games=index;
			if(this.kill_goods[index].length==0){
				this.sections_loading_status.seckill=true;
				this.seckill_args = [index];
				this.getSeckillList(this.seckill_group[index].type)
			}
		}
	}
}