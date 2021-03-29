export const brand ={
	data(){
		return {
			count:2,
			offsetHeight:uni.upx2px(480),
			pageId:'parent_list',
			// 菜单列表
			m_group:[
				{
					id:'s1',
					title:'母婴'
				},
				{
					id:'s2',
					title:'婚庆用品'
				},
				{
					id:'s3',
					title:'床上用品'
				},
				{
					id:'s5',
					title:'数码摄像'
				},
				{
					id:'s6',
					title:'手机3C'
				},
				{
					id:'s7',
					title:'门'
				},
			],
			options:[
				{
					id:'o1',
					src:'/static/category.png',
					title:"婴儿/童装"
				},
				{
					id:'o2',
					src:'/static/category.png',
					title:"孕妇专用"
				},
				{
					id:'o3',
					src:'/static/category.png',
					title:"益智玩家"
				},
				{
					id:'o4',
					src:'/static/category.png',
					title:"宝宝用品"
				},
				{
					id:'o5',
					src:'/static/category.png',
					title:"婴儿童鞋"
				},
				{
					id:'o6',
					src:'/static/category.png',
					title:"奶粉辅食"
				},
				{
					id:'o7',
					src:'/static/category.png',
					title:"残影用品"
				},
				{
					id:'o8',
					src:'/static/category.png',
					title:"洗护专区"
				},
				{
					id:'o9',
					src:'/static/category.png',
					title:"尿不湿"
				},
				{
					id:'o10',
					src:'/static/category.png',
					title:"婴童诗经"
				},
				{
					id:'o11',
					src:'/static/category.png',
					title:"儿童鞋垫"
				},
			],
			page_group:[
				{
					name:'page1',
					render:true
				},
				{
					name:'page2',
					render:true
				},
				{
					name:'page3',
					render:true
				}
			],
			options_group:[
				{
					active:true,
					text:'母婴童品'
				},
				{
					active:false,
					text:'百变女装'
				},
				{
					active:false,
					text:'食品酒水'
				},
				{
					active:false,
					text:'居家日常'
				},
				{
					active:false,
					text:'美妆洗护'
				},{
					active:false,
					text:'拉阿拉啦'
				},
			],
			goods:[
				{
					avatr:'',
					title:'子初',
					children:[
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/bear.png',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:false
						}
					]
				},
				{
					avatr:'',
					title:'子初',
					children:[
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/bear.png',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:false
						}
					]
				},
				{
					avatr:'',
					title:'子初',
					children:[
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/bear.png',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:false
						}
					]
				},
				{
					avatr:'',
					title:'子初',
					children:[
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/goods1.jpg',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:true
						},
						{
							thumb:'/static/bear.png',
							title:'子初秒佩服胚胎服务灭额外',
							price:'44.90',
							back:false
						}
					]
				}
			]
		}
	},
	methods:{
		setListFixed(index){
			this.$refs.page[index].setScrollRef()
		}
	},
	onReady(){
		console.log(this.offsetHeight)
		uni.$on('pageChanged',res=>{
			this.setListFixed(res.index)
		})
	},
	beforeDestroy(){
		uni.$off('pageChanged')
	}
	
}