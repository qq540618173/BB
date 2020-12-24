<template>
	<view class="wallet-info">
		<header-bar :title="i18n.header.header34"></header-bar>
		<view class="container">
			<view class="form-wrap">
				<view class="title">
					<text>{{i18n.header.header34}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="coin" :placeholder="i18n.my.my6" />
				</view>
			</view>
			<view class="form-submit-wrap">
				<view class="form-submit gradient-yellow" @tap="submit">{{i18n.my.my7}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				coin: ''
			}
		},
		components:{
			HeaderBar
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			submit(){
				let { coin } = this
				this.uniRequest({
					url: 'addWallet',
					data: {
						coin
					}
				}).then(res => {
					this.coin = ''
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
				})
			},
		},
		computed: {  
			i18n () {
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
.wallet-info{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.form-wrap{
			padding: 40rpx 30rpx;
			border-radius: 8px;
			.title{
				font-size: 40rpx;
				color: #FFA404;
				margin-bottom: 30rpx;
			}
			.form-item{
				margin-bottom: 0;
			}
		}
	}
}
</style>
