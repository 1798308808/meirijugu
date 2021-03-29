import com from '@/static/js/common.js'
export const platform_interaction = {
	data(){
		return {
			platform_info:{
				type:2, //1淘宝/天猫 2京东 3拼多多 4唯品会
			},
			// 分类列表元素长度
			category_count:1,
			// 加载遮罩
			cover:true,
		}
	},
	methods:{
		// 获取各平台数据
		fetchPlatformGoods(){
			if(this.cover||!this.re_loading)return;
			switch(this.platform_info.type){
				case 1:this.getTBRecommand();break;
				case 2:;break;
				case 3:this.getPDDRecommand();break;
				case 4:this.getWPHRecommand();break;
			}
		},
		// 广告栏标题点击
		ADSTapped(data){
			com.pageNavigation('/pages/home/link/link',null,{link:data.href,name:data.title})
		},
		// 获取平台号并作出动作
		getStorePlatform(){
			this.platform_info.type =getCurrentPages()[getCurrentPages().length-1].$routeParams.platform;
			this.startPlatformActions(this.platform_info.type)
		},
		// 根据平台设置指示器颜色
		platformColor(type){
			switch(type){
				case 1:return '#FF6363';
				case 2:return '#ff4343';
				case 3:return '#ff6738';
				case 4:return '#fa2a83';
			}
		},
		// 分类商品点击
		getCategoryTapped(data){
			com.pageNavigation('/pages/store/list/list',null,{id:this.menu_group[data.index][data.index1].id,platform:this.platform_info.type,name:this.menu_group[data.index][data.index1].name})
		}
	},
	onLoad(){
		this.getStorePlatform()
	},
}