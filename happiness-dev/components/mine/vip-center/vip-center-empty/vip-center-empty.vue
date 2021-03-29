<template>
	<view class="cts-vip cts-flex-dir cts-flex-wrap">
		<vip-center-rights-item  v-for="(item,index) in group" :key="item.main"></vip-center-rights-item>
		<view class="cts-vip-box cts-transition-op cts-flex-dir cts-flex-wrap" v-for="(item,index) in group" :key="index+'vip_emp'" :style="{opacity:current==index?1:0}">
			<vip-center-rights-item  v-for="(item1,index1) in item" :key="item1.main" :src="item1.src" :sub="item1.sub" :main="item1.main" :up="item1.up"></vip-center-rights-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['group','current']
	}
</script>

<style lang="scss" scoped>
	@include createTransition(op,opacity,0.25s,'ease-out',null,null)
	.cts-vip{
		width: 710rpx;
		position: relative;
		&-box{
			opacity: 0;
			width: 710rpx;
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
