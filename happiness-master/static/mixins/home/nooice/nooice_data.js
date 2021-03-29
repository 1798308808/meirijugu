import com from '@/static/js/common.js'
export const nice_data = {
	data() {
		return {
			// 当前消息类型
			current_type:null,
			current_page:1,
			// 请求处理集合
			request_handler_group:{
				fetchMessageList:[
					{
						code:0,
						handle:()=>this.fetchMessageListSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchMessageListFailed
					}
					
				],
				readMessage:[
					{
						code:0,
						handle:()=>this.readMessageSuccess
					},
					{
						code:-1,
						handle:()=>this.readMessageFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取消息列表',
					url:'http://www.jufu-unique.com/app.php?c=MessagePush&a=messagePushList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchMessageList,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
				{
					task:null,
					func:'阅读消息',
					url:'http://www.jufu-unique.com/app.php?c=MessagePush&a=clickMessage',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.readMessage,res,'short','bottom')
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
	methods: {
		// 获取消息首页列表(发起)
		fetchMessageList(type,p){
			p = p||1
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[0],'data',{token,type,p})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取消息首页列表成功(接收)
		fetchMessageListSuccess(res){
			console.log('获取消息首页列表成功',res)
			this.renderMessageList(res.data.data.list,this.current_page+1)
		},
		// 获取消息首页列表失败(接收)
		fetchMessageListFailed(res){
			console.log('获取消息首页列表失败',res)
		},
		// 阅读消息(发起)
		readMessage(id){
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[1],'data',{token,id})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 阅读消息成功(接收)
		readMessageSuccess(res){
			console.log('阅读消息成功',res)
		},
		// 阅读消息失败(接收)
		readMessageFailed(res){
			console.log('阅读消息失败',res)
		},
		// 获取平台类型
		fetchMessageType(){
			let name  = ['','好物推荐','粉丝记录','提现/佣金','订单']
			let type =getCurrentPages()[getCurrentPages().length-1].$routeParams.type;
			this.current_type = Number(type);
			this.title = name[type]
			this.fetchMessageList(type)
		},
		renderMessageList(list,page){
			if(list.length==0){this.nomore=true;return}
			let group = []
			list.forEach(item=>{
				let obj ={
					msg_id:item.id,
					id:item.goods_id,
					thumb:item.img,
					noimg:!!item.img?false:true,
					title:item.title,
					desc:item.content,
					is_new:item.is_read=='Y'?false:true,
					time:item.create_time
				}
				group.push(obj)
			})
			if(this.current_page==1){
				this.group = group;
			}
			else{
				this.group.push(...group)
				this.loadmore=false;
				this.$refs.ss.resetLoad()
			}
			this.current_page = page
		}
	},
	onLoad(){
		this.fetchMessageType()
	}
}