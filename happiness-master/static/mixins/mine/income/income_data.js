import com from '@/static/js/common.js'
export const income_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				income:[
					{
						code:0,
						handle:()=>this.getIncomeSuccess
					},
					{
						code:-1,
						handle:()=>this.getIncomeFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取收益',
					url:'http://www.jufu-unique.com/app.php/UserBalanceRecord/statistics',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.income,res,'long','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				}
			],
			// 用户顶部收益
			income_detail:{
				total:'0.00',
				remain:0.00,
				last_month:0.00,
				current_month:'0.00'
			},
			// 用户具体日期收益
			income_group:[
				{
					num:0,
					amount1:0,
					amount2:0
				},
				{
					num:0,
					amount1:0,
					amount2:0
				},
				{
					num:0,
					amount1:0,
					amount2:0
				},
				{
					num:0,
					amount1:0,
					amount2:0
				}
			],
			// 周统计数据
			weekly_data:{},
			// 月统计数据
			monthly_data:{},
			// 当前展示数据
			current_display_data:{}
		}
	},
	methods:{
		// 获取用户收益(发起)
		getUserIncomeDetail(){
			let token = uni.getStorageSync('token');
			if(!this.refreshing)this.cover=true;
			this.$set(this.request_task_group[0],'data',{token:token.val})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取用户收益成功(接收)
		getIncomeSuccess(res){
			console.log('获取用户收益成功',res)
			com.refreshOver(this.refreshing,true,()=>{this.refreshing=false;})
			this.renderIncomeData(res.data.data)
		},
		// 获取用户收益失败(接收)
		getIncomeFailed(res){
			console.log('获取用户收益失败')
			com.refreshOver(this.refreshing,false,()=>{this.refreshing=false;})
		},
		// 渲染收益数据
		renderIncomeData(data){
			this.weekly_data = data.sevenday.seven_list;
			this.monthly_data = data.lastmonth.lastmonth_list;
			this.income_detail.total = data.amount;
			this.income_detail.remain = data.balance;
			this.income_detail.last_month = data.amount_last_finish;
			this.income_detail.current_month = data.amount_current;
			
			this.income_group.splice(0,1,data.today)
			this.income_group.splice(1,1,data.yesterday)
			this.income_group.splice(2,1,data.sevenday)
			this.income_group.splice(3,1,data.lastmonth)
			
		}
	},
	onLoad(){
		this.getUserIncomeDetail()
	}
}