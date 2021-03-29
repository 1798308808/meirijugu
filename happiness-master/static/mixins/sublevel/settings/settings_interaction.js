import com from '@/static/js/common.js'
export const settings_interaction = {
	data(){
		return {
			// 是否显示退出登录按钮
			has:false,
			// 加载效果
			cover:false,
			settings_group1:[
				{
					id:'c1',
					type:1,
					title:"换绑/绑定支付宝账号",
				},
				{
					id:'c2',
					type:1,
					title:"绑定上级",
				},
				{
					id:'c3',
					type:1,
					title:"换绑账号",
				},
				{
					id:'c4',
					type:1,
					title:"地址管理",
				},
				{
					id:'c5',
					type:1,
					title:"修改密码",
				},
				// {
				// 	id:'c6',
				// 	type:1,
				// 	title:"注销账号",
				// },
			],
			settings_group2:[
				{
					id:'c7',
					type:2,
					title:"清理缓存",
					sub:'0MB',
				},
				{
					id:'c8',
					type:1,
					title:"用户协议",
				},
				{
					id:'c9',
					type:1,
					title:"隐私政策",
				},
				{
					id:'c10',
					type:2,
					title:"检测版本",
					sub:'',
					light:false
				}
			]
		}
	},
	methods:{
		// 点击了哪个cell
		// @params data(Object) 返回数据
		getTapping(data){
			switch(data.target){
				case 'c1':com.pageNavigation('/pages/sublevel/bind/bind');break;
				case 'c2':this.needDisplayRecommandationPopUp();break;
				case 'c3':com.pageNavigation('/pages/sublevel/changePhoneNum/changePhoneNum');break;
				case 'c4':com.pageNavigation('/pages/sublevel/adsmanager/adsmanager');break;
				case 'c5':com.pageNavigation('/pages/login/reset/reset');break;
				// case 'c6':;break;
				case 'c7':this.clearCache();break;
				case 'c8':com.pageNavigation('/pages/mine/article/article',null,{id:1});break;
				case 'c9':com.pageNavigation('/pages/mine/article/article',null,{id:37});break;
				case 'c10':uni.$emit('update_listener');break;
			}
		},
		// 判断绑定上级状态
		needDisplayRecommandationPopUp(){
			if(uni.getStorageSync('token')){
				if(!!this.$store.state.user.user_msg.referrer_phone){
					plus.nativeUI.toast('您已经绑定过推荐人');
				}
				else{
					com.showGlobalPopUpWindows('bind_recommand_code')
				}
			}
			else{
				plus.nativeUI.toast('您还未登录');
			}
			
		},
		// 请求登出
		exit(){
			this.requireLogout()
		},
		// 判断是否登陆
		isLogin(){
			let token = uni.getStorageSync('token');
			this.has = token?true:false;
		},
		// 获取缓存
		getCache(){
			plus.cache.calculate(  ( size ) =>{
				this.$set(this.settings_group2[0],'sub',(size/1024/1024).toFixed(2) + 'MB')
			})
		},
		// 清理缓存
		clearCache(){
			if(this.settings_group2[0].sub.replace('MB','')=='0')return;
			let that = this;
			plus.nativeUI.confirm(`要清理${this.settings_group2[0].sub}空间?`, function(e){
				console.log(e.index)
				if(e.index==0){
					plus.cache.clear()
					plus.nativeUI.toast(`清理完毕`);
					that.getCache()
				}
			});
		},
		// 获取app版本
		getVersion(){
			console.log('版本',plus.runtime.version)
			this.$set(this.settings_group2[3],'sub',plus.runtime.version)
		}
		
	},
	onShow(){
		this.isLogin()
		this.getCache()
		this.getVersion()
		this.fetchApplicationUpdateInfo()
	}
}