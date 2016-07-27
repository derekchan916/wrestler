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

import MatchList from '../../Match/Components/MatchList';

const TabName = "Match";

class MatchTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (!this.state.matches && !nextProps.match.loading && nextProps.match.data) {
			this.setState({
				matches: nextProps.match.data
			});
			this.props.stopLoading();
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
				<View style={[styles.tabContent]}>
					<MatchList />
				</View>
	        </TabBarIOS.Item>
	    );
	}

	onMatchTabPress() {
		this.getMatches(this.props);
		this.props.setSelectedTabCb(TabName);
		if (!this.state.matches) {
			this.props.beginLoading();
		}
	}
}

const styles = StyleSheet.create({
	tabContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'blue',
		borderWidth: 5,
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
