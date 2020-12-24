<template>
	<view class="modify">
		<header-bar :title="title"></header-bar>
		<view class="container">
			<view class="form-wrap">
				<view class="phone-number">
					<view class="phone">
						<text>{{current.phone}}</text>
					</view>
					<view class="label">
						<text>{{i18n.my.lang50}}</text>
					</view>
				</view>
				<view class="form-item" v-if="mode != 1 && mode != 2">
					<input type="number" v-model="current.code" class="yzm" :placeholder="i18n.my.lang52" />
					<view class="label-yzm" @tap="getCode">
						<text v-show="yzHtml">{{i18n.my.lang51}}</text>
						<text v-show="!yzHtml">{{time}}</text>
					</view>
				</view>
				<view class="form-item" v-if="type == 1 && mode == 1">
					<input type="text" v-model="current.oldpassword" :password="active" :placeholder="i18n.my.lang53_1" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 2 && mode == 2">
					<input type="text" v-model="current.oldpassword" :password="active" :placeholder="i18n.my.lang53_2" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 1">
					<input type="text" v-model="current.password" :password="active" :placeholder="i18n.my.lang53" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 1">
					<input type="text" v-model="current.password2" :password="active" :placeholder="i18n.my.lang54" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 2">
					<input type="text" v-model="current.payPass" :password="active" :placeholder="i18n.my.lang73" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 2">
					<input type="text" v-model="current.payPass2" :password="active" :placeholder="i18n.my.lang74" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-item" v-if="type == 3">
					<input type="number" v-model="current.newphone" :placeholder="i18n.my.lang75" />
				</view>
				<view class="form-item" v-if="type == 3">
					<input type="number" v-model="current.newphone2" :placeholder="i18n.my.lang76" />
				</view>
			</view>
			<view class="form-submit-wrap">
				<view class="form-submit gradient-yellow" @tap="submit">{{i18n.my.lang55}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				active: true,
				title: '',
				type: 1,      //1:修改登录密码 2:修改支付密码 3:修改手机号码
				mode: '',
				time: 60,                //验证码倒计时
				yzHtml: true,        
				timer: '',
				username: '',
				current: {
					phone: '',
					code: '',
					password: '',
					password2: '',
					payPass: '',
					payPass2: '',
					newphone: '',
					newphone2: ''
				}
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			let userInfo = uni.getStorageSync('userInfo')
			this.title = options.title
			this.type = options.type
			this.mode = options.mode
			this.current.phone = userInfo.username
			this.username = userInfo.username
		},
		methods: {
			addClass(classname){
				this[classname] = !this[classname]
			},
			submit(){
				let { type, current, username, mode } = this
				let url = ''
				let oFrom = ''
				switch(Number(type)){
					case 1:
						url = 'upPassword'
						break
					case 2:
						url = 'upPaypass'
						break
					case 3:
						url = 'upPhone'
						break
					default:
						url = 'upPassword'
				}
				if(mode)oFrom = 1
				this.uniRequest({
					url,
					data: {
						...current,
						from: oFrom,
					}
				}).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none',
						success: () => {
							this.current = {
								phone: username,
								code: '',
								password: '',
								password2: '',
								payPass: '',
								payPass2: '',
								newphone: '',
								newphone2: ''
							}
							if(type != 2){
								setTimeout(() => {
									this.logOut()
								}, 2000)
							}
						}
					})
				})
			},
			logOut(){
				// 退出登录
				this.uniRequest({
					url: 'logOut',
					method: 'GET'
				}).then(res => {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				})
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
.modify{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.form-wrap{
		padding: 40rpx 30rpx;
		border-radius: 8rpx;
		.phone-number{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 32rpx;
			.phone{
				font-size: $fontF;
				color: #FFA404;
			}
			.label{
				font-size: $fontJ;
				color: $colorE;
			}
		}
	}
}
</style>
