import com from '@/static/js/common.js'

export const login_interaction = {
	data() {
		return {
			cover: false
		}
	},
	methods: {
		// 开始一键登录
		start_one_step_login() {
			// 一键登录样式
			let univerifyStyle = {
				"backgroundColor": "#ffffff", // 授权页面背景颜色，默认值：#ffffff  
				// "icon": {
				// 	"path": "static/xxx.png" // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo   
				// },
				"phoneNum": {
					"color": "#333333", // 手机号文字颜色 默认值：#000000   
					"fontSize": "25" // 手机号字体大小 默认值：18  
				},
				"slogan": {
					"color": "#8a8b90", //  slogan 字体颜色 默认值：#8a8b90  
					"fontSize": "12" // slogan 字体大小 默认值：12  
				},
				"authButton": {
					"normalColor": "#333333", // 授权按钮正常状态背景颜色 默认值：#3479f5  
					"highlightColor": "#222222", // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）  
					"disabledColor": "#ececec", // 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）  
					"textColor": "#ffffff", // 授权按钮文字颜色 默认值：#ffffff  
					"title": "本机号码一键登录" // 授权按钮文案 默认值：“本机号码一键登录”  
				},
				"otherLoginButton": {
					"visible": "true", // 是否显示其他登录按钮，默认值：true  
					"normalColor": "#f8f8f8", // 其他登录按钮正常状态背景颜色 默认值：#f8f8f8  
					"highlightColor": "#dedede", // 其他登录按钮按下状态背景颜色 默认值：#dedede  
					"textColor": "#333333", // 其他登录按钮文字颜色 默认值：#000000  
					"title": "返回", // 其他登录方式按钮文字 默认值：“其他登录方式”  
					"borderWidth": "1px", // 边框宽度 默认值：1px（仅ios支持）  
					"borderColor": "#c5c5c5" //边框颜色 默认值： #c5c5c5（仅ios支持）  
				},
				"privacyTerms": {
					"defaultCheckBoxState": "true", // 条款勾选框初始状态 默认值： true   
					"textColor": "#8a8b90", // 文字颜色 默认值：#8a8b90  
					"termsColor": "#1d4788", //  协议文字颜色 默认值： #1d4788  
					"prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”  
					"suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”  
					"fontSize": "14", // 字体大小 默认值：12,  
					"privacyItems": [
						// 自定义协议条款，最大支持2个，需要同时设置url和title. 否则不生效  
						// {  
						//     "url": "https://", // 点击跳转的协议详情页面  
						//     "title": "用户服务协议" // 协议名称  
						// }  
					]
				}
			}


			uni.login({
				provider: 'univerify',
				univerifyStyle,
				success: (res) => { // 登录成功
					console.log(res.authResult);
					// 获取手机号
					this.getPhoneNumberAndLogin(res.authResult.openid, res.authResult.access_token)
				},
				fail: (res) => { // 登录失败
					console.log(res.errCode)
					console.log(res.errMsg)
					if(res.errCode != '30002'&&res.errCode != '30003'){
						plus.nativeUI.toast(res.errMsg);
					}
					if(res.errCode == '30002'){
						uni.closeAuthView()
					}
				}
			})
		},
		// 获取手机号码并登录
		getPhoneNumberAndLogin(id, token) {
			console.log('获取到一键登录参数', id, token)

			uniCloud.callFunction({
				name: 'onesteploginin', // 你的云函数名称
				data: {
					'access_token': token, // 客户端一键登录接口返回的access_token
					'openid': id // 客户端一键登录接口返回的openid
				}
			}).then(res => {
				console.log('云函数返回', res)
				let data = res.result.phoneNumber;
				this.login(data)
			}).catch(err => {
				console.log(err)
			})
		},
		// 一键登录预登陆
		one_step_pre_login() {
			this.cover = true
			uni.preLogin({
				provider: 'univerify',
				success: () => { //预登录成功
					// 显示一键登录选项
					console.log('一键登录可用')
					this.start_one_step_login()
				},
				fail: (res) => { // 预登录失败
					// 不显示一键登录选项（或置灰）
					// 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
					console.log(res.errCode)
					console.log(res.errMsg)
					
					if (res.errCode == '40047'||res.errCode == '30005') {
						plus.nativeUI.toast('获取号码失败，请打开蜂巢网络');
					} 
					else {
						plus.nativeUI.toast(res.errMsg);
					}
				},
				complete: () => {
					this.cover = false
				}
			})

			// this.$refs.popup.open()
		},
		// 账号登录
		another_login() {
			com.pageNavigation('/pages/login/account/account', 3)
		},
		login_navbar(res) {
			switch (res.position) {
				case 0:
					;
					break;
				case 1:
					;
					break;
				case 2:
					com.pageNavigation('/pages/login/prereg/prereg');
					break;
			}
		},
		// 关闭一键登录
		closeOneKeyLoginIn() {
			this.$refs.popup.close()
		}
	},
	onShow() {
		com.global_watcher_regist('navbarTapHandler', this.login_navbar)
	}
}
