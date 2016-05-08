'use strict'

import React, {
	AsyncStorage,
	Component,
	Navigator,
	StyleSheet,
	View,
} from 'react-native';
import MainBar from './Home/Components/MainBar';
import SignIn from './Authentication/Components/SignIn';
import Welcome from './Authentication/Components/Welcome';

var ROUTES = {
	SignIn  : SignIn,
	Welcome : Welcome,
	MainBar : MainBar
}

class MainClass extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			loading: true,
		};
	};

	componentDidMount() {
	    AsyncStorage.getItem('user').then((value) => {
			value = JSON.parse(value) || null;
	        this.setState({
				user: value,
				loading: false
			})
	    }).done();
	};

	render() {
		if (this.state.loading) {return (<View></View>)}
		var initialRoute = this.state.user ? 'MainBar' : 'SignIn';

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
