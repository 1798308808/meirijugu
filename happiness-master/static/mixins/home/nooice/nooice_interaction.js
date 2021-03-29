import com from '@/static/js/common.js'
export const nice_interaction = {
	data() {
		return {
			title:'',
			cover:true,
			loadmore_watcher:'nice_load',
			loadmore:false,
			nomore:false
		}
	},
	methods: {
		// 加载更多
		getMoreRecords(res){
			if(this.loadmore||this.nomore)return;
			this.loadmore=true;
			this.fetchMessageList(this.current_type,this.current_page+1)
		},
		// 查看详情
		jump(index){
			if(this.group[index].is_new){
				// 已读消息
				this.readMessage(this.group[index].msg_id)
				this.$set(this.group[index],'is_new',false)
			}
			switch(this.current_type){
				case 1:
					com.pageNavigation('/pages/home/detail/detail',null,{id:this.group[index].id})
				;break;
				case 2:
					com.pageNavigation('/pages/mine/fans/fans')
				;break;
				case 3:
					console.log('不知道跳哪里')
				break;
				case 4:
					com.pageNavigation('/pages/mine/order/order')
				;break;
			}
		}
	},
	onLoad(){
		com.global_watcher_regist(this.loadmore_watcher,this.getMoreRecords)
	}
}