import com from '@/static/js/common.js'
export const card_data = {
	data(){
		return {
			// 临时支付信息
			temp_payment_info:{},
			// 支付类型
			payment_type:[],
			// 请求处理集合
			request_handler_group:{
				createOrder:[
					{
						code:0,
						handle:()=>this.createOrderSuccess
					},
					{
						code:208,
						handle:()=>this.aleadyHasCardBeforeLogin
					},
					{
						code:-1,
						handle:()=>this.createOrderFailed
					}
					
				],
				pay:[
					{
						code:0,
						handle:()=>this.paySuccess
					},
					{
						code:-1,
						handle:()=>this.payFailed
					}
					
				]
			},
			// 请求集合
			request_task_group:[
				{
					task:null,
					func:'生成订单',
					url:'http://www.jufu-unique.com/app.php/Order/jfkorder',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,[],this.request_handler_group.createOrder,res,'long','bottom')
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
					func:'获取订单支付凭证',
					url:'http://www.jufu-unique.com/app.php/Order/getjfkPayForm',
					method:'POST',
					header:{'Content-Type': 'application/x-www-form-urlencoded'},
					data:{},
					success:(res)=>{
						com.requestResponse(this,this.payment_type,this.request_handler_group.pay,res,'short','bottom')
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
		// 生成订单(发起)
		createOrder(){
			let _token = uni.getStorageSync('token')
			console.log(_token)
			if(!_token){com.pageNavigation('/pages/login/login/login');return};
			
			let [token,goods_id,num,address_id,remark] = [_token.val,1,1,11,'聚福卡购买']
			
			this.cover=true;
			this.$set(this.request_task_group[0],'data',{token,goods_id,num,address_id,remark})
			this.$set(this.request_task_group[0],'task',com.createRequestTask(this.request_task_group[0]))
		},
		// 发起获取订单支付凭证(发起)
		pay(data,type){
			let _token = uni.getStorageSync('token')
			let [token,order_id,pay_method] = [_token.val,data.data.data.order_id,type]
			console.log('支付参数',token,order_id,pay_method)
			this.payment_type=[pay_method]
			this.$set(this.request_task_group[1],'data',{token,order_id,pay_method})
			this.$set(this.request_task_group[1],'task',com.createRequestTask(this.request_task_group[1]))
		},
		// 生成订单成功(接收)
		createOrderSuccess(res){
			console.log('获取订单成功',res)
			this.openPaySelection();
			this.temp_payment_info=res;
			// this.pay(res)
		},
		// 生成订单失败(接收)
		createOrderFailed(res){
			console.log('获取订单失败',res)
		},
		// 获取订单支付凭证成功(接收)
		paySuccess(type,res){
			console.log('获取订单支付凭证成功',res)
			this.startPayment(type,res)
		},
		// 获取订单支付凭证失败(接收)
		payFailed(res){
			console.log('获取订单支付凭证失败',res)
		},
		// 开始支付(发起)
		startPayment(type,res){
			console.log('支付类型',type)
			console.log('支付订单凭证',res)
			this.paying=true;
			uni.requestPayment({
			    provider:type,
			    orderInfo: res.data.data.pay_parameters,
			    success: (e) => {
					this.$store.commit('user/changeUserInfo',{name:'user_msg',val:{is_gather_card:'Y'}})
					com.showGlobalPopUpWindows('buy_card','zoom-fade-out')
					this.backToUserCenter()
			    },
			    fail: (e) => {
					console.log(e)
			        plus.nativeUI.toast('支付失败');
			    },
				complete: () => {
					this.paying=false;
				}
			})
		},
		// 已经购买过聚福卡，已登录，但没有获取用户信息(接收)
		aleadyHasCardBeforeLogin(res){
			plus.nativeUI.toast(res.data.msg)
			uni.$emit('tabbarPageReturnData', {
				page: 4,
				data: '',
				msg: ''
			})
		}
	}
}