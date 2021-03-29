import com from '@/static/js/common.js'
export const collections_interaction ={
	data() {
		return {
			// 加载遮罩
			cover:true,
			// 刷新
			refresh:false,
			// 加载更多
			loadmore:false,
			// 没有了
			nomore:false,
			// 当前平台
			current_platform:0,
			// 防止切换swiper导致渲染错误
			dontmove:false
		}
	},
	methods: {
		// 切换平台
		switchSwiper(data){
			this.loadmore=false;
			this.nomore=false;
			let index = data.index;
			this.current_platform = index;
			if(this.options_group[index].data.length==0){
				this.cover=true;
				this.group=[]
				switch(index){
					case 0:
						this.fetchTBUserCollections()
					;break;
					case 1:
						
					;break;
					case 2:
						this.fetchPDDUserCollections()
					;break;
					case 3:
						this.fetchWPHUserCollections()
					;break;
				}
			}
			else{
				this.group = this.options_group[index].data
			}			
		},
		// 加载
		loadMoreGoods(){
			this.dontmove=true;
			this.loadmore=true;
			switch(this.current_platform){
				case 0:this.nomore=true;break;
				case 1:break;
				case 2:this.fetchPDDUserCollections(this.pdd_args[0]+1);break;
				case 3:this.fetchWPHUserCollections(this.wph_args[0]+1);break;
			}
		},
		// 刷新
		refreshing(){
			this.dontmove=true;
			if(this.current_platform==2){this.pdd_args=[1]}
			if(this.current_platform==3){this.wph_args=[1]}
			this.$set(this.options_group[this.current_platform],'data',[])
			this.switchSwiper({index:this.current_platform})
		},
		jump(id){
			com.pageNavigation('/pages/home/detail/detail',null,{type:this.current_platform+1,id})
		}
	}
}