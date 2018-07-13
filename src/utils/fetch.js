import axios from 'axios'

const baseURL = 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/'

export default {
	get(url, params) {
		if(!url) return;
		return axios({
			url: baseURL + url,
			method: 'get',
			params: params,
			timeout: 30000
		})
	}
}