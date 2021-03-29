<template>
	<list ref="child_list" class="cts-brand-list" :style="{height:h+'px'}"  @loadmore="loadMoreData">
		<slot></slot>
	</list>
</template>

<script>
	export default {
		data() {
			return {
				h:''
			};
		},
		props:['parent_id','header_offset','id'],
		methods:{
			setScrollRef() {
			    if (this.$refs['child_list'].setSpecialEffects) {
			        this.$refs['child_list'].setSpecialEffects({
			            id: this.parent_id,
			            headerHeight: this.header_offset
			        });
			    }
			},
			loadMoreData(){
				if(!this.loadmore){
					this.$emit('returnLoadmore',this.id)
				}
			},
			reset(){
				this.$refs['child_list'].resetLoadmore()
			}
		},
		created() {
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
			this.h = s - n - st - uni.upx2px(90)
		}
	}
</script>

<style lang="scss" scoped>
	.cts-brand-list{
		width: $cts-screen-full;
	}
</style>
