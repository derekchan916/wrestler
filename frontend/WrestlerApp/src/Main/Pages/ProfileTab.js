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
									underlayColor='white'
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
		height: 130,
		backgroundColor: 'blue',
		flexDirection: 'row',
	},
	image: {
		borderRadius: 50,
		width: 100,
		height: 100
	},
	imageContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	primaryContent: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
	},
	winLoss: {
		flexDirection: 'row',
	},
    tabButton: {
		backgroundColor: 'red',
    },
})

export default ProfileTab;
