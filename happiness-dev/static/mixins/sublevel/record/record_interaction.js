export const record_interaction = {
	data(){
		return {
			cover:false,
			loadmore:false,
			nomore:false,
			// 加载更多监听器
			loadmore_watcher:'record_loadmore'
		}
	},
	methods:{
		// 加载更多
		getMoreRecords(){
			uni.$on(this.loadmore_watcher,res=>{
				if(this.loadmore||this.nomore)return;
				this.requestArgs = [true];
				this.getUserSignInRecord(true,this.current_page+1)
				this.loadmore=true;
			})
		}
	},
	onReady(){
		this.getMoreRecords()
	}
}