import getUserAction from '../ActionCreator/getAction';

const initialState = {
	loading: false,
	data:    null,
	error:   null,
};

export default function userReducer (state = initialState, action) {
	switch (action.type) {

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

		default:
			return state;

	}
}
