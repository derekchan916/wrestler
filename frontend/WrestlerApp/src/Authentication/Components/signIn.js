'use strict'

import React, {
	AsyncStorage,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import AuthApi from '../Util/AuthApi';
import LoadingModal from '../../Base/Components/LoadingModal';
const FBSDK = require('react-native-fbsdk');
const {
	AccessToken,
	LoginButton,
	LoginManager,
} = FBSDK;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<LoadingModal visible={this.state.loading}/>
				<View style={styles.fbContainer}>
					<LoginButton
						readPermissions={["user_friends"]}
						onLoginFinished={(error, result) => {
							if (error) {
								alert("login has error: " + result.error);
							} else if (result.isCancelled) {
								alert("login is cancelled.");
							} else {
								this.toggleLoading();
								this.getAccessToken();
							}
						}}
						/>
				</View>
			</View>
		);
	};

	toggleLoading() {
		this.setState({ loading: !this.state.loading })
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
		AuthApi.getUserData(data)
			.then((data) => {
				this.props.setUserCb(data);
				this.saveData(JSON.stringify(data));
				this.toggleLoading();
				data.new_user ? this.goToWelcomeScreen() : this.goToHomeScreen()
			})
	};

	goToHomeScreen() {
		this.props.navigator.immediatelyResetRouteStack([{ name: 'Home'}]);
	};

	goToWelcomeScreen() {
		this.props.navigator.push({name: 'Welcome'});
	};

	saveData(value) {
		AsyncStorage.setItem('user', value);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fbContainer: {
		marginTop: 300,
		flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
});

export default SignIn;
