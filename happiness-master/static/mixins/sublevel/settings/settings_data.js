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
					
				],
				fetchApplicationUpdateInfo: [
					{
						code: 0,
						handle: () => this.needUpdate
					},
					{
						code: 1,
						handle: () => this.alreadyTheLastest
					},
					{
						code: -1,
						handle: () => this.fetchApplicationUpdateInfoFailed
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
				},
				{
					task: null,
					func: '检测应用是否要更新',
					url: 'http://jufu-unique.com/app.php/Article/version',
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {},
					success: (res) => {
						com.requestResponse(this, this.isAutoPopOut, this.request_handler_group.fetchApplicationUpdateInfo, res, 'short', 'top')
					},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {
						this.loading=false
					}
				}
			]
		}
	},
	methods:{
		//获取应用更新信息 (发起)
		fetchApplicationUpdateInfo() {
			this.$set(this.request_task_group[1], 'data', {
				version: plus.runtime.version,
				platform: this.$store.state.common.platform
			})
			this.$set(this.request_task_group[1], 'task', com.createRequestTask(this.request_task_group[1]))
		},
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
		//需要更新(接收)
		needUpdate(auto,res) {
			this.$set(this.settings_group2[3],'light',true)
		},
		//不需要更新(接收)
		alreadyTheLastest(res) {
			this.$set(this.settings_group2[3],'light',false)
		},
		//获取应用更新信息失败(接收)
		fetchApplicationUpdateInfoFailed(res) {
			console.log('获取应用更新信息失败', res)
		},
	}
}