import com from '@/static/js/common.js'
export const fans_data = {
	data(){
		return{
			// 是否有推荐人
			has_referrer:true,
			// 请求处理集合
			request_handler_group:{
				myFans:[
					{
						success:true,
						handle:()=>this.getFansSuccess
					},
					{
						success:false,
						handle:()=>this.getFansFailed
					},
					{
						complete:true,
						handle:()=>this.getFansFinished
					}
					
				],
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'获取粉丝及导师',
					url:'http://www.jufu-unique.com/app.php?c=User&a=getTeamMsg_new',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
				},
				{
					task:null,
					func:'获取团队收益',
					url:'http://www.jufu-unique.com/app.php/User/getTeamList_new',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{}
				},
			]
		}
	},
	onReady(){
		this.getMyFans()
	},
	methods:{
		// 开始获取粉丝(发起)
		async getMyFans(){
			let token = uni.getStorageSync('token');
			
			if(!token)return;
			if(!this.refreshing)this.cover=true;
			this.$set(this.request_task_group[0],'data',{token:token.val})
			this.$set(this.request_task_group[1],'data',{token:token.val,type:'t1'})
			let result = await com.createIntegrationTask(this.request_task_group,[0,0],this,this.request_handler_group.myFans);
		},
		// 获取粉丝成功(接收)
		getFansSuccess(res){
			console.log('成功',res)
			this.renderRecommandationList(res)
			com.refreshOver(this.refreshing,true,()=>{this.refreshing=false;})
		},
		// 获取粉丝失败(接收
		getFansFailed(res){
			console.log('失败',res)
			com.refreshOver(this.refreshing,false,()=>{this.refreshing=false;})
		},
		// 获取粉丝完成(接收)
		getFansFinished(){
			console.log('完成')
			this.cover=false;
		},
		// 渲染数据
		renderRecommandationList(data){
			let fans_summary = data[0].res;
			let fans_list = data[1].res;
			
			
			let fans = {
				total_fans:fans_summary.fans_num,
				daily_increase:fans_summary.fans_num_today,
				newly_increase:fans_summary.fans_num_yesterday,
				first_fans:fans_summary.team1_num,
				secondary_fans:fans_summary.team2_num
			}
			this.fans = fans;
			
			if(fans_summary.is_referrer=='Y'){
				this.has_referrer=true;
					
				let referrer = {
					avatar:fans_summary.referrer_avatar,
					name:fans_summary.referrer_nickname,
					code:fans_summary.referrer_phone
				}
				this.teacher = referrer;
			}
			else{
				this.has_referrer=false;
			}
			
			let users_group = [];
			fans_list.teamlist1.forEach(item=>{
				let obj = {
					avatar:item.avatar,
					name:item.name,
					recommand:item.referrer_num,
					total_order:item.order_num,
					code:item.phone,
					last_month:item.amount_last_finish,
					this_month:item.amount_current,
					vip:item.group_id,
					today_prediction:item.amount_today
				}
				users_group.push(obj)
			})
			
			this.users_group = users_group;
		}
	}
}