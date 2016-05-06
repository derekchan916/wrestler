'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import AuthApi from '../Util/AuthApi';
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
				this.getUserFbInfo(token.userID, token.accessToken);
			});
	};

	getUserFbInfo(userID, token) {
		AuthApi.getUserFbInfo(userID, token)
			.then((data) => {
				this.getUserData(data);
			});
	};

	getUserData(data) {
		
	};

	// addNewUser(data) {
	// 	// Api.addNewUser(data){
	// 	// 	this.props.setUserCallback(data);
	// 	// 	this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
	// 	// }
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
