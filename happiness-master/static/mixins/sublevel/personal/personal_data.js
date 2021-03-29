import com from '@/static/js/common.js'
export const personal_data = {
	data(){
		return{
			// 请求处理集合
			request_handler_group:{
				upload:[
					{
						code:0,
						handle:()=>this.changeAvatarSuccess
					},
					{
						code:-1,
						handle:()=>this.changeAvatarFalied
					}
					
				],
				user:[
					{
						code:0,
						handle:()=>this.updateUserInfoSuccess
					},
					{
						code:-1,
						handle:()=>this.updateUserInfoFalied
					}
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					url:'http://www.jufu-unique.com/app.php/User/editUserAvatar',
					name:'user_avatar',
					formData:{},
					filePath:'',
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.upload,res,'short','bottom')
					},
					fail:(err)=>{
						console.log(er)
					},
					complete:()=>{
						this.cover=false;
					}
				},
				{
					task:null,
					func:'修改个人信息',
					url:'http://www.jufu-unique.com/app.php/User/editUserMsg',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.user,res,'long','bottom',[])
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
		// 保存修改(发起)
		saveChange(){
			let [
				token,
				nickname,
				truename,
				sex,
				birthday,
				weixin,
				province,
				city,
				county,
				detail_address
			]
			=[
				uni.getStorageSync('token').val,
				this.group[0].val,
				this.group[1].val,
				this.group[2].options.findIndex(item=>item.active==true)+1,
				this.group[3].val,
				this.group[6].val,
				this.group[4].val.split('-')[0],
				this.group[4].val.split('-')[1],
				this.group[4].val.split('-')[2],
				this.group[5].val
			]
			console.log('用户token',token)
			this.cover=true;
			this.$set(this.request_task_group[1],'data',{token,nickname,truename,sex,birthday,weixin,province,city,county,detail_address})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
			
		},
		// 修改头像(发起)
		uploadAvatar(path){
			this.cover=true;
			let token = uni.getStorageSync('token');
			this.$set(this.request_task_group[0],'formData',{token:token.val})
			this.$set(this.request_task_group[0],'filePath',path)
			this.$set(this.request_task_group[0],'task',com.uploadImage(this.request_task_group[0]))
		},
		// 修改头像成功(接收)
		changeAvatarSuccess(res){
			console.log('修改头像成功',res)
			this.avatar = this.temp_avatar;
			// 同步修改仓库
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{avatar:this.temp_avatar}})
		},
		// 修改头像失败(接收)
		changeAvatarFalied(err){
			console.log('修改头像失败',err)
		},
		// 填充个人信息
		fillUserInfo(){
			let [province,city,area] = [
				!!this.$store.state.user.user_detail.province?this.$store.state.user.user_detail.province:'',
				!!this.$store.state.user.user_detail.city?this.$store.state.user.user_detail.city:'',
				!!this.$store.state.user.user_detail.county?this.$store.state.user.user_detail.county:''
			]
			let sex = this.$store.state.user.user_detail.sex==1?[{val:'男',active:true},{val:'女',active:false}]:[{val:'男',active:false},{val:'女',active:true}];
			sex = !!this.$store.state.user.user_detail.sex?sex:[{val:'男',active:false},{val:'女',active:false}]
			
			this.avatar = this.$store.state.user.user_detail.avatar;
			this.$set(this.group[0],'val',!!this.$store.state.user.user_detail.nickname?this.$store.state.user.user_detail.nickname:'')
			this.$set(this.group[1],'val',!!this.$store.state.user.user_detail.truename?this.$store.state.user.user_detail.truename:'')
			this.$set(this.group[2],'options',sex)
			this.$set(this.group[4],'val',province+'-'+city+'-'+area)
			this.$set(this.group[3],'val',!!this.$store.state.user.user_detail.birthday?this.$store.state.user.user_detail.birthday:'')
			this.$set(this.group[5],'val',!!this.$store.state.user.user_detail.detail_address?this.$store.state.user.user_detail.detail_address:'')
			this.$set(this.group[6],'val',!!this.$store.state.user.user_detail.weixin?this.$store.state.user.user_detail.weixin:'')
		},
		// 修改个人信息成功(接收)
		updateUserInfoSuccess(res){
			console.log('成功',res)
			plus.nativeUI.toast(res.data.msg);
			
			
			// 更新公共仓库
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{nickname:this.group[0].val}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{truename:this.group[1].val}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{sex:this.group[2].options.findIndex(item=>item.active==true)+1}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{birthday:this.group[3].val}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{weixin:this.group[6].val}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{province:this.group[4].val.split('-')[0]}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{city:this.group[4].val.split('-')[1]}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{county:this.group[4].val.split('-')[2]}})
			this.$store.commit('user/changeUserInfo',{name:'user_detail',val:{detail_address:this.group[5].val}})
			// debug
			console.log(this.$store.state.user)
		},
		// 修改个人信息失败(接收)
		updateUserInfoFalied(res){
			console.log('失败',res)
		}
	},
	onReady(){
		this.fillUserInfo()
	}
}