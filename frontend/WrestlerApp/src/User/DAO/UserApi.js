'use strict'

import BaseApi from '../../Base/Util/baseApi';

const localApi = 'http://localhost:3000/api';
const fbApiUrl = 'https://graph.facebook.com/v2.3';
// var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

class UserApi {
	static addNewUser(user) {
		fetch(localApi + 'user', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstParam: 'yourValue',
				secondParam: 'yourOtherValue',
			})
		})
	};

	static getUserFbInfo(fbId, token) {
		var params = 'first_name,last_name,email';
		return BaseApi.fetch({
			url: `${fbApiUrl}/${fbId}`,
			method: 'GET',
			query: {
				fields: params,
				access_token: token
			},
		})
		.then(data => this.getUserData(data))
		.catch((error) => {
			console.warn('UserApi.getUserFbInfo', error)
		})
	};

	static getUserData(data) {
		var apiEndpoint = 'user';
		var body = {
			user: {
				fname: data.first_name,
				lname: data.last_name,
				email: data.email,
				fb_id: data.id,
			}
		};

		return BaseApi.fetch({
			url: `${localApi}/${apiEndpoint}`,
			method: 'POST',
			body: body,
		})
		.then(data => {
			return data;
		})
		.catch((error) => {
			console.warn('UserApi.getUserData', error)
		})
	}
};

export default UserApi;
