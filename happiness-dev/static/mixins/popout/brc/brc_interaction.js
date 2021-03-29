import com from '@/static/js/common.js'
export const brc_interaction = {
	data(){
		return {
			val:'',
			cover:false
		}
	},
	methods:{
		// 获取邀请号
		getInput(data){
			this.val = data;
		},
		// 判断用户选择按钮
		// @params data 0不再提示 1确定
		getButtonTapped(data){
			if(this.cover)return;
			if(data==0){
				uni.setStorageSync('dont_show_bind_recommand_code_anymore', true);
				this.$refs.box.close()
			}
			else{
				if(!!this.val){
					uni.hideKeyboard()
					this.bind(this.val)
				}
			}
		},
	}
}