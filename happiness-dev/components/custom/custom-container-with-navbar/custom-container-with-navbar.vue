<template>
	<view class="cts-basic-container" :style="{height:h+'px'}">
		<slot></slot>
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
			this.h = this.$store.state.common.safeAreaHeight;
		}
	}
</script>

<style lang="scss" scoped>
	.cts-basic-container{
		width: $cts-screen-full;
		position: relative;
		background-color: $cts-narrow-grey
	}
</style>
