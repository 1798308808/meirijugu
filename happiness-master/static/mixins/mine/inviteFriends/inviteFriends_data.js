import com from '@/static/js/common.js'
export const invite_data = {
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				getBanner:[
					{
						code:0,
						handle:()=>this.getBannerSuccess
					},
					{
						code:-1,
						handle:()=>this.getBannerFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取邀请海报',
					url:'http://www.jufu-unique.com/app.php/Banner/getBannerList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{cat_id:4},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.getBanner,res,'short','bottom')
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
		// 获取海报(发起)
		getBanner(){
			this.cover=true;
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取海报成功(接收)
		getBannerSuccess(res){
			console.log('获取海报成功',res)
			this.renderBanner(res.data.data.list)
		},
		// 获取海报失败(接收)
		getBannerFailed(res){
			console.log('获取海报失败',res)
		},
		// 渲染邀请海报
		renderBanner(data){
			let group = []
			data.forEach(item=>{
				let obj  ={
					src:'http://www.jufu-unique.com/'+item.img
				}
				group.push(obj)
			})
			this.group = group
		}
	},
	onLoad(){
		this.getBanner()
	}
}