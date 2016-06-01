'use strict'

import React, {
	AsyncStorage,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import getUser from '../ActionCreator/getUserAction';
import AuthApi from '../Util/authApi';
import LoadingModal from '../../Base/Components/LoadingModal';

// dispatch => ({
// 	setMerchant: merchant => dispatch(setMerchantAction(merchant)),
// })

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
		console.log('props in signin', this.props);
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
						onLogoutFinished={() => this.removeUserData()}
					/>
				</View>
				<Text onPress={() => this.props.getUser('fake data')}>TESTING CLICK HERE</Text>
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
				this.goToMainBarScreen();
				// data.new_user ? this.goToWelcomeScreen() : this.goToMainBarScreen()
			})
	};

	goToMainBarScreen() {
		this.props.navigator.immediatelyResetRouteStack([{ name: 'MainBar'}]);
	};

	goToWelcomeScreen() {
		this.props.navigator.push({name: 'Welcome'});
	};

	saveData(value) {
		AsyncStorage.setItem('user', value);
	};

	removeUserData() {
		AsyncStorage.removeItem('user')
		.then(() => this.props.navigator.immediatelyResetRouteStack([{ name: 'SignIn'}]))
		.done()
	}
};

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return bindActionCreators({
		getUser
	}, dispatch)
	// getUser: User => dispatch(getUserAction(User))
}

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

export default connect(stateToProps, dispatchToProps)(SignIn);
