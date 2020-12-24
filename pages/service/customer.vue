<template>
	<view class="customer">
		<header-bar :isBack="isBack" :isBg="isBg" :title="i18n.header.header10"></header-bar>
		<web-view :webview-styles="webviewStyles" src="http://supremeroyals.com/customer_service.html"></web-view>
	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue'
	export default {
		data() {
			return {
				isBack: false,
				isBg: true,
				webviewStyles: {
					iframe: {
						height: '100% !important'
					}
				}
			}
		},
		components: {
			HeaderBar
		},
		computed: {
			i18n () {  
				return this.$t('index')  
			}  
		}
	}
</script>

<style lang="scss">
.customer{
	
}
</style>
