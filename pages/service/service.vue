<template>
	<view class="service">
		<header-bar :isBack="isBack" :isBg="isBg" :title="i18n.header.header10"></header-bar>
		<view class="container">
			<view class="swiper-title">
				<text>{{i18n.service.service2}}</text>
			</view>
			<view class="service-bar">
				<view class="customer-service" @tap="gotoPage('/pages/service/customer')"></view>
				<view class="flex-between mt28">
					<view class="common-problem" @tap="gotoPage(`/pages/my/newsdetail?type=0&title=${i18n.header.header11}`)"></view>
					<view class="operation-guide" @tap="gotoPage(`/pages/my/newsdetail?type=1&title=${i18n.header.header12}`)"></view>
				</view>
				<view class="flex-between mt28 little">
					<view @tap="gotoPage('/pages/my/legal?type=1')">
						<image src="../../static/images/icon97.png" mode=""></image>
						<text>{{i18n.header.header37}}</text>
					</view>
					<view @tap="gotoPage('/pages/my/legal?type=2')">
						<image src="../../static/images/icon97.png" mode=""></image>
						<text>{{i18n.header.header38}}</text>
					</view>
				</view>
			</view>
			<view class="swiper-title mt60">
				<text>{{i18n.service.service3}}</text>
			</view>
			<view class="vedio">
				<video class="myvideo" src="http://supremeroyals.com/12121.mp4"></video>
			</view>
			<view class="swiper-title mt60">
				<text>{{i18n.service.service4}}</text>
			</view>
			<view class="service-content">
				<scroll-view scroll-y="true" class="service-list">
					<view class="service-item" v-for="(item, index) in resourceList" :key="index">
						<view class="format" :class="'format'+item.type"></view>
						<view class="text">
							<text>{{item.title}}</text>
						</view>
						<!-- <view class="read">
							<text>{{i18n.service.lang43}}</text>
						</view> -->
						<view class="download" @tap="download(item.pic, index)"></view>
					</view>
				</scroll-view>
			</view>
		</view>
		<tabbar :isCurrent="4"></tabbar>
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
				resourceList: [],
				hideArray: [],
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad() {
			this.getResource()
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			getResource(){
				this.uniRequest({
					url: 'resource',
					data: {
						page: 1,
						limit: 10,
					}
				}).then(res => {
					this.resourceList = res.result.data
				})
			},
			download(url, index){
				plus.runtime.openURL(url, function(){
					uni.showToast({
						title: '下载文件失败',
						icon: 'none'
					})
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
/* #ifdef H5 */
uni-page-body{
	padding-bottom: 100rpx;
}
/* #endif */
.service{
	min-height: 100%;
	.container{
		.swiper-title{
			font-size: 48rpx;
			color: #FFFFFF;
			margin-bottom: 34rpx;
		}
		.mt60{
			margin-top: 60rpx;
		}
		.mt28{
			margin-top: 28rpx;
		}
		.vedio{
			margin-top: 40rpx;
			uni-video{
				width: 100%;
				height: 360rpx;
			}
		}
		.service-bar{
			.little{
				color: #FFFFFF;
				view{
					width: 334rpx;
					height: 94rpx;
					line-height: 94rpx;
					text-align: center;
					border-radius: 50rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					padding-right: 30rpx;
					box-sizing: border-box;
					image{
						width: 50rpx;
						height: 50rpx;
						margin-right: 20rpx;
					}
					&:first-child{
						background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
					}
					&:last-child{
						background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
					}
				}
			}
			.customer-service{
				width: 100%;
				height: 132rpx;
				background: url(../../static/images/icon62.png) no-repeat;
				background-size: 100% 100%;
			}
			.common-problem{
				width: 334rpx;
				height: 94rpx;
				background: url(../../static/images/icon63.png) no-repeat;
				background-size: 100% 100%;
			}
			.operation-guide{
				width: 334rpx;
				height: 94rpx;
				background: url(../../static/images/icon64.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.service-content{
			.service-title{
				width: 116rpx;
				height: 42rpx;
				position: relative;
				&::before{
					content: "";
					display: block;
					width: 70rpx;
					height: 6rpx;
					background: #FFA404;
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					margin-left: -35rpx;
				}
				image{
					width: 116rpx;
					height: 42rpx;
				}
			}
			.service-list{
				margin-top: 28rpx;
				max-height: calc(100vh - 762rpx);
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
}
</style>
