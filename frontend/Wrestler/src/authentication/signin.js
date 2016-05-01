'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
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
					permissions={["email","user_friends"]}
					onLogin={(data) => {
						console.log("Logged in!");
						this.props.setUserCallback(data.credentials);
						this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
					}}
					onLogout={() => {
						console.log("Logged out.");
						this.props.setUserCallback(null);
					}}
					onLoginFound={(data) => {
						console.log("Existing login found.");
						this.props.setUserCallback(data.credentials);
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
