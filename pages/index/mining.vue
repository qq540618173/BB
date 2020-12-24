<template>
	<view class="mining">
		<header-bar :title="i18n.header.header9"></header-bar>
		<view class="container">
			<view class="mining-item" :class="{'hide': item.status == 1}" v-for="(item, index) in miningList" :key="index" @tap="gotoPage(item.id, item.price, item.status)">
				<view class="left">
					<view class="text text1">
						<text>{{i18n.index['mining'+item.id]}}</text>
					</view>
					<view class="text text2">
						<text>{{item.price}}USDT</text>
					</view>
					<view class="text text3">
						<text>{{i18n.index.mining15}}</text>
					</view>
				</view>
				<view class="right" :class="'right' + index"></view>
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
				miningList: [],
				showBuy: false,
				id: '',
				paypass: ''
			}
		},
		components:{
			HeaderBar
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'combo',
					method: 'GET'
				}).then(res => {
					this.miningList = res.result
				})
			},
			gotoPage(id, price, status){
				if(status == 1) return false
				uni.navigateTo({
				    url: `miningdetails?id=${id}&price=${price}`
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
.mining{
	.swiper1{
		margin-top: 40rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mining-item{
		border-radius: 8rpx;
		padding: 24rpx 54rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		// position: relative;
		margin-bottom: 24rpx;
		background-color: #34374D;
		&.hide{
			position: relative;
			&::after{
				content: "暂未开放";
				display: flex;
				align-items: center;
				justify-content: center;
				color: #EDEDED;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(0,0,0, 0.25);
			}
		}
		.left{
			.text{
				color: $colorA;
			}
			.text1{
				font-size: $fontA;
				color: #FFA404;
			}
			.text2{
				font-size: $fontH;
				margin-top: 20rpx;
				background: rgba(0,0,0,.3);
				padding: 4rpx 10rpx;
				border-radius: 34rpx;
			}
			.text3{
				font-size: $fontI;
				margin-top: 40rpx;
				text{
					position: relative;
					&::after{
						content: "";
						display: block;
						width: 40rpx;
						height: 40rpx;
						background: url('../../static/images/icon18.png') no-repeat;
						background-size: contain;
						position: absolute;
						right: -40rpx;
						top: 50%;
						margin-top: -18rpx;
					}
				}
			}
		}
		.right{
			width: 160rpx;
			height: 230rpx;
			&.right0{
				background: url('../../static/images/m1.png') center center no-repeat;
				background-size: contain;
			}
			&.right1{
				background: url('../../static/images/m2.png') no-repeat;
				background-size: contain;
			}
			&.right2{
				background: url('../../static/images/m3.png') no-repeat;
				background-size: contain;
			}
			&.right3{
				background: url('../../static/images/m4.png') no-repeat;
				background-size: contain;
			}
		}
	}
	.modal{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.5);
		z-index: 998;
		.modal-content{
			position: absolute;
			left: 30rpx;
			right: 30rpx;
			top: 50%;
			transform: translateY(-50%);
			background-color: $colorC;
			border-radius: 8rpx;
			padding: 40rpx 30rpx;
			.modal-btn{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 40rpx;
				.cancel{
					margin-right: 40rpx;
				}
				.cancel,
				.sure{
					line-height: 80rpx;
					border-radius: 8rpx;
					text-align: center;
					font-size: $fontG;
					color: $colorA;
					flex: 1;
				}
			}
		}
	}
}
</style>
