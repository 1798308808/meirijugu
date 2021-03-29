<template>
	<waterfall column-width="auto" column-count="2" :column-gap="margin" show-scrollbar="false"
	:left-gap="margin" :right-gap="margin" class="cts-history cts-padding-top" :style="{height:`${h}px`}" 
	>
		<slot></slot>
	</waterfall>
</template>

<script>
	export default {
		data() {
			return {
				h:'',
				margin:''
			};
		},
		created() {
			this.margin = uni.upx2px(20)
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
			 this.h = s - n - st - uni.upx2px(90);
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(top,null,null,$cts-basic-padding,null)
	.cts-history{
		width: $cts-screen-full;
	}
</style>
