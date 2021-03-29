import com from '@/static/js/common.js'
export const order_interaction = {
	data(){
		return {
			// 0淘宝 1京东 2拼多多 3唯品会
			current_order:0,
			// 订单类型 0我的 1直邀 2间邀
			current_order_type:0,
			// 订单状态 0全部 1已付款 2已结算 3已失效
			current_order_status:0,
			cover:false
		}
	},
	methods:{
		// 修改参数状态
		// @params name(String) 平台 tb jd pdd wph
		// @params val(Array) 参数值 [渲染订单类型索引,说明,平台类型]
		changeOrderArgs(name,val){
			this.argsGroup[name] = val;
		},
		// 滑动切换页面
		pageChanged(res){
			this.switchOrderAndRender(res.index)
		},
		// 生成请求参数
		// @params platform(Number) 平台 0淘宝 1狗东 2拼多多 3唯品会
		// @params type(Number) 订单类型 0我的 1直邀 2间邀
		// @params page(Number) 请求页数
		// @return (Object) 参数对象
		distributeRequestOptions(platform,type,page){
			page = page || 1;
			switch(platform){
				case 0:
					switch(type){
						case 0:return {p:page}
						case 1:return {type:2,p:page}
						case 2:return {type:3,p:page}
					}
				break;
				case 1:
					switch(type){
						case 0:return {p:page}
						case 1:return {type:2,p:page}
						case 2:return {type:3,p:page}
					}
				break;
				case 2:
					switch(type){
						case 0:return {brand:2,p:page}
						case 1:return {brand:2,type:2,p:page}
						case 2:return {brand:2,type:3,p:page}
					}
				break;
				case 3:
					switch(type){
						case 0:return {brand:3,p:page}
						case 1:return {brand:3,type:2,p:page}
						case 2:return {brand:3,type:3,p:page}
					}
				break;
			}
		},
		// 根据当前选项发起请求
		// @params platform(Number) 平台 0淘宝 1狗东 2拼多多 3唯品会
		// @params type(Number) 订单类型 0我的 1直邀 2间邀
		// @params page(Number) 请求页数
		// @params cover(Boolean) 是否需要显示加载遮罩
		requestWithOptions(platfrom,type,cover,page){
			// 若此平台下已有数据不再重复请求
			// 加载时有数据也会请求
			page = page || 1;
			if(this.order[platfrom][type].length>0&&page==1)return;
			console.log('老子要请求')
			if(cover)this.cover=true;
			let options = this.distributeRequestOptions(this.current_order,this.current_order_type,page)
			switch(platfrom){
				case 0:
					this.argsGroup.tb = [type.toString(),'淘宝',0,page]
					this.getTaobaoOrder(options)
				break;
				case 1:
					this.argsGroup.jd = [type.toString(),'京东',1,page]
					this.getMultiOrder(options);
				break;
				case 2:
					this.argsGroup.pdd = [type.toString(),'拼多多',2,page]
					this.getMultiOrder(options)
				break;
				case 3:
					this.argsGroup.wph = [type.toString(),'唯品会',3,page]
					this.getMultiOrder(options)
				break;
			}
		},
		// 平台选择选项
		getOptions(res){
			this.options = res.val;
			this.current_order = res.index;
			
			this.clearSearchKeywords()
			this.requestWithOptions(this.current_order,this.current_order_type,true)
			
		},
		// 注册导航栏事件
		registNavbarHandle(res){
			switch(res.position){
				case 0:;break;
				case 1:console.log(res);break;
				case 2:;break;
			}
		},
		// 直邀，间邀，我的订单切换
		switchOrderAndRender(index){
			this.current_order_type = index;
			this.requestWithOptions(this.current_order,this.current_order_type,true)
			
			if(this.page_group[index].render)return;
			this.page_group[index].render=true;
		},
		// 订单状态切换
		orderStatusChange(){
			uni.$on('returnOrderStatus',index=>{
				this.current_order_status = index
			})
		},
		// 页面刷新
		refreshing(id){
			console.log('刷新执行')
			this.emptyContent(this.current_order,this.current_order_type)
			this.requestWithOptions(this.current_order,this.current_order_type)
		},
		// 清空内容并重置加载状态
		// @params index(Number) 平台索引
		// @params index1(Number) 订单类型
		emptyContent(index,index1){
			let ls = this.loadmore_status[this.current_order];
			this.$set(this.order[index],index1.toString(),[])
			this.$set(ls,this.current_order_type,{loadmore:false,nomore:false,page:1})
		},
		// 控制分页面动画
		toggleSwiperPageAnimation(name,index,status){
			this.$set(this.page_group[index],name,status)
		},
		// 加载更多
		loadmoreData(){
			if(this.loadmore_status[this.current_order][this.current_order_type].nomore||this.order[this.current_order][this.current_order_type].length==0)return;
			this.loadmore_status[this.current_order][this.current_order_type].loadmore=true;
			this.requestWithOptions(this.current_order,this.current_order_type,false,this.loadmore_status[this.current_order][this.current_order_type].page+1)
		},
		// 加载成功操作
		// @params index(Number) 订单类型
		// @params page(Number) 更新当前请求页数
		// @params len(Number) 加载数据长度
		// @params status(Boolean) 加载完成后状态
		actionAfterloadmore(platform,index,page,len,status){
			console.log('加载结果',platform,index,page,len,status)
			index = parseInt(index)
			let ls = this.loadmore_status[platform];
			if(status){
				this.$set(ls[index],'page',page)
				if(len<1)this.$set(ls[index],'nomore',true)
			}
			this.$set(ls[index],'loadmore',false)
			this.$refs[`o_list_${index}`][0].listResetLoadmore()
		},
		// 获得搜索框文本
		getSearchKeyWord(data){
			this.page_group[this.current_order_type].keywords = data;
		},
		// 清空搜索文本
		clearSearchKeywords(){
			this.page_group.forEach((item,index)=>{
				this.$set(this.page_group[index],'keywords','')
			})
			uni.hideKeyboard();
		}
	},
	onReady(){
		com.global_watcher_regist('pageChanged',this.pageChanged)
		com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
	},
	onLoad(){
		this.orderStatusChange()
	}
}