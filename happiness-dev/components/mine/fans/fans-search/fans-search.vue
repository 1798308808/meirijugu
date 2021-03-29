<template>
	<view class="cts-fans-search cts-basic-horizontal-padding">
		<view class="cts-fans-search-box cts-flex-dir cts-flex-jsb cts-flex-ac cts-basic-horizontal-padding">
			<input type="text" class="cts-fans-search-input cts-basic-horizontal-padding" @input="input"
			:placeholder="'请输入搜索关键词'" return-key-type="search"
			>
			<text class="cts-fans-search-txt">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			input(e){
				this.$emit('returnInput',e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-fans-search{
		margin-top: $cts-basic-padding;
		width: $cts-screen-full;
		&-box{
			width: 710rpx;
			height: 100rpx;
			border-top-left-radius:$cts-middle-padding;
			border-bottom-left-radius:$cts-middle-padding;
			background-color: $cts-all-white;
		}
		&-input{
			width: 570rpx;
			height: 60rpx;
			background-color: $cts-light-grey;
			border-radius: $cts-big-padding;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-txt{
			width: 100rpx;
			text-align: right;
			width: $cts-basic-height;
			font-size: $cts-basic-font;
			color: $cts-middle-grey;
		}
	}
</style>
