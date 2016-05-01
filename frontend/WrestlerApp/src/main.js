import React, {
  Component,
  Navigator,
  StyleSheet,
} from 'react-native';
import SignIn from './authentication/signin';
import SignUp from './authentication/signup';
import Home from './home/home';

var ROUTES = {
	signin  : SignIn,
	signup  : SignUp,
	home    : Home
}

class MainClass extends Component {
	// componentWillMount() {
	//
	// }
	render() {
		return (
			<Navigator
				initialRoute={{name: 'signin'}}
				renderScene={(route, navigator) => this.renderScene(route, navigator)}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				style={styles.container}
				/>
		);
	}
	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

})

module.exports = MainClass;
