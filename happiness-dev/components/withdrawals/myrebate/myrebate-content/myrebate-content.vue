<template>
	<view class="cts-flex-dir cts-flex-jc">
	<view class="cts-basic-horizontal-padding cts-mr-big">
		<!-- 内容 -->
		<view class="cts-mr-content cts-flex-dir cts-flex-jsb  cts-padding-box">
			<!-- icon区 -->
			<view class="cts-flex-jsa cts-mr-left">
				<view class="cts-flex-dir cts-flex-jsa">
					<icon :type="iconType" class="cts-mr-icon" size="26"/>
					<view class="cts-flex-jc">
						<text class="cts-mr-txt">{{iconTitle}}</text>
					</view>
					
				</view>
				<view class="cts-flex-dir cts-flex-jsa">
					<view class="cts-flex-jc">
						<text class="cts-mr-price-txt">￥</text>
					</view>
					<view class="cts-flex-jc">
						<text class="cts-mr-price">{{price}}</text>
					</view>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="cts-flex-jsa" @tap="btn()">
				<custom-button class="cts-mr-btn" :type="2" :text="btnTitle" :colorType="2" ></custom-button>
			</view>
		</view>
		
	</view>
	</view>
</template>

<script>
	export default {
		props:['iconType','iconTitle','price','btnTitle'],
		data() {
			return {
				
			}
		},
		methods: {
			btn(){
				this.$emit("returnBtn")				
			}
		}
	}
</script>

<style lang="scss" scoped>
		@include createPadding(box,$cts-ext-padding,$cts-ext-padding,0,0);
		$marginTop:15rpx;
		$marginTop2:35rpx;
		.cts-mr{
			&-big{
				width: 750rpx;
			},
			&-content{
				height:220rpx;
				background-color:$cts-all-white;
				border-radius:$cts-min-font;
				margin-top:$cts-big-padding;
			},

			&-btn{
				width: 220rpx;
				border-radius: $cts-ext-font;
				background-color: $cts-main-brown;
			},
			&-price{
				font-size:$cts-mega-font;
				font-weight: 700;
			}
			&-price-txt{
				font-size:$cts-big-font ;
				font-weight: 700;
			}
			,
			&-txt{
				font-size:$cts-basic-font;
				margin-left: $cts-middle-padding;
			},
			&-left{
				height: 160rpx;
				margin-top: $marginTop2;
			}
		}
 
 </style>
