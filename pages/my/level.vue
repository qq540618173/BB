<template>
	<view class="level">
		<header-bar :isBg="isBg" :title="i18n.header.header32"></header-bar>
		<view class="container">
			<view class="bg">
				<view class="member-level-wrap">
					<view class="level-img">
						<image :src="`../../static/images/l${level}.png`"></image>
					</view>
					<view class="level-text">
						<view>
							<text>距离成为LV{{level+1}}还需直推人数:{{nextInfo.recom}}人</text>
						</view>
						<view>
							<text>距离成为LV{{level+1}}还需团队人数达到:{{nextInfo.members}}人</text>
						</view>
						<view>
							<text>距离成为LV{{level+1}}还需团队总业绩:{{nextInfo.performance}}USDT</text>
						</view>
					</view>
				</view>
				<view class="level-title">
					<text>什么是会员等级</text>
				</view>
				<view class="level-info">
					<text>会员等级是根据直推人数、团队人数、团队总业绩进行划分的,直推人数、团队人数、团队业绩越多,等级越高</text>
				</view>
				<view class="level-title">
					<text>等级划分</text>
				</view>
				<view class="level-table">
					<view class="thead">
						<view class="th">
							<text>会员<br />等级</text>
						</view>
						<view class="th">
							<text>需直推<br />人数</text>
						</view>
						<view class="th">
							<text>需团队<br />人数</text>
						</view>
						<view class="th">
							<text>需团队业绩<br />(USDT)</text>
						</view>
						<view class="th">
							<text>等级收益<br />(等值{{coin}})</text>
						</view>
					</view>
					<view class="tbody">
						<view class="tr" v-for="(item, index) in levelInfo" :key="index">
							<view class="td">
								<text>{{item.level}}</text>
							</view>
							<view class="td">
								<text>{{item.recom}}</text>
							</view>
							<view class="td">
								<text>{{item.members}}</text>
							</view>
							<view class="td">
								<text>{{item.performance}}</text>
							</view>
							<view class="td">
								<text>{{item.scale}}%</text>
							</view>
						</view>
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
				isBg: false,
				levelInfo: [],
				nextInfo: {},
				level: 0,
				coin: '',
			}
		},
		components:{
			HeaderBar,
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'userLevel',
					method: 'GET'
				}).then(res => {
					this.levelInfo = res.result.community.reverse()
					this.nextInfo = res.result.next_info
					this.coin = res.result.coin
					this.level = Number(res.result.level.split('')[2])
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
.level{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		padding: 20rpx 0;
		.bg{
			padding: 0 30rpx;
			.member-level-wrap{
				height: 600rpx;
				background: #292F3C;
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
				border-radius: 4px;
				padding: 44rpx 30rpx 34rpx;
				margin-bottom: 44rpx;
				.level-img{
					width: 636rpx;
					height: 330rpx;
					margin: 0 auto;
					image{
						width: 636rpx;
						height: 330rpx;
					}
				}
				.level-text{
					margin-top: 52rpx;
					font-size: 24rpx;
					color: #FFFFFF;
					line-height: 52rpx;
				}
			}
			.level-title{
				font-size: 28rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				margin-bottom: 16rpx;
				&::before{
					content: "";
					display: block;
					width: 8rpx;
					height: 32rpx;
					background: linear-gradient(135deg, #93D8FE 0%, #5AB0FC 100%);
					border-radius: 6rpx;
					margin-right: 10rpx;
				}
			}
			.level-info{
				font-size: 28rpx;
				color: #FFFFFF;
				line-height: 40rpx;
				margin-bottom: 44rpx;
			}
			.level-table{
				.thead{
					background: linear-gradient(135deg, #93D8FE 0%, #5AB0FC 100%);
					border-radius: 8rpx 8rpx 0px 0px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.tbody{
					background: #292F3C;
					border-radius: 0rpx 0rpx 8rpx 8rpx;
				}
				.tr{
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.th, .td{
					text-align: center;
					font-size: 24rpx;
					color: #FFFFFF;
					padding: 20rpx 0 16rpx;
					&:nth-child(1){
						width: 15%;
					}
					&:nth-child(2){
						width: 15%;
					}
					&:nth-child(3){
						width: 15%;
					}
					&:nth-child(4){
						width: 30%;
					}
					&:nth-child(5){
						width: 25%;
					}
				}
				.td{
					padding: 36rpx 0rpx;
				}
			}
		}
	}
	
}
</style>
