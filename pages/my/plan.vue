<template>
	<view class="plan">
		<header-bar :isBg="isBg" :title="i18n.my.my8"></header-bar>
		<view class="container">
			<view class="amount-item bg0">
				<view class="amount-top">
					<image src="../../static/images/top0.png" mode=""></image>
					<text>{{i18n.index.indexTop0}}</text>
				</view>
				<view class="amount-bot">
					<text class="big">{{report.me}}</text>
					<text class="small">USDT</text>
				</view>
			</view>
			<view class="amount-item bg1">
				<view class="amount-top">
					<image src="../../static/images/top1.png" mode=""></image>
					<text>{{i18n.index.indexTop1}}</text>
				</view>
				<view class="amount-bot">
					<text class="big">{{report.sonsTo}}</text>
					<text class="small">USDT</text>
				</view>
			</view>
			<view class="direct-wrap">
				<view class="form-label">
					<text>{{i18n.my.my10}}</text>
				</view>
				<view class="form-item">
					<input type="text" :value="instruct.coin" :placeholder="i18n.my.my13" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my12}}</text>
				</view>
				<view class="form-item">
					<input type="text" :value="instruct.price" :placeholder="i18n.my.my15" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my11}}</text>
				</view>
				<view class="form-item">
					<input type="text" :value="instruct.start_time + '——' + instruct.end_time" :placeholder="i18n.my.my14" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my12_1}}</text>
				</view>
				<view class="form-item">
					<input type="text" :value="instruct.ring_price" :placeholder="i18n.my.my15_1" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my11_1}}</text>
				</view>
				<view class="form-item">
					<input type="text" :value="instruct.rstart_time + '——' + instruct.rend_time" :placeholder="i18n.my.my14_1" disabled="true" />
				</view>
				<!-- <view class="form-label">
					<text>{{i18n.my.my12}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="i18n.my['plan'+currentData.status]" :placeholder="i18n.my.my15" disabled="true" />
				</view> -->
			</view>
			<view class="start gradient-yellow" @tap="gotoPage('report')">
				<text>{{i18n.my.my16}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				isBg: false,
				report: {},
				instruct: {},
			}
		},
		components:{
			HeaderBar,
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'plan',
					method: 'GET'
				}).then(res => {
					this.report = res.result.report
					this.instruct = res.result.instruct
				})
			},
			gotoPage(url){
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
.plan{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		padding: 50rpx 30rpx;
		.amount-item{
			border-radius: 16rpx;
			padding: 40rpx 30rpx 56rpx;
			box-sizing: border-box;
			margin-bottom: 24rpx;
			&.bg0{
				background: url(../../static/images/swiper.png) no-repeat;
				background-size: cover;
			}
			&.bg1{
				background: url(../../static/images/swiper2.png) no-repeat;
				background-size: cover;
			}
			&.bg2{
				background: url(../../static/images/swiper3.png) no-repeat;
				background-size: cover;
			}
			.amount-top{
				font-size: 36rpx;
				color: #FFFFFF;
				display: flex;
				image{
					width: 40rpx;
					height: 40rpx;
					align-items: center;
					margin-right: 10rpx;
				}
				text{
					font-size: 28rpx;
					color: #FFFFFF;
				}
			}
			.amount-bot{
				color: #FFFFFF;
				margin-top: 20rpx;
				.big{
					font-size: 64rpx;
				}
				.small{
					font-size: 42rpx;
				}
			}
		}
		.direct-wrap{
			padding: 44rpx 30rpx 40rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			margin-bottom: 24rpx;
			.direct-price{
				font-size: 28rpx;
				color: #FFA404;
				padding-left: 28rpx;
				white-space: nowrap;
				margin-bottom: 20rpx;
			}
			uni-picker{
				width: 240rpx;
				height: 92rpx;
				line-height: 92rpx;
				background: none;
				border-radius: 8rpx;
				border: 1rpx solid #999999;
				padding: 0 20rpx;
				color: #FFFFFF;
			}
		}
	}
	.start{
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 8rpx;
		text-align: center;
		color: #262733;
		font-size: 32rpx;
		font-weight: 400;
	}
}
</style>
