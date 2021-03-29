<template>
	<view class="cts-store cts-basic-full-padding">
		<view class="cts-store-rows cts-flex-dir cts-flex-wrap cts-flex-jfs cts-flex-afs">
			<view class="cts-store-rows-box cts-flex-ac cts-flex-jc" v-for="(item,index) in group" :key="item.id">
				<view class="cts-store-item cts-padding-item cts-flex-ac cts-flex-jsb" :class="[`color-${item.color}`]">
					<custom-pic-loading class="cts-store-item-img" :b_radius="10" :img="item.thumb"></custom-pic-loading>
					<text class="cts-store-item-title cts-text-overflow-1" :style="{fontSize:`${calFontSize(item.title)}px`}">{{item.title}}</text>
					<view class="cts-store-item-btn cts-padding-btn cts-flex-dir cts-flex-jsb cts-flex-ac">
						<text class="cts-store-item-desc">{{item.desc}}</text>
						<view class="cts-store-item-arrow cts-flex-ac cts-flex-jc">
							<image  class="cts-store-item-arrow-img" src="/static/back_w.png" mode="aspectFit"></image>
						</view>
					</view>
					<text class="cts-store-item-name" :class="[`color-${item.color}`]">{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				w:''
			};
		},
		created() {
			this.w = this.$store.state.common.screenWidth;
		},
		props:['group'],
		methods:{
			calFontSize(txt){
				let length = txt.split('').length;
				switch(true){
					case length <=5:return this.w*0.035;
					case length <=7:return this.w*0.03;
					case length <=10:return this.w*0.025;
					case length <=12:return this.w*0.02;
				}
			},
			randomColor(){
				return Math.floor(Math.random()*5)+1
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding,$cts-middle-padding)
	@include createPadding(btn,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.color{
		&-1{
			background-image: linear-gradient(to bottom,#FF8E8E,#FF6363);
		}
		&-2{
			background-image: linear-gradient(to bottom,#cf5ff1,#c825fc);
		}
		&-3{
			background-image: linear-gradient(to bottom,#f98b56,#f56e5a);
		}
		&-4{
			background-image: linear-gradient(to bottom,#6f94ff,#4b74f2);
		}
		&-5{
			background-image: linear-gradient(to bottom,#fb80af,#fd509f);
		}
		&-6{
			background-image: linear-gradient(to bottom,#5ae2f0,#3b8fe9);
		}
		
	}
	.cts-store{
		width: $cts-screen-full;
		&-rows{
			width: 710rpx;
			&-box{
				width: 177rpx;
				height: 270rpx;
			}
		}
		&-item{
			width: 172rpx;
			height: 265rpx;
			border-radius: $cts-middle-padding;
			position: relative;
			&-img{
				width: 152rpx;
				height: 152rpx;
			}
			&-title{
				max-width: 152rpx;
				color: $cts-all-white;
				font-weight: 700;
			}
			&-btn{
				width: 152rpx;
				background-color: $cts-all-white;
				border-radius: 50%;
			}
			&-desc{
				font-weight: 700;
				font-size: $cts-little-font;
				color: $cts-gradient-dark-red;
			}
			&-arrow{
				margin-left: $cts-min-padding;
				transform: rotate(180deg);
				width: 25rpx;
				height: 25rpx;
				border-radius: 50%;
				background-color: $cts-gradient-dark-red;
				&-img{
					width: 15rpx;
					height: 15rpx;
				}
			}
			&-name{
				text-align: center;
				position:absolute;
				left: 26rpx;
				top: $cts-min-padding;
				width: 120rpx;
				border-bottom-left-radius: $cts-middle-padding;
				border-bottom-right-radius: $cts-middle-padding;
				overflow: hidden;
				color: $cts-all-white;
				font-size: $cts-little-font;
			}
		}
	}
</style>
