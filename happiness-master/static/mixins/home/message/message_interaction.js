import com from '@/static/js/common.js'
export const msg_interaction ={
	data() {
		return {
			cover:true
		}
	},
	methods: {
		// 查看详细消息列表
		checkMessage(index,type){
			this.$set(this.group[index],'count',0)
			if(index==0){
				com.pageNavigation('/pages/mine/officialNotice/officialNotice')
			}
			else{
				com.pageNavigation('/pages/home/nooice/nooice',null,{type})
			}
			
		},
		// 导航栏操作
		navbarWather(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:this.readAllMessage();break;
			}
		},
	},
	onLoad(){
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
	}
}