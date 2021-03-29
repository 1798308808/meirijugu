import com from '@/static/js/common.js'
export const fans_interaction = {
	data(){
		return{
			cover:false,
			val:'',
			refreshing:false
		}
	},
	methods:{
		// 筛选搜索结果
		searchResult(name){
			if(!!this.val){
				if(name.match(this.val)){
					return true
				}
				else{
					return false;
				}
			}
			else{
				return true
			}
		},
		// 获取搜索框值
		getInput(value){
			this.val = value;
		},
		// 刷新页面
		refreshPage(){
			this.getMyFans()
		}
	}
}