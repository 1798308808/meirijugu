import com from '@/static/js/common.js'
export const reg ={
	data() {
		return {
			
		}
	},
	methods: {
		reg(){
			com.pageNavigation('/pages/login/register/register');
		},
		buy(){
			com.backToTabbarPage(2,'','')
		}
	}
}