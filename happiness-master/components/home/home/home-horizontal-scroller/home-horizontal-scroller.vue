<template>
	<view class="cts-home cts-basic-horizontal-padding">
		<view class="cts-home-box cts-basic-vertical-padding cts-flex-jc">
			<scroller scroll-direction="horizontal" class="cts-home-scroller cts-flex-dir" v-if="group.length>0" @touchstart="ts" @touchend="te">
				<view class="cts-home-item cts-flex-jsb" v-for="(item,index) in group" :key="item.id" @tap="select(item.id)" ref="goods">
					<custom-pic-loading class="cts-home-item-img" :img="item.thumb"></custom-pic-loading>
					<view class="cts-flex-dir cts-flex-afe">
						<text class="cts-home-item-dprice">￥{{item.price}}</text>
						<text class="cts-home-item-price">￥{{item.d_price}}</text>
					</view>
					<text class="cts-home-item-badge cts-padding-badge">{{item.discount}}券</text>
				</view>
				<view class="cts-home-more cts-basic-full-padding cts-flex-jsa cts-flex-ac" @tap="more">
					<text class="cts-home-more-txt">查</text>
					<text class="cts-home-more-txt">看</text>
					<text class="cts-home-more-txt">更</text>
					<text class="cts-home-more-txt">多</text>
					<image class="cts-home-more-icon" src="/static/flash_r.png" mode="aspectFit"></image>
				</view>
			</scroller>
		</view>
	</view>
</template>

<script>
	const dom = weex.requireModule('dom')
	export default {
		data() {
			return {
				timer:null,
				current:0,
				timer2:null
			};
		},
		mounted() {
			this.$nextTick(function(){
				if(!!this.group&&this.group.length!=0){
					setTimeout(()=>{
						this.autoMove()
					},500)
				}
			})
		},
		watch:{
			group:{
				handler:function(val){
					this.restart()
				},
				deep:true
			}
		},
		methods:{
			ts(){
				clearInterval(this.timer)
				clearTimeout(this.timer)
			},
			te(){
				this.restart()
			},
			select(id){
				this.$emit('returnSelectGoods',id)
			},
			more(){
				this.$emit('returnMore')
			},
			restart(){
				this.current = 0;
				clearTimeout(this.timer2)
				this.timer2 = setTimeout(()=>{
					this.autoMove()
				},500)
			},
			autoMove(){
				clearInterval(this.timer)
				this.timer=setInterval(()=>{
					if(this.current<this.group.length){
						this.current++
					}
					else{
						this.current = 0;
					}
					dom.scrollToElement(this.$refs.goods[this.current])
				},3400)
			}
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(badge, $cts-middle-padding, $cts-middle-padding, $cts-min-padding, $cts-min-padding) 
	.cts-home {
		width: $cts-screen-full;
		background-color: $cts-all-white;
		&-loading{
			position: absolute;
		}
		&-box {
			width: 710rpx;
			position: relative;
		}

		&-scroller {
			width: 710rpx;
		}

		&-item {
			width: 200rpx;
			height: 250rpx;
			margin-right: $cts-basic-padding;
			overflow: hidden;
			position: relative;

			&-badge {
				left: 0;
				top: $cts-basic-padding;
				position: absolute;
				border-top-right-radius: $cts-middle-padding;
				border-bottom-right-radius: $cts-middle-padding;
				background-image: linear-gradient(to left, $cts-gradient-light-red, $cts-gradient-dark-red);
				color: $cts-all-white;
				font-size: $cts-middle-font;
			}

			&-img {
				width: 200rpx;
				height: 200rpx;
			}

			&-price {
				font-size: $cts-min-font;
				color: $cts-light-dark;
				text-decoration: line-through;
				margin-left: $cts-middle-padding;
			}

			&-dprice {
				font-size: $cts-middle-font;
				font-weight: 700;
				color: $cts-gradient-dark-red;
			}
		}

		&-more {
			height: 250rpx;
			background-color: $cts-light-grey;
			border-radius: $cts-middle-padding;
			&-txt {
				font-size: $cts-middle-font;
				color: $cts-gradient-dark-red;
			}

			&-icon {
				width: 25rpx;
				height: 25rpx;
			}
		}
	}
</style>
