<template>
	<view class="exchange">
		<header-bar :isBg="isBg" :title="i18n.header.header5"></header-bar>
		<view class="container">
			<view class="exchange-item" @tap="gotoPage('exchangeu')">{{i18n.header.header6}}</view>
			<view class="exchange-item" @tap="gotoPage('exchangea')">{{i18n.header.header7}}</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				isBg: true
			}
		},
		components:{
			HeaderBar
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
					url
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
.exchange{
	.container{
		.exchange-item{
			height: 128rpx;
			line-height: 128rpx;
			padding: 0 20rpx 0 30rpx;
			font-size: $fontG;
			color: $colorA;
			position: relative;
			margin-bottom: 20rpx;
			background-color: $colorC;
			border-radius: 8rpx;
			&::after{
				content: "";
				display: block;
				width: 40rpx;
				height: 40rpx;
				background: url('../../static/images/icon18.png') no-repeat;
				background-size: contain;
				position: absolute;
				right: 20rpx;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
}
</style>
