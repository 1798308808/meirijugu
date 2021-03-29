export const lt = {
	data(){
		return{
			// 输入框集合
			group:[
				{
					id:'i1',
					title:'',
					placeholder:'请输入手机号',
					type:1,
					input_type:'number',
					readonly:false
				},
				{
					id:'i2',
					title:'',
					placeholder:'输入验证码',
					type:2,
					input_type:'number',
					max:6,
					captcha:'发送验证码'
				}
			],
			// 第三方图标
			platform_icon:'',
			// 验证码状态
			timer:null,
			// 验证码倒计时
			timer_countdown:60,
		}
	},
	methods:{
		
	}
}