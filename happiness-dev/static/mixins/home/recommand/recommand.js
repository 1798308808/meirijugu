export const rd={
	data() {
		return {
			// 商品列表类型 1今日推荐 4聚划算 5淘抢购
			goods_list_type:1,
			title:''
		}
	},
	methods: {
		getGoodsListType(){
			let params = getCurrentPages()[getCurrentPages().length-1].$routeParams
			let type = !!params?params.type:1
			this.goods_list_type =type;
			switch(type){
				case 1:this.title='今日推荐';break;
				case 4:this.title='聚划算';break;
				case 5:this.title='淘抢购';break;
				default:this.title='今日推荐';break;
			}
		}
	}
}