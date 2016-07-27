'user strict'

import React, {
	Component,
	PropTypes,
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
		this.state = {
			matches: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('GEGEGEG');
		if (!this.state.matches && !nextProps.match.loading) {
			this.setState({
				matches: nextProps.match.data
			});
			console.log(this.state.matches)
		}
	}

	getMatches(props) {
		props.getUserMatchesAction({
			userId: props.user.data.id,
			count: 3,
		});
	}

	render() {
	    return (
	        <TabBarIOS.Item
				title={TabName}
				selected={this.props.selected === TabName}
				onPress={() => this.onMatchTabPress()}>
				<View style={[styles.tabContent, {backgroundColor: '#21551C'}]}>
					<Text style={styles.tabText}>re-renders of the Match Page</Text>
				</View>
	        </TabBarIOS.Item>
	    );
	}

	onMatchTabPress() {
		this.props.setSelectedTabCb(TabName);
		this.getMatches(this.props);
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
    tabText: {
      color: 'white',
      margin: 50,
    },
})

MatchTab.propTypes = {
	selected      : PropTypes.string,
	loadMatchData : PropTypes.bool,
}

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
