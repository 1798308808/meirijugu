import com from '@/static/js/common.js'
export const cl_interaction={
	data(){
		return {
			page_refresh:false,
			showSkeleton:true
		}
	},
	methods:{
		// 页面加载/刷新动画
		pageLoading(status){
			this.page_refresh=status;
		},
		// 注册分类项点击事件
		registClassTap(res){
			com.pageNavigation('/pages/home/link/link',null,{link:res.item.link,name:res.item.name})
		},
		// 监听tabbar按钮刷新
		tabbarRefresh(){
			if(this.page_refresh)return;
			this.fetchClassification()
		},
		// 页面展现
		on_show(){
			com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
			com.setStatusBarColor(true)
			console.log('尊享 页面显示了')
		},
		// 注册导航栏事件
		registNavbarHandle(res){
			switch(res.position){
				case 0:;break;
				case 1:com.pageNavigation('/pages/classification/rightsList/rightsList');break;
				case 2:;break;
			}
		},
	},
	mounted(){
		com.setStatusBarColor(true)
		com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
		com.global_watcher_regist('classification_tap',this.registClassTap)
		this.registClassTap()
	}
}