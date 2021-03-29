<template>
	<view class="cts-category-options cts-flex-dir" :style="{width:w+'px'}">
		<view class="cts-category-options-box cts-flex-dir cts-flex-wrap cts-flex-jfs cts-flex-afs" v-for="(item,index) in group" :key="index+'oo'">
			<view class="cts-category-options-item cts-flex-ac cts-flex-jc"  v-for="(item1,index1) in item" :key="item1.name" @tap="select(item1.taobao_cat_id)">
				<view class="cts-category-options-item-img cts-flex-ac cts-flex-jc" :class="[current==item1.taobao_cat_id?'cts-category-options-border':'']">
					<custom-pic-loading class="cts-category-options-item-img-p" b_radius="10" :img="'http://www.jufu-unique.com/'+item1.icon"></custom-pic-loading>
				</view>
				<text :class="[current==item1.taobao_cat_id?'cts-category-options-item-txt-active':'cts-category-options-item-txt-mute']" >{{item1.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				w:'',
				group:[],
				current:'',
			};
		},
		mounted() {
			setTimeout(()=>{
				if(this.options.length==0)return;
				this.manageData(this.options)
			},50)
		},
		props:['options','id'],
		methods:{
			manageData(data){
				let temp = []
				for(let i=0;i<data.length;i++){
					if((i+1)%10==0){
						temp.push(data[i])
						this.group.push(temp)
						temp = []
					}
					else{
						temp.push(data[i])
					}
				}
				this.group.push(temp)
				this.w = uni.upx2px(750*this.group.length)
			},
			select(id){
				this.current = id;
				
				let index = this.options.findIndex(item=>item.taobao_cat_id==id)
				
				this.$emit('returnTappedCategory',{id:this.id,cat_id:id,index})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.cts-category-options{
		&-border{
			border-style: solid;
			border-color: $cts-deep-dark-golden;
			border-width: 1px;
		}
		&-box{
			width: $cts-screen-full;
			height: 400rpx;
		}
		&-item{
			width: 150rpx;
			height: 200rpx;
		}
		&-item-img{
			width: 100rpx;
			height: 100rpx;
			border-radius: $cts-middle-padding;
			background-color: $cts-all-white;
			margin-bottom: $cts-basic-padding;
			&-p{
				width: 80rpx;
				height: 80rpx;
			}
		}
		&-item-txt-active{
			font-size: $cts-middle-font;
			color: $cts-main-brown;
		}
		&-item-txt-mute{
			font-size: $cts-middle-font;
			color: $cts-dark-brown;
		}
	}
</style>
