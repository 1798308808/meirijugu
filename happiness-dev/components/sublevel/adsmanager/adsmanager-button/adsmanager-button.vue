<template>
	<view class="cts-ads-button cts-basic-full-padding" @tap="tapped">
		<custom-button :type="2" :text="'添加收货地址'" :width="400"></custom-button>
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
				this.$emit('returnNewAds')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-ads-button{
		position: absolute;
		left: 0;
		bottom: 0;
		width: $cts-screen-full;
	}
</style>
