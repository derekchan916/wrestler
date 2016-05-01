import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from '../common/button';

class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>
				<Text style={styles.label}>Username:</Text>
				<TextInput
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
					style={styles.input}/>

				<Text style={styles.label}>Password:</Text>
				<TextInput
					value={this.state.pasword}
					onChangeText={(text) => this.setState({password: text})}
					secureTextEntry = {true}
					style={styles.input}/>
				
				<Button text={'Sign In'} onPress={() => this.onPress()}/>
				<Button text={'I need an account...'} onPress={() => this.onSignUpPress()}/>
			</View>
		);
	}

	onSignUpPress() {
		this.props.navigator.push({name: 'signup'});
	}

	onPress() {
		this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);
		// Parse.User.logIn(this.state.username, this.state.password, {
		// 	success: (user) => {this.setState({username: user.username, password: user.password})},
		// 	error: (data, error) => {console.log(data, error);}
		// });
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},
	label: {
		fontSize: 18,
	}
})

module.exports = SignIn;
