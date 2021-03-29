import com from '@/static/js/common.js'
export const ads_interaction ={
	data(){
		return{
			cover:true
		}
	},
	methods:{
		// 新增收货地址
		addNewAds(){
			com.pageNavigation('/pages/sublevel/address/address')
		},
		// 编辑收货地址
		editAds(id){
			com.pageNavigation('/pages/sublevel/address/address',null,{isEdit:true,id})
		}
	}
}