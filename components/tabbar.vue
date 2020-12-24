<template>
    <view class="tabbar">
        <view class="tabbar-item" :class="{'current': isCurrent == 1}" @tap="gotoPage('/pages/index/index')">
        	<view class="icon icon1"></view>
        	<view class="text">
        		<text>{{i18n.tabbar.assets}}</text>
        	</view>
        </view>
        <view class="tabbar-item" :class="{'current': isCurrent == 2}" @tap="gotoPage('/pages/data/data')">
        	<view class="icon icon2"></view>
        	<view class="text">
        		<text>{{i18n.tabbar.data}}</text>
        	</view>
        </view>
		<view class="tabbar-item" :class="{'current': isCurrent == 3}" @tap="gotoPage('/pages/trade/trade')">
			<view class="icon icon5"></view>
			<view class="text">
				<text>{{i18n.tabbar.trade}}</text>
			</view>
		</view>
        <view class="tabbar-item" :class="{'current': isCurrent == 4}" @tap="gotoPage('/pages/service/service')">
        	<view class="icon icon3"></view>
        	<view class="text">
        		<text>{{i18n.tabbar.assistant}}</text>
        	</view>
        </view>
        <view class="tabbar-item" :class="{'current': isCurrent == 5}" @tap="gotoPage('/pages/my/my')">
        	<view class="icon icon4"></view>
        	<view class="text">
        		<text>{{i18n.tabbar.my}}</text>
        	</view>
        </view>
    </view>
</template>
 
<script>
    export default {
        data() {
            return {
                
            }
        },
		props: {
			isCurrent: {
				type: [String, Number]
			}
		},
        computed: {  
        	i18n () {  
        		return this.$t('index')  
        	}  
        },
        methods: {
            gotoPage(url){
				uni.reLaunch({
				    url
				});
			}
        }
    }
</script>

<style lang="scss">
.tabbar{
	width: 100%;
	height: 100rpx;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 990;
	background-color: #262733;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.tabbar-item{
		flex: 1;
		text-align: center;
		.text{
			font-size: 24rpx;
			color: #C5C6CA;
		}
		.icon{
			width: 48rpx;
			height: 48rpx;
			margin: 0 auto;
			&.icon1{
				background: url('../static/images/icon1.png') center no-repeat;
				background-size: contain;
			}
			&.icon2{
				background: url('../static/images/icon2.png') center no-repeat;
				background-size: contain;
			}
			&.icon3{
				background: url('../static/images/icon3.png') center no-repeat;
				background-size: contain;
			}
			&.icon4{
				background: url('../static/images/icon4.png') center no-repeat;
				background-size: contain;
			}
			&.icon5{
				background: url('../static/images/icon0.png') center no-repeat;
				background-size: contain;
			}
		}
		&.current{
			.icon1{
				background: url('../static/images/icon1_select.png') center no-repeat;
				background-size: contain;
			}
			.icon2{
				background: url('../static/images/icon2_select.png') center no-repeat;
				background-size: contain;
			}
			.icon3{
				background: url('../static/images/icon3_select.png') center no-repeat;
				background-size: contain;
			}
			.icon4{
				background: url('../static/images/icon4_select.png') center no-repeat;
				background-size: contain;
			}
			.icon5{
				background: url('../static/images/icon0_select.png') center no-repeat;
				background-size: contain;
			}
		}
	}
}
</style>