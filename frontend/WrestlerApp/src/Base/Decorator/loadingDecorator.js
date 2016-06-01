'use strict'

import React, {
	Component,
	StyleSheet,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function (Component) {

	class loadingWrapper extends Component {
		render() {
			return (
				<View>
					<Component {...this.props} />
					{this.renderLoading()}
				</View>
			)
		};

		renderLoading() {
			return (
				<View>
					BLEHBLEH
				</View>
			)
		}
	}
}
