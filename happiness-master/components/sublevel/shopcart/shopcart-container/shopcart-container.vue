<template>
	<view class="cts-shopcart cts-basic-full-padding cts-flex-ac cts-flex-jc" :style="{height:h+'px',top:t+'px'}">
		<list class="cts-shopcart-box cts-flex-ac cts-flex-jc" :style="{height:h+'px'}"
		show-scrollbar="false">
			<slot></slot>
		</list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				t:''
			};
		},
		created() {
			let [s,n,st] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
			]
			this.t = n + st +uni.upx2px(20);
			this.h = s - n - st - uni.upx2px(140);
		}
	}
</script>

<style lang="scss" scoped>
	.cts-shopcart{
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
		}
	}
</style>
