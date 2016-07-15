'use strict'

function request (url, data) {
	return fetch(url, data);
};

function formatQuery (obj) {
	return Object.keys(obj)
		.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
		.join('&')
};

function generateQuery (query) {
	return {
		...(query || {})
	};
};

function generateData ({method, headers, body, generator}) {
	var authToken = generator && generator();
	var data = {
		method: method || 'get',
		headers: {
			...(headers   || {}),
			...(authToken || {}),
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};

	if (body) {
		data.body = JSON.stringify(body);
	}

	return data;
};

function parseResponse (response) {
	var body = response.json();
	if (response.status >= 200 && response.status < 300) {
		return body;
	} else {
		return body.then(error => {
			throw error;
		});
	}
};

class BaseApi {
	static fetch ({url, query, method, headers, body}) {
		var qs = query ? `?${formatQuery(generateQuery(query))}` : '';
		var data = generateData({
			method,
			headers,
			body,
		});
		url = `${url}${qs}`;

		return request(url, data)
			.then(parseResponse);
	};
};

export default BaseApi;
