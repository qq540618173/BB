<template>
	<view class="withdrawal">
		<header-bar :isBg="isBg" :title="walletData.symbol + i18n.header.header4"></header-bar>
		<view class="container">
			<view class="form-wrap">
				<view class="form-wrap-top">
					<view class="left">{{i18n.withdrawal.lang16}}{{walletData.coin}}{{i18n.withdrawal.lang16_1}}</view>
					<view class="right">{{walletData.capital}}</view>
				</view>
				<view class="form-wrap-bot">
					<view class="form-item">
						<input type="text" v-model="current.address" :placeholder="i18n.withdrawal.lang17" />
					</view>
					<view class="form-item">
						<input type="digit" v-model="current.amount" :placeholder="i18n.withdrawal.lang18" />
					</view>
					<view class="form-item">
						<label>{{i18n.withdrawal.lang19}}({{walletData.symbol}}):</label>
						<input class="shrink" type="text" v-model="current.amount?calc:''" placeholder="0.00" disabled="true" />
					</view>
					<view class="form-item">
						<input type="text" v-model="current.paypass" :password="active" :placeholder="i18n.withdrawal.lang20" />
						<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
					</view>
					<view class="tip">
						<image src="../../static/images/icon17.png"></image>
						<text>{{i18n.withdrawal.lang21}}</text>
					</view>
				</view>
			</view>
			<view class="withdrawal-submit">
				<view class="form-submit gradient-yellow" @tap="submit">{{i18n.withdrawal.lang22}}</view>
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
				isBg: false,
				current: {       
					address: '',
					amount: '',
					paypass: '',
				},
				rate: '',             //汇率
				walletData: '',       
				coinId: '',
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options){
			this.coinId = options.id
			this.getRate()
			this.getData(options.id)
		},
		methods: {
			addClass(classname){
				this[classname] = !this[classname]
			},
			submit(){
				// 提交信息
				let { current, coinId } = this
				this.uniRequest({
					url: 'withdraw',
					data: {
						...current,
						coin_id: coinId
					}
				}).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none',
						success: () => {
							setTimeout(()=>{
								this.getData(coinId)
								this.current = {
									address: '',
									amount: '',
									paypass: '',
								}
							},2000)
						}
					})
				})
			},
			getRate(){
				// 获取汇率
				this.uniRequest({
					url: 'getRatio',
					method: 'GET'
				}).then(res => {
					this.rate = res.result.withd_ratio
				})
			},
			getData(id){
				// 获取USDT
				this.uniRequest({
					url: 'walletInfo',
					method: 'GET',
					data: {
						coin_id: id
					}
				}).then(res => {
					this.walletData = res.result
				})
			}
		},
		computed: {  
			i18n(){  
				return this.$t('index')  
			},
			calc(){
				return (this.current.amount*(1 - (this.rate/100))).toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
.withdrawal{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
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
