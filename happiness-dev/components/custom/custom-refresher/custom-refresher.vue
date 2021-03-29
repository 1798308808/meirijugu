<template>
	<refresh @refresh="onrefresh" @pullingdown="startRefresh" :class="[center?'cts-flex-jc':'cts-flex-jfe']"
	:display="refreshing ? 'show' : 'hide'" class="cts-user-refresh cts-flex-ac" :style="{backgroundColor:color}">
		<loading-indicator :style="{color:!!indi_color?indi_color:'#fff'}" class="cts-user-indicator" :animating="true"></loading-indicator>
	</refresh>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: ['color','refreshing','indi_color','id','center'],
		methods:{
			onrefresh() {
				let id = !!this.id?this.id:''
				this.$emit('update:refreshing',true)
				this.$emit('userRefreshing',id)
			},
			startRefresh(){
				this.$emit('startRefresh','ok')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-user{
		&-indicator {
			height: 50rpx;
			width: 50rpx;
		}
	
		&-refresh {
			width: $cts-screen-full;
			height: $cts-basic-height*1.5;
		}
	}
</style>
