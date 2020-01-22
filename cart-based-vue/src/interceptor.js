import axios from 'axios'

// 传入的vm其实就是app实例
export default function(vm){
	// 设置请求拦截器
	axios.interceptors.request.use(config => {
		// 从本地缓存中拿出token
		const token = localStorage.getItem("token");
		if(token){
			// 请求头中携带token
			config.headers.Authorization = 'Bearer '+token;
		}
		// 配置完一定要返回config
		return config;
	})

	// 相应拦截器
	// 参数1表示成功
	// 这里只对失败情况进行设置
	axios.interceptors.response.use(null, err => {
		if(err.response.status === 401){ //没有登录或者令牌过期
			// 退出登录

			// 跳转到登录页
		}
		return Promise.reject(err);
	})
}