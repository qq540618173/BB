<template>
	<view class="miningdetails">
		<header-bar :title="i18n.header.header9"></header-bar>
		<view class="container">
			<view class="img" :class="'img' + millInfo.combo_id"></view>
			<view class="name">
				<text>{{i18n.index['mining' + millInfo.combo_id]}}</text>
			</view>
			<view class="info">
				<view class="title"></view>
				<view class="uni-list">
					<view class="time" v-if="millInfo.endDay > 0">
						<text>{{millInfo.create_time}}（{{i18n.index.mining19}}{{millInfo.endDay}}{{i18n.index.mining20}}）</text>
					</view>
					<view class="time" v-if="millInfo.endDay == 0">
						<text>{{millInfo.create_time}}（{{i18n.index['mine' + millInfo.status]}}）</text>
					</view>
					<view class="list-wrap-content">
						<view>
							<view class="contnet-lt">
								<text>{{i18n.index['mining' + millInfo.combo_id]}}</text>
							</view>
							<view class="contnet-lb">
								<text>{{millInfo.actual_money}}USDT</text>
							</view>
						</view>
						<view>
							<view class="contnet-rt">
								<text>{{i18n.index.mining21}}</text>
							</view>
							<view class="contnet-rb">
								<text class="active">{{i18n.index['mine' + millInfo.status]}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="profit">
					<view class="top">
						<text>{{i18n.index.mining11}}</text>
					</view>
					<view class="bot">
						<text>{{millInfo.released}}GCC</text>
					</view>
				</view>
			</view>
			<view class="rule">
				<view class="rule-title">
					<text>{{i18n.index.mining17}}</text>
				</view>
				<view class="rule-con">
					<text v-html="rule"></text>
				</view>
			</view>
			<view class="start" :class="{'warning': millInfo.status > 0}" @tap="open(millInfo.status)">
				<text>{{i18n.index.mining25}}</text>
			</view>
		</view>
		<view class="modal-mask" :class="{current: current}" @tap="close"></view>
		<view class="modal" :class="{current: current}">
			<view class="modal-title"></view>
			<view class="form-item">
				<input type="text" v-model="paypass" :password="active" :placeholder="i18n.withdrawal.lang20" />
				<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
			</view>
			<view class="sure" @tap="sureConfirm(money)">
				<text>{{i18n.index.mining26}}</text>
			</view>
			<!-- <view class="assets">
				<text>{{i18n.index.mining27}}{{money}}USDT</text>
			</view> -->
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
				mineId: '',
				paypass: '',
				millInfo: [],
				rule: '',
				money: '',
			}
		},
		components:{
			HeaderBar
		},
		onLoad(option) {
			this.mineId = option.id
			this.getData(option.id)
		},
		onUnload() {
			
		},
		methods: {
			getData(id){
				this.uniRequest({
					url: 'millInfo',
					method: 'GET',
					data: {
						id
					}
				}).then(res => {
					this.millInfo = res.result.info
					this.rule = res.result.desc
					this.money = res.result.money
				})
			},
			addClass(classname){
				this[classname] = !this[classname]
			},
			open(status){
				if(status == 1) return false
				this.current = true
			},
			close(){
				this.current = false
			},
			sureConfirm(money){
				let paypass = this.paypass
				if(!paypass) return false
				uni.showModal({
					content: `停止挖矿扣取矿机收益和云矿机服务器占用费用共${money}USDT`,
					success: (res) => {
						if(res.confirm){
							this.sure()
						}
					}
				})
			},
			sure(){
				let id = this.mineId
				let paypass = this.paypass
				this.uniRequest({
					url: 'stopMine',
					data: {
						id,
						paypass
					}
				}).then(res => {
					uni.showToast({
						title: '已停止挖矿',
						icon: 'none',
					})
					this.current = false
					this.getData(id)
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
.miningdetails{
	.container{
		.img{
			width: 160rpx;
			height: 230rpx;
			margin: 0 auto;
			&.img1{
				background: url('../../static/images/m1.png') center center no-repeat;
				background-size: contain;
			}
			&.img2{
				background: url('../../static/images/m2.png') no-repeat;
				background-size: contain;
			}
			&.img3{
				background: url('../../static/images/m3.png') no-repeat;
				background-size: contain;
			}
			&.img4{
				background: url('../../static/images/m4.png') no-repeat;
				background-size: contain;
			}
		}
		.info{
			background-color: #34374D;
			border-radius: 8rpx;
			padding: 44rpx 30rpx;
			margin-bottom: 32rpx;
			margin-top: 70rpx;
			.title{
				width: 156rpx;
				height: 42rpx;
				background: url(../../static/images/icon67.png) no-repeat;
				background-size: contain;
				position: relative;
				&::after{
					content: "";
					display: block;
					width: 70rpx;
					height: 6rpx;
					background-color: #59D0CF;
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					margin-left: -35rpx;
				}
			}
			.uni-list{
				margin-top: 32rpx;
			}
			.time{
				font-size: 24rpx;
				color: #FFFFFF;
				margin-bottom: 16rpx;
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
							color: #FFA404;
						}
					}
				}
			}
			.profit{
				margin-top: 44rpx;
				text-align: center;
				.top{
					font-size: 24rpx;
					color: #FFFFFF;
					opacity: 0.8;
				}
				.bot{
					font-size: 72rpx;
					color: #FFA404;
					font-weight: bold;
					margin-top: 16rpx;
				}
			}
		}
		.name{
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 22px;
			text-align: center;
			margin-top: 32rpx;
		}
		.price{
			font-size: 42rpx;
			color: #FFFFFF;
			text-align: center;
			margin-top: 14rpx;
			.number{
				color: #D8575A;
			}
		}
		.rule{
			border-radius: 8rpx;
			background: #34374D;
			padding: 40rpx 30rpx;
			margin-top: 56rpx;
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
					background-color: #59D0CF;
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
			background: #D8575A;
			border-radius: 50rpx;
			text-align: center;
			color: #FFFFFF;
			margin-top: 100rpx;
			&.warning{
				opacity: 0.5;
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
			background: #D8575A;
			border-radius: 50rpx;
			text-align: center;
			color: #FFFFFF;
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