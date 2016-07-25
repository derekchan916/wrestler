'use strict';

const initialState = {
	loading : false,
	data    : null,
	error   : null
}

export default function matchReducer (state = initialState, action) {
	switch (action.type) {
		case getUserMatchesAction.ACTION:
			return {
				...state,
				loading: null,
				error: null
			};
		case getUserMatchesAction.ACTION_COMPLETE:
			return {
				...state,
				loading: false,
				data: action.data,
				error: null
			};
		case getUserMatchesAction.ACTION_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
}
