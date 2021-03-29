import com from '@/static/js/common.js'
export const account_interaction = {
	data(){
		return {
			// 加载遮罩
			cover:false,
			// 输入框集合状态
			form_status:{
				account:false,
				password:false
			},
			// 输入框集合值
			form_data:{
				account:'',
				password:''
			}
		}
	},
	methods:{
		// 重置密码
		getSideButton(){
			com.pageNavigation('/pages/login/reset/reset')
		},
		// 获取输入框组数据
		// @params val.id(String) 输入框id
		// @params val.val(String & Number) 输入框值
		getInput(val){
			switch(val.id){
				case 'i1':this.checkAccount(val.val);break;
				case 'i2':this.checkPassword(val.val);break;
			}
		},
		// 检查用户名
		// @params val 输入框值
		checkAccount(val){
			this.form_data.account = val;
			if(!!val&&val.match(/^1(3|4|5|6|7|8|9)\d{9}$/)){
				this.form_status.account = true;
			}
			else{
				this.form_status.account = false;
			}
		},
		// 检查密码
		// @params val 输入框值
		checkPassword(val){
			this.form_data.password = val;
			if(!!val){
				this.form_status.password = true;
			}
			else{
				this.form_status.password = false;
			}
		},
		// 检查登录信息填写状态
		isLoginReady(){
			let result = com.isObjectAllGreenLight(this.form_status,true);
			if(result.flag){
				this.login()
			}
			else{
				switch(result.err){
					case 'account':plus.nativeUI.toast('手机格式错误',{duration:'short',verticalAlign:'top'});;break;
					case 'password':plus.nativeUI.toast('请填写密码',{duration:'short',verticalAlign:'top'});;break;
				}
			}
		},
	}
}