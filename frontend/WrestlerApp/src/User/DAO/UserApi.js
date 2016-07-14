'use strict'

import BaseApi from '../../Base/Util/BaseApi';

const LOCAL_API = 'http://localhost:3000/api';
const FB_API_URL = 'https://graph.facebook.com/v2.3';
// var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

class UserApi {
	// First get the basic info info ex. first_name, last_name, email
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
		.then(data => this.getUserFbImage(data, options))
		.catch((error) => {
			console.warn('UserApi.getUserFbInfo', error)
		})
	}

	// Then get the Fb image
	// This needs to be optimized so we find the FbImage on getUserFbInfo
	static getUserFbImage(data, options) {
		var apiEndpoint = 'picture';

		return BaseApi.fetch({
			url: `${FB_API_URL}/${options.userId}/${apiEndpoint}`,
			method: 'GET',
			query: {
				width: 200,
				redirect: false,
				access_token: options.accessToken
			},
		})
		.then(imageData => this.getUserData(imageData, data))
		.catch((error) => {
			console.warn('UserApi.getUserFbImage', error)
		})
	}

	// Then store in our database or retreave new user.
	static getUserData(imageData, data) {
		var apiEndpoint = 'user';
		var body = {
			user: {
				fname: data.first_name,
				lname: data.last_name,
				email: data.email,
				fb_id: data.id,
				profile_image: imageData.data.url,
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

	static getFbFriendsList(options) {
		var apiEndpoint = 'friendlists';

		return BaseApi.fetch({
			url: `${FB_API_URL}/${options.userId}/${apiEndpoint}`,
			method: 'GET',
			query: {
				access_token: options.accessToken
			},
		})
		.then(friendsList => friendsList)
		.catch((error) => {
			console.warn('UserApi.getUserFbImage', error)
		})
	}
};

export default UserApi;
