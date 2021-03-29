<template>
	<view class="cts-basic-horizontal-padding cts-flex-dir cts-flex-afs" :class="[full?'cts-info-long':'cts-info-short',between?'cts-flex-jsb':'cts-flex-jfs']">
		<text class="cts-info-main" :class="[color&&!between?'cts-info-dark':'']">{{title}}</text>
		<text class="cts-info-sub" :class="[color?'cts-info-dark':'']">{{sub}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','sub','color','full','between']
	}
</script>

<style lang="scss" scoped>
	.cts-info{
		&-dark{
			color: $cts-light-dark!important;
			margin-bottom: $cts-middle-padding;
		}
		&-short{
			width: 710rpx;
			margin-bottom: $cts-middle-padding;
		}
		&-long{
			width: $cts-screen-full;
		}
		&-main{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
			margin-right: $cts-basic-padding;
		}
		&-sub{
			max-width: 550rpx;
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
		}
	}
</style>
