<template>
	<view class="news">
		<header-bar :title="i18n.header.header18"></header-bar>
		<view>
			<view class="news-list" v-for="(item, index) in newsList" :key="index" @tap="gotoDetail(item.id)">
				<view class="news-icon" v-if="item.pic == ''"></view>
				<view class="news-pic" v-if="item.pic != ''">
					<image :src="item.pic" mode=""></image>
				</view>
				<view class="news-info">
					<view class="news-title">
						<text>{{item.title}}</text>
					</view>
					<view class="news-time">
						<text>{{item.create_time}}</text>
					</view>
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
				title: '',
				newsList: []
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			this.getNewsList(options.type)
		},
		methods: {
			getNewsList(type){
				this.uniRequest({
					url: 'notice',
					method: 'GET',
					data: {
						type
					}
				}).then(res => {
					this.newsList = res.result.data
				})
			},
			gotoDetail(id){
				// 详细页
				uni.navigateTo({
					url: `/pages/my/newsdetail?id=${id}`
				})
			}
		},
		computed: {  
			i18n () {  
				this.title = this.$t('index').header.header18
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
.news{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.news-list{
		padding: 34rpx 30rpx;
		background-color: #262733;
		box-shadow: 0px -1px 0px 0px rgba(41,47,66,1);
		display: flex;
		.news-icon{
			width: 72rpx;
			height: 72rpx;
			margin-right: 20rpx;
			background: url('../../static/images/icon44.png') no-repeat;
			background-size: contain;
		}
		.news-pic{
			width: 72rpx;
			height: 72rpx;
			margin-right: 20rpx;
			image{
				width: 72rpx;
				height: 72rpx;
			}
		}
		.news-info{
			.news-title{
				font-size: $fontI;
				color: #EDEDED;
				width: calc(100vw - 142rpx);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
			.news-time{
				font-size: $fontJ;
				color: $colorB;
			}
		}
	}
}
</style>
