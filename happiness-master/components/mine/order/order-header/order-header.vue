<template>
	<view class="cts-order-header cts-flex-jc cts-flex-ac">
		<view class="cts-order-header-search-box cts-basic-horizontal-padding cts-flex-ac cts-flex-jsb cts-flex-dir">
			<input type="text" class="cts-order-header-search-search cts-basic-horizontal-padding" :placeholder="!!holder?holder:'搜索订单号'"
			 return-key-type="search" @input="search" v-model="val">
			<text class="cts-order-header-search-txt" @tap="donoth">查询</text>
		</view>
		<view class="cts-order-switcher cts-basic-horizontal-padding cts-flex-dir cts-flex-jsa cts-flex-ac">
			<view class="cts-order-switcher-item cts-flex-jc cts-flex-ac" v-for="(item,index) in order_title" :key="item.title" @tap="select(index)"
			 :style="{width:w+'px'}">
				<text :class="[item.active?'cts-order-switcher-txt-active':'cts-order-switcher-txt-mute']">{{item.title}}</text>
				<view v-if="index!=order_title.length-1" class="cts-order-switcher-border"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				w: '',
			};
		},
		props:['order_title','val'],
		mounted() {
			// 初始化订单状态
			uni.$emit('returnOrderStatus',0)
			setTimeout(()=>{
				this.w = Math.floor(uni.upx2px(750) / this.order_title.length)
			},50)
		},
		methods: {
			select(index) {
				uni.$emit('returnOrderStatus',index)
				let group = this.order_title.map(item=>item);
				group.forEach((item, i) => {
					if (i == index) {
						item.active = true;
					} else {
						item.active = false;
					}
				})
				this.$emit('update:order_title',group)
			},
			search(e){
				this.$emit('returnSearchResult',e.detail.value)
			},
			donoth(){
				uni.hideKeyboard();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-order-switcher {
		width: $cts-screen-full;
		background-color: $cts-all-white;

		&-item {
			position: relative;
			height: 80rpx;
		}

		&-border {
			width: 1px;
			height: 30rpx;
			position: absolute;
			right: 0;
			top: 25rpx;
			background-color: $cts-soso-grey;
		}

		&-txt-mute {
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}

		&-txt-active {
			font-size: $cts-basic-font;
			color: $cts-main-brown;
		}
	}

	.cts-order-header {
		width: $cts-screen-full;
		background-color: $cts-all-white;

		&-search-box {
			width: $cts-screen-full;
			height: 90rpx;
		}

		&-search-txt {
			width: 90rpx;
			text-align: right;
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}

		&-search-search {
			width: 620rpx;
			height: 60rpx;
			font-size: $cts-middle-font;
			background-color: $cts-light-grey;
			border-radius: $cts-big-padding;
		}
	}
</style>
