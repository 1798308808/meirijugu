<template>
	<view class="cts-class cts-flex-dir" :style="{height:`${h}px`}">
		<view class="cts-class-left" :style="{height:`${h}px`}">
			<scroller class="cts-class-left" show-scrollbar="false" :style="{height:`${h}px`}">
				<view class="cts-class-options cts-flex-ac cts-flex-jc cts-padding-options" :class="[index==now?'cts-class-options-active':'cts-class-options-mute']" 
				v-for="(item,index) in group" :key="index+'t'" ref="options_item" @tap="jump(index)">
					<text class="cts-class-title cts-basic-horizontal-padding" :class="[index==now?'cts-class-title-active':'cts-class-title-mute']">{{item.title}}</text>
					<text class="cts-class-number cts-padding-middle" :class="[index==now?'cts-class-number-active':'cts-class-number-mute']">{{item.group.length}}</text>
				</view>
			</scroller>
		</view>
		<view class="cts-class-right" :style="{height:`${h}px`}">
			<list class="cts-class-right" show-scrollbar="false" :style="{height:`${h}px`}"  @scroll="scrolling">
				<template v-for="(item,index) in group" >
					<classification-header :icon="item.icon" :title="item.title"></classification-header>
					<cell ref="item" @appear="itemAppear(index)" @disappear="itemDisapper(index)">
						<classification-group-item :group="item.group">
							<classification-banner v-if="item.banner.length>0" :group="item.banner"></classification-banner>
						</classification-group-item>
					</cell>
				</template>
			</list>
		</view>
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	const dom = weex.requireModule('dom')
	export default {
		data() {
			return {
				codeMove:false,
				h:'',
				zh:'',
				now:0,
			};
		},
		props:['group'],
		watch:{
			now:function(val){
				if(val<3){
					dom.scrollToElement(this.$refs.options_item[val],{offset:0})
				}
				else{
					dom.scrollToElement(this.$refs.options_item[val],{offset:-80})
				}
			},
			group:{
				handler:function(val){
					if(!this.codeMove){
						let index = val.findIndex((item)=>item.appear==true);
						this.now = this.group.length - 1 - index < 2?this.group.length - 1:index;
					}
				},
				deep:true
			}
		},
		methods:{
			scrolling(e){
				this.codeMove=false;
			},
			jump(index){
				if(this.now==0)this.group[this.now].appear = false;
				this.group[index].appear = true;
				this.codeMove=true;
				this.now = index;
				dom.scrollToElement(this.$refs.item[index],{offset:uni.upx2px(-80),animated:false})
			},
			itemAppear(index){
				this.group[index].appear=true;
			},
			itemDisapper(index){
				this.group[index].appear=false;
			},
		},
		created(){
			let [s,n,st,tb] = 
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
			]
			this.h = s - n - st - tb;
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(options,null,null,$cts-basic-padding,$cts-basic-padding)
	@include createPadding(middle,$cts-basic-padding,$cts-basic-padding,$cts-min-padding,$cts-min-padding)
	.cts-class{
		width: $cts-screen-full;
		position: relative;
		&-left{
			width: 200rpx;
		}
		&-right{
			width: 550rpx;
			background-color: $cts-narrow-grey;
		}
		&-options{
			width: 200rpx;
		}
		&-options-active{
			width: 200rpx;
			background-color: $cts-narrow-grey;
		}
		&-options-mute{
			width: 200rpx;
			background-color: $cts-all-white;
		}
		&-number{
			margin-top: $cts-middle-padding;
			font-size: $cts-min-font;
			border-radius: $cts-basic-padding;
		}
		&-number-mute{
			color: $cts-light-dark;
			background-color:$cts-light-grey;
		}
		&-number-active{
			color: $cts-main-brown;
			background-image: linear-gradient(to right, $cts-gradient-light-golden, $cts-gradient-dark-golden)
		}
		&-title{
			font-size: $cts-basic-font;
		}
		&-title-active{
			color: $cts-main-brown;
		}
		&-title-mute{
			color: $cts-deep-dark;
		}
	}
</style>
