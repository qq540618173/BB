<template>
	<view class="notice">
		<header-bar :title="title?title:i18n.header.header18"></header-bar>
		<view class="container" v-show="newsDetail.title">
			<view class="title">
				<text>{{newsDetail.title}}</text>
			</view>
			<view class="time">
				<text>{{newsDetail.create_time}}</text>
			</view>
			<view class="notice-wrap">
				<view v-html="newsDetail.content"></view>
			</view>
		</view>
		<view class="container" v-show="qaList">
			<view class="notice-wrap">
				<view v-html="qaList.content"></view>
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
				newsDetail: {},    //消息
				qaList: {}         //常见问题
			}
		},
		components:{
			HeaderBar
		},
		onLoad(option) {
			if(option.id){
				this.getNewsDetail(option.id)
			} else if(option.type){
				this.title = option.title
				this.getFAQ(option.type)
			}
		},
		methods: {
			getNewsDetail(id){
				// 获取消息公告
				this.uniRequest({
					url: 'noticeInfo',
					method: 'GET',
					data: {
						id
					}
				}).then(res => {
					this.newsDetail = res.result
				})
			},
			getFAQ(type){
				// type: 0、获取常见问题 1、获取操作指南
				this.uniRequest({
					url: 'faq',
					method: 'GET',
					data: {
						type
					}
				}).then(res => {
					this.qaList = res.result
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
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.title{
			color: $colorB;
			font-size: $fontG;
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
