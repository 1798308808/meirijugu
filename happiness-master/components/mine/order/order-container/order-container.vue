<template>
	<view>
		<slot name="header"></slot>
		<list class="cts-order" :style="{height:`${h}px`}" @loadmore="loadmore" ref="con">
			<slot name="body"></slot>
		</list>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				h:''
			};
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
			this.h = s - st - n -uni.upx2px(90) - uni.upx2px(170);
		},
		methods:{
			loadmore(){
				this.$emit('returnLoadmore',{msg:'ok'})
			},
			listResetLoadmore(){
				this.$refs.con.resetLoadmore()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-order{
		width: $cts-screen-full;
		position: relative;
	}
	
</style>
