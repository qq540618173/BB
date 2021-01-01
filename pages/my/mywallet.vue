<template>
	<view class="mywallet">
		<header-bar :isBg="isBg" :title="i18n.header.header21"></header-bar>
		<view class="container">
			<view class="mywallet-wrap">
				<view class="mywallet-title">
					<image class="top-img" src="../../static/images/icon32.png"></image>
					<text>{{i18n.my.lang58}}</text>
				</view>
				<view class="address">
					<text>{{address}}</text>
				</view>
			</view>
			<view class="btn-wrap">
				<view class="btn-item gradient-blue" @tap="copyAddress">{{i18n.my.lang59}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				address: '',
				isBg: true
			}
		},
		components:{
			HeaderBar
		},
		onLoad() {
			this.getAddress()
		},
		methods: {
			copyAddress(){
				let { address } = this
				uni.setClipboardData({
				    data: address,
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
			},
			addClass(classname){
				this[classname] = !this[classname]
			},
			getAddress(){
				this.uniRequest({
					url: 'getAddress',
					method: 'GET'
				}).then(res => {
					this.address = res.result.address
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
.mywallet{
	.container{
		.mywallet-wrap{
			background-color: $colorC;
			text-align: center;
			padding-bottom: 54rpx;
			box-shadow:0px 8rpx 8rpx 0px rgba(0,0,0,0.05);
			border-radius: 8rpx;
			.mywallet-title{
				padding-top: 54rpx;
				.top-img{
					width: 72rpx;
					height: 72rpx;
					display: block;
					margin: 0 auto 10rpx;
				}
				text{
					color: $colorB;
					font-size: $fontI;
				}
			}
			.address{
				font-size: $fontB;
				color: #EDEDED;
				margin-top: 20rpx;
				padding: 0 40rpx;
				word-break: break-all;
			}
		}
		.btn-wrap{
			margin-top: 30rpx;
			.btn-item{
				height: 92rpx;
				line-height: 92rpx;
				border-radius: 50rpx;
				font-size: $fontH;
				color: $colorA;
				text-align: center;
			}
		}
	}
}
</style>
