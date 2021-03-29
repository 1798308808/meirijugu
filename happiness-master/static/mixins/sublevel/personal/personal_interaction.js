import com from '@/static/js/common.js'
export const personal_interaction = {
	data(){
		return{
			cover:false
		}
	},
	methods:{
		// 修改头像
		async changeAvatar(){
			let img = await com.fetchImage();
			if(img.tempFilePaths){
				this.temp_avatar = img.tempFilePaths[0];
				this.uploadAvatar(img.tempFilePaths[0])
			}
		}
	}
}