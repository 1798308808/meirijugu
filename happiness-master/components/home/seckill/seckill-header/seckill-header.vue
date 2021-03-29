<template>
	<view class="cts-seckill cts-flex-dir cts-flex-jsa cts-flex-ac">
		<view class="cts-seckill-item cts-flex-ac cts-flex-jc" v-for="(item,index) in group" :key="item.text">
			<text class="cts-seckill-title" :class="item.state==0?'cts-seckill-title-active':''">{{item.text}}</text>
			<text class="cts-seckill-state" v-if="item.state==-1">已结束</text>
			<text class="cts-seckill-state-active cts-padding-active" v-else-if="item.state==0">抢购中</text>
			<text class="cts-seckill-state" v-else="item.state==1">即将开抢</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				group:[
					{
						state:-1,
						text:'0:00'
					},
					{
						state:-1,
						text:'05:00'
					},
					{
						state:0,
						text:'07:00'
					},
					{
						state:1,
						text:'15:00'
					},
					{
						state:1,
						text:'20:00'
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(active,$cts-basic-padding,$cts-basic-padding,$cts-min-padding,$cts-min-padding)
	.cts-seckill{
		width: $cts-screen-full;
		height: 200rpx;
		&-title{
			font-size: $cts-soso-font;
			margin-bottom: $cts-middle-padding;
			color: $cts-light-dark;
		}
		&-title-active{
			color: $cts-dark-brown!important;
		}
		&-state{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-state-active{
			color: $cts-all-white;
			font-size: $cts-basic-font;
			background-color: $cts-alert-red;
			border-radius: $cts-basic-padding;
		}
	}
</style>
