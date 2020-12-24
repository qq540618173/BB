<template>
	<view class="legal">
		<header-bar :isBg="isBg" :title="type == 1?i18n.header.header37:i18n.header.header38"></header-bar>
		<view class="container">
			<view class="legal-item flex-between" v-for="(item, index) in lawyerList" :key="index">
				<view class="pic">
					<image :src="item.pic"></image>
				</view>
				<view class="info">
					<view class="name">
						<text>{{item.name}}</text>
					</view>
					<view class="des">
						<text>{{item.content}}</text>
					</view>
				</view>
				<view class="btn" @tap="gotoPage(`chats?id=${item.id}&name=${item.name}`)">
					<text>{{i18n.my.my34}}</text>
				</view>
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
				lawyerList: [],
				type: 1,
			}
		},
		components:{
			HeaderBar,
		},
		onLoad(options) {
			this.type = options.type
			this.getData(options.type)
		},
		methods: {
			getData(type){
				this.uniRequest({
					url: 'lawyer',
					method: 'GET',
					data: {
						type
					}
				}).then(res => {
					this.lawyerList = res.result
				})
			},
			gotoPage(url){
				uni.navigateTo({
				    url
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
.legal{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		padding: 50rpx 30rpx;
		.legal-item{
			margin-bottom: 50rpx;
			.pic{
				width: 128rpx;
				height: 128rpx;
				border-radius: 50%;
				border: 1rpx solid #979797;
				margin-right: 24rpx;
				overflow: hidden;
				image{
					width: 128rpx;
					height: 128rpx;
				}
			}
			.info{
				flex: 1;
				.name{
					font-size: 32rpx;
					color: #FFFFFF;
				}
				.des{
					max-height: 64rpx;
					line-height: 32rpx;
					font-size: 24rpx;
					color: #FFFFFF;
					opacity: 0.8;
					overflow: hidden;
					margin-top: 4rpx;
				}
			}
			.btn{
				height: 48rpx;
				line-height: 48rpx;
				padding: 0 20rpx;
				text-align: center;
				background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
				border-radius: 4rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				margin-left: 24rpx;
			}
		}
	}
}
</style>
