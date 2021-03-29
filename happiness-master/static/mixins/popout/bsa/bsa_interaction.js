import  com from '@/static/js/common.js'
export const bsa_interaction = {
	data(){
		return{
			// 授权平台方
			platform:'',
			// 授权标题
			title:'',
			// 授权描述信息
			desc:''
		}
	},
	methods:{
		// 绑定商城账号
		startBind(){
			console.log('芜湖')
			plus.runtime.openURL(encodeURI('https://oauth.taobao.com/authorize?client_id=32399564&response_type=code&redirect_uri=http://linghu.cn/app.php/TbAuth/authResult&view=web'),
				function(res) {
					console.log('回调？',res)
				},
				'com.taobao.taobao'
			)
		},
		// 注册商城账号绑定事件
		watcher(res){
			switch(res.index){
				case 2:
				break;
				case 3:
					this.platform = '/static/pdd_v.png';
					this.title = '绑定拼多多账号';
					this.desc = '一个账号只可绑定一个拼多多账号，通过绑定的拼多多账号购物可得到返利，其他拼多多账号无法获取返利。';
				break;
				case 4:
					this.platform = '/static/wph_v.png';
					this.title = '绑定唯品会账号';
					this.desc = '一个账号只可绑定一个唯品会账号，通过绑定的唯品会账号购物可得到返利，其他唯品会账号无法获取返利。';
				break;
				default:
					this.platform = '/static/taobao_v.png';
					this.title = '绑定淘宝账号';
					this.desc = '一个账号只可绑定一个淘宝账号，通过绑定的淘宝账号购物可得到返利，其他淘宝账号无法获取返利。';
				break;
			}
		}
	},
	onLoad(){
		com.global_watcher_regist('bindStoreAccountPop', this.watcher)
	}
}