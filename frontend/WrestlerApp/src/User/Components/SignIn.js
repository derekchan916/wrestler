'use strict'

import React, {
	AsyncStorage,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';

import getFbUserAction from '../ActionCreator/getFbUserAction';
import beginLoadingAction from '../../Base/ActionCreator/beginLoadingAction';
import stopLoadingAction from '../../Base/ActionCreator/stopLoadingAction';
import UserApi from '../DAO/UserApi';
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
		this.props.beginLoading();
	}

	componentWillReceiveProps (nextProps) {
		if (!nextProps.user.loading && nextProps.user.data) {
			this.saveData(JSON.stringify(nextProps.user.data));
			this.goToMainBarScreen();
			this.toggleLoading();
		}
	}

	render() {
		// <LoadingModal visible={this.state.loading}/>
		return (
			<View style={styles.container}>
				<View style={styles.fbContainer}>
					<LoginButton
						readPermissions={["user_friends"]}
						onLoginFinished={(error, result) => {
							if (error) {
								alert("login has error: " + result.error);
							} else if (result.isCancelled) {
								alert("login is cancelled.");
							} else {
								this.props.beginLoading();
								this.getAccessToken();
							}
						}}
						onLogoutFinished={() => this.removeUserData()}
					/>
				</View>
			</View>
		);
	}

	toggleLoading() {
		this.setState({ loading: !this.state.loading })
	}

	getAccessToken() {
		AccessToken.getCurrentAccessToken()
			.then((token) => {
				this.props.getFbUser({userId: token.userID, accessToken: token.accessToken});
			});
	}

	goToMainBarScreen() {
		this.props.navigator.immediatelyResetRouteStack([{ name: 'MainBar'}]);
	}

	goToWelcomeScreen() {
		this.props.navigator.push({name: 'Welcome'});
	}

	saveData(value) {
		AsyncStorage.setItem('user', value);
	}

	removeUserData() {
		AsyncStorage.removeItem('user')
			.then(() => this.props.navigator.immediatelyResetRouteStack([{ name: 'SignIn'}]))
			.done()
	}
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

export default connect (
	state => ({
		user: state.user,
		loader: state.loader
	}),
	dispatch => ({
		getFbUser: options => dispatch(getFbUserAction(options)),
		beginLoading: options => dispatch(beginLoadingAction()),
		stopLoading: options => dispatch(stopLoadingAction())
	})
)(SignIn);
