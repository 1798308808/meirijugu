import com from '@/static/js/common.js'
export const rights_interaction ={
	data(){
		return{
			val:''
		}
	},
	methods:{
		// 导航栏操作
		navbarWather(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:
					this.getResult()
				;break;
			}
		},
		// 跳转权益外链
		go(index){
			com.pageNavigation('/pages/home/link/link',null,{link:this.group[index].link,name:this.group[index].name})
		}
	},
	onLoad(){
		com.global_watcher_regist('navbarTapHandler',this.navbarWather)
	}
}