import htmlParser from '@/static/js/html-parser'
export const vip_data = {
	data(){
		return {
			name:'',
			greetings:'尊敬的用户，您好~',
			avatar:'',
			// 当前用户所在会员组
			current_vip_group:0,
			// 当前会员组权益
			current_rights:0,
			// 关于我们
			about_us:'<h3>每日聚福</h3><h5>我們是每日聚福app</h5>',
			bounce_group:[
				// {
				// 	thumb:'',
				// 	name:"周度铂金超级超级会员等级制度会员等级制度了",
				// 	price:'99.90'
				// },
				// {
				// 	thumb:'',
				// 	name:"月度铂金超级超级会员等级制度会员等级制度了",
				// 	price:'198.90'
				// },
				// {
				// 	thumb:'',
				// 	name:"年度铂金超级超级会员等级制度会员等级制度了",
				// 	price:'299.90'
				// },
				// {
				// 	thumb:'',
				// 	name:"永久铂金超级超级会员等级制度会员等级制度了",
				// 	price:'999.90'
				// }
			],
			// 任务列表
			mission_group:[
				// {
				// 	src:'/static/text.png',
				// 	title:'完善个人经验',
				// 	num:'+30经验',
				// 	btn:'去完善'
				// },
				// {
				// 	src:'/static/text.png',
				// 	title:'完善个人经验',
				// 	num:'+20经验',
				// 	btn:'去完善'
				// },
				// {
				// 	src:'/static/text.png',
				// 	title:'完善个人经验',
				// 	num:'+10经验',
				// 	btn:'去完善'
				// }
			],
		}
	},
	onReady(){
		this.about_us = htmlParser(this.about_us)
		this.getUserInfoAndVipInfo()
	},
	methods:{
		// 获取个人和会员信息
		getUserInfoAndVipInfo(){
			let user = this.$store.state.user;
			let vip = this.$store.state.user.list;
			let team = this.$store.state.user.team_reward;
			
			this.name = !!user.user_detail.nickname?user.user_detail.nickname:user.user_msg.phone,
			this.avatar = user.user_detail.avatar;
			
			this.disposeVipRightsData(vip,team)
			this.disposeVipGroupData(vip,user.user_msg.group_id,user.user_msg.exp)
			
		},
		// 处理会员组增益
		// @params data(Object) 用户组数据
		// @params team(Object) 当前用户会员组
		disposeVipRightsData(data,team){
			data.forEach((item,index)=>{
				this.$set(this.rights_group[index][0],'main',`收益提升${item.fee_user}%`)
				this.$set(this.rights_group[index][1],'main',`收益提升${item.fee_user}%`)
				this.$set(this.rights_group[index][2],'main',`奖励提升${item.referrer_rate}%`)
				this.$set(this.rights_group[index][3],'main',`奖励提升${item.referrer_rate2}%`)
				if(index>1){
					this.$set(this.rights_group[index][4],'main',`分红权益${team.team_reward1}%`)
					this.$set(this.rights_group[index][5],'main',`分红权益${team.team_reward2}%`)
				}
				else{
					this.$set(this.rights_group[index][4],'main',`分红权益0%`)
					this.$set(this.rights_group[index][5],'main',`分红权益0%`)
				}
			})
		},
		// 处理用户会员信息
		// @params data(Object) 用户组数据
		// @params groupID(String) 会员组ID
		// @params exp(String) 用户当前经验值
		disposeVipGroupData(data,groupId,exp){
			let current = 999999;
			data.forEach((item,index)=>{
				if(item.id==groupId){
					this.current_vip_group = index;
					this.current_rights = index
					current = index;
					// 有个typeError：toString of null不用管
					this.$set(this.group[index],'current',true)
					this.$set(this.group[index],'total_exp',!!data[index+1]?data[index+1].exp:'max')
					this.$set(this.group[index],'current_exp',exp)
					
					// 至尊会员无上限
					if(groupId==4){
						this.$set(this.group[index],'total_exp','max')
					}
				}
				else{
					this.$set(this.group[index],'finish',true)
					if(index>current){
						this.$set(this.group[index],'finish',false)
						this.$set(this.group[index],'current',false)
						this.$set(this.group[index],'total_exp',item.exp)
						this.$set(this.group[index],'current_exp',exp)
					}
				}
			})
		}
	}
}