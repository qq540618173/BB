<template>
	<view class="authentication">
		<header-bar :isBg="isBg" :title="i18n.header.header27"></header-bar>
		<view class="container">
			<view class="title">
				<view class="left">
					<text>{{i18n.my.lang97}}</text>
				</view>
				<view class="right" :class="'status'+verifiedInfo.status" @tap="recertification">
					<text>{{i18n.my['status'+verifiedInfo.status]}}</text>
				</view>
			</view>
			<view class="top-form">
				<input type="text" v-model="verifiedInfo.username" placeholder-class="placeholder" :placeholder="i18n.my.lang102" :disabled="verifiedInfo.status>0" />
			</view>
			<view class="top-form">
				<input type="text" v-model="verifiedInfo.idcart" placeholder-class="placeholder" :placeholder="i18n.my.lang103" :disabled="verifiedInfo.status>0" />
			</view>
			<view class="title mt46">
				<view class="left">
					<text>{{i18n.my.lang98}}</text>
				</view>
			</view>
			<view class="upload" @tap="uploadFile('idcartfront')">
				<image :src="verifiedInfo.idcartfront" mode="scaleToFill"></image>
			</view>
			<view class="title mt46">
				<view class="left">
					<text>{{i18n.my.lang99}}</text>
				</view>
			</view>
			<view class="upload" @tap="uploadFile('idcartback')">
				<image :src="verifiedInfo.idcartback" mode="scaleToFill"></image>
			</view>
			<!-- <view class="title mt46">
				<view class="left">
					<text>{{i18n.my.lang100}}</text>
				</view>
			</view>
			<view class="upload" @tap="uploadFile('idcartman')">
				<image :src="verifiedInfo.idcartman" mode="scaleToFill"></image>
			</view> -->
			<view class="upload-btn gradient-yellow" v-show="verifiedInfo.status == -1" @tap="submit">{{i18n.my.lang101}}</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				verifiedInfo: {
					username: '',
					idcart: '',
					idcartfront: '',
					idcartback: '',
					idcartman: '',
					status: -1,
				},
				idcartfront: '',
				idcartback: '',
				idcartman: '',
				isBg: false,
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
					url: 'verifiedInfo',
					method: 'GET'
				}).then(res => {
					if(res.result.status >=0){
						this.verifiedInfo = res.result
						this.verifiedInfo.idcart = res.result.idcart.replace(/(\w{6})\w*(\w{4})/, '$1****$2')
						if(res.result.status == 1){
							this.verifiedInfo.idcartfront = this.verifiedInfo.idcartback = this.verifiedInfo.idcartman = '../../static/images/icon87.png'
						}
					}
				})
			},
			uploadFile(key){
				if(this.verifiedInfo.status != -1){
					return
				}
				uni.chooseImage({
					count: 1,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths
						this.verifiedInfo[key] = tempFilePaths[0]
						uni.uploadFile({
							url: 'http://supremeroyals.com/api/upload',
							header: {
								'Access-Token': uni.getStorageSync('userInfo').token
							},
							name: 'image',
							filePath: tempFilePaths[0],
							success: res => {
								let newres = JSON.parse(res.data)
								this[key] = newres.result.img
							}
						})
				    }
				});
			},
			recertification(){
				if(this.verifiedInfo.status == 2){
					this.verifiedInfo = {
						username: '',
						idcart: '',
						idcartfront: '../../static/images/add.png',
						idcartback: '../../static/images/add.png',
						idcartman: '../../static/images/add.png',
						status: -1,
					}
				}
			},
			submit(){
				if(this.verifiedInfo.status != -1){
					return
				}
				let { verifiedInfo, idcartfront, idcartback, idcartman } = this
				this.uniRequest({
					url: 'verified',
					data: {
						username: verifiedInfo.username,
						idcart: verifiedInfo.idcart,
						idcartfront,
						idcartback,
						idcartman
					}
				}).then(res => {
					if(res.status == '200'){
						this.verifiedInfo.status = 0
						uni.showToast({
							title: res.message
						})
					}
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
.authentication{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 46rpx;
			.left{
				font-size: $fontH;
				color: $colorH;
				display: flex;
				align-items: center;
				&::before{
					content: "";
					display: block;
					width: 8rpx;
					height: 32rpx;
					background: #FFA404;
					border-radius:2px;
					margin-right: 12rpx;
				}
			}
			.right{
				font-size: $fontH;
				&.status0{
					color: $colorH;
				}
				&.status1{
					color: #58D333;
				}
				&.status2{
					color: #FF4436;
				}
			}
		}
		.top-form{
			margin-bottom: 20rpx;
			input{
				width: 100%;
				height: 92rpx;
				line-height: 92rpx;
				background: #30374e;
				border-radius: 8rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				font-size: $fontI;
				color: $colorA;
			}
			.placeholder{
				font-size: $fontI;
				color: $colorB;
			}
		}
		.mt46{
			margin-top: 46rpx;
		}
		.upload{
			width: 180rpx;
			height: 180rpx;
			background: url('../../static/images/add.png') no-repeat;
			background-size: contain;
			border-radius: 10rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.upload-btn{
			width: 100%;
			height: 92rpx;
			line-height: 92rpx;
			text-align: center;
			font-size: 32rpx;
			color: #262733;
			border-radius: 8rpx;
			margin-top: 84rpx;
		}
	}
}
</style>
