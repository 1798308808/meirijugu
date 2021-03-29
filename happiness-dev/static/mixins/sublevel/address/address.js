export const address = {
	data(){
		return {
			// 表单信息
			group:[
				{
					id:'s1',
					type:7,
					title:"收货人",
					sub:'请填写',
				},
				{
					input:'number',
					id:'s2',
					type:7,
					title:"联系电话",
					sub:'请填写',
				},
				{
					type:10,
					title:"所在区域",
					val:'请选择区域'
				},
				{
					type:6,
					sub:'请填写详细地址',
				},
				{
					type:4,
					title:"设为默认地址",
					sub:'',
					active:false,
					border:true,
				}
				
			],
		}
	}
}