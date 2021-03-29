import com from '@/static/js/common.js'
export const reset_data = {
	data(){
		return{
			// 请求处理集合
			request_handler_group:{
				reset:[
					{
						code:0,
						handle:()=>this.resetSuccessful
					},
					{
						code:-1,
						handle:()=>this.resetFailed
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
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'重置密码',
					url:'http://www.jufu-unique.com/app.php/UserAccount/findPwdByPhone',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.reset,res,'short','top',[])
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
						com.requestResponse(this,[],this.request_handler_group.fetchCAPTCHA,res,'long','top',[])
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
		// 重置(发起)
		reset(){
			this.cover = true;
			this.$set(this.request_task_group[0],'data',{phone:this.form_data.phone,code:this.form_data.CAPTCHA,pwd:this.form_data.confirm_password})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 重置失败(接收)
		resetFailed(ar1,ar2){
			console.log('失败',ar1,ar2)
		},
		// 重置成功(接收)
		resetSuccessful(res){
			console.log('成功',res)
			plus.nativeUI.toast(res.data.msg);
			uni.redirectTo({url:'/pages/login/login/login'})
		},
		// 验证手机号注册状态(接收)
		ifCAPTCHAReady(){
			this.showRestForm()
			com.sendCAPTCHA.apply(this,[this.timer,this.group[1],'captcha',this.timer_countdown,()=>{this.group[0].readonly=true;}])
		},
		// 验证码发送失败(接收)
		fetchCAPTCHAFailed(args,res){
			this.group[1].captcha = `发送验证码`;
			console.log('自定义失败函数,验证码失败了',args,res)
		},
		// 判断注册验证码状态(发起)
		shouldSendCAPTCHA(){
			if(!this.form_status.phone){
				plus.nativeUI.toast('请先输入手机号',{duration:'short',verticalAlign:'top'});
				return;
			}
			this.cover = true;
			this.group[1].captcha = `发送中...`;
			this.$set(this.request_task_group[1],'data',{phone:this.form_data.phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
	}
}