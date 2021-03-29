import com from '@/static/js/common.js'
export const msg_data ={
	data() {
		return {
			group:[
				// {
				// 	title:'官方公告',
				// 	desc:'暂无消息',
				// 	count:0,
				// 	time:'23:20',
				// 	src:'/static/m1.png'
				// }
			],
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
				readAllMessage:[
					{
						code:0,
						handle:()=>this.readAllMessageSuccess
					},
					{
						code:-1,
						handle:()=>this.readAllMessageFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取消息主页',
					url:'http://www.jufu-unique.com/app.php?c=MessagePush&a=messagePushIndex',
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
					func:'已读全部信息',
					url:'http://www.jufu-unique.com/app.php?c=MessagePush&a=readAllMessage',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.readAllMessage,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.cover = false
					}
				},
			]
		}
	},
	methods: {
		// 获取消息首页列表(发起)
		fetchMessageList(){
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[0],'data',{token})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取消息首页列表成功(接收)
		fetchMessageListSuccess(res){
			console.log('获取消息首页列表成功',res)
			this.renderMessageList(res.data.data)
		},
		// 获取消息首页列表失败(接收)
		fetchMessageListFailed(res){
			console.log('获取消息首页列表失败',res)
		},
		// 已读全部消息(发起)
		readAllMessage(){
			let token = uni.getStorageSync('token').val
			this.$set(this.request_task_group[1],'data',{token})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 已读全部消息成功(接收)
		readAllMessageSuccess(res){
			console.log('已读全部消息成功',res)
			plus.nativeUI.toast('所有消息已读')
			this.group = this.group.map(item=>{item.count=0;return item})
		},
		// 已读全部消息失败(接收)
		readAllMessageFailed(res){
			console.log('已读全部消息失败',res)
		},
		// 渲染消息列表(渲染)
		renderMessageList(list){
			let name = ['官方公告','好物推荐','粉丝记录','提现/佣金','订单']
			let icon = ['/static/m1.png','/static/m3.png','/static/m5.png','/static/m2.png','/static/m4.png']
			let group =[]
			list.forEach(item=>{
				let obj = {
					title:name[Number(item.type)],
					desc:item.title,
					count:item.number,
					time:item.create_time,
					src:icon[Number(item.type)],
					type:item.type
				}
				group.push(obj)
			})
			this.group = group;
		}
	},
	onLoad(){
		this.fetchMessageList()
	}
}