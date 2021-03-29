import com from '@/static/js/common.js'
export const cl_data={
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				fetchClassification:[
					{
						code:0,
						handle:()=>this.fetchClassificationSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchClassificationFailed
					}
					
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取分类信息列表',
					url:'http://www.jufu-unique.com/app.php/Diyclsss/getDiyList',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchClassification,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(err)
					},
					complete:()=>{
						this.pageLoading(false)
						this.showSkeleton=false;
					}
				}
			]
		}
	},
	methods:{
		// 获取列表成功(发起)
		fetchClassification(){
			this.pageLoading(true)
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取列表成功(接收)
		fetchClassificationSuccess(res){
			console.log('获取分类列表成功',res)
			this.renderClassificationList(res)
		},
		// 获取列表失败(接收)
		fetchClassificationFailed(res){
			console.log('获取分类列表失败',res)
		},
		// 渲染列表(渲染)
		renderClassificationList(res){
			let list = res.data.data.list;
			this.group = [];
			list.forEach((item,index)=>{
				let obj = {
					icon: 'http://www.jufu-unique.com/' + item.level_icon,
					title:item.title,
					appear:index==0?true:false,
					banner:[],
					group:!!item.list?item.list.map(item=>{item.icon = 'http://www.jufu-unique.com/'+item.icon;return item}):[]
				}
				if(obj.group.length>0)this.group.push(obj)
			})
		}
	},
	mounted(){
		this.fetchClassification()
	}
}