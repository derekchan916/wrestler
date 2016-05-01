import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FBImage from '../common/image/facebook';

class Home extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View style={styles.container}>
				{ this.props.user && <FBImage user={this.props.user} /> }
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
})

module.exports = Home;
