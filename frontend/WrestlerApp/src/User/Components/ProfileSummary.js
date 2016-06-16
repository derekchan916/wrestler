'use strict'

import React, {
	Component,
	PixelRatio,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import Styles from '../../Base/Util/Styles'

class ProfileSummary extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var user = this.props.user.data;

		return (
			<View style={styles.container}>
				<View style={styles.image}>
					<Text>+</Text>
				</View>
				<View style={styles.primaryContent}>
					<View style={styles.winLoss}>
						<View style={styles.winLossContent}>
							<Text>{user.wins}</Text>
							<Text>Wins</Text>
						</View>
						<View style={styles.winLossContent}>
							<Text>{user.losses}</Text>
							<Text>Loss</Text>
						</View>
					</View>
					<TouchableHighlight
						style={styles.editButton}
						onPress={() => this.props.goToEditProfileScreen()}
						>
						<Text>Edit Profile</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	image: {
		borderRadius: 50,
		width: 80,
		height: 80,
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: Styles.largeGutter,
		marginVertical: Styles.gutter,
	},
	primaryContent: {
		flex: 1,
		margin: Styles.gutter,
	},
	winLoss: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	winLossContent: {
		alignItems: 'center',
	},
    editButton: {
		backgroundColor: '#CCCCCC',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Styles.borderRadius,
		height: 25,
    },
});

ProfileSummary.propTypes = {
	goToEditProfileScreen : React.PropTypes.func,
	user                  : React.PropTypes.object,
}

export default ProfileSummary;
