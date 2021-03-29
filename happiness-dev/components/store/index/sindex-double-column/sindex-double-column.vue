<template>
	<view class="cts-store cts-basic-horizontal-padding">
		<view class="cts-store-box cts-flex-dir cts-flex-jsb cts-flex-ac cts-padding-item">
			<view class="cts-store-item" v-for="(item,index) in group" :key="item.id">
				<view class="cts-store-item-top cts-flex-jc cst-flex-ac" @tap="titleTapped(item.href,item.title)">
					<view class="cts-store-item-top-box cts-flex-dir cts-flex-jfs cts-flex-ac">
						<text class="cts-store-item-main cts-text-overflow-1" :class="[`color-title-${item.sort}`]">{{item.title}}</text>
						<view class="cts-store-item-sub cts-flex-dir cts-flex-jsb cts-flex-ac" :class="[`color-bg-${item.sort}`]" v-if="item.sort==1">
							<image class="cts-store-item-sub-icon" src="/static/flash_r.png" mode="aspectFit"></image>
							<text class="cts-store-item-sub-title cts-padding-panel cts-text-overflow-1" :class="[`color-txt-${item.sort}`]">{{item.title2}}</text>
						</view>
						<view class="cts-store-item-sub cts-flex-dir cts-flex-jsb cts-flex-ac cts-padding-panel" :class="[`color-bg-${item.sort}`]" v-else>
							<text class="cts-store-item-sub-title" :class="[`color-txt-${item.sort}`]">{{item.title2}}</text>
							<image v-if="item.sort==3" class="cts-store-item-sub-go" src="/static/arrow_s.png" mode="aspectFit"></image>
							<image v-else class="cts-store-item-sub-go" src="/static/arrow_r.png" mode="aspectFit"></image>
						</view>
					</view>
					<text class="cts-store-item-top-desc" :class="[`color-desc-${item.sort}`]">{{item.desc}}</text>
				</view>
				<view class="cts-store-item-bottom cts-flex-dir cts-flex-jsb cts-flex-ac" v-if="item.group_type==3">
					<view class="cts-store-item-bottom-price cts-flex-jfe cts-flex-ac" v-for="(item1,index1) in item.img" :key="index1+'sid'">
						<custom-pic-loading class="cts-store-itb-thumb" :img="item1.thumb"></custom-pic-loading>
					</view>
				</view>
				<view class="cts-store-item-bottom cts-flex-dir cts-flex-jsb cts-flex-ac" v-else>
					<custom-pic-loading class="cts-store-rtb" :b_radius="15" :img="item1.thumb" v-for="(item1,index1) in item.img" :key="index1+'sid'"></custom-pic-loading>
				</view>
			</view>
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
			titleTapped(href,title){
				this.$emit('returnTitleTapped',{href,title})
			},
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(panel,$cts-middle-padding,$cts-middle-padding,null,null)
	@include createPadding(item,$cts-middle-padding,$cts-middle-padding,$cts-basic-padding,$cts-basic-padding)
	.color{
		&-bg-1{
			background-image: linear-gradient(to right,$cts-gradient-light-red,$cts-gradient-dark-red);
		}
		&-txt-1{
			color: $cts-all-white;
		}
		&-title-1{
			color: $cts-deep-dark;
		}
		&-desc-1{
			color: $cts-main-brown;
		}
		
		&-bg-2{
			background-color: $cts-alert-red;
		}
		&-txt-2{
			color: $cts-all-white;
		}
		&-title-2{
			color: $cts-alert-red;
		}
		&-desc-2{
			color: $cts-gradient-dark-red;
		}
		
		&-bg-3{
			background-color: $cts-light-golden;
		}
		&-txt-3{
			color: $cts-gradient-font;
		}
		&-title-3{
			color: $cts-deep-dark;
		}
		&-desc-3{
			color: $cts-main-brown;
		}
		
		&-bg-4{
			background-image: linear-gradient(to right,$cts-gradient-dark-red,$cts-alert-red);
		}
		&-txt-4{
			color: $cts-all-white;
		}
		&-title-4{
			color: $cts-gradient-dark-red;
		}
		&-desc-4{
			color: $cts-gradient-dark-red;
		}
	}
	
	.cts-store{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding;
		&-rtb{
			width: 160rpx;
			height: 160rpx;
		}
		&-itb{
			&-thumb{
				width: 110rpx;
				height: 110rpx;
			}
			&-d-price{
				text-align:center;
				font-size: $cts-middle-font;
				width: 110rpx;
				font-weight:700;
				color: $cts-alert-red;
			}
			&-price{
				text-align:center;
				font-size: $cts-middle-font;
				width: 110rpx;
				font-weight:700;
				color: $cts-light-dark;
				text-decoration: line-through;
			}
		}
		&-box{
			width: 710rpx;
			background-color: $cts-all-white;
			border-radius: $cts-middle-padding;
		}
		&-item{
			$b_width:335rpx;
			width: $b_width;
			&-top{
				width: $b_width;
				&-box{
					flex: 1;
				}
				&-desc{
					margin-top: $cts-middle-padding;
					margin-bottom: $cts-middle-padding;
					font-size: $cts-middle-font;
				}
			}
			&-bottom{
				width: $b_width;
				&-price{
					width: 110rpx;
					height: 160rpx;
				}
			}
			&-main{
				max-width: 135rpx;
				font-size: $cts-basic-font;
				font-weight: 900;
			}
			&-sub{
				height: 40rpx;
				margin-left: $cts-middle-padding;
				border-radius: 50%;
				&-icon{
					margin-left: $cts-middle-padding;
					width: 30rpx;
					height: 30rpx;
				}
				&-go{
					margin-left: $cts-min-padding;
					width: 20rpx;
					height: 20rpx;
				}
				&-title{
					font-size: $cts-middle-font;
					color: $cts-all-white;
				}
			}
		}
	}
</style>
