import com from '@/static/js/common.js'
export const reg_interaction = {
	data(){
		return {
			// 加载遮罩
			cover:false,
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
			// 显示输入框项数
			display_rows:1,
			// 当前按钮显示项
			current_step:0
		}
	},
	watch:{
		// 监听数据状态
		form_status:{
			handler:function(val){
				this.button_group[1].type = com.isObjectAllGreenLight(val)?2:3;
			},
			deep:true
		}
	},
	methods:{
		// 切换输入框显示状态
		switchRegisterInput(row,step){
			this.current_step=step;
			this.display_rows=row;
		},
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
				this.button_group[0].type = 2;
				this.form_status.phone = true;
			}
			else{
				this.button_group[0].type = 3;
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
		// 注册按钮操作
		// @params index 第几个按钮
		regist_action(index){
			if(this.button_group[index].type==3)return;
			switch(index){
				case 0:
					this.isPhoneRegistYet()
				break;
				case 1:this.registAndLogin();
				break;
			}
		},
		// 输入框发送验证码
		getSendCAPTCHA(){
			if(!!this.timer)return
			this.shouldSendCAPTCHA()
		}
	}
}