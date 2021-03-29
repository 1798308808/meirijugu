import com from '@/static/js/common.js'
export const rd_interaction ={
	data(){
		return {
			// 加载遮罩(仅初始化使用)
			cover:true,
			// 刷新标识
			refreshing:false,
			current_category:0
		}
	},
	methods:{
		// 加载更多
		getLoadmore(index){
			console.log('当前分类',index,'加载更多',this.page_group[index].page)
			this.$set(this.page_group[index],'loadmore',true)
			this.fetchGoodsList(index,this.page_group[index].page,true)
		},
		// 刷新
		goodsRefresh(res){
			let index = res.replace('_','')
			this.$set(this.page_group[index],'refresh',true)
			console.log(this.page_group[index])
			this.$set(this.page_group[index],'data',[])
			this.fetchGoodsList(index,1)
		},
		// swiper页面切换
		swiperPageChanged(res){
			this.current_category=res.index;

			if(this.page_group[res.index].data.length==0&&!this.cover){
				this.fetchGoodsList(res.index,this.page_group[res.index].page)
			}
		},
		// 重置加载更多
		resetListLoadmore(index){
			this.$refs.page[index].reset()
		},
		// 两栏商品操作
		multiGoodsWather(res){
			com.pageNavigation('/pages/home/detail/detail',null,{id:res.id})
		},
		// 筛选
		compare(prop,type){
			return function(a,b){
				let val1 = Number(a[prop]);
				let val2 = Number(b[prop]);
				
				return type=='asc'?val1 - val2:val2 - val1;
			}
		},
		// 筛选操作
		getFilters(res){
			let list = JSON.parse(JSON.stringify(this.page_group[res.page].backup));
			let str = '';
			let flag = this.page_group[res.page].filters[res.index].options;
			let props = ''
			
			
			if(res.index==0){
				this.$set(this.page_group[res.page],'data',list)
				return;
			}
			
			list = list.flat()
			
			switch(res.index){
				case 1: 
					str =flag?'升序':'降序'
					console.log('价格'+str)
					
					props = 'price'
				break;
				case 2:
					str =flag?'升序':'降序'
					console.log('销量'+str)
					
					props = 'sales'
				break;
				case 3:
					str =flag?'升序':'降序'
					console.log('佣金比例'+str)
					
					props = 'rewards'
				break;
				case 4:
					flag = false;
					console.log('推广量降序')
					
					props = 'spread'
				break;
			}
			
			if(flag){
				list.sort(this.compare(props,'asc'))
				
			}
			else{
				list.sort(this.compare(props,'desc'))
			}
			
			
			// 分割成两个一组，cell限制
			let group = []
			for(let i=0;i<list.length;i+=2){
				group.push(list.slice(i,i+2));
			}
			
			this.$set(this.page_group[res.page],'data',group)
		},
	},
	onLoad(){
		this.getGoodsListType()
		this.fetchCategory()
		com.global_watcher_regist('home_double_goods_tapped',this.multiGoodsWather)
	}
}