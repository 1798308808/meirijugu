export const list={
	data() {
		return {
			// 分类ID
			category_id:null,
			// 电商平台
			platform:null,
			// 当前页数
			page:1
		}
	},
	methods: {
		
	},
	onLoad(){
		this.getPlatformAndCategoryId()
	}
}