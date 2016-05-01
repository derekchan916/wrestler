// import React, {
//   Component,
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from 'react-native';
// import Button from '../common/button';
//
// class SignIn extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			username: '',
// 			password: '',
// 		};
// 	}
//
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Sign In</Text>
// 				<Text style={styles.label}>Username:</Text>
// 				<TextInput
// 					value={this.state.username}
// 					onChangeText={(text) => this.setState({username: text})}
// 					style={styles.input}/>
//
// 				<Text style={styles.label}>Password:</Text>
// 				<TextInput
// 					value={this.state.pasword}
// 					onChangeText={(text) => this.setState({password: text})}
// 					secureTextEntry = {true}
// 					style={styles.input}/>
//
// 				<Button text={'Sign In'} onPress={() => this.onPress()}/>
// 				<Button text={'I need an account...'} onPress={() => this.onSignUpPress()}/>
// 			</View>
// 		);
// 	}
//
// 	onSignUpPress() {
// 		this.props.navigator.push({name: 'signup'});
// 	}
//
// 	onPress() {
// 		this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);
// 		// Parse.User.logIn(this.state.username, this.state.password, {
// 		// 	success: (user) => {this.setState({username: user.username, password: user.password})},
// 		// 	error: (data, error) => {console.log(data, error);}
// 		// });
// 	}
// }
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	input: {
// 		padding: 4,
// 		height: 40,
// 		borderColor: 'gray',
// 		borderWidth: 1,
// 		borderRadius: 5,
// 		margin: 5,
// 		width: 200,
// 		alignSelf: 'center'
// 	},
// 	label: {
// 		fontSize: 18,
// 	}
// })
'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import _ from 'lodash';
import FBLogin from 'react-native-facebook-login';
var FBLoginManager = require('NativeModules').FBLoginManager;

var FB_PHOTO_WIDTH = 200;

var SignIn = React.createClass({
  getInitialState: function(){
    return {
      user: null,
    };
  },

  render: function() {
    var _this = this;
    var user = this.state.user;
	var testing = 'oogabooga';

    return (
		<View style={styles.loginContainer}>
			{ user && <Photo user={user} /> }
	        { user && <Info user={user} /> }
			<Text>{testing}</Text>
			<Text>{ user ? user.token : "N/A" }</Text>
		</View>
    );
  }
});

var Photo = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      photo: null,
    };
  },

  componentWillMount: function(){
    var _this = this;
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          photo : {
            url : responseData.data.url,
            height: responseData.data.height,
            width: responseData.data.width,
          },
        });
      })
      .done();
  },

  render: function(){
    if(this.state.photo == null) return this.renderLoading();

    var photo = this.state.photo;

    return (
      <View style={styles.bottomBump}>

        <Image
          style={photo &&
            {
              height: photo.height,
              width: photo.width,
            }
          }
          source={{uri: photo && photo.url}}
        />
      </View>
    );
  },
  renderLoading: function(){
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
});

var Info = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      info: null,
    };
  },

  componentWillMount: function(){
    var _this = this;
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          info : {
            name : responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  },

  render: function(){
    var info = this.state.info;

    return (
      <View style={styles.bottomBump}>
        <Text>{ info && this.props.user.userId }</Text>
        <Text>{ info && info.name }</Text>
        <Text>{ info && info.email }</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  loginContainer: {
    marginTop: 150,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBump: {
    marginBottom: 15,
  },
});

module.exports = SignIn;
