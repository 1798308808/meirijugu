import com from '@/static/js/common.js'
export const login_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				login:[
					{
						code:0,
						handle:()=>this.loginSuccess
					},
					{
						code:105,
						handle:()=>this.autoReg
					},
					{
						code:-1,
						handle:()=>this.loginFailed
					}
					
				],
				reg:[
					{
						code:0,
						handle:()=>this.autoRegSuccess
					},
					{
						code:-1,
						handle:()=>this.autoRegFailed
					}
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'一键登录',
					url:'http://www.jufu-unique.com/app.php/UserAccount/quickMobPhone',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.login,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
				{
					task:null,
					func:'快捷注册',
					url:'http://www.jufu-unique.com/app.php/UserAccount/loginMobPhone2',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.reg,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				}
			]
		}
	},
	methods:{
		// 一键登录(发起)
		login(phone){
			uni.closeAuthView()
			this.cover=true;
			this.$set(this.request_task_group[0],'data',{phone})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 一键登录成功(接收)
		loginSuccess(res){
			console.log('一键登录成功',res)
			com.pageNavigation('/pages/login/loginsu/loginsu',3,{res})
		},
		// 一键登录失败，需要自动注册(接收)
		autoReg(res){
			console.log('用户未注册',res)
			plus.nativeUI.toast('正在为您自动注册，密码为手机号后六位',{duration:8000});
			this.startAutoReg(res.data.data.phone)
		},
		// 一键登录失败(接收)
		loginFailed(res){
			console.log('一键登录失败',res)
		},
		// 自动注册成功(接收)
		autoRegSuccess(res){
			console.log('自动注册成功',res)
			com.pageNavigation('/pages/login/loginsu/loginsu',3,{res})
		},
		// 自动注册失败(接收)
		autoRegFailed(res){
			console.log(' 自动注册失败',res)
		},
		// 开始自动注册(发起)
		startAutoReg(phone){
			this.cover=true;
			this.$set(this.request_task_group[1],'data',{phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		}
	}
}