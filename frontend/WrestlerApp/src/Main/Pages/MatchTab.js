'user strict'

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';

import getUserMatchesAction from '../../Match/ActionCreator/getUserMatchesAction';
import beginLoadingAction from '../../Base/ActionCreator/beginLoadingAction';
import stopLoadingAction from '../../Base/ActionCreator/stopLoadingAction';

const TabName = "Match";

class MatchTab extends Component {
	constructor(props) {
		super(props);
	};

	componentWillMount() {
		this.getMatches(this.props);
	};

	getMatches(props) {
		// props.getUserMatchesAction({
		// 	count: 1,
		//
		// });
		console.log(props);
	};

	render() {
	    return (
	        <TabBarIOS.Item
				title={TabName}
				selected={this.props.selected === TabName}
				onPress={() => {this.props.setSelectedTabCb(TabName)}}>
				<View style={[styles.tabContent, {backgroundColor: '#21551C'}]}>
					<Text style={styles.tabText}>re-renders of the Match Page</Text>
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

export default connect (
	state => ({
		loader: state.loader,
		user: state.user,
		match: state.match,
	}),
	dispatch => ({
		getUserMatchesAction: options => dispatch(getUserMatchesAction(options)),
		beginLoading: options => dispatch(beginLoadingAction()),
		stopLoading: options => dispatch(stopLoadingAction())
	})
)(MatchTab);
