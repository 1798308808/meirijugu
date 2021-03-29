export const tabbar = {
	data(){
		return{
			
		}
	},
	props:['id'],
	mounted() {
		uni.$on(`tabbarPageDataReflect_${this.id}`,res=>{
			this.transmitData(res)
		})
		uni.$on(`tabbarPage_${this.id}_onShow`,res=>{
			this.on_show()
		})
		uni.$on(`tabbarRefreshRequire_${this.id}`,res=>{
			this.tabbarRefresh()
		})
	},
}