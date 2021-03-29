import com from '@/static/js/common.js'
export const lt_data = {
	data(){
		return{
			phone:'',
			// 验证码
			code:'',
			// 唯一标识
			open_id:'',
			// 第三方平台类型
			type:'',
			// 请求处理集合
			request_handler_group:{
				thirdPartBind:[
					{
						code:0,
						handle:()=>this.thirdPartBindSuccess
					},
					{
						code:1,
						handle:()=>this.notRegistYet
					},
					{
						code:-1,
						handle:()=>this.thirdPartBindFailed
					}
					
				],
				sendCode:[
					{
						code:0,
						handle:()=>this.sendCodeSuccess
					},
					{
						code:-1,
						handle:()=>this.sendCodeFailed
					}
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'绑定第三方账号',
					url:'http://www.jufu-unique.com/app.php/UserAccount/loginOauth',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.thirdPartBind,res,'short','bottom')
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
					func:'发送验证码',
					url:'http://www.jufu-unique.com/app.php/SmsAliyun/Send',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.sendCode,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				}
			]
		}
	},
	methods:{
		// 发送验证码(发起)
		sendCode(){
			if(!!this.timer)return
			com.sendCAPTCHA.apply(this,[this.timer,this.group[1],'captcha',this.timer_countdown,()=>{this.group[0].readonly=true;}])
			
			this.$set(this.request_task_group[1],'data',{phone:this.phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 发送验证码成功(接收)
		sendCodeSuccess(res){
			console.log('发送验证码成功',res)
		},
		// 发送验证码失败(接收)
		sendCodeFailed(res){
			console.log('发送验证码失败',res)
		},
		//绑定第三方账号(发起) 
		thirdPartBind(){
			this.$set(this.request_task_group[0],'data',{phone:this.phone,code:this.code,openid:this.open_id,type:this.type})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		//绑定第三方账号成功(接收) 
		thirdPartBindSuccess(res){
			console.log('绑定第三方账号成功',res)
			com.pageNavigation('/pages/login/loginsu/loginsu',3,{res:res.data})
		},
		//绑定第三方账号失败(接收) 
		thirdPartBindFailed(res){
			console.log('绑定第三方账号失败',res)
		},
		//绑定第三方账号成功自动注册(接收) 
		notRegistYet(res){
			plus.nativeUI.toast(`已为${this.phone}自动注册，密码为手机后六位`,{duration:'long'})
			com.pageNavigation('/pages/login/loginsu/loginsu',3,{res:res.data})
		}
	}
}