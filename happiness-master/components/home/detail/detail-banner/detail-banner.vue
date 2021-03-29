<template>
	<swiper class="cts-detail" :indicator-dots="true" :autoplay="true" :interval="5000" circular>
		<swiper-item v-for="(item,index) in group" :key="index+'thumb'" @tap="prev">
			<custom-pic-loading class="cts-detail-img" :img="item.src"></custom-pic-loading>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			prev() {
				uni.previewImage({
					urls: this.group.map(item=>item.src)
				});
			}
		},
		props: ['group']
	}
</script>

<style lang="scss" scoped>
	.cts-detail {
		width: $cts-screen-full;
		height: $cts-screen-full;

		&-img {
			width: $cts-screen-full;
			height: $cts-screen-full;
		}
	}
</style>
