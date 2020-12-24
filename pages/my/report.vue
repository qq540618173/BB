<template>
	<view class="report">
		<header-bar :isBg="isBg" :isSlot="isSlot" :title="i18n.my.my16">
			<text slot="text" @tap="gotoPage('reportrecord')">{{i18n.my.my17}}</text>
		</header-bar>
		<view class="container">
			<view class="direct-wrap">
				<view class="form-label">
					<text>{{i18n.my.my10}}</text>
				</view>
				<view class="form-item">
					<!-- <picker mode="selector" @change="bindPickerChange($event, instruct)" :range-key="'coin'" :value="index" :range="instruct">
						<view class="uni-input">{{instruct[index]?instruct[index].coin:''}}</view>
					</picker> -->
					<input type="text" v-model="instruct.coin" :placeholder="i18n.my.my19" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my24}}</text>
				</view>
				<view class="form-item">
					<picker mode="selector" @change="bindPickerStatusChange" :value="index1" :range="type">
						<view class="uni-input">{{type[index1]}}</view>
					</picker>
				</view>
				<view class="form-label">
					<text>{{i18n.my.my18}}</text>
				</view>
				<view class="form-item">
					<input type="digit" v-model="submitData.number" :placeholder="i18n.my.my19" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my20}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="reportNumber" :placeholder="i18n.my.my21" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my22}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="price" :placeholder="i18n.my.my23" disabled="true" />
				</view>
				<view class="form-label">
					<text>{{i18n.my.my26}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="submitData.order" :placeholder="i18n.my.my27" />
				</view>
				<view class="form-label">
					<text>{{i18n.index.w10}}</text>
				</view>
				<view class="upload" @tap="uploadFile('pic')">
					<image :src="verifiedInfo.pic" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="start gradient-yellow" @tap="submit">
				<text>{{i18n.my.my16}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				isBg: false,
				isSlot: true,
				instruct: {},
				type: ['买入', '卖出'],
				index: 0,
				index1: 0,
				price: '',
				currentData: {},
				submitData: {
					number: '',
				},
				pic: '',
				verifiedInfo: {
					pic: '',
					status: -1,
				},
			}
		},
		components:{
			HeaderBar,
		},
		onLoad() {
			this.getData()
			this.type.unshift(this.i18n.my.my25)
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'plan',
					method: 'GET'
				}).then(res => {
					this.instruct = res.result.instruct
				})
			},
			// bindPickerChange(e, v){
			// 	let { index1 } = this
			// 	this.index = e.target.value
			// 	this.currentData = v[e.detail.value]
			// 	this.submitData.instruct_id = v[e.detail.value].coin_id
			// 	if (index1 == 1) {
			// 		this.price = v[e.detail.value].price
			// 	} else if(index1 == 2) {
			// 		this.price = v[e.detail.value].ring_price
			// 	} else {
			// 		this.price = ''
			// 	}
			// },
			bindPickerStatusChange(e){
				let { instruct } = this
				this.index1 = e.target.value
				this.submitData.type = e.target.value
				if (e.target.value == 1) {
					this.price = instruct.price
				} else if(e.target.value == 2) {
					this.price = instruct.ring_price
				} else {
					this.price = ''
				}
			},
			submit(){
				let { submitData, pic, instruct } = this
				this.uniRequest({
					url: 'report',
					data: {
						...submitData,
						pic,
						instruct_id: instruct.id
					}
				}).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
					this.submitData = {}
					this.verifiedInfo = {
						pic: './static/images/add.png',
						status: -1,
					},
					this.index = 0
					this.index1 = 0
					this.price = ""
				})
			},
			gotoPage(url){
				uni.navigateTo({
				    url
				});
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
		},
		computed: {  
			i18n () {  
				return this.$t('index')  
			},
			reportNumber () {
				let { price, submitData } = this
				if (!price || !submitData.number) {
					return
				}
				return price * submitData.number
			}
		}
	}
</script>

<style lang="scss">
.report{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		padding: 50rpx 30rpx;
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
		.amount-item{
			border-radius: 16rpx;
			padding: 40rpx 30rpx 56rpx;
			box-sizing: border-box;
			margin-bottom: 24rpx;
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
			.amount-top{
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
			.amount-bot{
				color: #FFFFFF;
				margin-top: 20rpx;
				.big{
					font-size: 64rpx;
				}
				.small{
					font-size: 42rpx;
				}
			}
		}
		.direct-wrap{
			padding: 44rpx 30rpx 40rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			margin-bottom: 24rpx;
			.direct-price{
				font-size: 28rpx;
				color: #FFA404;
				padding-left: 28rpx;
				white-space: nowrap;
				margin-bottom: 20rpx;
			}
			uni-picker{
				width: 100%;
				height: 92rpx;
				line-height: 92rpx;
				background: none;
				border-radius: 8rpx;
				border: 1rpx solid #999999;
				padding: 0 20rpx;
				color: #FFFFFF;
			}
		}
		.form-item{
			margin-bottom: 36rpx;
		}
	}
	.start{
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 8rpx;
		text-align: center;
		color: #262733;
		font-size: 32rpx;
		font-weight: 400;
	}
}
</style>
