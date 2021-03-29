<template>
	<view class="cts-basic-horizontal-padding" :class="[short?'cts-cell-short':'cts-cell-full']" @tap="tapped">
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" btnFontSize="30rpx" themeColor="#222"></simple-address>
		<text v-if="pass_state==0&&!!alert" class="cts-cell-instruction-alert">{{alert}}</text>
		<view v-if="type==1" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<image class="cts-cell-icon" src="/static/back.png" mode="aspectFit"></image>
		</view>
		<view v-else-if="type==2" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<view class="cts-cell-right cts-flex-ac cts-flex-jfe cts-flex-dir">
				<view v-if="high_light" class="cts-cell-circle"></view>
				<text v-if="!!sub_title" class="cts-cell-sub-text">{{sub_title}}</text>
				<image class="cts-cell-icon" src="/static/back.png" mode="aspectFit"></image>
			</view>
		</view>
		<view v-else-if="type==3" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<text class="cts-cell-main-text">{{sub_title}}</text>
		</view>
		<view v-else-if="type==4" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac" @tap="select">
			<text class="cts-cell-normal-text">{{title}}</text>
			<view class="cts-cell-right cts-flex-ac cts-flex-jfe cts-flex-dir">
				<text class="cts-cell-sub-text">{{sub_title}}</text>
				<custom-radio :active="active"></custom-radio>
			</view>
		</view>
		<view v-else-if="type==5" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<input class="cts-cell-input-right" :type="input_type?input_type:'text'" :value="val" :placeholder="sub_title" @input="typing"/>
		</view>
		<view v-else-if="type==6" class="cts-basic-vertical-padding cts-flex-jc cts-flex-ac">
			<textarea class="cts-basic-full-padding" :class="[short?'cts-cell-textarea-short':'cts-cell-textarea-full']" :value="val" @input="typing" :placeholder="sub_title" :maxlength="max"/>
		</view>
		<view v-else-if="type==7" class="cts-cell-normal cts-flex-dir cts-flex-jfs cts-flex-ac">
			<view class="cts-cell-est-text cts-flex-dir cts-flex-jsb cts-flex-ac">
				<text class="cts-cell-est-text-txt" v-for="(item,index) in title" :key="item+'ss'">{{item}}</text>
			</view>
			<view class="cts-empty-row"></view>
			<input class="cts-cell-input-left" :type="input_type?input_type:'text'" :value="val" :placeholder="sub_title" @input="typing"/>		
		</view>
		<view v-else-if="type==8" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<view class="cts-cell-radio-box cts-flex-dir cts-flex-jfe cts-flex-ac">
				<view class="cts-cell-radio-item cts-flex-dir cts-flex-jc cts-flex-ac" v-for="(item,index) in options" :key="item.val" @tap="check(index)">
					<custom-radio :active="item.active"></custom-radio>
					<text class="cts-cell-radio-txt">{{item.val}}</text>
				</view>
			</view>
		</view>
		<view v-else-if="type==9" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<text class="cts-cell-normal-text">{{title}}</text>
			<picker mode="date" @change="selectTime">
				<text class="cts-cell-select-text">{{val}}</text>
			</picker>
		</view>
		<view v-else-if="type==10" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac" @tap="openAddres">
			<text class="cts-cell-normal-text">{{title}}</text>
			<text class="cts-cell-select-text">{{val}}</text>
		</view>
		<view v-else-if="type==11" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
				<view class="cts-cell-est-text cts-flex-dir cts-flex-jsb cts-flex-ac">
					<text class="cts-cell-est-text-txt" v-for="(item,index) in title" :key="index+'ss'">{{item}}</text>
				</view>
				<view class="cts-empty-row"></view>
				<input class="cts-cell-input-left-short" :type="input_type?input_type:'text'" :value="val" :placeholder="sub_title" @input="typing"/>
			</view>
			<text class="cts-cell-button">{{btn_text||'立即绑定'}}</text>
		</view>
		<view v-else-if="type==12" class="cts-cell-normal cts-flex-dir cts-flex-jsb cts-flex-ac">
			<view class="cts-flex-dir cts-flex-jfs cts-flex-ac">
				<view class="cts-cell-est-text cts-flex-dir cts-flex-jsb cts-flex-ac">
					<text class="cts-cell-est-text-txt" v-for="(item,index) in title" :key="index+'ss'">{{item}}</text>
				</view>
				<view class="cts-empty-row"></view>
				<input class="cts-cell-input-left-ext-short" :type="input_type?input_type:'text'" :value="val" :placeholder="sub_title" @input="typing"/>
			</view>
			<text class="cts-padding-code" :class="[countdown_flag?'cts-cell-timer-mute':'cts-cell-timer',countdown_flag?'cts-border-code-m':'cts-border-code']" @tap="countDownTapped">{{countdown_text}}</text>
		</view>
		<view v-else>需要指定type值</view>
		<text v-if="!!info" class="cts-cell-instruction cts-padding-info">{{info}}</text>
		<view v-if="!no_border" :class="[short?'cts-cell-border-short':'cts-cell-border-full',`cts-cell-pass-${pass_state}`]"></view>
		<view class="cts-cell-cover" v-if="mute"></view>
		
	</view>
</template>

<script>
	import com from '@/static/js/common.js'
	export default {
		data() {
			return {
				timer:null,
				active:false,
				pass_state:1,
				countdown_text:'发送验证码',
				countdown_flag:false,
				options:[],
				// 城市选择器
				cityPickerValueDefault: [0, 0, 1],
			};
		},
		watch:{
			active_f:function(val){
				com.updateComponentData(this,'active',val)
			},
			pass_state_f:function(val){
				com.updateComponentData(this,'pass_state',val)
			},
			options_f:{
				hanlder:function(val){
					com.updateComponentData(this,'options',val)
				},
				deep:true
			},
		},
		methods:{
			// 选择器选择值
			onConfirm(e) {
				this.$emit('update:val',e.label)
			},
			// 打开选择器
			openAddres() {
				 uni.hideKeyboard();
				this.cityPickerValueDefault = [0,0,0]
				this.$refs.simpleAddress.open();
			},
			// 被点击
			tapped(){
				this.$emit('returnTapping',{target:!!this.id?this.id:this.title})
			},
			// 單選
			select(){
				let flag = !this.active
				this.$emit('update:active_f',flag)
			},
			// 輸入時
			typing(e){
				let val = e.detail.value;
				this.$emit('update:val',val)
				this.$emit('returnInput',{val,id:this.id})
			},
			// 選擇時間
			selectTime(e){
				this.$emit('update:val',e.detail.value)
			},
			// 多選框
			check(index){
				if(this.multiple){
					this.options[index].active = this.options[index].active?false:true;
					this.$emit('returnSelector',{val:this.options})
				}
				else{
					for(let i =0;i<this.options.length;i++){
						if(i==index){
							this.options[i].active = true;
						}
						else{
							this.options[i].active = false;
						}
					}
					this.$emit('returnSelector',{val:this.options[index]})
				}
				
			},
			startCountdown(){
				if(this.countdown_flag)return;
				this.countdown_flag=true;
				let time = this.countDownTime;
				this.countdown_text = `${time}s后重新发送`
				clearInterval(this.timer)
				this.timer = setInterval(()=>{
					if(time>0){
						time--;
						this.countdown_text = `${time}s后重新发送` 
					}
					else{
						this.countdown_text = '发送验证码'
						this.countdown_flag=false
					}
				},1000)
			},
			// 发送验证码定时器
			countDownTapped(){
				this.$emit('returnCountDownStart',this.id)
			},
		},
		mounted(){
			setTimeout(()=>{
				com.updateComponentData(this,'active',this.active_f)
				com.updateComponentData(this,'pass_state',this.pass_state_f)
				com.updateComponentData(this,'options',this.options_f)
			},50)
		},
		props:['id','input_type','type','title','mute','sub_title','high_light','short','no_border','active_f','pass_state_f','val','max','options_f','multiple','btn_text','info','alert','countDownTime']
	}
</script>

<style lang="scss" scoped>
	@include createFullBorder(code,solid,$cts-main-brown,1px)
	@include createFullBorder('code-m',solid,$cts-soso-grey,1px)
	@include createPadding(code,$cts-basic-padding,$cts-basic-padding,$cts-min-padding,$cts-min-padding)
	@include createPadding(info,null,null,$cts-middle-padding,$cts-middle-padding)
	.cts-cell{
		&-instruction-alert{
			height: 50rpx;
			line-height: 50rpx;
			text-align: left;
			font-size: $cts-middle-font;
			color: $cts-alert-red;
		}
		&-instruction{
			text-align: left;
			color: $cts-light-dark;
			font-size: $cts-middle-font;
		}
		&-timer{
			font-size: $cts-basic-font;
			color: $cts-main-brown;
			border-radius: $cts-middle-padding;
		}
		&-timer-mute{
			font-size: $cts-basic-font;
			color: $cts-soso-grey;
			border-radius: $cts-middle-padding;
		}
		&-button{
			font-size: $cts-basic-font;
			color: $cts-main-brown;
		}
		&-radio{
			&-item{
				margin-left: $cts-basic-padding;
			}
			&-box{
				width: 550rpx;
				height: 110rpx;
			}
				
			&-txt{
				margin-left: $cts-middle-padding;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
		}
		&-textarea{
			&-short{
				border-radius: $cts-middle-padding;
				width: 670rpx;
				height: 250rpx;
				background-color: $cts-light-grey;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
			&-full{
				border-radius: $cts-middle-padding;
				width: 710rpx;
				height: 250rpx;
				background-color: $cts-light-grey;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
		}
		&-input{
			&-right{
				width: 500rpx;
				height: 90rpx;
				text-align: right;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
			&-left{
				width: 550rpx;
				height: 110rpx;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
				
			&-left-short{
				width: 350rpx;
				height: 110rpx;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
			&-left-ext-short{
				width: 300rpx;
				height: 110rpx;
				font-size: $cts-basic-font;
				color: $cts-dark-brown;
			}
		}
		&-pass{
			&-1{
				background-color: $cts-light-grey!important;
			}
			&-0{
				background-color: $cts-alert-red!important;
			}
		}
		&-circle{
			width: 15rpx;
			height: 15rpx;
			background-color: $cts-alert-red;
			border-radius: 50%;
			margin-right: $cts-middle-padding;
		}
		&-border-short{
			width: 670rpx;
			height: 1px;
			background-color: $cts-light-grey;
			left: 20rpx;
			bottom: 0;
			position:absolute;
		}
		&-border-full{
			width: 710rpx;
			height: 1px;
			background-color: $cts-light-grey;
			left: 20rpx;
			bottom: 0;
			position:absolute;
		}
		&-cover{
			position: absolute;
			left: 0;
			top: 0;
			height: 300rpx;
			background-color: rgba(255,255,255,.8);
			width: $cts-screen-full;
		}
		&-full{
			position: relative;
			width: $cts-screen-full;
		}
		&-short{
			position: relative;
			width: 710rpx;
		}
		&-normal{
			background-color: $cts-all-white;
			height: 110rpx;
		}
		&-est-text{
			width: 120rpx;
			height: 110rpx;
		}
		&-est-text-txt{
			height: 110rpx;
			line-height: 110rpx;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-sub-text{
			lines:1;
			text-overflow:ellipsis;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
			margin-right: $cts-middle-padding;
		}
		&-main-text{
			font-size: $cts-basic-font;
			font-weight: 700;
			color:$cts-middle-grey ;
		}
		&-normal-text{
			lines:1;
			text-overflow:ellipsis;
			font-size: $cts-basic-font;
			color: $cts-dark-brown;
		}
		&-select-text{
			lines:1;
			text-overflow:ellipsis;
			font-size: $cts-basic-font;
			color: $cts-light-dark;
		}
		&-icon-normal{
			width: 30rpx;
			height: 30rpx;
		}
		&-icon{
			transform: rotate(180deg);
			width: 30rpx;
			height: 30rpx;
		}
		&-right{
			max-width:400rpx;
		}
	}
</style>
