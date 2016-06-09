'user strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';
import ProfileTab from './Pages/ProfileTab';
import ChatTab from './Pages/ChatTab';
import HomeTab from './Pages/HomeTab';
import Icon from 'react-native-vector-icons/Ionicons';

class MainBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'Chat',
		}
	}

	componentWillMount() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
		// Icon.getImageSource('ios-gear', 30).then((source) => this.setState({ gearIcon: source }));
	}

	setSelectedTabCb(tab) {
		this.setState({
			selected: tab
		});
	}

	render() {
	    return (
			<TabBarIOS
				tintColor='white'
				barTintColor='#333333'>
				<ProfileTab
					selected={this.state.selected}
					route={this.props.route}
					navigator={this.props.navigator}
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
	}
};

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
});

export default MainBar;
