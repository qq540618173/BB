<template>
	<view class="proposal">
		<header-bar :isBg="isBg" :title="i18n.header.header17"></header-bar>
		<view class="container">
			<view class="proposal-wrap">
				<textarea v-model="content" maxlength="-1" :placeholder="i18n.my.lang56" placeholder-class="placeholder" />
			</view>
			<view class="btn-wrap">
				<view class="btn-item gradient-yellow" @tap="submit">{{i18n.my.lang57}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue';
	export default {
		data() {
			return {
				content: '',
				isBg: true
			}
		},
		components:{
			HeaderBar
		},
		methods: {
			submit(){
				let { content } = this
				this.uniRequest({
					url: 'feedback',
					data: {
						content
					}
				}).then((res) =>{
					uni.showToast({
						title: res.message,
						success: () => {
							this.content = ''
						}
					})
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
.proposal{
	.container{
		.proposal-wrap{
			textarea{
				width: 100%;
				height: 600rpx;
				background-color: #34374D;
				border-radius: 8rpx;
				padding: 30rpx;
				border: none;
				box-sizing: border-box;
				font-size: $fontI;
				color: $colorA;
			}
			.placeholder{
				font-size: $fontI;
				color: $colorB;
			}
		}
		.btn-wrap{
			margin-top: 42rpx;
			.btn-item{
				height: 92rpx;
				line-height: 92rpx;
				border-radius: 8rpx;
				font-size: 32rpx;
				color: #222636;
				text-align: center;
			}
		}
	}
}
</style>
