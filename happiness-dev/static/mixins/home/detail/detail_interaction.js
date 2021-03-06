import com from '@/static/js/common.js'
import htmlParser from '@/static/js/html-parser'
const dom = weex.requireModule('dom');

// 处理富文本图片
function parseImgs(nodes) {
	nodes.forEach(node => {
		if (
			node.name === 'img' &&
			node.attrs &&
			node.attrs['data-img-size-val']
		) {
			const sizes = node.attrs['data-img-size-val'].split(',')
			const width = uni.upx2px(720 * 0.9)
			const height = parseInt(width * (sizes[1] / sizes[0]))
			node.attrs.style = `width:${width};height:${height};`
		}
		if (Array.isArray(node.children)) {
			parseImgs(node.children)
		}
	})
	return nodes
}
export const detail_interaction = {
	data() {
		return {
			// 遮罩
			cover: true,
			// 导航节点位置
			dom: {
				banner: null,
				detail: null,
				guess: null
			},
			show_navbar: false,
			// 当前商品详情区域 0商品简要 1商品评价 2商品详情
			current_area: 0,
			// 收藏状态
			collect: false,
			// 收藏加载
			collect_loading: false
		}
	},
	methods: {
		// 时间戳格式化
		formatDate(date, format = 'YYYY-MM-DD') {
			date = new Date(date);
			let config = {
				YYYY: date.getFullYear(),
				MM: date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
				DD: date.getDate(),
				HH: date.getHours() > 10 ? date.getHours() : '0' + (date.getHours()),
				mm: date.getMinutes(),
				ss: date.getSeconds()
			}
			for (const key in config) {
				format = format.replace(key, config[key])
			}
			return format
		},
		// 弹出自分享框
		getShare() {
			this.$refs.popup.open()
		},
		// 点击导航栏跳转到指定位置
		scrollTo(index) {
			switch (index) {
				case 0:
					dom.scrollToElement(this.dom.banner);
					break;
				case 1:
					dom.scrollToElement(this.dom.detail);
					break;
				case 2:
					dom.scrollToElement(this.dom.guess);
					break;
			}
		},
		// 监控当前显示区域
		show(index) {
			if(this.cover)return;
			this.current_area = index;
		},
		// 监听导航栏隐藏显示
		watchScroll(res) {
			let y = res.detail.contentOffset.y;
			if (y < -100) {
				this.show_navbar = true
			} else {
				this.show_navbar = false
			}
		},
		// 监听导航栏跳转位置
		watchNavBar(res) {
			this.scrollTo(res.index)
		},
		// 格式化富文本
		initRichText() {
			let content = htmlParser(this.nodes)
			parseImgs(content)
			this.nodes = content
		},
		// 收藏按钮点击
		starActive() {
			let token = uni.getStorageSync('token').val
			if (this.collect_loading) return;
			this.collect_loading = true;
			let url = ''
			
			if(this.collect){
				switch(this.platform.type){
					case 1:url = 'http://www.jufu-unique.com/app.php/TbGoodsCollect/cancelCollect';break;
					case 2:url = 'http://www.jufu-unique.com/app.php/JingdongCollect/cancelCollect';break;
					case 3:url = 'http://www.jufu-unique.com/app.php/PddCollect/cancelCollect';break;
					case 4:url = 'http://www.jufu-unique.com/app.php/VipCollect/cancelCollect' ;break;
				}
				this.$set(this.request_task_group[5],'url',url)
				this.$set(this.request_task_group[5],'data',{goods_id:this.current_id,token})
				this.$set(this.request_task_group[5],'task',com.createRequestTask(this.request_task_group[5]))
			}
			else{
				switch(this.platform.type){
					case 1:url = 'http://www.jufu-unique.com/app.php/TbGoodsCollect/collect';break;
					case 2:url = 'http://www.jufu-unique.com/app.php/JingdongCollect/collect';break;
					case 3:url = 'http://www.jufu-unique.com/app.php/PddCollect/collect';break;
					case 4:url = 'http://www.jufu-unique.com/app.php/VipCollect/Collect' ;break;
				}
				this.$set(this.request_task_group[4],'url',url)
				this.$set(this.request_task_group[4],'data',{goods_id:this.current_id,token})
				this.$set(this.request_task_group[4],'task',com.createRequestTask(this.request_task_group[4]))
			}
		},
		// 自购按钮点击
		getBuy(){
			let pname;
			if(this.platform.type){
				switch(this.platform.type){
					case 1:pname = 'com.taobao.taobao';break;
					case 2:pname = 'com.jingdong.app.mall';break;
					case 3:pname = 'com.xunmeng.pinduoduo';break;
					case 4:pname = 'com.achievo.vipshop' ;break;
				}
			}
			else{
				pname = 'com.taobao.taobao'
			}
			plus.runtime.launchApplication({
					pname,
				},
				function(e) {
					console.log('Open system default browser failed: ' + e.message);
				}
			);
			// com.showGlobalPopUpWindows('bind_store_account')
		}
	},
	onReady() {
		com.global_watcher_regist('navbar_tap', this.watchNavBar)
		com.global_watcher_regist('pageScroll', this.watchScroll)
	}
}
