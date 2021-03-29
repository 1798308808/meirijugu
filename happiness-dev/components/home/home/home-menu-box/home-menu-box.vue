<template>
	<view class="cts-border-top-solid-drawer cts-flex-dir cts-basic-full-padding cts-flex-jfs cts-flex-afs cts-flex-wrap cts-scroller-menu" elevation="2px" :style="{top:t+'px'}">
		<view class="cts-scroller-menu-item cts-padding-mtxt cts-flex-ac cts-flex-jc" v-for="(item,index) in menu_group" :key="item.id" @tap="itemTapped(index)">
			<text class="cts-scroller-menu-txt cts-text-overflow-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		methods:{
			itemTapped(index){
				this.$emit('returnMenuItem',{index})
			}
		},
		props:['menu_group'],
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
			this.t = n + st  +uni.upx2px(100)
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(mtxt,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	@include createBorder(drawer,top,$cts-soso-grey,solid,1px)
	.cts-scroller{
		&-menu{
			position: absolute;
			left: 0;
			width: $cts-screen-full;
			background-color: $cts-all-white;
			box-shadow: 0 10px 3px 1px rgba(0,0,0,.1);
			&-item{
				width: 177.5rpx;
				height: 80rpx;
			}
			&-txt{
				width: 147.5rpx;
				text-align: center;
				line-height: 50rpx;
				height: 50rpx;
				background-color: $cts-light-grey;
				color: $cts-light-dark;
				font-size: $cts-basic-font;
				border-radius: 50%;
			}
		}
	}
</style>
