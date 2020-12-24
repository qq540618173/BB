<template>
	<view class="machine">
		<header-bar :title="i18n.header.header28"></header-bar>
		<view class="container">
			<view class="machine-wrap">
				<view class="machine-item flex-between" v-for="(item, index) in machineList" :key="index">
					<view class="left">
						<image :src="item.pic"></image>
						<text>{{item.coin}}</text>
					</view>
					<view class="right" :class="'right' + item.status">
						<text>{{i18n.index['machine' + item.status]}}</text>
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
				machineList: []
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
					url: 'minis',
					method: 'GET',
				}).then(res => {
					this.machineList = res.result
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
.machine{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.machine-wrap{
			background: #262733;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			padding: 48rpx 30rpx 48rpx 40rpx;
			.machine-item{
				font-size: 28rpx;
				margin-bottom: 56rpx;
				&:last-child{
					margin-bottom: 0;
				}
				.left{
					color: #FFFFFF;
					display: flex;
					align-items: center;
					image{
						width: 60rpx;
						height: 60rpx;
						margin-right: 16rpx;
					}
				}
				.right{
					&.right0{
						color: #FFFFFF;
					}
					&.right1{
						color: #FFA404;
					}
					&.right2{
						color: #D84932;
					}
				}
			}
		}
	}
}
</style>
