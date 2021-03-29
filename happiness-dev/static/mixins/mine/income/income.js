export const income ={
	data() {
		return {
			refreshing:false,
			icon:'/static/back_w.png',
			font_color:'#fff',
			status_color:'rgba(0,0,0,0)',
			color:'rgba(255,255,255,0)',
			options_group:[
				{
					icon:'/static/income_icon.png',
					title:'团队收益'
				},
				{
					icon:'/static/income_icon.png',
					title:'结算佣金明细'
				},
				{
					icon:'/static/income_icon.png',
					title:'提现明细'
				},
				{
					icon:'/static/income_icon.png',
					title:'余额明细'
				},
				{
					icon:'/static/income_icon.png',
					title:'积分明细'
				}
			],
		};
	},
	methods:{
		// 刷新页面
		refreshPage(){
			this.getUserIncomeDetail()
		}
	}

}