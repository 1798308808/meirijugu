<template>
	<view>
		<slot name="header"></slot>
		<list ref="child_list" class="cts-order" :style="{height:`${h}px`}" @loadmore="loadMoreData">
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
		props:['id'],
		methods:{
			loadMoreData(){
				if(!this.loadmore){
					this.$emit('returnLoadmore',this.id)
				}
			},
			reset(){
				this.$refs['child_list'].resetLoadmore()
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
			this.h = s - st - n -uni.upx2px(80) - uni.upx2px(90) -uni.upx2px(20);
		}
	}
</script>

<style lang="scss" scoped>
	.cts-order{
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		position: relative;
	}
	
</style>
