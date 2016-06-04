'use strict'

import BaseApi from '../../Base/Util/BaseApi';

const LOCAL_API = 'http://localhost:3000/api';
const FB_API_URL = 'https://graph.facebook.com/v2.3';
// var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

class UserApi {
	static getUserFbInfo(options) {
		var params = 'first_name,last_name,email';
		return BaseApi.fetch({
			url: `${FB_API_URL}/${options.userId}`,
			method: 'GET',
			query: {
				fields: params,
				access_token: options.accessToken
			},
		})
		.then(data => this.getUserData(data))
		.catch((error) => {
			console.warn('UserApi.getUserFbInfo', error)
		})
	}

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
			url: `${LOCAL_API}/${apiEndpoint}`,
			method: 'POST',
			body: body,
		})
		.then(data => {
			//New users have an attribute data.new_user === true
			return data;
		})
		.catch((error) => {
			console.warn('UserApi.getUserData', error)
		})
	}
};

export default UserApi;
