import com from '@/static/js/common.js'
export const card_interaction = {
	data(){
		return {
			cover:false,
			paying:false,
			
		}
	},
	methods:{
		// 获取支付方式并开始支付
		getPayment(index){
			let type = index==0?'wxpay':'alipay';
			this.pay(this.temp_payment_info,type)
		},
		// 打开支付选择框
		openPaySelection(){
			this.$refs.popup.open()
		},
		// 根页面传输数据
		transmitData(res){
			console.log('聚福卡',res)
		},
		// 返回个人中心
		backToUserCenter(){
			uni.$emit('tabbarPageReturnData', {
				page: 3,
				data: '',
				msg: ''
			})
		},
		// 页面展现
		on_show(){
			com.setStatusBarColor(false)
			console.log('聚福卡 页面显示了')
			// com.global_watcher_regist('navbarTapHandler',this.registNavbarHandle)
		},
	},
	mounted(){
		com.setStatusBarColor(false)
	},
}