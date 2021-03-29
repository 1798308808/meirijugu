<template>
	<view class="cts-flex-ac cts-flex-jc cts-pop-container" :style="{minHeight:h+'px'}">
		<view class="cts-empty-column"></view>
		<view class="cts-empty-column"></view>
		<view class="cts-empty-column"></view>
		<view class="cts-empty-column"></view>
		<view class="cts-pop cts-padding-pop" >
			<view class="cts-flex-ac cts-flex-jc" v-if="loading">
				<custom-elements-loading  bg="transparent"></custom-elements-loading>
				<text class="cts-pop-version">检测中...</text>
			</view>
			<template v-else>
				<view class="cts-pop-title cts-flex-ac cts-flex-jc cts-basic-vertical-padding">
					<text class="cts-pop-title-txt">版本更新</text>
					<view class="cts-empty-column"></view>
					<view class="cts-flex-dir cts-flex-ac cts-flex">
						<text class="cts-pop-new" v-if="newVersion">新</text>
						<text class="cts-pop-version">{{version}}版本</text>
						<text class="cts-pop-version">{{size}}</text>
					</view>
				</view>
				<text class="cts-pop-update" v-for="(item,index) in info" :key="index">{{item}}</text>
				<slot></slot>
			</template>
		</view>
		<image class="cts-pop-header" src="/static/update.png" mode="widthFix"></image>
		<image @tap="close" class="cts-pop-close" src="/static/close_w.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:''
			};
		},
		created() {
			let h =this.$store.state.common.safeAreaHeight*0.35
			this.h = h
		},
		props:['id','info','version','size','newVersion','loading'],
		methods:{
			close(){
				const subNVue = uni.getSubNVueById(this.id)
				subNVue.hide('fade-out', 250);  
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(pop,$cts-basic-padding*2,$cts-basic-padding*2,$cts-basic-padding*5,$cts-basic-padding*5)
	@include createPadding(new,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	.cts-pop{
		margin-top: 150rpx;
		width: 600rpx;
		border-radius: $cts-middle-padding;
		background-color: $cts-all-white;
		&-close{
			margin-top: $cts-ext-padding;
			width: 60rpx;
			height: 60rpx;
		}
		&-new{
			font-size: $cts-min-font;
			text-align: center;
			line-height: 30rpx;
			width: 30rpx;
			height: 30rpx;
			color: $cts-all-white;
			border-radius: 50%;
			background-color: $cts-alert-red;
		}
		&-version{
			font-size: $cts-middle-font;
			color:$cts-dark-brown;
			margin-left: $cts-middle-padding;
		}
		&-update{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			margin-bottom: $cts-middle-padding;
		}
		&-title{
			flex:1;
			&-txt{
				font-size: $cts-big-font;
				color:$cts-dark-brown;
				font-weight: 700;
			}
		}
		&-header{
			position: absolute;
			left: 0;
			top: 0;
			width: 600rpx;
		}
		&-container{
			position: relative;
		}
		&-close{
			margin-top: $cts-ext-padding;
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
