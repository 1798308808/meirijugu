<template>
	<view class="cts-card" @tap="tapped">
		<custom-pic-loading class="cts-card-img" :img="img" :b_radius="20"></custom-pic-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			tapped(){
				this.$emit('returnTapped',this.url)
			}
		},
		props:['img','url']
	}
</script>

<style lang="scss" scoped>
	.cts-card{
		position: relative;
		width: 710rpx;
		height: 230rpx;
		margin-bottom: $cts-middle-padding;
		&-img{
			width: 710rpx;
			height: 200rpx;
		}
	}
</style>
