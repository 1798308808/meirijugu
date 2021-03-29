import com from '@/static/js/common.js'
export const cpn_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				changePhone:[
					{
						code:0,
						handle:()=>this.changePhoneSuccess
					},
					{
						code:-1,
						handle:()=>this.changePhoneFailed
					}
					
				],
				sendOriCode:[
					{
						code:0,
						handle:()=>this.sendOriCodeSuccess
					},
					{
						code:-1,
						handle:()=>this.sendOriCodeFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'修改绑定手机号',
					url:'http://www.jufu-unique.com/app.php/User/changeBandingMobPhone',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.changePhone,res,'short','bottom')
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
					func:'发送手机号验证码',
					url:'http://www.jufu-unique.com/app.php/SmsAliyun/Send',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.arg,this.request_handler_group.sendOriCode,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				}
			],
			// 当前发送短信按钮id
			arg:[]
		}
	},
	methods:{
		// 修改绑定手机号(发起)
		changePhone(){
			let arr = this.group.map(item=>item.val)
			let ok = arr.every(item=>!!item)
			if(ok){
				let token = uni.getStorageSync('token');
				this.$set(this.request_task_group[0],'data',{
					token:token.val,
					old_phone:this.$store.state.user.user_msg.phone,
					old_code:this.group[0].val,
					phone:this.group[1].val,
					code:this.group[2].val
				})
				this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
			}
			else{
				plus.nativeUI.toast('请完善信息')
			}
		},
		// 修改绑定手机号成功(发起)
		changePhoneSuccess(res){
			plus.nativeUI.toast('换绑成功,需要您重新登陆')
			com.backToTabbarPage(4,null,'logout')
			this.$store.commit('user/clearUserInfo',{args:['user_msg','user_detail']})
			console.log('修改绑定手机号成功',res)
		},
		// 修改绑定手机号失败(发起)
		changePhoneFailed(res){
			console.log('修改绑定手机号失败',res)
		},
		// 发送验证码(发起)
		sendOriCode(phone){
			phone = phone|| this.$store.state.user.user_msg.phone;
			this.$set(this.request_task_group[1],'data',{phone})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 发送验证码成功(接收)
		sendOriCodeSuccess(id,res){
			this.$refs[id][0].startCountdown()
			console.log('发送验证码成功',res)
		},
		// 发送验证码失败(接收)
		sendOriCodeFailed(res){
			console.log('发送验证码失败',res)
		},
	}
}