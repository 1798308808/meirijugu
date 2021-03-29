<template>
	<view class="cts-settings cts-flex-ac cts-flex-jc">
		<view v-if="!!title" class="cts-settings-title cts-basic-horizontal-padding cts-flex-afs cts-flex-jc">
			<text class="cts-settings-title-txt">{{title}}</text>
		</view>
		<view v-else class="cts-empty-column cts-settings-empty"></view>
		<slot></slot>
		<view v-if="btn" class="cts-settings-box cts-flex-jc cts-flex-ac" @tap="exit">
			<custom-button type="2" :text="text?text:'退出登录'" :width="300" :shadow="true"></custom-button>
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
			exit(){
				this.$emit('returnTapping',{msg:'ok'})
			},
		},
		props:['btn','text','title']
	}
</script>

<style lang="scss" scoped>
	.cts-settings{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-empty{
			width: $cts-screen-full;
			background-color: $cts-light-grey;
		}
		&-box{
			width: $cts-screen-full;
			height: 200rpx;
		}
		&-title{
			width: $cts-screen-full;
			height: 80rpx;
			background-color: $cts-light-grey;
		}
		&-title-txt{
			font-size: $cts-middle-font;
			color: $cts-light-dark;
		}
	}
</style>
