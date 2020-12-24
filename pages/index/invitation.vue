<template>
	<view class="invitation">
		<header-bar :isBg="isBg" :title="i18n.header.header2"></header-bar>
		<view class="container">
			<view class="invitation-wrap">
				<view class="link">
					<text>{{currentUrl}}</text>
				</view>
				<view class="invitation-qr" v-if="currentUrl">
					<view class="qrimg">
					    <tki-qrcode
					    ref="qrcode"
					    :cid="cid"
					    :val="currentUrl"
					    :size="size"
					    :unit="unit"
					    :background="background"
					    :foreground="foreground"
					    :pdground="pdground"
					    :loadMake="loadMake"
					    :showLoading="showLoading"
					    :loadingText="loadingText"
					    />
					</view>
				</view>
				<view class="btn-wrap">
					<view class="btn-item gradient-blue" @tap="saveImage">{{i18n.index.lang12}}</view>
					<view class="btn-item gradient-pink" @tap="copyAddress">{{i18n.index.lang14}}</view>
				</view>
				<view class="btn-wrap">
					<view class="btn-item gradient-purple" @tap="copyLink">{{i18n.index.lang13_1}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue";
	export default {
		data() {
			return {
				currentUrl: '',
				cid: "1",
				size: 320,
				unit: 'upx',
				background: '#ffffff',
				foreground: '#000000',
				pdground: '#000000',
				showLoading: true,
				loadingText: '加载中...',
				loadMake: true,
				invite: '',
				isBg: true,
			}
		},
		onLoad(){
			this.getImage()
		},
		components:{
			HeaderBar,
			tkiQrcode
		},
		methods: {
			getImage(){
				this.uniRequest({
					url: 'invite',
					method: 'GET'
				}).then(res => {
					this.currentUrl = res.result.url
					this.invite = res.result.invite
					setTimeout(() => {
						this.$refs.qrcode._makeCode()
					}, 300)
				})
			},
			saveImage(){
				this.$refs.qrcode._saveCode()
			},
			copyAddress(){
				let { invite } = this
				uni.setClipboardData({
				    data: invite,
				    success: function () {
				        uni.showToast({
							title: "复制成功",
						})
				    },
					fail: function() {
						uni.showToast({
							title: "保存失败，请稍后重试",
						});
					}
				});
			},
			copyLink(){
				let { currentUrl } = this
				uni.setClipboardData({
				    data: currentUrl,
				    success: function () {
				        uni.showToast({
							title: "复制成功",
						})
				    },
					fail: function() {
						uni.showToast({
							title: "保存失败，请稍后重试",
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
.invitation{
	.container{
		.invitation-wrap{
			text-align: center;
			padding: 70rpx 30rpx 80rpx;
			background: linear-gradient(180deg, rgba(3, 3, 3, 0) 0%, #000000 100%);
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			.link{
				font-size: $fontG;
				color: $colorA;
				word-break: break-all;
			}
			.invitation-qr{
				width: 320rpx;
				height: 320rpx;
				margin: 36rpx auto 0;
				padding: 20rpx;
				background-color: $colorA;
				image{
					width: 320rpx;
					height: 320rpx;
				}
			}
			.btn-wrap{
				margin-top: 44rpx;
				display: flex;
				justify-content: space-between;
				.btn-item{
					width: 330rpx;
					height: 92rpx;
					line-height: 92rpx;
					border-radius: 8rpx;
					font-size: $fontH;
					color: $colorA;
					text-align: center;
					flex: 1;
					&:first-child{
						margin-right: 30rpx;
					}
					&:last-child{
						margin-right: 0;
					}
				}
			}
			.btn-wrap2{
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
}
</style>
