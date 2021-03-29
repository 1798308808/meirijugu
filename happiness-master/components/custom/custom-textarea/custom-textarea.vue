<template>
	<view class="cts-report cts-basic-horizontal-padding">
		<textarea class="cts-report-textarea cts-basic-full-padding" @input="syncVal" :value="val" :placeholder="pl" :maxlength="!!max?max:-1"  disable-default-padding="true"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			syncVal(e){
				let val = e.detail.value;
				this.$emit('update:val',val)
			}
		},
		props:['pl','max','val']
	}
</script>

<style lang="scss" scoped>
	.cts-report{
		width: $cts-screen-full;
		&-textarea{
			margin-top: $cts-basic-padding;
			width: 710rpx;
			height: 300rpx;
			background-color: $cts-light-grey;
			color: $cts-dark-brown;
			font-size: $cts-basic-font;
			border-radius: $cts-middle-padding;
		}

	}
</style>
