<template>
	<cell class="cts-flex-ac">
		<view class="cts-article-body cts-basic-full-padding">
			<rich-text :nodes="nodes"></rich-text>
		</view>
	</cell>
</template>

<script>
	import htmlParser from '@/static/js/html-parser'
	
	function parseImgs(nodes) {
	    nodes.forEach(node => {
	      if (
	        node.name === 'img' &&
	        node.attrs &&
	        node.attrs['data-img-size-val']
	      ) {
	        const sizes = node.attrs['data-img-size-val'].split(',')
	        const width = uni.upx2px(720 * 0.9)
	        const height = parseInt(width * (sizes[1] / sizes[0]))
	        node.attrs.style = `width:${width};height:${height};`
	      }
	      if (Array.isArray(node.children)) {
	        parseImgs(node.children)
	      }
	    })
	    return nodes
	  }
	
	
	export default {
		watch:{
			nodes:function(val){
				this.reRender(val)
			}
		},
		props:['nodes'],
		mounted() {
			this.reRender(this.nodes)
		},
		methods:{
			reRender(val){
				if(!!val){
					let content = htmlParser(val)
					parseImgs(content)
					this.nodes = content
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cts-article-body {
		background-color: $cts-all-white;
		width: 710rpx;
		min-height: 500rpx;
		border-bottom-left-radius: $cts-basic-padding;
		border-bottom-right-radius: $cts-basic-padding;
	}
</style>
