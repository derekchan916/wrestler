'user strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';

import UserImages from '../../User/Components/UserImages';

const TabName = "Profile";

//Below components are under User folder
class ProfileTab extends Component {
	constructor(props) {
		super(props);
	};

	render() {
	    return (
	        <TabBarIOS.Item
				title={TabName}
				selected={this.props.selected === TabName}
				onPress={() => {
					this.props.setSelectedTabCb(TabName)
				}}
			>
				<View style={[styles.tabContent, {backgroundColor: '#414A8C'}]}>
					<UserImages />
				</View>
	        </TabBarIOS.Item>
	    );
	};

	selectTab() {
		this.props.setSelectedTabCb(TabName);
	};
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
    tabText: {
      color: 'white',
      margin: 50,
    },
})

export default ProfileTab;
