<template>
	<view class="cts-income-chart cts-flex-ac cts-flex-jc cts-basic-horizontal-padding">
		<text class="cts-income-chart-title">收益统计</text>
		<view class="cts-income-chart-box">
			<view class="cts-income-chart-options cts-flex-ac cts-flex-jsa cts-flex-dir">
				<image fade-show="false" :style="{transform:`translateX(${l}rpx)`}" class="cts-transition-cover cts-income-chart-options-cover" :src="src" mode="aspectFit"></image>
				<view class="cts-income-chart-options-title cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="index+'opt'" @tap="select(index)">
					<text :class="[current==index?'cts-income-chart-options-title-active':'cts-income-chart-options-title-mute']">{{index==3?'&nbsp;&nbsp;'+item:item}}</text>
				</view>
			</view>
			<view class="cts-income-chart-options-body cts-padding-box  cts-flex-dir cts-flex-wrap">
				<view class="cts-income-chart-options-item">
					<text class="cts-income-chart-options-item-title">付款订单(笔)</text>
					<text class="cts-income-chart-options-item-count">{{group_f[current].num}}</text>
				</view>
				<view class="cts-income-chart-options-item">
					<text class="cts-income-chart-options-item-title">付款预估收入(元)</text>
					<text class="cts-income-chart-options-item-count">{{group_f[current].amount1}}</text>
				</view>
				<view class="cts-income-chart-options-item">
					<text class="cts-income-chart-options-item-title">结算收入(元)</text>
					<text class="cts-income-chart-options-item-count">{{group_f[current].amount2}}</text>
				</view>
			</view>
		</view>
		<view class="cts-income-chart-chart cts-basic-full-padding cts-border-radius" v-if="current>1">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'/static/op1.png',
				l:0,
				current:0,
				group:['今日','昨日','近7日','近30日']
			};
		},
		props:['group_f'],
		methods:{
			select(index){
				this.current=index;
				this.l = index * 180;
				this.src = index==3?'/static/op3.png':'/static/op1.png'
				this.$emit('returnCurrentColumn',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(box,40rpx,40rpx,40rpx,$cts-basic-padding)
	@include createTransition(cover,transform,0.25s,ease-out,null,null)
	.cts-border-radius{
		border-bottom-left-radius: $cts-basic-padding;
		border-bottom-right-radius: $cts-basic-padding;
	}
	.cts-income-chart{
		margin-top: $cts-ext-padding;
		width: $cts-screen-full;
		&-title{
			align-self: flex-start;
			font-size: $cts-big-font;
			font-weight: 700;
			color: $cts-dark-brown;
			margin-bottom: $cts-basic-padding;
		}
		&-box{
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			width: 710rpx;
			background-color: $cts-soso-grey;
		}
		&-options-cover{
			width: 176rpx;
			height:65rpx;
			position: absolute;
			top: 0;
			left: 0;
		}
		&-options{
			overflow: hidden;
			position: relative;
			border-top-left-radius: $cts-basic-padding;
			border-top-right-radius: $cts-basic-padding;
			width: 710rpx;
			background-color: $cts-soso-grey;
			height: 65rpx;
		}
		&-options-title{
			width: 177.5rpx;
			height: 65rpx;
		}
		&-options-title-active{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-options-title-mute{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-options-body{
			width: 710rpx;
			background-color: $cts-all-white;
			min-height: 300rpx;
		}
		&-options-item{
			width: 315rpx;
			height: 100rpx;
			margin-bottom: $cts-basic-padding;
		}
		&-options-item-title{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			margin-bottom: $cts-middle-padding;
		}
		&-options-item-count{
			font-size: $cts-big-font;
			font-weight: 700;
			color: $cts-dark-brown;
		}
		&-chart{
			width: 710rpx;
			background-color: $cts-all-white;
		}
		&-table{
			width: 670rpx;
			height: 300rpx;
			background-color: $cts-light-grey;
		}
	}
</style>
