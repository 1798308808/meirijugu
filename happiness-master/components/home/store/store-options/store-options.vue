<template>
	<scroller class="cts-store-options cts-basic-full-padding cts-flex-dir cts-flex-jfs cts-flex-afs" scroll-direction="horizontal">
		<vieiw class="cts-store-options-item cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="index='oopt'">
			<image class="cts-store-options-img" lazy-load="true" :src="item.thumb" mode="aspectFit"></image>
			<text class="cts-store-options-txt">{{item.name}}</text>
		</vieiw>
	</scroller>
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
	.cts-store-options{
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-item{
			width: 150rpx;
		}
		&-img{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background-color: $cts-soso-grey;
		}
		&-txt{
			text-overflow: ellipsis;
			lines:1;
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
			margin-top: $cts-basic-padding;
		}
	}
</style>
