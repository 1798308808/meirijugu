export const article = {
	data() {
		return {
			cover:true
		}
	},
	methods: {
		
	},
	onLoad(){
		this.fetchArticle(getCurrentPages()[getCurrentPages().length-1].$routeParams.id)
	}
}