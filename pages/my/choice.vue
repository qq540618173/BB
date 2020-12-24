<template>
	<view class="choice">
		<header-bar :title="title"></header-bar>
		<view class="container">
			<view class="item" @tap="gotoPage(`modify?type=${type}&title=${title}`)">
				<text>{{i18n.my.my3}}{{title}}</text>
			</view>
			<view class="item" @tap="gotoPage(`modify?type=${type}&mode=${type}&title=${title}`)">
				<text>{{i18n.my.my4}}{{title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				title: '',
				type: '',
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			this.title = options.title
			this.type = options.type
		},
		methods: {
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
.choice{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.item{
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 8rpx;
		background-color: #34374D;
		font-size: 32rpx;
		color: #FFA404;
		padding: 0 30rpx;
		margin-bottom: 24rpx;
		position: relative;
		&::after{
			content: "";
			display: block;
			width: 48rpx;
			height: 48rpx;
			background: url(../../static/images/icon18.png) no-repeat;
			background-size: contain;
			position: absolute;
			right: 20rpx;
			top: 26rpx;
		}
	}
}
</style>
