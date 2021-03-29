import Vue from 'vue'
import uniCrazyRouter from "uni-crazy-router";
import needLogin from './needAuthorization.js'

Vue.use(uniCrazyRouter)


uniCrazyRouter.beforeEach(async (to, from ,next)=>{
    // debug
	// console.log('从',from)
	// console.log('到',to)
	// 状态栏颜色主题
	// plus.navigator.setStatusBarStyle("dark");
	let token = !!uni.getStorageSync('token');
	if(needLogin.find(item=>item==to.url)&&!token){
		uniCrazyRouter.afterNotNext(() => {
		    uni.navigateTo({url:"/pages/login/login/login"})
		})
		return;
	}
	else{
		next()
	}
})

uniCrazyRouter.afterEach((to, from)=>{
    // 逻辑代码
	// console.log('这个时候出发了')
})

uniCrazyRouter['on'+'Error']((to, from)=>{
    // 逻辑代码
})