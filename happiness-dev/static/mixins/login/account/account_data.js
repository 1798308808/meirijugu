import com from '@/static/js/common.js'
export const account_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				login:[
					{
						code:0,
						handle:()=>this.loginSuccessful
					},
					{
						code:-1,
						handle:()=>this.loginFailed
					}
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'登录',
					url:'http://www.jufu-unique.com/app.php/UserAccount/login',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.login,res,'short','top',[])
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
		// 登录(发起)
		login(){
			this.cover =true;
			this.$set(this.request_task_group[0],'data',{account:this.form_data.account,pwd:this.form_data.password})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 登录失败(接收)
		loginFailed(ar1,ar2){
			console.log('失败',ar1,ar2)
		},
		// 登录成功(接收)
		loginSuccessful(res){
			console.log('成功',res)
			// plus.nativeUI.toast('登录成功');
			// com.backToTabbarPage(4,res,'login')
			com.pageNavigation('/pages/login/loginsu/loginsu',3,{res})
		}
	}
}