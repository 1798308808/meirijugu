<template>
	<view class="cts-store-menu-item cts-flex-ac cts-flex-jc" @tap="menu_tapped">
		<custom-pic-loading class="cts-store-menu-item-icon" :img="thumb"></custom-pic-loading>
		<text class="cts-store-menu-item-main">{{title}}</text>
		<text class="cts-store-menu-item-sub">{{desc}}</text>
		<text class="cts-store-menu-item-desc cts-padding-desc" v-if="!!spec">{{spec}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			menu_tapped(){
				this.$emit('returnMenu',this.id)
			}
		},
		props:['title','desc','id','spec','thumb']
	}
</script>

<style lang="scss" scoped>
	@include createPadding(desc,$cts-middle-padding,$cts-middle-padding,$cts-min-padding,$cts-min-padding)
	.cts-store{
		&-menu{
			width: $cts-screen-full;
			&-item{
				width: 142rpx;
				height: 210rpx;
				position: relative;
			}
			&-item-icon{
				width: 70rpx;
				height: 70rpx;
			}
			&-item-main{
				margin-top: $cts-middle-padding;
				margin-bottom: $cts-middle-padding;
				font-size: $cts-middle-font;
				color: $cts-dark-brown;
			}
			&-item-sub{
				font-size: $cts-little-font;
				color:$cts-light-dark;
			}
			&-item-desc{
				position: absolute;
				right: 0;
				top: $cts-basic-padding;
				font-size: $cts-min-font ;
				background-image: linear-gradient(to right, $cts-gradient-light-red, $cts-gradient-dark-red);
				color: $cts-all-white;
				border-top-left-radius: $cts-basic-padding;
				border-top-right-radius: $cts-basic-padding;
				border-bottom-left-radius: $cts-min-padding;
				border-bottom-right-radius: $cts-basic-padding;
				overflow: hidden;
			}
		}
	}
	
</style>
