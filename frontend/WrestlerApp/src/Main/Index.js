'use strict'

import React, {
	AsyncStorage,
	Component,
	Navigator,
	StyleSheet,
	View,
} from 'react-native';
import { connect } from 'react-redux';

// import Welcome from '../Authentication/Components/Welcome';
import setUserAction from '../User/ActionCreator/setUserAction';
import loadingModalDecorator from '../Base/Decorator/loadingModalDecorator';
import MainBar from './MainBar';
import SignIn from '../User/Components/SignIn';

// @loadingDecorator
var ROUTES = {
	SignIn  : SignIn,
	// Welcome : Welcome,
	MainBar : MainBar
}

class MainClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}

	componentDidMount() {
	    // AsyncStorage.getItem('user').then((value) => {
		// 	value = JSON.parse(value) || null;
		// 	this.props.setUser(value);
		// 	this.toggleLoading();
	    // }).done();
	}

	render() {
		// if (this.state.loading) {
		// 	return null;
		// }
		// var initialRoute = this.props.user.data ? 'MainBar' : 'SignIn';
		var initialRoute = 'MainBar'

		return (
			<Navigator
				initialRoute={{name: initialRoute}}
				renderScene={(route, navigator) => this.renderScene(route, navigator)}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				style={styles.container}
			/>
		);
	}

	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return (
			<Component
				route={route}
				navigator={navigator}
			/>
		);
	}

	toggleLoading() {
		this.setState({ loading: !this.state.loading })
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

// export default connect(
// 	state => ({
// 		user: state.user
// 	}),
// 	dispatch => ({
// 		setUser: user => dispatch(setUserAction(user))
// 	})
// )(MainClass);
// )(loadingModalDecorator(MainClass));
var MainClassComponent = loadingModalDecorator(MainClass) || MainClass;
export default MainClassComponent;
