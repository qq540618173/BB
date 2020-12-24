<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import './uni.scss';
	page,
	uni-page-body{
		background: #191A23 url('static/images/bg.png') top no-repeat;
		background-size: contain;
	}
	uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot{
		background: rgba(255,255,255,0.5);
	}
	uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot-active{
		background: #FFFFFF;
	}
</style>
