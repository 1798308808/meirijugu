export const reset = {
	data() {
		return {
			// 验证码状态
			timer:null,
			// 验证码倒计时
			timer_countdown:60,
			// 按钮集合状态
			button_group:[
				{
					type:3,
					text:'重置',
					shadow:false
				}
			],
			// 输入框集合
			group:[
				{
					id:'i1',
					title:'找回密码',
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
				},
				{
					id:'i3',
					title:'',
					placeholder:'请输入密码(最少6位)',
					type:3,
					input_type:'password'
				},
				{
					id:'i4',
					title:'',
					placeholder:'请确认密码',
					type:3,
					input_type:'password'
				}
			]
		}
	},
	methods: {
		
	}
}