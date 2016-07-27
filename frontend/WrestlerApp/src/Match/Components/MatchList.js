'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

class MatchList extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Text>BLEH BLEH</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'red',
		borderWidth: 5,
	}
})

export default MatchList;
