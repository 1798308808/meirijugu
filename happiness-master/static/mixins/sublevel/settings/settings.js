export const settings = {
	data(){
		return {
			// 示例
			group2:[
				{
					type:1,
					title:"主要標題",
				},
				{
					type:2,
					title:"主要標題",
					sub:'副標題',
					light:true
				},
				{
					type:3,
					title:"主要標題",
					sub:'副標題'
				},
				{
					type:3,
					short:true,
					title:"主要標題",
					sub:'超級長超級長超級長超級長超級長超級長'
				},
				{
					type:4,
					title:"主要標題",
					sub:'副標題',
					active:true
				},
				{
					type:4,
					short:true,
					title:"主要標題",
					sub:'可用500積分抵扣0.00元',
					active:false
				},
				{
					id:'s1',
					type:5,
					title:"主要標題",
					sub:'請填寫',
					alert:'别输入啦！！',
					pass:1
				},
				{
					id:'s2',
					type:5,
					val:'預設值',
					title:"主要標題",
					sub:'請填寫',
					pass:1
				},
				{
					type:6,
					val:'預設值',
					title:"主要標題",
					sub:'請填寫',
					max:20
				},
				{
					type:6,
					short:true,
					title:"主要標題",
					sub:'請填寫',
					max:20
				},
				{
					id:'s3',
					type:7,
					val:'',
					title:"主要標題",
					sub:'請填寫',
					pass:1
				},
				{
					id:'s3',
					type:7,
					val:'',
					title:"主標題",
					sub:'請填寫',
					pass:1
				},
				{
					id:'s3',
					type:7,
					val:'',
					title:"標題",
					sub:'請填寫',
					pass:1
				},
				{
					id:'s3',
					type:7,
					short:true,
					title:"主要標題",
					sub:'請填寫',
					pass:1
				},
				{
					type:8,
					title:"主要標題",
					sub:'請填寫',
					options:[
						{
							val:'男',
							active:false
						},
						{
							val:'女',
							active:true
						}
					]
				},
				{
					type:9,
					title:"主要標題",
					val:'0000-00-00',
				},
				{
					type:10,
					title:"主要標題",
					val:'选择地址',
					short:true
				},
				{
					type:11,
					title:"到账账号",
					sub:'绑定支付宝',
					short:true
				},
				{
					type:12,
					title:"验证码",
					sub:'手机验证码',
					short:true
				},
			],
			group1:[
				{
					type:2,
					title:"清理缓存",
					sub:'153.25MB'
				},
				{
					type:1,
					title:"用户协议"
				},
				{
					type:1,
					title:"隐私协议"
				},
				{
					type:2,
					title:"检测版本",
					sub:'v1.0.0',
					light:true
				}
			],
			group:[
				{
					type:1,
					title:"绑定淘宝号"
				},
				{
					type:1,
					title:"绑定支付宝",
					mute:true
				},
				{
					type:1,
					title:"绑定上级",
					mute:true
				},
				{
					type:1,
					title:"修改手机号"
				},
				{
					type:1,
					title:"地址管理"
				},
				{
					type:1,
					title:"修改密码"
				},
				{
					type:1,
					title:"注销账号"
				},
			]
		}
	},
	methods:{
		getInput(val){
			console.log(val)
			if(val.id=='s1'){
				if(!!val.val){
					this.group2[6].pass= 0;
				}
				else{
					this.group2[6].pass= 1;
				}
			}
		},
		getSelector(val){
			console.log(val.val)
		}
	}
}