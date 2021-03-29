<template>
	<swiper class="cts-nine" :indicator-dots="true" :autoplay="true" :interval="8000" >
		<swiper-item v-for="(item,index) in group" :key="item.id">
			<custom-pic-loading class="cts-nine-img" :img="item.img"></custom-pic-loading>
		</swiper-item>
	</swiper>
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
	.cts-nine{
		width: $cts-screen-full;
		height: 298rpx;
		&-img{
			width: $cts-screen-full;
			height: 298rpx;
		}
	}
</style>
