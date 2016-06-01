'use strict'

import getUserAction from '../ActionCreator/getUserAction';
import getFbUserAction from '../ActionCreator/getFbUserAction';

const initialState = {
	loading: false,
	data:    null,
	error:   null,
};

export default function userReducer (state = initialState, action) {
	switch (action.type) {
		//Log in through Async ID
		case getUserAction.ACTION:
			return {
				...state,
				loading: true,
				error: null
			};
		case getUserAction.ACTION_COMPLETE:
			return {
				...state,
				loading: false,
				data: action.data,
				error: null
			};
		case getUserAction.ACTION_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};

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
		default:
			return state;

	}
}
