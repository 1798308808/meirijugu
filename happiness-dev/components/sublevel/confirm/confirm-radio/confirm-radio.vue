<template>
	<view class="cts-confirm-radio cts-basic-horizontal-padding cts-flex-dir cts-flex-jfs cts-flex-ac" @tap="select">
		<custom-radio :active="active"></custom-radio>
		<text class="cts-confirm-radio-main">{{title}}</text>
		<text v-if="!!sub" class="cts-confirm-radio-sub">{{sub}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			select(){
				this.$emit('returnCheck',{id:this.id})
			}
		},
		props:['title','sub','active','id']
	}
</script>

<style lang="scss" scoped>
	.cts-confirm-radio{
		width: 710rpx;
		height: 80rpx;
		&-main{
			margin-left: $cts-basic-padding;
			font-weight: 700;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-sub{
			margin-left: $cts-middle-padding;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
	}
</style>
