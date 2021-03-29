<template>
	<view class="cts-seckill cts-flex-dir cts-flex-jsa cts-flex-ac">
		<view class="cts-seckill-item cts-flex-ac cts-flex-jc" v-for="(item,index) in seckill_group" @tap="change(index)" :key="item.title" :ref="`item${index}`">
			<text class="cts-seckill-title" :class="[item.active?'cts-seckill-title-active':'',]">{{item.title}}</text>
			<text class="cts-seckill-state" :class="[item.active?'cts-seckill-state-active':'',item.active?'cts-padding-active':'']" v-if="item.status==-1">已结束</text>
			<text class="cts-seckill-state" :class="[item.active?'cts-seckill-state-active':'',item.active?'cts-padding-active':'']" v-else-if="item.status==0">抢购中</text>
			<text class="cts-seckill-state" :class="[item.active?'cts-seckill-state-active':'',item.active?'cts-padding-active':'']" v-else="item.status==1">即将开抢</text>
		</view>
	</view>
</template>
<!-- cts-padding-active -->
<script>
	import com from '@/static/js/common.js'
	import{seckill_interaction} from '@/static/mixins/home/seckill/seckill_interaction.js'
	const dom = weex.requireModule('dom')
	export default {
		props:['seckill_group'],
		mixins:[seckill_interaction]
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
