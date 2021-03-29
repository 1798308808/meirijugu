import com from '@/static/js/common.js'
export const ads_data = {
	data() {
		return {
			// 用户地址合集
			group: [
				// {
				// 	name:'IDFSO',
				// 	phone:'13534568494',
				// 	de:true,
				// 	address:'广东省深圳市宝安区宝安区宝安西乡街道'
				// }
			],
			// 请求处理集合
			request_handler_group: {
				fetchUserAddressList: [{
						code: 0,
						handle: () => this.fetchUserAddressListSuccess
					},
					{
						code: -1,
						handle: () => this.fetchUserAddressListFailed
					}

				]
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取用户地址列表',
				url: 'http://www.jufu-unique.com/app.php/ConsigneeAddress/getAddressList',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [], this.request_handler_group.fetchUserAddressList, res, 'short', 'bottom')
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
		// 获取用户地址(发起)
		fetchUserAddressList() {
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0], 'data', {
				token: token.val
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 获取用户地址成功(发起)
		fetchUserAddressListSuccess(res) {
			console.log("获取用户地址成功", res)
			this.renderAddressList(res.data.data.list)
		},
		// 获取用户地址失败(发起)
		fetchUserAddressListFailed(res) {
			console.log("获取用户地址失败", res)
		},
		// 渲染地址列表(渲染)
		renderAddressList(list) {
			let group =[]
			list.forEach(item => {
				let obj = {
					id:item.id,
					name: item.consignee,
					phone: item.contact_number,
					de: item.is_default=='Y'?true:false,
					address: item.province + item.city  + item.county + item.detail_address
				}
				group.push(obj)
			})
			
			this.group = group
		}
	},
	onShow() {
		this.fetchUserAddressList()
	}
}
