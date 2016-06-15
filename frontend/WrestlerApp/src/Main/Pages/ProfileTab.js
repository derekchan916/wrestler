'user strict'

import React, {
	Component,
	PixelRatio,
	StyleSheet,
	TabBarIOS,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import UserImages from '../../User/Components/UserImages';

const TabName = "Profile";

class ProfileTab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	    return (
	        <TabBarIOS.Item
				title={TabName}
				selected={this.props.selected === TabName}
				onPress={() => {this.props.setSelectedTabCb(TabName)}}>
				<View style={styles.container}>
					<View style={styles.headerWrapper}>
						<Text style={styles.userName}>Shoelaceking</Text>
					</View>
					<View style={styles.contentWrapper}>
						<View style={styles.primaryContentContainer}>
							<View style={[styles.image, styles.imageContainer]}>
								<Text>+</Text>
							</View>
							<View style={styles.primaryContent}>
								<View style={styles.winLoss}>
									<Text>Wins</Text>
									<Text>Loss</Text>
								</View>
								<TouchableHighlight
									style={styles.tabButton}
									onPress={() => this.goToEditProfileScreen()}
									>
									<Text>Edit Profile</Text>
								</TouchableHighlight>
							</View>
						</View>
					</View>
				</View>
	        </TabBarIOS.Item>
	    );
	}

	goToEditProfileScreen() {
		this.props.navigator.push({name: 'EditProfile'});
	}

	selectTab() {
		this.props.setSelectedTabCb(TabName);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerWrapper: {
		height: 60,
		justifyContent: 'flex-end',
		backgroundColor: '#CCCCCC',
    },
	userName: {
		alignSelf: 'center',
		padding: 5,
	},
	contentWrapper: {
		flex: 1,
	},
	primaryContentContainer: {
		flexDirection: 'row',
	},
	image: {
		borderRadius: 50,
		width: 80,
		height: 80
	},
	imageContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 10,
	},
	primaryContent: {
		flex: 1,
		margin: 10,
	},
	winLoss: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
    tabButton: {
		backgroundColor: '#CCCCCC',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		height: 25,
    },
})

export default ProfileTab;
