<template>
	<view class="assetslist">
		<header-bar :title="i18n.index.w6"></header-bar>
		<view class="container">
			<view class="asset-wrap" v-for="(item, index) in indexData.acc" :key="index">
				<view class="top-box">
					<view class="left">
						<image :src="item.coin_pic"></image>
						<text>{{item.symbol}}</text>
					</view>
					<view class="right">
						<text>{{i18n.index.w13}}</text>
						<text>{{item.capital}}</text>
					</view>
				</view>
				<view class="bot-box">
					<view v-show="item.status == 0" @tap="gotoPage(`recharge?coin=${item.coin}`, item.coin)">
						<text>{{i18n.index.lang1}}</text>
						<image src="../../static/images/icon5.png"></image>
					</view>
					<view v-show="item.status == 0" @tap="gotoPage(`withdrawal?id=${item.coin_id}`)">
						<text>{{i18n.index.lang2}}</text>
						<image src="../../static/images/icon6.png"></image>
					</view>
					<view v-show="item.status == 0">
						<text @tap="gotoPage(`history?coin=${item.coin}`)">{{i18n.index.lang3_1}}</text>
						<image src="../../static/images/icon7.png"></image>
					</view>
					<view v-show="item.status == 1">
						<text>{{i18n.index.w14}}</text>
					</view>
				</view>
			</view>
			<view class="create flex-center" @tap="gotoPage('/pages/my/addwallet')">
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
				indexData: {}
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
			getData(){
				// 获取首页信息
				this.uniRequest({
					url: 'wallet',
					method: 'GET'
				}).then(res => {
					this.indexData = res.result
				})
			},
			gotoPage(url, coin){
				if( coin == 'FIL' || coin == 'ETH' ){
					uni.showToast({
						title: '暂未开放',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
				    url
				});
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
.assetslist{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
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
	.asset-wrap{
		padding: 34rpx 30rpx 40rpx;
		background: #262733;
		box-shadow: 0px 8rpx 8rpx 0px rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		margin-bottom: 24rpx;
		.top-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			color: #FFFFFF;
			.left{
				display: flex;
				align-items: center;
				image{
					width: 48rpx;
					height: 48rpx;
					margin-right: 16rpx;
				}
			}
			.right{
				font-size: 28rpx;
				color: #FFFFFF;
				text{
					&:first-child{
						opacity: 0.5;
						margin-right: 4rpx;
					}
				}
			}
		}
		.bot-box{
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			view{
				display: flex;
				flex: 1;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				color: #FFFFFF;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-left: 8rpx;
				}
			}
		}
	}
}
</style>
