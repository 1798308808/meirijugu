import com from '@/static/js/common.js'
export const settings_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				logout:[
					{
						code:0,
						handle:()=>this.logoutSuccess
					},
					{
						code:-1,
						handle:()=>this.logoutFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'登出',
					url:'http://www.jufu-unique.com/app.php/User/loginout',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.logout,res,'long','bottom')
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
		// 登出(发起)
		requireLogout(){
			this.cover=true;
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0],'data',{token:token.val})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 登出成功(接收)
		logoutSuccess(){
			com.backToTabbarPage(4,null,'logout')
			this.$store.commit('user/clearUserInfo',{args:['user_msg','user_detail']})
		},
		// 登出失败(接收)
		logoutFailed(){
			this.cover=false;
		},
	}
}