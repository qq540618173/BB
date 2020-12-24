<template>
	<view class="wallet">
		<header-bar :title="i18n.header.header33"></header-bar>
		<view class="container">
			<view class="wallet-item flex" v-for="(item, index) in walletInfo" :key="index">
				<image :src="item.coin_pic" mode=""></image>
				<text>{{item.symbol}}</text>
			</view>
			<view class="create flex-center" @tap="gotoPage('addwallet')">
				<image src="../../static/images/icon93.png" mode=""></image>
				<text>{{i18n.my.my5}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				walletInfo: []
			}
		},
		components:{
			HeaderBar
		},
		onLoad() {
			this.getData()
		},
		onShow() {
			this.getData()
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			getData(){
				this.uniRequest({
					url: 'walletInfo',
					method: 'GET',
				}).then(res => {
					this.walletInfo = res.result
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
.wallet{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.wallet-item{
			padding: 20rpx 30rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			font-size: 36rpx;
			color: #FFA404;
			margin-bottom: 30rpx;
			position: relative;
			image{
				width: 72rpx;
				height: 72rpx;
				margin-right: 20rpx;
			}
			&::after{
				content: "";
				width: 40rpx;
				height: 40rpx;
				background: url(../../static/images/icon18.png) center no-repeat;
				background-size: contain;
				position: absolute;
				right: 20rpx;
				top: 50%;
				margin-top: -20rpx;
			}
		}
		.create{
			padding: 40rpx 0;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			font-size: 28rpx;
			color: #999999;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 12rpx;
			}
		}
	}
}
</style>
