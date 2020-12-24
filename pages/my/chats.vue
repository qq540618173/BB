<template>
	<view class="charts">
		<header-bar :isBg="isBg" :title="title"></header-bar>
		<view class="container">
			<view class="content">
				 <scroll-view id="scrollview" :scroll-with-animation="true" class="scrollview" scroll-y="true">
					<view class="scroll-item" :class="{'left': item.uid == 0, 'right': item.uid != 0}" v-for="(item, index) in chatsList" :key="index">
						<text class="time">{{item.create_time}}</text>
						<text class="info">{{item.content}}</text>
					</view>
				</scroll-view>
			</view>
			<textarea class="textarea" v-model="content" placeholder-class="holder" :placeholder="i18n.my.my35"/>
			<view class="submit gradient-yellow" @tap="submit">
				<text>{{i18n.my.my36}}</text>
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
				title: '',
				id: '',
				chatsList: [],
				content: '',
			}
		},
		components:{
			HeaderBar,
		},
		onLoad(options) {
			this.title = options.name
			this.id = options.id
			this.getData(options.id)
			// setTimeout(() => {
			//    that.scrollToBottom();
			// }, 100)
		},
		methods: {
			getData(id){
				this.uniRequest({
					url: 'chats',
					method: 'GET',
					data: {
						id
					}
				}).then(res => {
					this.chatsList = res.result.list
				})
			},
			submit(){
				let { content, id } = this
				this.uniRequest({
					url: 'ask',
					data: {
						id,
						content
					}
				}).then(res => {
					this.content = ""
					this.getData(id)
				})
			},
			gotoPage(url){
				uni.navigateTo({
				    url
				});
			},
			scrollToBottom(){
				let query = uni.createSelectorQuery();
				let that = this;
				//这个是你所有渲染的view 的高度 下面自己添加样式的 边距之类的数据
				query.in(this).selectAll('.scroll-item').boundingClientRect();
				//这个是id
				query.in(this).select('#scrollview').boundingClientRect();
				query.exec((res) => {
					let mitemHeight = 0;
					//累加所有元素的高度和边距
					res[0].forEach((rect) => mitemHeight = mitemHeight + rect.height + 40)  
					//只有大于 滚动条的高度 再设置
					if (mitemHeight > that.solHeight) {  
							// that.scrollTop = (mitemHeight + 100)
					}
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
.charts{
	min-height: calc(100vh - 128rpx);
	background-color: #191A23;
	.container{
		padding: 50rpx 30rpx;
		.content{
			height: 40vh;
			padding: 40rpx 30rpx;
			background: #292F3C;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			.scrollview{
				max-height: 40vh;
			}
			.time{
				font-size: 24rpx;
				color: #FFFFFF;
				display: block;
				margin-bottom: 10rpx;
			}
			.left{
				margin-bottom: 40rpx;
				padding-right: 40rpx;
				.info{
					padding: 20rpx 32rpx;
					background: #FFFFFF;
					border-radius: 8px;
					display: inline-block;
					font-size: 28rpx;
					color: #000000;
				}
			}
			.right{
				margin-bottom: 40rpx;
				text-align: right;
				padding-left: 40rpx;
				.info{
					padding: 24rpx 32rpx;
					background: #FFA404;
					border-radius: 8px;
					display: inline-block;
					font-size: 28rpx;
					color: #000000;
				}
			}
		}
		.textarea{
			width: 100%;
			height: 20vh;
			margin-top: 24rpx;
			background: #292F3C;
			box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
			border-radius: 8rpx;
			padding: 30rpx;
			box-sizing: border-box;
			font-size: 24rpx;
			color: #FFFFFF;
			margin-bottom: 36rpx;
		}
		.holder{
			font-size: 28rpx;
			color: #C4C4C9;
		}
		.submit{
			height: 92rpx;
			line-height: 92rpx;
			text-align: center;
			border-radius: 8rpx;
			font-size: 32rpx;
			color: #000000;
		}
	}
}
</style>
