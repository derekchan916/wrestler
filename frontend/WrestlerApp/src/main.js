'use strict'

import React, {
	Component,
	Navigator,
	StyleSheet,
} from 'react-native';
import SignIn from './Authentication/Components/signIn';
import Home from './Home/home';

var ROUTES = {
	SignIn  : SignIn,
	Home    : Home
}

class MainClass extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		};
	};
	setUserCb(data) {
		this.setState({
		 	user: data
		})
	};
	render() {
		return (
			<Navigator
				initialRoute={{name: 'SignIn'}}
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

})

module.exports = MainClass;
