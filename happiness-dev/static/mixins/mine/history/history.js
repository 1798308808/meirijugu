export const history ={
	data() {
		return {
			options_group:[
				{
					active:true,
					text:'淘宝'
				},
				{
					active:false,
					text:'狗东'
				},
				{
					active:false,
					text:'拼多多'
				},
				{
					active:false,
					text:'唯品会'
				},
			],
			group1:[
				{
					id:'s1',
					title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
					thumb:'/static/goods1.jpg',
					price:'78.90',
					d_price:'128.90',
					discount:'40',
					platform:'/static/tmall_v.png',
					rewards:'2.55',
					sales:189
				},
				{
					id:'s2',
					title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
					thumb:'/static/goods2.webp',
					price:'78.90',
					d_price:'128.90',
					discount:'40',
					platform:'/static/tmall_v.png',
					rewards:'2.55',
					sales:189
				},
				{
					id:'s3',
					title:'爱士堡 （Eichbaum）小麦白啤酒500ml*24听整箱装 德国原装进口',
					thumb:'/static/good3.webp',
					price:'78.90',
					d_price:'128.90',
					discount:'40',
					platform:'/static/tmall_v.png',
					rewards:'2.55',
					sales:189
				},
				
			],
			group:[
				{
					id:'s1',
					title:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
					thumb:'/static/goods2.webp',
					desc:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
					price:'1500.90',
					d_price:'2200.90',
					discount:'30',
					platform:'/static/jd.png',
					rewards:'9.55',
					seckill:false,
					storeName:null,
					sales:4565
				},
				{
					id:'s2',
					title:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
					thumb:'/static/goods1.jpg',
					desc:'任天堂 Nintendo Switch 国行续航增强版 NS家用体感游戏机掌机 便携掌上游戏机 红蓝主机',
					price:'1500.90',
					d_price:'2200.90',
					discount:'30',
					platform:'/static/jd.png',
					rewards:'9.55',
					seckill:false,
					storeName:null,
					sales:4565
				},
			]
		}
	},
	methods: {
		press(){
			console.log('长安了')
		}
	}
}