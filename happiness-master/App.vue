<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// uni.removeStorageSync('token');
		plus.screen.lockOrientation('portrait-primary');
		this.getNetworkStatus()
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods:{
		getNetworkStatus(){
			uni.getNetworkType({
			    success: function (res) {
					let text = '';
					switch(res.networkType){
						case "wifi": text = "wifi 网络";break;
						case "2g": text = "2g 网络";break;
						case "3g": text = "3g 网络";break;
						case "4g": text = "4g 网络";break;
						case "ethernet": text = "有线网络";break;
						case "unknown": text = "Android 下不常见的网络类型";break;
						case "none":
							text = "无网络"
							uni.showModal({
							    title: '注意',
							    content: '网络走丢了，请打开数据或连接wifi再来看看吧',
							});
						;break;
					}
			        console.log('处于'+text+'环境');
					
			    }
			});
			uni.onNetworkStatusChange(function (res) {
			    console.log(res.isConnected);
			    console.log(res.networkType);
				
				// 断网
				if(res.networkType=='none'){
					uni.showModal({
					    title: '注意',
					    content: '网络走丢了，请打开数据或连接wifi再来看看吧',
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */



</style>
