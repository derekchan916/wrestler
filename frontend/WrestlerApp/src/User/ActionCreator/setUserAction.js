var ACTION = 'USER_SET';

function loadActionCreator (user) {
	return {
		type: ACTION,
		user: user
	};
}

function actionCreator (user) {
	return (dispatch, getState) => dispatch(loadActionCreator(user));
}

actionCreator.ACTION = ACTION;

export default actionCreator;
