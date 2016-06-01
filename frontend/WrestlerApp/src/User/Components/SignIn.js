'use strict'

import React, {
	AsyncStorage,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getFbUser from '../ActionCreator/getFbUserAction';
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
	};

	componentWillReceiveProps (nextProps) {
		if (!nextProps.user.loading && nextProps.user.data) {
			this.saveData(JSON.stringify(nextProps.user.data));
			this.goToMainBarScreen();
		}
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
								// this.toggleLoading();
								this.getAccessToken();
							}
						}}
						onLogoutFinished={() => this.removeUserData()}
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
				this.props.getFbUser(token.userID, token.accessToken);
			});
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
		getFbUser
	}, dispatch)
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
