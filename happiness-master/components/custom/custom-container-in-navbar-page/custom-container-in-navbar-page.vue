<template>
	<view class="cts-basic-container cts-flex-ac" :style="{height:fullscreen?fh+'px':h+'px',top:fullscreen?'0px':t+'px'}">
		<list v-if="performance" class="cts-basic-container-list cts-flex-ac" show-scrollbar="false" :style="{height:fullscreen?fh+'px':h+'px'}" @scroll="scrolling"  @loadmore="loadMoreData" ref="mylist">
			<refresh @refresh="onrefresh" @pullingdown="startRefresh" v-if="needRefresh"
			:display="refreshing ? 'show' : 'hide'" class="cts-refresh cts-flex-ac cts-flex-jc" :style="{backgroundColor:refreshBg}">
				<loading-indicator :style="{color:!!refreshColor?refreshColor:'#ffffff'}" class="cts-refresh-indicator" :animating="true"></loading-indicator>
			</refresh>
			<slot></slot>
			<cell recycle="false">
				<custom-loadmore v-if="needLoadMore" :show_f="loadMoreFlag" :nomore_f="nomoreFlag"></custom-loadmore>
			</cell>
		</list>
		<scroller v-else class="cts-basic-container-list cts-flex-ac" show-scrollbar="false" :style="{height:fullscreen?fh+'px':h+'px'}" @scroll="scrolling" loadmoreoffset="5" @loadmore="loadMoreData" ref="mylist" >
			<refresh @refresh="onrefresh" @pullingdown="startRefresh" v-if="needRefresh"
			:display="refreshing ? 'show' : 'hide'" class="cts-refresh cts-flex-ac cts-flex-jc" :style="{backgroundColor:refreshBg}">
				<loading-indicator :style="{color:!!refreshColor?refreshColor:'#ffffff'}" class="cts-refresh-indicator" :animating="true"></loading-indicator>
			</refresh>
			<slot></slot>
			<custom-loadmore v-if="needLoadMore" :show_f="loadMoreFlag" :nomore_f="nomoreFlag"></custom-loadmore>
		</scroller>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				t:'',
				fh:'',
			};
		},
		created() {
			let [s,n,st] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.fh = s
			this.h = s - st - n
			this.t = n + st
		},
		methods:{
			loadMoreData(){
				if(!!this.needLoadMore){
					uni.$emit(this.needLoadMore)
				}
			},
			resetLoad(){
				this.$refs.mylist.resetLoadmore()
			},
			scrolling(e){
				if(!this.needMonitor)return;
				uni.$emit('pageScroll',{detail:e})
			},
			onrefresh() {
				this.$emit('update:refreshing',true)
				this.$emit('userRefreshing')
			},
			startRefresh(){
				this.$emit('startRefresh','ok')
			}
		},
		props:['performance','fullscreen','needMonitor','needRefresh','refreshBg','refreshColor','refreshing','needLoadMore','loadMoreFlag','nomoreFlag']
	}
</script>

<style lang="scss" scoped>
	.cts-basic-container{
		width: $cts-screen-full;
		position: absolute;
		left: 0;
		
		&-list{
			width: $cts-screen-full;
			position: relative;
		}
	}
	.cts-refresh{
		width: $cts-screen-full;
		height: $cts-basic-height*1.5;
		
		&-indicator {
			height: 50rpx;
			width: 50rpx;
		}
	}
</style>
