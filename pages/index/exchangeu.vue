<template>
	<view class="exchangeu">
		<header-bar :isBg="isBg" :title="i18n.header.header6"></header-bar>
		<view class="container">
			<view class="form-wrap">
				<view class="form-wrap-top">
					<view class="left">{{i18n.exchange.lang23}}</view>
					<view class="right">{{indexData}}</view>
				</view>
				<view class="form-wrap-bot">
					<view class="form-item">
						<input type="digit" v-model="current.from_amount" :placeholder="i18n.exchange.lang24" />
					</view>
					<view class="form-item">
						<label>{{i18n.exchange.lang25}}:</label>
						<input class="shrink" type="number" v-model="current.from_amount?calc:''" placeholder="0.00" disabled="true" />
					</view>
					<view class="form-item">
						<input type="text" v-model="current.paypass" :password="active" :placeholder="i18n.exchange.lang26" />
						<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
					</view>
				</view>
			</view>
			<view class="form-submit-wrap">
				<view class="form-submit gradient-blue" @tap="submit">{{i18n.exchange.lang27}}</view>
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
				isBg: true,
				current: {
					from_amount: '',
					paypass: '',
					from_coin: 'GCC',
					to_coin: 'USDT',
				},
				rate: '',             //汇率
				indexData: 0.000000,  //GCC数量
			}
		},
		onLoad() {
			this.getData()
			this.getRate()
		},
		components:{
			HeaderBar
		},
		methods: {
			submit(){
				// 提交信息
				let { current, indexData } = this
				this.uniRequest({
					url: 'exchange',
					data: {
						...current
					}
				}).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none',
						success: () => {
							this.current = {
								from_amount: '',
								paypass: '',
								from_coin: 'GCC',
								to_coin: 'USDT',
							}
							this.indexData = (indexData - current.from_amount).toFixed(6)
						}
					})
				})
			},
			getData(){
				// 获取USDT
				this.uniRequest({
					url: 'wallet',
					method: 'GET'
				}).then(res => {
					this.indexData = res.result.acc.GCC
				})
			},
			getRate(){
				this.uniRequest({
					url: 'getExchangeRatio',
					method: 'GET'
				}).then(res => {
					this.rate = res.result.GCC
				})
			},
			addClass(classname){
				this[classname] = !this[classname]
			}
		},
		computed: {  
			i18n () {  
				return this.$t('index')  
			},
			calc(){
				return (this.current.from_amount * this.rate).toFixed(6)
			}
		}
	}
</script>

<style lang="scss">
.exchangeu{
	.shrink{
		min-width: 200rpx;
	}
}
</style>
