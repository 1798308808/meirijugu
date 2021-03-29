<template>
	<view class="cts-reg" :style="{height:h+'px'}">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h:''
			};
		},
		created() {
			this.h = this.$store.state.common.safeAreaHeight / 2
		}
	}
</script>

<style lang="scss" scoped>
	.cts-reg{
		position: absolute;
		left: 0;
		top: 0;
		width: $cts-screen-full;
		background-image: linear-gradient(to bottom,$cts-gradient-dark-golden,tranparent);
	}
</style>
