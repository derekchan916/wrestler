'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>ISDFJIOSDFJ</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue'
	},
});

export default Profile;
