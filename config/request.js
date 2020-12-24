function uniRequest(obj){
	return new Promise((resolve, reject) => {
		
		// 初始化参数
		let baseUrl = 'http://supremeroyals.com/api/'

		let url = baseUrl + obj.url,
		method = obj.method || 'POST',
		data = obj.data || {},
		header = {}
		
		// 判断接口是否需要token
		if(!obj.noToken){
			let userInfo = uni.getStorageSync('userInfo')
			if(!userInfo){
				uni.showToast({
					title: '请重新登录',
					icon: 'none',
					success: () => {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				})
				return
			}
			header = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'Access-Token': userInfo.token
			}
		} else {
			header= {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		}
		
		let showLoadFlag = false;
		if (!obj.hideLoad) {
			uni.showLoading({
				title: '加载中...',
				mask: true,
				success: function(res) {
					showLoadFlag = true;
				}
			});
		};
		
		uni.request({
			url,
			method,
			data,
			header,
			success: res => {
				if(res.statusCode == 200){
					if(res.data && res.data.status == 200){
						return resolve(res.data)
					}else{
						setTimeout(()=>{
							uni.showToast({
								title: res.data.message.code?res.data.message.message:res.data.message,
								icon: 'none'
							})
						}, 500)
						return reject(res.data.message)
					}
				} else {
					return reject(res.errMsg)
				}
			},
			fail: err => {
				uni.showToast({
					title: '系统错误，请重新登录',
					icon: 'none',
					success:() => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}
				})
				return reject(err)
			},
			complete: () => {
				if (!obj.hideLoad) {
					uni.hideLoading();
				};
			}
		})
		
	})
}

export default uniRequest