<template>
	<view class="voucher">
		<header-bar :title="title"></header-bar>
		<view class="container">
			<view class="pledge-wrap">
				<view class="form-label">
					<text>{{i18n.index.w7}}</text>
				</view>
				<view class="form-item">
					<input type="digit" v-model="amount" :placeholder="i18n.withdrawal.lang20_2" />
				</view>
				<!-- <view class="form-label">
					<text>{{i18n.index.w8}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="order" :placeholder="i18n.withdrawal.lang20_3" />
				</view> -->
				<view class="form-label">
					<text>{{i18n.index.w9}}</text>
				</view>
				<view class="form-item">
					<input type="text" v-model="password" :password="active" :placeholder="i18n.withdrawal.lang20" />
					<view class="password" :class="{'active': !active}" @tap="addClass('active')"></view>
				</view>
				<view class="form-label">
					<text>{{i18n.index.w10}}</text>
				</view>
				<view class="upload" @tap="uploadFile('pic')">
					<image :src="verifiedInfo.pic" mode="scaleToFill"></image>
				</view>
			</view>
			<view class="pledge-btn gradient-yellow" @tap="submit">
				<text>{{i18n.index.mining15_3}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				combo_id: '',
				amount: '',
				order: '',
				password: '',
				pic: '',
				active: true,
				verifiedInfo: {
					pic: '',
					status: -1,
				},
				title: '',
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			this.combo_id = options.id
			this.title = options.title
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			addClass(classname){
				this[classname] = !this[classname]
			},
			submit(){
				let { combo_id, amount, order, password, pic } = this
				this.uniRequest({
					url: 'pledge',
					data: {
						amount,
						order,
						combo_id,
						pic,
						password
					}
				}).then(res => {
					uni.showToast({
						title: res.message,
						icon: 'none',
					})
					this.amount = ''
					this.password = ''
					this.order = ''
					this.verifiedInfo = {
						pic: '',
						status: -1,
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
		},
		computed: {  
			i18n () {
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
.voucher{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.pledge-wrap{
			background: #262733;
			box-shadow: 0px 8rpx 8rpx 0px rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			padding: 60rpx 30rpx 80rpx;
			.form-item{
				margin-bottom: 36rpx;
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
		}
		.pledge-btn{
			height: 92rpx;
			line-height: 92rpx;
			border-radius: 8rpx;
			text-align: center;
			font-size: 32rpx;
			color: #262733;
			margin-top: 40rpx;
		}
	}
}
</style>
