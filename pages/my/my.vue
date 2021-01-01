<template>
	<view class="my">
		<header-bar :isBack="isBack" :isBg="isBg" :title="i18n.tabbar.my"></header-bar>
		<view class="content" :class="{'top': i18n.lang}">
			<view class="info-top">
				<view class="user-title">
					<text>{{i18n.tabbar.my}}</text>
				</view>
			</view>
			<view class="userinfo">
				<view class="head-image">
					<image src="../../static/images/icon32.png"></image>
				</view>
				<view class="head-right">
					<view class="phone flex-between">
						<text>{{userInfo.username.replace(/(\w{3})\w*(\w{4})/, '$1****$2')}}</text>
						<!-- <text>修改</text> -->
					</view>
					<view class="label-wrap">
						<view class="label-item" @tap="gotoPage('level')">
							<text>{{info.level}}</text>
						</view>
						<view class="label-item">
							<text>{{info.status == 1?i18n.my.info1:i18n.my.info1}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="signin-wrap" v-if="signData && signData.status == 0">
				<view class="signin-top">
					<text>{{i18n.my.my37}}</text>
				</view>
				<view class="signin-bot">
					<view 
						class="item" 
						v-for="(item, index) in signData.signs" 
						:key="index"
						:class="{'past': index+1 < signData.margin, 'current': ifSign(item)}"
						@tap="sign(index)"
					>{{index+1}}</view>
				</view>
			</view>
			<swiper class="wallet-swiper" :indicator-dots="true" :autoplay="true">
				<swiper-item v-for="(item, index) in walletInfo" :key="index">
					<view class="wallet-wrap">
						<view class="top flex-between">
							<text>{{item.symbol}}</text>
							<view class="add" @tap="gotoPage('wallet')">
								<image src="../../static/images/spot.png" mode=""></image>
							</view>
						</view>
						<view class="mid">
							<text>{{item.capital}}</text>
							<text>{{item.coin}}</text>
						</view>
						<view class="bot flex-between">
							<text>{{i18n.index.lang15}} {{item.address | ellipsis}}</text>
							<text @tap="copyAddress(item.address)">{{i18n.my.my9}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="plan flex-between">
				<text>{{i18n.my.my8}}</text>
				<text @tap="gotoPage('plan')">{{i18n.index.mining8}}</text>
			</view>
			<view class="operation-bot-wrap">
				<view class="operation-item" @tap="gotoPage('report')">
					<image class="pic1" src="../../static/images/icon95.png"></image>
					<text>{{i18n.my.my16}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage(`choice?type=1&title=${i18n.my.lang72+i18n.header.header13}`)">
					<image class="pic1" src="../../static/images/icon33.png"></image>
					<text>{{i18n.header.header13}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage(`choice?type=2&title=${i18n.my.lang72+i18n.header.header14}`)">
					<image class="pic2" src="../../static/images/icon34.png"></image>
					<text>{{i18n.header.header14}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage(`modify?type=3&title=${i18n.my.lang72+i18n.header.header15}`)">
					<image class="pic3" src="../../static/images/icon35.png"></image>
					<text>{{i18n.header.header15}}</text>
				</view>
				<!-- <view class="operation-item" @tap="gotoPage('newslist')">
					<image class="pic6" src="../../static/images/icon38.png"></image>
					<text>{{i18n.header.header18}}</text>
				</view> -->
				<view class="operation-item" @tap="gotoPage('/pages/index/invitation')">
					<image class="pic7" src="../../static/images/icon39.png"></image>
					<text>{{i18n.header.header19}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage('proposal')">
					<image class="pic5" src="../../static/images/icon37.png"></image>
					<text>{{i18n.header.header17}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage('feedbacklist')">
					<image class="pic51" src="../../static/images/icon85.png"></image>
					<text>{{i18n.header.header17_1}}</text>
				</view>
				<view class="operation-item" @tap="showLanguage">
					<image class="pic4" src="../../static/images/icon36.png"></image>
					<text>{{i18n.header.header16}}</text>
				</view>
				<!-- <view class="operation-item" @tap="gotoPage('mywallet')">
					<image class="pic9" src="../../static/images/icon41.png"></image>
					<text>{{i18n.header.header21}}</text>
				</view> -->
				<view class="operation-item" @tap="gotoPage('class')">
					<image class="pic8" src="../../static/images/icon40.png"></image>
					<text>{{i18n.header.header20}}</text>
				</view>
				<view class="operation-item" @tap="gotoPage('accounts')">
					<image class="pic10" src="../../static/images/icon42.png"></image>
					<text>{{i18n.header.header22}}</text>
				</view>
				<!-- <view class="operation-item" @tap="gotoPage('team')">
					<image class="pic10" src="../../static/images/icon43.png"></image>
					<text>{{i18n.header.header23}}</text>
				</view> -->
				<view class="operation-item" @tap="update">
					<image class="pic10" src="../../static/images/icon40.png"></image>
					<text>{{i18n.header.header31}}</text>
					<text style="flex: 1; text-align: right; padding-right: 60rpx;">{{versionNum}}</text>
				</view>
				<!-- <view class="operation-item" @tap="gotoPage('legal')">
					<image class="pic10" src="../../static/images/icon96.png"></image>
					<text>{{i18n.header.header37}}</text>
				</view> -->
				<view class="operation-item" @tap="gotoPage('authentication')">
					<image class="pic10" src="../../static/images/icon54.png"></image>
					<text>{{i18n.header.header27}}</text>
				</view>
			</view>
			<!-- <view class="operation-btn blue" @tap="logOut">
				<text>{{i18n.my.lang48}}</text>
			</view> -->
			<view class="operation-btn gary" @tap="logOut">
				<text>{{i18n.my.lang49}}</text>
			</view>
		</view>
		<tabbar :isCurrent="5"></tabbar>
		<view class="mask" v-if="modalActive"></view>
		<view class="modal" :class="{'active': modalActive}">
			<view class="language-item" @tap="changeLanguage('zh_CN')">
				<text>简体中文</text>
			</view>
			<view class="language-item" @tap="changeLanguage('en_US')">
				<text>English</text>
			</view>
			<view class="language-cancel" @tap="cancelLanguage">
				<text>{{i18n.my.my2}}</text>
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
				timer: '',
				isBack: false,    //头部返回按钮
				isBg: true,
				modalActive: false,    //modal弹出
				userInfo: '',
				versions: '',    //版本信息
				downloadurl: '', //下载地址
				env: 'android',
				openUp: false,
				walletInfo: [],
				info: {},
				signData: [],
				signList: [],
				versionNum: '',
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad() {
			let userInfo = uni.getStorageSync('userInfo')
			this.env = uni.getSystemInfoSync().platform
			this.getWalletInfo()
			this.getInfo()
			this.getSignData()
			if(userInfo){
				this.userInfo = userInfo
			} else {
				uni.showToast({
					title: '请重新登录',
					icon: 'none',
					success: () => {
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}, 1000)
					}
				})
			}
			this.getVersion()
		},
		methods: {
			gotoPage(url){
				if(url == 'accounts'){
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
			showLanguage(){
				this.modalActive = true
			},
			changeLanguage(language){
				const system_info = uni.getStorageSync('system_info')
				system_info.language = this._i18n.locale = language
				uni.setStorageSync('system_info',system_info)
				this.modalActive = false
			},
			moveHandle(){
				//禁止页面滚动
				if(this.modalActive){
					return
				}
			},
			cancelLanguage(){
				this.modalActive = false
			},
			logOut(){
				// 退出登录
				this.uniRequest({
					url: 'logOut',
					method: 'GET'
				}).then(res => {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				})
			},
			getInfo(){
				this.uniRequest({
					url: 'userInfo',
					method: 'GET'
				}).then(res => {
					this.info = res.result
				})
			},
			copyAddress(addr){
				uni.setClipboardData({
				    data: addr,
				    success: function () {
				        uni.showToast({
							title: "复制成功",
						})
				    },
					fail: function() {
						uni.showToast({
							title: "保存失败，请稍后重试",
							icon: "none"
						});
					}
				});
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
						}else{
							uni.showToast({
								title: '当前已是最新版本',
								icon: 'none'
							})
						}
					});
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
			getWalletInfo(){
				this.uniRequest({
					url: 'walletInfo',
					method: 'GET',
				}).then(res => {
					this.walletInfo = res.result
				})
			},
			getSignData(){
				this.uniRequest({
					url: 'signList',
					method: 'GET',
				}).then(res => {
					this.signData = res.result
					let newList = res.result.signList.map(list => {
						return list.date
					})
					this.signList = newList
				})
			},
			ifSign(item){
				let { signList } = this
				return signList.includes(item)
			},
			sign(index){
				let { signData } = this
				if( index+1 != signData.margin ){
					return
				}
				this.uniRequest({
					url: 'sign',
					method: 'GET',
				}).then(res => {
					this.getSignData()
					setTimeout(() => {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}, 1000)
				})
			},
			getVersion(){
				let _That = this
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					_That.versionNum = inf.version
				});
			}
		},
		computed: {  
			i18n () {  
				return this.$t('index')  
			}  
		},
		filters: {
			ellipsis: (value) => {
				return value.substring(0, 30) + '...'
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
.my{
	min-height: 100%;
	.signin-wrap{
		background: #262733;
		border-radius: 8rpx;
		margin-top: 28rpx;
		padding: 28rpx;
		margin-bottom: 40rpx;
		.signin-top{
			font-size: 28rpx;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			&::before{
				content: "";
				display: block;
				width: 8rpx;
				height: 32rpx;
				margin-right: 10rpx;
				background: linear-gradient(135deg, #FE9946 0%, #FFDE4D 100%);
				border-radius: 6rpx;
			}
		}
		.signin-bot{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 30rpx;
			.item{
				display: block;
				width: 56rpx;
				height: 56rpx;
				line-height: 56rpx;
				text-align: center;
				background: #191A23;
				border: 1px solid #FFA404;
				border-radius: 50%;
				font-size: 32rpx;
				color: #FFA404;
				&.past{
					opacity: 0.4;
				}
				&.current{
					color: #FFFFFF;
					background: linear-gradient(135deg, #FE9946 0%, #FFDE4D 100%);
					opacity: 1;
				}
			}
		}
	}
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
	.content {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding: 0 30rpx 30rpx;
		background-size: contain;
		&.top{
			.operation-list-wrap{
				height: auto;
				padding-bottom: 30rpx;
				.operation-box{
					align-items: flex-start;
				}
			}
		}
		.info-top{
			position: relative;
			.user-title{
				font-size: 48rpx;
				color: #FFFFFF;
				margin-bottom: 30rpx;
			}
			.level{
				width: 208rpx;
				height: 52rpx;
				line-height: 52rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				box-sizing: border-box;
				padding-left: 20rpx;
				background: linear-gradient(180deg, #535C6F 0%, #292F3C 100%);
				border-radius: 200rpx 0px 0px 200rpx;
				position: absolute;
				right: -30rpx;
				top: 10rpx;
				.colorb{
					color: #47E0FB;
					margin-left: 10rpx;
				}
			}
		}
		.userinfo{
			display: flex;
			align-items: center;
			margin-bottom: 60rpx;
			.head-image{
				width: 120rpx;
				height: 140rpx;
				margin-right: 26rpx;
				image{
					width: 120rpx;
					height: 140rpx;
				}
			}
			.head-right{
				flex: 1;
				.phone{
					font-size: 40rpx;
					color: $colorA;
					font-weight: 400;
					text{
						&:last-child{
							font-size: 32rpx;
						}
					}
				}
				.label-wrap{
					display: flex;
					align-items: center;
					margin-top: 16rpx;
					.label-item{
						height: 36rpx;
						line-height: 36rpx;
						padding: 0 14rpx;
						border-radius: 6rpx;
						font-size: 20rpx;
						color: #262733;
						margin-right: 12rpx;
						&:first-child{
							background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
						}
						&:last-child{
							background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
						}
					}
				}
			}
		}
		.wallet-swiper{
			height: 372rpx;
			.wallet-wrap{
				height: 372rpx;
				background: url(../../static/images/w.png) no-repeat;
				background-size: contain;
				padding: 34rpx 30rpx 44rpx;
				box-sizing: border-box;
				.top{
					font-size: 36rpx;
					color: #FFFFFF;
					.add{
						width: 60rpx;
						height: 48rpx;
						display: flex;
						align-items: center;
						justify-content: flex-end;
					}
					image{
						width: 48rpx;
						height: 12rpx;
					}
				}
				.mid{
					margin-top: 64rpx;
					text-align: center;
					text{
						color: #FFFFFF;
						&:first-child{
							font-size: 64rpx;
						}
						&:last-child{
							font-size: 42rpx;
							margin-left: 10rpx;
						}
					}
				}
				.bot{
					margin-top: 60rpx;
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}
		}
		.plan{
			margin-top: 40rpx;
			padding: 32rpx 30rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			text{
				font-size: 32rpx;
				color: #FFFFFF;
				&:last-child{
					font-size: 24rpx;
					color: #FFA404;
				}
			}
		}
		.operation-top-wrap{
			margin-top: 64rpx;
			background-color: #34374D;
			border-radius: 8rpx;
			padding: 66rpx 0 4rpx;
			display: flex;
			flex-wrap: wrap;
			&.relative{
				position: relative;
				padding-top: 100rpx;
				.title{
					position: absolute;
					top: 28rpx;
					left: 28rpx;
					font-size: 32rpx;
					color: #76c4fc;
				}
			}
			.operation-item{
				width: 33.3333%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 50rpx;
				image{
					width: 60rpx;
					height: 60rpx;
					display: block;
				}
				text{
					display: block;
					text-align: center;
					font-size: 28rpx;
					color: #FFFFFF;
					margin-top: 10rpx;
				}
			}
		}
		.operation-bot-wrap{
			margin-top: 28rpx;
			margin-bottom: 32rpx;
			padding: 20rpx 20rpx 20rpx 30rpx;
			background-color: #262733;
			border-radius: 8rpx;
			.operation-item{
				height: 100rpx;
				line-height: 100rpx;
				display: flex;
				align-items: center;
				position: relative;
				&::before{
					content: "";
					display: block;
					width: 40rpx;
					height: 40rpx;
					background: url(../../static/images/icon66.png) no-repeat;
					background-size: contain;
					position: absolute;
					right: 0;
					top: 50%;
					margin-top: -20rpx;
				}
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
				text{
					font-size: 30rpx;
					color: #C4C4C9;
				}
			}
		}
		.operation-btn{
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 8rpx;
			text-align: center;
			background-color: #262733;
			font-size: 30rpx;
			margin-bottom: 24rpx;
			&.blue{
				color: #76c4fc;
			}
			&.gary{
				color: #999999;
			}
		}
	}
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0, .4);
		z-index: 998;
	}
	.modal{
		width: 100vw;
		padding-top: 46rpx;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		background-color: $colorC;
		position: fixed;
		bottom: 100rpx;
		z-index: 999;
		box-shadow: 0 0 20rpx #000000;
		transform: translateY(200%);
		transition: all 0.5s;
		&.active{
			display: block;
			transform: translateY(0);
			transition: all 0.5s;
		}
		.language-item{
			height: 114rpx;
			line-height: 114rpx;
			text-align: center;
			background-color: #292F42;
			font-size: $fontH;
			color: $colorA;
			margin-bottom: 20rpx;
			&:last-child{
				margin-bottom: 0;
			}
		}
		.language-cancel{
			height: 114rpx;
			line-height: 114rpx;
			text-align: center;
			background-color: #292F42;
			font-size: $fontH;
			color: $colorA;
			margin-top: 30rpx;
		}
	}
}
</style>
