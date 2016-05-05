'use strict'

var localApi = 'localhost:3000/api/';
var fbApiUrl = 'https://graph.facebook.com/v2.3/';
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
		var urlString = `${fbApiUrl}${fbId}?fields=first_name,last_name,email&access_token=${token}`
		var params = 'first_name,last_name,email';
		return fetch({
			url: `${fbApiUrl}${fbId}`,
			method: 'GET',
			query: {
				fields: params,
				access_token: token
			}
		})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((responseData) => {
			console.log(responseData);
			return {
				fname: responseData.fname,
				lname: responseData.lname,
				email: responseData.email
			}
		})
		.catch((error) => {
			return error
		})
	};
};

export default AuthApi;
