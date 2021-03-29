import ctr from '@/static/js/container.js'
import com from '@/static/js/common.js'

export const detail ={
	data(){
		return {
			// 为您推荐
			group:[
				[
					{
						id:'',
						title:'',
						thumb:'',
						price:'',
						d_price:'',
						discount:'',
						platform:'',
						rewards:'',
						sales:0,
					},
					{
						id:'',
						title:'',
						thumb:'',
						price:'',
						d_price:'',
						discount:'',
						platform:'',
						rewards:'',
						sales:0,
					},
				]
			],
			nodes:['']
		}
	},
	methods:{
		
	},
	onReady(){
		this.$nextTick(function(){
			this.dom.banner = ctr.getBindingEle(this.$refs.g0)
			this.dom.detail = ctr.getBindingEle(this.$refs.g1)
			this.dom.guess = ctr.getBindingEle(this.$refs.goods[0])
		})
	},
}