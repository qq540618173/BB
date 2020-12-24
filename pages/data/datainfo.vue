<template>
	<view class="data">
		<header-bar :title="year + i18n.data.d10"></header-bar>
		<view class="content">
			<view class="data-list" v-for="(item, keys, index) in dataList" :key="index">
				<view class="subtitle flex">
					<text>{{keys}}{{i18n.data.d11}}</text>
				</view>
				<scroll-view class="scrollview" scroll-x="true" scroll-left="120">
					<view class="table" :style="{width: (item.length+1)*160 + 'rpx', minWidth: '100%'}">
						<view class="flex">
							<view class="th">
								<text>{{i18n.data.d12}}</text>
							</view>
							<view class="th" v-for="(list, index) in item" :key="index">
								<text>{{list.date | timer}}</text>
							</view>
						</view>
						<view class="flex">
							<view class="th">
								<text>{{i18n.data.d5}}</text>
							</view>
							<view class="th" v-for="(list, index) in item" :key="index">
								<text>{{list.coin}}</text>
							</view>
						</view>
						<view class="flex">
							<view class="th">
								<text>{{i18n.data.d13}}</text>
							</view>
							<view class="th" v-for="(list, index) in item" :key="index">
								<text>{{list.ratio}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
				
			</view>
		</view>
		<tabbar :isCurrent="2"></tabbar>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue'
	import Tabbar from '../../components/tabbar.vue'
	export default {
		data() {
			return {
				year: '',
				dataList: [],
			}
		},
		components: {
			HeaderBar,
			Tabbar
		},
		onLoad(option) {
			this.year = option.year
			this.getData(option.year)
		},
		methods: {
			getData(year){
				this.uniRequest({
					url: 'profitInfo',
					method: 'GET',
					data: {
						year
					}
				}).then(res => {
					this.dataList = res.result
				})
			}
		},
		filters: {
			timer: (value) => {
				return value.replace(/(\w+)-(\w+)-(\w+)/,"$2.$3")
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
/* #ifdef H5 */
uni-page-body{
	padding-bottom: 100rpx;
}
/* #endif */
.data{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.content {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		background-size: contain;
		.data-list{
			margin-bottom: 40rpx;
			.subtitle{
				font-size: 32rpx;
				color: #FFFFFF;
				&::before{
					content: "";
					display: block;
					width: 6rpx;
					height: 30rpx;
					background: #FFA404;
					border-radius: 4rpx;
					margin-right: 10rpx;
				}
			}
			.scrollview{
				width: 100%;
				margin-top: 32rpx;
				.table{
					.flex{
						height: 92rpx;
						font-size: 28rpx;
						color: #FFFFFF;
						border: 1px solid #0ADF8F;
						border-top: 0;
						box-sizing: border-box;
						&:first-child{
							font-size: 24rpx;
							color: #262733;
							border: 0;
							background: linear-gradient(135deg, #18F1C2 0%, #0BE091 100%, #0ADF8F 100%, #0BE091 100%);
						}
						.th{
							width: 160rpx;
							text-align: center;
							box-sizing: border-box;
						}
					}
				}
			}
		}
	}
}
</style>
