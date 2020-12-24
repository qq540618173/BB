<template>
	<view class="choice">
		<header-bar :title="i18n.index['income' + me] + i18n.index.income"></header-bar>
		<view class="container">
			<view class="table">
				<view class="flex" :class="{'sflex': me == 2}">
					<view class="th">
						<text>{{i18n.index.w23}}</text>
					</view>
					<view class="th" v-if="me == 2">
						<text>{{i18n.index.w32}}</text>
					</view>
					<view class="th" v-if="me == 2">
						<text>{{i18n.index.w34}}</text>
					</view>
					<view class="th">
						<text>{{i18n.index.w24}}</text>
					</view>
					<view class="th">
						<text>{{i18n.index.w25}}</text>
					</view>
					<view class="th" v-if="me == 1">
						<text>{{i18n.index.w26}}</text>
					</view>
				</view>
				<view class="flex" :class="{'sflex': me == 2}" v-for="(item, index) in income" :key="index">
					<view class="th">
						<text>{{item.phone}}</text>
					</view>
					<view class="th" v-if="me == 2">
						<text>{{item.level}}</text>
					</view>
					<view class="th" v-if="me == 2">
						<text>{{item.grand}}</text>
					</view>
					<view class="th">
						<text>{{item.number}}</text>
					</view>
					<view class="th">
						<text>{{item.create_time}}</text>
					</view>
					<view class="th" v-if="me == 1">
						<text class="yellow">{{item.profit}}</text>
					</view>
				</view>
				<view class="flex flex-center" v-if="income.length == 0">
					<text>{{i18n.history.history20}}</text>
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
				me: 1,
				income: []
			}
		},
		components:{
			HeaderBar
		},
		onLoad(options) {
			this.me = options.me
			this.getData(options.me)
		},
		methods: {
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			getData(me){
				this.uniRequest({
					url: 'income',
					method: 'GET',
					data: {
						me
					}
				}).then(res => {
					this.income = res.result
				})
			},
		},
		computed: {  
			i18n () {
				return this.$t('index')  
			}  
		},
	}
</script>

<style lang="scss">
.choice{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		.table{
			.flex{
				height: 92rpx;
				font-size: 28rpx;
				color: #FFFFFF;
				border: 1px solid #FFA404;
				border-top: 0;
				box-sizing: border-box;
				&:first-child{
					font-size: 24rpx;
					color: #262733;
					border: 0;
					background: linear-gradient(135deg, #FFD10A 0%, #FFA404 100%);
				}
				&.sflex{
					.th{
						width: 140rpx;
						&:first-child{
							width: 180rpx;
						}
						&:nth-child(2){
							width: 100rpx;
						}
						&:nth-child(3){
							width: 80rpx;
						}
						&:nth-child(4){
							width: 150rpx;
						}
						&:last-child{
							width: 180rpx;
						}
					}
				}
				.th{
					width: 180rpx;
					text-align: center;
					box-sizing: border-box;
					word-wrap: break-word;
					padding: 10rpx 0;
					&:last-child{
						width: 150rpx;
					}
					.yellow{
						color: #FFA404;
					}
				}
			}
		}
	}
}
</style>
