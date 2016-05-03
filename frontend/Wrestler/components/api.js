'use strict'

import React, {
	Component
} from 'react-native';

class Api extends Component {


	addNewUser () {
		// var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=first_name,last_name,email&access_token=${user.token}`;
		
		fetch('https://mywebsite.com/endpoint/', {
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
	}
});

module.exports = Api;
