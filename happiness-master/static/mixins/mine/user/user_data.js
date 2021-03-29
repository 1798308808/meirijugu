import com from '@/static/js/common.js'
export const user_data = {
	data(){
		return {
			// 跳转标识
			nav_sign:'',
			// 聚福卡跳转定时器
			card_timer:null,
			// 登录状态
			isLogin:false,
			// 个人消息
			userInfo:{
				// 昵称
				name:'',
				// 头像
				avatar:'/static/bear.png',
				// 邀请码
				code:'',
				// 当前经验值
				current_exp:0,
				// 下一等级需要的总经验值
				total_exp:0,
				// vip等级
				vip_level:1,
				// 余额
				balance:'0.00',
				// 今日收益
				today_income:'0.00',
				// 本月预估
				month_income:'0.00',
				// 上月预估
				last_month_income:'0.00',
				// 积分剩余
				credit:0,
				// 你已经无敌了！
				max:false
			},
			// 底部9.9元
			bottom_list:[],
			for_menu_banner:['/static/bb1.png','/static/bb2.png'],
			// 请求处理集合
			request_handler_group:{
				fetchUserInfoAndHavest:[
					{
						success:true,
						handle:()=>this.getUserInfoAndHavestSuccess
					},
					{
						success:false,
						handle:()=>this.getUserInfoAndHavestFailed
					},
					{
						complete:true,
						handle:()=>this.getUserInfoAndHavestFinished
					}
					
				],
				fetchGoodsList: [{
						code: 1,
						handle: () => this.fetchGoodsListSuccess
					},
					{
						code: -1,
						handle: () => this.fetchGoodsListFailed
					}
				
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取个人信息',
					url:'http://www.jufu-unique.com/app.php/User/getUserMsg',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取个人收益',
					url:'http://www.jufu-unique.com/app.php/UserBalanceRecord/statistics2',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取会员组信息',
					url:'http://www.jufu-unique.com/app.php/UserGroup/getGroupList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				}
			],
			// 请求列表2
			request_task_group2: [
			{
				task: null,
				func: '获取9.9元列表',
				url: 'http://www.jufu-unique.com/app.php/Haodanku/getGoodsList',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {type:2,cid:0,min_id:1},
				success: (res) => {
					com.requestResponse(this,[],this.request_handler_group.fetchGoodsList,res,'short','bottom',[])
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
				}
			}
			]
			
		}
	},
	mounted(){
		com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
		this.fetchStorageUserInfo(true)
		this.fetchGoodsList()
	},
	methods:{
		// 获取9.9商品(发起)
		fetchGoodsList() {
			this.bottom_list =[]
			this.$set(this.request_task_group2[0], 'task', com.createRequestTask(this.request_task_group2[0]))
		},
		// 重置用户登录状态
		resetUserLoginStatus(){
			let obj  = {
				name:'',
				avatar:'/static/bear.png',
				code:'',
				current_exp:0,
				total_exp:0,
				vip_level:1,
				balance:'0.00',
				today_income:'0.00',
				month_income:'0.00',
				last_month_income:'0.00',
				credit:0,
				max:false,
				has_card:'N'
			}
			this.for_user_name.name = '请登录';
			this.for_user_avatar.avatar = '/static/bear.png';
			this.userInfo = obj;
			this.isLogin=false;
			uni.removeStorageSync('token');
		},
		// 获取缓存个人信息
		fetchStorageUserInfo(page,firstTime){
			if(page)this.pageLoading(true)
			let token = uni.getStorageSync('token');
			if(token){
				this.transmitData({data:{data:{token:token.val}},msg:!!token.extra?token.extra:'login'})
			}
			else{
				this.refreshOverAsync()
				this.resetUserLoginStatus()
			}
		},
		// 同步个人信息
		synchroniseUserInfo(){
			let token = uni.getStorageSync('token');
			if(token&&!!this.$store.state.user.user_detail){
				this.for_user_avatar.avatar = this.$store.state.user.user_detail.avatar;
				this.userInfo.avatar =  this.$store.state.user.user_detail.avatar;
				this.userInfo.name = !!this.$store.state.user.user_detail.nickname?this.$store.state.user.user_detail.nickname:this.$store.state.user.user_msg.phone;
				this.userInfo.has_card = this.$store.state.user.user_msg.is_gather_card;
				this.for_user_name.name = !!this.$store.state.user.user_detail.nickname?this.$store.state.user.user_detail.nickname:this.$store.state.user.user_msg.phone;
			}
			else{
				this.userInfo.has_card = 'N'
				this.for_user_avatar.avatar = '/static/bear.png';
				this.userInfo.avatar =  '/static/bear.png';
			}
		},
		// 页面展现
		on_show(){
			console.log('我的 页面显示了')
			com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
			com.setStatusBarColor(true)
			this.synchroniseUserInfo()
		},
		// 接受根页面分发数据
		async transmitData(data){
			console.log(`我${this.id}已接受到数据`,data)
			this.nav_sign = data.msg
			switch(data.msg){
				case 'card':
				case 'friends':
				case 'login':
					this.$set(this.request_task_group[0],'data',{token:data.data.data.token})
					this.$set(this.request_task_group[1],'data',{token:data.data.data.token})
					
					let result = await com.createIntegrationTask(this.request_task_group,[0,0,0],this,this.request_handler_group.fetchUserInfoAndHavest);
				break;
				case 'logout':
					this.resetUserLoginStatus();
				break;
			}
		},
		// 更新个人信息(渲染)
		// @params source(Object) 源数据
		renderPersonalData(data){
			let [user_info,user_havest,user_vip_group] =
			[data[0].res,data[1].res,data[2].res]
			
			this.$store.commit('user/setUserInformation',user_info)
			this.$store.commit('user/setUserInformation',user_vip_group)
			
			let [current_exp,total_exp,max] = [user_info.user_msg.exp,0,false];
			
			if(parseInt(user_info.user_msg.group_id) + 1>4){
				current_exp=-1;
				total_exp=1;
				max = true;
			}
			else{
				total_exp = user_vip_group.list.find((item,index)=>{
					let id = parseInt(user_info.user_msg.group_id) + 1>4?'4':(parseInt(user_info.user_msg.group_id) + 1).toString()
					return item.id==id
				}).exp
			}
			
			let obj = {
				name:!!user_info.user_detail.nickname?user_info.user_detail.nickname:user_info.user_msg.phone,
				avatar:user_info.user_detail.avatar,
				code:user_info.user_msg.auth_code,
				balance:user_info.user_msg.balance,
				credit:user_info.user_msg.point,
				vip_level:user_info.user_msg.group_id,
				today_income:user_havest.amount_today,
				month_income:user_havest.amount_current,
				last_month_income:user_havest.amount_last,
				total_exp,
				current_exp,
				max,
				has_card:user_info.user_msg.is_gather_card
			}
			this.for_user_name.name = obj.name;
			this.for_user_avatar.avatar = obj.avatar;
			Object.assign(this.userInfo,obj)
			
			this.isLogin=true;
		},
		// 渲染底部9.9元
		renderBottomGoods(list){
			// 替换字段
			let result = JSON.parse(JSON.stringify(list)
			.replace(/itemid/g,'id')
			.replace(/itemtitle/g,'title')
			.replace(/itempic/g,'thumb')
			.replace(/itemendprice/g,'price')
			.replace(/itemprice/g,'d_price')
			.replace(/discount/g,'mdiscount')
			.replace(/couponmoney/g,'discount')
			.replace(/shoptype/g,'platform')
			.replace(/tkmoney/g,'rewards')
			.replace(/itemsale/g,'sales'))
			
			
			
			result.forEach(item=>{
				item.platform = item.platform =='B'?'/static/tmall.png':'/static/taobao.png';
			})
			
			
			this.bottom_list = result.splice(0,3);
		},
		// 重定向到聚福卡页面
		redirectToCard(res){
			
			let token = uni.getStorageSync('token');
			uni.setStorageSync('token',{val:token.val,createTime:Date.now()});
			
			if(this.nav_sign=='friends'){
				clearTimeout(this.card_timer)
				this.card_timer = setTimeout(()=>{
					com.pageNavigation('/pages/mine/inviteFriends/inviteFriends');
				},300)
				return;
			}
			let has_card = res[0].res.user_msg.is_gather_card=='Y'?true:false;
			if(has_card){
				plus.nativeUI.toast('您已经拥有聚福卡了',{duration:'long'});
			}
			else{
				clearTimeout(this.card_timer)
				this.card_timer = setTimeout(()=>{
					uni.$emit('tabbarPageReturnData', {
						page: 2,
						data: '',
						msg: ''
					})
				},300)
			}
			
		},
		// 获取个人信息和个人收益成功(接收)
		getUserInfoAndHavestSuccess(res){
			// debug
			console.log('获取信息成功',res)
			console.log(this.nav_sign)
			if(this.nav_sign=='card'||this.nav_sign=='friends')this.redirectToCard(res)
			this.renderPersonalData(res)
			com.refreshOver(this.refresh,true,()=>{this.refresh=false;this.opacity=false;})
		},
		// 获取个人信息和个人收益失败(接收)
		getUserInfoAndHavestFailed(res){
			console.log('获取信息失败',res)
			 uni.removeStorageSync('token');
			com.refreshOver(this.refresh,false,()=>{this.refresh=false;})
		},
		// 获取个人信息和个人收益结束(接收)
		getUserInfoAndHavestFinished(){
			console.log('获取信息结束')
			this.pageLoading(false)
			this.needDisplayRecommandationPopUp()
		},
		// 获取获取9.9元列表成功(接收)
		fetchGoodsListSuccess(res) {
			console.log('获取获取9.9元列表成功')
			this.renderBottomGoods(res.data.data)
		},
		// 获取获取9.9元列表失败(接收)
		fetchGoodsListFailed(res) {
			console.log('获取获取9.9元列表失败', res)
		},
	}
}