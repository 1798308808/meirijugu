import com from '@/static/js/common.js'
export const withdraw_interaction = {
	data(){
		return {
			// 是否可以提现
			withdraw_abled:false,
			cover:false
		}
	},
	methods:{
		// 检查用户是否已经绑定支付宝账号
		checkIfBindAlipay(){
			let has_account = this.$store.state.user.user_msg.alipay_account;
			let name = this.$store.state.user.user_detail.truename;
			if(!!has_account){
				this.$set(this.group[0],'val',has_account)
				this.$set(this.group[1],'val',name)
				this.withdraw_abled=true;
			}
		},
		// 修改绑定账号
		goBindAccount(){
			com.pageNavigation('/pages/sublevel/bind/bind')
		},
		go(){
			if(this.withdraw_abled){
				let values = this.group.map(item=>item.val)
				let couldGetMoney = values.every(item=>!!item)
				if(couldGetMoney){
					this.getMyMoney(values[0],values[1],values[2])
				}
			}
			else{
				com.pageNavigation('/pages/sublevel/bind/bind')
			}
		}
	},
	onShow(){
		this.checkIfBindAlipay()
	}
}