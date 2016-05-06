import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

class Home extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>WELCOME TO THE HOME SCREEN</Text>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
})

module.exports = Home;
