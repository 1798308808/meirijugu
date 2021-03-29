import com from '@/static/js/common.js'
export const search_interaction = {
	data() {
		return {
			val: ''
		}
	},
	methods: {
		// 导航栏操作
		navbarWather(res) {
			switch (res.position) {
				case 0:
					;
					break;
				case 1:
					;
					break;
				case 2:
					if(!!this.val){
						this.addToStorageSearchHistory(this.val)
						com.pageNavigation('/pages/store/searchResult/searchResult', null, {
							keywords: this.val
						});
					}
				break;
			}
		},
		// 获取点击的关键词
		getKeywords(keywords) {
			this.addToStorageSearchHistory(keywords)
			com.pageNavigation('/pages/store/searchResult/searchResult', null, {
				keywords
			})
		},
		// 添加搜索历史记录
		addToStorageSearchHistory(val) {
			let arr = uni.getStorageSync('search_history') || '[]'
			arr = JSON.parse(arr)
			arr.unshift(val)
			arr = [...new Set(arr)]
			arr.length=arr.length>20?20:arr.length;
			console.log(arr)
			uni.setStorageSync('search_history', JSON.stringify(arr));
		},
		// 获取搜索历史记录
		fetchStorageHistory() {
			let arr = uni.getStorageSync('search_history') || '[]'
			this.$set(this.group[1], 'options', JSON.parse(arr))
		},
		// 清空搜索历史记录
		clearHistory() {
			uni.removeStorageSync('search_history');
			this.$set(this.group[1], 'options', [])
		}
	},
	onLoad() {
		com.setStatusBarColor(true)
	},
	onShow() {
		com.global_watcher_regist('navbarTapHandler', this.navbarWather)
		this.fetchStorageHistory()
	}
}
