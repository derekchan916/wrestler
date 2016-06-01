'user strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabName = "Home";

class HomeTab extends Component {
	constructor(props) {
		super(props);
	};

	componentWillMount() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
		// Icon.getImageSource('ios-gear', 30).then((source) => this.setState({ gearIcon: source }));
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
				<View style={[styles.tabContent, {backgroundColor: '#21551C'}]}>
					<Text style={styles.tabText}>re-renders of the Profile Page</Text>
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

export default HomeTab;
