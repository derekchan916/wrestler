'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

class Welcome extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>WELCOME FOIIIIG</Text>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

export default Welcome;
