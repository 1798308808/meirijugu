<template>
	<view class="cts-withdraw cts-flex-ac cts-flex-jc cts-basic-vertical-padding">
		<custom-button :type="type" :text="txt" :width="350"></custom-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['txt','type']
	}
</script>

<style lang="scss" scoped>
	.cts-withdraw{
		width: $cts-screen-full;
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>
