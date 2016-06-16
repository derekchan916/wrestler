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
import loaderDecorator from '../Base/Decorator/loaderDecorator';
import MainBar from './MainBar';
import SignIn from '../User/Components/Authentication/SignIn';
import EditProfile from '../User/Components/EditProfile';

const ROUTES = {
	SignIn      : SignIn,
	// Welcome : Welcome,
	MainBar     : MainBar,
	EditProfile : EditProfile
}

class MainClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}

	componentDidMount() {
	    AsyncStorage.getItem('user').then((value) => {
			value = JSON.parse(value) || null;
			this.props.setUser(value); //Toggle this to not have async user data
			this.toggleLoading();
	    }).done();
	}

	render() {
		if (this.state.loading) {
			return null;
		}
		var initialRoute = this.props.user.data ? 'MainBar' : 'SignIn';

		return (
			<Navigator
				initialRoute={{name: initialRoute}}
				renderScene={(route, navigator) => this.renderScene(route, navigator)}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
				style={styles.container}/>
		);
	}

	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return (
			<Component
				route={route}
				navigator={navigator}/>
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

var MainClassComponent;

MainClassComponent = loaderDecorator(MainClass) || MainClass;
MainClassComponent = connect (
	state => ({
		user: state.user
	}),
	dispatch => ({
		setUser: user => dispatch(setUserAction(user))
	})
)(MainClassComponent) || MainClassComponent;

export default MainClassComponent;
