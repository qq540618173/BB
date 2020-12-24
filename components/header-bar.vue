<template>
    <view class="topbar" :class="{'bgclass': isBg}">
        <view class="topbar-wrap">
            <view v-if="isBack" @tap="goBack" class="back-btn"></view>
			<view class="title">{{title}}</view>
			<view v-if="isBack" class="right"></view>
			<view v-if="isSlot" class="isslot">
				<slot name="text"></slot>
			</view>
        </view>
		<view id="canvas"></view>
    </view>
</template>
 
<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            title: { type: String, default: '' },
			isBack: { type: [Boolean, String], default: true },
			isBg: { type: [Boolean, String], default: false },
			isSlot: { type: [Boolean, String], default: false },
        },
        computed: {
			i18n () {
				return this.$t('index')  
			} 
        },
        methods: {
            goBack() {
                uni.navigateBack()
            }
        }
    }
</script>

<style lang="scss">
	.topbar{
		padding-top: 40rpx;
		background-color: #191A23;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 128rpx;
		box-sizing: border-box;
		z-index: 990;
		&.bgclass{
			background: url('../static/images/top.png') center no-repeat;
			background-size: contain;
		}
		.topbar-wrap{
			padding: 0 20rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			.back-btn{
				width: 52rpx;
				height: 48rpx;
				background: url('../static/images/back.png') center no-repeat;
				background-size: contain;
			}
			.title{
				text-align: center;
				color: #FFFFFF;
				font-size: 32rpx;
				flex: 1;
			}
			.right{
				width: 52rpx;
				height: 48rpx;
			}
			.isslot{
				position: absolute;
				font-size: $fontI;
				color: #FFA404;
				right: 30rpx;
			}
		}
	}
</style>