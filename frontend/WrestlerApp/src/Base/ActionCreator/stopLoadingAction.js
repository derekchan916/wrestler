const ACTION = 'STOP_LOADING';

function loadActionCreator () {
	return { type: ACTION };
}

function actionCreator () {
	return (dispatch, getState) => dispatch(loadActionCreator());
}

actionCreator.ACTION = ACTION;

export default actionCreator;
