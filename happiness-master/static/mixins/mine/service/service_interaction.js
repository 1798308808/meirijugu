export const service_interaction = {
	data(){
		return {
			cover:true
		}
	},
	methods:{
		copyCode(data){
			uni.setClipboardData({
			    data:this.weixin_account,
			    success: function () {
					uni.hideToast();
					plus.nativeUI.toast('微信账号已复制到剪贴板');
					plus.runtime.openURL("weixin://");
			    },
				fail() {
					uni.hideToast();
				},
				complete() {
					uni.hideToast();
				}
			});
		}
	}
}