export const bp_interaction = {
	data(){
		return{
			ele:null
		}
	},
	methods:{
		close(){
			const subNVue = uni.getSubNVueById('buy_card')
			subNVue.hide('fade-out', 250);
		}
	}
}