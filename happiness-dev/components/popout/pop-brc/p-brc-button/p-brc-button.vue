<template>
	<view class="cts-flex-dir cts-flex-jsb cts-flex-ac">
		<view @tap="confirm(0)">
			<custom-button width="180" type="1" text="不再提示"></custom-button>
		</view>
		<view @tap="confirm(1)">
			<custom-button width="180" type="2" text="确定"></custom-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			confirm(index){
				this.$emit('returnTapped',index)
			}
		}
	}
</script>

<style lang="scss">

</style>
