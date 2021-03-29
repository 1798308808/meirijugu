<template>
	<view class="cts-home cts-basic-full-padding cts-flex-dir cts-flex-jsb cts-flex-ac">
		<custom-pic-loading class="cts-home-side" b_radius="10" :img="group[0]?group[0].img:''"></custom-pic-loading>
		<custom-pic-loading class="cts-home-middle" b_radius="10" :img="group[1]?group[1].img:''"></custom-pic-loading>
		<custom-pic-loading class="cts-home-side" b_radius="10" :img="group[2]?group[2].img:''"></custom-pic-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	.cts-home{
		width: $cts-screen-full;
		&-side{
			width: 150rpx;
			height: 150rpx;
		}
		&-middle{
			height: 150rpx;
			width: 390rpx;
		}
	}
</style>
