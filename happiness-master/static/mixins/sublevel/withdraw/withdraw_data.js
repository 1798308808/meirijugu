import com from '@/static/js/common.js'
export const withdraw_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				fetchUserAccountRemaining:[
					{
						code:0,
						handle:()=>this.fetchUserAccountRemainingSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchUserAccountRemainingFailed
					}
					
				],
				getMyMoney:[
					{
						code:0,
						handle:()=>this.getMyMoneySuccess
					},
					{
						code:-1,
						handle:()=>this.getMyMoneyFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取用户可提现余额',
					url:'http://www.jufu-unique.com/app.php/UserBalanceRecord/drawStatistics',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchUserAccountRemaining,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
					}
				},
				{
					task:null,
					func:'提现',
					url:'http://www.jufu-unique.com/app.php/UserDrawApply/draw',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getMyMoney,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover=false
					}
				},
			]
		}
	},
	methods:{
		// 获取用户余额(发起)
		fetchUserAccountRemaining(){
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[0],'data',{token})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取用户余额成功(接收)
		fetchUserAccountRemainingSuccess(res){
			console.log('获取用户余额成功',res)
			this.renderUserRemaining(res.data.data)
		},
		// 获取用户余额失败(接收)
		fetchUserAccountRemainingFailed(res){
			console.log('获取用户余额失败',res)
		},
		// 提现(发起)
		getMyMoney(account,truename,money){
			this.cover=true
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[1],'data',{token,account_type:1,account,truename,money})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 提现成功(接收)
		getMyMoneySuccess(res){
			console.log('提现成功',res)
			this.wuhuIGetMyMoney()
		},
		// 提现失败(接收)
		getMyMoneyFailed(res){
			console.log('提现失败',res)
		},
		// 渲染用户余额(渲染)
		renderUserRemaining(data){
			this.$set(this.group[2],'info',`可提现金额：￥${data.amount}元`)
		},
		// 提现成功
		wuhuIGetMyMoney(){
			plus.nativeUI.toast('提现提交审核成功',{duration:'short'})
			setTimeout(()=>{
				com.backToTabbarPage(4,'','')
			},800)
		}
	},
	onLoad(){
		this.fetchUserAccountRemaining()
	}
}