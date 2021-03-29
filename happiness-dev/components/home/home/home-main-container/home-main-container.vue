<template>
	<view class="cts-home-main" :style="{height:`${h}px`,top:`${t}px`}">
		<list :style="{height:`${h}px`}" @loadmore="loadMoreGoods" loadmoreoffset="5" show-scrollbar="false"    ref="mylist">
			<refresh @refresh="onrefresh"  :display="refresh ? 'show' : 'hide'" class="cts-home-main-refresh cts-flex-ac cts-flex-jc">
				<loading-indicator class="cts-home-main-indicator" :animating="true" ></loading-indicator>
			</refresh>
			<slot></slot>
			<cell>
				<custom-loadmore :show_f="loadmore" :nomore_f="nomore"></custom-loadmore>
			</cell>
		</list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				t:'',
			};
		},
		props:['loadmore','nomore','refresh'],
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
			this.h = s - st - n*2 -tb;
			this.t = st + n*2;
		},
		methods:{
			onrefresh(){
				this.$emit('returnRefreshHome')
			},
			loadMoreGoods(){
				console.log('加载更多触发')
				uni.$emit('refresh_home')
			},
			resetLoadMoreGoods(){
				this.$refs['mylist'].resetLoadmore();
			}
		},
	}
</script>

<style lang="scss" scoped>
	.cts-home-main{
		width: $cts-screen-full;
		position: absolute;
		left: 0;

		&-indicator{
			height: 50rpx;
			width: 50rpx;
			color: $cts-all-white;
		}
		&-refresh{
			width: $cts-screen-full;
			height: $cts-basic-height;
		}
	}
	.empty{
		width: $cts-screen-full;
		height: $cts-basic-padding;
		background-color: $cts-light-grey;
	}
</style>
