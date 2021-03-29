import com from '@/static/js/common.js'
export const homePublicMixins ={
	data() {
		return {
			group:[]
		};
	},
	watch:{
		group_f:{
			handler:function(val){
				com.updateComponentData(this,'group',val)
			},
			deep:true
		},
	},
	props:['group_f'],
	mounted() {
		setTimeout(()=>{
			com.updateComponentData(this,'group',this.group_f)
		},50)
	}
}