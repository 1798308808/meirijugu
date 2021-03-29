import com from '@/static/js/common.js'
export const ua_interaction ={
	data(){
		return {
			downloading:false,
			// 加载中
			loading:true
		}
	},
	methods:{
		// 更新app
		updateApplication(){
			if(this.$store.state.common.platform!='ios'){
				plus.runtime.openWeb(this.download_url);
			}
			else{
				plus.nativeUI.toast('未在苹果上架，敬请期待')
			}
		},
		// 检测更新
		checkIfNeedUpdate(){
			com.showGlobalPopUpWindows('update_application');
			this.loading=true
			this.isAutoPopOut = [false]
			this.fetchApplicationUpdateInfo()
		},
		// 忽略当前版本
		ignoreCurrentVersion(){
			uni.setStorageSync('ignore_version',this.current_version)
			this.$refs.box.close()
		},
		// 检测是否需要自动弹出
		ifNeedAutoPop(is_auto,res){
			console.log('是否为自动弹出',is_auto)
			if(is_auto){
				let ignore_version = uni.getStorageSync('ignore_version')
				console.log('忽略版本',ignore_version)
				console.log('新版本',res.data.data.version)
				if(res.data.data.version==ignore_version){
					return
				}
				else{
					this.renderUpdateInfo(res)
					com.showGlobalPopUpWindows('update_application')
				}
			}
			else{
				this.renderUpdateInfo(res)
				com.showGlobalPopUpWindows('update_application')
			}
			
		},
		close(){
			uni.getSubNVueById('update_application').hide();
		}
	},
	mounted(){
		setTimeout(()=>{
			com.global_watcher_regist('update_listener',this.checkIfNeedUpdate)
			this.fetchApplicationUpdateInfo()
		},3000)
	}
}