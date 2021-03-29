import com from '@/static/js/common.js'
export const login = {
	data() {
		return {
			user_data: {},
			could:false
		}
	},
	methods: {
		back(str){
			uni.setStorageSync('token',{val:this.user_data.data.token,createTime:Date.now(),extra:str});
			this.could=true;
			com.backToTabbarPage(4, this.user_data, str)
		},
		// 注册导航栏事件
		navbarHandle(res){
			switch(res.position){
				case 0:;break;
				case 1:;break;
				case 2:this.back('login');break;
			}
		},
		// 办卡
		card(){
			this.back('card')
		},
		// 邀请好友
		friends(){
			this.back('friends')
		}
	},
	onReady(){
		com.global_watcher_regist('navbarTapHandler',this.navbarHandle)
	},
	onLoad() {
		this.user_data = getCurrentPages()[getCurrentPages().length - 1].$routeParams.res;
	},
	onBackPress(options) {
		if(!this.could){
			return true
		}
		else{
			return false
		}
	},
}
