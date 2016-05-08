'user strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';
import ProfileTab from './Tabs/ProfileTab';
import ChatTab from './Tabs/ChatTab';
import HomeTab from './Tabs/HomeTab';

class MainBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'Chat',
		}
	};

	  _renderContent(color: string, pageText: string, num?: number) {
	    return (
	      <View style={[styles.tabContent, {backgroundColor: color}]}>
	        <Text style={styles.tabText}>{pageText}</Text>
	        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
	      </View>
	    );
	};

	setSelectedTabCb(tab) {
		this.setState({
			selected: tab
		});
	};

	render() {
	    return (
	      <TabBarIOS
	        tintColor='white'
	        barTintColor='#333333'>
			<ProfileTab
				selected={this.state.selected}
				setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
				/>
			<ChatTab
				selected={this.state.selected}
				setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
				/>
			<HomeTab
				selected={this.state.selected}
				setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
				/>
	      </TabBarIOS>
	    );
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

module.exports = MainBar;
