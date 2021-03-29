export default {
	// 页面相关数据
	pageData:{
		// tabbar高度
		tabbarHeight:uni.upx2px(120),
		// 导航栏高度
		navbarHeight:uni.upx2px(100)
	},
	// 获取页面高度
	getPageHeight(){
		let sysInfo =uni.getSystemInfoSync();
		return sysInfo.screenHeight
	},
	// 获取状态栏高度
	getStatusBarHeight(){
		let sysInfo =uni.getSystemInfoSync();
		return sysInfo.statusBarHeight
	},
	// 获取页面高度(不包括安全区域外)
	getSafeAreaHeight(){
		let sysInfo = uni.getSystemInfoSync();
		return sysInfo.safeArea.bottom
	},
	// 获取页面元素
	getDomElement(el,cb){
		let query = uni.createSelectorQuery().in(this);
		query.select(`#${el}`).boundingClientRect();
		query.exec(data => {
		   cb(data)
		});
	},
	// 获取bindingx元素
	getBindingEle(el){
		if (typeof el === 'string' || typeof el === 'number') return el;
		if (WXEnvironment) {
		    return el.ref;
		} else {
		    return el instanceof HTMLElement ? el : el.$el;
		}
	}
}
