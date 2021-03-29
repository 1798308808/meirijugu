export const bsa_data ={
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				// ifPhoneOccupy:[
				// 	{
				// 		code:109,
				// 		handle:()=>this.ifPhoneIsRegist
				// 	},
				// 	{
				// 		code:-1,
				// 		handle:()=>this.phoneIdentificationFailed
				// 	}
					
				// ]
			},
			// 请求集合
			request_task_group:[
				// {
				// 	task:null,
				// 	func:'淘宝授权',
				// 	url:'http://www.jufu-unique.com/app.php/MobSms/mobPhoneLogin',
				// 	method:'POST',
				// 	header:{'Content-Type': 'application/x-www-form-urlencoded'},
				// 	data:{},
				// 	success:(res)=>{
				// 		com.requestResponse(this,[4,1],this.request_handler_group.ifPhoneOccupy,res,'short','top')
				// 	},
				// 	fail:(err)=>{
				// 		console.log(err)
				// 	},
				// 	complete:()=>{
				// 		this.cover = false
				// 	}
				// }
			]
		}
	},
	methods:{
		
	}
}