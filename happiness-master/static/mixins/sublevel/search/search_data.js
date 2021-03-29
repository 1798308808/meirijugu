import com from '@/static/js/common.js'
export const search_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				fetchHotPort:[
					{
						code:0,
						handle:()=>this.fetchHotPortSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchHotPortFailed
					}
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取热门搜索',
					url:'http://www.jufu-unique.com/app.php/Tbk/getHotSearch',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchHotPort,res,'short','bottom')
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
		// 获取热门搜索词(发起)
		fetchHotPort(){
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取热门搜索词成功(接收)
		fetchHotPortSuccess(res){
			console.log('获取热门搜索词成功',res)
			this.renderHotPort(res.data.data.list)
		},
		// 获取热门搜索词失败(接收)
		fetchHotPortFailed(res){
			console.log('获取热门搜索词失败',res)
		},
		renderHotPort(list){
			this.$set(this.group[0],'options',list.map(item=>item.search))
		}
	},
	onLoad(){
		this.fetchHotPort()
	}
}