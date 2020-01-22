import {login} from '../service/user'

export default {
	state: {
		isLogin: localStorage.getItem("token") ? true : false
	},
	mutations: {
		setLoginState(state, b){
			state.isLogin = b;
		}
	},
	actions: {
		login({commit}, user){
			return login(user).then(res => {
				// 从res中解析出code 和 token
				const {code, token} = res.data;
				// 登录成功
				if(code === 1) {
					// 本地存储token
					localStorage.setItem('token', token);
					// 改变登录状态
					commit('setLoginState', true);
				}
				return code;
			})
		}
	},
}