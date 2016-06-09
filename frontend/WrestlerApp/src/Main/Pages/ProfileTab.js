'user strict'

import React, {
	Component,
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
				</View>
	        </TabBarIOS.Item>
	    );
	}
	// <TouchableHighlight
	// 	style={styles.tabButton}
	// 	underlayColor='white'
	// 	onPress={() => this.goToEditProfileScreen()}
	// 	>
	// 	<Text>BOO</Text>
	// </TouchableHighlight>

	goToEditProfileScreen() {
		this.props.navigator.push({name: 'EditProfile'});
	}

	selectTab() {
		this.props.setSelectedTabCb(TabName);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
	},
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#CCCCCC',
		borderColor: 'red',
		borderBottomWidth: 1,
		height: 50,
    },
	userName: {
		backgroundColor: 'blue',
	},
    tabButton: {
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: 'red'
    },
})

export default ProfileTab;
