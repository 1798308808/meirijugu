<template>
	<view v-if="open" class="cts-drop cts-transition-drop cts-flex-ac cts-flex-jc" :style="{top:t+'px'}" elevation="5px">
		<text @tap="selectThis(index)" class="cts-drop-text cts-flex cts-flex-wrap" v-for="(item,index) in group" :key="item.val" v-if="!item.active">{{item.val}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:''
			};
		},
		props:['open','group'],
		created() {
			let [s,n,st,tb,p,pl,w] =
			[
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.t = st + n;
		},
		methods:{
			selectThis(index){
				this.group.forEach((item,i)=>{
					if(index==i){
						this.group[i].active=true;
					}
					else{
						this.group[i].active=false;
					}
				})
				this.$emit('update:group',this.group)
				this.$emit('update:open',false)
				this.$emit('returnOptions',{index,val:this.group[index].val})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include createTransition(drop,height,0.25s,$cts-normal-time-function,null,null)
	.cts-drop{
		width: 200rpx;
		position: absolute;
		left: 275rpx;
		transform-origin:center top;
		background-color: $cts-all-white;
		box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		border-radius: $cts-min-padding;
		&-text{
			color: $cts-deep-dark;
			font-size: $cts-basic-font;
			text-align: center;
			line-height: 80rpx;
			height: 80rpx;
			width: 200rpx;
		}
	}
</style>
