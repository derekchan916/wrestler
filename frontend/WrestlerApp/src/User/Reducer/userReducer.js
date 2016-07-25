'use strict';

import getFbUserAction from '../ActionCreator/getFbUserAction';
import setUserAction from '../ActionCreator/setUserAction';

const initialState = {
	loading : false,
	data    : null,
	error   : null,
};

export default function userReducer (state = initialState, action) {
	switch (action.type) {
		//Fb login
		case getFbUserAction.ACTION:
			return {
				...state,
				loading: true,
				error: null
			};
		case getFbUserAction.ACTION_COMPLETE:
			return {
				...state,
				loading: false,
				data: action.data,
				error: null
			};
		case getFbUserAction.ACTION_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case setUserAction.ACTION:
			return {
				...state,
				data: action.user
			}
		default:
			return state;

	}
}
