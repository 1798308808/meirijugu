import com from '@/static/js/common.js'
export const unload = {
	data(){
		return{
			
		}
	},
	onUnload(){
		console.log('页面卸载')
		// 终止所有请求
		let task_group =this.request_task_group.map(item=>item=item.task)
		com.abortAllRequestTask(task_group)
	}
}