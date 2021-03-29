export const free = {
	data(){
		return {
			icon:'/static/back_w.png',
			font_color:'#fff',
			status_color:'rgba(0,0,0,0)',
			color:'rgba(255,255,255,0)'
			
		}
	},
	methods:{
		// 规则关闭
		getClose(){
			this.$refs.popup.close()
		},
		// 规则打开
		getRules(){
			this.$refs.popup.open()
		}
	}
}