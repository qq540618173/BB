<template>
	<view class="miningdetails">
		<header-bar :isSlot="isSlot" :title="system_info == 'en_US'?comboInfo.en_name:comboInfo.name">
			<text v-if="options.type == 2" slot="text" @tap="gotoPage(`pledgerecord?id=${comboInfo.coin_id}`)">{{i18n.header.header26}}</text>
			<text v-if="options.type == 1" slot="text" @tap="gotoPage('/pages/my/team')">{{i18n.header.header23}}</text>
		</header-bar>
		<view class="container" v-show="options.type == 1 || options.type == 3">
			<view class="pic">
				<image :src="comboInfo.pic"></image>
			</view>
			<view class="name">
				<text>{{system_info == 'en_US'?comboInfo.en_name:comboInfo.name}}</text>
			</view>
			<view class="price" v-if="!detailsInfo">
				<text>{{i18n.index.mining16}}</text>
				<text class="number">{{comboInfo.price}}{{comboInfo.coin}}</text>
			</view>
			
			<!-- 显示机器人详情，停止挖矿 -->
			<view class="details" v-if="detailsInfo">
				<view class="details-title"></view>
				<view class="details-time">
					<text>{{detailsInfo.create_time}}（{{i18n.index.w15}}{{detailsInfo.endDay}}{{i18n.index.w16}}）</text>
				</view>
				<view class="details-info">
					<view class="flex-between">
						<text>{{i18n.index.w17}}</text>
						<text>{{i18n.index.w18}}</text>
					</view>
					<view class="flex-between">
						<text>{{detailsInfo.real_money}}USDT</text>
						<text>{{i18n.index['comboInfo' + detailsInfo.zt]}}</text>
					</view>
				</view>
				<view class="details-profit">
					<text>{{i18n.index.w19}}</text>
					<text>{{detailsInfo.released}}USDT</text>
				</view>
			</view>
			
			<!-- 入场规则 -->
			<view class="rule">
				<view class="rule-title">
					<text>{{i18n.index.mining17}}</text>
				</view>
				<view class="rule-con">
					<text v-html="comboInfo.remark"></text>
				</view>
			</view>
			<view class="start gradient-yellow" @tap="open" v-if="!detailsInfo && options.type != 3">
				<text>{{i18n.index.mining15}}</text>
			</view>
			<view class="start gradient-yellow" @tap="open" v-if="detailsInfo && detailsInfo.zt == 3">
				<text>{{i18n.index.mining15_1}}</text>
			</view>
			<view class="end" v-if="detailsInfo && detailsInfo.zt == 1 || detailsInfo && detailsInfo.zt == 2">
				<text>{{i18n.index.mining15_2}}</text>
			</view>
			<view class="start gradient-yellow" @tap="open" v-if="options.type == 3">
				<text>{{i18n.header.header9}}</text>
			</view>
		</view>
		<view class="container" v-show="options.type == 2">
			<view class="pic">
				<image :src="comboInfo.pic"></image>
			</view>
			<view class="name">
				<text>{{system_info == 'en_US'?comboInfo.en_name:comboInfo.name}}</text>
			</view>
			<view class="ipsf flex-center">
				<view class="left">
					<text>{{i18n.index.w20}}</text>
					<text>{{comboInfo.price}}{{comboInfo.coin}}</text>
				</view>
				<view class="right">
					<text>{{i18n.index.w21}}</text>
					<text>{{comboInfo.cycle}}{{i18n.index.w22}}</text>
				</view>
			</view>
			
			<!-- 入场规则 -->
			<view class="rule">
				<view class="rule-title">
					<text>{{i18n.index.mining17}}</text>
				</view>
				<view class="rule-con">
					<text v-html="comboInfo.remark"></text>
				</view>
			</view>
			<view class="flex-between">
				<view class="start gradient-yellow" @tap="gotoPage(`voucher?id=${comboInfo.id}&title=${comboInfo.name}`)">
					<text>{{i18n.index.mining15_3}}</text>
				</view>
				<view class="start gradient-green ml24" @tap="copyAddress">
					<text>{{i18n.index.mining15_4}}</text>
				</view>
			</view>
			<view class="address">
				<text>{{i18n.index.mining15_5}}: {{comboInfo.address}}</text>
			</view>
		</view>
		<view class="modal-mask" :class="{current: current}" @tap="close"></view>
		<view class="modal" :class="{current: current}">
			<view class="modal-title"></view>
			<view class="form-item" v-if="options.genre == 1 && !comboInfo.info">
				<input type="digit" v-model="amount" :placeholder="options.type == 1?i18n.withdrawal.lang20_4:i18n.withdrawal.lang20_1" />
			</view>
			<view class="form-item">
				<input type="text" v-model="paypass" :password="active" :placeholder="i18n.withdrawal.lang20" />
				<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
			</view>
			<view class="sure" @tap="sureConfirm">
				<text>{{detailsInfo?i18n.index.mining15_1:i18n.index.mining15}}</text>
			</view>
			<view class="assets">
				<text v-if="!detailsInfo">{{i18n.index.mining18}}{{comboInfo.amount}}USDT</text>
				<text v-if="detailsInfo">{{i18n.index.mining18_1}}{{detailsInfo.dedit}}USDT</text>
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
				current: false,
				paypass: '',
				amount: '',
				comboInfo: {},
				detailsInfo: {},
				system_info: '',
				options: {},
				isSlot: true,
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			this.system_info = uni.getStorageSync('system_info').language
			this.options = options
			this.getData(options)
		},
		methods: {
			getData(options){
				let { id, type } = options
				this.uniRequest({
					url: 'comboInfo',
					method: 'GET',
					data: {
						id,
						type
					}
				}).then(res => {
					this.comboInfo = res.result
					this.detailsInfo = res.result.info
				})
			},
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			addClass(classname){
				this[classname] = !this[classname]
			},
			open(){
				this.current = true
			},
			close(){
				this.current = false
			},
			sureConfirm(){
				let { detailsInfo, paypass } = this
				if(!paypass) return false
				let content = ""
				if(detailsInfo){
					content = "是否确定停止挖矿"
				} else {
					content = "是否确定开始挖矿"
				}
				uni.showModal({
					content,
					success: (res) => {
						if(res.confirm){
							this.sure()
						}
					}
				})
			},
			sure(){
				let { paypass, amount, comboInfo, detailsInfo, options } = this
				if(detailsInfo){
					this.uniRequest({
						url: 'stopMine',
						data: {
							id: detailsInfo.id,
							paypass
						}
					}).then(res => {
						uni.showToast({
							title: '已停止挖矿',
							icon: 'none',
						})
						this.current = false
						this.getData(options)
					})
				} else {
					this.uniRequest({
						url: 'lucky',
						data: {
							id: comboInfo.id,
							paypass,
							amount
						}
					}).then(res => {
						uni.showToast({
							title: '挖矿成功',
							icon: 'none',
						})
						this.current = false
						this.getData(options)
					})
				}
			},
			copyAddress(){
				let { comboInfo } = this
				uni.setClipboardData({
				    data: comboInfo.address,
				    success: function () {
				        uni.showToast({
							title: "复制成功",
							icon: "none"
						})
				    },
					fail: function() {
						uni.showToast({
							title: "保存失败，请稍后重试",
							icon: "none"
						});
					}
				});
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
.miningdetails{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.address{
			margin-top: 20rpx;
			font-size: 24rpx;
			color: #FFFFFF;
		}
		.pic{
			width: 140rpx;
			height: 152rpx;
			margin: 0 auto;
			image{
				width: 140rpx;
				height: 152rpx;
			}
		}
		.name{
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 22px;
			text-align: center;
			margin-top: 32rpx;
			opacity: 0.6;
		}
		.price{
			font-size: 42rpx;
			color: #FFFFFF;
			text-align: center;
			margin-top: 14rpx;
			margin-bottom: 56rpx;
			.number{
				color: #FFA404;
			}
		}
		.ipsf{
			margin-top: 60rpx;
			margin-bottom: 110rpx;
				view{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 28rpx;
					color: #FFFFFF;
					text{
						&:last-child{
							font-size: 36rpx;
							color: #FFA404;
							margin-top: 10rpx;
						}
					}
				}
		}
		.details{
			border-radius: 8rpx;
			background: #262733;
			padding: 40rpx 30rpx;
			margin-top: 70rpx;
			margin-bottom: 32rpx;
			.details-title{
				width: 194rpx;
				height: 42rpx;
				background: url(../../static/images/icon94.png) no-repeat;
				background-size: contain;
				position: relative;
				&::after{
					content: "";
					display: block;
					width: 70rpx;
					height: 6rpx;
					background: #FFA404;
					position: absolute;
					top: 46rpx;
					left: 50%;
					margin-left: -35rpx;
				}
			}
			.details-time{
				margin-top: 42rpx;
				margin-bottom: 12rpx;
				font-size: 24rpx;
				color: #FFFFFF;
			}
			.details-info{
				.flex-between{
					&:first-child{
						font-size: 24rpx;
						color: #FFFFFF;
						margin-bottom: 4rpx;
					}
					&:last-child{
						text{
							&:first-child{
								font-size: 36rpx;
								color: #FFA404;
							}
							&:last-child{
								font-size: 32rpx;
								color: #999999;
							}
						}
					}
				}
			}
			.details-profit{
				margin-top: 44rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				text{
					&:first-child{
						font-size: 24rpx;
						color: #FFFFFF;
						opacity: 0.8;
					}
					&:last-child{
						font-size: 72rpx;
						color: #FFA404;
						margin-top: 16rpx;
					}
				}
			}
		}
		.rule{
			border-radius: 8rpx;
			background: #262733;
			padding: 40rpx 30rpx;
			.rule-title{
				font-size: 28rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				&::before{
					content: "";
					display: inline-block;
					width: 8rpx;
					height: 32rpx;
					background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
					border-radius: 6rpx;
					margin-right: 10rpx;
				}
			}
			.rule-con{
				font-size: 28rpx;
				color: #FFFFFF;
				margin-top: 20rpx;
				line-height: 48rpx;
			}
		}
		.start{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 8rpx;
			text-align: center;
			color: #262733;
			margin-top: 100rpx;
			font-size: 32rpx;
			font-weight: 400;
			flex: 1;
		}
		.ml24{
			margin-left: 24rpx;
		}
		.end{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
			border-radius: 8rpx;
			text-align: center;
			color: #262733;
			margin-top: 100rpx;
			font-size: 32rpx;
			font-weight: 400;
			opacity: 0.5;
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
			transform: translateY(0);
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
			background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
			border-radius: 8rpx;
			text-align: center;
			font-size: 32rpx;
			color: #262733;
			margin-top: 50rpx;
		}
		.assets{
			font-size: 28rpx;
			color: #D8575A;
			margin-top: 24rpx;
			margin-left: 20rpx;
		}
	}
}
</style>
