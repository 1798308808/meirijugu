import com from '@/static/js/common.js'
export const bill_interaction = {
	data(){
		return {
			// 当前页面
			current_page:0,
			// 当前排行榜下分类
			current_category_type:0,
			cover:true,
			// 切换时将滚动条跳至最顶
			loadtimer:null
		}
	},
	methods:{
		// 刷新页面
		refreshing(data){
			console.log('当前页面',this.current_page,'当前分类',this.current_category_type,'需要刷新')
			this.fetchBillBoard(Number(data.replace('+','')),this.current_category_type,1,true)
			
		},
		// 加载更多
		loadmore(){
			console.log('当前页面',this.current_page,'当前分类',this.current_category_type,'需要加载更多')
			this.page_group[this.current_page].loadmore=true;
			this.page_group[this.current_page].disabled=true;
			this.fetchBillBoard(this.current_page,this.current_category_type,this.page_group[this.current_page].category[this.current_category_type].page)
		},
		// 切换排行榜类型
		pageChangeHandle(res){
			console.log('当前页码',res)
			if(this.cover)return;
			if(!this.page_group[res.index].render)this.$set(this.page_group[res.index],'render',true)
			this.current_page = res.index;
			
			this.current_category_type = this.page_group[this.current_page].category.findIndex(item=>item.active==true)
			console.log('分类索引更新',this.current_category_type)
			if(this.goods[res.index].length==0){
				this.fetchBillBoard(res.index,0,1,true)
			}
		},
		// 切换分类
		getTappedItem(data){
			this.current_category_type = data.index;
			// 清空list中的项目使list回滚到顶部
			this.$set(this.goods,this.current_page.toString(),[])
			clearTimeout(this.loadtimer)
			this.loadtimer=setTimeout(()=>{
				if(this.page_group[this.current_page].category[data.index].data.length==0){
					this.cover=true
					this.fetchBillBoard(this.current_page,data.index,1,true)
				}
				else{
					this.$set(this.goods,this.current_page.toString(),this.page_group[this.current_page].category[data.index].data)
				}
			},300)
			
		},
		// 注册双列商品列表
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
	},
	onReady(){
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
		com.global_watcher_regist('pageChanged',this.pageChangeHandle)
	}
}