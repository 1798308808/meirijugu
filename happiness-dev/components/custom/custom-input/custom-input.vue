<template>
	<view class="cts-input-box cts-basic-horizontal-padding cts-flex-jc cts-flex-ac">
		<input class="cts-input cts-basic-horizontal-padding" :type="type" @input="syncVal" :value="val" :placeholder="pl">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			syncVal(e){
				let val = e.detail.value;
				this.$emit('update:val',val)
			}
		},
		props:['pl','type','val']
	}
</script>

<style lang="scss"scoped>
	.cts-input{
		margin-top: $cts-basic-padding;
		width: 710rpx;
		height: 80rpx;
		font-size: $cts-basic-font;
		background-color: $cts-light-grey;
		&-box{
			width: $cts-screen-full;
			height: 100rpx;
			border-radius: $cts-middle-padding;
		}
	}
</style>
