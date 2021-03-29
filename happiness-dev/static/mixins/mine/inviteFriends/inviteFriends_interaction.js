import permision from "@/js_sdk/wa-permission/permission.js"
import com from '@/static/js/common.js'
export const invite_interaction = {
	data(){
		return {
			cover:false,
			current_img:0
		}
	},
	onShow(){
		plus.nativeUI.closeWaiting();
	},
	methods:{
		// 复制分享链接
		copyShareLinks(){
			uni.setClipboardData({
			    data: 'http://www.jufu-unique.com/wap.php/Index/down/inviteCode/DQJ7FH',
			    success: function () {
					uni.hideToast();
					plus.nativeUI.toast('已复制',{verticalAlign:'center'});
			    },
				fail() {
					uni.hideToast();
				},
				complete() {
					uni.hideToast();
				}
			});
		},
		// 打开分享面板
		openSharePanel(){
			this.$refs.popup.open()
		},
		// 选择分享选项
		// @params index(Number) 从左到右 0~3
		getShareOptions(index){
			switch(index){
				case 0:this.shareThisToPlatform(0);break;
				case 1:this.shareThisToPlatform(1);break;
				case 2:this.shareThisToPlatform(2);break;
				case 3:this.saveImg();break;
			}
		},
		// 获取当前显示banner索引
		getCurrent(index){
			this.current_img = index;
		},
		// 分享
		// @params provider(String) 供应商
		// @params scene(String) 场景 
		// @params image(String) 图片地址
		share(provider,scene,image){
			plus.nativeUI.showWaiting()

			if(provider=='qq'){
				// 安卓qq不能分享网络图片
				uni.downloadFile({  
				        url: this.group[this.current_img].src,
				        success: (res) => {  
				            if (res.statusCode == 200) {  
								uni.share({
								    provider,
								    type: 2,
									// 链接若不为空,就会提示要加title,分享自动变成图文
									href:'',
								    imageUrl:res.tempFilePath,
								    success: function (res) {
								        console.log("success:" + JSON.stringify(res));
								    },
								    fail: function (err) {
										console.log(err)
								        plus.nativeUI.toast('分享失败');
								    },
									complete() {
										console.log('分享完毕')
										plus.nativeUI.closeWaiting();
									}
								});
				            }  
				        }  
				    })  
				
			}
			else{
				uni.share({
				    provider,
				    scene: scene?"WXSceneSession":"WXSenceTimeline",
				    type: 2,
					href:'http://www.jufu-unique.com/wap.php/Index/down/inviteCode/DQJ7FH',
				    imageUrl:this.group[this.current_img].src,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
						console.log(err)
				        plus.nativeUI.toast('分享失败');
				    },
					complete() {
						console.log('分享完毕')
						plus.nativeUI.closeWaiting();
					}
				});
			}
		},
		// 保存图片
		saveImg(){
			let path = this.group[this.current_img].src;
			// 无写入权限时，无法保存图片到相册
			if(this.$store.state.common.platform=='android')this.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
			com.savePicToAlbum(this.$store.state.common.platform,path,()=>{this.$refs.popup.close()})
		},
		// 分享到平台
		// @params index 0微信 1朋友圈 2qq
		shareThisToPlatform(index){
			switch(index){
				case 0:
					this.share('weixin',true,this.group[this.current_img].src)
				break;
				case 1:
					this.share('weixin',false,this.group[this.current_img].src)
				break;
				case 2:
					this.share('qq',true,this.group[this.current_img].src)
				break;
			}
		},
		// 安卓权限获取
		async requestAndroidPermission(permisionID) {
			var result = await permision.requestAndroidPermission(permisionID)
			var strStatus
			if (result!= 1){
				plus.nativeUI.confirm("无写入文件权限将无法正常使用保存图片功能，请在系统设置中授权", function(e){});
			}
		},
	}
}