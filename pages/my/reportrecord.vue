<template>
	<view class="pledgerecord">
		<header-bar :isBg="isBg" :title="i18n.header.header36"></header-bar>
		<view class="container">
			<view class="pledge-box" :class="'pledge' + item.status" v-for="(item, index) in pledgeList" :key="index">
				<view>
					<text>{{i18n.my.my29}}：</text>
					<text>{{item.order}}</text>
				</view>
				<view>
					<text>{{i18n.my.my30}}：</text>
					<text>{{item.number}}{{item.coin}}</text>
				</view>
				<view>
					<text>{{i18n.my.my31}}：</text>
					<text>{{item.number * item.price}}USDT</text>
				</view>
				<view>
					<text>{{i18n.my.my32}}：</text>
					<text>{{i18n.index['inco' + item.type]}}</text>
				</view>
				<view>
					<text>{{i18n.my.my33}}：</text>
					<text>{{item.create_time}}</text>
				</view>
			</view>
			<view class="nodata" v-if="pledgeList.length == 0">
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
				pledgeList: [],
				isBg: false
			}
		},
		components:{
			HeaderBar
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.uniRequest({
					url: 'reportList',
					method: 'GET',
				}).then(res => {
					this.pledgeList = res.result.data
				})
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
.pledgerecord{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.pledge-box{
			padding: 30rpx;
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			line-height: 68rpx;
			position: relative;
			font-size: 28rpx;
			color: #FFFFFF;
			margin-bottom: 28rpx;
			&.pledge0{
				&::after{
					content: "";
					display: block;
					width: 160rpx;
					height: 160rpx;
					background: url(../../static/images/s0.png) no-repeat;
					background-size: contain;
					position: absolute;
					right: 60rpx;
					top: 50%;
					margin-top: -80rpx;
				}
			}
			&.pledge1{
				&::after{
					content: "";
					display: block;
					width: 160rpx;
					height: 160rpx;
					background: url(../../static/images/s1.png) no-repeat;
					background-size: contain;
					position: absolute;
					right: 60rpx;
					top: 50%;
					margin-top: -80rpx;
				}
			}
			&.pledge2{
				&::after{
					content: "";
					display: block;
					width: 160rpx;
					height: 160rpx;
					background: url(../../static/images/s2.png) no-repeat;
					background-size: contain;
					position: absolute;
					right: 60rpx;
					top: 50%;
					margin-top: -80rpx;
				}
			}
			text{
				&:first-child{
					color: #999999;
					margin-right: 8rpx;
				}
				&.color{
					color: #FFA404
				}
			}
		}
		.nodata{
			font-size: $fontG;
			color: $colorA;
			text-align: center;
			line-height: 300rpx;
		}
	}
}
</style>
