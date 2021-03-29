import com from '@/static/js/common.js'
export const nine_interaction = {
	data(){
		return {
			// 加载遮罩
			cover:true,
			// 刷新标识
			refreshing:false,
			// 嵌套滚动偏移
			offsetHeight:uni.upx2px(298),
			// 嵌套父滚动id
			pageId:'parent_list',
			current_category:0
		}
	},
	methods:{
		// 加载更多
		getLoadmore(index){
			console.log('当前分类',index,'加载更多')
			this.$set(this.page_group[index],'loadmore',true)
			this.fetchGoodsList(index,this.page_group[index].page,true)
		},
		// 刷新
		goodsRefresh(){
			this.$set(this.page_group[this.current_category],'data',[])
			this.fetchGoodsList(this.current_category,1)
		},
		// 重置加载更多
		resetListLoadmore(index){
			this.$refs.page[index].reset()
		},
		// 设置嵌套滚动
		setListFixed(res){
			this.current_category=res.index;
			
			this.$refs.page[res.index].setScrollRef()
			
			if(this.page_group[res.index].data.length==0&&!this.cover){
				this.fetchGoodsList(res.index,this.page_group[res.index].page)
			}
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
	},
	onLoad(){
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
	}
}