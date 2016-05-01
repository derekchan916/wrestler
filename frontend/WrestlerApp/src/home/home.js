import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentWillMount() {
		// Parse.User.currentAsync()
		// 	.then((user) => { this.setState({user: user}); })
		this.setState({user: {username: 'douche', password: 'bag'}});
	}

	render() {
		if (!this.state.user) {
			return <Text>Loading...</Text>
		}

		var username = this.state.user.username;

		return (
			<View style={styles.container}>
				<Text>
					Welcome back, {username}!
				</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
})

module.exports = Home;
