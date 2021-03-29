import com from '@/static/js/common.js'
export const searchResult_interaction = {
	data(){
		return {
			val:'',
			cover:true,
			loadmore:false,
			nomore:false,
			dontmove:false
		}
	},
	watch:{
		current_platform:function(val){
			this.goodsDetailHandler(val)
		}
	},
	methods:{
		// 筛选
		getFilters(res){
			console.log(res)
			let page = this.current_platform-1
			let list = JSON.parse(JSON.stringify(this.options_group[page].backup));
			let str = '';
			let flag = this.filters[res.index].options;
			let props = ''
			
			// 综合直接使用原始数据
			if(res.index==0){
				this.$set(this.options_group[page],'data',this.options_group[page].backup)
				this.group = this.options_group[page].data
				return;
			}
			
			switch(res.index){
				case 1: 
					str =flag?'升序':'降序'
					console.log('价格'+str)
					
					props = 'price'
				break;
				case 2:
					str =flag?'升序':'降序'
					console.log('销量或折扣'+str)
					
					props =page==3?'discount':'sales' 
				break;
			}
			if(flag){
				list.sort(this.compare(props,'asc'))
				
			}
			else{
				list.sort(this.compare(props,'desc'))
			}
			
			
			this.$set(this.options_group[page],'data',list)
			this.group = list;
		},
		// 排序
		compare(prop,type){
			return function(a,b){
				let val1 = Number(a[prop]);
				let val2 = Number(b[prop]);
				
				return type=='asc'?val1 - val2:val2 - val1;
			}
		},
		// 加载更多
		loadMoreGoods(){
			this.loadmore=true
			this.dontmove=true
			switch(this.current_platform){
				case 1:this.getTBSearch(this.val,this.args_group[0]);break;
				case 2:;break;
				case 3:this.getPDDSearch(this.val,this.args_group[2]);break;
				case 4:this.getWPHSearch(this.val,this.args_group[3]);break;
			}
		},
		// 导航栏操作
		navbarWather(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:
					this.cover=true
					// 清空其他关键词数据
					this.options_group.map(item=>item.data=[])
					this.$set(this.args_group,(this.current_platform-1).toString(),1)
					switch(this.current_platform){
						case 1:this.getTBSearch(this.val);break;
						case 2:;break;
						case 3:this.getPDDSearch(this.val);break;
						case 4:this.getWPHSearch(this.val);break;
					}
				;break;
			}
		},
		// 获取关键词
		fetchKeywords(){
			this.val = getCurrentPages()[getCurrentPages().length-1].$routeParams.keywords;
			this.getTBSearch(this.val)
		},
		// 商品详情页
		goodsDetailHandler(type){
			com.global_watcher_regist('home_single_goods_tapped',(res)=>{
				com.pageNavigation('/pages/home/detail/detail',null,{type,id:res.id})
			})
		},
		// 切换平台
		switchSwiper(res){
			let index = res.index;
			this.current_platform = index+1;
			this.group = [];
			// 垃圾唯品会没销量字段
			if(index==3){
				this.$set(this.filters[2],'title','折扣')
			}
			else{
				this.$set(this.filters[2],'title','销量')
			}
			
			if(this.options_group[index].data.length==0){
				this.cover=true;
				switch(index){
					case 0:this.getTBSearch(this.val);break;
					case 1:;break;
					case 2:this.getPDDSearch(this.val);break;
					case 3:this.getWPHSearch(this.val);break;
				}
				return;
			}
			this.group = this.options_group[index].data
			this.autoFilter()
		},
		// 自动筛选
		autoFilter(){
			let filter_index = this.filters.findIndex(item=>item.active==true)
			this.getFilters({index:filter_index})
		}
	},
	onLoad(){
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
		this.fetchKeywords()
		this.goodsDetailHandler(1)
	}
}