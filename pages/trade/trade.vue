<template>
	<view class="trade">
		<header-bar :isBack="isBack" :isBg="isBg" :title="i18n.header.header29"></header-bar>
		<view class="content">
			<view class="swiper-title">
				<text>{{i18n.trade.trade7}}</text>
			</view>
			<view class="news-wrap">
				<view class="top">
					<view class="subtitle">
						<text>{{i18n.trade.trade8}}</text>
					</view>
					<view class="more" @tap="gotoPage('/pages/my/newslist?type=3')">
						<text>{{i18n.trade.trade10}}</text>
					</view>
				</view>
				<view class="news-list" v-for="(item, index) in newsList" :key="index" @tap="gotoDetail(item.id)">
					<view class="news-list-title">
						<text>{{index+1}}、{{item.title}}</text>
					</view>
					<view class="news-list-info">
						<text v-html="item.content"></text>
					</view>
				</view>
			</view>
			<view class="top mt60">
				<view class="subtitle">
					<text>{{i18n.trade.trade9}}</text>
				</view>
				<view class="more" @tap="gotoPage('/pages/my/newslist?type=4')">
					<text>{{i18n.trade.trade10}}</text>
				</view>
			</view>
			<scroll-view scroll-y="true" class="service-list">
				<view class="news-list" v-for="(item, index) in investmentList" :key="index" @tap="gotoDetail(item.id)">
					<view class="news-icon">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="news-info">
						<view class="news-title">
							<text>{{item.title}}</text>
						</view>
						<view class="news-time">
							<text>{{item.create_time}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<tabbar :isCurrent="3"></tabbar>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue'
	import Tabbar from '../../components/tabbar.vue'
	
	export default {
		data() {
			return {
				isBack: false,
				isBg: true,
				newsList: [],
				investmentList: [],
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad() {
			this.getNewsData()
			this.getInvestData()
		},
		methods: {
			getNewsData(){
				this.uniRequest({
					url: 'notice',
					method: 'GET',
					data: {
						type: 3,
						limit: 5
					}
				}).then(res => {
					this.newsList = res.result.data
				})
			},
			getInvestData(){
				this.uniRequest({
					url: 'notice',
					method: 'GET',
					data: {
						type: 4,
						limit: 10
					}
				}).then(res => {
					this.investmentList = res.result.data
				})
			},
			download(url, index){
				plus.runtime.openURL(url, function(){
					uni.showToast({
						title: '下载文件失败',
						icon: 'none'
					})
				})
			},
			gotoDetail(id){
				// 详细页
				uni.navigateTo({
					url: `/pages/my/newsdetail?id=${id}`
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
/* #ifdef H5 */
uni-page-body{
	padding-bottom: 100rpx;
}
/* #endif */
.trade{
	.content{
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 30rpx;
		background-size: contain;
		.swiper-title{
			font-size: 48rpx;
			color: #FFFFFF;
		}
		.mt60{
			margin-top: 60rpx;
		}
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 28rpx;
			.subtitle{
				font-size: 32rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				&::before{
					content: "";
					display: block;
					width: 8rpx;
					height: 32rpx;
					background: linear-gradient(135deg, #FE9946 0%, #FFDE4D 100%);
					border-radius: 6rpx;
					margin-right: 14rpx;
				}
			}
			.more{
				font-size: 28rpx;
				color: #FFFFFF;
			}
		}
		.news-wrap{
			margin-top: 28rpx;
			padding: 30rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			.news-list{
				margin-bottom: 32rpx;
				&:last-child{
					margin-bottom: 0;
				}
				.news-list-title{
					font-size: 32rpx;
					color: #FFFFFF;
					margin-bottom: 12rpx;
				}
				.news-list-info{
					font-size: 28rpx;
					color: #FFFFFF;
					opacity: 0.8;
				}
			}
		}
		.service-list{
			margin-top: 28rpx;
			max-height: calc(100vh - 824rpx);
			.news-list{
				padding: 34rpx 30rpx;
				background-color: #262733;
				box-shadow: 0px -1px 0px 0px rgba(41,47,66,1);
				display: flex;
				margin-bottom: 24rpx;
				.news-icon{
					width: 72rpx;
					height: 72rpx;
					margin-right: 20rpx;
					image{
						width: 72rpx;
						height: 72rpx;
					}
				}
				.news-info{
					.news-title{
						font-size: $fontI;
						color: #EDEDED;
						overflow: hidden;
					}
					.news-time{
						font-size: $fontJ;
						color: $colorB;
					}
				}
			}
			.service-item{
				height: 100rpx;
				border-radius: 8rpx;
				margin-bottom: 20rpx;
				padding: 0 28rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #34374D;
				&:last-child{
					margin-bottom: 0;
				}
				.format{
					width: 42rpx;
					height: 52rpx;
					margin-right: 16rpx;
					&.format1{
						background: url('../../static/images/icon28.png') no-repeat;
						background-size: contain;
					}
					&.format2{
						background: url('../../static/images/icon29.png') no-repeat;
						background-size: contain;
					}
					&.format3{
						background: url('../../static/images/icon30.png') no-repeat;
						background-size: contain;
					}
					&.format4{
						background: url('../../static/images/icon30_1.png') no-repeat;
						background-size: contain;
					}
					&.format5{
						background: url('../../static/images/icon30_2.png') no-repeat;
						background-size: contain;
					}
					&.format6{
						background: url('../../static/images/icon30_3.png') no-repeat;
						background-size: contain;
					}
				}
				.text{
					flex: 1;
					font-size: $fontH;
					color: $colorB;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space:nowrap;
				}
				.read{
					font-size: $fontJ;
					color: $colorF;
					margin: 0 20rpx;
				}
				.download{
					width: 28rpx;
					height: 28rpx;
					margin-left: 16rpx;
					background: url('../../static/images/icon31.png') no-repeat;
					background-size: contain;
				}
			}
		}
	}
}
</style>
