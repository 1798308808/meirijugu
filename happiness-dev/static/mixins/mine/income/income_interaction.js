import com from '@/static/js/common.js'
export const income_interaction = {
	data(){
		return {
			cover:false,
			curve_show:true,
			timer:null
		}
	},
	methods:{
		getOptions(index){
			console.log(index)
			com.pageNavigation('/pages/sublevel/record/record')
		},
		// 当前收益统计面板选项
		getCurrentColumn(index){
			if(index==2){
				this.current_display_data = this.weekly_data
			}
			else if(index==3){
				this.current_display_data = this.monthly_data
			}
			else{}
			// ios兼容画布层级
			if(this.$store.state.common.platform=='ios'){
				this.curve_show=false;
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.curve_show=true;
				},100)
				return;
			}
			
		}
	},
	onUpload(){
		uni.$off('pageScroll')
	},
	onReady(){
		uni.$on('pageScroll',res=>{
			if(res.detail.contentOffset.y<-50){
				this.status_color='#FF6F61'
				this.color="#FF6F61"
			}
			else{
				this.icon='/static/back_w.png'
				this.font_color='#fff'
				this.status_color='rgba(0,0,0,0)'
				this.color="rgba(255,255,255,0)"
			}
		})
	}
}