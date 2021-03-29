<template>
	<swiper class="cts-platform-banner cts-flex-ac cts-flex-jc" :autoplay="true" :interval="5000" circular>
		<swiper-item  v-for="(item,index) in group_f" :key="item.id">
			<custom-pic-loading class="cts-platform-banner-image" :img="item.img"></custom-pic-loading>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		methods:{

		},
		props:['group_f']
	}
</script>

<style lang="scss" scoped>
	.cts-platform-banner{
		width: 710rpx;
		margin-top: $cts-basic-padding;
		&-image{
			width: 710rpx;
			height: 295rpx;
		}
	}
</style>
