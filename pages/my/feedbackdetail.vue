<template>
	<view class="notice">
		<header-bar :title="title?title:i18n.header.header30"></header-bar>
		<view class="container">
			<view class="title">
				<text>{{newsDetail.content}}</text>
			</view>
			<view class="time">
				<text>{{newsDetail.create_time}}</text>
			</view>
			<view class="notice-wrap">
				<view v-html="newsDetail.replay"></view>
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
				newsDetail: {}, 
			}
		},
		components:{
			HeaderBar
		},
		onLoad(option) {
			this.getNewsDetail(option.id)
		},
		methods: {
			getNewsDetail(id){
				this.uniRequest({
					url: 'feedback',
					method: 'GET',
					data: {
						id
					}
				}).then(res => {
					this.newsDetail = res.result
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
.notice{
	.container{
		.title{
			color: $colorB;
			font-size: $fontG;
			display: flex;
			align-items: center;
			&::before{
				content: "";
				display: block;
				width: 68rpx;
				height: 68rpx;
				margin-right: 20rpx;
				background: url(../../static/images/icon86.png) no-repeat;
				background-size: contain;
			}
		}
		.time{
			color: #C5C6CA;
			font-size: $fontJ;
			margin-top: 24rpx;
		}
		.notice-wrap{
			color: $colorE;
			font-size: $fontI;
			margin-top: 16rpx;
			line-height: 52rpx;
		}
	}
}
</style>
<style>
	.notice-wrap >>> img{
		max-width: 100%;
		margin: 20rpx 0;
	}
</style>
