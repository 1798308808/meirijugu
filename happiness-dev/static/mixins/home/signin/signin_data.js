import com from '@/static/js/common.js'
export const signin_data = {
	data(){
		return {
			// 签到状态
			signin_status:false,
			// 签到内容
			signin_text:'',
			// 签到附加说明
			signin_extra:'',
			// 当前签到天数
			current_signin_days:0,
			// 请求处理集合
			request_handler_group:{
				getUserSignInInfo:[
					{
						success:true,
						handle:()=>this.getUserSignInInfoSuccess
					},
					{
						success:false,
						handle:()=>this.getUserSignInInfoFailed
					},
					{
						complete:true,
						handle:()=>this.getUserSignInInfoFinished
					}
					
				],
			},
			// 请求处理集合2
			request_handler_group2:{
				signin:[
					{
						code:0,
						handle:()=>this.signinSuccess
					},
					{
						code:-1,
						handle:()=>this.signinFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'用户签到信息',
					url:'http://www.jufu-unique.com/app.php/UserSign/getSignMsg',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'获取用户连续签到天数',
					url:' http://www.jufu-unique.com/app.php/UserSign/getContinuousDay',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
				{
					task:null,
					func:'判断用户今日是否签到',
					url:' http://www.jufu-unique.com/app.php/UserSign/isSignToday',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				}
			],
			// 请求集合2
			request_task_group2:[
				{
					task:null,
					func:'签到',
					url:'http://www.jufu-unique.com/app.php/UserSign/singin',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group2.signin,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
			]
		}
	},
	methods:{
		// 签到(发起)
		signin(){
			if(this.signin_status||this.cover)return;
			let token = uni.getStorageSync('token');
			if(token){
				this.cover=true;
				this.$set(this.request_task_group2[0],'data',{token:token.val})
				this.$set(this.request_task_group2[0],'task',com.createRequestTask(this.request_task_group2[0]))
			}
			
		},
		// 签到成功操作
		signinSuccessAction(res){
			this.signin_text =res.data.msg;
			this.signin_ani=true;
			this.signin_status=true;
			this.$set(this.group2[0],'mute',true)
			Object.assign(this.day[this.current_signin_days],{state:1,mute:true})
			this.user.greetings = `您已连续签到${this.current_signin_days+1}天`;
		},
		// 签到成功(接收)
		signinSuccess(res){
			console.log('签到成功',res)
			this.signinSuccessAction(res)
		},
		// 签到失败(接收)
		signinFailed(res){
			console.log('签到失败',res)
		},
		// 获取用户签到信息(发起)
		async getUserSignInInfo(cover){
			let token = uni.getStorageSync('token');
			if(token){
				this.ifFinishUserInfoForm()
				if(cover)this.cover=true;
				this.$set(this.request_task_group[1],'data',{token:token.val})
				this.$set(this.request_task_group[2],'data',{token:token.val})
				let result = await com.createIntegrationTask(this.request_task_group,[0,0,0],this,this.request_handler_group.getUserSignInInfo);
			}
		},
		// 获取用户签到信息成功(接收)
		getUserSignInInfoSuccess(res){
			console.log('获取用签成功',res)
			this.renderSigninBoard(res)
		},
		// 获取用户签到信息失败(接收)
		getUserSignInInfoFailed(res){
			console.log('获取用签失败',res)
		},
		// 获取用户签到信息完成(接收)
		getUserSignInInfoFinished(){
			console.log('获取用签完成')
			this.cover=false;
			this.refresh=false
		},
		// 渲染用户信息
		renderUserInfo(){
			this.user.name = !!this.$store.state.user.user_detail.nickname?this.$store.state.user.user_detail.nickname:this.$store.state.user.user_msg.phone
			this.user.avatar = this.$store.state.user.user_detail.avatar;
		},
		// 渲染签到板(渲染)
		// @params awards_type(String) 奖励类型 1积分 2余额 3经验值
		// @params list(Array) 签到板信息
		// @params list(Array) 签到板信息
		renderSigninBoard(data){
			let  [
				awards_type,
				awards_text,
				list,
				c_day,
				is_sign,
				group
			] =
			[
				data[0].res.sign_award_type,
				'',
				data[0].res.continuous_point,
				data[1].res.continuous_day,
				data[2].res.is_sign,
				[]
			]

			
			switch(awards_type){
				case '1':awards_text='积分';break;
				case '2':awards_text='元';break;
				case '3':awards_text='经验';break;
			}
			
			list.forEach((item,index)=>{

				let obj = {
					title:`${index+1}天`,
					desc:'+'+ item + awards_text,
					state:index+1<=c_day?1:0,
					mute:index+1<=c_day?true:false,
					type:index==list.length-1?2:1
				}
				group.push(obj)
			})
			this.day = group;
			this.current_signin_days = c_day;
			this.signin_status = is_sign=='Y'?true:false;
			this.$set(this.group2[0],'mute',is_sign=='Y'?true:false)
			this.user.greetings = `您已连续签到${c_day}天`;
		}
	},
	mounted(){
		this.renderUserInfo()
		this.getUserSignInInfo(true)
	}
}