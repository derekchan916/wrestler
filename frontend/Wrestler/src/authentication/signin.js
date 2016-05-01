// import React, {
//   Component,
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from 'react-native';
// import Button from '../common/button';
//
// class SignIn extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			username: '',
// 			password: '',
// 		};
// 	}
//
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Sign In</Text>
// 				<Text style={styles.label}>Username:</Text>
// 				<TextInput
// 					value={this.state.username}
// 					onChangeText={(text) => this.setState({username: text})}
// 					style={styles.input}/>
//
// 				<Text style={styles.label}>Password:</Text>
// 				<TextInput
// 					value={this.state.pasword}
// 					onChangeText={(text) => this.setState({password: text})}
// 					secureTextEntry = {true}
// 					style={styles.input}/>
//
// 				<Button text={'Sign In'} onPress={() => this.onPress()}/>
// 				<Button text={'I need an account...'} onPress={() => this.onSignUpPress()}/>
// 			</View>
// 		);
// 	}
//
// 	onSignUpPress() {
// 		this.props.navigator.push({name: 'signup'});
// 	}
//
// 	onPress() {
// 		this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);
// 		// Parse.User.logIn(this.state.username, this.state.password, {
// 		// 	success: (user) => {this.setState({username: user.username, password: user.password})},
// 		// 	error: (data, error) => {console.log(data, error);}
// 		// });
// 	}
// }
// })
'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	Image,
	View
} from 'react-native';
import FBLogin from 'react-native-facebook-login';
var FBLoginManager = require('NativeModules').FBLoginManager;
import FBImage from '../common/image/facebook';

class SignIn extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View style={styles.loginContainer}>
				{ this.props.user && <FBImage user={this.props.user} /> }
				{ this.props.user && <Info user={this.props.user} /> }

				<FBLogin style={{ marginBottom: 10, }}
					permissions={["email","user_friends"]}
					onLogin={(data) => {
						console.log("Logged in!");
						this.props.setUserCallback(data.credentials);
					}}
					onLogout={() => {
						console.log("Logged out.");
						this.props.setUserCallback(null);
					}}
					onLoginFound={(data) => {
						console.log("Existing login found.");
						this.props.setUserCallback(data.credentials);
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



var Info = React.createClass({
	propTypes: {
		user: React.PropTypes.object.isRequired,
	},

	getInitialState: function(){
		return {
			info: null,
		};
	},

	componentWillMount: function(){
	var _this = this;
	var user = this.props.user;
	var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

	fetch(api)
	.then((response) => response.json())
	.then((responseData) => {
		_this.setState({
			info : {
				name : responseData.name,
				email: responseData.email,
			},
		});
	})
.done();
},

	render: function(){
		var info = this.state.info;

		return (
			<View style={styles.bottomBump}>
			<Text>{ info && this.props.user.userId }</Text>
			<Text>{ info && info.name }</Text>
			<Text>{ info && info.email }</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	loginContainer: {
		marginTop: 150,

		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottomBump: {
		marginBottom: 15,
  },
});

module.exports = SignIn;
