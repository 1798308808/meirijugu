<template>
	<view>
		<slot name="head"></slot>
		<list class="cts-order" :style="{height:`${h}px`}" ref="ctn" @loadmore="loadMoreData">
			<slot name="refresh"></slot>
			<slot name="body"></slot>
			<cell>
				<custom-loadmore :show_f="loadmore" :nomore_f="nomore"></custom-loadmore>
			</cell>
		</list>
	</view>
	
</template>

<script>
	export default {
		props:['loadmore','nomore','id'],
		data() {
			return {
				h:''
			};
		},
		methods:{
			loadMoreData(){
				if(!this.loadmore){
					this.$emit('returnLoadmore',this.id)
				}
			},
			reset(){
				this.$refs.ctn.resetLoadmore()
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
			this.h = s - st - n -uni.upx2px(60) - uni.upx2px(90);
		}
	}
</script>

<style lang="scss" scoped>
	.cts-order{
		width: $cts-screen-full;
		position: relative;
	}
	
</style>
