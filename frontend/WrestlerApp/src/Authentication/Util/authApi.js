'use strict'

import BaseApi from '../../Base/Util/BaseApi';

var localApi = 'localhost:3000/api/';
var fbApiUrl = 'https://graph.facebook.com/v2.3';
// var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=first_name,last_name,email&access_token=${user.token}`;
// var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;
// var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

class AuthApi {
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
			.then((data) => {
				return {
					fname: data.first_name,
					lname: data.last_name,
					email: data.email,
					fbId: data.id,
				}
			})
			.catch((error) => {
				return error
			})
	};
};

export default AuthApi;
