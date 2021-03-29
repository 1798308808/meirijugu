import com from '@/static/js/common.js'
export const rights_data ={
	data(){
		return{
			group:[],
			// 请求处理集合
			request_handler_group:{
				getResult:[
					{
						code:0,
						handle:()=>this.getResultSuccess
					},
					{
						code:-1,
						handle:()=>this.getResultFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'搜索权益',
					url:'http://www.jufu-unique.com/app.php/diy/search',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getResult,res,'short','bottom')
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
		// 获取结果(发起)
		getResult(){
			this.cover=true;
			this.$set(this.request_task_group[0],'data',{keyword:this.val})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取结果成功(发起)
		getResultSuccess(res){
			console.log('获取结果成功',res)
			this.renderResult(res.data.data)
		},
		// 获取结果失败(发起)
		getResultFailed(res){
			console.log('获取结果失败',res)
		},
		// 渲染结果(渲染)
		renderResult(list){
			this.group = list.map(item=>{item.icon = 'http://www.jufu-unique.com/'+item.icon;return item});
		}
	}
}