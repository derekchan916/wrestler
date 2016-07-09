'use strict'

import React, {
	Component,
	Image,
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
		console.log(user);

		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{uri: user.profile_image.url}}
					/>
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
		borderRadius: 45,
		width: 90,
		height: 90,
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
	user                  : React.PropTypes.object,
}

export default ProfileSummary;
