import com from '@/static/js/common.js'
export const bind_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				bindUserAlipayAccount:[
					{
						code:0,
						handle:()=>this.bindUserAlipayAccountSuccess
					},
					{
						code:-1,
						handle:()=>this.bindUserAlipayAccountFailed
					}
					
				],
				sendAlipayCode:[
					{
						code:0,
						handle:()=>this.sendAlipayCodeSuccess
					},
					{
						code:-1,
						handle:()=>this.sendAlipayCodeFailed
					}
					
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'用户绑定支付宝',
					url:'http://www.jufu-unique.com/app.php/UserDrawApply/changeAlipay',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.bindUserAlipayAccount,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false
					}
				},
				{
					task:null,
					func:'发送绑定支付宝验证码',
					url:'http://www.jufu-unique.com/app.php/SmsAliyun/Send',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.sendAlipayCode,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				},
			]
		}
	},
	methods:{
		
		// 绑定用户支付宝账号(发起)
		bindUserAlipayAccount(alipay_account,truename,code){
			this.cover=true;
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[0],'data',{token,alipay_account,truename,code})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 绑定用户支付宝账号成功(接收)
		bindUserAlipayAccountSuccess(res){
			console.log('绑定用户支付宝账号成功',res)
			this.afterBindSuccessAction()
		},
		// 绑定用户支付宝账号失败(接收)
		bindUserAlipayAccountFailed(res){
			console.log('绑定用户支付宝账号失败',res)
		},
		// 发送绑定验证码(发起)
		sendAlipayCode(){
			let phone = this.$store.state.user.user_msg.phone
			this.$set(this.request_task_group[1],'data',{phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 发送绑定验证码成功(接收)
		sendAlipayCodeSuccess(res){
			this.$refs['s1'][0].startCountdown()
			console.log('发送绑定验证码成功',res)
		},
		// 发送绑定验证码失败(接收)
		sendAlipayCodeFailed(res){
			console.log('发送绑定验证码失败',res)
		},
		// 绑定成功后
		afterBindSuccessAction(){
			this.$store.commit('user/changeUserInfo',{name:'user_msg',val:{alipay_account:this.group[2].val}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{truename:this.group[1].val}})
			plus.nativeUI.toast('绑定支付宝账号成功',{duration:'short'})
			setTimeout(()=>{
				com.backToTabbarPage(4,'','')
			},800)
			
		}
	}
}