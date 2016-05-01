'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';
import Button from '../common/button';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirmation: '',
			errorMessage: '',
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>You can sign up here!</Text>
				<Text style={styles.label}>Username:</Text>
				<TextInput
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
					style={styles.input}
					/>

				<Text style={styles.label}>Password:</Text>
				<TextInput
					secureTextEntry={true}
					value={this.state.password}
					onChangeText={(text) => this.setState({password: text})}
					style={styles.input}
					/>

				<Text style={styles.label}>Confirm Password:</Text>
				<TextInput
					secureTextEntry={true}
					value={this.state.passwordConfirmation}
					onChangeText={(text) => this.setState({passwordConfirmation: text})}
					style={styles.input}
					/>

				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button text={'Signup'} onPress={() => this.onSignUpPress()} />
				<Button text={'I have an account...'} onPress={() => this.onSignInPress()} />
			</View>
		);
	}
	onSignUpPress() {
		if (this.state.password != this.state.passwordConfirmation) {
			return this.setState({errorMessage: 'Your passwords do not match'})
		}

		this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);

		// var user = new Parse.User();
		// user.set('username', this.state.username);
		// user.set('password', this.state.password);
		//
		// user.signUp(null, {
		// 	success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]); },
		// 	error: (user, data) => { this.setState({errorMessage: data.message}); }
		// });
	}
	onSignInPress() {
		this.props.navigator.pop();
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	label: {
		fontSize: 18
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center',
	}
})

module.exports = SignUp;
