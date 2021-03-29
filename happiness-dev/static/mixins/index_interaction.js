export const index_interaction = {
	data(){
		return{
			current_page:0,
			// 是否购买聚福卡
			has_card:false
		}
	},
	onShow(){
		this.triggleTabbarPageOnShowHandle();
	},
	onReady(){
		this.render()
		this.fetchNaviBackData()
	},
	computed:{
		is_gather_card:function(){
			return this.$store.state.user.user_msg
		}
	},
	watch:{
		is_gather_card:{
			handler:function(val){
				this.isSuperUser()
			},
			deep:true
		}
	},
	methods:{
		// 判断是否购买聚福卡
		isSuperUser(){
			if(!!this.$store.state.user.user_msg){
				let flag = this.$store.state.user.user_msg.is_gather_card
				if(flag=='Y'){
					this.has_card=true;
					Object.assign(this.tabbarGroup[2],{
						title: '任务中心',
						actived: '/static/t1.png',
						muted: '/static/t1_m.png',
					})
					this.$set(this.tabbarPage[2],'render',false)
				}
				else{
					this.has_card=false;
					Object.assign(this.tabbarGroup[2],{
						title: '聚福卡',
						actived: '',
						muted: '',
					})
				}
			}
		},
		// 当页面顯示时触发tabbar页面的on_show事件
		triggleTabbarPageOnShowHandle(){
			let current_page = this.tabbarGroup.findIndex(item=>item.active==true)
			if(current_page!=-1)uni.$emit(`tabbarPage_${this.tabbarPage[current_page].id}_onShow`,{msg:'ok'})
		},
		// 渲染当前页面
		render(){
			uni.$on('tabbarRenderRequire',res=>{
				this.current_page = res.page;
				if(!this.tabbarPage[res.page].render){
					console.log('渲染页面',res.page)
					this.tabbarPage[res.page].render=true;
				}
				// 模拟页面onshow(初次渲染不会触发)
				uni.$emit(`tabbarPage_${res.id}_onShow`,{msg:'ok'})
			})
		},
		// 接受返回数据
		fetchNaviBackData(){
			uni.$on('tabbarPageReturnData',res=>{
				console.log('根页面接受数据',res)
				// 分发到各个tabbar页面
				uni.$emit(`tabbarPageDataReflect_${this.tabbarPage[res.page].id}`,res)
				
				// 返回指定页面(如果已经在原来的页面则不需要跳转)
				if(this.current_page==res.page)return;
				this.$refs.tabbar.switchTabbar(res.page);
				
			})
		}
	}
}