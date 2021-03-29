<template>
	<!-- fixFreezing為true時，下拉刷新會發生異常，原因不明，建議非嵌套列表不要為true -->
	<list :id="page_id" show-scrollbar="false" ref="ccft" @loadmore="loadMore"  :bounce="true" :fixFreezing="!!fixFreezing?fixFreezing:false" v-if="scroll" :style="{width:'750rpx',height:`${w}px`,position:'relative'}" @scroll="changeTitleAndAvatarStatus">
		<slot></slot>
	</list>
	<view v-else :style="{width:'750rpx',height:`${w}px`,position:'relative'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				w:''
			};
		},
		props: ['scroll','needMonitor','page_id','needLoadmore','fixFreezing'],
		created(){
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
			if(pl=='ios'){
				this.w = s - tb;
				return;
			}
			this.w = p - tb;
		},
		methods:{
			changeTitleAndAvatarStatus(e) {
				if(!this.needMonitor)return;
				uni.$emit(this.needMonitor, {
					y: e.contentOffset.y
				})
			},
			// 加载更多
			loadMore(){
				uni.$emit(this.needLoadmore)
			},
			reset(){
				this.$refs['ccft'].resetLoadmore();
			}
		}
	}
</script>
