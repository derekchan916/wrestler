'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

class ProfileEdit extends Component {
	render() {
		return (
			<TouchableHighlight
				style={styles.tabButton}
				underlayColor='white'
				onPress={() => this.returnToProfileScreen()}
				>
				<Text>BOO</Text>
			</TouchableHighlight>
		)
	}

	returnToProfileScreen() {
		this.props.navigator.pop()
	}
}

const styles = StyleSheet.create({
	tabButton: {
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: 'red'
	}
})

export default ProfileEdit;
