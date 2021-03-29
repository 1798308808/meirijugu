export const rank = {
	data() {
		return {
			navbar:{
				nc:'rgba(255,255,255,0)',
				sb:'rgba(0,0,0,0)',
				mt:'rgba(255,255,255,1)',
				lc:'/static/back_w.png'
			},
			user:{
				name:'Ccccccoc',
				avatar:'/static/avatar.png',
				money:4512.02,
				rank:208156
			},
			group:[
				{
					rank:1,
					name:'一路平安',
					avatar:'/static/avatar.png',
					money:48941.21
				},
				{
					rank:2,
					name:'Flimiw1996',
					avatar:'/static/avatar.png',
					money:20110.00
				},
				{
					rank:3,
					name:'微风纪委哦',
					avatar:'/static/avatar.png',
					money:19999.98
				},
				{
					rank:4,
					name:'1321312331',
					avatar:'/static/avatar.png',
					money:1531.21
				},
				{
					rank:5,
					name:'fadswefw',
					avatar:'',
					money:556.21
				},
				{
					rank:6,
					name:'一路平安',
					avatar:'',
					money:123.21
				},
				{
					rank:7,
					name:'一路平安',
					avatar:'',
					money:123.21
				},
				{
					rank:8,
					name:'一路平安',
					avatar:'',
					money:123.21
				},
				{
					rank:9,
					name:'一路平安',
					avatar:'',
					money:123.21
				},
				{
					rank:10,
					name:'一路平安',
					avatar:'',
					money:123.21
				}
			]
		}
	},
	methods: {
		
	},
	beforeDestroy(){
		uni.$off('pageScroll')
	},
	mounted(){
		uni.$on('pageScroll',res=>{
			let y = res.detail.contentOffset.y;
			if(y<-50){
				let obj  ={
					nc:'rgba(255,255,255,1)',
					sb:'rgba(255,255,255,1)',
					mt:'',
					lc:'/static/back.png'
				}
				this.navbar = obj;
			}
			else{
				let obj  ={
					nc:'rgba(255,255,255,0)',
					sb:'rgba(0,0,0,0)',
					mt:'rgba(255,255,255,1)',
					lc:'/static/back_w.png'
				}
				
				this.navbar = obj;
			}
		})
	}
}