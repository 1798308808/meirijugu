import com from "@/static/js/common.js"
export const service_data = {
	data() {
		return {
			// 客服微信
			weixin_account: null,
			// 请求处理集合
			request_handler_group: {
				getPersonalService: [{
						code: 0,
						handle: () => this.getPersonalServiceSuccess
					},
					{
						code: -1,
						handle: () => this.getPersonalServiceFailed
					}

				]
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取专属客服',
				url: 'http://www.jufu-unique.com/app.php/User/getService',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [], this.request_handler_group.getPersonalService, res, 'short', 'top')
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
	methods: {
		// 获取专属客服(发起)
		getPersonalService() {
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0], 'data', {
				token: token.val
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 获取专属客服成功(接收)
		getPersonalServiceSuccess(res) {
			console.log('获取专属客服成功', res)
			this.weixin_account = res.data.data.weixin
		},
		// 获取专属客服失败(接收)
		getPersonalServiceFailed(res) {
			console.log('获取专属客服失败', res)
		}
	},
	onLoad() {
		this.getPersonalService()
	}
}
