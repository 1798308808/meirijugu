<template>
	<view class="skeleton" :style="{height:h+'px'}">
		<view class="skeleton-box cts-transition-bg" :style="{marginTop:t +'px',opacity:ani?'0.7':'1'}">
			<image class="skeleton-img" :src="bg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script> 
	export default {
		data() {
			return {
				h: '',
				t:'',
				ani:false,
				timer:null,
				bg:''
			};
		},
		created() {
			let [s, n, st, tb, p, pl, w] = [
				this.$store.state.common.safeAreaHeight,
				this.$store.state.common.navbarHeight,
				this.$store.state.common.statusBarHeight,
				this.$store.state.common.tabbarHeight,
				this.$store.state.common.screenHeight,
				this.$store.state.common.platform,
				this.$store.state.common.screenWidth
			]
			this.h = s - tb;
			this.t = st;
		},
		methods:{
			changeSkeleton(type){
				if(!!type){
					this.bg = `/static/skeleton${type+1}.png`;
				}
				else{
					this.bg = '/static/skeleton1.png';
				}
			}
		},
		mounted() {
			this.timer = setInterval(()=>{
				this.ani = !this.ani;
			},500)
			this.changeSkeleton(this.type)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		props: ['type']
	}
</script>

<style lang="scss" scoped> 
	@include createTransition(bg,opacity,0.25s,linear,null,null)
	.skeleton {
		overflow: hidden;
		width: $cts-screen-full;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 1;
		background-color: $cts-narrow-grey;
		&-box{
			flex: 1;
			opacity: 1;
		}
		&-img{
			width: $cts-screen-full;
		}
	}
</style>
