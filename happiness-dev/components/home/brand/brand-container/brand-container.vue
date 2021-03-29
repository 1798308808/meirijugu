<template>
	<list :id="page_id" class="cts-brand" bounce="true" fixFreezing="true" :style="{marginTop:t+'px',height:h+'px'}">
		<slot name="refresh"></slot>
		<cell>
			<slot name="header"></slot>
		</cell>
		<cell>
			<slot name="container"></slot>
		</cell>
	</list>
</template>

<script>
	export default {
		data() {
			return {
				t:'',
				h:''
			};
		},
		props:['page_id'],
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
			
			this.t = n + st;
			this.h = s -n- st;
		}
	}
</script>

<style lang="scss" scoped>
	.cts-brand{
		width: $cts-screen-full;
	}
</style>
