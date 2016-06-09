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
				<View style={[styles.tabContent, {backgroundColor: '#414A8C'}]}>
					<TouchableHighlight
						style={styles.tabButton}
						underlayColor='white'
						onPress={() => this.goToEditProfileScreen()}
						>
						<Text>BOO</Text>
					</TouchableHighlight>
				</View>
	        </TabBarIOS.Item>
	    );
	}

	goToEditProfileScreen() {
		console.log('This was pressed')
		this.props.navigator.push({name: 'EditProfile'});
	}

	selectTab() {
		this.props.setSelectedTabCb(TabName);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	tabContent: {
		flex: 1,
		alignItems: 'center',
    },
    tabButton: {
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: 'red'
    },
})

export default ProfileTab;
