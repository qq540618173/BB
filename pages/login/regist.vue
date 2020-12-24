<template>
	<view class="regist">
		<header-bar :title="i18n.header.header24"></header-bar>
		<view class="container">
			<view class="regist-form-item">
				<input type="number" v-model="current.phone" :placeholder="i18n.login.lang84" placeholder-class="placeholder" />
				<view class="delete" v-if="current.phone" @tap="deleteNumber"></view>
			</view>
			<view class="regist-form-item">
				<input type="text" v-model="current.invite" :placeholder="i18n.login.lang86" placeholder-class="placeholder" />
			</view>
			<view class="regist-form-item">
				<input type="text" v-model="current.code" :placeholder="i18n.login.lang85" placeholder-class="placeholder" />
				<view class="yzm" @tap="getCode">
					<text v-show="yzHtml">{{i18n.my.lang51}}</text>
					<text v-show="!yzHtml">{{time}}</text>
				</view>
			</view>
			<view class="regist-form-item">
				<view class="mm"></view>
				<input type="text" :password="!currentClass" :placeholder="i18n.login.lang80" v-model="current.password" placeholder-class="placeholder" />
				<view class="xs" :class="{'active': currentClass}" @tap="showPassWord"></view>
			</view>
			<view class="regist-form-item">
				<view class="mm"></view>
				<input type="text" :password="!currentClass" :placeholder="i18n.login.lang87" v-model="current.password1" placeholder-class="placeholder" />
				<view class="xs" :class="{'active': currentClass}" @tap="showPassWord"></view>
			</view>
			<view class="regist-form-item">
				<view class="mm"></view>
				<input type="text" :password="!currentClass1" :placeholder="i18n.login.lang91_1" v-model="current.payPass" placeholder-class="placeholder" />
				<view class="xs" :class="{'active': currentClass1}" @tap="showPassWord1"></view>
			</view>
			<view class="regist-form-item">
				<view class="mm"></view>
				<input type="text" :password="!currentClass1" :placeholder="i18n.login.lang91_2" v-model="current.payPass1" placeholder-class="placeholder" />
				<view class="xs" :class="{'active': currentClass1}" @tap="showPassWord1"></view>
			</view>
			<view class="regist-form-btn" @tap="regist">
				<text>{{i18n.login.lang88}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				time: 60,                //验证码倒计时
				yzHtml: true,        
				timer: '',               //定时器
				currentClass: false,
				currentClass1: false,
				current: {
					phone: '',
					invite: '',
					password: '',
					password1: '',
					payPass: '',
					payPass1: '',
					code: '',
				}
			}
		},
		components:{
			HeaderBar
		},
		methods: {
			regist(){
				let { current } = this;
				let { password, password1 } = current
				if(password == password1){
					this.uniRequest({
						url: 'register',
						data: {
							...current
						},
						noToken: true
					}).then(res => {
						if(res){
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}
					})
				}else{
					uni.showToast({
						title: '两次密码不一致，请重新输入',
						icon: 'none'
					})
				}
			},
			getCode(){
				// 获取验证码
				let { phone } = this.current;
				if(this.yzHtml && phone){
					this.uniRequest({
						url: 'sendSms',
						data: {
							phone
						},
						noToken: true
					}).then(res => {
						if(res){
							uni.showToast({
								title: '验证码已发送',
								icon: 'none'
							})
							this.yzHtml = false
							this.timer = setInterval(() => {
								this.time --;
								if(this.time <= 0) {
									this.yzHtml = true
									this.time = 60
									clearInterval(this.timer)
								}
							}, 1000)
						}
					})
				} else {
					return
				}
			},
			deleteNumber(){
				// 清除输入账号
				this.current.phone = ''
			},
			showPassWord(){
				// 显示明文密码
				this.currentClass = !this.currentClass
			},
			showPassWord1(){
				// 显示明文密码
				this.currentClass1 = !this.currentClass1
			}
		},
		computed: {  
			i18n () {  
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
html,
body{
	padding: 0;
}
/* #ifdef H5 */
uni-page-body{
	padding: 0;
}
/* #endif */
.regist{
	width: 100vw;
	padding-top: 128rpx;
	.tip{
		font-size: $fontG;
		color: $colorE;
		margin-bottom: 50rpx;
	}
	.regist-form-item{
		height: 104rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 2rpx solid #292F42;
		input{
			font-size: $fontH;
			color: #C5C6CA;
			flex: 1;
		}
		.delete{
			width: 48rpx;
			height: 48rpx;
			margin-left: 20rpx;
			background: url('../../static/images/icon47.png') no-repeat;
			background-size: contain;
		}
		.placeholder{
			font-size: $fontI;
			color: #C5C6CA;
		}
		.yzm{
			font-size: $fontH;
			color: #FFA404;
			margin-left: 20rpx;
		}
		.xs{
			width: 48rpx;
			height: 48rpx;
			margin-left: 20rpx;
			background: url('../../static/images/icon16.png') no-repeat;
			background-size: contain;
			&.active{
				background: url('../../static/images/icon16_1.png') no-repeat;
				background-size: contain;
			}
		}
	}
	.regist-form-btn{
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		border-radius: 8rpx;
		font-size: $fontG;
		color: #F5F5F5;
		margin-top: 140rpx;
		background-color: #FFA404;
	}
}
</style>
