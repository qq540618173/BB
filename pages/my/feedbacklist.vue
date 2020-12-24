<template>
	<view class="news">
		<header-bar :title="i18n.header.header30"></header-bar>
		<view>
			<view class="news-list" v-for="(item, index) in newsList" :key="index" @tap="gotoDetail(item.id)">
				<view class="news-icon"></view>
				<view class="news-info">
					<view class="news-title">
						<text>{{item.content}}</text>
					</view>
					<view class="news-time">
						<text>{{item.create_time}}</text>
					</view>
				</view>
			</view>
			<view class="nodata" v-if="newsList.length == 0">
				<text>{{i18n.history.history20}}</text>
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
		onLoad() {
			this.getNewsList()
		},
		methods: {
			getNewsList(){
				this.uniRequest({
					url: 'getFeedbacks',
					method: 'GET'
				}).then(res => {
					this.newsList = res.result
				})
			},
			gotoDetail(id){
				// 详细页
				uni.navigateTo({
					url: `/pages/my/feedbackdetail?id=${id}`
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
	.nodata{
		font-size: $fontG;
		color: $colorA;
		text-align: center;
		line-height: 300rpx;
	}
	.news-list{
		padding: 34rpx 30rpx;
		background-color: $colorC;
		box-shadow: 0px -1px 0px 0px rgba(41,47,66,1);
		display: flex;
		.news-icon{
			width: 72rpx;
			height: 72rpx;
			margin-right: 20rpx;
			background: url('../../static/images/icon44.png') no-repeat;
			background-size: contain;
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
