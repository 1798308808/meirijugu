<template>
	<view class="cts-category cts-border-top-solid-tt">
		<view class="cts-category-box cts-flex-dir">
			<view class="cts-category-item cts-flex-dir cts-flex-jc cts-flex-ac" v-for="(item,index) in group" :key="item.title" @tap="select(index)">
				<text :class="[item.active?'cts-category-txt-active':'cts-category-txt-mute']">{{item.title}}</text>
				<!-- <view class="cts-category-item-border" v-if="index!=group.length-1"></view> -->
				<image v-if="item.has" class="cts-category-filter" fade-show="false" :src="active(item.active,item.options)" mode="aspectFit"></image>
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
		props:['group','id'],
		methods:{
			active(a,o){
				if(!a){
					return '/static/filter_mute.png'
				}
				if(a&&o){
					return '/static/filter_up.png'
				}
				if(a&&!o){
					return '/static/filter_down.png'
				}
				return '/static/filter_mute.png'
			},
			select(index){
				this.group.forEach((item,i)=>{
					if(i==index){
						if(item.active){
							if(item.has){
								item.options =!item.options
							}
						}
						else{
							item.active=true
						}
					}
					else{
						item.active=false
					}
				})
				
				
				this.$emit('update:group',this.group)
				this.$emit('returnFilters',{page:this.id,index})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createBorder(tt,top,$cts-light-grey,solid,1px)
	.cts-category{
		&-header{
			width: $cts-screen-full;
		}
		&-box{
			width: $cts-screen-full;
			background-color: $cts-all-white;
		}
		&-item{
			flex: 1;
			position: relative;
			height: 80rpx;
		}
		&-item-border{
			position: absolute;
			width: 1px;
			height: 30rpx;
			background-color: $cts-soso-grey;
			right: 0;
			top: 25rpx;
		}
		&-filter{
			width: 20rpx;
			height: 40rpx;
			margin-left: $cts-middle-padding;
		}
		&-txt-active{
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-txt-mute{
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
	}
</style>
