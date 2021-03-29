
export const card = {
	data(){
		return {
			group:[
				'http://www.jufu-unique.com/Public/static/img/jfk/bg1.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg2.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg3.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg4.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg5.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg6.png',
				'http://www.jufu-unique.com/Public/static/img/jfk/bg7.png'
			],
			t:''
		}
	},
	created(){
		let [s,n,st,tb,p,pl,w] =
		[
			this.$store.state.common.safeAreaHeight,
			this.$store.state.common.navbarHeight,
			this.$store.state.common.statusBarHeight,
			this.$store.state.common.tabbarHeight,
			this.$store.state.common.screenHeight,
			this.$store.state.common.platform,
			this.$store.state.common.screenWidth
		]
		this.t = 0;
	},
	methods:{
		
		
		
	}
}