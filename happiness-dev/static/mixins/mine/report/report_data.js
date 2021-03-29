import com from '@/static/js/common.js'
export const report_data ={
	data(){
		return{
			// 反馈内容
			main_content:'',
			// 手机
			phone:'',
			// 名字
			name:'',
			// 请求处理集合
			request_handler_group: {
				submitReport: [{
						code: 0,
						handle: () => this.submitReportSuccess
					},
					{
						code: -1,
						handle: () => this.submitReportFailed
					}
			
				]
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取专属客服',
				url: 'http://www.jufu-unique.com/app.php/Message/online',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [], this.request_handler_group.submitReport, res, 'short', 'bottom')
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
					this.cover = false
				}
			}]
		}
	},
	methods:{
		// 提交反馈表单(发起)
		submitReport(){
			this.cover=true;
			console.log(this.main_content,this.phone,this.name)
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0], 'data', {
				token: token.val,
				cat_id:1,
				content:this.main_content,
				phone:this.phone,
				linkman:this.name
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 提交反馈表单成功(接收)
		submitReportSuccess(res){
			this.name ='';
			this.main_content=''
			this.phone=''
			plus.nativeUI.toast('反馈成功 (๑> ₃ <)');
			console.log('提交反馈表单成功',res)
		},
		// 提交反馈表单失败(接收)
		submitReportFailed(res){
			console.log('提交反馈表单失败',res)
		}
	}
}