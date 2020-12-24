<template>
	<view>
		<view v-for="(item, index) in dataList" :key="index">
			<view class="team-wrap">
				<view class="team-top">
					<view class="team-top-left">
						<view class="phone">
							<text>{{item.phone}}({{item.level}}{{i18n.my.lang71}})</text>
						</view>
						<view class="time">
							<text>{{i18n.my.lang67}}:{{item.create_time}}</text>
						</view>
					</view>
					<view class="team-top-right">
						<view class="amount">
							<text>{{i18n.my.lang66}}</text>
						</view>
						<view class="money">
							<text>{{item.invest}}GCC</text>
						</view>
					</view>
				</view>
				<view class="team-bot">
					<view class="team-bot-item">
						<view class="left">
							<text>{{i18n.my.lang68}}</text>
						</view>
						<view class="right">
							<text>{{item.total}}GCC</text>
						</view>
					</view>
					<view class="team-bot-item">
						<view class="left">
							<text>{{i18n.my.lang69}}</text>
						</view>
						<view class="right">
							<text>{{item.teams}}{{i18n.my.lang70}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="check">
				<view class="check-left" v-if="item.children" v-show="!item.onOff" @tap="item.onOff = !item.onOff">
					<text>{{i18n.my.lang95}}</text>
				</view>
				<view class="check-right" v-show="item.onOff" @tap="item.onOff = !item.onOff">
					<text>{{i18n.my.lang96}}</text>
				</view>
			</view>
			<treelist v-if="item.children" v-show="item.onOff" :dataList="item.children"></treelist>
		</view>
	</view>
</template>

<script>
	export default {
		props:["dataList"],
		name: 'treelist',
		data () {
		  return {
			show: true
		  }
		},
		methods: {
			
		},
		computed: {
			i18n () {  
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
.team-wrap{
	padding: 30rpx;
	position: relative;
	&::after{
		content: "";
		display: block;
		height: 2rpx;
		background: url('./../static/images/icon19.png') repeat-x;
		position: absolute;
		left: 30rpx;
		right: 30rpx;
		bottom: 0;
	}
	.team-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 36rpx;
		.team-top-left{
			.phone{
				font-size: $fontI;
				color: $colorA;
				line-height: 40rpx;
			}
			.time{
				font-size: $fontk;
				color: $colorB;
				line-height: 28rpx;
				margin-top: 6rpx;
			}
		}
		.team-top-right{
			text-align: right;
			.amount{
				font-size: $fontJ;
				color: $colorB;
				line-height: 28rpx;
			}
			.money{
				font-size: $fontI;
				color: $colorF;
				line-height: 40rpx;
				margin-top: 6rpx;
			}
		}
	}
	.team-bot{
		padding: 28rpx 30rpx;
		background-color: #292F42;
		border-radius: 8rpx;
		.team-bot-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 24rpx;
			&:last-child{
				margin-bottom: 0;
			}
			.left{
				font-size: $fontJ;
				color: $colorB;
			}
			.right{
				font-size: $fontJ;
				color: $colorA;
			}
		}
	}
}
.check{
	font-size: $fontJ;
	color: $colorF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0 0;
	.check-left,.check-right{
		padding: 0 30rpx 30rpx;
		flex: 1;
	}
	.check-right{
		text-align: right;
	}
}
</style>
