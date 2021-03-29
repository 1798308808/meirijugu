<template>
	<view class="cts-pop-bar">
		<view class="cts-pop-bar-in" :style="{width:w+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				w:0
			};
		},
		watch:{
			current:function(val){
				this.calculateLength(val)
			}
		},
		methods:{
			calculateLength(val){
				let tl = uni.upx2px(520);
				let percent = this.current/this.total
				let now = tl*percent
				if(now>=tl){
					this.w =tl
				}
				else{
					this.w = now
				}
			}
		},
		props:['total','current']
	}
</script>

<style lang="scss" scoped>
	.cts-pop{
		&-bar{
			position: relative;
			width: 520rpx;
			height: $cts-middle-padding;
			border-radius: 50%;
			overflow: hidden;
			background-color: $cts-light-grey;
			&-in{
				position: absolute;
				left: 0;
				top: 0;
				border-radius: 50%;
				height: $cts-middle-padding;
				background-image:linear-gradient(to right,$cts-gradient-dark-red,$cts-gradient-light-red) ;
			}
		}
	}
</style>
