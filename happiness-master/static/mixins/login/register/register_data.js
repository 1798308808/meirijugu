import com from '@/static/js/common.js'
export const reg_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				ifPhoneOccupy:[
					{
						code:109,
						handle:()=>this.ifPhoneIsRegist
					},
					{
						code:-1,
						handle:()=>this.phoneIdentificationFailed
					}
					
				],
				fetchCAPTCHA:[
					{
						code:0,
						handle:()=>this.ifCAPTCHAReady
					},
					{
						code:-1,
						handle:()=>this.fetchCAPTCHAFailed
					}
				],
				fetchRegResponse:[
					{
						code:0,
						handle:()=>this.registSuccess
					},
					{
						code:-1,
						handle:()=>this.registFailed
					}
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'检测手机号状态',
					url:'http://www.jufu-unique.com/app.php/MobSms/mobPhoneLogin',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[4,1],this.request_handler_group.ifPhoneOccupy,res,'short','top')
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
					func:'获取验证码',
					url:'http://www.jufu-unique.com/app.php/SmsAliyun/Send',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchCAPTCHA,res,'long','top',['jb'])
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
					func:'注册',
					url:'http://www.jufu-unique.com/app.php/UserAccount/register',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchRegResponse,res,'long','top')
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
		// 判断手机号是否注册(发起)
		isPhoneRegistYet(){
			this.cover=true;
			this.$set(this.request_task_group[0],'data',{phone:this.form_data.phone})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 判断注册验证码状态(发起)
		shouldSendCAPTCHA(){
			this.cover=true;
			this.group[1].captcha = `发送中...`;
			this.$set(this.request_task_group[1],'data',{phone:this.form_data.phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 验证手机号注册状态(接收)
		// @params row 输入框显示行数
		// @params cur 当前按钮显示索引
		ifPhoneIsRegist(row,cur){
			this.switchRegisterInput(row,cur);
			this.shouldSendCAPTCHA()
		},
		// 验证手机号注册状态(接收)
		ifCAPTCHAReady(){
			com.sendCAPTCHA.apply(this,[this.timer,this.group[1],'captcha',this.timer_countdown,()=>{this.group[0].readonly=true;}])
		},
		// 验证码发送失败(接收)
		fetchCAPTCHAFailed(args,res){
			this.group[1].captcha = `发送验证码`;
			console.log('验证码失败了',args,res)
		},
		// 手机号码验证失败(接收)
		phoneIdentificationFailed(args,res){
			console.log('手机验证失败了',args,res)
		},
		// 注册失败(接收)
		registFailed(args,res){
			console.log('注册失败了',args,res)
		},
		//注册成功(接收)
		registSuccess(res){
			console.log('注册成功了',res)
			plus.nativeUI.toast('注册成功,已为你自动登录');
			com.backToTabbarPage(4,res,'login')
		},
		// 开始注册(发起)
		registAndLogin(){
			console.log(this.form_data)
			let data = {
				phone:this.form_data.phone,		
				pwd1:this.form_data.password,		
				pwd2:this.form_data.confirm_password,		
				code:this.form_data.CAPTCHA	
			}
			this.cover=true;
			this.$set(this.request_task_group[2],'data',data)
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		}
	}
}