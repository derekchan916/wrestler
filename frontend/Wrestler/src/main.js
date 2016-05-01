'use strict'

import React, {
  Component,
  Navigator,
  StyleSheet,
  Text,
} from 'react-native';
import SignIn from './authentication/signin';
import SignUp from './authentication/signup';
import Home from './home/home';

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
	setUserCallback(data) {
		this.setState({user:data})
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
	}
	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component
					route={route}
					navigator={navigator}
					user={this.state.user}
					setUserCallback={(data) => this.setUserCallback(data)}/>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

})

module.exports = MainClass;
