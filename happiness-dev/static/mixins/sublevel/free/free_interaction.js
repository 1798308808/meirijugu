import com from '@/static/js/common.js'
export const free_interaction = {
	data(){
		return {
			cover:true,
			// 刷新标识
			refreshing:false
		}
	},
	onLoad(){
		com.global_watcher_regist('pageScroll', this.regiPageScroll)
		com.global_watcher_regist('home_single_goods_tapped',this.singleGoodsWatcher)
	},
	methods:{
		// 单商品操作
		singleGoodsWatcher(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 刷新页面
		refreshPage(){
			this.group = [];
			this.fetchFreeGoods(1)
		},
		// 注册页面滚动事件
		regiPageScroll(res){
			if(res.detail.contentOffset.y<-50){
				this.status_color='#FF6363'
				this.color="#FF6363"
			}
			else{
				this.status_color='rgba(0,0,0,0)'
				this.color="rgba(255,255,255,0)"
			}
		}
	}
}