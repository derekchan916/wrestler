'use strict'

import React, {
	ActivityIndicatorIOS,
	Component,
	Modal,
	StyleSheet,
	Text,
	View,
} from 'react-native';

class LoadingModal extends Component {
	render() {
		return (
			<View>
				<Modal
					transparent={true}
					visible={true}
					>
					<View style={styles.container}>
						<View style={styles.innerContainer}>
							<ActivityIndicatorIOS
					          style={styles.activityIndicator}
					          color="white"
					          size="large"
					        />
							<Text style={styles.text}>Loading...</Text>
						</View>
					</View>
				</Modal>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    justifyContent: 'center',
	    padding: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	innerContainer: {
		alignItems: 'center',
		borderRadius: 10,
		padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
	activityIndicator: {
		height: 80,
	},
	text: {
		color: 'white',
	}
});

export default LoadingModal;
