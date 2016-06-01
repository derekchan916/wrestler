'use strict'

import React, {
	AsyncStorage,
	Component,
	Navigator,
	StyleSheet,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBar from './MainBar';
import SignIn from '../User/Components/SignIn';
// import Welcome from '../Authentication/Components/Welcome';
import loadingDecorator from '../Base/Decorator/loadingDecorator';

// @loadingDecorator
var ROUTES = {
	SignIn  : SignIn,
	// Welcome : Welcome,
	MainBar : MainBar
}

class MainClass extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
		};
	};

	componentDidMount() {
	    // AsyncStorage.getItem('user').then((value) => {
		// 	value = JSON.parse(value) || null;
	    //     this.setState({
		// 		user: value,
		// 		loading: false
		// 	})
	    // }).done();
	};

	render() {
		// if (this.state.loading) {return (<View></View>)}
		var initialRoute = this.props.user.data ? 'MainBar' : 'SignIn';

		return (
			<Navigator
				initialRoute={{name: initialRoute}}
				renderScene={(route, navigator) => this.renderScene(route, navigator)}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				style={styles.container}
			/>
		);
	};

	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return (
			<Component
				route={route}
				navigator={navigator}
			/>
		);
	};
}

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return bindActionCreators({
	}, dispatch)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default connect(stateToProps, dispatchToProps)(MainClass);
