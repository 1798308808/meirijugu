import com from '@/static/js/common.js'
export const category_interaction = {
	data(){
		return {
			cover:false,
			// 初始化当前页面
			current_page:0,
			// 当前主索引
			current_page_index:0
		}
	},
	methods:{
		// 筛选
		compare(prop,type){
			return function(a,b){
				let val1 = Number(a[prop]);
				let val2 = Number(b[prop]);
				
				return type=='asc'?val1 - val2:val2 - val1;
			}
		},
		// 筛选器更新
		// @params data(Number) 包括 page:swiper页码 index:筛选选项索引
		filterUpdated(data){
			let list = JSON.parse(JSON.stringify(this.goods_backup_group[data.page]));
			let str = '';
			let flag = this.page_filters[data.page][data.index].options;
			let props = ''
			
			if(data.index==0){
				console.log(list)
				this.$set(this.goods_group,data.page.toString(),list)
				return;
			}
			switch(data.index){
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
			}
			
			if(flag){
				list.sort(this.compare(props,'asc'))
				
			}
			else{
				list.sort(this.compare(props,'desc'))
			}
			this.$set(this.goods_group,data.page.toString(),list)
		},
		// 正在刷新
		// @params page(Number) swiper页码 
		refreshing(page){
			console.log('页面正在刷新',page)
			page = Number(page.replace('+',''));
			let index = this.options[page].list.findIndex(item=>item.active==true)
			if(index!=-1){
				console.log('正在刷新页面',page,'子分类',index)
				this.$set(this.options[page].list[index],'page',1)
				this.getGoodsList(this.options_group[page],this.options[page].list[index].page,this.options[page].list[index],index,true)
			}
			else{
				console.log('正在刷新页面',page,'未选择子分类')
				this.$set(this.request_params_group[page],'1',1)
				this.getGoodsList(this.options_group[page],this.request_params_group[page][1],false,false,true)
			}
		},
		// 加载更多切换
		// @params flag(Boolean) 
		loadmoreToggle(page,flag){
			this.$set(this.page_group[page],'loadmore',flag)
			if(!flag)this.$refs.main_list[page].reset()
		},
		// 获取当前触发加载更多页面
		getLoadmorePage(page){
			console.log(page,'加载更多')
			if(this.page_group[page].loading||this.page_group[page].loadmore)return;
			
			this.loadmoreToggle(page,true)
			
			let index = this.options[page].list.findIndex(item=>item.active==true)
			let current_data_page = 1;
			
			if(index!=-1){
				current_data_page  = this.options[page].list[index].page+1;
				console.log('加载更多选择了子分类')
				this.getGoodsList(this.options_group[page],current_data_page,this.options[page].list[index],index,true)
			}
			else{
				current_data_page  =this.request_params_group[page][1]+1;
				console.log('加载更多没有选择了子分类')
				this.getGoodsList(this.options_group[page],current_data_page,false,false,true)
			}
		},
		// 子分类点击
		getTappedCategory(data){
			let index = data.id;
			let keywords = this.options[index].list.find(item=>item.taobao_cat_id==data.cat_id)
			console.log('页面',index,'关键词',keywords.name)
			
			if(this.page_group[index].loading||this.page_group[index].loadmore){
				plus.nativeUI.toast('当前页面的数据还在加载中,请稍安勿躁~');
				return;
			}
			// 点击选项为激活态
			this.options[index].list.forEach((item,index)=>{
				if(index==data.index){
					item.active=true
				}
				else{
					item.active=false
				}
			})
			
			if(this.options[index].list[data.index].goods.length==0){
				this.getGoodsList(this.options_group[index],this.options[index].list[data.index].page,keywords,data.index)
			}
			else{
				this.$set(this.goods_group,index.toString(),this.options[index].list[data.index].goods)
				this.goods_backup_group = JSON.parse(JSON.stringify(this.goods_group))
			}
		},
		// 注册滑动切换监听器
		pageChangeHandle(res){
			console.log('当前页码',res)
			this.current_page_index = res.index;
			if(!this.page_group[res.index].render){
				this.$set(this.page_group[res.index],'render',true)
			}
			if(this.options[res.index].list.length==0){
				this.getSecondaryCategory(this.options_group[res.index].taobao_cat_id)
			}
			if(this.goods_group[res.index].length==0){
				this.getGoodsList(this.options_group[res.index],this.request_params_group[res.index][1])
			}
		},
		// 获取顶部分类菜单栏数据并初始化
		getEntranceCategory(){
			let data = getCurrentPages()[getCurrentPages().length - 1].$routeParams
			let group = JSON.parse(JSON.stringify(data.list).replace(/name/g,'text'));
			
			this.initSwiperPageFilter(group)
			this.initSwiperPage(group,this.current_page)
			this.initSecondaryCategoryList(group)
			this.initSwiperPageRequestParams(group)
			this.initSwiperPageGoodsGroup(group)
			
			this.options_group = group;
			console.log('菜单列表',this.options_group)
			this.current_page = data.current;

		},
		// 导航栏操作
		navbarWather(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:com.pageNavigation('/pages/sublevel/search/search');break;
			}
		},
	},
	onReady(){
		com.global_watcher_regist('pageChanged',this.pageChangeHandle)
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
		com.setStatusBarColor(true)
		this.getEntranceCategory()
	}
}