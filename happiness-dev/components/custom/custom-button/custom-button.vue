<template>
	<text v-if="type==1" :style="{width:width?width+'rpx':''}" class="cts-button-hollow cts-border-basic" :class="[!!size?`cts-button-${size}`:'cts-button-basic',!!size?`cts-padding-btn-middle`:'cts-basic-full-padding',colorType?`cts-border-color-${colorType}`:'',colorType?`cts-hollow-font-${colorType}`:'']">{{text||'默认'}}</text>
	<text v-else-if="type==2" :style="{width:width?width+'rpx':''}" class="cts-button-solid" :elevation="shadow?'5px':'0'" :class="[!!size?`cts-button-${size}`:'cts-button-basic',!!size?`cts-padding-btn-middle`:'cts-basic-full-padding',shadow?'cts-button-shadow':'',colorType?`cts-button-color-${colorType}`:'cts-button-color-basic']">{{text||'默认'}}</text>
	<text v-else-if="type==3" :style="{width:width?width+'rpx':''}" class="cts-button-solid cts-button-mute" :elevation="shadow?'5px':'0'" :class="[!!size?`cts-button-${size}`:'cts-button-basic',!!size?`cts-padding-btn-middle`:'cts-basic-full-padding',shadow?'cts-button-shadow':'']">{{text||'默认'}}</text>
	<text v-else-if="type==4" :style="{width:width?width+'rpx':''}" class="cts-button-hollow cts-button-mute-hollow cts-border-mute" :class="[!!size?`cts-button-${size}`:'cts-button-basic',!!size?`cts-padding-btn-middle`:'cts-basic-full-padding',]">{{text||'默认'}}</text>
	<text v-else>{{text||'默认'}}</text>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['type','text','shadow','width','colorType','size']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(basic,solid,$cts-dark-brown,1px)
	@include createFullBorder(mute,solid,$cts-mute-grey,1px)
	@include createFullBorder('color-1',solid,$cts-gradient-dark-red,1px)
	@include createFullBorder('color-2',solid,$cts-dark-golden,1px)
	@include  createPadding('btn-middle',$cts-basic-padding,$cts-basic-padding,$cts-middle-padding,$cts-middle-padding)
	.cts-hollow-font{
		&-1{
			color: $cts-gradient-dark-red!important;
		}
		&-2{
			color: $cts-dark-golden!important;
		}
	}
	.cts-button{
		&-shadow{
			box-shadow: 0 0 4px 1px rgba(0,0,0,.2);
		}
		&-middle{
			min-width: 150rpx;
			font-size: $cts-middle-font;
		}
		&-basic{
			min-width: 220rpx;
			font-size: $cts-basic-font;
		}
		&-hollow{
			text-align: center;
			align-self:center;
			border-radius: $cts-ext-padding;
			color:$cts-dark-brown
		}
		&-solid{
			text-align: center;
			align-self:center;
			border-radius: $cts-ext-padding;
			color:$cts-all-white;
		}
		&-color-basic{
			background-image: linear-gradient(to right, $cts-middle-grey, $cts-deep-dark);
			
		}
		&-color-1{
			background-image: linear-gradient(to right, $cts-gradient-light-red, $cts-gradient-dark-red)!important;
		}
		&-color-2{
			color: $cts-gradient-font!important;
			background-image: linear-gradient(to right, $cts-gradient-light-golden, $cts-gradient-dark-golden)!important;
		}
		&-mute{
			background-color: $cts-soso-grey!important;
			color:$cts-mute-grey!important;
		}
		&-mute-hollow{
			color:$cts-mute-grey!important;
		}
	}

</style>
