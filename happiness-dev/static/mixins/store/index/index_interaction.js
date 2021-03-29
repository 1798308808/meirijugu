import com from '@/static/js/common.js'
export const store_interaction  = {
	data(){
		return {
			cover:true,
			showSkeleton:true,
			// 嵌套滚动list的id
			// page_id:'store_list',
			// offsetHeight:0,
			// 首页刷新
			refresh:false,
			// 当前swiper页面
			current_swiper_index:0,
			// 加载更多标识
			loadmore:false,
			// 无更多为您推荐
			nomore:false,
			// 加载更多监听器名称
			loadmoreHandle:'storeLoadmore',
			// 为您推荐加载
			re_loading:false
			
		}
	},
	created(){
		let [s,n,st,tb,p,pl,w] =
		[
			this.$store.state.common.safeAreaHeight,
			this.$store.state.common.navbarHeight,
			this.$store.state.common.statusBarHeight,
			this.$store.state.common.tabbarHeight,
			this.$store.state.common.screenHeight,
			this.$store.state.common.platform,
			this.$store.state.common.screenWidth
		]
		// if(pl=='ios'){
		// 	this.offsetHeight = uni.upx2px(820);
		// }
		// else{
		// 	this.offsetHeight = uni.upx2px(810) + n + st;
		// }
		
	},
	mounted(){
		// com.global_watcher_regist('pageChanged',this.swiperPageMultiList)
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
		com.global_watcher_regist(this.loadmoreHandle,this.loadmoreStoreGoods)
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
		com.setStatusBarColor(false)
	},
	methods:{
		// 广告栏标题点击
		ADSTapped(data){
			com.pageNavigation('/pages/home/link/link',null,{link:data.href,name:data.title})
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 为您推荐栏目出现
		recommandProgramAppear(){
			if(this.re_loading || this.goods.length>0)return;
			this.re_loading=true;
			this.getUserRecommandation()
		},
		// 加载更多
		loadmoreStoreGoods(){
			if(this.goods.length==0){
				console.log('???')
				this.$refs.home.reset()
				return;
			}
			console.log('加载更多',this.current_page)
			this.nomore=false;
			this.loadmore=true;
			this.user_red_args = [false];
			this.getUserRecommandation(null,this.current_page)
		},
		// 页面刷新
		tabbarRefresh(){
			if(this.cover || this.refresh)return;
			this.refreshing()
			this.cover=true;
			this.getStoreHomePageData()
		},
		// 导航栏点击
		navbarWather(res){
			com.pageNavigation('/pages/sublevel/search/search');
		},
		// 菜单栏点击
		getTappedMenu(id){
			switch(id){
				case '87':com.pageNavigation('/pages/home/recommand/recommand',null,{type:4});break;
				case '88':com.pageNavigation('/pages/store/platform/platform',null,{platform:1});break;
				case '89':com.pageNavigation('/pages/store/platform/platform',null,{platform:2});break;
				case '90':com.pageNavigation('/pages/store/platform/platform',null,{platform:3});break;
				case '91':com.pageNavigation('/pages/store/celebrity/celebrity');break;
				case '92':com.pageNavigation('/pages/store/platform/platform',null,{platform:4});break;
				case '93':com.pageNavigation('/pages/home/billboard/billboard');break;
				case '94':com.pageNavigation('/pages/sublevel/free/free');break;
				case '95':com.pageNavigation('/pages/store/ninenine/ninenine');break;
				default:com.pageNavigation('/pages/home/recommand/recommand',null,{type:5});break;
				
			}
			console.log('当前id',id)
		},
		// 页面展现
		on_show(){
			com.setStatusBarColor(false)
			console.log('商城 页面显示了')
			com.global_watcher_regist('navbarTapHandler',this.navbarWather)
			com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
		},
		// // 设置list嵌套偏移高度
		// setListFixed(index){
		// 	console.log(index,'设置了啊')
		// 	this.$refs[`page${index+1}`].setScrollRef()
		// },
		// // 滑动页面切换处理
		// swiperPageMultiList(res){
		// 	this.current_swiper_index = res.index;
		// 	this.setListFixed(res.index)
		// },
		// 刷新中
		refreshing(){
			if(this.cover)return;
			this.loadmore=false;
			this.nomore=false;
			this.abandomCurrentTask()
			this.refresh = true;
			this.current_page=1;
			this.$refs.home.reset()
			this.goods = []
			this.user_red_args = [true];
			this.getStoreHomePageData()
		},
		// 放弃当前请求任务
		abandomCurrentTask(){
			let task_group =this.request_task_group2.map(item=>item=item.task)
			com.abortAllRequestTask(task_group)
		},
	}
}