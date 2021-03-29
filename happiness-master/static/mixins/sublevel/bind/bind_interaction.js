export const bind_interaction = {
	data(){
		return {
			cover:false,
			title:'绑定支付宝，提现更方便',
		}
	},
	methods:{
		// 验证绑定表单
		bindFormCheck(){
			let values = this.group.map(item=>item.val)
			let couldBind = values.every(item=>!!item)
			if(couldBind){
				this.bindUserAlipayAccount(values[2],values[1],values[0])
			}
			else{
				plus.nativeUI.toast('请完善信息')
			}
		},
		// 获取绑定账号
		fetchUserBindAlipayAccount(){
			let account = this.$store.state.user.user_msg.alipay_account
			if(!!account){
				this.title=`已绑定支付宝账号:${account}`
			}
		}
	},
	onLoad(){
		this.fetchUserBindAlipayAccount()
	}
}