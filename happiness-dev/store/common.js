import ctr from '@/static/js/container.js'

const state = {
	navbarHeight:ctr.pageData.navbarHeight,
	tabbarHeight:ctr.pageData.tabbarHeight,
	safeAreaHeight:ctr.getSafeAreaHeight(),
	screenHeight:ctr.getPageHeight(),
	screenWidth:uni.getSystemInfoSync().safeArea.width,
	statusBarHeight:ctr.getStatusBarHeight(),
	platform:uni.getSystemInfoSync().platform
}

const mutations = {

}

const actions = {

}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
