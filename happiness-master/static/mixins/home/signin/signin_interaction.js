import com from '@/static/js/common.js'
export const signin_interaction = {
	data(){
		return {
			// 下拉刷新
			refresh:false,
			s_color:'rgba(255, 214, 166, 0)',
			n_color:'rgba(255, 214, 166, 0)',
			// 滚动监听器
			scroll_monitor:'signin_scroll',
			// 加载遮罩
			cover:false,
			// 签到成功动画
			signin_ani:false,
			// 好物推荐加载
			goods_loading:false,
			loadmore:false,
			nomore:false,
			// 加载更多监听器名称
			loadmoreHandle:'centerLoadmore',
		}
	},
	methods:{
		// 推荐商品出现
		goodsShow(){
			if(this.goods_loading||this.goods.length!=0)return
			this.goods_loading=true
			this.getUserRecommandation()
		},
		// 广告栏点击
		cardTapped(url){
			console.log(url)
		},
		// 页面展现
		on_show(){
			console.log('任务中心 页面显示了')
			com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
			com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 刷新中
		refreshing(){
			console.log('刷新中')
			this.refresh=true;
			// 推荐商品状态还原
			this.goods = []
			this.current_page =1;
			this.goods_loading=false
			this.loadmore=false
			this.nomore=false
			this.user_red_args=[true]
			this.getUserSignInInfo()
		},
		// 注册导航栏事件
		registNavbarHandle(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:com.pageNavigation('/pages/sublevel/record/record');break;
			}
		},
		// 页面滚动时切换用户信息显示区域
		// @params res.y 滚动偏移
		// @params res.index 每个宫格分区索引
		changeOpacity(){
			uni.$on(this.scroll_monitor,(res)=>{
				if(res.y<-50){
					this.n_color = this.s_color =`rgba(255, 214, 166, 1)`
				}
				else{
					this.n_color = this.s_color =`rgba(255, 214, 166, 0)`
				}
			})
		},
		// 监听tabbar按钮刷新
		tabbarRefresh(){
			if(this.cover)return;
			// 推荐商品状态还原
			this.goods = []
			this.current_page =1;
			this.goods_loading=false
			this.loadmore=false
			this.nomore=false
			this.user_red_args=[true]
			this.getUserSignInInfo(true)
		},
		// 开始做任务
		startTask(data){
			switch(data.val){
				case 'task1':this.signin();break;
				case 'task3':com.pageNavigation('/pages/mine/inviteFriends/inviteFriends');break;
				// case 'task3':com.pageNavigation('/pages/sublevel/personal/personal');break;
			}
		},
		// 判断是否已经完成完善资料任务
		ifFinishUserInfoForm(){
			let finish = this.$store.state.user.user_msg.is_complete_info =='Y'?true:false;
			this.$set(this.group2[2],'mute',finish)
		},
		// 加载更多
		loadmoreStoreGoods(){
			if(this.goods.length==0){
				this.$refs.center.reset()
				return;
			}
			console.log('加载更多',this.current_page)
			this.nomore=false;
			this.loadmore=true;
			this.user_red_args = [false];
			this.getUserRecommandation(null,this.current_page)
		},
	},
	mounted(){
		this.changeOpacity()
		com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
		com.global_watcher_regist(this.loadmoreHandle,this.loadmoreStoreGoods)
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
	}
}