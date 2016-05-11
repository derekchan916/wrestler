export default function asyncActionCreator (options) {

	var ACTION          = options.name;
	var ACTION_COMPLETE = options.name+'_COMPLETE';
	var ACTION_FAILED   = options.name+'_FAILED';

	function loadActionCreator () {
		var params = [].slice.call(arguments);
		return {
			type: ACTION,
			params,
		};
	}

	function loadSuccessActionCreator (data) {
		return {
			type: ACTION_COMPLETE,
			data,
		};
	}

	function loadFailActionCreator (error) {
		return {
			type: ACTION_FAILED,
			error,
		};
	}

	function fetch () {
		var args = [].slice.call(arguments);
		return (dispatch, getState) => {
			dispatch(loadActionCreator.apply(null, args));
			options.action.apply(null, args)
				.then (data  => dispatch(loadSuccessActionCreator(data)))
				.catch(error => dispatch(loadFailActionCreator   (error)));
		};
	}

	fetch.ACTION          = ACTION;
	fetch.ACTION_COMPLETE = ACTION_COMPLETE;
	fetch.ACTION_FAILED   = ACTION_FAILED;

	return fetch;

};
