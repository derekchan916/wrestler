'use strict'

import beginLoading from '../ActionCreator/beginLoadingAction';
import stopLoading from '../ActionCreator/stopLoadingAction';

const initialState = {
	showLoadingModal: false,
};

export default function loadingModalReducer (state = initialState, action) {
	switch (action.type) {
		case beginLoading.ACTION:
			return {
				...state,
				showLoadingModal: true
			};
		case stopLoading.ACTION:
			return {
				...state,
				showLoadingModal: false
			};
		default:
			return state;

	}
}
