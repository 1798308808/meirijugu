<template>
	<view class="cts-platform cts-flex-dir" :style="{width:`${750*group.length}rpx`}">
		<view class="cts-platform-box" v-for="(item,index) in group" :key="index+'oopt'">
			<view class="cts-platform-container cts-basic-full-padding  cts-flex-jfs cts-flex-afs cts-flex-dir cts-flex-wrap">
				<view class="cts-platform-item cts-flex-ac cts-flex-jc" v-for="(item1,index1) in item" :key="item1.id" @tap="selectThis(index,index1)">
					<custom-pic-loading class="cts-platform-icon" b_radius="-1" :img="item1.icon"></custom-pic-loading>
					<view class="cts-empty-column"></view>
					<text class="cts-platform-txt">{{item1.name}}</text>
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
			selectThis(index,index1){
				this.$emit('returnCategoryTapped',{index,index1})
			}
		},
		props:['group']
	}
</script>

<style lang="scss" scoped>
	.cts-platform{
		&-box{
			width: $cts-screen-full;
		}
		&-container{
			width: $cts-screen-full;
			background-color: $cts-all-white;
			min-height: 400rpx;
			border-radius: $cts-middle-padding;
		}
		&-item{
			width: 142rpx;
			height: 180rpx;
		}
		&-icon{
			width: 95rpx;
			height: 95rpx;
		}
		&-txt{
			font-size: $cts-middle-font;
			color: #333333;
		}
	}
</style>
