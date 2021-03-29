import com from '@/static/js/common.js'
export const record_data = {
	data(){
		return {
			// 当前请求页数
			current_page:1,
			// 请求参数
			requestArgs:[false],
			// 请求处理集合
			request_handler_group:{
				getUserSignInRecord:[
					{
						code:0,
						handle:()=>this.getUserSignInRecordSuccess
					},
					{
						code:-1,
						handle:()=>this.getUserSignInRecordFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取用户签到状态',
					url:'http://www.jufu-unique.com/app.php/UserSign/getSignRecord',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.requestArgs,this.request_handler_group.getUserSignInRecord,res,'short','bottom')
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
		// 获得用户签到记录(发起)
		getUserSignInRecord(loadmore,page){
			let token = uni.getStorageSync('token');
			if(token){
				if(!loadmore)this.cover=true;
				
				this.$set(this.request_task_group[0],'data',{token:token.val,page:!!page?page:1})
				this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
			}
		},
		// 获得用户签到记录成功(接收)
		getUserSignInRecordSuccess(isLoadmore,res){
			console.log('获得用户签到记录成功',res)
			if(isLoadmore){
				this.renderNextPageData(res.data.data.list_new)
			}
			else{
				this.renderSignInList(res.data.data.list_new)
			}
		},
		// 获得用户签到记录失败(接收)
		getUserSignInRecordFailed(res){
			console.log('获得用户签到记录失败',res)
		},
		// 渲染记录(渲染)
		renderSignInList(list){
			let group = []
			for(let key in list){
				let obj ={
					month:key,
					children:[]
				}
				list[key].forEach(item=>{
					let obj2 = {
						icon:item.continuous_day!="7"?'/static/sign_coin.png':'/static/sign_gift.png',
						time:item.sign_time,
						title:`连续签到${item.continuous_day}天`,
						addition:`${item.sign_type} + ${item.point}`,
						current:`总${item.sign_type}: ${item.all_value}`
					}
					obj.children.push(obj2)
				})
				group.push(obj)
			}
			this.group = group;
		},
		// 渲染下页记录(渲染)
		renderNextPageData(list){
			let group = []
			for(let key in list){
				// 是否已经有该月记录
				let has = this.group.findIndex(item=>item.month==key);
				if(has!=-1){
					let children = []
					list[key].forEach(item=>{
						let obj = {
							icon:item.continuous_day!="7"?'/static/sign_coin.png':'/static/sign_gift.png',
							time:item.sign_time,
							title:`连续签到${item.continuous_day}天`,
							addition:`${item.sign_type} + ${item.point}`,
							current:`总${item.sign_type}: ${item.all_value}`
						}
						children.push(obj)
					})
					this.group[has].children.push(...children)
				}
				else{
					let obj ={
						month:key,
						children:[]
					}
					list[key].forEach(item=>{
						let obj2 = {
							icon:item.continuous_day!="7"?'/static/sign_coin.png':'/static/sign_gift.png',
							time:item.sign_time,
							title:`连续签到${item.continuous_day}天`,
							addition:`${item.sign_type} + ${item.point}`,
							current:`总${item.sign_type}: ${item.all_value}`
						}
						obj.children.push(obj2)
					})
					group.push(obj)
					this.group.push(...group)
				}
			}
			this.current_page++;
			this.loadmore=false;
			if(list.length<1)this.nomore=true;
		}
	},
	onReady(){
		this.getUserSignInRecord()
	}
}