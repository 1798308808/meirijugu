import com from '@/static/js/common.js'
export const official_interaction ={
	data(){
		return{
			current_page:1,
			loadmore_watcher:'official_message',
			loadmore:false,
			nomore:false
		}
	},
	methods:{
		// 加载更多
		getMoreRecords(res){
			if(this.loadmore||this.nomore)return;
			this.loadmore=true;
			this.fetchOfficialMessage(this.current_page+1)
		},
		// 跳转文章
		jump(index){
			com.pageNavigation('/pages/mine/article/article',null,{id:this.group[index].id})
		}
	},
	onLoad(){
		com.global_watcher_regist(this.loadmore_watcher,this.getMoreRecords)
	}
}