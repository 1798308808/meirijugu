import com from '@/static/js/common.js'
export const user_interaction = {
	data(){
		return {
			// 页面刷新
			page_refresh:false,
			// 滚动监听器
			scroll_monitor:'user_scroll',
			// 下拉刷新
			refresh:false,
			// 缩放后用户名及其切换状态
			for_user_name:{
				change:true,
				name:'请登录'
			},
			// 缩放后用户头像及其切换状态
			for_user_avatar:{
				change:false,
				avatar:'/static/bear.png'
			},
			// 导航栏透明度切换
			opacity:true,
			// 导航栏颜色
			color:'#fde1c9',
			// 刷新定时器
			refresh_timer:null
		}
	},
	mounted() {
		com.setStatusBarColor(true)
		this.changeOpacityAndSize()
		this.gridTapActions()
	},
	methods: {
		// 底部商品详情
		goNineDetail(id){
			com.pageNavigation('/pages/home/detail/detail',null,{id})
		},
		// 底部商品查看更多
		goNinePage(){
			com.pageNavigation('/pages/store/ninenine/ninenine');
		},
		// 页面加载/刷新动画
		pageLoading(status){
			this.page_refresh=status;
		},
		// 延迟关闭刷新(防止同时设置刷新开始结束不生效)
		refreshOverAsync(){
			clearTimeout(this.refresh_timer)
			this.refresh_timer = setTimeout(()=>{
				this.refresh = false;
				this.pageLoading(false)
				// 清空仓库参与(重要)
				this.$store.commit('user/clearUserInfo',{args:['user_msg','user_detail']})
				plus.nativeUI.toast('您还未登录');
			},2000)
		},
		// 到提现页面
		withdraw(flag){
			if(flag=='Y'){
				com.pageNavigation('/pages/sublevel/withdraw/withdraw')
			}
			else{
				uni.$emit('tabbarPageReturnData', {page: 2,data: '',msg: ''})
			}
		},
		// 正在下拉
		pulling(){
			this.toggleUserHeader(false)
		},
		// 刷新中
		refreshing(){
			console.log('刷新中')
			this.refresh=true;
			this.fetchStorageUserInfo()
			this.fetchGoodsList()
		},
		// 注册导航栏事件
		registNavbarHandle(res){
			switch(res.position){
				case 0:;break;
				case 1:com.pageNavigation('/pages/sublevel/settings/settings');break;
				case 2:com.pageNavigation('/pages/home/message/message');break;
			}
		},
		// 页面滚动时切换用户信息显示区域
		// @params res.y 滚动偏移
		// @params res.index 每个宫格分区索引
		changeOpacityAndSize(){
			uni.$on(this.scroll_monitor,(res)=>{
				if(res.y<-100){
					this.toggleUserHeader(true)
				}
				else{
					this.toggleUserHeader(false)
				}
			})
		},
		// 收益面板点击
		boardTapped(){
			com.pageNavigation('/pages/mine/income/income');
		},
		// 宫格点击跳转
		// @params res.id 宫格分区
		// @params res.index 每个宫格分区索引
		gridTapActions(){
			uni.$on('user_menu_group',res=>{
				if(res.id==1){
					switch(res.index){
						case 0:com.pageNavigation('/pages/mine/order/order');break;
						case 1:com.pageNavigation('/pages/mine/collections/collections');break;
						case 2:com.pageNavigation('/pages/mine/fans/fans');break;
						case 3:com.pageNavigation('/pages/mine/inviteFriends/inviteFriends');break;
					}
				}
				else if(res.id==2){
					switch(res.index){
						case 1:com.pageNavigation('/pages/mine/collections/collections');break;
						case 2:com.pageNavigation('/pages/mine/history/history');break;
						case 3:com.pageNavigation('/pages/mine/vip-center/vip-center');break;
						default:com.pageNavigation('/pages/404/404');
					}
				}
				else{
					switch(res.index){
						case 0:com.pageNavigation('/pages/store/platform/platform',null,{platform:3});break;
						case 1:com.pageNavigation('/pages/store/platform/platform',null,{platform:2});break;
						case 2:com.pageNavigation('/pages/store/platform/platform',null,{platform:1});break;
						case 3:com.pageNavigation('/pages/store/platform/platform',null,{platform:4});break;

						case 4:com.pageNavigation('/pages/mine/service/service');break;
						case 5:com.pageNavigation('/pages/mine/report/report');break;
						case 6:com.pageNavigation('/pages/sublevel/settings/settings');break;
						case 7:com.pageNavigation('/pages/mine/article/article',null,{id:27});break;
						default:com.pageNavigation('/pages/404/404');
					}
				}
			})
		},
		// 获取登录状态
		// @params data.isLogin(Boolen) 登录状态
		getLoginState(data){
			if(data.isLogin){
				com.pageNavigation('/pages/sublevel/personal/personal')
			}
			else{
				com.pageNavigation('/pages/login/login/login')
			}
		},
		// 监听tabbar按钮刷新
		tabbarRefresh(){
			if(this.page_refresh)return;
			this.fetchStorageUserInfo(true)
			this.fetchGoodsList()
		},
		// 切换顶部用户栏
		toggleUserHeader(status){
			this.opacity=!status;
			this.for_user_name.change = !status
			this.for_user_avatar.change = status
		},
		// 是否显示绑定推荐人弹框
		needDisplayRecommandationPopUp(){
			if(!!this.$store.state.user.user_msg.referrer_phone)return;
			if(uni.getStorageSync('dont_show_bind_recommand_code_anymore'))return;
			com.showGlobalPopUpWindows('bind_recommand_code')
		},
	},
	beforeDestroy(){
		uni.$off('user_scroll')
		uni.$off('user_menu_group')
	}
}