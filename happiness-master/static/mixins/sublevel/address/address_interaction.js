export const address_interaction ={
	data(){
		return {
			title:"",
			edit:false,
			cover:true,
			address_id:null
		}
	},
	methods:{
		// 判断是新增还是编辑
		isNewOrEdit(){
			let params = getCurrentPages()[getCurrentPages().length-1].$routeParams
			let flag = params.isEdit || false
			if(flag){
				this.title ='编辑收货地址'
				this.edit =true;
				this.fetchUserAddress(params.id)
			}
			else{
				this.title ='新增收货地址'
				this.cover=false
			}
		}
	},
	onLoad(){
		this.isNewOrEdit()
	}
}