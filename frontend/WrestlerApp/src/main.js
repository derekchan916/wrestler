'use strict'

import React, {
	Component,
	Navigator,
	StyleSheet,
} from 'react-native';
import SignIn from './Authentication/Components/SignIn';
import Welcome from './Authentication/Components/Welcome';
import Home from './Home/Home';

var ROUTES = {
	SignIn  : SignIn,
	Welcome : Welcome,
	Home    : Home
}

class MainClass extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		};
	};

	render() {
		var initialRoute = this.state.user ? 'Welcome' : 'SignIn';

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
				user={this.state.user}
				setUserCb={(data) => this.setUserCb(data)}
				/>
		);
	};

	setUserCb(data) {
		this.setState({
		 	user: data
		})
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

module.exports = MainClass;
