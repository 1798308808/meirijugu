import com from '@/static/js/common.js'
export const myrebate_data = {
	data(){
		return {
			// lists:[],
			// 请求处理集合
			request_handler_group:{
				// createOrder:[
				// 	{
				// 		code:1,
				// 		handle:()=>this.createOrderSuccess
				// 	},

				// 	{
				// 		code:-1,
				// 		handle:()=>this.createOrderFailed
				// 	}
					
				// ]	
			},
			// 请求集合
			request_task_group:[
				// {
				// 	task:null,
				// 	func:'[开发中]获取文章子分类列表',
				// 	url:'http://www.jufu-unique.com/app.php/Haodanku/getFastBuyList',
				// 	method:'POST',
				// 	header:{'Content-Type': 'application/x-www-form-urlencoded'},
				// 	data:{},
				// 	success:(res)=>{
				// 		com.requestResponse(this,[],this.request_handler_group.createOrder,res,'short','bottom')
				// 	},
				// 	fail:(err)=>{
				// 		console.log(err)
				// 	}
				// }	
			]
		}
	},
	methods:{
		// 生成列表(发起)
		createOrder(){
			// this.$set(this.request_task_group[0],'data',{hour_type:7,min_id:2})
			// this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 生成列表成功(接收)
		createOrderSuccess(res){
			// console.log('获取列表成功',res.data.data)
			// this.lists=res.data.data;
		},
		// 生成列表失败(接收)
		createOrderFailed(res){
			// console.log('获取列表失败',res)
		},
	},
	
	created(){
		// this.createOrder()
	}
}