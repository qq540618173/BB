<template>
	<view class="team">
		<header-bar :isBg="isBg" :title="i18n.header.header23"></header-bar>
		<view class="container">
			<view class="bg">
				<view v-for="(item, index) in teamList" :key="index" class="mb30">
					<view class="team-wrap">
						<view class="team-top">
							<view class="team-top-left">
								<view class="phone">
									<text>{{item.phone}}({{item.level}}{{i18n.my.lang71}})</text>
								</view>
								<view class="time">
									<text>{{i18n.my.lang67}}:{{item.create_time}}</text>
								</view>
							</view>
							<view class="team-top-right">
								<view class="amount">
									<text>{{i18n.my.lang66}}</text>
								</view>
								<view class="money">
									<text>{{item.invest}}USDT</text>
								</view>
							</view>
						</view>
						<view class="total">
							<text>{{i18n.my.lang104}}{{item.teams}}</text>
						</view>
						<view class="team-bot">
							<!-- <view class="team-bot-item">
								<view class="left">
									<text>{{i18n.my.lang68}}</text>
								</view>
								<view class="right">
									<text>{{item.total}}GCC</text>
								</view>
							</view> -->
							<view class="team-bot-item">
								<view class="left">
									<text>{{i18n.my.lang69}}</text>
								</view>
								<view class="right">
									<text>{{item.teams}}{{i18n.my.lang70}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="check">
						<view class="check-left" v-show="item.level != 5 && item.path" @tap="getData(item.id)">
							<text>{{i18n.my.lang95}}</text>
						</view>
						<view class="check-right" v-show="item.level != 1 && item.last_id" @tap="getData(item.last_id)">
							<text>{{i18n.my.lang96}}</text>
						</view>
					</view>
				</view>
				<view class="nodata" v-if="teamList.length == 0">
					<text>{{i18n.history.history20}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	import Treelist from '../../components/treelist.vue';
	export default {
		data() {
			return {
				teamList: [],
				total: '',
				isBg: false
			}
		},
		components:{
			HeaderBar,
			// Treelist
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(id){
				this.uniRequest({
					url: 'teams',
					method: 'GET',
					data: {
						id
					}
				}).then(res => {
					this.teamList = res.result.list
					this.phone = ''
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
.team{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.nodata{
		font-size: $fontG;
		color: $colorA;
		text-align: center;
		line-height: 300rpx;
	}
	.search-box{
		background-color: $colorC;
		padding: 20rpx 30rpx 32rpx;
		.search{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 72rpx;
			border-bottom: 2rpx solid $colorF;
			input{
				flex: 1;
				height: 72rpx;
				border: none;
				background: none;
				font-size: $fontH;
				color: $colorA;
			}
			.btn{
				width: 72rpx;
				height: 72rpx;
				background: url('../../static/images/icon50.png') center no-repeat;
				background-size: 40rpx 40rpx;
			}
		}
	}
	.container{
		padding: 20rpx 0;
		.bg{
			padding: 0 30rpx;
			.total{
				width: 300rpx;
				height: 60rpx;
				border-radius: 36rpx;
				line-height: 60rpx;
				text-align: center;
				margin: 30rpx auto 0;
				font-size: 32rpx;
				color: #FFFFFF;
				background-color: #59D0CF;
			}
			.mb30{
				margin-bottom: 30rpx;
				background: linear-gradient(135deg, #A59BFB 0%, #6C62F5 100%);
				border-radius: 8rpx;
			}
			.team-wrap{
				padding: 30rpx;
				// position: relative;
				// &::after{
				// 	content: "";
				// 	display: block;
				// 	height: 2rpx;
				// 	// background: url('../../static/images/icon19.png') repeat-x;
				// 	position: absolute;
				// 	left: 30rpx;
				// 	right: 30rpx;
				// 	bottom: 0;
				// }
				.team-top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 36rpx;
					.team-top-left{
						.phone{
							font-size: $fontI;
							color: $colorA;
							line-height: 40rpx;
						}
						.time{
							font-size: $fontk;
							color: $colorB;
							line-height: 28rpx;
							margin-top: 6rpx;
						}
					}
					.team-top-right{
						text-align: right;
						.amount{
							font-size: $fontJ;
							color: $colorB;
							line-height: 28rpx;
						}
						.money{
							font-size: $fontI;
							color: #59D0CF;
							line-height: 40rpx;
							margin-top: 6rpx;
						}
					}
				}
				.team-bot{
					padding: 28rpx 30rpx;
					background-color: #292F42;
					border-radius: 8rpx;
					display: none;
					.team-bot-item{
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 24rpx;
						&:last-child{
							margin-bottom: 0;
						}
						.left{
							font-size: $fontJ;
							color: $colorB;
						}
						.right{
							font-size: $fontJ;
							color: $colorA;
						}
					}
				}
			}
			.check{
				font-size: $fontJ;
				color: #FFA404;
				display: flex;
				justify-content: space-between;
				align-items: center;
				// padding: 20rpx 0 0;
				.check-left,.check-right{
					padding: 0 30rpx 30rpx;
					flex: 1;
				}
				.check-right{
					text-align: right;
				}
			}
		}
	}
	
}
</style>
