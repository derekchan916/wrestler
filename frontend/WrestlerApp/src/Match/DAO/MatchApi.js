'use strict'

import BaseApi from '../../Base/Util/BaseApi';

const LOCAL_API = 'http://localhost:3000/api';

class MatchApi {
	static getUserMatches(options) {
		var apiEndpoint = 'match'

		return BaseApi.fetch({
			url: `${LOCAL_API}/${apiEndpoint}/${options.userId}`,
			method: 'GET',
			query: {
				count: options.count,
			},
		})
		.then(data => data)
		.catch((error) => {
			console.warn('MatchApi.getUserMatches', error)
		})
	}
};

export default MatchApi;
