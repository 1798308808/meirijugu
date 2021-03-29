export const cpn_interaction = {
	data(){
		return {
			cover:false
		}
	},
	methods:{
		// 发送验证码
		sendCode(id){
			switch(id){
				case 's1':
					this.arg = [id]
					this.sendOriCode()
				break;
				case 's3':
					this.arg = [id]
					if(!!this.group[1].val){
						this.sendOriCode(this.group[1].val)
					}
					else{
						plus.nativeUI.toast('请输入新手机号')
					}
				break;
			}
		},
		// 输入框值
		getInput(res){
			console.log(res)
		},
	}
}