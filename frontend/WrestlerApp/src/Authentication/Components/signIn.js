'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import AuthApi from '../Util/authApi';
const FBSDK = require('react-native-fbsdk');
const {
	AccessToken,
	LoginButton,
	LoginManager,
} = FBSDK;

class SignIn extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View style={styles.container}>
				<LoginButton
					readPermissions={["user_friends"]}
					onLoginFinished={(error, result) => {
						if (error) {
							alert("login has error: " + result.error);
						} else if (result.isCancelled) {
							alert("login is cancelled.");
						} else {
							this.getAccessToken();
						}
					}}
					/>
			</View>
		);
	};
	getAccessToken() {
		AccessToken.getCurrentAccessToken()
		.then((token) => {
			this.getUserFbInfo(token.userId, token.accessToken);
		});
	};
	getUserFbInfo(userId, token) {
		AuthApi.getUserFbInfo(userId, token)
		.then((data) => {
			console.log(data);
		})
	}

	// addNewUser(data) {
	// 	// Api.addNewUser(data){
	// 	// 	this.props.setUserCallback(data);
	// 	// 	this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
	// 	// }
	// }
	// getUserFbInfo(data) {
	// 	var fbApi = 'https://graph.facebook.com/v2.3/';
	// 	var string = `${fbApi}${data.userId}?fields=first_name,last_name,email&access_token=${data.token}`
	// 	console.log(string);
	// 	fetch(`${fbApi}${data.userId}?fields=first_name,last_name,email&access_token=${data.token}`)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 		return {
	// 			fname: data.fname,
	// 			lname: data.lname,
	// 			email: data.email
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.warn('THERE WAS AN ERROR', error);
	// 	})
	// 	.done();
	// 	// Api.getUserFbInfo(data.userId, data.token)
	// 	// .then((data) => {
	// 	// 	console.log(data)
	// 	// 	// this.props.setUserCallback(data);
	// 	// });
	// }
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

export default SignIn;
