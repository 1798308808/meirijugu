<template>
	<web @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError" class="web" :src="src" :style="{height:h+'px',top:t+'px'}"></web>
</template>

<script>
	export default {
		data() {
			return {
				h: '',
				t: '',
				platform:''
			};
		},
		methods: {
			onPageStart(e) {
				if(this.platform=='ios')plus.nativeUI.showWaiting();
				console.log('页面开始加载啊')
				// page start load
			},
			onPageFinish(e) {
				console.log('页面加载完毕', e)
				plus.nativeUI.closeWaiting();
				// page finish load
			},
			onError(e) {
				console.log('页面加载失败', e)
				// page load error
			}
		},
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.h = s - n - st;
			this.t = n + st;
			this.platform = pl
		},
		props: ['src']
	}
</script>

<style lang="scss" scoped>
	.web {
		position: absolute;
		left: 0;
		width: $cts-screen-full;
	}
</style>
