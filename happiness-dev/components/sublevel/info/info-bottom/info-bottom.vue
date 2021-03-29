<template>
	<view class="cts-info cts-basic-horizontal-padding cts-flex-dir cts-flex-jfe cts-flex-ac" elevation="5px">
		<custom-button v-if="type==1" :type="1" :text="'申请退款'"></custom-button>
		<view v-else-if="type==2" class="cts-flex-dir">
			<custom-button :type="1" :text="'取消订单'"></custom-button>
			<view class="cts-empty-row"></view>
			<custom-button :type="2" :colorType="1" :text="'立即支付'"></custom-button>
		</view>
		<custom-button v-else-if="type==3" :type="2" :colorType="1" :text="'填写快递单号'"></custom-button>
		<view v-else class="cts-flex-dir">
			<custom-button :type="1" :text="'申请退款'"></custom-button>
			<view class="cts-empty-row"></view>
			<custom-button :type="1" :text="'查看物流'"></custom-button>
			<view class="cts-empty-row"></view>
			<custom-button :type="2" :colorType="1" :text="'确认收货'"></custom-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['type']
	}
</script>

<style lang="scss" scoped>
	.cts-info{
		position: absolute;
		left: 0;
		bottom: 0;
		width: $cts-screen-full;
		height: 120rpx;
		background-color: $cts-all-white;
		box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
	}
</style>
