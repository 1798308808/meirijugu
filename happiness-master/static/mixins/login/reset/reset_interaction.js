import com from '@/static/js/common.js'
export const reset_interaction = {
	data(){
		return{
			// 加载遮罩
			cover:false,
			// 输入框显示行数
			display_row:2,
			// 输入框集合状态
			form_status:{
				phone:false,
				CAPTCHA:false,
				password:false,
				confirm_password:false
			},
			// 输入框数据状态
			form_data:{
				password:'',
				confirm_password:'',
				CAPTCHA:'',
				phone:''
			},
		}
	},
	methods:{
		// 获取输入框组数据
		// @params val.id(String) 输入框id
		// @params val.val(String & Number) 输入框值
		getInput(val){
			switch(val.id){
				case 'i1':this.checkPhone(val.val);break;
				case 'i2':this.checkCAPTCHA(val.val);break;
				case 'i3':this.checkPassword(val.val);break;
				case 'i4':this.confirmPassword(val.val);break;
			}
		},
		// 检查手机号
		// @params val 输入框值
		checkPhone(val){
			this.form_data.phone = val;
			if(!!val&&val.match(/^1(3|4|5|6|7|8|9)\d{9}$/)){
				this.form_status.phone = true;
			}
			else{
				this.form_status.phone = false;
			}
		},
		// 检查验证码
		// @params val 输入框值
		checkCAPTCHA(val){
			this.form_data.CAPTCHA = val;
			if(!!val&&val.length==6){
				this.form_status.CAPTCHA = true;
			}
			else{
				this.form_status.CAPTCHA = false;
			}
		},
		// 检查密码
		// @params val 输入框值
		checkPassword(val){
			this.form_data.password = val;
			if(!!val&&val.length>=6){
				this.form_status.password=true;
			}
			else if(!!val&&val.length<6){
				this.form_status.password=false;
			}
		},
		// 确认密码
		// @params val 输入框值
		confirmPassword(val){
			this.form_data.confirm_password = val;
			if(val===this.form_data.password&&this.form_status.password){
				this.form_status.confirm_password =true;
			}
			else{
				this.form_status.confirm_password =false
			}
		},
		// 重置操作
		reset_action(){
			if(this.button_group[0].type==3)return;
			let result = com.isObjectAllGreenLight(this.form_status,true);
			if(result.flag){
				console.log(this.form_data)
				console.log(this.form_status)
				this.reset()
			}
			else{
				switch(result.err){
					case 'phone':plus.nativeUI.toast('手机格式有误',{duration:'short',verticalAlign:'top'});;break;
					case 'CAPTCHA':plus.nativeUI.toast('验证码有误',{duration:'short',verticalAlign:'top'});;break;
					case 'password':plus.nativeUI.toast('密码有误',{duration:'short',verticalAlign:'top'});;break;
					case 'confirm_password':plus.nativeUI.toast('两次密码不一致',{duration:'short',verticalAlign:'top'});;break;
				}
			}
			
		},
		// 发送验证码
		getSendCAPTCHA(){
			this.shouldSendCAPTCHA()
		},
		// 展开全部表单项
		showRestForm(){
			this.display_row =4;
			this.button_group[0].type=2;
		}
	}
}