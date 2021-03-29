import com from '@/static/js/common.js'
export const lt_interaction = {
	data(){
		return{
			cover:false
		}
	},
	methods:{
		// 获取输入框值
		getInput(data){
			if(data.id=='i1'){
				this.phone = data.val
			}
			else{
				this.code = data.val
			}
		},
		// 发送验证码点击
		getSendCAPTCHA(){
			console.log(this.phone)
			if(!!this.phone&&this.phone.match(/^1(3|4|5|6|7|8|9)\d{9}$/)){
				this.sendCode()
			}
			else{
				plus.nativeUI.toast('手机号码填写有误')
			}
		},
		// 绑定或注册账号
		bindOrRegister(){
			console.log(this.phone,this.code,this.type,this.open_id)
			uni.hideKeyboard()
			if(!!this.phone&&!!this.code&&!!this.type&&!!this.open_id){
				this.thirdPartBind()
			}
			else{
				plus.nativeUI.toast('请完善信息')
			}
		},
		// 获取第三方平台信息
		getThirdPartyInfo(){
			let data = getCurrentPages()[getCurrentPages().length-1].$routeParams
			this.open_id=data.id
			this.type = data.type;
			this.platform_icon = data.type=='wx'?'/static/wx.png':'/static/apple_logo_b.png'
		}
	},
	onLoad(){
		this.getThirdPartyInfo()
	}
}