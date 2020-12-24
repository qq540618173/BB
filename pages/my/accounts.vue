<template>
	<view class="withdrawal">
		<header-bar :isBg="isBg" :title="i18n.header.header22"></header-bar>
		<view class="container">
			<view class="form-wrap">
				<view class="form-wrap-top">
					<view class="left">{{i18n.my.lang60}}</view>
					<view class="right">{{indexData.acc?indexData.acc.GCC:'0.00'}}</view>
				</view>
				<view class="form-wrap-bot">
					<view class="form-item">
						<input type="number" v-model="current.phone" :placeholder="i18n.my.lang61" />
					</view>
					<view class="form-item">
						<label>{{i18n.my.lang62}}</label>
						<input class="shrink" type="digit" v-model="current.amount" placeholder="0.00" />
					</view>
					<view class="form-item">
						<input type="text" v-model="current.paypass" :password="active1" :placeholder="i18n.my.lang63" />
						<view class="password" :class="{'active': !active1}" @tap="addClass('active1')"></view>
					</view>
					<view class="tip">
						<image src="../../static/images/icon17.png"></image>
						<text>{{i18n.my.lang64}}</text>
					</view>
				</view>
			</view>
			<view class="withdrawal-submit">
				<view class="form-submit gradient-yellow" @tap="submit">{{i18n.my.lang65}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				active1: true,
				indexData: {},
				isBg: true,
				current: {
					phone: '',
					paypass: '',
					amount: '',
					coin: 'GCC'
				},
			}
		},
		components:{
			HeaderBar
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				// 获取首页信息
				this.uniRequest({
					url: 'wallet',
					method: 'GET'
				}).then(res => {
					this.indexData = res.result
				})
			},
			submit(){
				let { current } = this
				this.uniRequest({
					url: 'transfer',
					data: {
						...current
					}
				}).then(res => {
					this.getData()
					uni.showToast({
						title: res.message,
						icon: 'none',
						success: () => {
							this.current = {
								phone: '',
								paypass: '',
								amount: '',
								coin: 'GCC'
							}
						}
					})
				})
			},
			addClass(classname){
				this[classname] = !this[classname]
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
.withdrawal{
	.container{
		.form-wrap{
			.form-wrap-bot{
				.tip{
					display: flex;
					align-items: center;
					padding: 10rpx 20rpx 0;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 14rpx;
					}
					text{
						color: #FF4436;
						font-size: $fontJ;
					}
				}
				.shrink{
					min-width: 200rpx;
				}
			}
		}
		.withdrawal-submit{
			margin-top: 40rpx;
		}
	}
}
</style>
