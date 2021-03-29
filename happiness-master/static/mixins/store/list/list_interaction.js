import com from '@/static/js/common.js'
export const list_interaction = {
	data(){
		return {
			// 遮罩
			cover:true,
			// 加载更多监听器
			loadmore_monitor:'loadMoreGoods',
			// 加载更多标识
			loadmore:false,
			// 没有更多标识
			nomore:false,
			// 刷新标识
			refresh:false,
			// 标题
			title:''
			
		}
	},
	onReady(){
		com.global_watcher_regist(this.loadmore_monitor,this.regLoadmoreListener)
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
	},
	methods:{
		// 注册双列商品列表
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{type:this.platform,id:res.id})
		},
		// 注册加载更多监听器
		regLoadmoreListener(){
			console.log('加载更多了')
			this.loadmore=true;
			let page = this.page + 1
			this.request_params = [page]
			this.getGoodsList(this.platform,page)
		},
		// 获取平台及分类id
		getPlatformAndCategoryId(){
			let data = getCurrentPages()[getCurrentPages().length-1]
			this.title = data.$routeParams.name
			this.category_id = data.$routeParams.id
			this.platform = data.$routeParams.platform
			this.request_params = [this.page]
			
			this.getGoodsList(this.platform)
		},
		// 发出请求(发起)
		// @params id(String) 分类ID
		// @params type(Number) 1 淘宝/天猫 2 京东 3 拼多多
		getGoodsList(type,page){
			page = page || 1;
			switch(type){
				case 1:
					this.getTBGoodsList(page);
				break;
				case 2:;break;
				case 3:
					this.getPDDGoodsList(page);
				break;
				case 4:
					this.getWPHGoodsList(page);
				break;
			}
		},
		// 页面刷新中
		refreshing(){
			this.refresh = true;
			this.page = 1;
			this.nomore=false;
			this.loadmore=false;
			this.$refs.ctr.resetLoad();
			this.goods = []
			this.request_params = [1]
			this.getGoodsList(this.platform)
		}
	}
}