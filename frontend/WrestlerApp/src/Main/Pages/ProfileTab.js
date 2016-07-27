'use strict'

import React, {
	Component,
	PixelRatio,
	StyleSheet,
	TabBarIOS,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import Styles from '../../Base/Util/Styles';
import UserImages from '../../User/Components/UserImages';
import ProfileSummary from '../../User/Components/ProfileSummary';

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
						<Text style={styles.userName}>{this.props.user.data.fname}</Text>
					</View>
					<View style={styles.contentWrapper}>
						<ProfileSummary
							user={this.props.user}
							/>
					</View>
				</View>
	        </TabBarIOS.Item>
	    );
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerWrapper: {
		height: 60,
		justifyContent: 'flex-end',
		backgroundColor: '#CCCCCC',
    },
	userName: {
		alignSelf: 'center',
		padding: Styles.smallGutter,
	},
	contentWrapper: {
		flex: 1,
	},
});

ProfileTab.propTypes = {
	setSelectedTabCb : React.PropTypes.func,
	user             : React.PropTypes.object,
	route            : React.PropTypes.object,
	selected         : React.PropTypes.string,
};

export default ProfileTab;
