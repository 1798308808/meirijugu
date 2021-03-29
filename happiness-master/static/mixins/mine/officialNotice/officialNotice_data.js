import com from '@/static/js/common.js'
export const official_data ={
	data(){
		return{
			// 请求处理集合
			request_handler_group:{
				fetchOfficialMessage:[
					{
						code:0,
						handle:()=>this.fetchOfficialMessageSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchOfficialMessageFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取官方公告',
					url:'http://www.jufu-unique.com/app.php/Article/getArticleList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchOfficialMessage,res,'short','bottom')
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
		// 获取官方公告(发起)
		fetchOfficialMessage(p){
			p = p|| 1;
			this.$set(this.request_task_group[0],'data',{p,cat_id:4})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取官方公告成功(接收)
		fetchOfficialMessageSuccess(res){
			console.log('获取官方公告成功',res)
			this.renderMessageList(res.data.data.list,this.current_page+1)
		},
		// 获取官方公告失败(接收)
		fetchOfficialMessageFailed(res){
			console.log('获取官方公告失败',res)
		},
		// 渲染消息列表(渲染)
		renderMessageList(list,page){
			if(list.length==0){
				this.nomore=true;
				return;
			}
			let group = []
			list.forEach(item=>{
				let obj = {
					id:item.article_id,
					time:item.pubtime,
					desc:item.description,
					readed:item.clicknum,
					img:item.bigimg,
					title:item.title
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
		this.fetchOfficialMessage()
	}
}