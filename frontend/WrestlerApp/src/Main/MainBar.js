'use strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';

import ProfileTab from './Pages/ProfileTab';
import ChatTab from './Pages/ChatTab';
import MatchTab from './Pages/MatchTab';
import Icon from 'react-native-vector-icons/Ionicons';

class MainBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'Profile',
			loadMatchData: false,
		}
	}

	componentWillMount() {
    // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
		// Icon.getImageSource('ios-gear', 30).then((source) => this.setState({ gearIcon: source }));
	}

	setSelectedTabCb(tab) {
		this.setState({
			selected: tab,
		});
	}

	render() {
	    return (
			<TabBarIOS
				tintColor='white'
				barTintColor='#333333'>
				<ProfileTab
					user={this.props.user}
					selected={this.state.selected}
					route={this.props.route}
					navigator={this.props.navigator}
					setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
					/>
				<ChatTab
					selected={this.state.selected}
					setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
					/>
				<MatchTab
					selected={this.state.selected}
					loadMatchData={this.state.loadMatchData}
					setSelectedTabCb={(tab) => this.setSelectedTabCb(tab)}
					onPress={() => this.onMatchTabPress()}
					/>
			</TabBarIOS>
	    );
	}

	onMatchTabPress() {
		this.setState({ loadMatchData: true });
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

MainBar.propTypes = {
	user  : React.PropTypes.object,
	route : React.PropTypes.object,
}

export default connect (
	state => ({
		user: state.user
	})
)(MainBar) || MainBar;
