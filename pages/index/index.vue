<template>
	<view class="index">
		<header-bar :isBack="isBack" :isBg="isBg" :isSlot="isSlot" :title="i18n.header.header1"></header-bar>
		<view class="content">
			<view class="swiper-title">
				<text>{{i18n.index.w1}}</text>
			</view>
			<swiper class="swiper-con" :indicator-dots="true" :autoplay="true">
				<swiper-item class="bg0">
					<view class="swiper-item">
						<view class="swiper-top">
							<image src="../../static/images/top0.png" mode=""></image>
							<text>{{i18n.index.indexTop0}}</text>
						</view>
						<view class="swiper-bot">
							<text class="big">{{indexData.report?indexData.report.me:0}}</text>
							<text class="small">USDT</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="bg1">
					<view class="swiper-item">
						<view class="swiper-top">
							<image src="../../static/images/top0.png" mode=""></image>
							<text>{{i18n.index.indexTop1}}</text>
						</view>
						<view class="swiper-bot">
							<text class="big">{{indexData.report?indexData.report.meBuy:0}}</text>
							<text class="small">USDT</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="bg0">
					<view class="swiper-item">
						<view class="swiper-top">
							<image src="../../static/images/top1.png" mode=""></image>
							<text>{{i18n.index.indexTop2}}</text>
						</view>
						<view class="swiper-bot">
							<text class="big">{{indexData.report?indexData.report.sonsTo:0}}</text>
							<text class="small">USDT</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="bg1">
					<view class="swiper-item">
						<view class="swiper-top">
							<image src="../../static/images/top1.png" mode=""></image>
							<text>{{i18n.index.indexTop3}}</text>
						</view>
						<view class="swiper-bot">
							<text class="big">{{indexData.report?indexData.report.sonsToBuy:0}}</text>
							<text class="small">USDT</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="bg2">
					<view class="swiper-item">
						<view class="swiper-top">
							<image src="../../static/images/top2.png" mode=""></image>
							<text>{{i18n.index.indexTop4}}</text>
						</view>
						<view class="swiper-bot">
							<text class="big">{{indexData.report?indexData.report.pe:0}}</text>
							<text class="small">USDT</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="notice-wrap">
				<view class="notice">
					<view class="notice-box">
						<view class="uni-padding-wrap">
							<view class="page-section swiper">
								<view class="page-section-spacing">
									<swiper class="swiper" autoplay="autoplay" interval="3000" duration="500" circular="circular" vertical="vertical">
										<swiper-item v-for="(item, index) in noticeList" :key="index">
											<view class="swiper-item">
												<view class="notice-item" @tap="gotoPage(`/pages/my/newsdetail?id=${item.id}`)">{{item.title}}</view>
											</view>
										</swiper-item>
									</swiper>
								</view>
							</view>
						</view>
					</view>
					<view class="more" @tap="gotoPage('/pages/my/newslist?type=0')">
						<text>{{i18n.index.lang8_2}}</text>
					</view>
				</view>
			</view>
			<view class="profit-wrap">
				<view class="profit-item flex-between" @tap="gotoPage('income?me=1')">
					<view>
						<text>{{i18n.index.income1}}:</text>
						<text>{{indexData.revenue?indexData.revenue.direct:0}}</text>
						<text class="small">{{indexData.revenue?indexData.revenue.coin:''}}</text>
					</view>
					<view>
						<text>{{i18n.index.income}}</text>
					</view>
				</view>
				<view class="profit-item flex-between" @tap="gotoPage('income?me=2')">
					<view>
						<text>{{i18n.index.income2}}:</text>
						<text>{{indexData.revenue?indexData.revenue.team:0}}</text>
						<text class="small">{{indexData.revenue?indexData.revenue.coin:''}}</text>
					</view>
					<view>
						<text>{{i18n.index.income}}</text>
					</view>
				</view>
			</view>
			<view class="adv">
				<swiper class="swiper swiper1" autoplay="autoplay">
					<swiper-item v-for="(item, index) in slideList" :key="index">
						<image :src="item.pic" mode="scaleToFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="product-wrap">
				<view class="product-item" v-for="(item, index) in indexData.combo" :key="index" @tap="gotoPage(`miningdetails?id=${item.id}&type=${item.type}&genre=${item.genre}`, item.status)">
					<view class="left">
						<view class="name" v-if="item.status != 1">{{item.name}}<text v-if="item.cycle>0">（{{item.cycle}}{{i18n.index.mining20}}）</text></view>
						<view class="name" v-if="item.status == 1">{{item.name}}<text v-if="item.cycle>0">（{{i18n.index.w33}}）</text></view>
						<view class="price">{{item.price}}{{item.coin}}</view>
					</view>
					<view class="right">
						<image :src="item.pic"></image>
					</view>
				</view>
			</view>
			<view class="top-wrap" @tap="gotoPage('machine')">
				<image src="../../static/images/icon90.png"></image>
				<text>{{i18n.header.header28}}</text>
			</view>
			<view class="top-wrap" @tap="gotoPage('assetslist')">
				<image src="../../static/images/icon91.png"></image>
				<text>{{i18n.index.w6}}</text>
			</view>
			<view class="top-wrap">
				<image src="../../static/images/icon91.png"></image>
				<text>数字银行（未开放）</text>
			</view>
			<view class="top-wrap">
				<image src="../../static/images/icon92.png"></image>
				<text>流动性挖矿</text>
			</view>
			<view class="mine-list-wrap">
				<view class="mine-list" v-for="(item, index) in indexData.fluidity" :key="index">
					<image :src="item.pic"></image>
					<view class="mine-info">
						<view class="info-top">
							<text>{{item.name}}</text>
							<text :class="'mineStatus' + item.status">{{i18n.index['mineStatus' + item.status]}}</text>
						</view>
						<view class="info-bot">
							<text>{{i18n.index.w11}}{{item.least}}</text>
							<text>{{i18n.index.w12}}{{item.income}}%</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<tabbar :isCurrent="1" v-if="!openUp"></tabbar>
		<view class="modal-mask" :class="{current: current}" @tap="close"></view>
		<view class="modal" :class="{current: current}">
			<view class="modal-title"></view>
			<view class="form-item" v-show="status == 1">
				<input type="digit" v-model="amount" :placeholder="i18n.withdrawal.lang20_1" />
			</view>
			<view class="form-item">
				<input type="text" v-model="paypass" :password="active" :placeholder="i18n.withdrawal.lang20" />
				<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
			</view>
			<view class="sure" @tap="sureConfirm">
				<text v-show="status == 1">{{i18n.index.mining15}}</text>
				<text v-show="status == 2">{{i18n.index.mining25}}</text>
			</view>
		</view>
		<view class="modal-mask" :class="{current: current1}" @tap="close"></view>
		<view class="modal" :class="{current: current1}">
			<view class="modal-title"></view>
			<view class="form-item">
				<input type="text" v-model="paypass" :password="active" :placeholder="i18n.withdrawal.lang20" />
				<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
			</view>
			<view class="sure" @tap="stopCurrent">
				<text>{{i18n.index.mining31}}</text>
			</view>
		</view>
		<view class="update" v-if="openUp">
			<view class="versioninfo">
				<view class="version-title">
					<text>{{i18n.index.w3}}{{versions}}</text>
				</view>
				<view class="version-con">
					<text>{{i18n.index.w4}}</text>
				</view>
				<view class="version-btn" @tap="doUpData">
					<text>{{i18n.index.w5}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue'
	import Tabbar from '../../components/tabbar.vue'
	export default {
		data() {
			return {
				title: '',
				timer: '',
				isBack: false,
				isBg: true,
				isSlot: false,
				indexData: {},  //总数据
				noticeList: [], //公告列表
				slideList: [],
				mineList: [],   //矿机列表
				current: false,
				current1: false,
				currentId: '',
				paypass: '',
				amount: '',
				active: true,
				status: 1,      //参与挖矿或停止挖矿
				versions: '',    //版本信息
				downloadurl: '', //下载地址
				env: 'android',
				openUp: false,
				fee: '',
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad() {
			this.env = uni.getSystemInfoSync().platform
			this.getData()
			this.getNotice()
			this.getMine()
			this.update()
			this.getSlideData()
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
			getNotice(){
				// 获取首页公告
				this.uniRequest({
					url: 'notice',
					data: {
						page: 1,
						limit: 5
					}
				}).then(res => {
					this.noticeList = res.result.data
				})
			},
			gotoPage(url, status){
				if(status == 1){
					return
				}
				uni.navigateTo({
				    url
				});
			},
			open(status){
				this.current = true
				this.status = status
			},
			open1(id, fee){
				this.current1 = true
				this.currentId = id
				this.fee = fee
			},
			close(){
				this.current = false
				this.current1 = false
				this.amount = ""
				this.paypass = ""
			},
			addClass(classname){
				this[classname] = !this[classname]
			},
			getMine(){
				this.uniRequest({
					url: 'mymills',
					method: 'GET'
				}).then(res => {
					this.mineList = res.result
				})
			},
			sureConfirm(){
				let paypass = this.paypass
				let status = this.status
				let content = ""
				if(status == 1){
					content = "是否确定开始挖矿"
				} else {
					content = "是否确定停止挖矿"
				}
				if(!paypass) return false
				uni.showModal({
					content,
					success: (res) => {
						if(res.confirm){
							this.sure()
							this.getMine()
							this.getData()
						}
					}
				})
			},
			sure(){
				let paypass = this.paypass
				let status = this.status
				let amount = this.amount
				if (status == 1) {
					this.uniRequest({
						url: 'mining',
						data: {
							amount,
							paypass
						}
					}).then(res => {
						uni.showToast({
							title: res.message,
							icon: 'none',
						})
						this.close()
					})
				} else {
					this.uniRequest({
						url: 'stopMine',
						data: {
							paypass
						}
					}).then(res => {
						uni.showToast({
							title: '停止挖矿成功',
							icon: 'none',
						})
						this.close()
					})
				}
			},
			stopCurrent(){
				let fee = this.fee
				let content = `停止挖矿扣取矿机收益和云矿机服务器占用费用共${fee}usdt`
				uni.showModal({
					content,
					success: (res) => {
						if(res.confirm){
							this.stop()
						}
					}
				})
			},
			stop(){
				let id = this.currentId
				let paypass = this.paypass
				this.uniRequest({
					url: 'stopMine',
					data: {
						id,
						paypass
					}
				}).then(res => {
					uni.showToast({
						title: '停止挖矿成功',
						icon: 'none',
					})
					this.getMine()
					this.close()
				})
			},
			update() {
				let env = this.env
				let versions = ''
				let downloadurl = ''
				let _this = this
				this.uniRequest({
					url: 'download',
					method: 'GET'
				}).then(res => {
					if(env == 'android'){
						versions = res.result.android_version
						downloadurl = res.result.android_url
					}else{
						versions = res.result.ios_version
						downloadurl = res.result.ios_url
					}
					this.versions = versions
					this.downloadurl = downloadurl
					plus.runtime.getProperty(plus.runtime.appid, function(inf) {
						if(inf.version != versions){
							_this.openUp = true
						}
					})
				})
			},
			doUpData() {
				let url = this.downloadurl
			    uni.showLoading({
			        title: '更新中……'
			    })
			    uni.downloadFile({
					//执行下载
			        url, //下载地址
			        success: downloadResult => {//下载成功
			            uni.hideLoading();
			            if (downloadResult.statusCode == 200) {
			                uni.showModal({
			                    title: '',
			                    content: '更新成功，确定现在重启吗？',
			                    confirmText: '重启',
			                    confirmColor: '#EE8F57',
			                    success: function(res) {
			                        if (res.confirm == true) {
			                            plus.runtime.install(//安装
			                                downloadResult.tempFilePath, {
			                                    force: true
			                                },
			                                function(res) {
			                                    utils.showToast('更新成功，重启中');
			                                    plus.runtime.restart();
			                                }
			                            );
			                        }
			                    }
			                });
			            }
			        }
			    })
			},
			getSlideData(){
				this.uniRequest({
					url: 'slideshow',
					method: 'GET'
				}).then(res => {
					this.slideList = res.result
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
.index{
	min-height: 100%;
	.update{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #191A23;
		z-index: 991;
		display: flex;
		align-items: center;
		justify-content: center;
		.versioninfo{
			width: 640rpx;
			height: 816rpx;
			background: url(../../static/images/v.png) no-repeat;
			background-size: contain;
			.version-title{
				font-size: 48rpx;
				color: #FFFFFF;
				padding-top: 80rpx;
				padding-left: 110rpx;
			}
			.version-con{
				font-size: 48rpx;
				color: #000000;
				text-align: center;
				margin-top: 180rpx;
			}
			.version-btn{
				width: 440rpx;
				height: 92rpx;
				line-height: 92rpx;
				background: linear-gradient(135deg, #5D9FFD 0%, #57F0FC 100%);
				border-radius: 8rpx;
				text-align: center;
				font-size: 32rpx;
				color: #FFFFFF;
				margin: 228rpx auto 0;
			}
		}
	}
	.modal-mask{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.45);
		z-index: 8;
		display: none;
		&.current{
			display: block;
		}
	}
	.modal{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9;
		background-color: #272A3F;
		border-radius: 24rpx 24rpx 0 0;
		padding: 36rpx 30rpx 50rpx;
		transform: translateY(100%);
		transition: 0.5s all;
		&.current{
			transform: translateY(-100rpx);
		}
		.modal-title{
			width: 158rpx;
			height: 42rpx;
			background: url(../../static/images/icon59.png) no-repeat;
			background-size: contain;
			margin: 0 auto 40rpx;
		}
		.sure{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			background: #FFA404;
			border-radius: 50rpx;
			text-align: center;
			color: #FFFFFF;
			margin-top: 50rpx;
		}
		.assets{
			font-size: 28rpx;
			color: #FFFFFF;
			margin-top: 24rpx;
			margin-left: 20rpx;
		}
	}
	.content {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 30rpx;
		background-size: contain;
		.swiper1{
			margin-top: 40rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.swiper-title{
			font-size: 48rpx;
			color: #FFFFFF;
		}
		.swiper-con{
			margin-top: 28rpx;
			height: 220rpx;
			uni-swiper-item{
				border-radius: 16rpx;
				padding: 30rpx 30rpx 0;
				box-sizing: border-box;
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
			}
			.swiper-item{
				.swiper-top{
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
				.swiper-bot{
					color: #FFFFFF;
					text-align: center;
					margin-top: 10rpx;
					.big{
						font-size: 64rpx;
					}
					.small{
						font-size: 42rpx;
					}
				}
			}
		}
		.profit-wrap{
			margin-top: 24rpx;
			border-radius: 8rpx;
			padding: 0 30rpx;
			background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
			.profit-item{
				line-height: 100rpx;
				border-bottom: 1px dashed #FFFFFF;
				&:last-child{
					border-bottom: 0;
				}
				image{
					width: 40rpx;
					height: 10rpx;
				}
				text{
					font-size: 36rpx;
					color: #FFFFFF;
					&:first-child{
						opacity: 0.9;
						font-size: 28rpx;
						margin-right: 20rpx;
					}
					&.small{
						font-size: 28rpx;
					}
				}
			}
		}
		.adv{
			.swiper1{
				margin-top: 40rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.product-wrap{
			margin-top: 32rpx;
			margin-bottom: 30rpx;
			.product-item{
				background: #262733;
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
				border-radius: 8rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 34rpx 60rpx 34rpx 64rpx;
				margin-bottom: 24rpx;
				&:last-child{
					margin-bottom: 0;
				}
				.left{
					color: #FFFFFF;
					.name{
						font-size: 48rpx;
						text{
							font-size: 36rpx;
						}
					}
					.price{
						background: #FFA404;
						border-radius: 34px;
						font-size: 36rpx;
						padding: 4rpx 30rpx;
						margin-top: 24rpx;
						display: inline-block;
					}
				}
				.right{
					width: 140rpx;
					height: 152rpx;
					image{
						width: 140rpx;
						height: 152rpx;
					}
				}
			}
		}
		.top-wrap{
			display: flex;
			align-items: center;
			padding: 20rpx 30rpx;
			background: #262733;
			box-shadow: 0px 8rpx 8rpx 8rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			margin-bottom: 24rpx;
			image{
				width: 48rpx;
				height: 48rpx;
				margin-right: 20rpx;
			}
		}
		.sub-title{
			font-size: 32rpx;
			color: #FFFFFF;
			margin-bottom: 24rpx;
		}
		.mt50{
			margin-top: 50rpx;
		}
		.mine-list-wrap{
			margin-top: 40rpx;
			.mine-list{
				display: flex;
				align-items: center;
				background: #262733;
				box-shadow: 0px 8rpx 8rpx 0px rgba(0, 0, 0, 0.05);
				border-radius: 8rpx;
				padding: 32rpx 30rpx;
				margin-bottom: 24rpx;
				image{
					width: 84rpx;
					height: 84rpx;
					margin-right: 24rpx;
				}
				.mine-info{
					flex: 1;
					view{
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: #FFFFFF;
						&.info-top{
							text{
								&:first-child{
									font-size: 32rpx;
								}
								&:last-child{
									font-size: 28rpx;
								}
							}
							.mineStatus1{
								color: #FFA404;
							}
							.mineStatus2{
								color: #FF6152;
							}
						}
						&.info-bot{
							font-size: 24rpx;
							margin-top: 8rpx;
							text{
								&:first-child{
									opacity: 0.6;
								}
							}
						}
					}
				}
			}
		}
		.operation-wrap{
			display: flex;
			justify-content: space-between;
			margin-top: 40rpx;
			.operation-item{
				flex: 1;
				text-align: center;
				background-color: #292F3C;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 32rpx;
				border-radius: 8rpx;
				&:nth-child(2){
					margin: 0 20rpx
				}
				image{
					width: 56rpx;
					height: 56rpx;
					margin-right: 16rpx;
				}
				view{
					font-size: 32rpx;
					color: #2F2F2F;
					font-weight: 500;
				}
				.text1{
					color: #6C62F5;
				}
				.text2{
					color: #FCA6BF;
				}
				.text3{
					color: #5AB0FC;
				}
			}
			.gradient1{
				background:linear-gradient(135deg,rgba(4,190,217,1) 0%,rgba(98,34,225,1) 100%);
			}
			.gradient2{
				background:linear-gradient(135deg,rgba(135,189,250,1) 0%,rgba(140,47,238,1) 100%);
				margin: 0 20rpx;
			}
			.gradient3{
				background:linear-gradient(135deg,rgba(115,202,213,1) 0%,rgba(37,164,141,1) 100%);
			}
		}
		.notice-wrap{
			height: 100rpx;
			border-radius: 8rpx;
			background-color: #222636;
			box-sizing: border-box;
			padding: 20rpx;
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;
			background: linear-gradient(137deg, #FF9A8A 0%, #FF6152 100%);
			.qrcode{
				width: 212rpx;
				height: 96rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 8rpx;
				background-color: #292F42;
				.qrbox{
					width: 60rpx;
					height: 60rpx;
					margin-right: 12rpx;
					image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				text{
					color: #C4C4C9;
					font-size: 32rpx;
				}
			}
		}
		.notice{
			width: 100%;
			padding-left: 56rpx;
			box-sizing: border-box;
			background: url('../../static/images/icon8.png') 0 10rpx no-repeat;
			background-size: 48rpx 48rpx;
			position: relative;
			display: flex;
			align-items: center;
		}
		.notice-box{
			height: 68rpx;
			overflow: hidden;
			flex: 1;
			uni-swiper{
				height: 68rpx;
				.notice-item{
					height: 68rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					display: flex;
					align-items: center;
				}
			}
		}
		.more{
			font-size: 28rpx;
			color: #FFFFFF;
			padding-left: 10rpx;
		}
		.mine-title{
			font-size: 36rpx;
			color: #FFFFFF;
			margin-top: 40rpx;
		}
		.mine{
			border-radius: 8rpx;
			background-color: #34374D;
			padding: 44rpx 30rpx 26rpx;
			margin-top: 28rpx;
			.tips{
				height: 80rpx;
				line-height: 80rpx;
				background: rgba(25,29,38,0.5);
				font-size: 28rpx;
				color: #FFFFFF;
				text-align: center;
				border-radius: 8rpx;
			}
			.mine-btn{
				display: flex;
				justify-content: center;
				align-items: center;
				.mine-btn-item{
					width: 280rpx;
					height: 112rpx;
					border-radius: 56px;
					font-size: 32rpx;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					.icon{
						width: 48rpx;
						height: 48rpx;
						margin-right: 14rpx;
					}
					&.pink{
						background: linear-gradient(135deg, #FED2E1 0%, #FCA6BF 100%);
						.icon{
							background: url(../../static/images/icon11.png) no-repeat;
							background-size: contain;
						}
					}
					&.blue{
						background: linear-gradient(135deg, #93D8FE 0%, #5AB0FC 100%);
						.icon{
							background: url(../../static/images/icon12.png) no-repeat;
							background-size: contain;
						}
					}
				}
			}
			.list-wrap{
				margin-top: 60rpx;
				text-align: left;
				.uni-list{
					background-color: #292F42;
					border-radius: 8rpx;
					padding: 28rpx 30rpx;
					margin-bottom: 20rpx;
				}
				.time{
					font-size: 24rpx;
					color: #FFFFFF;
					margin-bottom: 16rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.suspend{
						font-size: 28rpx;
						color: #D8575A;
					}
					.continue{
						font-size: 28rpx;
						color: #FED2E1;
					}
				}
				.list-wrap-content{
					display: flex;
					> view{
						flex: 1;
						.contnet-lt{
							font-size: 24rpx;
							color: #FFFFFF;
							margin-bottom: 6rpx;
						}
						.contnet-lb{
							font-size: 32rpx;
							color: #D8575A;
						}
						.contnet-rt{
							text-align: right;
							font-size: 24rpx;
							color: #FFFFFF;
							margin-bottom: 6rpx;
						}
						.contnet-rb{
							text-align: right;
							font-size: 32rpx;
							color: #FFFFFF;
							.active{
								color: #59D0CF;
							}
						}
					}
				}
			}
			.amount{
				margin-top: 52rpx;
				text-align: center;
				background: rgba(28,31,42,0.5);
				padding: 60rpx 40rpx;
				.tips{
					margin-top: 10rpx;
					font-size: 24rpx;
					color: #999999;
				}
				.countdown{
					font-size: 24rpx;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 46rpx;
					.clock{
						width: 30rpx;
						height: 30rpx;
						background: url(../../static/images/icon88.png) no-repeat;
						background-size: contain;
						margin-right: 12rpx;
					}
				}
				.top{
					color: #FFFFFF;
					font-size: 32rpx;
				}
				.mid{
					color: #FFA404;
					font-size: 72rpx;
					margin-top: 16rpx;
				}
				.bot{
					width: 360rpx;
					height: 120rpx;
					border-radius: 60rpx;
					background-color: #59D0CF;
					margin: 60rpx auto 0;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 40rpx;
					color: #FFFFFF;
					image{
						width: 48rpx;
						height: 48rpx;
						margin-right: 6rpx;
					}
				}
			}
		}
	}
}
</style>
