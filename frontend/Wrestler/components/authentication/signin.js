'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Api from '../api';
import FBLogin from 'react-native-facebook-login';
var FBLoginManager = require('NativeModules').FBLoginManager;

class SignIn extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View style={styles.loginContainer}>
				<FBLogin style={{ marginBottom: 10, }}
					permissions={["email", "user_friends"]}
					onLogin={(data) => {
						console.log("Logged in!");
						this.addNewUser(data.credentials);

					}}
					onLogout={() => {
						console.log("Logged out.");
						this.props.setUserCallback(null);
					}}
					onLoginFound={(data) => {
						console.log("Existing login found.");
						this.getUserFbInfo(data.credentials);
						this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
					}}
					onLoginNotFound={() => {
						console.log("No user logged in.");
					}}
					onError={(data) => {
						console.log("ERROR");
					}}
					onCancel={() => {
						console.log("User cancelled.");
					}}
					onPermissionsMissing={(data) => {
						console.log("Check permissions!");
					}}
					/>
			</View>
		);
	};
	addNewUser(data) {
		// Api.addNewUser(data){
		// 	this.props.setUserCallback(data);
		// 	this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
		// }
	}
	getUserFbInfo(data) {
		var fbApi = 'https://graph.facebook.com/v2.3/';
		var string = `${fbApi}${data.userId}?fields=first_name,last_name,email&access_token=${data.token}`
		console.log(string);
		fetch(`${fbApi}${data.userId}?fields=first_name,last_name,email&access_token=${data.token}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return {
				fname: data.fname,
				lname: data.lname,
				email: data.email
			}
		})
		.catch((error) => {
			console.warn('THERE WAS AN ERROR', error);
		})
		.done();
		// Api.getUserFbInfo(data.userId, data.token)
		// .then((data) => {
		// 	console.log(data)
		// 	// this.props.setUserCallback(data);
		// });
	}
};

var styles = StyleSheet.create({
	loginContainer: {
		marginTop: 150,

		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

module.exports = SignIn;
