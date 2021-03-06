'use strict'

import React, {
	ActivityIndicatorIOS,
	Component,
	Modal,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { connect } from 'react-redux';

export default function (DecoratedComponent) {

	class LoadingModalWrapper extends Component {

		render() {
			return (
				<View style={styles.container}>
					<DecoratedComponent {...this.props} />
					{this.renderLoading()}
				</View>
			)
		};

		renderLoading() {
			if (!this.props.loader.showLoadingModal) {
				return null;
			}

			return (
				<View>
					<Modal
						transparent={true}
						visible={this.props.visible}>
						<View style={styles.wrapper}>
							<View style={styles.innerWrapper}>
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
			)
		}
	}

	return connect (
		state => ({
			loader: state.loader
		})
	)(LoadingModalWrapper);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
	    justifyContent: 'center',
	    padding: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	innerWrapper: {
		alignItems: 'center',
		borderRadius: 10,
		padding: 20,
		backgroundColor: '#333333',
	},
	activityIndicator: {
		height: 80,
	},
	text: {
		color: 'white',
	}
});
