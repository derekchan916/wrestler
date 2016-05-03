'use strict'

import React, {
	Component,
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native';

var FB_PHOTO_WIDTH = 200;

class FBImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: null
		}
	};
	propTypes: {
		user: React.PropTypes.object.isRequired,
	};
	componentWillMount() {
		var _this = this;
		var user = this.props.user;
		var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;
		console.log(`https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`)
		//For user information
		// var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;
		// var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=first_name,last_name,email&access_token=${user.token}`;

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
	};
	render() {
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

	};
	renderLoading() {
		return (
			<View>
			<Text>Loading...</Text>
			</View>
		);
	};
};

var styles = StyleSheet.create({
	bottomBump: {
		marginBottom: 15,
  },
});

module.exports = FBImage;
