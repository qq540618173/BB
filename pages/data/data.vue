<template>
	<view class="data">
		<header-bar :isBack="isBack" isBg="isBg" :title="i18n.tabbar.data"></header-bar>
		<view class="content">
			<view class="swiper-title">
				<text>{{i18n.data.d1}}</text>
			</view>
			<view class="data-wrap" :class="'data-wrap' + index" v-for="(item, index) in dataList" :key="index">
				<view class="data-title flex-between">
					<text>{{item.year}}{{i18n.data.d2}}</text>
					<!-- <text @tap="gotoPage(`datainfo?year=${item.year}`)">{{i18n.data.d3}}</text> -->
				</view>
				<view class="data-info">
					<view class="th">
						<text>{{i18n.data.d4}}:</text>
						<text v-for="(list, index) in item.jys" :key="index">{{list}}</text>
					</view>
					<view class="th">
						<text>{{i18n.data.d5}}:</text>
						<text v-for="(list, index) in item.coin" :key="index">{{list}}</text>
					</view>
					<view class="data-box">
						<view class="flex-between">
							<view class="list">
								<text>{{i18n.data.d6}}:</text>
								<text>{{item.mean}}%</text>
							</view>
							<view class="list">
								<text>{{i18n.data.d7}}:</text>
								<text>{{item.daily_profit}}%</text>
							</view>
						</view>
						<view class="flex-between">
							<view class="list">
								<text>{{i18n.data.d8}}:</text>
								<text>{{item.moth_profit}}%</text>
							</view>
							<view class="list">
								<text>{{i18n.data.d9}}:</text>
								<text>{{item.year_profit}}%</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<tabbar :isCurrent="2"></tabbar>
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
				dataList: [],
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'profit',
					method: 'GET'
				}).then(res => {
					this.dataList = res.result
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
.data{
	min-height: 100%;
	.content {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 30rpx;
		background-size: contain;
		.swiper-title{
			font-size: 48rpx;
			color: #FFFFFF;
			margin-bottom: 44rpx;
		}
		.data-wrap{
			margin-bottom: 30rpx;
			&.data-wrap0{
				.data-title{
					background: linear-gradient(137deg, #FF9A8A 0%, #FF6152 100%);
					text{
						&:last-child{
							color: #FF6152;
						}
					}
				}
				.data-info{
					border: 1px solid #FF6152;
					.data-box{
						background: linear-gradient(137deg, #FF9A8A 0%, #FF6152 100%);
					}
				}
			}
			&.data-wrap1{
				.data-title{
					background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
					text{
						&:last-child{
							color: #0ADF8F;
						}
					}
				}
				.data-info{
					border: 1px solid #0ADF8F;
					.data-box{
						background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
					}
				}
			}
			&.data-wrap2{
				.data-title{
					background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
					text{
						&:last-child{
							color: #FFA404;
						}
					}
				}
				.data-info{
					border: 1px solid #FFA404;
					.data-box{
						background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
					}
				}
			}
			.data-title{
				height: 104rpx;
				padding: 0 30rpx;
				border-radius: 8rpx 8rpx 0px 0px;
				text{
					&:first-child{
						font-size: 28rpx;
						font-weight: bold;
						color: #262733;
					}
					&:last-child{
						display: inline-block;
						border-radius: 28rpx;
						background-color: #FFFFFF;
						font-size: 24rpx;
						padding: 4rpx 24rpx;
					}
				}
			}
			.data-info{
				padding: 0 30rpx 40rpx;
				background: #262733;
				box-shadow: 0px 8rpx 8rpx 0px rgba(0, 0, 0, 0.05);
				border-radius: 8rpx;
				box-sizing: border-box;
				.th{
					padding: 30rpx 0;
					background: url(../../static/images/icon19.png) bottom repeat-x;
					font-size: 28rpx;
					color: #999999;
					text{
						width: 25%;
						display: inline-block;
						text-align: center;
						&:first-child{
							text-align: left;
							color: #FFFFFF;
						}
					}
				}
				.data-box{
					margin-top: 40rpx;
					border-radius: 8rpx;
					padding: 32rpx;
					.list{
						font-size: 28rpx;
						color: #000000;
						text{
							&:last-child{
								margin-left: 16rpx;
							}
						}
					}
				}
			}
		}
	}
}
</style>
