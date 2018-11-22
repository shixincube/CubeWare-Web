import axios from 'axios';
import QS from 'qs';
import { Message } from 'element-ui';
import store from '../store/index'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'https://dev.user.shixincube.cn';
	window.cubeLicenseServer = 'https://dev.license.shixincube.cn/auth/license/get';
} else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
	//正式环境
	// axios.defaults.baseURL = 'https://user.shixincube.com';
	// window.cubeLicenseServer = 'https://license.getcube.cn/auth/license/get';
	//测试环境
	axios.defaults.baseURL = 'https://dev.user.shixincube.cn';
	window.cubeLicenseServer = 'https://dev.license.shixincube.cn/auth/license/get';
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
		const token = store.state.cubeToken;
		token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		let code = response.data.state.code;
		if (code === 200) {
			return Promise.resolve(response);
		} else {
			if (code) {
				switch (code) {
					case 704:
						Message({
							message: '参数错误或异常',
							type: 'error',
							duration: 1500
						});
						break;
					default:
						Message({
							message: response.data.state.desc,
							duration: 1500,
							forbidClick: true
						});
						break;
				}
				return Promise.reject(error.response);
			}
		}
	},
	error => {

	}
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
	return new Promise((resolve, reject) =>{
		axios.get(url, {params: params})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
