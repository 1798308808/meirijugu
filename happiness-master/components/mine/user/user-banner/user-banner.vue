<template>
	<swiper class="cts-header-banner" :autoplay="true" :interval="3000" :circular="true">
		<swiper-item v-for="(item,index) in group" :key="index">
			<view class="cts-header-img cts-flex-ac cts-flex-jc cts-basic-horizontal-padding">
				<image class="cts-header-img-box" :src="item" mode="aspectFit"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				group:[]
			};
		},
		watch:{
			group_f:{
				handler:function(val){
					com.updateComponentData(this,'group',val)
				},
				deep:true
			},
		},
		props:['group_f','title'],
		mounted() {
			setTimeout(()=>{
				com.updateComponentData(this,'group',this.group_f)
			},50)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-header{
		&-banner{
			width: $cts-screen-full;
			height: 200rpx;
			position: relative;
		}
		&-img{
			width: $cts-screen-full;
			height: 200rpx;
		}
		&-img-box{
			width: 650rpx;
		}
	}
</style>
