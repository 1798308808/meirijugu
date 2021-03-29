import com from '@/static/js/common.js'
export const userPublicMixins ={
	data() {
		return {
			group:[],
			extra:{}
		};
	},
	watch:{
		group_f:{
			handler:function(val){
				com.updateComponentData(this,'group',val)
			},
			deep:true
		},
		extra_f:{
			handler:function(val){
				com.updateComponentData(this,'extra',val)
			},
			deep:true
		},
	},
	props:['group_f','extra_f'],
	mounted() {
		setTimeout(()=>{
			com.updateComponentData(this,'group',this.group_f)
			if(!!this.extra_f)com.updateComponentData(this,'extra',this.extra_f)
		},50)
	}
}