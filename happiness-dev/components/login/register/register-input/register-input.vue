<template>
	<view class="cts-reg cts-basic-horizontal-padding">
		<view class="cts-reg-box cts-basic-horizontal-padding">
			<text v-if="!!title" class="cts-reg-title">{{title}}</text>
			<view v-if="type==1" class="cts-reg-control cts-flex-jsb cts-flex-dir cts-flex-ac">
				<text class="cts-reg-desc cts-border-right-solid-desc">+86</text>
				<input :disabled="readonly" :maxlength="!!max?max:-1" @input="send" class="cts-reg-input cts-basic-horizontal-padding" :type="!!input_type?input_type:'text'" value="" :placeholder="placeholder"/>
			</view>
			<view v-else-if="type==2" class="cts-reg-control cts-flex-jsb cts-flex-dir cts-flex-ac">
				<input :disabled="readonly" :maxlength="!!max?max:-1" @input="send" class="cts-reg-input-1 cts-basic-horizontal-padding" :type="!!input_type?input_type:'text'" value="" :placeholder="placeholder"/>
				<text class="cts-reg-code cts-border-left-solid-code" @tap="sendCAPTCHA">{{captcha}}</text>
			</view>
			<view  v-else class="cts-reg-control">
				<input :disabled="readonly" :maxlength="!!max?max:-1" @input="send" class="cts-reg-input-2 cts-basic-horizontal-padding" :type="!!input_type?input_type:'text'" value="" :placeholder="placeholder"/>
			</view>
			<text v-if="!!desc" class="cts-reg-side" @tap="side_btn">{{desc}}</text>
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
			send(e){
				let val = e.detail.value;
				this.$emit('returnInput',{val,id:this.id})
			},
			sendCAPTCHA(){
				this.$emit('returnSend',{msg:'ok'})
			},
			side_btn(){
				this.$emit('returnSideButton',{msg:'ok'})
			}
		},
		props:['title','type','input_type','id','placeholder','max','desc','readonly','captcha']
	}
</script>

<style lang="scss" scoped>
	@include createBorder(desc,right,$cts-light-dark,solid,1px)
	@include createBorder(code,left,$cts-light-dark,solid,1px)
	.cts-reg{
		width: $cts-screen-full;
		margin-bottom: $cts-basic-padding*2;
		&-side{
			margin-top: $cts-basic-padding;
			text-align: right;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-desc{
			line-height: 30rpx;
			width: 100rpx;
			height: 30rpx;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			text-align: center;
		}
		&-code{
			line-height: 30rpx;
			width: 200rpx;
			height: 30rpx;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
			text-align: center;
		}
		&-input{
			height: 80rpx;
			width: 570rpx;
			font-size: $cts-soso-font;
			color: $cts-dark-brown;
			&-1{
				height: 80rpx;
				width: 470rpx;
				font-size: $cts-soso-font;
				color: $cts-dark-brown;
			}
			&-2{
				height: 80rpx;
				width: 670rpx;
				font-size: $cts-soso-font;
				color: $cts-dark-brown;
			}
		}
		&-box{
			width: 710rpx;
		}
		&-control{
			height: 80rpx;
			width: 670rpx;
			border-radius: 50%;
			background-color: $cts-light-grey;
		}
		&-title{
			font-size: $cts-ext-font;
			color: $cts-dark-brown;
			font-weight: 700;
			margin-top: $cts-basic-padding*2;
			margin-bottom: $cts-basic-padding*4;
		}
	}
</style>
