'use strict'

var localApi = 'localhost:3000/api/';
var fbApi = 'https://graph.facebbook.com/v2.3/';
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
		return fetch(`${fbApi}?fields=first_name,last_name,email$access_token=${token}`)
		.then((response) => response.json())
		.then((data) => {
			console.log()
			return {
				fname: data.fname,
				lname: data.lname,
				email: data.email
			}
		})
		.catch((error) => {
			console.warn(error);
		})
		.done();
	}
};

export default AuthApi;
