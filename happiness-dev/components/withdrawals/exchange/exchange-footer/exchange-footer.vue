<template>
	<view class="cts-exchange-footer cts-exchange-top-marginTop">
		<view class="cts-exchange-footer-title">
			<text class="cts-exchange-footer-title-txt">兑换记录</text>
		</view>
		
		<view class="cts-exchange-footer-content">
			<slot></slot>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@include createPadding(box,$cts-ext-font,$cts-ext-font,0,0);
	.cts-exchange{
		&-footer-title-txt{
			text-align: center;
			font-weight: 700;		
		},
		&-top-marginTop{
			// margin-top:$cts-ext-padding ;
		}
	}

</style>
