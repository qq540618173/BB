<template>
	<view class="login">
		<view class="login-wrap">
			<view class="appname">
				<image src="../../static/images/icon32.png"></image>
				<text>链杉资本</text>
			</view>
			<view class="login-box">
				<view class="login-box-top">
					<view class="login-box-top-item" :class="{'active': !loginBtn}" @tap="changeLogin(1)">
						<text>{{i18n.login.lang77}}</text>
					</view>
					<view class="login-box-top-item" :class="{'active': loginBtn}" @tap="changeLogin(2)">
						<text>{{i18n.login.lang78}}</text>
					</view>
				</view>
				<view class="login-box-bot" v-show="!loginBtn">
					<view class="login-form-item">
						<view class="zh"></view>
						<input type="text" :placeholder="i18n.login.lang79" v-model="current.phone" placeholder-class="placeholder" />
						<view class="delete" v-if="current.phone" @tap="deleteNumber"></view>
					</view>
					<view class="login-form-item">
						<view class="mm"></view>
						<input type="text" :password="!currentClass" :placeholder="i18n.login.lang80" v-model="current.password" placeholder-class="placeholder" />
						<view class="xs" :class="{'current': currentClass}" @tap="showPassWord"></view>
					</view>
				</view>
				<view class="login-box-bot" v-show="loginBtn">
					<view class="login-form-item">
						<view class="ph"></view>
						<input type="number" :placeholder="i18n.login.lang84" v-model="current.phone" placeholder-class="placeholder" />
						<view class="delete" v-if="current.phone" @tap="deleteNumber"></view>
					</view>
					<view class="login-form-item">
						<view class="yz"></view>
						<input type="text" :placeholder="i18n.login.lang85" v-model="current.code" placeholder-class="placeholder" />
						<view class="yzm" @tap="getCode">
							<text v-show="yzHtml">{{i18n.my.lang51}}</text>
							<text v-show="!yzHtml">{{time}}</text>
						</view>
					</view>
				</view>
				<view class="login-btn" @tap="login">
					<text>{{i18n.login.lang81}}</text>
				</view>
				<view class="login-info">
					<view class="left" @tap="gotoPage('regist')">
						<text>{{i18n.login.lang82}}</text>
					</view>
					<view class="left" @tap="gotoPage('/pages/service/customer')">
						<text>{{i18n.service.service1}}</text>
					</view>
					<view class="right" @tap="gotoPage('forget')">
						<text>{{i18n.login.lang83}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginBtn: false,
				currentClass: false,     //显示明文密码
				time: 60,                //验证码倒计时
				yzHtml: true,    
				timer: '',               //定时器
				current: {
					phone: '',               //登录账号
					password: '',            //登录密码
					code: '',                //验证码
					form: 1,                 //登录方式 1手机号密码登录，2手机号验证码登录
				}
			}
		},
		onLoad() {
			const phone = uni.getStorageSync('phoneStorage');
			const password = uni.getStorageSync('passwordStorage');
			this.current.phone = phone
			this.current.password = password
		},
		methods: {
			login(){
				// 登录
				let { current } = this;
				this.uniRequest({
					url: 'login',
					data: {
						...current
					},
					noToken: true
				}).then(res => {
					if(res){
						uni.setStorage({
							key: 'userInfo',
							data: res.result,
							success: info => {
								uni.redirectTo({
									url: '/pages/index/index'
								})
							}
						})
						uni.setStorageSync('phoneStorage', this.current.phone)
						uni.setStorageSync('passwordStorage', this.current.password)
					}
				})
			},
			changeLogin(type){
				// 切换登录方式
				if(type == 1){
					this.loginBtn = false
					this.current.form = 1
				}else{
					this.loginBtn = true
					this.current.form = 2
				}
				
				this.current.phone = ''
				this.current.password = ''
			},
			showPassWord(){
				// 显示明文密码
				this.currentClass = !this.currentClass
			},
			deleteNumber(){
				// 清除输入账号
				this.current.phone = ''
				this.current.password = ''
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
			gotoPage(url){
				uni.navigateTo({
					url
				})
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
.login{
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	.login-wrap{
		padding: 84rpx 30rpx 88rpx;
		border-radius: 16rpx;
		flex: 1;
		.appname{
			text-align: center;
			font-size: $fontG;
			color: $colorH;
			image{
				width: 144rpx;
				height: 144rpx;
			}
			text{
				display: block;
				margin-top: 20rpx;
			}
		}
		.login-box{
			margin-top: 44rpx;
			background-color: #000000;
			padding: 40rpx 46rpx 80rpx;
			border-radius: 8rpx;
			.login-box-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.login-box-top-item{
					height: 44rpx;
					text-align: center;
					position: relative;
					flex: 1;
					padding-bottom: 22rpx;
					border-bottom: 2rpx solid #292F42;
					text{
						display: block;
						color: #C5C6CA;
						font-size: $fontH;
					}
					&.active{
						text{
							color: #FFA404;
						}
						&::after{
							content: "";
							display: block;
							width: 50%;
							height: 2rpx;
							background-color: #FFA404;
							position: absolute;
							top: 66rpx;
							left: 25%;
						}
					}
				}
			}
			.login-box-bot{
				margin-top: 60rpx;
				.login-form-item{
					height: 100rpx;
					padding: 0 20rpx;
					margin-bottom: 40rpx;
					background-color: #191A23;
					border-radius: 8rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					&:last-child{
						margin-bottom: 0;
					}
					input{
						flex: 1;
						font-size: $fontH;
						color: #FFA404;
					}
					.placeholder{
						font-size: $fontI;
						color: #FFA404;
					}
					.zh{
						width: 48rpx;
						height: 48rpx;
						margin-right: 10rpx;
						background: url('../../static/images/icon45.png') no-repeat;
						background-size: contain;
					}
					.mm{
						width: 48rpx;
						height: 48rpx;
						margin-right: 10rpx;
						background: url('../../static/images/icon46.png') no-repeat;
						background-size: contain;
					}
					.ph{
						width: 48rpx;
						height: 48rpx;
						margin-right: 10rpx;
						background: url('../../static/images/icon48.png') no-repeat;
						background-size: contain;
					}
					.yz{
						width: 48rpx;
						height: 48rpx;
						margin-right: 10rpx;
						background: url('../../static/images/icon49.png') no-repeat;
						background-size: contain;
					}
					.yzm{
						font-size: $fontH;
						color: #FFA404;
						margin-left: 20rpx;
					}
					.delete{
						width: 48rpx;
						height: 48rpx;
						margin-left: 20rpx;
						background: url('../../static/images/icon47.png') no-repeat;
						background-size: contain;
					}
					.xs{
						width: 48rpx;
						height: 48rpx;
						margin-left: 20rpx;
						background: url('../../static/images/icon16.png') no-repeat;
						background-size: contain;
						&.current{
							background: url('../../static/images/icon16_1.png') no-repeat;
							background-size: contain;
						}
					}
				}
			}
			.login-btn{
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				border-radius: 8rpx;
				font-size: 36rpx;
				font-weight: 500;
				color: #262733;
				margin-top: 60rpx;
				background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
			}
			.login-info{
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					font-size: $fontI;
					color: #FFA404;
				}
				.right{
					font-size: $fontI;
					color: #FFFFFF;
				}
			}
		}
	}
}
</style>
