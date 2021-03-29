import com from '@/static/js/common.js'
export const address_data ={
	data(){
		return {
			// 请求处理集合
			request_handler_group:{
				fetchUserAddress:[
					{
						code:0,
						handle:()=>this.fetchUserAddressSuccess
					},
					{
						code:-1,
						handle:()=>this.fetchUserAddressFailed
					}
					
				],
				addAddress:[
					{
						code:0,
						handle:()=>this.addAddressSuccess
					},
					{
						code:-1,
						handle:()=>this.addAddressFailed
					}
					
				],
				delAddress:[
					{
						code:0,
						handle:()=>this.delAddressSuccess
					},
					{
						code:-1,
						handle:()=>this.delAddressFailed
					}
					
				],
				editAddress:[
					{
						code:0,
						handle:()=>this.editAddressSuccess
					},
					{
						code:-1,
						handle:()=>this.editAddressFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取单条地址信息',
					url:'http://www.jufu-unique.com/app.php/ConsigneeAddress/getAddressMsg',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.fetchUserAddress,res,'short','bottom')
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
					func:'新增地址',
					url:'http://www.jufu-unique.com/app.php/ConsigneeAddress/addAddress',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.addAddress,res,'short','bottom')
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
					func:'删除地址',
					url:'http://www.jufu-unique.com/app.php/ConsigneeAddress/delAddress',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.delAddress,res,'short','bottom')
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
					func:'编辑地址',
					url:'http://www.jufu-unique.com/app.php/ConsigneeAddress/editAddress',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.editAddress,res,'short','bottom')
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
	methods:{
		// 删除地址(发起)
		deleteAddress(){
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[2], 'data', {
				token:token.val,
				address_id:this.address_id
			})
			this.$set(this.request_task_group[2],'task',com.createRequestTask(this.request_task_group[2]))
		},
		// 添加地址(发起)
		addAddress(){
			console.log('地址数据',this.group)
			if(
			this.group[0].val &&
			this.group[1].val &&
			this.group[2].val &&
			this.group[2].val!='请选择区域'&&
			this.group[3].val
			){
				this.cover = true;
				let token = uni.getStorageSync('token');
				let obj = {
					token:token.val,
					consignee:this.group[0].val,
					contact_number:this.group[1].val,
					province:this.group[2].val.split('-')[0],
					city:this.group[2].val.split('-')[1],
					county:this.group[2].val.split('-')[2],
					detail_address:this.group[3].val,
					is_default:this.group[4].active?'Y':'N',
				}
				if(this.edit){
					this.$set(this.request_task_group[3], 'data',Object.assign(obj,{address_id:this.address_id}))
					this.$set(this.request_task_group[3],'task',com.createRequestTask(this.request_task_group[3]))
				}
				else{
					console.log('走了这')
					this.$set(this.request_task_group[1], 'data', obj)
					this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
				}
			}
			else{
				plus.nativeUI.toast('请完善信息')
			}
			
		},
		// 获取用户地址(发起)
		fetchUserAddress(id){
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0], 'data', {
				address_id:id
			})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 获取用户地址成功(接收)
		fetchUserAddressSuccess(res){
			console.log("获取地址成功",res)
			this.renderUserAddress(res.data.data.addressMsg)
		},
		// 获取用户地址失败(接收)
		fetchUserAddressFailed(res){
			console.log("获取地址失败",res)
		},
		// 添加地址成功(接收)
		addAddressSuccess(res){
			console.log("添加地址成功",res)
			uni.navigateBack();
		},
		// 添加地址失败(接收)
		addAddressFailed(res){
			console.log("添加地址失败",res)
		},
		//删除地址成功 (接收)
		delAddressSuccess(res){
			console.log('删除地址成功',res)
			uni.navigateBack();
		},
		//删除地址失败 (接收)
		delAddressFailed(res){
			console.log('删除地址失败',res)
		},
		//编辑地址成功 (接收)
		editAddressSuccess(res){
			console.log('编辑地址成功',res)
			uni.navigateBack();
		},
		//编辑地址失败 (接收)
		editAddressFailed(res){
			console.log('编辑地址失败',res)
		},
		// 渲染单条地址(渲染)
		renderUserAddress(data){
			this.address_id = data.id
			this.$set(this.group[0],'val',data.consignee)
			this.$set(this.group[1],'val',data.contact_number)
			this.$set(this.group[2],'val',data.province+'-'+data.city+'-'+data.county)
			this.$set(this.group[3],'val',data.detail_address)
			this.$set(this.group[4],'active',data.is_default=='Y'?true:false)
		}
	}
}