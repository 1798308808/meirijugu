import com from '@/static/js/common.js'
export const ua_data = {
	data() {
		return {
			// 下载地址
			download_url:'',
			// 应用总大小
			application_size:0,
			// 展示用应用大小
			application_size_string:'',
			// 当前下载大小
			current_size:0,
			// 版本
			current_version:'',
			is_new_version:false,
			// 请求处理集合
			request_handler_group: {
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
			request_task_group: [{
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
			}],
			// 是否为自动弹出
			isAutoPopOut:[true]
		}
	},
	methods: {
		//获取应用更新信息 (发起)
		fetchApplicationUpdateInfo() {
			this.$set(this.request_task_group[0], 'data', {
				version: plus.runtime.version,
				platform: this.$store.state.common.platform
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		//需要更新(接收)
		needUpdate(auto,res) {
			console.log('需要更新', res,auto)
			this.ifNeedAutoPop(auto,res)
		},
		//不需要更新(接收)
		alreadyTheLastest(res) {
			console.log('不需要更新', res)
			this.info=['已经是最新版本']
			this.is_new_version=false;
			this.current_version = plus.runtime.version
			this.application_size =0
		},
		//获取应用更新信息失败(接收)
		fetchApplicationUpdateInfoFailed(res) {
			console.log('获取应用更新信息失败', res)
		},
		// 渲染更新数据
		renderUpdateInfo(res){
			let data= res.data.data
			this.info=data.update_content
			this.current_version =data.version
			this.application_size_string = data.app_size_mb +'MB'
			this.application_size = data.app_size_kb
			this.download_url =data.url
			this.is_new_version=true
		}
	}
}
