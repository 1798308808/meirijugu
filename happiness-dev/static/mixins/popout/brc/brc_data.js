import com from '@/static/js/common.js'
export const brc_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				bind:[
					{
						code:0,
						handle:()=>this.bindSuccess
					},
					{
						code:-1,
						handle:()=>this.bindFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'绑定上级推荐人',
					url:'http://www.jufu-unique.com/app.php/User/bingAuthCode',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.bind,res,'short','bottom')
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
		// 绑定(发起)
		bind(val){
			let obj ={}
			let token = uni.getStorageSync('token');
			if(token){
				// 判断是邀请码还是手机号
				if(val.match(/^1(3|4|5|6|7|8|9)\d{9}$/)){
					obj = {
						token:token.val,
						referrer_phone:val
					}
				}
				else{
					obj = {
						token:token.val,
						auth_code:val
					}
				}
				this.cover=true;
				this.$set(this.request_task_group[0],'data',obj)
				this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
			}
			else{
				plus.nativeUI.toast('您还未登录');
				this.$refs.box.close()
			}
		},
		// 绑定成功(接收)
		bindSuccess(res){
			console.log('绑定成功',res)
			this.$refs.box.close()
			plus.nativeUI.toast(res.data.msg,{verticalAlign:'center'});
			this.$store.commit('user/changeUserInfo',{name:'user_msg',val:{referrer_phone:this.val}})
		},
		// 绑定失败(接收)
		bindFailed(res){
			console.log('绑定失败',res)
		}
	}
}