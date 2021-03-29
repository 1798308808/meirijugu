export const searchResult = {
	data(){
		return {
			options_group:[
				{
					active:true,
					text:'淘宝',
					data:[],
					backup:[]
				},
				{
					active:false,
					text:'京东',
					data:[],
					backup:[]
				},
				{
					active:false,
					text:'拼多多',
					data:[],
					backup:[]
				},
				{
					active:false,
					text:'唯品会',
					data:[],
					backup:[]
				},
			],
			filters:[
				{
					title:'综合',
					active:true
				},
				{
					title:'价格',
					has:true,
					options:false,
					active:false
				},
				{
					title:'销量',
					has:true,
					options:false,
					active:false
				},
			],
			group:[]
		}
	},
	methods:{
		
	}
}